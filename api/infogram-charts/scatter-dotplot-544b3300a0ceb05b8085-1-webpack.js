(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[67],{7837:(t,e,a)=>{a.r(e),a.d(e,{DotPlot:()=>h});var r=a(498);var n=a.n(r);var i=a(3807);var o=a(7692);var s=a(1113);var u=a(3861);var c=a(7834);function l(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function p(t,e,a){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,a){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=f(t)););return t}(t,e);if(r){var n=Object.getOwnPropertyDescriptor(r,e);return n.get?n.get.call(a||t):n.value}})(t,e,a||t)}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}(0,u.putGraph)("circle",c.Circle);var h=function(t){"use strict";var e;!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(r,t);var a=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t=f(r),a;if(e){var n=f(this).constructor;a=Reflect.construct(t,arguments,n)}else a=t.apply(this,arguments);var i;return(i=a)&&("object"==(i&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i)||"function"==typeof i)?i:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function r(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,r),a.apply(this,arguments)}var o,u;return u=[{key:"getClassName",value:function(){return"DotPlot"}}],o=[{key:"emptySheetData",value:function(){return n().merge({},p(f(r.prototype),"emptySheetData",this).call(this),{categories:{numeric:!1},series:[{type:"circle"}],graphOptions:{dataPointRadius:8}})}},{key:"defaults",value:function(){return n().merge({},p(f(r.prototype),"defaults",this).call(this),{series:{dataPoints:!0,data:"separate"}})}},{key:"graphInstanceSetup",value:function(t,e,a,r){var i=n().get(this,"runtime.sheet.graphOptions",{}).dataPointRadius;var o=this.runtime.formatter;t.scaleX(r.x).scaleY(r.y).data(e.data).colors(e.colors).legend(r.legend).colorAlpha(this.options.opacity).radius(function(t){return"string"==typeof t.y?0:i}).tooltip((0,s.createStyledTooltip)(this)).filterFn(function(t){return null!==t.y&&null!==t.x}).tooltipText(function(t){return t.groupLabel}).tooltipValue(function(t){return"".concat(t.xLabel,": ").concat(o.tooltip.y.format(t.yLabel))}).transitionDuration(this.options.animation.duration).dispatch().on("animationEnd",r.animationEnd)}},{key:"renderGraphs",value:function(){i.Chart.prototype.renderGraphs.apply(this,arguments)}},{key:"renderDataPoints",value:function(){}},{key:"curtainAnimation",value:function(t,e,a,r){r.animationEnd()}}],l(r.prototype,o),u&&l(r,u),r}(o.Line)},7836:(t,e,a)=>{a.r(e),a.d(e,{default:()=>p});var r=a(498);var n=a.n(r);var i=a(7837);var o=a(7741);var s=a(7748);var u=a(7749);var c=a(7750);var l=Object.assign({},o.default);l.instanceClass=i.DotPlot,l.setupChartSheetOptionsItem=function(t){var e=this.sheetOptionsItemDefaults(t);var a=e.axis[0];var r=e.axis[1];a.title=t.xlabel?t.xlabel:"",r.title=t.ylabel?t.ylabel:"","number"==typeof t.ymin&&(r.minLimit=t.ymin),"number"==typeof t.ymax&&(r.maxLimit=t.ymax),n().has(t,"dataPointRadius")&&n().set(e,"graphOptions.dataPointRadius",t.dataPointRadius);var i=n().get(t,"dataInputFormat.type","text");if(e.categories.xAxisTimeBased="date"===i,e.categories.xAxisTimeBased){var o=n().get(t,"dataInputFormat.date","auto");var l=n().get(t,"labels.axis.x.tick.timeFormat",o);n().set(e,"series[0].parseFormat.x",o),n().set(a,"timeFormat",l)}return e.categories.numeric="number"===i,(0,u.assignTrendline)(e,t,this.themeStyleColor),(0,s.assignAxisTickInterval)(e,t),(0,s.assignAxisTicks)(e,t),(0,c.assignNumberFormatValues)({sheetOptions:e,custom:t,axis:[{id:"y",path:""},{id:"y1",path:"axis.y"}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,c.assignNumberFormatLabels)({sheetOptions:e,custom:t,affixes:[{id:"y",path:""}],inputDecimalSeparator:this.inputDecimalSeparator}),(0,s.assignCategoryLabelLayout)(e,t),e};let p=Object.freeze(l)}}]);