(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f38d85f"],{"07e6":function(e,t,a){a("4d85"),a("a7531")},"17b8":function(e,t,a){var r=a("3014"),i=r.extend({type:"series.bar",dependencies:["grid","polar"],brushSelector:"rect",getProgressive:function(){return!!this.get("large")&&this.get("progressive")},getProgressiveThreshold:function(){var e=this.get("progressiveThreshold"),t=this.get("largeThreshold");return t>e&&(e=t),e}});e.exports=i},"1f0e":function(e,t,a){var r=a("cbe5"),i=r.extend({type:"echartsGaugePointer",shape:{angle:0,width:10,r:10,x:0,y:0},buildPath:function(e,t){var a=Math.cos,r=Math.sin,i=t.r,o=t.width,n=t.angle,l=t.x-a(n)*o*(o>=i/3?1:2),s=t.y-r(n)*o*(o>=i/3?1:2);n=t.angle-Math.PI/2,e.moveTo(l,s),e.lineTo(t.x+a(n)*o,t.y+r(n)*o),e.lineTo(t.x+a(t.angle)*i,t.y+r(t.angle)*i),e.lineTo(t.x-a(n)*o,t.y-r(n)*o),e.lineTo(l,s)}});e.exports=i},3014:function(e,t,a){var r=a("4f85"),i=a("3301"),o=r.extend({type:"series.__base_bar__",getInitialData:function(e,t){return i(this.getSource(),this)},getMarkerPosition:function(e){var t=this.coordinateSystem;if(t){var a=t.dataToPoint(t.clampData(e)),r=this.getData(),i=r.getLayout("offset"),o=r.getLayout("size"),n=t.getBaseAxis().isHorizontal()?0:1;return a[n]+=i+o/2,a}return[NaN,NaN]},defaultOption:{zlevel:0,z:2,coordinateSystem:"cartesian2d",legendHoverLink:!0,barMinHeight:0,barMinAngle:0,large:!1,largeThreshold:400,progressive:3e3,progressiveChunkMode:"mod",itemStyle:{},emphasis:{}}});e.exports=o},"47e1":function(e,t,a){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}var i=a("6f0c"),o=a("4cbb");a("07e6");var n=r(a("6521")),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};function s(e){var t=e.tooltipFormatter,a=e.dataType,r=e.digit;return{formatter:function(e){var o=e.seriesName,n=e.data,l=n.value,s=n.name;if(t)return t.apply(null,arguments);var d=[];return d.push(o+": "),d.push(i.getFormated(l,a[o],r)+" "+s),d.join("")}}}function d(e){var t=e.rows,a=e.dimension,r=e.metrics,n=e.digit,s=e.dataType,d=e.labelMap,c=e.seriesMap,u=e.dataName,f=t.map(function(e){var t=e[a],f=c[t],h={type:"gauge",name:null!=d[t]?d[t]:t,data:[{name:u[t]||"",value:e[r]}],detail:{formatter:function(e){return i.getFormated(e,s[t],n)}},axisLabel:{formatter:function(e){return i.getFormated(e,s[t],n)}}};return f&&Object.keys(f).forEach(function(e){o.isObject(h[e])?l(h[e],f[e]):h[e]=f[e]}),h});return f}var c=function(e,t,a,r){var i=a.dimension,o=void 0===i?e[0]:i,n=a.metrics,l=void 0===n?e[1]:n,c=a.digit,u=void 0===c?2:c,f=a.dataType,h=void 0===f?{}:f,g=a.labelMap,p=void 0===g?{}:g,m=a.seriesMap,y=void 0===m?{}:m,v=a.dataName,x=void 0===v?{}:v,b=r.tooltipFormatter,w=r.tooltipVisible,S=w&&s({tooltipFormatter:b,dataType:h}),M=d({rows:t,dimension:o,metrics:l,digit:u,dataType:h,labelMap:p,seriesMap:y,dataName:x});return{tooltip:S,series:M}},u=l({},n,{name:"VeGauge",data:function(){return this.chartHandler=c,{}}});e.exports=u},"4d85":function(e,t,a){var r=a("e46b"),i=a("4f85"),o=a("6d8b"),n=i.extend({type:"series.gauge",getInitialData:function(e,t){var a=e.data||[];return o.isArray(a)||(a=[a]),e.data=a,r(this,["value"])},defaultOption:{zlevel:0,z:2,center:["50%","50%"],legendHoverLink:!0,radius:"75%",startAngle:225,endAngle:-45,clockwise:!0,min:0,max:100,splitNumber:10,axisLine:{show:!0,lineStyle:{color:[[.2,"#91c7ae"],[.8,"#63869e"],[1,"#c23531"]],width:30}},splitLine:{show:!0,length:30,lineStyle:{color:"#eee",width:2,type:"solid"}},axisTick:{show:!0,splitNumber:5,length:8,lineStyle:{color:"#eee",width:1,type:"solid"}},axisLabel:{show:!0,distance:5,color:"auto"},pointer:{show:!0,length:"80%",width:8},itemStyle:{color:"auto"},title:{show:!0,offsetCenter:[0,"-40%"],color:"#333",fontSize:15},detail:{show:!0,backgroundColor:"rgba(0,0,0,0)",borderWidth:0,borderColor:"#ccc",width:100,height:null,padding:[5,10],offsetCenter:[0,"40%"],color:"auto",fontSize:30}}}),l=n;e.exports=l},"67cc":function(e,t,a){var r=a("4e08"),i=(r.__DEV__,a("3eba")),o=a("6d8b"),n=a("2306"),l=a("e7aa"),s=l.setLabel,d=a("4319"),c=a("b5c7"),u=a("cbe5"),f=["itemStyle","barBorderWidth"];o.extend(d.prototype,c);var h=i.extendChartView({type:"bar",render:function(e,t,a){this._updateDrawMode(e);var r=e.get("coordinateSystem");return"cartesian2d"!==r&&"polar"!==r||(this._isLargeDraw?this._renderLarge(e,t,a):this._renderNormal(e,t,a)),this.group},incrementalPrepareRender:function(e,t,a){this._clear(),this._updateDrawMode(e)},incrementalRender:function(e,t,a,r){this._incrementalRenderLarge(e,t)},_updateDrawMode:function(e){var t=e.pipelineContext.large;(null==this._isLargeDraw||t^this._isLargeDraw)&&(this._isLargeDraw=t,this._clear())},_renderNormal:function(e,t,a){var r,i=this.group,o=e.getData(),l=this._data,s=e.coordinateSystem,d=s.getBaseAxis();"cartesian2d"===s.type?r=d.isHorizontal():"polar"===s.type&&(r="angle"===d.dim);var c=e.isAnimationEnabled()?e:null;o.diff(l).add(function(t){if(o.hasValue(t)){var a=o.getItemModel(t),n=y[s.type](o,t,a),l=g[s.type](o,t,a,n,r,c);o.setItemGraphicEl(t,l),i.add(l),v(l,o,t,a,n,e,r,"polar"===s.type)}}).update(function(t,a){var d=l.getItemGraphicEl(a);if(o.hasValue(t)){var u=o.getItemModel(t),f=y[s.type](o,t,u);d?n.updateProps(d,{shape:f},c,t):d=g[s.type](o,t,u,f,r,c,!0),o.setItemGraphicEl(t,d),i.add(d),v(d,o,t,u,f,e,r,"polar"===s.type)}else i.remove(d)}).remove(function(e){var t=l.getItemGraphicEl(e);"cartesian2d"===s.type?t&&p(e,c,t):t&&m(e,c,t)}).execute(),this._data=o},_renderLarge:function(e,t,a){this._clear(),w(e,this.group)},_incrementalRenderLarge:function(e,t){w(t,this.group,!0)},dispose:o.noop,remove:function(e){this._clear(e)},_clear:function(e){var t=this.group,a=this._data;e&&e.get("animation")&&a&&!this._isLargeDraw?a.eachItemGraphicEl(function(t){"sector"===t.type?m(t.dataIndex,e,t):p(t.dataIndex,e,t)}):t.removeAll(),this._data=null}}),g={cartesian2d:function(e,t,a,r,i,l,s){var d=new n.Rect({shape:o.extend({},r)});if(l){var c=d.shape,u=i?"height":"width",f={};c[u]=0,f[u]=r[u],n[s?"updateProps":"initProps"](d,{shape:f},l,t)}return d},polar:function(e,t,a,r,i,l,s){var d=r.startAngle<r.endAngle,c=new n.Sector({shape:o.defaults({clockwise:d},r)});if(l){var u=c.shape,f=i?"r":"endAngle",h={};u[f]=i?0:r.startAngle,h[f]=r[f],n[s?"updateProps":"initProps"](c,{shape:h},l,t)}return c}};function p(e,t,a){a.style.text=null,n.updateProps(a,{shape:{width:0}},t,e,function(){a.parent&&a.parent.remove(a)})}function m(e,t,a){a.style.text=null,n.updateProps(a,{shape:{r:a.shape.r0}},t,e,function(){a.parent&&a.parent.remove(a)})}var y={cartesian2d:function(e,t,a){var r=e.getItemLayout(t),i=x(a,r),o=r.width>0?1:-1,n=r.height>0?1:-1;return{x:r.x+o*i/2,y:r.y+n*i/2,width:r.width-o*i,height:r.height-n*i}},polar:function(e,t,a){var r=e.getItemLayout(t);return{cx:r.cx,cy:r.cy,r0:r.r0,r:r.r,startAngle:r.startAngle,endAngle:r.endAngle}}};function v(e,t,a,r,i,l,d,c){var u=t.getItemVisual(a,"color"),f=t.getItemVisual(a,"opacity"),h=r.getModel("itemStyle"),g=r.getModel("emphasis.itemStyle").getBarItemStyle();c||e.setShape("r",h.get("barBorderRadius")||0),e.useStyle(o.defaults({fill:u,opacity:f},h.getBarItemStyle()));var p=r.getShallow("cursor");p&&e.attr("cursor",p);var m=d?i.height>0?"bottom":"top":i.width>0?"left":"right";c||s(e.style,g,r,u,l,a,m),n.setHoverStyle(e,g)}function x(e,t){var a=e.get(f)||0;return Math.min(a,Math.abs(t.width),Math.abs(t.height))}var b=u.extend({type:"largeBar",shape:{points:[]},buildPath:function(e,t){for(var a=t.points,r=this.__startPoint,i=this.__valueIdx,o=0;o<a.length;o+=2)r[this.__valueIdx]=a[o+i],e.moveTo(r[0],r[1]),e.lineTo(a[o],a[o+1])}});function w(e,t,a){var r=e.getData(),i=[],o=r.getLayout("valueAxisHorizontal")?1:0;i[1-o]=r.getLayout("valueAxisStart");var n=new b({shape:{points:r.getLayout("largePoints")},incremental:!!a,__startPoint:i,__valueIdx:o});t.add(n),S(n,e,r)}function S(e,t,a){var r=a.getVisual("borderColor")||a.getVisual("color"),i=t.getModel("itemStyle").getItemStyle(["color","borderColor"]);e.useStyle(i),e.style.fill=null,e.style.stroke=r,e.style.lineWidth=a.getLayout("barWidth")}e.exports=h},"94b1":function(e,t,a){var r=a("3eba"),i=a("6d8b"),o=a("9d57"),n=o.layout,l=o.largeLayout;a("5aa9"),a("17b8"),a("67cc"),a("01ed"),r.registerLayout(i.curry(n,"bar")),r.registerLayout(l),r.registerVisual({seriesType:"bar",reset:function(e){e.getData().setVisual("legendSymbol","roundRect")}})},a30e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-card",[e._v("\n    "+e._s(e.$t("else.learn"))+"\n    "),a("a",{staticStyle:{color:"#409eff"},attrs:{href:"https://v-charts.js.org/#/"}},[e._v("v-charts")]),a("br"),e._v("\n    "+e._s(e.$t("else.example"))+"\n    "),a("a",{staticStyle:{color:"#409eff"},attrs:{href:"https://github.com/linjinze999/vue-llplatform/blob/vue-cli3/llplatform/src/views/pages/PageCharts.vue",target:"_blank"}},[e._v("\n      https://github.com/linjinze999/vue-llplatform/blob/vue-cli3/llplatform/src/views/pages/PageCharts.vue\n    ")])]),a("br"),a("el-card",[a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:e.$t("charts.line"),name:"first",lazy:!0}},[a("el-card",{attrs:{shadow:"hover"}},[a("ve-line",{attrs:{data:e.chartData,settings:e.chartSettings}})],1)],1),a("el-tab-pane",{attrs:{label:e.$t("charts.bar"),name:"second",lazy:!0}},[a("el-card",{attrs:{shadow:"hover"}},[a("ve-histogram",{attrs:{data:e.chartData2,settings:e.chartSettings2}})],1)],1),a("el-tab-pane",{attrs:{label:e.$t("charts.gauge"),name:"third",lazy:!0}},[a("el-card",{attrs:{shadow:"hover"}},[a("ve-gauge",{attrs:{data:e.chartData3,"background-color":"#000",settings:e.chartSettings3}})],1)],1)],1)],1)],1)},i=[],o=a("c3da"),n=a.n(o),l=a("d768"),s=a.n(l),d=a("47e1"),c=a.n(d),u={name:"PageCharts",components:{VeLine:n.a,VeHistogram:s.a,VeGauge:c.a},data:function(){return{activeName:"first",chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]},chartSettings:{axisSite:{right:["下单率"]},yAxisType:["KMB","percent"],yAxisName:["数值","比率"]},chartData2:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]},chartSettings2:{axisSite:{right:["下单率"]},yAxisType:["KMB","percent"],yAxisName:["数值","比率"]},chartData3:{columns:["type","value"],rows:[{type:"速度",value:60},{type:"转速",value:80},{type:"油表",value:6e3}]},chartSettings3:{dataName:{"速度":"km/h","转速":"x1000 r/min","油表":"gas"},seriesMap:{"速度":{min:0,max:220,splitNumber:11,radius:"50%",axisLine:{lineStyle:{color:[[.09,"lime"],[.82,"#1e90ff"],[1,"#ff4500"]],width:3,shadowColor:"#fff",shadowBlur:10}},axisLabel:{textStyle:{fontWeight:"bolder",color:"#fff",shadowColor:"#fff",shadowBlur:10}},axisTick:{length:15,lineStyle:{color:"auto",shadowColor:"#fff",shadowBlur:10}},splitLine:{length:25,lineStyle:{width:3,color:"#fff",shadowColor:"#fff",shadowBlur:10}},pointer:{shadowColor:"#fff",shadowBlur:5},title:{textStyle:{fontWeight:"bolder",fontSize:20,fontStyle:"italic",color:"#fff",shadowColor:"#fff",shadowBlur:10}},detail:{backgroundColor:"rgba(30,144,255,0.8)",borderWidth:1,borderColor:"#fff",shadowColor:"#fff",shadowBlur:5,offsetCenter:[0,"50%"],textStyle:{fontWeight:"bolder",color:"#fff"}}},"转速":{center:["10%","55%"],radius:"25%",min:0,max:7,endAngle:45,splitNumber:7,axisLine:{lineStyle:{color:[[.29,"lime"],[.86,"#1e90ff"],[1,"#ff4500"]],width:2,shadowColor:"#fff",shadowBlur:10}},axisLabel:{textStyle:{fontWeight:"bolder",color:"#fff",shadowColor:"#fff",shadowBlur:10}},axisTick:{length:12,lineStyle:{color:"auto",shadowColor:"#fff",shadowBlur:10}},splitLine:{length:20,lineStyle:{width:3,color:"#fff",shadowColor:"#fff",shadowBlur:10}},pointer:{width:5,shadowColor:"#fff",shadowBlur:5},title:{offsetCenter:[0,"-30%"],textStyle:{fontWeight:"bolder",fontStyle:"italic",color:"#fff",shadowColor:"#fff",shadowBlur:10}},detail:{borderColor:"#fff",shadowColor:"#fff",shadowBlur:5,width:80,height:30,offsetCenter:[25,"20%"],textStyle:{fontWeight:"bolder",color:"#fff"}}},"油表":{center:["84%","50%"],radius:"30%",min:0,max:2,startAngle:135,endAngle:45,splitNumber:2,axisLine:{lineStyle:{color:[[.2,"lime"],[.8,"#1e90ff"],[1,"#ff4500"]],width:2,shadowColor:"#fff",shadowBlur:10}},axisTick:{length:12,lineStyle:{color:"auto",shadowColor:"#fff",shadowBlur:10}},axisLabel:{textStyle:{fontWeight:"bolder",color:"#fff",shadowColor:"#fff",shadowBlur:10},formatter:function(e){switch(e+""){case"0":return"E";case"1":return"Gas";case"2":return"F"}}},splitLine:{length:15,lineStyle:{width:3,color:"#fff",shadowColor:"#fff",shadowBlur:10}},pointer:{width:2,shadowColor:"#fff",shadowBlur:5},title:{show:!1},detail:{show:!1}}}}}}},f=u,h=a("2877"),g=Object(h["a"])(f,r,i,!1,null,"5fba8ab0",null);t["default"]=g.exports},a7531:function(e,t,a){var r=a("1f0e"),i=a("2306"),o=a("e887"),n=a("3842"),l=n.parsePercent,s=n.round,d=n.linearMap;function c(e,t){var a=e.get("center"),r=t.getWidth(),i=t.getHeight(),o=Math.min(r,i),n=l(a[0],t.getWidth()),s=l(a[1],t.getHeight()),d=l(e.get("radius"),o/2);return{cx:n,cy:s,r:d}}function u(e,t){return t&&("string"===typeof t?e=t.replace("{value}",null!=e?e:""):"function"===typeof t&&(e=t(e))),e}var f=2*Math.PI,h=o.extend({type:"gauge",render:function(e,t,a){this.group.removeAll();var r=e.get("axisLine.lineStyle.color"),i=c(e,a);this._renderMain(e,t,a,r,i)},dispose:function(){},_renderMain:function(e,t,a,r,o){for(var n=this.group,l=e.getModel("axisLine"),s=l.getModel("lineStyle"),d=e.get("clockwise"),c=-e.get("startAngle")/180*Math.PI,u=-e.get("endAngle")/180*Math.PI,h=(u-c)%f,g=c,p=s.get("width"),m=0;m<r.length;m++){var y=Math.min(Math.max(r[m][0],0),1),v=(u=c+h*y,new i.Sector({shape:{startAngle:g,endAngle:u,cx:o.cx,cy:o.cy,clockwise:d,r0:o.r-p,r:o.r},silent:!0}));v.setStyle({fill:r[m][1]}),v.setStyle(s.getLineStyle(["color","borderWidth","borderColor"])),n.add(v),g=u}var x=function(e){if(e<=0)return r[0][1];for(var t=0;t<r.length;t++)if(r[t][0]>=e&&(0===t?0:r[t-1][0])<e)return r[t][1];return r[t-1][1]};if(!d){var b=c;c=u,u=b}this._renderTicks(e,t,a,x,o,c,u,d),this._renderPointer(e,t,a,x,o,c,u,d),this._renderTitle(e,t,a,x,o),this._renderDetail(e,t,a,x,o)},_renderTicks:function(e,t,a,r,o,n,d,c){for(var f=this.group,h=o.cx,g=o.cy,p=o.r,m=+e.get("min"),y=+e.get("max"),v=e.getModel("splitLine"),x=e.getModel("axisTick"),b=e.getModel("axisLabel"),w=e.get("splitNumber"),S=x.get("splitNumber"),M=l(v.get("length"),p),_=l(x.get("length"),p),A=n,L=(d-n)/w,C=L/S,T=v.getModel("lineStyle").getLineStyle(),D=x.getModel("lineStyle").getLineStyle(),N=0;N<=w;N++){var k=Math.cos(A),I=Math.sin(A);if(v.get("show")){var P=new i.Line({shape:{x1:k*p+h,y1:I*p+g,x2:k*(p-M)+h,y2:I*(p-M)+g},style:T,silent:!0});"auto"===T.stroke&&P.setStyle({stroke:r(N/w)}),f.add(P)}if(b.get("show")){var B=u(s(N/w*(y-m)+m),b.get("formatter")),V=b.get("distance"),G=r(N/w);f.add(new i.Text({style:i.setTextStyle({},b,{text:B,x:k*(p-M-V)+h,y:I*(p-M-V)+g,textVerticalAlign:I<-.4?"top":I>.4?"bottom":"middle",textAlign:k<-.4?"left":k>.4?"right":"center"},{autoColor:G}),silent:!0}))}if(x.get("show")&&N!==w){for(var O=0;O<=S;O++){k=Math.cos(A),I=Math.sin(A);var E=new i.Line({shape:{x1:k*p+h,y1:I*p+g,x2:k*(p-_)+h,y2:I*(p-_)+g},silent:!0,style:D});"auto"===D.stroke&&E.setStyle({stroke:r((N+O/S)/w)}),f.add(E),A+=C}A-=C}else A+=L}},_renderPointer:function(e,t,a,o,n,s,c,u){var f=this.group,h=this._data;if(e.get("pointer.show")){var g=[+e.get("min"),+e.get("max")],p=[s,c],m=e.getData(),y=m.mapDimension("value");m.diff(h).add(function(t){var a=new r({shape:{angle:s}});i.initProps(a,{shape:{angle:d(m.get(y,t),g,p,!0)}},e),f.add(a),m.setItemGraphicEl(t,a)}).update(function(t,a){var r=h.getItemGraphicEl(a);i.updateProps(r,{shape:{angle:d(m.get(y,t),g,p,!0)}},e),f.add(r),m.setItemGraphicEl(t,r)}).remove(function(e){var t=h.getItemGraphicEl(e);f.remove(t)}).execute(),m.eachItemGraphicEl(function(e,t){var a=m.getItemModel(t),r=a.getModel("pointer");e.setShape({x:n.cx,y:n.cy,width:l(r.get("width"),n.r),r:l(r.get("length"),n.r)}),e.useStyle(a.getModel("itemStyle").getItemStyle()),"auto"===e.style.fill&&e.setStyle("fill",o(d(m.get(y,t),g,[0,1],!0))),i.setHoverStyle(e,a.getModel("emphasis.itemStyle").getItemStyle())}),this._data=m}else h&&h.eachItemGraphicEl(function(e){f.remove(e)})},_renderTitle:function(e,t,a,r,o){var n=e.getData(),s=n.mapDimension("value"),c=e.getModel("title");if(c.get("show")){var u=c.get("offsetCenter"),f=o.cx+l(u[0],o.r),h=o.cy+l(u[1],o.r),g=+e.get("min"),p=+e.get("max"),m=e.getData().get(s,0),y=r(d(m,[g,p],[0,1],!0));this.group.add(new i.Text({silent:!0,style:i.setTextStyle({},c,{x:f,y:h,text:n.getName(0),textAlign:"center",textVerticalAlign:"middle"},{autoColor:y,forceRich:!0})}))}},_renderDetail:function(e,t,a,r,o){var n=e.getModel("detail"),s=+e.get("min"),c=+e.get("max");if(n.get("show")){var f=n.get("offsetCenter"),h=o.cx+l(f[0],o.r),g=o.cy+l(f[1],o.r),p=l(n.get("width"),o.r),m=l(n.get("height"),o.r),y=e.getData(),v=y.get(y.mapDimension("value"),0),x=r(d(v,[s,c],[0,1],!0));this.group.add(new i.Text({silent:!0,style:i.setTextStyle({},n,{x:h,y:g,text:u(v,n.get("formatter")),textWidth:isNaN(p)?null:p,textHeight:isNaN(m)?null:m,textAlign:"center",textVerticalAlign:"middle"},{autoColor:x,forceRich:!0})}))}}}),g=h;e.exports=g},b5c7:function(e,t,a){var r=a("282b"),i=r([["fill","color"],["stroke","borderColor"],["lineWidth","borderWidth"],["stroke","barBorderColor"],["lineWidth","barBorderWidth"],["opacity"],["shadowBlur"],["shadowOffsetX"],["shadowOffsetY"],["shadowColor"]]),o={getBarItemStyle:function(e){var t=i(this,e);if(this.getBorderLineDash){var a=this.getBorderLineDash();a&&(t.lineDash=a)}return t}};e.exports=o},d768:function(e,t,a){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}var i=a("89d6"),o=a("6f0c"),n=a("4cbb");a("94b1");var l=r(a("6521")),s=function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e},d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c=.5;function u(e){var t=e.innerRows,a=e.dimAxisName,r=e.dimension,i=e.axisVisible,o=e.dimAxisType,n=e.dims;return r.map(function(e){return{type:"category",name:a,nameLocation:"middle",nameGap:22,data:"value"===o?f(n):t.map(function(t){return t[e]}),axisLabel:{formatter:function(e){return String(e)}},show:i}})}function f(e){for(var t=Math.max.apply(null,e),a=Math.min.apply(null,e),r=[],i=a;i<=t;i++)r.push(i);return r}function h(e){for(var t=e.meaAxisName,a=e.meaAxisType,r=e.axisVisible,i=e.digit,n=e.scale,l=e.min,s=e.max,c={type:"value",axisTick:{show:!1},show:r},u=[],f=function(e){a[e]?u[e]=d({},c,{axisLabel:{formatter:function(t){return o.getFormated(t,a[e],i)}}}):u[e]=d({},c),u[e].name=t[e]||"",u[e].scale=n[e]||!1,u[e].min=l[e]||null,u[e].max=s[e]||null},h=0;h<2;h++)f(h);return u}function g(e){var t=e.axisSite,a=e.isHistogram,r=e.meaAxisType,n=e.digit,l=e.labelMap,s=a?t.right||[]:t.top||[];return l&&(s=s.map(function(e){return void 0===l[e]?e:l[e]})),{trigger:"axis",formatter:function(e){var t=[];return t.push(e[0].name+"<br>"),e.forEach(function(e){var a=e.seriesName,l=~s.indexOf(a)?r[1]:r[0];t.push(i.itemPoint(e.color)),t.push(a+": "),t.push(o.getFormated(e.value,l,n)),t.push("<br>")}),t.join("")}}}function p(e,t){for(var a=Math.max.apply(null,t),r=Math.min.apply(null,t),i=[],o=r;o<=a;o++){var n=t.indexOf(o);~n?i.push(e[n]):i.push(null)}return i}function m(e){var t=e.innerRows,a=e.metrics,r=e.stack,i=e.axisSite,l=e.isHistogram,d=e.labelMap,u=e.itemStyle,f=e.label,h=e.showLine,g=void 0===h?[]:h,m=e.dimAxisType,y=e.barGap,v=e.opacity,x=e.dims,b=[],w={},S=l?i.right||[]:i.top||[],M=l?"yAxisIndex":"xAxisIndex",_=r&&o.getStackMap(r);return a.forEach(function(e){w[e]=[]}),t.forEach(function(e){a.forEach(function(t){w[t].push(e[t])})}),b=Object.keys(w).map(function(e,t){var a="value"===m?p(w[e],x):w[e],i=s({name:null!=d[e]?d[e]:e,type:~g.indexOf(e)?"line":"bar",data:a},M,~S.indexOf(e)?"1":"0");r&&_[e]&&(i.stack=_[e]),f&&(i.label=f),u&&(i.itemStyle=u);var o=v||n.get(i,"itemStyle.normal.opacity");return"value"===m&&(i.barGap=y,i.barCategoryGap="1%",null==o&&(o=c)),null!=o&&n.set(i,"itemStyle.normal.opacity",o),i}),!!b.length&&b}function y(e){var t=e.metrics,a=e.labelMap,r=e.legendName;if(!r&&!a)return{data:t};var i=a?t.map(function(e){return null==a[e]?e:a[e]}):t;return{data:i,formatter:function(e){return null!=r[e]?r[e]:e}}}function v(e,t){return e.map(function(e){return e[t[0]]})}var x=function(e,t,a,r){var i=n.cloneDeep(t),o=a.axisSite,l=void 0===o?{}:o,s=a.dimension,d=void 0===s?[e[0]]:s,c=a.stack,f=void 0===c?{}:c,p=a.axisVisible,x=void 0===p||p,b=a.digit,w=void 0===b?2:b,S=a.dataOrder,M=void 0!==S&&S,_=a.scale,A=void 0===_?[!1,!1]:_,L=a.min,C=void 0===L?[null,null]:L,T=a.max,D=void 0===T?[null,null]:T,N=a.labelMap,k=void 0===N?{}:N,I=a.legendName,P=void 0===I?{}:I,B=a.label,V=a.itemStyle,G=a.showLine,O=a.barGap,E=void 0===O?"-100%":O,W=a.opacity;if(M){var H=M.label,j=M.order;H&&j?i.sort(function(e,t){return"desc"===j?e[H]-t[H]:t[H]-e[H]}):console.warn("Need to provide name and order parameters")}var z=r.tooltipVisible,R=r.legendVisible,F=e.slice();l.left&&l.right?F=l.left.concat(l.right):l.left&&!l.right?F=l.left:a.metrics?F=a.metrics:F.splice(e.indexOf(d[0]),1);var $=a.yAxisType||["normal","normal"],J=a.xAxisType||"category",K=a.yAxisName||[],X=a.xAxisName||"",Y=!0,q=v(i,d),Q=R&&y({metrics:F,labelMap:k,legendName:P}),U=u({innerRows:i,dimAxisName:X,dimension:d,axisVisible:x,dimAxisType:J,dims:q}),Z=h({meaAxisName:K,meaAxisType:$,axisVisible:x,digit:w,scale:A,min:C,max:D}),ee=m({innerRows:i,metrics:F,stack:f,axisSite:l,isHistogram:Y,labelMap:k,itemStyle:V,label:B,showLine:G,dimAxisType:J,dimension:d,barGap:E,opacity:W,dims:q}),te={axisSite:l,isHistogram:Y,meaAxisType:$,digit:w,labelMap:k},ae=z&&g(te),re={legend:Q,yAxis:Z,series:ee,xAxis:U,tooltip:ae};return re},b=d({},l,{name:"VeHistogram",data:function(){return this.chartHandler=x,{}}});e.exports=b},e46b:function(e,t,a){var r=a("b1d4"),i=a("6179"),o=a("6d8b"),n=o.extend,l=o.isArray;function s(e,t,a){t=l(t)&&{coordDimensions:t}||n({},t);var o=e.getSource(),s=r(o,t),d=new i(s,e);return d.initData(o,a),d}e.exports=s},e7aa:function(e,t,a){var r=a("2306"),i=a("c775"),o=i.getDefaultLabel;function n(e,t,a,i,n,s,d){var c=a.getModel("label"),u=a.getModel("emphasis.label");r.setLabelStyle(e,t,c,u,{labelFetcher:n,labelDataIndex:s,defaultText:o(n.getData(),s),isRectText:!0,autoColor:i}),l(e),l(t)}function l(e,t){"outside"===e.textPosition&&(e.textPosition=t)}t.setLabel=n}}]);
//# sourceMappingURL=chunk-4f38d85f.db0ca5b2.js.map