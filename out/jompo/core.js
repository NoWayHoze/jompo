// Compiled by ClojureScript 1.7.170 {}
goog.provide('jompo.core');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof jompo.core.app_state !== 'undefined'){
} else {
jompo.core.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello, what is your name? "], null));
}
jompo.core.page = (function jompo$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.deref.call(null,jompo.core.app_state).call(null,new cljs.core.Keyword(null,"text","text",-1790561697)),"FIXME"], null);
});
jompo.core.main = (function jompo$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jompo.core.page], null),document.getElementById("app"));
});
jompo.core.jompo_QMARK_ = (function jompo$core$jompo_QMARK_(x){
var y = [cljs.core.str(x)].join('');
return (cljs.core._EQ_.call(null,y.toLowerCase(),y)) && (([cljs.core.str(x)].join('').indexOf("-om") > (0)));
});
jompo.core.jompo_QMARK_.call(null,new cljs.core.Keyword(null,"foo","foo",1268894036));
jompo.core.setter_QMARK_ = (function jompo$core$setter_QMARK_(x){
var y = [cljs.core.str(x)].join('');
return (cljs.core._EQ_.call(null,y.toLowerCase(),y)) && (cljs.core._EQ_.call(null,y.indexOf("!"),(y.length - (1))));
});
jompo.core.adder_QMARK_ = (function jompo$core$adder_QMARK_(x){
var y = [cljs.core.str(x)].join('');
return (cljs.core._EQ_.call(null,y.toLowerCase(),y)) && (cljs.core._EQ_.call(null,[cljs.core.str(x)].join('').indexOf("+"),([cljs.core.str(x)].join('').length - (1))));
});
jompo.core.remover_QMARK_ = (function jompo$core$remover_QMARK_(x){
var y = [cljs.core.str(x)].join('');
return (cljs.core._EQ_.call(null,y.toLowerCase(),y)) && (cljs.core._EQ_.call(null,[cljs.core.str(x)].join('').indexOf("-"),([cljs.core.str(x)].join('').length - (1))));
});
jompo.core.side_effect_QMARK_ = (function jompo$core$side_effect_QMARK_(x){
var y = [cljs.core.str(x)].join('');
return (cljs.core._EQ_.call(null,y.toLowerCase(),y)) && (cljs.core._EQ_.call(null,[cljs.core.str(x)].join('').indexOf("!!"),([cljs.core.str(x)].join('').length - (2))));
});
jompo.core.pure_fn_QMARK_ = (function jompo$core$pure_fn_QMARK_(x){
var y = [cljs.core.str(x)].join('');
return (cljs.core._EQ_.call(null,y.toLowerCase(),y)) && (cljs.core._EQ_.call(null,[cljs.core.str(x)].join('').indexOf("="),([cljs.core.str(x)].join('').length - (1))));
});
jompo.core.inc_fn_QMARK_ = (function jompo$core$inc_fn_QMARK_(x){
var y = [cljs.core.str(x)].join('');
return (cljs.core._EQ_.call(null,y.toLowerCase(),y)) && (cljs.core._EQ_.call(null,[cljs.core.str(x)].join('').indexOf("+="),([cljs.core.str(x)].join('').length - (2))));
});
jompo.core.dec_fn_QMARK_ = (function jompo$core$dec_fn_QMARK_(x){
var y = [cljs.core.str(x)].join('');
return (cljs.core._EQ_.call(null,y.toLowerCase(),y)) && (cljs.core._EQ_.call(null,[cljs.core.str(x)].join('').indexOf("-="),([cljs.core.str(x)].join('').length - (2))));
});
jompo.core.side_effect_QMARK_.call(null,new cljs.core.Keyword(null,"foo!!","foo!!",-1443832444));
jompo.core.setter_to_getter = (function jompo$core$setter_to_getter(x){
return cljs.core.keyword.call(null,[cljs.core.str(x)].join('').replace("!","").replace(":",""));
});
jompo.core.getter_to_setter = (function jompo$core$getter_to_setter(x){
return cljs.core.keyword.call(null,[cljs.core.str([cljs.core.str(x)].join('').replace(":","")),cljs.core.str("!")].join(''));
});
jompo.core.key_type = (function jompo$core$key_type(my_key){
if(cljs.core.truth_(jompo.core.jompo_QMARK_.call(null,my_key))){
return new cljs.core.Keyword(null,"jompo","jompo",2072210209);
} else {
if(cljs.core.truth_(jompo.core.setter_QMARK_.call(null,my_key))){
return new cljs.core.Keyword(null,"setter","setter",1948354926);
} else {
if(cljs.core.truth_(jompo.core.pure_fn_QMARK_.call(null,my_key))){
return new cljs.core.Keyword(null,"pure-fn","pure-fn",638175408);
} else {
if(cljs.core.truth_(jompo.core.side_effect_QMARK_.call(null,my_key))){
return new cljs.core.Keyword(null,"side-effect","side-effect",-949778885);
} else {
if(cljs.core.truth_(jompo.core.adder_QMARK_.call(null,my_key))){
return new cljs.core.Keyword(null,"adder","adder",-886849773);
} else {
if(cljs.core.truth_(jompo.core.remover_QMARK_.call(null,my_key))){
return new cljs.core.Keyword(null,"remover","remover",1155419367);
} else {
if(cljs.core.truth_(jompo.core.inc_fn_QMARK_.call(null,my_key))){
return new cljs.core.Keyword(null,"inc-fn","inc-fn",677846644);
} else {
if(cljs.core.truth_(jompo.core.dec_fn_QMARK_.call(null,my_key))){
return new cljs.core.Keyword(null,"dec-fn","dec-fn",947116196);
} else {
return new cljs.core.Keyword(null,"field","field",-1302436500);
}
}
}
}
}
}
}
}
});
jompo.core.normalize_op = (function jompo$core$normalize_op(op){
var mod_fns = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"jompo","jompo",2072210209),new cljs.core.Keyword(null,"dec-fn","dec-fn",947116196),new cljs.core.Keyword(null,"remover","remover",1155419367),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"setter","setter",1948354926),new cljs.core.Keyword(null,"pure-fn","pure-fn",638175408),new cljs.core.Keyword(null,"adder","adder",-886849773),new cljs.core.Keyword(null,"inc-fn","inc-fn",677846644),new cljs.core.Keyword(null,"side-effect","side-effect",-949778885)],[(function (){
return op;
}),(function (p1__6986_SHARP_){
return cljs.core.keyword.call(null,[cljs.core.str(p1__6986_SHARP_)].join('').replace("-=","").replace(":",""));
}),(function (p1__6984_SHARP_){
return cljs.core.keyword.call(null,[cljs.core.str(p1__6984_SHARP_)].join('').replace("-","").replace(":",""));
}),(function (){
return op;
}),jompo.core.setter_to_getter,(function (){
return op;
}),(function (p1__6983_SHARP_){
return cljs.core.keyword.call(null,[cljs.core.str(p1__6983_SHARP_)].join('').replace("+","").replace(":",""));
}),(function (p1__6985_SHARP_){
return cljs.core.keyword.call(null,[cljs.core.str(p1__6985_SHARP_)].join('').replace("+=","").replace(":",""));
}),(function (){
return op;
})]);
var the_type = jompo.core.key_type.call(null,op);
return the_type.call(null,mod_fns).call(null,op);
});
jompo.core.key_type.call(null,new cljs.core.Keyword(null,"y","y",-1757859776));
jompo.core.normalize_op.call(null,new cljs.core.Keyword(null,"y!","y!",583264257));
jompo.core.getter_to_setter.call(null,new cljs.core.Keyword(null,"foo","foo",1268894036));
jompo.core.setter_to_getter.call(null,new cljs.core.Keyword(null,"foo!","foo!",-19251310));
jompo.core.setter_QMARK_.call(null,new cljs.core.Keyword(null,"foo!","foo!",-19251310));
jompo.core.state_BANG_ = (function jompo$core$state_BANG_(var_args){
var args__5534__auto__ = [];
var len__5527__auto___6996 = arguments.length;
var i__5528__auto___6997 = (0);
while(true){
if((i__5528__auto___6997 < len__5527__auto___6996)){
args__5534__auto__.push((arguments[i__5528__auto___6997]));

var G__6998 = (i__5528__auto___6997 + (1));
i__5528__auto___6997 = G__6998;
continue;
} else {
}
break;
}

var argseq__5535__auto__ = ((((1) < args__5534__auto__.length))?(new cljs.core.IndexedSeq(args__5534__auto__.slice((1)),(0))):null);
return jompo.core.state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5535__auto__);
});

