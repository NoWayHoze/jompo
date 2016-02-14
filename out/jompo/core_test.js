// Compiled by ClojureScript 1.7.170 {}
goog.provide('jompo.core_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('jompo.core');
jompo.core_test.fake_test1 = (function jompo$core_test$fake_test1(){
return cljs.test.test_var.call(null,jompo$core_test$fake_test1.cljs$lang$var);
});
jompo.core_test.fake_test1.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"fake description");

var ret__6036__auto__ = (function (){try{var values__5978__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(1));
var result__5979__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto__);
if(cljs.core.truth_(result__5979__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__5979__auto__;
}catch (e7132){var t__6016__auto__ = e7132;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__6036__auto__;
});

jompo.core_test.fake_test1.cljs$lang$var = new cljs.core.Var(function(){return jompo.core_test.fake_test1;},new cljs.core.Symbol("jompo.core-test","fake-test1","jompo.core-test/fake-test1",-88332224,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jompo.core-test","jompo.core-test",-632681585,null),new cljs.core.Symbol(null,"fake-test1","fake-test1",-651678933,null),"test/cljs/jompo/core_test.cljs",20,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(jompo.core_test.fake_test1)?jompo.core_test.fake_test1.cljs$lang$test:null)]));
jompo.core_test.asure = (function jompo$core_test$asure(var_args){
var args__5534__auto__ = [];
var len__5527__auto___7137 = arguments.length;
var i__5528__auto___7138 = (0);
while(true){
if((i__5528__auto___7138 < len__5527__auto___7137)){
args__5534__auto__.push((arguments[i__5528__auto___7138]));

var G__7139 = (i__5528__auto___7138 + (1));
i__5528__auto___7138 = G__7139;
continue;
} else {
}
break;
}

var argseq__5535__auto__ = ((((2) < args__5534__auto__.length))?(new cljs.core.IndexedSeq(args__5534__auto__.slice((2)),(0))):null);
return jompo.core_test.asure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5535__auto__);
});

jompo.core_test.asure.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var equals = (function() { 
var jompo$core_test$equals__delegate = function (a__$1,b__$1,more__$1){
if((cljs.core.count.call(null,more__$1) > (0))){
var and__4457__auto__ = cljs.core._EQ_.call(null,a__$1,b__$1);
if(and__4457__auto__){
return jompo$core_test$equals.call(null,b__$1,cljs.core.first.call(null,more__$1),cljs.core.rest.call(null,more__$1));
} else {
return and__4457__auto__;
}
} else {
return cljs.core._EQ_.call(null,a__$1,b__$1);
}
};
var jompo$core_test$equals = function (a__$1,b__$1,var_args){
var more__$1 = null;
if (arguments.length > 2) {
var G__7140__i = 0, G__7140__a = new Array(arguments.length -  2);
while (G__7140__i < G__7140__a.length) {G__7140__a[G__7140__i] = arguments[G__7140__i + 2]; ++G__7140__i;}
  more__$1 = new cljs.core.IndexedSeq(G__7140__a,0);
} 
return jompo$core_test$equals__delegate.call(this,a__$1,b__$1,more__$1);};
jompo$core_test$equals.cljs$lang$maxFixedArity = 2;
jompo$core_test$equals.cljs$lang$applyTo = (function (arglist__7141){
var a__$1 = cljs.core.first(arglist__7141);
arglist__7141 = cljs.core.next(arglist__7141);
var b__$1 = cljs.core.first(arglist__7141);
var more__$1 = cljs.core.rest(arglist__7141);
return jompo$core_test$equals__delegate(a__$1,b__$1,more__$1);
});
jompo$core_test$equals.cljs$core$IFn$_invoke$arity$variadic = jompo$core_test$equals__delegate;
return jompo$core_test$equals;
})()
;
try{var values__5978__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null),more)),equals);
var result__5979__auto__ = cljs.core.apply.call(null,cljs.core.apply,values__5978__auto__);
if(cljs.core.truth_(result__5979__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"equals","equals",1177497557,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core.apply,values__5978__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"equals","equals",1177497557,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"apply","apply",-1334050276,null),values__5978__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__5979__auto__;
}catch (e7136){var t__6016__auto__ = e7136;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"equals","equals",1177497557,null),cljs.core.list(new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"a","a",-482876059,null),new cljs.core.Symbol(null,"b","b",-1172211299,null)], null),new cljs.core.Symbol(null,"more","more",-418290273,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

jompo.core_test.asure.cljs$lang$maxFixedArity = (2);

jompo.core_test.asure.cljs$lang$applyTo = (function (seq7133){
var G__7134 = cljs.core.first.call(null,seq7133);
var seq7133__$1 = cljs.core.next.call(null,seq7133);
var G__7135 = cljs.core.first.call(null,seq7133__$1);
var seq7133__$2 = cljs.core.next.call(null,seq7133__$1);
return jompo.core_test.asure.cljs$core$IFn$_invoke$arity$variadic(G__7134,G__7135,seq7133__$2);
});
jompo.core_test.foo1_test = (function jompo$core_test$foo1_test(){
return cljs.test.test_var.call(null,jompo$core_test$foo1_test.cljs$lang$var);
});
jompo.core_test.foo1_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"foo-test");

