(ns jompo.core
    (:require [reagent.core :as reagent]))

(defonce app-state (reagent/atom {:text "Hello, what is your name? "}))

(defn page []
  [:div (@app-state :text) "FIXME"])

(defn  main []
  (reagent/render [page]
                  (.getElementById js/document "app")))

(defn jompo?[x]
    (let[y (str x)]
      (and
         (= (.toLowerCase y) y)
         (> (.indexOf (str x) "-om") 0))))

(jompo? :foo)


(defn setter?[x]
    (let[y (str x)]
      (and
         (= (.toLowerCase y) y)
         (= (.indexOf y "!") (- (.-length y ) 1)))))

(defn adder?[x]
    (let[y (str x)]
      (and
         (= (.toLowerCase y) y)
         (= (.indexOf (str x) "+") (- (.-length (str x) ) 1)))))
(defn remover?[x]
    (let[y (str x)]
      (and
         (= (.toLowerCase y) y)
         (= (.indexOf (str x) "-") (- (.-length (str x) ) 1)))))

(defn side-effect?[x]
    (let[y (str x)]
      (and
         (= (.toLowerCase y) y)
         (= (.indexOf (str x) "!!") (- (.-length (str x) ) 2)))))
(defn pure-fn?[x]
    (let[y (str x)]
      (and
         (= (.toLowerCase y) y)
         (= (.indexOf (str x) "=") (- (.-length (str x) ) 1)))))

(defn inc-fn?[x]
    (let[y (str x)]
      (and
         (= (.toLowerCase y) y)
         (= (.indexOf (str x) "+=") (- (.-length (str x) ) 2)))))
(defn dec-fn?[x]
    (let[y (str x)]
      (and
         (= (.toLowerCase y) y)
         (= (.indexOf (str x) "-=") (- (.-length (str x) ) 2)))))

(side-effect? :foo!!)


(defn setter-to-getter[x]
  (-> (str x)
     (.replace  "!" "")
     (.replace  ":" "")
     (keyword )))

(defn getter-to-setter[x]
  (-> (str x)
     (.replace  ":" "")
      (str "!")
     (keyword )))


(defn key-type[my-key]
  (if (jompo? my-key)
      :jompo
      (if (setter? my-key)
        :setter
        (if (pure-fn? my-key)
          :pure-fn
          (if (side-effect? my-key)
             :side-effect
               (if (adder? my-key)
                 :adder
                 (if (remover? my-key)
                   :remover
                   (if (inc-fn? my-key)
                     :inc-fn
                     (if (dec-fn? my-key)
                        :dec-fn
                        :field)))))))))



(defn normalize-op[op]
  (let
    [mod-fns {:jompo (fn[] op)
              :setter setter-to-getter
              :side-effect (fn[] op)
              :pure-fn  (fn[] op)
              :adder #(-> (str %) (.replace  "+" "") (.replace  ":" "") (keyword ))
              :remover #(-> (str %) (.replace  "-" "") (.replace  ":" "") (keyword ))
              :inc-fn  #(-> (str %) (.replace  "+=" "") (.replace  ":" "") (keyword ))
              :dec-fn  #(-> (str %) (.replace  "-=" "") (.replace  ":" "") (keyword ))
              :field (fn[] op)}
     the-type (key-type op)
  ]
  ((the-type mod-fns) op)))

(key-type :y)
(normalize-op :y!)
(getter-to-setter :foo)
(setter-to-getter :foo!)
(setter? :foo!)







(defn state![this &  {:keys [constructor] :as all }]
  (doseq[k  (keys all)]
          (this (getter-to-setter k) (k all))))