jompo.core.state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__6989){
var map__6990 = p__6989;
var map__6990__$1 = ((((!((map__6990 == null)))?((((map__6990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__6990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__6990):map__6990);
var all = map__6990__$1;
var constructor = cljs.core.get.call(null,map__6990__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var seq__6992 = cljs.core.seq.call(null,cljs.core.keys.call(null,all));
var chunk__6993 = null;
var count__6994 = (0);
var i__6995 = (0);
while(true){
if((i__6995 < count__6994)){
var k = cljs.core._nth.call(null,chunk__6993,i__6995);
this$.call(null,jompo.core.getter_to_setter.call(null,k),k.call(null,all));

var G__6999 = seq__6992;
var G__7000 = chunk__6993;
var G__7001 = count__6994;
var G__7002 = (i__6995 + (1));
seq__6992 = G__6999;
chunk__6993 = G__7000;
count__6994 = G__7001;
i__6995 = G__7002;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6992);
if(temp__4425__auto__){
var seq__6992__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6992__$1)){
var c__5272__auto__ = cljs.core.chunk_first.call(null,seq__6992__$1);
var G__7003 = cljs.core.chunk_rest.call(null,seq__6992__$1);
var G__7004 = c__5272__auto__;
var G__7005 = cljs.core.count.call(null,c__5272__auto__);
var G__7006 = (0);
seq__6992 = G__7003;
chunk__6993 = G__7004;
count__6994 = G__7005;
i__6995 = G__7006;
continue;
} else {
var k = cljs.core.first.call(null,seq__6992__$1);
this$.call(null,jompo.core.getter_to_setter.call(null,k),k.call(null,all));

var G__7007 = cljs.core.next.call(null,seq__6992__$1);
var G__7008 = null;
var G__7009 = (0);
var G__7010 = (0);
seq__6992 = G__7007;
chunk__6993 = G__7008;
count__6994 = G__7009;
i__6995 = G__7010;
continue;
}
} else {
return null;
}
}
break;
}
});

jompo.core.state_BANG_.cljs$lang$maxFixedArity = (1);

jompo.core.state_BANG_.cljs$lang$applyTo = (function (seq6987){
var G__6988 = cljs.core.first.call(null,seq6987);
var seq6987__$1 = cljs.core.next.call(null,seq6987);
return jompo.core.state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6988,seq6987__$1);
});
jompo.core.new_class = (function jompo$core$new_class(var_args){
var args__5534__auto__ = [];
var len__5527__auto___7056 = arguments.length;
var i__5528__auto___7057 = (0);
while(true){
if((i__5528__auto___7057 < len__5527__auto___7056)){
args__5534__auto__.push((arguments[i__5528__auto___7057]));

var G__7058 = (i__5528__auto___7057 + (1));
i__5528__auto___7057 = G__7058;
continue;
} else {
}
break;
}

var argseq__5535__auto__ = ((((0) < args__5534__auto__.length))?(new cljs.core.IndexedSeq(args__5534__auto__.slice((0)),(0))):null);
return jompo.core.new_class.cljs$core$IFn$_invoke$arity$variadic(argseq__5535__auto__);
});

jompo.core.new_class.cljs$core$IFn$_invoke$arity$variadic = (function (p__7012){
var map__7013 = p__7012;
var map__7013__$1 = ((((!((map__7013 == null)))?((((map__7013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7013):map__7013);
var members = map__7013__$1;
var constructor = cljs.core.get.call(null,map__7013__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
return ((function (map__7013,map__7013__$1,members,constructor){
return (function() {
var jompo$core$class_instance = null;
var jompo$core$class_instance__1 = (function (fk){
return members;
});
var jompo$core$class_instance__3 = (function() { 
var G__7059__delegate = function (a,b,p__7015){
var map__7036 = p__7015;
var map__7036__$1 = ((((!((map__7036 == null)))?((((map__7036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7036):map__7036);
var init_par = map__7036__$1;
var constructor__$1 = cljs.core.get.call(null,map__7036__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var par_check_fn = (function (){var check_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5241__auto__ = ((function (map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor){
return (function jompo$core$class_instance_$_iter__7038(s__7039){
return (new cljs.core.LazySeq(null,((function (map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor){
return (function (){
var s__7039__$1 = s__7039;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7039__$1);
if(temp__4425__auto__){
var s__7039__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7039__$2)){
var c__5239__auto__ = cljs.core.chunk_first.call(null,s__7039__$2);
var size__5240__auto__ = cljs.core.count.call(null,c__5239__auto__);
var b__7041 = cljs.core.chunk_buffer.call(null,size__5240__auto__);
if((function (){var i__7040 = (0);
while(true){
if((i__7040 < size__5240__auto__)){
var k = cljs.core._nth.call(null,c__5239__auto__,i__7040);
cljs.core.chunk_append.call(null,b__7041,cljs.core.PersistentArrayMap.fromArray([k,true], true, false));

var G__7060 = (i__7040 + (1));
i__7040 = G__7060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7041),jompo$core$class_instance_$_iter__7038.call(null,cljs.core.chunk_rest.call(null,s__7039__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7041),null);
}
} else {
var k = cljs.core.first.call(null,s__7039__$2);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.fromArray([k,true], true, false),jompo$core$class_instance_$_iter__7038.call(null,cljs.core.rest.call(null,s__7039__$2)));
}
} else {
return null;
}
break;
}
});})(map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor))
,null,null));
});})(map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor))
;
return iter__5241__auto__.call(null,cljs.core.keys.call(null,members));
})());
return ((function (check_map,map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor){
return (function (check_key){
return check_key.call(null,check_map);
});
;})(check_map,map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor))
})();
var par_check = (function (){var seq__7042 = cljs.core.seq.call(null,cljs.core.keys.call(null,init_par));
var chunk__7043 = null;
var count__7044 = (0);
var i__7045 = (0);
while(true){
if((i__7045 < count__7044)){
var k = cljs.core._nth.call(null,chunk__7043,i__7045);
if(cljs.core.truth_(par_check_fn.call(null,k))){
} else {
throw (new Error("unknown member init"));
}

var G__7061 = seq__7042;
var G__7062 = chunk__7043;
var G__7063 = count__7044;
var G__7064 = (i__7045 + (1));
seq__7042 = G__7061;
chunk__7043 = G__7062;
count__7044 = G__7063;
i__7045 = G__7064;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7042);
if(temp__4425__auto__){
var seq__7042__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7042__$1)){
var c__5272__auto__ = cljs.core.chunk_first.call(null,seq__7042__$1);
var G__7065 = cljs.core.chunk_rest.call(null,seq__7042__$1);
var G__7066 = c__5272__auto__;
var G__7067 = cljs.core.count.call(null,c__5272__auto__);
var G__7068 = (0);
seq__7042 = G__7065;
chunk__7043 = G__7066;
count__7044 = G__7067;
i__7045 = G__7068;
continue;
} else {
var k = cljs.core.first.call(null,seq__7042__$1);
if(cljs.core.truth_(par_check_fn.call(null,k))){
} else {
throw (new Error("unknown member init"));
}

var G__7069 = cljs.core.next.call(null,seq__7042__$1);
var G__7070 = null;
var G__7071 = (0);
var G__7072 = (0);
seq__7042 = G__7069;
chunk__7043 = G__7070;
count__7044 = G__7071;
i__7045 = G__7072;
continue;
}
} else {
return null;
}
}
break;
}
})();
var total_par = cljs.core.assoc.call(null,cljs.core.into.call(null,members,init_par),a,b);
var middle_class = ((function (par_check_fn,par_check,total_par,map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor){
return (function (){
var this$ = this;
var seq__7046_7073 = cljs.core.seq.call(null,cljs.core.keys.call(null,total_par));
var chunk__7047_7074 = null;
var count__7048_7075 = (0);
var i__7049_7076 = (0);
while(true){
if((i__7049_7076 < count__7048_7075)){
var k_7077 = cljs.core._nth.call(null,chunk__7047_7074,i__7049_7076);
(this$[k_7077] = k_7077.call(null,total_par));

var G__7078 = seq__7046_7073;
var G__7079 = chunk__7047_7074;
var G__7080 = count__7048_7075;
var G__7081 = (i__7049_7076 + (1));
seq__7046_7073 = G__7078;
chunk__7047_7074 = G__7079;
count__7048_7075 = G__7080;
i__7049_7076 = G__7081;
continue;
} else {
var temp__4425__auto___7082 = cljs.core.seq.call(null,seq__7046_7073);
if(temp__4425__auto___7082){
var seq__7046_7083__$1 = temp__4425__auto___7082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7046_7083__$1)){
var c__5272__auto___7084 = cljs.core.chunk_first.call(null,seq__7046_7083__$1);
var G__7085 = cljs.core.chunk_rest.call(null,seq__7046_7083__$1);
var G__7086 = c__5272__auto___7084;
var G__7087 = cljs.core.count.call(null,c__5272__auto___7084);
var G__7088 = (0);
seq__7046_7073 = G__7085;
chunk__7047_7074 = G__7086;
count__7048_7075 = G__7087;
i__7049_7076 = G__7088;
continue;
} else {
var k_7089 = cljs.core.first.call(null,seq__7046_7083__$1);
(this$[k_7089] = k_7089.call(null,total_par));

var G__7090 = cljs.core.next.call(null,seq__7046_7083__$1);
var G__7091 = null;
var G__7092 = (0);
var G__7093 = (0);
seq__7046_7073 = G__7090;
chunk__7047_7074 = G__7091;
count__7048_7075 = G__7092;
i__7049_7076 = G__7093;
continue;
}
} else {
}
}
break;
}

return this$;
});})(par_check_fn,par_check,total_par,map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor))
;
var mc = (new middle_class());
return ((function (mc,par_check_fn,par_check,total_par,middle_class,map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor){
return (function() {
var jompo$core$class_instance_$_member_call = null;
var jompo$core$class_instance_$_member_call__1 = (function (my_key){
var G__7053 = (((my_key instanceof cljs.core.Keyword))?my_key.fqn:null);
switch (G__7053) {
case "mc":
return mc;

break;
case "doc":
return members;

break;
default:
var my_key_type = jompo.core.key_type.call(null,my_key);
var norm_key = jompo.core.normalize_op.call(null,my_key);
var param_check = (cljs.core.truth_(par_check_fn.call(null,norm_key))?true:(function(){throw (new Error([cljs.core.str("unknown member call : "),cljs.core.str(my_key)].join('')))})());
var operandi = (mc[norm_key]);
var G__7054 = (((my_key_type instanceof cljs.core.Keyword))?my_key_type.fqn:null);
switch (G__7054) {
case "jompo":
return operandi;

break;
case "setter":
throw (new Error("calling setter without parameter"));

break;
case "side-effect":
return operandi.call(null,jompo$core$class_instance_$_member_call);

break;
case "pure-fn":
return cljs.core.apply.call(null,operandi,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jompo$core$class_instance_$_member_call], null)));

break;
case "adder":
throw (new Error("calling adder without parameter"));

break;
case "remover":
return (mc[norm_key] = cljs.core.pop.call(null,operandi));

break;
case "inc-fn":
return (mc[norm_key] = (operandi + (1)));

break;
case "dec-fn":
return (mc[norm_key] = (operandi - (1)));

break;
case "field":
return operandi;

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(my_key_type)].join('')));

}

}
});
var jompo$core$class_instance_$_member_call__3 = (function() { 
var G__7096__delegate = function (my_key,sec_par,stuff){
var my_key_type = jompo.core.key_type.call(null,my_key);
var norm_key = jompo.core.normalize_op.call(null,my_key);
var param_check = (cljs.core.truth_(par_check_fn.call(null,norm_key))?true:(function(){throw (new Error([cljs.core.str("unknown member call :"),cljs.core.str(my_key)].join('')))})());
var operandi = (mc[norm_key]);
var G__7055 = (((my_key_type instanceof cljs.core.Keyword))?my_key_type.fqn:null);
switch (G__7055) {
case "jompo":
return cljs.core.apply.call(null,operandi,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sec_par], null),stuff));

break;
case "setter":
return (mc[norm_key] = sec_par);

break;
case "side-effect":
return cljs.core.apply.call(null,operandi,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jompo$core$class_instance_$_member_call,sec_par], null),stuff));

break;
case "pure-fn":
return cljs.core.apply.call(null,operandi,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jompo$core$class_instance_$_member_call,sec_par], null),stuff));

break;
case "adder":
return (mc[norm_key] = cljs.core.assoc.call(null,operandi,cljs.core.count.call(null,operandi),sec_par));

break;
case "remover":
return (mc[norm_key][cljs.core.vec.call(null,cljs.core.remove.call(null,operandi,cljs.core.PersistentHashSet.fromArray([sec_par], true)))][new cljs.core.Keyword(null,"inc-fn","inc-fn",677846644)][(mc[norm_key] = (operandi + sec_par))][new cljs.core.Keyword(null,"dec-fn","dec-fn",947116196)] = (mc[norm_key] = (operandi - sec_par)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(my_key_type)].join('')));

}
};
var G__7096 = function (my_key,sec_par,var_args){
var stuff = null;
if (arguments.length > 2) {
var G__7098__i = 0, G__7098__a = new Array(arguments.length -  2);
while (G__7098__i < G__7098__a.length) {G__7098__a[G__7098__i] = arguments[G__7098__i + 2]; ++G__7098__i;}
  stuff = new cljs.core.IndexedSeq(G__7098__a,0);
} 
return G__7096__delegate.call(this,my_key,sec_par,stuff);};
G__7096.cljs$lang$maxFixedArity = 2;
G__7096.cljs$lang$applyTo = (function (arglist__7099){
var my_key = cljs.core.first(arglist__7099);
arglist__7099 = cljs.core.next(arglist__7099);
var sec_par = cljs.core.first(arglist__7099);
var stuff = cljs.core.rest(arglist__7099);
return G__7096__delegate(my_key,sec_par,stuff);
});
G__7096.cljs$core$IFn$_invoke$arity$variadic = G__7096__delegate;
return G__7096;
})()
;
jompo$core$class_instance_$_member_call = function(my_key,sec_par,var_args){
var stuff = var_args;
switch(arguments.length){
case 1:
return jompo$core$class_instance_$_member_call__1.call(this,my_key);
default:
var G__7100 = null;
if (arguments.length > 2) {
var G__7101__i = 0, G__7101__a = new Array(arguments.length -  2);
while (G__7101__i < G__7101__a.length) {G__7101__a[G__7101__i] = arguments[G__7101__i + 2]; ++G__7101__i;}
G__7100 = new cljs.core.IndexedSeq(G__7101__a,0);
}
return jompo$core$class_instance_$_member_call__3.cljs$core$IFn$_invoke$arity$variadic(my_key,sec_par, G__7100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jompo$core$class_instance_$_member_call.cljs$lang$maxFixedArity = 2;
jompo$core$class_instance_$_member_call.cljs$lang$applyTo = jompo$core$class_instance_$_member_call__3.cljs$lang$applyTo;
jompo$core$class_instance_$_member_call.cljs$core$IFn$_invoke$arity$1 = jompo$core$class_instance_$_member_call__1;
jompo$core$class_instance_$_member_call.cljs$core$IFn$_invoke$arity$variadic = jompo$core$class_instance_$_member_call__3.cljs$core$IFn$_invoke$arity$variadic;
return jompo$core$class_instance_$_member_call;
})()
;})(mc,par_check_fn,par_check,total_par,middle_class,map__7036,map__7036__$1,init_par,constructor__$1,map__7013,map__7013__$1,members,constructor))
};
var G__7059 = function (a,b,var_args){
var p__7015 = null;
if (arguments.length > 2) {
var G__7102__i = 0, G__7102__a = new Array(arguments.length -  2);
while (G__7102__i < G__7102__a.length) {G__7102__a[G__7102__i] = arguments[G__7102__i + 2]; ++G__7102__i;}
  p__7015 = new cljs.core.IndexedSeq(G__7102__a,0);
} 
return G__7059__delegate.call(this,a,b,p__7015);};
G__7059.cljs$lang$maxFixedArity = 2;
G__7059.cljs$lang$applyTo = (function (arglist__7103){
var a = cljs.core.first(arglist__7103);
arglist__7103 = cljs.core.next(arglist__7103);
var b = cljs.core.first(arglist__7103);
var p__7015 = cljs.core.rest(arglist__7103);
return G__7059__delegate(a,b,p__7015);
});
G__7059.cljs$core$IFn$_invoke$arity$variadic = G__7059__delegate;
return G__7059;
})()
;
jompo$core$class_instance = function(a,b,var_args){
var p__7015 = var_args;
switch(arguments.length){
case 1:
return jompo$core$class_instance__1.call(this,a);
default:
var G__7104 = null;
if (arguments.length > 2) {
var G__7105__i = 0, G__7105__a = new Array(arguments.length -  2);
while (G__7105__i < G__7105__a.length) {G__7105__a[G__7105__i] = arguments[G__7105__i + 2]; ++G__7105__i;}
G__7104 = new cljs.core.IndexedSeq(G__7105__a,0);
}
return jompo$core$class_instance__3.cljs$core$IFn$_invoke$arity$variadic(a,b, G__7104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jompo$core$class_instance.cljs$lang$maxFixedArity = 2;
jompo$core$class_instance.cljs$lang$applyTo = jompo$core$class_instance__3.cljs$lang$applyTo;
jompo$core$class_instance.cljs$core$IFn$_invoke$arity$1 = jompo$core$class_instance__1;
jompo$core$class_instance.cljs$core$IFn$_invoke$arity$variadic = jompo$core$class_instance__3.cljs$core$IFn$_invoke$arity$variadic;
return jompo$core$class_instance;
})()
;})(map__7013,map__7013__$1,members,constructor))
});

