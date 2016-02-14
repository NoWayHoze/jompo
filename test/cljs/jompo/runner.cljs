(ns jompo.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [jompo.core-test]))

(doo-tests 'jompo.core-test)
