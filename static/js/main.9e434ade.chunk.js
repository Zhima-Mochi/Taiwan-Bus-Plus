(this.webpackJsonpbus=this.webpackJsonpbus||[]).push([[0],{33:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),a=n(27),s=n.n(a),r=n(4),o=(n(33),n(53),n(54),n(2)),u=n(45),l=n(3),j=n(5),h=n.n(j),d=n(10),b=n(16),f=n.n(b),m=n(46);var p=function(){var t=(new Date).toGMTString(),e=new m.a("SHA-1","TEXT");return e.setHMACKey("M0d0Qrehr5K5sB9wX5-jBTxMHNI","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="daae9592f5774bf6bfc0817806ca572f", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}};function O(t,e){return x.apply(this,arguments)}function x(){return(x=Object(d.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/".concat(e,"?$select=Direction%2CStops&$filter=RouteUID%20eq%20'").concat(n,"'&$format=JSON"),headers:p()}).then((function(t){return t.data})).catch((function(t){return console.log("error: StopOfRoute ",t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return g=Object(d.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/".concat(e,"?$select=PlateNumb%2CStopUID%2CStopName%2CRouteUID%2CRouteName%2CSubRouteUID%2CSubRouteName%2CDirection%2CEstimateTime%2CCurrentStop%2CDestinationStop%2CStopSequence%2CStopStatus%2CNextBusTime%2CIsLastBus%2CSrcUpdateTime&$filter=RouteUID%20eq%20'").concat(n,"'&$orderby=StopSequence&$format=JSON"),headers:p()}).then(function(){var t=Object(d.a)(h.a.mark((function t(c){var i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=c.data,t.abrupt("return",O(e,n).then((function(t){t&&t.length>0?i.forEach((function(e){e.StopSequence=t.find((function(t){return e.Direction===t.Direction})).Stops.find((function(t){return t.StopUID===e.StopUID})).StopSequence})):i.forEach((function(t,e){t.StopSequence=e}))})).then((function(){var t={0:[],1:[],2:[],255:[]};for(var e in i.forEach((function(e){t[e.Direction].push(e)})),t)t[e]=t[e].sort((function(t,e){return+t.StopSequence<+e.StopSequence?-1:1}));return t})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.log("error: estimated arrival ",t)})));case 1:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}var v={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",Tainan:"\u81fa\u5357\u5e02",KinmenCounty:"\u91d1\u9580\u7e23",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02"},S={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23"},N={NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23",Taipei:"\u81fa\u5317\u5e02"};function y(){return(y=Object(d.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/".concat(e,"?$filter=RouteUID%20eq%20'").concat(n,"'&$format=JSON"),headers:p()}).then((function(t){return t.data})).then((function(t){var e={0:[],1:[],2:[],255:[]};for(var n in t.forEach((function(t){e[t.Direction].push(t)})),e)e[n]=e[n].sort((function(t,e){return+t.StopSequence<+e.StopSequence?-1:1}));return e})).catch((function(t){return console.log("error: ".concat(N[e],"\u516c\u8eca\u7ad9\u724c\u8cc7\u6599 "),t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=n(85),w=n(86),_=n(87),I=n(89),D=n.p+"static/media/pin.9bb06f23.svg",k=n.p+"static/media/directions_bus_filled_24dp.1adceefa.svg",R=n.p+"static/media/radio_button_checked_black_24dp.9a33b9ed.svg",E=n(7),U=n(0),T=new E.Icon({iconUrl:D,iconSize:[24,24],className:"leaflet-marker-icon pin-icon red"}),P=new E.Icon({iconUrl:R,iconSize:[36,36],className:"leaflet-marker-icon"});function M(t){var e=t.stopsOfRoute,n=t.direction;t.mapStop;return e[n]&&e[n][0]?e[n][0].Stops.map((function(t,e,n){return Object(U.jsx)("div",{children:Object(U.jsx)(C.a,{position:[t.StopPosition.PositionLat,t.StopPosition.PositionLon],icon:P,children:Object(U.jsx)(w.a,{children:Object(U.jsx)("span",{children:t.StopName.Zh_tw})})})},t.StopUID)})):null}function B(t){var e=t.stopsOfRoute,n=t.direction,i=t.mapStop,a=Object(c.useContext)(Ht),s=(Object(c.useContext)(Lt),Object(c.useState)(null)),r=Object(o.a)(s,2),u=r[0],l=r[1];return Object(c.useEffect)((function(){if(u&&e[n]&&e[n][0]&&e[n][0].Stops.length){var t=e[n][0].Stops[0].StopPosition;if(i&&i[n]){var c=e[n][0].Stops.find((function(t){return t.StopUID===i}));c&&(t=c.StopPosition)}u.setView([t.PositionLat,t.PositionLon])}}),[u,e,n,i]),Object(U.jsxs)(_.a,{center:[22.9977325,120.2141299],zoom:16,scrollWheelZoom:!1,whenCreated:l,children:[Object(U.jsx)(I.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(U.jsx)(C.a,{position:[a.latitude,a.longitude],icon:T,children:Object(U.jsx)(w.a,{children:Object(U.jsx)("div",{className:"pin-here",children:"\u4f60\u5728\u9019\u88e1"})})}),Object(U.jsx)(M,{mapStop:i,stopsOfRoute:e,direction:n})]})}var L=n.p+"static/media/map.b03c20b2.svg",A={0:"\u6b63\u5e38",1:"\u672a\u767c\u8eca",2:"\u4e0d\u505c\u9760",3:"\u672b\u73ed\u5df2\u904e",4:"\u4eca\u672a\u71df\u904b"};function H(t){if(t.StopStatus>1)return A[t.StopStatus];if(0===t.StopStatus||t.EstimateTime){var e=Math.ceil(t.EstimateTime/60);return e>2?e+" \u5206":2===e?"\u5373\u5c07\u9032\u7ad9":"\u9032\u7ad9\u4e2d"}if(t.NextBusTime){var n=new Date(t.NextBusTime),c="0"+n.getHours(),i="0"+n.getMinutes();return c.slice(c.length-2)+":"+i.slice(i.length-2)}return A[1]}function J(t){var e=t.data,n=t.pinStop,i=t.direction,a=t.setMapStop,s=function(t){return t.StopStatus>1?2:0===t.StopStatus||t.EstimateTime?Math.ceil(t.EstimateTime/60)<=2?1:0:2}(e);return Object(c.useEffect)((function(){if(n[i]===e.StopUID){var t=document.getElementById(n[i]),c=document.getElementById("timeList");t&&(c.scrollTop=t.offsetTop-2*t.clientHeight,t.style.backgroundColor="lightblue")}}),[n,i]),Object(U.jsxs)("div",{id:e.StopUID,onClick:function(){a(e.StopUID)},className:"flex items-center arrival-time-item "+(1===s&&"bg-gray-100"),children:[Object(U.jsx)("div",{className:"flex justify-center items-center arrival-time-estimated-time "+(1===s?"comming":2===s?"gray":""),children:Object(U.jsx)("div",{children:H(e)})}),Object(U.jsx)("div",{className:" ml-8 arrival-time-stop-name flex justify-between",children:e.StopName.Zh_tw})]})}function Z(t,e){var n=1e5*(t.StopPosition.PositionLon-e.longitude),c=1e5*(t.StopPosition.PositionLat-e.latitude);return Math.pow(Math.pow(n,2)+Math.pow(c,2),.5)}function z(t){var e=t.estimateData,n=t.RouteData,i=Object(c.useState)(0),a=Object(o.a)(i,2),s=a[0],r=a[1],u=Object(c.useState)({}),l=Object(o.a)(u,2),j=l[0],h=l[1],d=Object(c.useState)(""),b=Object(o.a)(d,2),f=b[0],m=b[1],p=Object(c.useContext)(Ht),O=Object(c.useState)([]),x=Object(o.a)(O,2),g=x[0],v=x[1],S=Object(c.useState)(!0),N=Object(o.a)(S,2),C=N[0],w=N[1];return Object(c.useEffect)((function(){n&&function(t,e){return y.apply(this,arguments)}(n.City,n.RouteUID).then((function(t){return v(t)}))}),[n]),Object(c.useEffect)((function(){var t={},e=1e4,n="";g[0]&&g[0][0]&&g[0][0].Stops.forEach((function(t){var c=Z(t,p);c<e&&c<500&&(e=c,n=t.StopUID)})),t[0]=n,e=1e4,n="",g[1]&&g[1][0]&&g[1][0].Stops.forEach((function(t){var c=Z(t,p);c<e&&c<500&&(e=c,n=t.StopUID)})),t[1]=n,e=1e4,n="",g[2]&&g[2][0]&&g[2][0].Stops.forEach((function(t){var c=Z(t,p);c<e&&c<500&&(e=c,n=t.StopUID)})),t[2]=n,h(t)}),[g,p]),Object(U.jsxs)("div",{className:"arrival-time-block h-full flex flex-col",children:[Object(U.jsxs)("div",{className:"flex justify-between",children:[Object(U.jsx)("span",{}),Object(U.jsxs)("div",{className:"flex justify-center items-center tracking-widest mr-1 cursor-pointer py-1",onClick:function(){return w(!C)},children:[Object(U.jsx)("img",{src:L,className:"h-4 mr-2",alt:"\u5730\u5716\u5716\u6848"}),C?"\u6253\u958b\u5730\u5716":"\u6536\u8d77\u5730\u5716"]})]}),Object(U.jsx)("div",{className:"grow-0 transition-all "+(C?"h-0":"h-60 lg:h-80"),children:Object(U.jsx)("div",{className:"w-full  h-60 lg:h-80",children:j&&g&&Object(U.jsx)(B,{stopsOfRoute:g,mapStop:f,direction:s,data:e})})}),Object(U.jsxs)("div",{className:"z-10 bg-white",children:[Object(U.jsxs)("div",{className:"flex items-center ",children:[0 in e&&e[0].length>0&&Object(U.jsxs)("div",{className:"flex-1 flex items-center justify-center arrival-time-direction-toggle "+(0===s?"on":null),onClick:function(){return r(0)},children:["\u5f80\xa0",Object(U.jsx)("span",{className:"font-bold",children:n.DestinationStopNameZh})]}),1 in e&&e[1].length>0&&Object(U.jsxs)("div",{className:"flex-1 flex items-center justify-center arrival-time-direction-toggle "+(1===s?"on":null),onClick:function(){return r(1)},children:["\u5f80\xa0",Object(U.jsx)("span",{className:"font-bold",children:n.DepartureStopNameZh})]}),2 in e&&e[2].length>0&&Object(U.jsx)("div",{className:"flex-1 flex items-center justify-center arrival-time-direction-toggle "+(2===s?"on":null),onClick:function(){return r(2)},children:Object(U.jsx)("span",{className:"font-bold",children:"\u8ff4\u5708"})})]}),Object(U.jsx)("div",{id:"timeList",className:"max-h-screen bg-white shadow-lg   px-4  overflow-auto relative",style:{height:C?"75vh":"30vh"},children:s in e&&e[s].map((function(t){return Object(U.jsx)(J,{setMapStop:m,data:t,pinStop:j,direction:s},t.StopSequence)}))})]})]})}var q=n.p+"static/media/favorite_24dp.53c45348.svg",$=n.p+"static/media/favorite_border_24dp.e0f3e7ea.svg";function K(t){var e=t.RouteUID,n=t.className,i=Object(c.useState)(!1),a=Object(o.a)(i,2),s=a[0],r=a[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("liked_bus_route_list"));t||(localStorage.setItem("liked_bus_route_list",JSON.stringify([])),t=JSON.parse(localStorage.getItem("liked_bus_route_list"))),r(!!t.find((function(t){return t===e})))}),[e]),Object(U.jsx)("img",{className:n+" p-3 ",src:s?q:$,alt:s?"\u5df2\u6536\u85cf liked":"\u6536\u85cf\u4ed6 like",onClick:function(t){t.preventDefault(),function(){if(s){var t=JSON.parse(localStorage.getItem("liked_bus_route_list")),n=t.findIndex((function(t){return t===e}));-1!==n&&(t.splice(n,1),localStorage.setItem("liked_bus_route_list",JSON.stringify(t))),r(!1)}else{var c=JSON.parse(localStorage.getItem("liked_bus_route_list"));-1===c.findIndex((function(t){return t===e}))&&(c.push(e),localStorage.setItem("liked_bus_route_list",JSON.stringify(c))),r(!0)}}()}})}var F=n.p+"static/media/west_24dp.77f97c6f.svg";function Y(t){var e=t.content,n=void 0===e?"\u8fd4\u56de\u4e0a\u9801":e,c=Object(l.f)();return Object(U.jsx)("div",{className:"bg-white view-border pt-4 flex pl-1",children:Object(U.jsxs)("div",{className:"flex",onClick:function(){return c.goBack()},style:{cursor:"pointer"},children:[Object(U.jsx)("img",{src:F,alt:"\u56de\u4e0a\u4e00\u9801 back to previous page"}),Object(U.jsx)("span",{className:"ml-2",children:n})]})})}function X(t){var e=t.RouteData;return Object(U.jsx)(U.Fragment,{children:Object(U.jsxs)("div",{className:"bg-white flex justify-center items-center h-16 px-4",children:[Object(U.jsx)("span",{className:"ml-10",children:"\xa0"}),Object(U.jsx)("div",{className:"bus-estimated-time-routename",children:e.RouteName.Zh_tw}),Object(U.jsx)("div",{children:Object(U.jsx)(K,{RouteUID:e.RouteUID})})]})})}var W=n(17),V=n(15),G=n(18),Q=function(){function t(){Object(V.a)(this,t),this.indices=[],this.children={}}return Object(G.a)(t,[{key:"getAllIndices",value:function(){var t=this,e=Object(W.a)(t.indices);return Object.entries(t.children).length>0&&Object.values(t.children).forEach((function(t){e.push.apply(e,Object(W.a)(t.getAllIndices()))})),e}}]),t}(),tt=function(){function t(){Object(V.a)(this,t),this.root=new Q}return Object(G.a)(t,[{key:"insert",value:function(t,e){for(var n=this.root,c=0;c<t.length;++c)n.children[t[c]]||(n.children[t[c]]=new Q),n=n.children[t[c]],c===t.length-1&&n.indices.push(e)}},{key:"findAllIndices",value:function(t){for(var e=this.root,n=[],c=0;c<t.length;++c){if(!e.children[t[c]])return n;e=e.children[t[c]]}return e.getAllIndices()}}]),t}();function et(t){return nt.apply(this,arguments)}function nt(){return(nt=Object(d.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/".concat(e,"?$format=JSON"),headers:p()}).then((function(t){return t.data})).catch((function(t){return console.log("error: ".concat(S[e],"\u516c\u8eca\u8def\u7dda\u8cc7\u6599 "),t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ct(){return(ct=Object(d.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],Object.keys(S).forEach((function(t){e.push(et(t))})),n=[],t.abrupt("return",Promise.all(e).then((function(t){return t.forEach((function(t){return n.push.apply(n,Object(W.a)(t))}))})).then((function(){return n})).catch((function(t){console.log("error: getAllBusCityRoute() ",t)})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function it(t){var e=t.route_list,n=t.busRoute,i=t.inputContent,a=void 0===i?"":i,s=Object(c.useState)(""),u=Object(o.a)(s,2),l=u[0],j=u[1];return 0===a.length&&""!==l&&(e=n),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"flex justify-between mx-4 my-1",children:[Object(U.jsx)("span",{}),Object(U.jsxs)("select",{className:"bg-white",onChange:function(t){return j(t.target.value)},children:[Object(U.jsx)("option",{value:"",children:"\u5168\u7e23\u5e02"}),Object.entries(S).map((function(t){return Object(U.jsx)("option",{value:t[0],children:t[1]},t[0])}))]})]}),Object(U.jsx)("div",{className:"max-h-screen overflow-y-auto shadow-lg ",style:{height:"75vh"},children:e.filter((function(t){return(""===l||t.City===l)&&t})).map((function(t,e){return Object(U.jsx)(r.b,{to:"/bus_estimated_time/".concat(t.RouteUID),children:Object(U.jsxs)("div",{className:"route-search-item",children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("span",{className:"route-name",children:t.RouteName.Zh_tw}),Object(U.jsxs)("span",{className:"route-city",children:["\uff08",S[t.City],"\uff09"]}),Object(U.jsx)("br",{}),Object(U.jsxs)("span",{className:"route-depart-dest",children:[t.DepartureStopNameZh,"-",t.DestinationStopNameZh]})]}),Object(U.jsx)(K,{RouteUID:t.RouteUID})]})},t.RouteUID)}))})]})}var at=n.p+"static/media/search_black_24dp.b56cb96d.svg";function st(t){var e=t.inputHandle;return Object(U.jsx)("div",{className:"flex justify-center items-center",children:Object(U.jsxs)("div",{className:"input-window flex justify-center items-center ",children:[Object(U.jsx)("img",{src:at,className:"lookup",alt:"\u5c0b\u627e\u8def\u7dda serach icon"}),Object(U.jsx)("input",{className:"input",inputMode:"numeric",placeholder:"\u8acb\u8f38\u5165\u516c\u8eca\u8def\u7dda\u6216\u865f\u78bc",autoComplete:"off",onChange:function(t){return e(t.target.value)}})]})})}function rt(t){return ot.apply(this,arguments)}function ot(){return(ot=Object(d.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/Station/City/".concat(e,"?$format=JSON"),headers:p()}).then((function(t){var n=t.data;return n=n.map((function(t){return t.StationEnName=t.Stops[0].StopName.En,t.Stops=t.Stops.map((function(t){return{StopUID:t.StopUID,RouteUID:t.RouteUID}})),{City:e,StationUID:t.StationUID,StationName:t.StationName.Zh_tw,StationEnName:t.StationEnName,StationPosition:t.StationPosition,StationAddress:t.StationAddress,Stops:t.Stops}}))})).catch((function(t){return console.log("error: ".concat(v[e],"\u516c\u8eca\u7ad9\u4f4d\u8cc7\u6599 "),t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ut(){return(ut=Object(d.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],Object.keys(v).forEach((function(t){e.push(rt(t))})),n=[],t.abrupt("return",Promise.all(e).then((function(t){return t.forEach((function(t){var e;return(e=n).push.apply(e,Object(W.a)(t))}))})).then((function(){return n=n.sort((function(t,e){return t.StationPosition.PositionLon<e.StationPosition.PositionLon?-1:1}))})).catch((function(t){console.log("error: getAllBusCityStation() ",t)})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function lt(t,e,n,c){for(;n<c;){var i=Math.floor(n+(c-n)/2);t[i].StationPosition.PositionLon<e?n=i+1:c=i}return n}function jt(t,e){var n=1e5*(t.StationPosition.PositionLon-e.longitude),c=1e5*(t.StationPosition.PositionLat-e.latitude);return Math.pow(Math.pow(n,2)+Math.pow(c,2),.5)}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;if(0===t.length)return[];for(var c=n/1e5,i=lt(t,e.longitude+c,0,t.length),a=lt(t,e.longitude-c,0,i),s=[],r=a;r<i;++r)jt(t[r],e)<n&&s.push(t[r]);return s}function dt(t){var e=t.station_list,n=t.busStation,i=t.inputContent,a=void 0===i?"":i,s=Object(c.useContext)(At),u=Object(c.useState)(""),l=Object(o.a)(u,2),j=l[0],h=l[1],d=Object(c.useState)({}),b=Object(o.a)(d,2),f=b[0],m=b[1];return Object(c.useState)((function(){var t={};n.forEach((function(e){t[e.City]||(t[e.City]=[]),t[e.City].length<500&&t[e.City].push(e)})),m(t)}),[n]),0===a.length&&""!==j&&f[j]&&(e=f[j]),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)("div",{className:"flex justify-between mx-4 my-1",children:[Object(U.jsx)("span",{}),Object(U.jsxs)("select",{className:"bg-white",onChange:function(t){return h(t.target.value)},children:[Object(U.jsx)("option",{value:"",children:"\u5168\u7e23\u5e02"}),Object.entries(v).map((function(t){return Object(U.jsx)("option",{value:t[0],children:t[1]},t[0])}))]})]}),Object(U.jsx)("div",{className:"max-h-screen overflow-y-auto shadow-lg ",style:{height:"75vh"},children:e.filter((function(t){return(""===j||t.City===j)&&t})).map((function(t){return Object(U.jsxs)("div",{className:"station-search-item",children:[Object(U.jsx)("span",{className:"station-name",children:t.StationName}),Object(U.jsxs)("span",{className:"station-city",children:["\uff08",v[t.City],"\uff09"]}),Object(U.jsx)("span",{className:"station-address",children:t.StationAddress}),Object(U.jsx)("br",{}),Object(U.jsx)("span",{children:"\u7ad9\u9ede\u8def\u7dda\uff1a"}),Object(U.jsx)("div",{className:"flex flex-wrap",children:t.Stops.map((function(t,e){return Object(U.jsx)(r.b,{to:"/bus_estimated_time/".concat(t.RouteUID),children:Object(U.jsx)("span",{className:"pin-icon-route-name",children:s.find((function(e){return e.RouteUID===t.RouteUID})).RouteName.Zh_tw})},e)}))})]},t.StationUID)}))})]})}function bt(t){var e=t.inputHandle;return Object(U.jsx)("div",{className:"flex justify-center items-center",children:Object(U.jsxs)("div",{className:"input-window flex justify-center items-center ",children:[Object(U.jsx)("img",{src:at,className:"lookup",alt:"\u5c0b\u627e\u8def\u7dda serach icon"}),Object(U.jsx)("input",{className:"input",placeholder:"\u8acb\u8f38\u5165\u7ad9\u9ede\u540d\u7a31",autoComplete:"off",onChange:function(t){return e(t.target.value)}})]})})}var ft=n.p+"static/media/bus_c1.01261033.svg",mt=n.p+"static/media/bus_c2.3a493e43.svg",pt=(n.p,n.p+"static/media/bus_c4.94f6594e.svg"),Ot=n.p+"static/media/bus_c5.475883a6.svg";function xt(){return Object(U.jsx)("div",{className:"banner",children:Object(U.jsxs)("article",{className:"article",children:[Object(U.jsx)("h1",{className:"mt-12",children:"\u53f0\u7063\u516c\u8eca\u52d5\u614b"}),Object(U.jsx)("p",{className:"mt-4 text-gray-200",children:"\u6642\u523b\u67e5\u8a62\u7cfb\u7d71"}),Object(U.jsx)("p",{className:"mt-5 text-gray-400 tracking-normal text-xs lg:text-sm",children:"TAIWAN BUS+"})]})})}var gt=new E.Icon({iconUrl:D,iconSize:[24,24],className:"leaflet-marker-icon pin-icon red"}),vt=new E.Icon({iconUrl:k,iconSize:[36,36],className:"leaflet-marker-icon"});function St(t){var e=t.nearByBusStation,n=Object(c.useContext)(At);return e.map((function(t){return Object(U.jsx)(C.a,{position:[t.StationPosition.PositionLat,t.StationPosition.PositionLon],icon:vt,children:Object(U.jsxs)(w.a,{children:[Object(U.jsx)("span",{className:"pin-icon-station-name",children:t.StationName}),Object(U.jsx)("br",{}),Object(U.jsx)("span",{className:"pin-icon-station-address",children:t.StationAddress}),Object(U.jsx)("br",{}),t.Stops.map((function(t,e){return Object(U.jsx)(r.b,{to:"/bus_estimated_time/".concat(t.RouteUID),children:Object(U.jsx)("span",{className:"pin-icon-route-name",children:n.find((function(e){return e.RouteUID===t.RouteUID})).RouteName.Zh_tw})},t.RouteUID)}))]})},t.StationUID)}))}function Nt(){var t=Object(c.useContext)(Ht),e=Object(c.useContext)(Lt),n=Object(c.useState)(null),i=Object(o.a)(n,2),a=i[0],s=i[1],r=Object(c.useState)([]),u=Object(o.a)(r,2),l=u[0],j=u[1];return Object(c.useEffect)((function(){a&&a.setView([t.latitude,t.longitude])}),[a,t]),Object(c.useEffect)((function(){j(ht(e,t))}),[e,t]),Object(U.jsxs)(_.a,{center:[22.9977325,120.2141299],zoom:16,scrollWheelZoom:!1,whenCreated:s,children:[Object(U.jsx)(I.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(U.jsx)(C.a,{position:[t.latitude,t.longitude],icon:gt,children:Object(U.jsxs)(w.a,{children:[Object(U.jsx)("div",{className:"pin-here",children:"\u4f60\u5728\u9019\u88e1"}),"\u9644\u8fd1\u6709",Object(U.jsx)("span",{className:"text-blue-800 font-bold mx-1",children:l.length}),"\u500b\u7ad9\u9ede"]})}),Object(U.jsx)(St,{nearByBusStation:l})]})}var yt=[{path:"/",exact:!0,component:function(){return Object(U.jsxs)("div",{children:[Object(U.jsx)(xt,{}),Object(U.jsxs)("section",{className:"view-border h-full lg:flex justify-between",children:[Object(U.jsx)(r.c,{to:"/find_bus_route/",children:Object(U.jsxs)("div",{className:"home-btn",children:[Object(U.jsx)("img",{src:ft,alt:"\u516c\u8eca\u5716\u6848"}),Object(U.jsx)("span",{className:"c1 ml-2",children:"\u5c0b\u627e\u8def\u7dda"})]})}),Object(U.jsx)(r.c,{to:"/near_by_bus_station/",children:Object(U.jsxs)("div",{className:"home-btn",children:[Object(U.jsx)("img",{src:Ot,alt:"\u516c\u8eca\u5716\u6848"}),Object(U.jsx)("span",{className:"c5 ml-2",children:"\u9644\u8fd1\u7ad9\u9ede"})]})}),Object(U.jsx)(r.c,{to:"/find_bus_station/",children:Object(U.jsxs)("div",{className:"home-btn",children:[Object(U.jsx)("img",{src:mt,alt:"\u516c\u8eca\u5716\u6848"}),Object(U.jsx)("span",{className:"c2 ml-2",children:"\u7ad9\u9ede\u67e5\u8a62"})]})}),Object(U.jsx)(r.c,{to:"/liked_list/",children:Object(U.jsxs)("div",{className:"home-btn",children:[Object(U.jsx)("img",{src:pt,alt:"\u516c\u8eca\u5716\u6848"}),Object(U.jsx)("span",{className:"c4 ml-2",children:"\u6536\u85cf\u6e05\u55ae"})]})})]})]})}},{path:"/find_bus_route/",exact:!1,component:function(){var t=Object(c.useContext)(At),e=Object(c.useState)(""),n=Object(o.a)(e,2),i=n[0],a=n[1],s=Object(c.useState)([]),r=Object(o.a)(s,2),u=r[0],l=r[1],j=Object(c.useState)(new tt),h=Object(o.a)(j,2),d=h[0],b=h[1];return Object(c.useEffect)((function(){t&&b(function(t){var e=new tt;return t.forEach((function(t,n){t.RouteName.Zh_tw&&e.insert(t.RouteName.Zh_tw,n),t.RouteName.En&&t.RouteName.En!==t.RouteName.Zh_tw&&e.insert(t.RouteName.En,n)})),e}(t))}),[t]),Object(c.useEffect)((function(){i.length>0?l(d.findAllIndices(i).sort().filter((function(t,e,n){return 0===e||n[e-1]!==n[e]})).map((function(e){return t[e]})).sort((function(t,e){return t.RouteName.Zh_tw.length<e.RouteName.Zh_tw.length?-1:1}))):l(t.slice(0,50))}),[i,d,t]),Object(U.jsxs)("section",{className:"bg-white pt-4 lg:pb-10  ",children:[Object(U.jsx)(Y,{}),Object(U.jsxs)("div",{className:"view-border",children:[Object(U.jsx)(st,{inputHandle:function(t){a(t)}}),Object(U.jsx)(it,{route_list:u,busRoute:t,inputContent:i})]})]})}},{path:"/bus_estimated_time/:RouteUID",exact:!1,component:function(){var t=Object(c.useContext)(At),e=Object(l.g)().RouteUID,n=t.find((function(t){return t.RouteUID===e})),i=Object(c.useState)([]),a=Object(o.a)(i,2),s=a[0],r=a[1],u=Object(c.useState)(0),j=Object(o.a)(u,2),h=j[0],d=j[1],b=Object(c.useCallback)((function(){h>0&&d(h-1)}),[h]);return Object(c.useEffect)((function(){var t=setInterval(b,1e3);return function(){clearInterval(t)}}),[b]),Object(c.useEffect)((function(){0===h&&n&&function(t,e){return g.apply(this,arguments)}(n.City,n.RouteUID).then((function(t){r(t)})).then((function(){return d(10)})).then((function(){}))}),[h,n,s]),Object(U.jsxs)("div",{className:"h-full flex flex-col",children:[Object(U.jsx)(Y,{}),n&&Object(U.jsx)(X,{RouteData:n}),Object(U.jsx)("div",{className:"bg-white tracking-widest sticky top-0 z-10",children:Object(U.jsxs)("div",{className:" text-right lg:text-center py-1",children:[h,"\u79d2\u5f8c\u66f4\u65b0"]})}),Object(U.jsx)("div",{className:"view-border lg:pb-10 h-full flex flex-col",children:s?Object(U.jsx)(z,{estimateData:s,RouteData:n}):Object(U.jsx)("div",{className:"flex justify-center items-center my-10",children:Object(U.jsx)("p",{children:"\u51fa\u554f\u984c\u4e86\uff01\u8acb\u56de\u5230\u4e0a\u4e00\u9801\u91cd\u6574\u4e26\u518d\u8a66\u4e00\u6b21\u3002"})})})]})}},{path:"/near_by_bus_station/",exact:!1,component:function(){return Object(U.jsxs)("section",{className:"h-full",children:[Object(U.jsxs)("div",{children:[Object(U.jsx)(Y,{}),Object(U.jsx)("div",{className:"  flex justify-center items-center h-20",children:Object(U.jsx)("div",{className:"bus-stationname",children:"\u9644\u8fd1\u7684\u516c\u8eca\u7ad9\u9ede"})})]}),Object(U.jsx)("div",{className:"",children:Object(U.jsx)("div",{className:"w-screen  max-w-full lg:shadow-lg",style:{height:"70vh"},children:Object(U.jsx)(Nt,{})})})]})}},{path:"/find_bus_station/",exact:!1,component:function(){var t=Object(c.useContext)(Lt),e=Object(c.useState)(""),n=Object(o.a)(e,2),i=n[0],a=n[1],s=Object(c.useState)([]),r=Object(o.a)(s,2),u=r[0],l=r[1],j=Object(c.useState)(new tt),h=Object(o.a)(j,2),d=h[0],b=h[1],f=Object(c.useContext)(Ht),m=Object(c.useState)([]),p=Object(o.a)(m,2),O=p[0],x=p[1];return Object(c.useEffect)((function(){x(ht(t,f))}),[t,f]),Object(c.useEffect)((function(){t&&b(function(t){var e=new tt;return t.forEach((function(t,n){t.StationName&&e.insert(t.StationName,n),t.StationEnName&&t.StationEnName!==t.StationName&&e.insert(t.StationEnName,n)})),e}(t))}),[t]),Object(c.useEffect)((function(){if(i.length>0)l(d.findAllIndices(i).sort().filter((function(t,e,n){return 0===e||n[e-1]!==n[e]})).map((function(e){return t[e]})).sort((function(t,e){return t.StationName.length<e.StationName.length?-1:1})));else if(O.length>0)l(O);else{var e=Math.floor(t.length/2);l(t.slice(e,e+10))}}),[i,d,t,O]),Object(U.jsxs)("section",{className:"bg-white  pt-4 lg:pb-10 h-full",children:[Object(U.jsx)(Y,{}),Object(U.jsxs)("div",{className:"view-border h-full flex flex-col",children:[Object(U.jsx)(bt,{inputHandle:function(t){a(t)}}),Object(U.jsx)(dt,{station_list:u,busStation:t,inputContent:i})]})]})}},{path:"/liked_list/",exact:!1,component:function(){var t=Object(c.useContext)(At),e=t.length&&localStorage.getItem("liked_bus_route_list")?JSON.parse(localStorage.getItem("liked_bus_route_list")).map((function(e){return t.find((function(t){return t.RouteUID===e}))})):[];return Object(U.jsxs)("section",{className:"bg-white  pt-4 lg:pb-10 h-full",children:[Object(U.jsx)(Y,{}),Object(U.jsx)("div",{className:"view-border h-full flex flex-col",children:Object(U.jsx)("div",{className:"max-h-screen overflow-y-auto shadow-lg ",style:{height:"75vh"},children:e&&e.length>0?Object(U.jsx)(it,{route_list:e,busRoute:[],inputContent:"*"}):Object(U.jsx)("div",{className:"flex justify-center items-center my-10",children:"\u60a8\u9084\u6c92\u6709\u6536\u85cf\u8def\u7dda"})})})]})}}],Ct=yt,wt=n(22),_t=n.n(wt);function It(t){var e=new Date,n=e.getTime()+t;return e.setTime(n),e.toUTCString()}function Dt(t){var e=t.setBusStation,n=Object(c.useState)(!0),i=Object(o.a)(n,2),a=i[0],s=i[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("bus_station")&&_t.a.decompressFromBase64(localStorage.getItem("bus_station")));!t||!t.data||(new Date).getTime()>new Date(t.expire_time)?function(){return ut.apply(this,arguments)}().then((function(t){e&&e(t),localStorage.setItem("bus_station",_t.a.compressToBase64(JSON.stringify({data:t,expire_time:It(864e5)})))})).then((function(){s(!1)})):(e&&e(t.data),s(!1))}),[e]),a&&Object(U.jsxs)("div",{className:"bg-white opacity-90 z-50 w-full h-full fixed flex flex-col items-center justify-center",children:[Object(U.jsx)("p",{className:"text-center mb-2 tracking-widest",children:"\u8cc7\u6599\u66f4\u65b0\u4e2d\u2026"}),Object(U.jsx)("p",{className:"text-center tracking-widest",children:"\u7b2c\u4e00\u6b21\u66f4\u65b0\u9700\u7d0415\u79d2\u7684\u6642\u9593"})]})}function kt(t,e,n){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(c){(function(t,e){var n=1e5*(e.longitude-t.longitude),c=1e5*(e.latitude-t.latitude);return Math.pow(n,2)+Math.pow(c,2)>25})(e,c.coords)&&(t(c.coords),n(c.coords))}),(function(t){var e=t.code,n=t.message;console.error(e),console.error(n)}))}function Rt(t){var e=t.setUserLocation,n=t.period,i=void 0===n?30:n,a=Object(c.useState)({longitude:0,latitude:0}),s=Object(o.a)(a,2),r=s[0],u=s[1];return Object(c.useEffect)((function(){kt(e,r,u);var t=setInterval((function(){kt(e,r,u)}),1e3*i);return function(){clearInterval(t)}}),[e,i,r]),null}function Et(t){var e=t.setBusRoute;return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("bus_route")&&_t.a.decompressFromBase64(localStorage.getItem("bus_route")));!t||!t.data||(new Date).getTime()>new Date(t.expire_time)?function(){return ct.apply(this,arguments)}().then((function(t){e&&e(t),localStorage.setItem("bus_route",_t.a.compressToBase64(JSON.stringify({data:t,expire_time:It(864e5)})))})):e&&e(t.data)}),[e]),null}var Ut=n.p+"static/media/logo.606790e7.svg",Tt=n(88);function Pt(){var t=Object(c.useState)(!1),e=Object(o.a)(t,2),n=e[0],i=e[1];return Object(U.jsxs)("div",{className:"relative",children:[Object(U.jsxs)("div",{className:"header ",children:[Object(U.jsx)(r.c,{to:"/",children:Object(U.jsx)("img",{src:Ut,alt:"logo"})}),Object(U.jsxs)("div",{className:"flex",children:[Object(U.jsx)("div",{className:"hidden lg:block",children:Object(U.jsxs)("ul",{className:" bg-white flex justify-between items-center",onClick:function(){return i(!1)},children:[Object(U.jsx)("li",{className:"mx-4",children:Object(U.jsx)(r.c,{to:"/find_bus_route/",className:"header-nav-btn",children:"\u5c0b\u627e\u8def\u7dda"})}),Object(U.jsx)("li",{className:"mx-4",children:Object(U.jsx)(r.c,{to:"/near_by_bus_station/",className:"header-nav-btn",children:"\u9644\u8fd1\u7ad9\u9ede"})}),Object(U.jsx)("li",{className:"mx-4",children:Object(U.jsx)(r.c,{to:"/find_bus_station/",className:"header-nav-btn",children:"\u7ad9\u9ede\u67e5\u8a62"})}),Object(U.jsx)("li",{className:"mx-4",children:Object(U.jsx)(r.c,{to:"/liked_list/",className:"header-nav-btn",children:"\u6536\u85cf\u6e05\u55ae"})})]})}),Object(U.jsx)("div",{className:"lg:hidden",children:Object(U.jsx)(Tt.a,{size:20,toggled:n,toggle:i})})]})]}),Object(U.jsx)(Mt,{isOpen:n,setOpen:i})]})}function Mt(t){var e=t.isOpen,n=t.setOpen;return e?Object(U.jsxs)("ul",{className:"absolute bg-white shadow-lg top-16 right-0 px-8 z-30 lg:hidden",onClick:function(){return n(!1)},children:[Object(U.jsx)("li",{className:"mt-5 mb-5 ",children:Object(U.jsx)(r.c,{to:"/find_bus_route/",className:"header-nav-btn",children:"\u5c0b\u627e\u8def\u7dda"})}),Object(U.jsx)("li",{className:"mb-5",children:Object(U.jsx)(r.c,{to:"/near_by_bus_station/",className:"header-nav-btn",children:"\u9644\u8fd1\u7ad9\u9ede"})}),Object(U.jsx)("li",{className:"mb-5",children:Object(U.jsx)(r.c,{to:"/find_bus_station/",className:"header-nav-btn",children:"\u7ad9\u9ede\u67e5\u8a62"})}),Object(U.jsx)("li",{className:"mb-5",children:Object(U.jsx)(r.c,{to:"/liked_list/",className:"header-nav-btn",children:"\u6536\u85cf\u6e05\u55ae"})})]}):Object(U.jsx)("span",{})}function Bt(){return Object(U.jsx)("div",{className:"mt-auto bg-gray-700 flex justify-center items-center h-8 lg:h-16 flex-grow-0 flex-shrink-0 ",children:Object(U.jsx)("span",{className:"text-xs text-white",children:"Copyright \xa9 2021 \u53f0\u7063\u516c\u8eca e \u9ede\u901a & Z.M. All rights reserved."})})}var Lt=Object(c.createContext)([]),At=Object(c.createContext)([]),Ht=Object(c.createContext)({longitude:121.5410178,latitude:25.0208745});var Jt=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],i=e[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),r=s[0],l=s[1],j=Object(c.useState)(Object(c.useContext)(Ht)),h=Object(o.a)(j,2),d=h[0],b=h[1];return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(Rt,{setUserLocation:b}),Object(U.jsx)(Dt,{setBusStation:i}),Object(U.jsx)(Et,{setBusRoute:l}),Object(U.jsx)(Ht.Provider,{value:d,children:Object(U.jsx)(Lt.Provider,{value:n,children:Object(U.jsx)(At.Provider,{value:r,children:Object(U.jsxs)("div",{className:"min-h-screen flex flex-col flex-nowrap",children:[Object(U.jsx)(Pt,{}),Object(u.a)(Ct),Object(U.jsx)(Bt,{})]})})})})]})},Zt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),a(t),s(t)}))};var zt=Object(l.h)((function(t){var e=t.history;return Object(c.useEffect)((function(){var t=e.listen((function(){window.scrollTo(0,0)}));return function(){t()}}),[]),null}));s.a.render(Object(U.jsx)(i.a.StrictMode,{children:Object(U.jsxs)(r.a,{children:[Object(U.jsx)(zt,{}),Object(U.jsx)(Jt,{})]})}),document.getElementById("root")),Zt()}},[[83,1,2]]]);
//# sourceMappingURL=main.9e434ade.chunk.js.map