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
                  x (range 0 13)
                  y (range 0 13)]
              {:op op :x x :y y})
            (for [x (range 0 13)
                  y (range 0 x)]
              {:op "-" :x x :y y})
            (for [x (range 0 13)
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

(defn ask [{:keys [x op y]} user-answer]
  [:div
   {:style {:font-size "17vw"}}
   x op y "=" user-answer "\u25AE"])

(defn type-key[text]
  (swap! app-state update :user-answer str text))

(defn key-div[text on-click]
  [:div
   {:style {:font-size "10vh"
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
    text])

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

(defn right? [op x y user-answer]
  (= ((lookup-op op) x y) user-answer))

(defn difficulty[{:keys [question time user-answer]}]
  (let [{:keys [op x y]} question]
    (if (right? op x y user-answer)
      time
      2000000)))

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

(defn right-or-wrong-td[style op x y user-answer]
  (let [right (right? op x y user-answer)]
    (let [s (assoc-in style [:style :color] (if right "#00aa00" "ff0000"))]
      [:td s
       (if right "\u2713" "\u2717")])))

(defn results-div[]
  (let [results (:results @app-state)
        style {:style {:font-size "5vh"}}]
    [:table
     [:tbody      
      (map-indexed
       (fn[index
           {:keys [time user-answer]
            {:keys [op x y]} :question}]
         ^{:key index} [:tr [:td style x op  y]
                            [:td style "="]
                            [:td style user-answer]
                        (right-or-wrong-td style op x y user-answer)
                        [:td style (str (/ time 1000) " s")]]) results)
      [:tr [:td {:col-span "4"} [enter-key "7vh"]]]]]))

(defn quiz-app []
  (let [{:keys [user-answer quiz]} @app-state
        question (first quiz)]
    (if question
      [:div {:style {:touch-action "manipulation"}}
       [ask question user-answer]
       [keypad]]
      [results-div])))

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
