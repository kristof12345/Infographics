(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([["infogram-charts/dep-34"],{7754:(t,e,r)=>{r.r(e),r.d(e,{prepareTextData:()=>c,prepareTextDataGantt:()=>d,renderLabelsWithoutAlignment:()=>f});var a=r(3863);var n=r(420);var i=r(3894);var o=r(7719);var l=r(3905);var u=r(1998);function s(t,e,r,a,n,i,o){try{var l=t[i](o);var u=l.value}catch(t){r(t);return}l.done?e(u):Promise.resolve(u).then(a,n)}function c(t,e,r,a,n,i){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0;var l=[];return t.forEach(function(t,r){if(null!==t.y){var u={};var s=t.xPos;var c=s;var d="start";var f=n-s;var h=s;var v=-1;var g=!0;var p=e.collection[r];var y=p.width+a;var m=Math.round(Math.abs(t.width));var x=!i&&m>y;(t.x<o||t.x===o&&"POPULATION_PYRAMID_LEFT"===t.seriesIdx)&&(d="end",h=f,f=s,v=1),x?c-=v*a:f>=m+y?c-=v*(m+a):h>=y?(c+=v*a,d="end"===d?"start":"end"):g=!1,g&&(u.inside=x,u.textX=c,u.textY=t.yPos+t.height/2+.25*p.height,u.textAnchor=d,u.text=t.xLabel,u.index=r,u.seriesIdx=t.seriesIdx,u.yLabel=t.yLabel,u.xLabel=t.xLabel,u.groupLabel=t.groupLabel,u.color=t.color,l.push(u))}}),l}function d(t,e,r,a){var n=[];return t.forEach(function(t,o){if(null!==t.y){var l={};var u=t.xPos;var s=e.collection[o];var c=s.width;var d=c+2*a;var f=Math.round(Math.abs(t.width));var h=f-2*a;var v=t.yLabel;if(!(f>d)){var g=i.Text.getTrimmedText([v],r,h),p=g.collection,y=g.widths;(v=p[0])===i.ELLIPSIS?(v="",c=0):c=y[0]}l.textX=Math.round(a+u+(h-c)/2),l.inside=!0,l.textY=Math.round(t.yPos+t.height/2+.25*s.height),l.textAnchor="start",l.text=v,l.index=o,l.seriesIdx=t.seriesIdx,l.yLabel=t.yLabel,l.xLabel=t.xLabel,l.groupLabel=t.groupLabel,l.color=t.color,n.push(l)}}),n}function f(t){var e=t.chartId,r=t.selection,i=t.data,c=t.textStyle,d=t.tooltip,f=t.tooltipText,h=t.tooltipTextValue,v=t.legend,g=t.format;var p=function(t,e){return function(){var r=(0,u.rgb)(t);return r.opacity=e,r.toString()}};var y=function(t){return function(e){return e.seriesIdx!==t}};var m=function(t,e){var r=(0,o.labelInfo)(c);if(r.manual){var n=r.stroke,i=r.fill;var l=p(i,.3);var s=p(n,.3);e.on("highlightStart.text",function(e){var r=t.filter(y(e)).transition().duration(150).ease(a.linear).style("fill",l);r.select(".text-outline").attr("stroke",s).attr("fill",s),r.select(".text-outline-fill").style("fill",l)}),e.on("highlightEnd.text",function(e){var r=t.filter(y(e)).transition().duration(150).ease(a.linear).style("fill",(0,u.rgb)(i).toString());r.select(".text-outline").attr("fill",(0,u.rgb)(n).toString()).attr("stroke",(0,u.rgb)(n).toString()),r.select(".text-outline-fill").style("fill",(0,u.rgb)(i).toString())});return}e.on("highlightStart.text",function(e){t.filter(y(e)).transition().duration(150).ease(a.linear).style("opacity",.3)}),e.on("highlightEnd.text",function(e){t.filter(y(e)).transition().duration(150).ease(a.linear).style("opacity",1)})};function x(){var t;return t=function(t,a){var i,u,s;return function(t,e){var r,a,n,i,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(i){return function(l){return function(i){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,a&&(n=2&i[0]?a.return:i[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,i[1])).done)return n;switch(a=0,n&&(i=[2&i[0],n.value]),i[0]){case 0:case 1:n=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!n||i[1]>n[0]&&i[1]<n[3])){o.label=i[1];break}if(6===i[0]&&o.label<n[1]){o.label=n[1],n=i;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(i);break}n[2]&&o.ops.pop(),o.trys.pop();continue}i=e.call(t,o)}catch(t){i=[6,t],a=0}finally{r=n=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,l])}}}(this,function(t){return i=(i=r.selectAll(".igc-labels").data([0])).merge(i.enter().append("g").attr("class","igc-labels")),u=(0,o.createLabel)(i,a,c),(0,o.addOutline)(u,c,g),s=(0,n.default)("highlightStart","highlightEnd","openUrl"),v&&v.data().forEach(function(t){v.addListener({id:"".concat(e,"_").concat(t.groupId),dispatch:s})}),[2,new Promise(function(t){var e=0;u.transition().duration(50).style("opacity",1).on("start",function(){e++}).on("end",function(){0==--e&&t()}),m(u,s),(0,l.addMouseEvents)(u.filter(function(t){return t.inside}),s,d,f,h)})]})},(x=function(){var e=this,r=arguments;return new Promise(function(a,n){var i=t.apply(e,r);function o(t){s(i,a,n,o,l,"next",t)}function l(t){s(i,a,n,o,l,"throw",t)}o(void 0)})}).apply(this,arguments)}return function(t,e){return x.apply(this,arguments)}(r,i)}},7753:(t,e,r)=>{r.r(e),r.d(e,{Bar:()=>H,createBarGraphData:()=>_});var a=r(498);var n=r.n(a);var i=r(7738);var o=r(3876);var l=r(7713);var u=r(3906);var s=r(3862);var c=r(7706);var d=r(7754);var f=r(7723);var h=r(3807);var v=r(3911);var g=r(7755);var p=r(7705);var y=r(3912);var m=r(7707);var x=r(7756);var b=r(7715);var w=r(7717);var S=r(3893);var T=r(1114);var O=r(3900);var L=r(7724);var k=r(1113);var P=r(3909);var E=r(3903);var D=r(3861);var I=r(7757);var A=r(7758);function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=Array(e);r<e;r++)a[r]=t[r];return a}function C(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function G(t,e,r){return(G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,r){var a=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=V(t)););return t}(t,e);if(a){var n=Object.getOwnPropertyDescriptor(a,e);return n.get?n.get.call(r||t):n.value}})(t,e,r||t)}function V(t){return(V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function M(t,e){if(null==t)return{};var r=function(t,e){if(null==t)return{};var r={};var a=Object.keys(t);var n,i;for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);var a,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}function B(t,e){return(B=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function z(t){return function(t){if(Array.isArray(t))return j(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return j(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(t,e)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(0,D.putGraph)("bar",I.Bar);var R=["PopulationPyramid","Tornado"];var H=function(t){"use strict";var e;!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&B(t,e)}(a,t);var r=(e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t=V(a),r;if(e){var n=V(this).constructor;r=Reflect.construct(t,arguments,n)}else r=t.apply(this,arguments);var i;return(i=r)&&("object"==(i&&"undefined"!=typeof Symbol&&i.constructor===Symbol?"symbol":typeof i)||"function"==typeof i)?i:function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(this)});function a(){return!function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}(this,a),r.apply(this,arguments)}var c,D;return D=[{key:"getClassName",value:function(){return"Bar"}}],c=[{key:"render",value:function(){var t=this;this.detectDimensions();var e=this.options,r=this.root;var a=new L.Renderer({instance:this});var c=this.getSheetData();var D=(0,y.formatHelper)(c);var I=this.runtime={width:e.width,height:e.height,components:{},metrics:{},layout:{},sheet:c,formatter:D,inanimate:(0,v.inanimated)(e)};var A=I.layout;var j=e.fixedHeight;var C=c.axis[0];var G=c.axis[1];var V="absolute"===e.series.data;var B=V?(0,f.getAllGraphs)(this):[this.prepareSheetData(c)];var H=V?B[this.sheetIndex]:B[0];var N=["PopulationPyramid","Tornado"].includes(this.getClassName());if(this.createTickIntervals(),(0,O.Controls)(this,{width:I.width}),(0,P.DownloadButton)(this,e.style.legend),N&&(0,E.legendHelper)({instance:this,attachEvents:function(){}}),!h.Chart.prototype.sheetsNotFound.call(this)){var W={top:0,right:1,bottom:0,left:0};var U=I.layout.marginTitle={left:0,right:0,top:0,bottom:0};var Z=I.layout.marginAxis={left:0,right:0};var X={maxLeftCategoryWidth:0,maxLeftCategoryHeight:0};var Y=A.leftLabelPadding={top:0,right:10,bottom:0,left:0};var F;var q=this.getClassName();var $=this.createAnimationCounter(R.includes(q)?3:H.length+2);c.categories.categoryHeight&&(F=Number(c.categories.categoryHeight)),H[0].data=H[0].data.filter(function(t){return null!==t.x});var J=H[0].data.map(function(t){return t.y});if(J.length<1)return this.events.call("startAnimation"),this.events.call("endAnimation"),this.resetRootElement();var K=e.style.axis.x;var Q=e.style.axis.y;this.titleLayout(["x","y"]);var tt={height:0};C.ticks&&((tt=(0,T.getTextDimensions)(D.axis.x.tickSample(),K.tick)).height=Math.min(tt.height,30));var te=I.width-W.left-U.left-W.right-U.right;var tr=I.height-W.top-U.top-W.bottom-U.bottom;var ta=(0,l.default)(0,J.length);var tn=(0,i.default)().domain(ta).padding(.1);if(!j&&F){var ti=10;for(tn.range([0,ti-(tt.height+5)]);tn.bandwidth()-F<0;)ti+=1,tn.range([0,ti-(tt.height+5)]);ti-=1,I.height=ti+W.top+U.top+W.bottom+U.bottom,tr=ti}tn.range([0,tr-(tt.height+5)]);var to=te-Z.left-Z.right;var tl=(0,f.createGetDomain)("x");var tu=I.xDomain=(0,f.createGetDomainAbsolute)(tl)(B);c.grid.symmetrical&&(tu=(0,p.adjustSymmetricalDomain)(tu));var ts=(0,p.limit)(C,tu);G.ticks||(Y.right=0);var tc=Y.right;tu[0]<0&&(tc*=2);var td=(0,T.getTextDimensions)(J,Q.tick);X.maxLeftCategoryWidth=.35*to-Y.right,X.maxLeftCategoryHeight=tn.bandwidth()+.1*tn.bandwidth()/.9-Y.top-Y.bottom;var tf=I.metrics.leftCategoryWidth=0;var th=!1;var tv;G.ticks&&(td.width<=X.maxLeftCategoryHeight?tf=td.height:((th=X.maxLeftCategoryHeight<td.height)&&(tv=(0,m.filterOverlappingCategories)(tn,td,(0,T.getAllTextDimensions)(J,Q.tick))),Math.ceil(tf=S.Measure.wrappedText(X.maxLeftCategoryWidth,tv?tv.map(function(t){return J[t]}):J,Q.tick,td.height).width)<=X.maxLeftCategoryWidth&&(tf=Math.ceil(tf)))),I.metrics.leftCategoryWidth=tf;var tg=(0,x.Left)().scale(tn).data(J).style(Q.tick).bounds({width:tf+Y.right,height:tr}).offset({left:-(tf+tc),top:0}).padding(Y);th&&tg.indexFilter(tv),to-=tf+tc;var tp=I.xScale=(0,o.default)().range([0,to]).clamp(ts);tp.domain(tu);var ty=n().get(c,"graphOptions.bar",{}),tm=ty.showValues;if(ty.valuesOutside&&tm&&((0,g.adjustScaleToOutsideValues)({scale:tp,graphs:n().flatten(B),axisOptions:C,getText:function(e){return t.runtime.formatter.labels.format(e.xLabel)},getTextMetrics:function(e){return(0,T.getAllTextDimensions)(e,t.options.style.graph.item.value)},getValue:function(t){return t.x},getTextSize:function(t){return t.width},adjust:function(t,e){return t-e},barSize:function(t,e){return t>0?e(t)-e(0):e(0)-e(t)}}),c.grid.symmetrical)){var tx=(0,p.adjustSymmetricalDomain)(tp.domain());tp.domain(tx)}var tb=(0,w.GridLines)().scale(tn).orient(w.GridLines.ORIENTS.horizontal).tickSize(-te).highlightZero(!N&&c.grid.horizontalZeroHighlight).style(e.style.grid);c.grid.horizontal||tb.tickValues([]);var tw=I.components.xGridLines=(0,w.GridLines)().scale(tp).orient(w.GridLines.ORIENTS.vertical).tickSize(tr).highlightZero(!N&&c.grid.verticalZeroHighlight).style(e.style.grid);var tS=I.components.xAxisBottomText=(0,b.Axis)().scale(tp).orient("bottom").style(K.tick).textOffset(-5).offset({top:tr-tt.height/4});A.igc={x:W.left+U.left+Z.left+(tf+tc),y:W.top+U.top},this.xTicksSetup(),this.gridSetupVertical(),this.titleComponents(["x","y"]);var tT=I.components,tO=tT.bottomTitle,tL=tT.leftTitle;tO.orientBounds({y2:I.height-W.bottom-5,y1:W.top,x2:I.width,x1:W.left+U.left+Z.left+tf+tg.padding().right}),tL.orientBounds({x2:I.width,x1:W.left+4,y2:W.top+U.top+tr,y1:W.top+U.top}),tO.dispatch().on("animationEnd",$),I.inanimate&&(0,v.removeAnimation)([tL,tO,tw,tb,tS,tg]),this.containerSetup();var tk=r.select(".igc");r.attr("width",I.width).attr("height",I.height),a.add(function(){tk.selectAll(".igc-labels").remove(),r.transition().ease(s[t.options.animation.ease]).duration(t.options.animation.duration).on("start",function(){t.events.call("startAnimation")}).on("end",function(){$()}),tk.attr("transform","translate(".concat(A.igc.x,", ").concat(A.igc.y,")"))}),a.addGrid(tb,"igc-ygrid"),a.addGrid(tw,"igc-xgrid");var tP=(0,k.createStyledTooltip)(this);var tE=function(t){return t.yLabel};var tD=function(t){return D.tooltip.x.format(t.xLabel)};var tI=H.map(function(t){var e=t.data,r=M(t,["data"]);var a;return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};var a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(e){var a;a=r[e],e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a})}return t}({data:_({data:e,scaleX:tp,scaleY:tn,getOffsetX:function(){return null!==(a=r.baseValue)&&void 0!==a?a:0},extraPixelSize:1})},r)});a.addGraph([{graphs:tI,x:tp,y:tn,textStyle:e.style.graph.item.value,transitionDuration:e.animation.duration,tooltip:tP,tooltipText:tE,tooltipTextValue:tD,animationEnd:["PopulationPyramid","Tornado"].includes(q)?function(){var r=tI.reduce(function(t,r){if(!r.showValues)return t;var a=r.data;var n=tn.bandwidth();var i=(0,T.getAllTextDimensions)(a.map(function(t){return D.labels.format(t.xLabel)}),e.style.graph.item.value);if(n>=i.height){var o=(0,d.prepareTextData)(a,i,e.style.graph.item.value,2,(0,u.default)(tp.range()),r.valuesOutside,r.baseValue);return z(t).concat(z(o))}return t},[]);if(!r.length){$();return}(0,d.renderLabelsWithoutAlignment)({chartId:t.chartId,selection:tk,data:r,format:function(t){return D.labels.format(t.text)},textStyle:e.style.graph.item.value,tooltip:tP,tooltipText:tE,tooltipTextValue:tD,legend:!1}).then($)}:$}]),G.ticks?(a.addGrid(tg,"igc-y-axis-text"),c.grid.vertical?a.add(function(){t.createBorderLineFunc(r.select(".igc .igc-grid .igc-y-axis-text"),tg)()}):a.addGrid(function(t){t.select(".igc-y-axis-border").remove()},"igc-y-axis-text")):a.addGrid(function(t){t.selectAll(".tick").remove(),t.select(".igc-y-axis-border").remove()},"igc-y-axis-text"),a.addGrid(tS,"igc-x-axis-text"),a.addTitle(tL,"igc-title-left"),a.addTitle(tO,"igc-title-bottom"),a.start()}}},{key:"graphInstanceSetup",value:function(t,e,r,a,n){var i=this;var o=this.runtime.formatter;var l=e.data.length;var s=(0,v.removeDelay)(this,function(t,e){return e/l*500});var c=this.getClassName();var f="Bar"===c;var h=this.options.style.graph.item.value,g=h.placementStrategy,p=(h.hideOverlapping,h.align),y=M(h,["placementStrategy","hideOverlapping","align"]);var m=f&&"aligned"===g;var x=a.tooltip,b=a.tooltipText,w=a.tooltipTextValue;var S;var O=null!==(S=e.baseValue)&&void 0!==S?S:0;var L=e.data;t.data(L).groupId(n).alpha(this.options.opacity).tooltip(x).tooltipText(b).tooltipValue(w).transitionDelay(s).transitionDuration(a.transitionDuration),R.includes(c)||t.dispatch().on("animationEnd",function(){if(!e.showValues){a.animationEnd();return}var t=i.root.select(".igc");if(m){var r;(0,A.labelsWithAlignment)({selection:t,graphs:(r=e.data.map(function(t){return t.color}),e.data.map(function(t,e){return{categoryIdx:e,colors:r,data:[{x:t.x,y:e,xLabel:t.xLabel,yLabel:t.y,seriesIdx:e}]}})),xScale:a.x,yScale:a.y,style:y,formatter:o,chartId:i.chartId,tooltip:x,tooltipText:b,tooltipTextValue:w,hideOverlapping:!1,align:e.valuesOutside?"outside":p,outlineColorAlways:!1}).then(a.animationEnd);return}var n=a.y.bandwidth();var l=(0,T.getAllTextDimensions)(L.map(function(t){return o.labels.format(t.xLabel)}),a.textStyle);var s=[];if(n>=l.height&&(s=(0,d.prepareTextData)(L,l,a.textStyle,2,(0,u.default)(a.x.range()),e.valuesOutside,O)),!s.length){a.animationEnd();return}(0,d.renderLabelsWithoutAlignment)({chartId:i.chartId,selection:t,data:s,format:function(t){return o.labels.format(t.text)},textStyle:a.textStyle,tooltip:x,tooltipText:b,tooltipTextValue:w,legend:!1}).then(a.animationEnd)})}},{key:"defaults",value:function(){return n().merge({},G(V(a.prototype),"defaults",this).call(this),{series:{data:"separate"}})}},{key:"emptySheetData",value:function(){return n().merge({},G(V(a.prototype),"emptySheetData",this).call(this),{series:[{title:"",type:"bar"}],graphOptions:{bar:{showValues:!0,valuesOutside:!1}},axis:[{title:"",ticks:!0,tickInterval:10},{title:"",ticks:!0}],grid:{vertical:!0,verticalZeroHighlight:!0,horizontal:!1}})}},{key:"prepareSheetData",value:function(t){var e=t.categories.colors;var r=n().get(t,"series[0]");var a=r.type;var i=n().get(t,"graphOptions.bar",{}),o=i.showValues,l=i.valuesOutside;return[{type:a,data:r.data.map(function(a,i){return{x:(0,T.replaceBlank)(a,null),y:(0,T.replaceBlank)(t.categories.data[i]),xLabel:(0,T.replaceBlank)(r.rawData[i]),color:(0,T.getColor)(i,e),link:n().get(r,"links[".concat(i,"]"),null)}}),showValues:o,valuesOutside:l}]}}],C(a.prototype,c),D&&C(a,D),a}(c.BarClass);function _(t){var e=t.data,r=t.scaleX,a=t.scaleY,n=t.getOffsetX,i=t.extraPixelSize;var o=a.bandwidth();return e.reduce(function(t,e,l){var u={};var s=n(e);return u.x=e.x,u.xLabel=e.xLabel,u.y=e.y,u.yLabel=e.y,u.height=o,u.width=r(e.x)-r(s),u.xPos=Math.round(r(s)+(i&&u.width>0?i:0)),u.yPos=a(l),u.color=e.color,u.index=l,u.seriesIdx=e.seriesIdx,u.link=e.link,t.push(u),t},[])}},7723:(t,e,r)=>{r.r(e),r.d(e,{createGetDomain:()=>d,createGetDomainAbsolute:()=>c,getAllGraphs:()=>s,getGraphsDomainByProperty:()=>f});var a=r(498);var n=r.n(a);var i=r(3915);var o=r(3906);var l=r(3876);var u=r(7705);function s(t){var e=t.options.sheets;var r=e.length;var a=[];for(var i=0;i<r;i++){var o=e[i];var l=n().merge({},t.emptySheetData(),o);a.push(t.prepareSheetData(l,i))}return a}function c(t){return function(e){var r;return e.forEach(function(e,a){var n=t(e);0===a?r=n.slice(0):(r[0]=Math.min(n[0],r[0]),r[1]=Math.max(n[1],r[1]))}),r}}function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"x";var e=function(e){return e[t]};return function(t){var r=[(0,i.default)(t,function(t){return(0,i.default)(t.data,e)}),(0,o.default)(t,function(t){return(0,o.default)(t.data,e)})];return(0,u.ensureZeroEqual)(r),(0,u.ensureZero)(r),(0,l.default)().domain(r).nice(10).domain()}}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";var r=[].concat(e);var a=[(0,i.default)(t,function(t){return(0,i.default)(t.data,function(t){return(0,i.default)(r.map(function(e){return t[e]}))})}),(0,o.default)(t,function(t){return(0,o.default)(t.data,function(t){return(0,o.default)(r.map(function(e){return t[e]}))})})];return(0,u.ensureZeroEqual)(a),a}},7757:(t,e,r)=>{r.r(e),r.d(e,{Bar:()=>h});var a=r(498);var n=r.n(a);var i=r(1117);var o=r(420);var l=r(3871);var u=r(3863);var s=r(1114);var c=r(3855);var d=r(1113);var f=r(3905);function h(){var t=function(t){x.duration.x=S,0===S&&(x.duration.y=S,x.duration.text=S),t.each(function(){if(!h.length){T.call("animationStart"),T.call("animationUpdateEnd"),T.call("animationEnd");return}var t=(0,i.default)(this);var o=t.selectAll("path");o.transition().duration(0),t.selectAll("text").remove();var l=[];o.each(function(t){l.push(n().merge({},t))}),0===l.length&&(l=h.map(function(t){return n().merge({},t,{width:0})})),(0,s.pairData)(l,h,function(t){t.width=0});var u=function(t){a(t),(0,f.addMouseEvents)(t,T,k,O,L),T.call("animationEnd")};e(l[0]);var c=t.selectAll("path").data(l);var d=c.enter().insert("path","text");var v=0===c.size()&&c.size()<d.size();c.exit().remove(),c.style("stroke-width",0).style("fill",function(t){return t.next.color}).style("opacity",p);var g=x.duration;v?(T.call("animationStart"),T.call("animationUpdateEnd"),d.call(r,function(){u(c.merge(d))})):(T.call("animationStart"),c.transition().duration(g.x).attrTween("d",m(function(t){return{xPos:t.next.xPos,yPos:t.yPos,width:t.next.width,height:t.height}})).transition().duration(g.y).on("start",function(){b.update++}).attrTween("d",m(function(t){return t.next})).on("end",function(){if(0==--b.update){if(T.call("animationUpdateEnd"),0===d.size()){u(c);return}d.call(r,function(){u(c.merge(d))})}}))})};var e=function(t){var e={y:["yPos","height"]};var r;var a;var n;if(t){var i=t.next;for(r in x.duration)e[r]&&(n=e[r].length,a=0,e[r].forEach(o),n===a&&(x.duration[r]=0))}function o(e){.2>Math.abs(t[e]-i[e])&&a++}};var r=function(t,e){t.style("fill",function(t){return t.color}).style("stroke-width",0).style("opacity",p).attr("d",function(t){return y(t.xPos,t.yPos,t.width,0,0)}),t.transition().duration(S).ease(l.elasticOut).delay(w).attrTween("d",m(function(t){return t.next})).on("start",function(){b.enter++}).on("end",function(){0==--b.enter&&e()})};var a=function(t){P&&P.data().forEach(function(t){P.addListener({id:"".concat(v,"_").concat(t.groupId),dispatch:T})}),T.on("highlightStart",function(e){t.filter(function(t){return t.seriesIdx!==e}).transition().duration(150).ease(u.linear).style("opacity",.3*p)}),T.on("highlightEnd",function(e){t.filter(function(t){return t.seriesIdx!==e}).transition().duration(150).ease(u.linear).style("opacity",p)})};var h=[];var v;var g;var p=1;var y=c.barToRight;var m=(0,c.createTweenShape)(y,"y");var x={duration:{x:700,y:400}};var b={enter:0,update:0};var w=0;var S=700;var T=(0,o.default)("highlightStart","highlightEnd","animationStart","animationEnd","animationUpdateEnd","openUrl");var O=function(t){return t.x};var L=function(t){return t.y};var k=d.getTooltip;var P;return Object.assign(t,{data:function(e){return arguments.length?(h=e,t):h},groupId:function(e){return arguments.length?(g=e,t):g},chartId:function(e){return arguments.length?(v=e,t):v},dispatch:function(){return T},alpha:function(e){return arguments.length?(p=e,t):p},tooltip:function(e){return arguments.length?(k=e,t):k},tooltipText:function(e){return arguments.length?(O=e,t):O},tooltipValue:function(e){return arguments.length?(L=e,t):L},transitionDelay:function(e){return arguments.length?(w=e,t):w},transitionDuration:function(e){return arguments.length?(S=e,t):S},legend:function(e){return arguments.length?(P=e,t):P}}),t}},7755:(t,e,r)=>{r.r(e),r.d(e,{adjustScaleToOutsideValues:()=>l});var a=r(498);var n=r.n(a);var i=r(1114);function o(){return{text:0,bar:0,value:0,combined:0}}function l(t){var e=t.scale,r=t.graphs,a=t.axisOptions,l=t.getText,u=t.getTextMetrics,s=t.getValue,c=t.getTextSize,d=t.adjust,f=t.barSize,h=t.textPadding,v=void 0===h?3:h;var g=(0,i.isNumber)(a.maxLimit);var p=(0,i.isNumber)(a.minLimit);if(!g||!p){var y=e.domain();var m=e.copy();m.clamp(!1);var x=u(n().flatten(r.map(function(t){return t.data.map(l)})));var b=n().flatten(r.map(function(t){return t.data}));var w=b.length;var S={neg:o(),pos:o(),bar:{neg:o(),pos:o()}};for(;w--;){var T=s(b[w]);var O=f(T,m);var L=c(x.collection[w])+v;var k=O+L;var P={bar:O,value:T,text:L,combined:k};T>=0?(S.pos.combined<k&&(S.pos=P),S.bar.pos.bar<O&&(S.bar.pos=P)):(S.neg.combined<k&&(S.neg=P),S.bar.neg.bar<O&&(S.bar.neg=P))}var E=Math.max(m(y[0]),m(y[1]));if(S.neg.bar+S.pos.bar===0)return;if(g&&!p){var D=E-S.neg.text;var I=(y[1]-S.neg.value)/(D/E);e.domain([y[1]-I,y[1]])}else if(!g&&p){var A=E-S.pos.text;var j=(S.pos.value-y[0])/(A/E);e.domain([y[0],y[0]+j])}else{var C=S.bar.neg.bar;var G=S.neg.text+S.pos.text;var V=S.neg.bar+S.pos.bar;var M=(y[1]-y[0])/((E-G)/V);var B=[y[0],y[0]+M];m.domain(B);var z=m.invert(0)-m.invert(C-S.neg.combined);e.domain(B.map(function(t){return d(t,z)}))}e.nice(10)}}}}]);