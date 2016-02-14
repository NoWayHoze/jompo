(ns jompo.core-test
  (:require
   [cljs.test :refer-macros [deftest testing is]]
   [jompo.core :as core]))

(deftest fake-test1
  (testing "fake description"
    (is (= 1 1))))

(defn asure [a b & more]
  (let [equals  (fn equals[a b & more]
                  (if
                     (> (count more) 0)
                     (and
                         (= a b)
                         (equals b (first more) (rest more)))
                     (= a b)))]

  (is (apply equals (concat [a b] more)))))
(deftest foo1-test
  (testing "foo-test"
  (asure 1 1) ))



(def o2d (new core/new-class :z 0 :x 10 :y 0
                        :foovector []
                        :foo "foo" :bar "bar" :foobar= (fn[this]
                                                 (str (this :foo) (this :bar)))
                        :left!! (fn [this step]
                                         (this :x! (- (this :x) step)))
                         :right!! (fn [ & { :keys [this om step x] :as all }]
                                ;"jihaa"
                                  (core/state! this :x (+ (this :x) step))
                                  )))


(keys (o2d :members))

(map #(contains? (o2d :members) %) '(:x :y))



(o2d :x 10 :y 15 )

(def location (o2d :x 10 :y 15 :z 100))
 (location :foobar=)

 (location :doc)
(deftest foobar2-test
  (testing "foobar2 description"
  (asure (location :foobar=)  "foobar")))


(= (location :foobar=)  "foobar")

(location :x)

(def movable1 (new core/new-class :speed 10 :location-om location))

(def movable2 (new core/new-class :speed 20 :location-om location))

(def rabbit1 (movable1 :speed 10))


(def rabbit2 (new movable2 :speed 20))

(rabbit1 :speed! 15)


(rabbit1 :speed)
(rabbit2 :speed)

;(location :speed)

(rabbit1 :location-om :x)

;(location :left! 10)

(location :left!! 20)
;((:location-om (rabbit :om)) :right! :step 10)


(rabbit1 :location-om :x)
(def class1 (core/new-class :x 10 :y 11 :z 100))
(def class2 (core/new-class :x 20 :y 21 :z 200))

(def class3 (core/extend class2 :foo "bar"))
(def inst31 (class3 :foo "bar3"))

(inst31 :foo)

(def inst11 (class1 :x 11 :y 110))
(def inst12 (class1 :x 12 :y 120))

(inst11 :x)
inst11

(def inst21 (class2 :x 21 :y 210))
(def inst22 (class2 :x 22 :y 22))



(deftest foo-test
  (is (= (inst11 :x) 11))
  (is (= (inst12 :x) 12))
  (is (= (inst12 :z) 100)))


(let[ {:keys [z] :as all } inst12] (:z all))

(class1 :fk)

(inst21 :x)
(inst22 :x)


(= (inst11 :z) 10)

(rabbit1 :location-om :x)
(location :x)
;(location :right! :step 10)

 (location :left!! 10 )

(deftest fake-test
  (testing "fake description"
    (is (= (location :x) -10 ))
    (is (= (location :x! 20)))
    (is (= (location :x) 20 )))
    (is (= (core/state! location :x 30)))
    (is (= (location :x) 30 ))
    (is (= (location :left!! 10 )))
    (is (= (location :x) 20 ))
    (is (= (rabbit1 :location-om :left!! 20)))
    (is (= (rabbit1 :location-om :x) 0 )))