var ret__6036__auto__ = jompo.core_test.asure.call(null,(1),(1));
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__6036__auto__;
});

jompo.core_test.foo1_test.cljs$lang$var = new cljs.core.Var(function(){return jompo.core_test.foo1_test;},new cljs.core.Symbol("jompo.core-test","foo1-test","jompo.core-test/foo1-test",1694041856,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jompo.core-test","jompo.core-test",-632681585,null),new cljs.core.Symbol(null,"foo1-test","foo1-test",1112344679,null),"test/cljs/jompo/core_test.cljs",19,1,20,20,cljs.core.List.EMPTY,null,(cljs.core.truth_(jompo.core_test.foo1_test)?jompo.core_test.foo1_test.cljs$lang$test:null)]));
jompo.core_test.o2d = (new jompo.core.new_class(new cljs.core.Keyword(null,"z","z",-789527183),(0),new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"foovector","foovector",1947396609),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"foo","foo",1268894036),"foo",new cljs.core.Keyword(null,"bar","bar",-1386246584),"bar",new cljs.core.Keyword(null,"foobar=","foobar=",1307037087),(function (this$){
return [cljs.core.str(this$.call(null,new cljs.core.Keyword(null,"foo","foo",1268894036))),cljs.core.str(this$.call(null,new cljs.core.Keyword(null,"bar","bar",-1386246584)))].join('');
}),new cljs.core.Keyword(null,"left!!","left!!",1073396001),(function (this$,step){
return this$.call(null,new cljs.core.Keyword(null,"x!","x!",962126594),(this$.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) - step));
}),new cljs.core.Keyword(null,"right!!","right!!",1204599639),(function() { 
var G__7145__delegate = function (p__7142){
var map__7143 = p__7142;
var map__7143__$1 = ((((!((map__7143 == null)))?((((map__7143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7143):map__7143);
var all = map__7143__$1;
var this$ = cljs.core.get.call(null,map__7143__$1,new cljs.core.Keyword(null,"this","this",-611633625));
var om = cljs.core.get.call(null,map__7143__$1,new cljs.core.Keyword(null,"om","om",-2019730256));
var step = cljs.core.get.call(null,map__7143__$1,new cljs.core.Keyword(null,"step","step",1288888124));
var x = cljs.core.get.call(null,map__7143__$1,new cljs.core.Keyword(null,"x","x",2099068185));
return jompo.core.state_BANG_.call(null,this$,new cljs.core.Keyword(null,"x","x",2099068185),(this$.call(null,new cljs.core.Keyword(null,"x","x",2099068185)) + step));
};
var G__7145 = function (var_args){
var p__7142 = null;
if (arguments.length > 0) {
var G__7146__i = 0, G__7146__a = new Array(arguments.length -  0);
while (G__7146__i < G__7146__a.length) {G__7146__a[G__7146__i] = arguments[G__7146__i + 0]; ++G__7146__i;}
  p__7142 = new cljs.core.IndexedSeq(G__7146__a,0);
} 
return G__7145__delegate.call(this,p__7142);};
G__7145.cljs$lang$maxFixedArity = 0;
G__7145.cljs$lang$applyTo = (function (arglist__7147){
var p__7142 = cljs.core.seq(arglist__7147);
return G__7145__delegate(p__7142);
});
G__7145.cljs$core$IFn$_invoke$arity$variadic = G__7145__delegate;
return G__7145;
})()
));
cljs.core.keys.call(null,jompo.core_test.o2d.call(null,new cljs.core.Keyword(null,"members","members",159001018)));
cljs.core.map.call(null,(function (p1__7148_SHARP_){
return cljs.core.contains_QMARK_.call(null,jompo.core_test.o2d.call(null,new cljs.core.Keyword(null,"members","members",159001018)),p1__7148_SHARP_);
}),cljs.core.list(new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)));
jompo.core_test.o2d.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(15));
jompo.core_test.location = jompo.core_test.o2d.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(15),new cljs.core.Keyword(null,"z","z",-789527183),(100));
jompo.core_test.location.call(null,new cljs.core.Keyword(null,"foobar=","foobar=",1307037087));
jompo.core_test.location.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891));
jompo.core_test.foobar2_test = (function jompo$core_test$foobar2_test(){
return cljs.test.test_var.call(null,jompo$core_test$foobar2_test.cljs$lang$var);
});
jompo.core_test.foobar2_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"foobar2 description");