(defn new-class [& {:keys [constructor] :as members }]
  (fn class-instance
    ([fk] members)
    ([ a b & {:keys [constructor] :as init-par }]
    (let[
         par-check-fn (let[check-map
                             (into {}
                                   (for[k (keys members)]
                                     {k true}))]
                        (fn[check-key]
                           (check-key check-map)))
         par-check    (doseq [k (keys init-par)]
                       (if
                           (par-check-fn k)
                           true
                           (throw (js/Error. "unknown member init"))))

         total-par (assoc (into members init-par) a b)
         middle-class (fn[]
                       (this-as this
                         (doseq[k  (keys total-par)]
                         (aset  this k (k total-par)))
                         this))
         ]
      (let[mc (new middle-class)]
          (fn member-call
            ([my-key]
               (case my-key
                     :mc mc
                     :doc members
               (let [my-key-type (key-type my-key)
                     norm-key (normalize-op my-key)
                     param-check (if
                                    (par-check-fn norm-key)
                                     true
                                    (throw (js/Error. (str "unknown member call : " my-key))))
                     operandi (aget mc norm-key)]
                 (case my-key-type
                   :jompo operandi
                   :setter (throw (js/Error. "calling setter without parameter"))
                   :side-effect  (operandi member-call)
                   :pure-fn  (apply operandi (concat [member-call]))
                   :adder (throw (js/Error. "calling adder without parameter"))
                   :remover (aset mc norm-key (pop operandi))
                   :inc-fn (aset mc norm-key (inc operandi))
                   :dec-fn (aset mc norm-key (dec operandi))
                   :field operandi) )))
              ([my-key sec-par & stuff]
                 (let [my-key-type (key-type my-key)
                          norm-key (normalize-op my-key)
                          param-check (if
                                    (par-check-fn norm-key)
                                     true
                                    (throw (js/Error. (str "unknown member call :" my-key))))
                          operandi (aget mc norm-key)] ; if null, only choice is in setter
                    (case my-key-type
                   :jompo (apply operandi (concat [sec-par] stuff))
                   :setter (aset mc norm-key sec-par)
                   :side-effect  (apply operandi (concat [member-call sec-par] stuff))
                   :pure-fn   (apply operandi (concat [member-call sec-par] stuff))
                   :adder (aset mc norm-key (assoc operandi (count operandi) sec-par))
                   :remover (aset mc norm-key (vec (remove operandi #{sec-par}))
                   :inc-fn  (aset mc norm-key (+ operandi sec-par))
                   :dec-fn  (aset mc norm-key (- operandi sec-par))))))))))))


(defn extend [super-class & {:keys [constructor] :as members } ]
  (if-let [ok (apply distinct? (into (keys (super-class :members))
                                     (keys members )))  ]
    (let[old-members (super-class :mc)]
      (apply new-class (reduce concat (vec (into old-members members)))))
    (throw (js/Error. "extend conflict at least one field"))
    ))

(defn override [super-class & {:keys [constructor] :as members } ]
  (if-let [ok (reduce
                 #(and %1 %2)
                 true
                 (map #(contains? (super-class :members) %)
                               (keys members)))  ]
    (let[old-members (super-class :mc)]
     (apply new-class (reduce concat (vec (into old-members members)))))
     (throw (js/Error. "overriding non existent field at least one field" ))))



(defn virtual[this & anything]
  (print (str "virtual not implemented" (this :members))))

;; (defn new-class [& {:keys [constructor] :as members }]
;;   (fn class-instance
;;     ([& {:keys [constructor] :as init-par }]
;;     (let[
;;          total-par (into members init-par)
;;          middle-class (fn[]
;;                        (this-as this
;;                          (doseq[k  (keys total-par)]
;;                          (aset  this k (k total-par)))
;;                          this))
;;          ]
;;       (let[mc (new middle-class)]
;;           (fn member-call
;;             ([my-key]

;;                  (let [operandi (aget mc my-key)]
;;                    (if (and
;;                             (fn? operandi)
;;                             (not (jompo? my-key)))
;;                        (operandi)
;;                        operandi)))
;;               ([my-key sec-par & stuff]
;;                  (if-let [operandi (aget mc my-key)] ; if null, only choice is in setter
;;                    (if (and    ; member function call, not an jompo-object
;;                             (fn? operandi)
;;                             (not (jompo? my-key)))
;;                        (apply operandi (concat [member-call sec-par] stuff))  ;ok call§
;;                        (if ; may be a jompo or property
;;                           (jompo? my-key)
;;                           (apply operandi (concat [sec-par] stuff))  ; we call jompo with him self
;;                           (throw (js/Error. "calling property with parameter")))) ; cant call property with a parameter
;;                    (if
;;                       (try (aget mc (setter-to-getter my-key)) (catch js/Error e nil)) ; we have property with this name
;;                       (aset mc (setter-to-getter my-key) sec-par)
;;                       (throw (js/Error. "unknown member")))))))))))











