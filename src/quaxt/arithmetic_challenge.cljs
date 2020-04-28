(ns ^:figwheel-hooks quaxt.arithmetic-challenge
  (:require
   [clojure.string :as str]
   [reagent.core :as r]
   [clojure.edn :as edn]))

(defonce app-state (r/atom {}))

(defonce quiz-length 10)

(defn all-questions
  []
  (shuffle (concat
            (for [op ["+" "*"]
                  x (range 1 13)
                  y (range 1 13)]
              {:op op :x x :y y})
            (for [y (range 1 13)
                  x (range y (+ y 12))]
              {:op "-" :x x :y y})
            (for [x (range 1 13)
                  y (range 1 13)]
              {:op "/" :x (* x y) :y y}))))

(defn sort-by-difficulty [questions]
  (let [{:keys [difficulty]} @app-state]
    (sort (fn[a b] (compare (difficulty b 1000000) (difficulty a 1000000)))
          questions)))

(defn make-quiz[n]
  (take n (sort-by-difficulty (all-questions))))

(defn now[]
  (.now js/Date))

(defn start-new-quiz[n]
  (swap! app-state assoc
         :quiz (make-quiz n)
         :results []
         :user-answer ""
         :start-time (now)))

(defn question-to-string[{:keys [op x y]} user-answer]
  (let [op ({"*" "\u00D7"
             "/" "\u00F7"
             "+" "+"
             "-" "-"} op)]
    (str x " " op " " y " = " user-answer)))

(defn ask [question user-answer]
  [:div
   {:style {:font-size "14vw"}}
   (question-to-string question user-answer) "\u25AE"])

(defn type-key[text]
  (swap! app-state update :user-answer str text))

(defn key-div[text on-click]
  [:div
   {:style {:height "10vh"}
    }
   
   [:button
    {:style {:height "9vh"
             :font-size "8vh"
             :width "100%"
             :background "#f1f3f4"
             :color "#202124"
             :border "1px solid #f1f3f4"
             :border-radius "4px"
             :cursor "pointer"
             :font-family "arial,sans-serif"
             :text-align "center"                                  
             }
     :on-click on-click}
    text]])

