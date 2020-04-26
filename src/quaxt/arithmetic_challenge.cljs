(ns ^:figwheel-hooks quaxt.arithmetic-challenge
  (:require
   [clojure.string :as str]
   [goog.dom :as gdom]
   [reagent.core :as r]
   [clojure.edn :as edn]))

(set! *warn-on-infer* true)

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
   {:style {:font-size "20vh"}}
   x op y "=" user-answer "\u25AE"])

(defn type-key[text]
  (swap! app-state update :user-answer str text))

(defn keypad-key[text map]
  [:button
   (assoc (update map :style merge {:font-size "10vh"
                                    :width "100%"})
          :on-click #(type-key text))
   text])

(defn type-backspace[]
  (swap! app-state
         update
         :user-answer
         (fn[string]
           (subs string 0 (- (count string) 1)))))

(defn backspace-key[]
  [:button {:style {:font-size "10vh" :width "100%"}
            :on-click type-backspace}
   "\u232B"])

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
    (println difficulty-table)
    (swap! app-state assoc :difficulty difficulty-table)
    (set-local-storage "difficulty" difficulty-table)))

(defn type-enter[]
  (let [{:keys [user-answer quiz results start-time]} @app-state]
    (if (first quiz)
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
               :start-time (now)))
      (start-new-quiz quiz-length))))

(defn enter-key[font-size]
  [:button {:style {:font-size (or font-size "10vh") :width "100%"}
  #=          :on-click type-enter}
   "\u23CE"])

(defn keypad[]
  [:table
   {:style {:width"100vw"}}
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
        style {:style {:font-size "7vh"}}]
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
      [:div
       [ask question user-answer]
       [keypad]]
      [results-div])))

(defn mount [el]
  (r/render-component [quiz-app] el))

(defn get-app-element []
  (.getElementById ^js/Document (gdom/getDocument) "app"))

(defn mount-app-element []
  (println "start")
  (let [el (get-app-element)]
    (println el)
    (mount el)
    (println "done")))

(defn key-listener[^js/KeyboardEvent key-event]
  (let [key (.-key key-event)]
    (cond
      (#{"0" "1" "2" "3" "4" "5" "6" "7" "8" "9"} key) (type-key key)
      (= key "Backspace") (type-backspace)
      (= key "Enter") (type-enter))))

(defn add-key-listener []
  (println "akl")
    (.addEventListener ^js/Document (gdom/getDocument) "keydown" key-listener))

(defn load-listener[x]
  (mount-app-element)
  (println "loaded"))

(defn add-load-listerner[]
  (println "onload")
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