var ret__6036__auto__ = jompo.core_test.asure.call(null,jompo.core_test.location.call(null,new cljs.core.Keyword(null,"foobar=","foobar=",1307037087)),"foobar");
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__6036__auto__;
});

jompo.core_test.foobar2_test.cljs$lang$var = new cljs.core.Var(function(){return jompo.core_test.foobar2_test;},new cljs.core.Symbol("jompo.core-test","foobar2-test","jompo.core-test/foobar2-test",-658580847,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jompo.core-test","jompo.core-test",-632681585,null),new cljs.core.Symbol(null,"foobar2-test","foobar2-test",1036704632,null),"test/cljs/jompo/core_test.cljs",22,1,50,50,cljs.core.List.EMPTY,null,(cljs.core.truth_(jompo.core_test.foobar2_test)?jompo.core_test.foobar2_test.cljs$lang$test:null)]));
cljs.core._EQ_.call(null,jompo.core_test.location.call(null,new cljs.core.Keyword(null,"foobar=","foobar=",1307037087)),"foobar");
jompo.core_test.location.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
jompo.core_test.movable1 = (new jompo.core.new_class(new cljs.core.Keyword(null,"speed","speed",1257663751),(10),new cljs.core.Keyword(null,"location-om","location-om",-2467307),jompo.core_test.location));
jompo.core_test.movable2 = (new jompo.core.new_class(new cljs.core.Keyword(null,"speed","speed",1257663751),(20),new cljs.core.Keyword(null,"location-om","location-om",-2467307),jompo.core_test.location));
jompo.core_test.rabbit1 = jompo.core_test.movable1.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751),(10));
jompo.core_test.rabbit2 = (new jompo.core_test.movable2(new cljs.core.Keyword(null,"speed","speed",1257663751),(20)));
jompo.core_test.rabbit1.call(null,new cljs.core.Keyword(null,"speed!","speed!",-799740283),(15));
jompo.core_test.rabbit1.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751));
jompo.core_test.rabbit2.call(null,new cljs.core.Keyword(null,"speed","speed",1257663751));
jompo.core_test.rabbit1.call(null,new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"x","x",2099068185));
jompo.core_test.location.call(null,new cljs.core.Keyword(null,"left!!","left!!",1073396001),(20));
jompo.core_test.rabbit1.call(null,new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"x","x",2099068185));
jompo.core_test.class1 = jompo.core.new_class.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(10),new cljs.core.Keyword(null,"y","y",-1757859776),(11),new cljs.core.Keyword(null,"z","z",-789527183),(100));
jompo.core_test.class2 = jompo.core.new_class.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(20),new cljs.core.Keyword(null,"y","y",-1757859776),(21),new cljs.core.Keyword(null,"z","z",-789527183),(200));
jompo.core_test.class3 = jompo.core.extend.call(null,jompo.core_test.class2,new cljs.core.Keyword(null,"foo","foo",1268894036),"bar");
jompo.core_test.inst31 = jompo.core_test.class3.call(null,new cljs.core.Keyword(null,"foo","foo",1268894036),"bar3");
jompo.core_test.inst31.call(null,new cljs.core.Keyword(null,"foo","foo",1268894036));
jompo.core_test.inst11 = jompo.core_test.class1.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(11),new cljs.core.Keyword(null,"y","y",-1757859776),(110));
jompo.core_test.inst12 = jompo.core_test.class1.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(12),new cljs.core.Keyword(null,"y","y",-1757859776),(120));
jompo.core_test.inst11.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
jompo.core_test.inst21 = jompo.core_test.class2.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(21),new cljs.core.Keyword(null,"y","y",-1757859776),(210));
jompo.core_test.inst22 = jompo.core_test.class2.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(22),new cljs.core.Keyword(null,"y","y",-1757859776),(22));
jompo.core_test.foo_test = (function jompo$core_test$foo_test(){
return cljs.test.test_var.call(null,jompo$core_test$foo_test.cljs$lang$var);
});
jompo.core_test.foo_test.cljs$lang$test = (function (){
try{var values__5978__auto___7152 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(11)),jompo.core_test.inst11.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var result__5979__auto___7153 = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto___7152);
if(cljs.core.truth_(result__5979__auto___7153)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inst11","inst11",1294619972,null),new cljs.core.Keyword(null,"x","x",2099068185)),(11)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto___7152),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inst11","inst11",1294619972,null),new cljs.core.Keyword(null,"x","x",2099068185)),(11)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto___7152)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e7149){var t__6016__auto___7154 = e7149;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inst11","inst11",1294619972,null),new cljs.core.Keyword(null,"x","x",2099068185)),(11)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto___7154,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__5978__auto___7155 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(12)),jompo.core_test.inst12.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var result__5979__auto___7156 = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto___7155);
if(cljs.core.truth_(result__5979__auto___7156)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inst12","inst12",1215340947,null),new cljs.core.Keyword(null,"x","x",2099068185)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto___7155),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inst12","inst12",1215340947,null),new cljs.core.Keyword(null,"x","x",2099068185)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto___7155)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e7150){var t__6016__auto___7157 = e7150;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inst12","inst12",1215340947,null),new cljs.core.Keyword(null,"x","x",2099068185)),(12)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto___7157,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__5978__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(100)),jompo.core_test.inst12.call(null,new cljs.core.Keyword(null,"z","z",-789527183)));
var result__5979__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto__);
if(cljs.core.truth_(result__5979__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inst12","inst12",1215340947,null),new cljs.core.Keyword(null,"z","z",-789527183)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inst12","inst12",1215340947,null),new cljs.core.Keyword(null,"z","z",-789527183)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__5979__auto__;
}catch (e7151){var t__6016__auto__ = e7151;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"inst12","inst12",1215340947,null),new cljs.core.Keyword(null,"z","z",-789527183)),(100)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

