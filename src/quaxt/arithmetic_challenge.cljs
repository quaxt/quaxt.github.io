(ns ^:figwheel-hooks quaxt.arithmetic-challenge
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r]))

(defonce app-state (r/atom {:user-answer ""}))

(defn ask [op x y user-answer]
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

(defn type-enter[]
  (swap! app-state
         update
         :user-answer
         (fn[string]
           (subs string 0 (- (count string) 1)))))

(defn enter-key[]
  [:button {:style {:font-size "10vh" :width "100%"}
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

(defn simple-example []
  [:div
   [ask "*" 12 12 (:user-answer @app-state)]
   [keypad]])

(defn mount [el]
  (r/render-component [simple-example] el))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(defn key-listener[key-event]
  (let[key (.-key key-event)]
    (cond
      (#{"0" "1" "2" "3" "4" "5" "6" "7" "8" "9"} key) (type-key key)
      (= key "Backspace") (type-backspace)
      (= key "Enter") (type-enter))))

(defn add-key-listener []
  (println "akl")
  (.addEventListener (gdom/getDocument) "keydown" key-listener))

(mount-app-element)
(defonce setup-stuff
  (do (add-key-listener)
      true))

(defn ^:after-load on-reload []
  (mount-app-element))