(defn keypad-key[text]
  [key-div text #(type-key text)])

(defn type-backspace[]
  (swap! app-state
         update
         :user-answer
         (fn[string]
           (subs string 0 (- (count string) 1)))))

(defn backspace-key[]
  [key-div "\u232B" type-backspace])

(defn as-int
  [x]
  (if (string? x)
    (js/parseInt x)
    x))

(defn set-local-storage[key-name value]
  (-> (.-localStorage js/window)
      (.setItem key-name value)))

(defn get-local-storage[key-name]
  (-> (.-localStorage js/window)
      (.getItem key-name)))

(def lookup-op
  {"+" +
   "-" -
   "*" *
   "/" /})

(defn right? [{:keys [op x y]} user-answer]
  (= ((lookup-op op) x y) user-answer))

(defn difficulty[{:keys [question time user-answer]}]
  (if (right? question user-answer)
    time
    2000000))

(defn read-difficulty-table-from-local-storage[]
  (let [difficulty-table-string (get-local-storage "difficulty")
        difficulty-table (if difficulty-table-string
                      (edn/read-string difficulty-table-string) {})]
    (swap! app-state assoc :difficulty difficulty-table)))

(defn compute-difficulty-table[results]
  (let [old-results (:difficulty @app-state)
        result-map (into {} (map (fn[result]
                                   (difficulty result)
                                   [(:question result)
                                    (difficulty result)]) results))]
    (merge old-results result-map))
  )

(defn update-difficulty-table[results]
  (let [difficulty-table (compute-difficulty-table results)]
    (swap! app-state assoc :difficulty difficulty-table)))

(defn type-enter[]
  (let [{:keys [user-answer quiz results start-time]} @app-state]
    (if (first quiz)
      (when-not (= user-answer "")
        (let [results (conj results 
                            {:question (first quiz)
                             :time (- (now) start-time)
                             :user-answer (as-int user-answer)})]
          (update-difficulty-table results)
          (swap! app-state
                 assoc
                 :user-answer ""
                 :quiz (rest quiz)
                 :results results
                 :start-time (now))))
      (do
        (set-local-storage "difficulty" (:difficulty @app-state))
        (start-new-quiz quiz-length)))))

(defn enter-key[font-size]
  [key-div "\u23CE" type-enter])

(defn keypad[]
  [:table
   {:style {:width "100%" :table-layout " fixed"}}
   [:tbody
    [:tr [:td [keypad-key "7"]][:td [keypad-key "8"]][:td [keypad-key "9"]]]
    [:tr [:td [keypad-key "4"]][:td [keypad-key "5"]][:td [keypad-key "6"]]]
    [:tr [:td [keypad-key "1"]][:td [keypad-key "2"]][:td [keypad-key "3"]]]
    [:tr [:td [keypad-key "0"]]
     [:td [backspace-key]]
     [:td [enter-key]]]]])

(defn right-or-wrong-td[style question user-answer]
  (let [right (right? question user-answer)]
    (let [s (assoc-in style [:style :color] (if right "#00aa00" "ff0000"))]
      [:td s
       (if right "\u2713" "\u2717")])))

(defn results-div[]
  (let [results (:results @app-state)
        results (sort
                 (fn[x y] (compare 
                           [(not (right? (:question y) (:user-answer y))) (:time y)]
                           [(not (right? (:question x) (:user-answer x))) (:time x)])) results)
        style {:style {:font-size "5vh"}}]
    [:table
     [:tbody      
      (map-indexed
       (fn[index
           {:keys [time user-answer]
            {:keys [op x y]} :question}]
         (let [question {:op op :x x :y y}] ^{:key
                                              index}
           [:tr [:td (assoc-in
                      style [:style :align] "center") (question-to-string question
                                                                 user-answer)]
            
            (right-or-wrong-td style question user-answer)
            [:td (assoc-in style [:style :align] "right") (str  time " ms")]])) results)
      
      [:tr [:td {:col-span "4"} [enter-key "7vh"]]]]]))


(defn progress[]
  (let [difficulty (:difficulty @app-state)
        question-color (fn[question]
                         (let [d (difficulty question 1000000)]
                           (case d
                             1000000 "#ffffff"
                             2000000 "#ff0000"
                             (let [level (* 0.0512 d)]
                               (str "rgb(" level ","
                                    level ","
                                    level ")")))
                           ))]
    [:svg {:view-box "0 0 48 12"
           :width "100%"
           :height "120"
           :preserve-aspect-ratio "none"
           :xmlns "http://www.w3.org/2000/svg"}
     (for [i (range 0 48)
           j (range 0 12)
           :let [op-index (quot i 12)
                 op (["+" "*" "-" "/"] op-index)
                 [x y] [(inc (mod i 12)) (inc j)]
                 [x y] (case op
                         "+" [x y]
                         "*" [x y]
                         "-" [(+ x y) y]
                         "/" [(* x y) y])]]
       ^{:key (str/join " " [i j])}
       [:rect {:x i :y j :width "1" :height "1"
               :fill (question-color {:op op :x x :y y})}])]))

(defn quiz-app []
  (let [{:keys [user-answer quiz]} @app-state
        question (first quiz)]
    [:div {:style {:width "100%"}}
     [:div
      (if question
        [:div {:style {:touch-action "manipulation"}}
         [ask question user-answer]
         [keypad]]
        [results-div])]
     [progress]
     ]))

(defn mount [el]
  (r/render-component [quiz-app] el))

(defn get-app-element []
  (.getElementById js/document "app"))

(defn mount-app-element []
  (mount (get-app-element)))

(defn key-listener[^js/KeyboardEvent key-event]
  (let [key (.-key key-event)]
    (cond
      (#{"0" "1" "2" "3" "4" "5" "6" "7" "8" "9"} key) (type-key key)
      (= key "Backspace") (type-backspace)
      (= key "Enter") (type-enter))))

(defn add-key-listener []
  (.addEventListener js/document "keydown" key-listener))

(defn load-listener[x]
  (mount-app-element))

(defn add-load-listerner[]
  (.addEventListener js/window "load" load-listener))

(defonce setup-stuff
  (do
    (read-difficulty-table-from-local-storage)
    (add-key-listener)
    (add-load-listerner)
    (start-new-quiz quiz-length)
    true))

(defn ^:after-load on-reload []
  (mount-app-element))