jompo.core_test.foo_test.cljs$lang$var = new cljs.core.Var(function(){return jompo.core_test.foo_test;},new cljs.core.Symbol("jompo.core-test","foo-test","jompo.core-test/foo-test",-1301235148,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jompo.core-test","jompo.core-test",-632681585,null),new cljs.core.Symbol(null,"foo-test","foo-test",1308408717,null),"test/cljs/jompo/core_test.cljs",18,1,104,104,cljs.core.List.EMPTY,null,(cljs.core.truth_(jompo.core_test.foo_test)?jompo.core_test.foo_test.cljs$lang$test:null)]));
var map__7158_7160 = jompo.core_test.inst12;
var map__7158_7161__$1 = ((((!((map__7158_7160 == null)))?((((map__7158_7160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7158_7160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7158_7160):map__7158_7160);
var all_7162 = map__7158_7161__$1;
var z_7163 = cljs.core.get.call(null,map__7158_7161__$1,new cljs.core.Keyword(null,"z","z",-789527183));
new cljs.core.Keyword(null,"z","z",-789527183).cljs$core$IFn$_invoke$arity$1(all_7162);
jompo.core_test.class1.call(null,new cljs.core.Keyword(null,"fk","fk",398442651));
jompo.core_test.inst21.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
jompo.core_test.inst22.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
cljs.core._EQ_.call(null,jompo.core_test.inst11.call(null,new cljs.core.Keyword(null,"z","z",-789527183)),(10));
jompo.core_test.rabbit1.call(null,new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"x","x",2099068185));
jompo.core_test.location.call(null,new cljs.core.Keyword(null,"x","x",2099068185));
jompo.core_test.location.call(null,new cljs.core.Keyword(null,"left!!","left!!",1073396001),(10));
jompo.core_test.fake_test = (function jompo$core_test$fake_test(){
return cljs.test.test_var.call(null,jompo$core_test$fake_test.cljs$lang$var);
});
jompo.core_test.fake_test.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"fake description");

var ret__6036__auto___7173 = (function (){
try{var values__5978__auto___7174 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(-10)),jompo.core_test.location.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var result__5979__auto___7175 = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto___7174);
if(cljs.core.truth_(result__5979__auto___7175)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(-10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto___7174),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(-10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto___7174)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e7164){var t__6016__auto___7176 = e7164;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(-10)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto___7176,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__5978__auto___7177 = cljs.core._conj.call(null,cljs.core.List.EMPTY,jompo.core_test.location.call(null,new cljs.core.Keyword(null,"x!","x!",962126594),(20)));
var result__5979__auto___7178 = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto___7177);
if(cljs.core.truth_(result__5979__auto___7178)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x!","x!",962126594),(20))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto___7177),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x!","x!",962126594),(20))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto___7177)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e7165){var t__6016__auto___7179 = e7165;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x!","x!",962126594),(20))),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto___7179,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__5978__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(20)),jompo.core_test.location.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var result__5979__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto__);
if(cljs.core.truth_(result__5979__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(20)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(20)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__5979__auto__;
}catch (e7166){var t__6016__auto__ = e7166;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(20)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


try{var values__5978__auto___7180 = cljs.core._conj.call(null,cljs.core.List.EMPTY,jompo.core.state_BANG_.call(null,jompo.core_test.location,new cljs.core.Keyword(null,"x","x",2099068185),(30)));
var result__5979__auto___7181 = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto___7180);
if(cljs.core.truth_(result__5979__auto___7181)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","state!","core/state!",-167607416,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185),(30))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto___7180),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","state!","core/state!",-167607416,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185),(30))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto___7180)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e7167){var t__6016__auto___7182 = e7167;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol("core","state!","core/state!",-167607416,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185),(30))),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto___7182,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__5978__auto___7183 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(30)),jompo.core_test.location.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var result__5979__auto___7184 = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto___7183);
if(cljs.core.truth_(result__5979__auto___7184)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto___7183),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto___7183)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e7168){var t__6016__auto___7185 = e7168;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(30)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto___7185,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__5978__auto___7186 = cljs.core._conj.call(null,cljs.core.List.EMPTY,jompo.core_test.location.call(null,new cljs.core.Keyword(null,"left!!","left!!",1073396001),(10)));
var result__5979__auto___7187 = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto___7186);
if(cljs.core.truth_(result__5979__auto___7187)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"left!!","left!!",1073396001),(10))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto___7186),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"left!!","left!!",1073396001),(10))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto___7186)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e7169){var t__6016__auto___7188 = e7169;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"left!!","left!!",1073396001),(10))),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto___7188,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__5978__auto___7189 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(20)),jompo.core_test.location.call(null,new cljs.core.Keyword(null,"x","x",2099068185)));
var result__5979__auto___7190 = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto___7189);
if(cljs.core.truth_(result__5979__auto___7190)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(20)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto___7189),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(20)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto___7189)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e7170){var t__6016__auto___7191 = e7170;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Keyword(null,"x","x",2099068185)),(20)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto___7191,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__5978__auto___7192 = cljs.core._conj.call(null,cljs.core.List.EMPTY,jompo.core_test.rabbit1.call(null,new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"left!!","left!!",1073396001),(20)));
var result__5979__auto___7193 = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto___7192);
if(cljs.core.truth_(result__5979__auto___7193)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"rabbit1","rabbit1",422604103,null),new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"left!!","left!!",1073396001),(20))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto___7192),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"rabbit1","rabbit1",422604103,null),new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"left!!","left!!",1073396001),(20))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto___7192)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e7171){var t__6016__auto___7194 = e7171;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"rabbit1","rabbit1",422604103,null),new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"left!!","left!!",1073396001),(20))),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto___7194,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__5978__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),jompo.core_test.rabbit1.call(null,new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"x","x",2099068185)));
var result__5979__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__5978__auto__);
if(cljs.core.truth_(result__5979__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"rabbit1","rabbit1",422604103,null),new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"x","x",2099068185)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__5978__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"rabbit1","rabbit1",422604103,null),new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"x","x",2099068185)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__5978__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__5979__auto__;
}catch (e7172){var t__6016__auto__ = e7172;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"rabbit1","rabbit1",422604103,null),new cljs.core.Keyword(null,"location-om","location-om",-2467307),new cljs.core.Keyword(null,"x","x",2099068185)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__6016__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

jompo.core_test.fake_test.cljs$lang$var = new cljs.core.Var(function(){return jompo.core_test.fake_test;},new cljs.core.Symbol("jompo.core-test","fake-test","jompo.core-test/fake-test",1116416641,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"jompo.core-test","jompo.core-test",-632681585,null),new cljs.core.Symbol(null,"fake-test","fake-test",2147428714,null),"test/cljs/jompo/core_test.cljs",19,1,126,126,cljs.core.List.EMPTY,null,(cljs.core.truth_(jompo.core_test.fake_test)?jompo.core_test.fake_test.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map