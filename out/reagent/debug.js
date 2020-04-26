// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__3682__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3682 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3683__i = 0, G__3683__a = new Array(arguments.length -  0);
while (G__3683__i < G__3683__a.length) {G__3683__a[G__3683__i] = arguments[G__3683__i + 0]; ++G__3683__i;}
  args = new cljs.core.IndexedSeq(G__3683__a,0,null);
} 
return G__3682__delegate.call(this,args);};
G__3682.cljs$lang$maxFixedArity = 0;
G__3682.cljs$lang$applyTo = (function (arglist__3684){
var args = cljs.core.seq(arglist__3684);
return G__3682__delegate(args);
});
G__3682.cljs$core$IFn$_invoke$arity$variadic = G__3682__delegate;
return G__3682;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__3685__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__3685 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__3686__i = 0, G__3686__a = new Array(arguments.length -  0);
while (G__3686__i < G__3686__a.length) {G__3686__a[G__3686__i] = arguments[G__3686__i + 0]; ++G__3686__i;}
  args = new cljs.core.IndexedSeq(G__3686__a,0,null);
} 
return G__3685__delegate.call(this,args);};
G__3685.cljs$lang$maxFixedArity = 0;
G__3685.cljs$lang$applyTo = (function (arglist__3687){
var args = cljs.core.seq(arglist__3687);
return G__3685__delegate(args);
});
G__3685.cljs$core$IFn$_invoke$arity$variadic = G__3685__delegate;
return G__3685;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
