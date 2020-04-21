(ns ^:figwheel-hooks quaxt.arithmetic-challenge
  (:require
   [goog.dom :as gdom]
   [reagent.core :as r]))

(println "This text is printed from src/quaxt/arithmetic_challenge.cljs. Go ahead and edit it and see reloading in action.")

(defonce timer (r/atom (js/Date.)))

(defonce font-size (r/atom 12))

(defonce time-color (r/atom "#f34"))

(defonce time-updater (js/setInterval #(reset! timer (js/Date.)) 1000))

(defn ask [op x y font-size]
  [:div
   {:style {:font-size (str font-size "vh")}}
   x op y])

(defn color-input []
  [:div.color-input
   "Time color: "
   [:input {:type "text"
            :value @time-color
            :on-change #(reset! time-color (-> % .-target .-value))}]])

(defn adjust-size-button [delta text]
  [:button
   {:on-click #(swap! font-size + delta)}
   text])

(defn simple-example []
  [:div
   [ask "*" 12 12 @font-size]
   [adjust-size-button 1 "bigger"]
   [adjust-size-button -1 "smaller"]])

(defn mount [el]
  (r/render-component [simple-example] el))

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
