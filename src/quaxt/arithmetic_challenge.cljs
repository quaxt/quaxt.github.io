(ns ^:figwheel-hooks quaxt.arithmetic-challenge
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [clojure.string :as str]))

(println "Hello world!")

(defonce timer (r/atom (js/Date.)))

(defonce font-size (r/atom 12))

(defonce time-color (r/atom "#f34"))

(defonce time-updater (js/setInterval #(reset! timer (js/Date.)) 1000))

(defn ask [op x y font-size]
  [:div
   {:style {:font-size (str font-size "vh")}}
   x op op y])

(defn clock []
  (let [time-str (-> @timer .toTimeString (str/split " ") first)]
    [:div.example-clock
     {:style {:color @time-color}}
     time-str]))

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

(rdom/render [simple-example] (js/document.getElementById "app"))