jompo.core.new_class.cljs$lang$maxFixedArity = (0);

jompo.core.new_class.cljs$lang$applyTo = (function (seq7011){
return jompo.core.new_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq7011));
});
jompo.core.extend = (function jompo$core$extend(var_args){
var args__5534__auto__ = [];
var len__5527__auto___7111 = arguments.length;
var i__5528__auto___7112 = (0);
while(true){
if((i__5528__auto___7112 < len__5527__auto___7111)){
args__5534__auto__.push((arguments[i__5528__auto___7112]));

var G__7113 = (i__5528__auto___7112 + (1));
i__5528__auto___7112 = G__7113;
continue;
} else {
}
break;
}

var argseq__5535__auto__ = ((((1) < args__5534__auto__.length))?(new cljs.core.IndexedSeq(args__5534__auto__.slice((1)),(0))):null);
return jompo.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5535__auto__);
});

jompo.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (super_class,p__7108){
var map__7109 = p__7108;
var map__7109__$1 = ((((!((map__7109 == null)))?((((map__7109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7109):map__7109);
var members = map__7109__$1;
var constructor = cljs.core.get.call(null,map__7109__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var temp__4423__auto__ = cljs.core.apply.call(null,cljs.core.distinct_QMARK_,cljs.core.into.call(null,cljs.core.keys.call(null,super_class.call(null,new cljs.core.Keyword(null,"members","members",159001018))),cljs.core.keys.call(null,members)));
if(cljs.core.truth_(temp__4423__auto__)){
var ok = temp__4423__auto__;
var old_members = super_class.call(null,new cljs.core.Keyword(null,"mc","mc",-1904495686));
return cljs.core.apply.call(null,jompo.core.new_class,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.vec.call(null,cljs.core.into.call(null,old_members,members))));
} else {
throw (new Error("extend conflict at least one field"));
}
});

jompo.core.extend.cljs$lang$maxFixedArity = (1);

jompo.core.extend.cljs$lang$applyTo = (function (seq7106){
var G__7107 = cljs.core.first.call(null,seq7106);
var seq7106__$1 = cljs.core.next.call(null,seq7106);
return jompo.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__7107,seq7106__$1);
});
jompo.core.override = (function jompo$core$override(var_args){
var args__5534__auto__ = [];
var len__5527__auto___7122 = arguments.length;
var i__5528__auto___7123 = (0);
while(true){
if((i__5528__auto___7123 < len__5527__auto___7122)){
args__5534__auto__.push((arguments[i__5528__auto___7123]));

var G__7124 = (i__5528__auto___7123 + (1));
i__5528__auto___7123 = G__7124;
continue;
} else {
}
break;
}

var argseq__5535__auto__ = ((((1) < args__5534__auto__.length))?(new cljs.core.IndexedSeq(args__5534__auto__.slice((1)),(0))):null);
return jompo.core.override.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5535__auto__);
});

jompo.core.override.cljs$core$IFn$_invoke$arity$variadic = (function (super_class,p__7119){
var map__7120 = p__7119;
var map__7120__$1 = ((((!((map__7120 == null)))?((((map__7120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7120):map__7120);
var members = map__7120__$1;
var constructor = cljs.core.get.call(null,map__7120__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var temp__4423__auto__ = cljs.core.reduce.call(null,((function (map__7120,map__7120__$1,members,constructor){
return (function (p1__7114_SHARP_,p2__7115_SHARP_){
var and__4457__auto__ = p1__7114_SHARP_;
if(cljs.core.truth_(and__4457__auto__)){
return p2__7115_SHARP_;
} else {
return and__4457__auto__;
}
});})(map__7120,map__7120__$1,members,constructor))
,true,cljs.core.map.call(null,((function (map__7120,map__7120__$1,members,constructor){
return (function (p1__7116_SHARP_){
return cljs.core.contains_QMARK_.call(null,super_class.call(null,new cljs.core.Keyword(null,"members","members",159001018)),p1__7116_SHARP_);
});})(map__7120,map__7120__$1,members,constructor))
,cljs.core.keys.call(null,members)));
if(cljs.core.truth_(temp__4423__auto__)){
var ok = temp__4423__auto__;
var old_members = super_class.call(null,new cljs.core.Keyword(null,"mc","mc",-1904495686));
return cljs.core.apply.call(null,jompo.core.new_class,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.vec.call(null,cljs.core.into.call(null,old_members,members))));
} else {
throw (new Error("overriding non existent field at least one field"));
}
});

jompo.core.override.cljs$lang$maxFixedArity = (1);

jompo.core.override.cljs$lang$applyTo = (function (seq7117){
var G__7118 = cljs.core.first.call(null,seq7117);
var seq7117__$1 = cljs.core.next.call(null,seq7117);
return jompo.core.override.cljs$core$IFn$_invoke$arity$variadic(G__7118,seq7117__$1);
});
jompo.core.virtual = (function jompo$core$virtual(var_args){
var args__5534__auto__ = [];
var len__5527__auto___7127 = arguments.length;
var i__5528__auto___7128 = (0);
while(true){
if((i__5528__auto___7128 < len__5527__auto___7127)){
args__5534__auto__.push((arguments[i__5528__auto___7128]));

var G__7129 = (i__5528__auto___7128 + (1));
i__5528__auto___7128 = G__7129;
continue;
} else {
}
break;
}

var argseq__5535__auto__ = ((((1) < args__5534__auto__.length))?(new cljs.core.IndexedSeq(args__5534__auto__.slice((1)),(0))):null);
return jompo.core.virtual.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5535__auto__);
});

jompo.core.virtual.cljs$core$IFn$_invoke$arity$variadic = (function (this$,anything){
return cljs.core.print.call(null,[cljs.core.str("virtual not implemented"),cljs.core.str(this$.call(null,new cljs.core.Keyword(null,"members","members",159001018)))].join(''));
});

jompo.core.virtual.cljs$lang$maxFixedArity = (1);

jompo.core.virtual.cljs$lang$applyTo = (function (seq7125){
var G__7126 = cljs.core.first.call(null,seq7125);
var seq7125__$1 = cljs.core.next.call(null,seq7125);
return jompo.core.virtual.cljs$core$IFn$_invoke$arity$variadic(G__7126,seq7125__$1);
});

//# sourceMappingURL=core.js.map