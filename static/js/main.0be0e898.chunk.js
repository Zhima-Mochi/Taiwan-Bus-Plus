(this.webpackJsonpbus=this.webpackJsonpbus||[]).push([[0],{33:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),i=n(27),s=n.n(i),r=n(4),o=(n(33),n(53),n(54),n(2)),u=n(45),l=n(3),j=n(5),h=n.n(j),b=n(10),f=n(16),d=n.n(f),m=n(46);var p=function(){var t=(new Date).toGMTString(),e=new m.a("SHA-1","TEXT");return e.setHMACKey("ovFaA4lsqC5GyOKZHEEo_IS1Vt4","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="0c672be3679e4f1e8441118a50a5d9f3", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}};function O(t,e){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/".concat(e,"?$select=Direction%2CStops&$filter=RouteUID%20eq%20'").concat(n,"'&$format=JSON"),headers:p()}).then((function(t){return t.data})).catch((function(t){return console.log("error: StopOfRoute ",t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return g=Object(b.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/".concat(e,"?$select=PlateNumb%2CStopUID%2CStopName%2CRouteUID%2CRouteName%2CSubRouteUID%2CSubRouteName%2CDirection%2CEstimateTime%2CCurrentStop%2CDestinationStop%2CStopSequence%2CStopStatus%2CNextBusTime%2CIsLastBus%2CSrcUpdateTime&$filter=RouteUID%20eq%20'").concat(n,"'&$orderby=StopSequence&$format=JSON"),headers:p()}).then(function(){var t=Object(b.a)(h.a.mark((function t(c){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=c.data,t.abrupt("return",O(e,n).then((function(t){t&&t.length>0?a.forEach((function(e){e.StopSequence=t.find((function(t){return e.Direction===t.Direction})).Stops.find((function(t){return t.StopUID===e.StopUID})).StopSequence})):a.forEach((function(t,e){t.StopSequence=e}))})).then((function(){var t={0:[],1:[],2:[],255:[]};for(var e in a.forEach((function(e){t[e.Direction].push(e)})),t)t[e]=t[e].sort((function(t,e){return+t.StopSequence<+e.StopSequence?-1:1}));return t})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.log("error: estimated arrival ",t)})));case 1:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}var v={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",Tainan:"\u81fa\u5357\u5e02",KinmenCounty:"\u91d1\u9580\u7e23",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02"},S={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23"},N={NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23",Taipei:"\u81fa\u5317\u5e02"};function y(){return(y=Object(b.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/".concat(e,"?$filter=RouteUID%20eq%20'").concat(n,"'&$format=JSON"),headers:p()}).then((function(t){return t.data})).then((function(t){var e={0:[],1:[],2:[],255:[]};for(var n in t.forEach((function(t){e[t.Direction].push(t)})),e)e[n]=e[n].sort((function(t,e){return+t.StopSequence<+e.StopSequence?-1:1}));return e})).catch((function(t){return console.log("error: ".concat(N[e],"\u516c\u8eca\u7ad9\u724c\u8cc7\u6599 "),t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=n(85),w=n(86),_=n(87),I=n(89),D=n.p+"static/media/pin.9bb06f23.svg",k=n.p+"static/media/directions_bus_filled_24dp.1adceefa.svg",E=n.p+"static/media/radio_button_checked_black_24dp.9a33b9ed.svg",R=n(7),T=n(0);new R.Icon({iconUrl:D,iconSize:[24,24],className:"leaflet-marker-icon pin-icon red"}),new R.Icon({iconUrl:E,iconSize:[36,36],className:"leaflet-marker-icon"});n.p;var U={0:"\u6b63\u5e38",1:"\u672a\u767c\u8eca",2:"\u4e0d\u505c\u9760",3:"\u672b\u73ed\u5df2\u904e",4:"\u4eca\u672a\u71df\u904b"};function P(t){if(t.StopStatus>1)return U[t.StopStatus];if(0===t.StopStatus||t.EstimateTime){var e=Math.ceil(t.EstimateTime/60);return e>2?e+" \u5206":2===e?"\u5373\u5c07\u9032\u7ad9":"\u9032\u7ad9\u4e2d"}if(t.NextBusTime){var n=new Date(t.NextBusTime),c="0"+n.getHours(),a="0"+n.getMinutes();return c.slice(c.length-2)+":"+a.slice(a.length-2)}return U[1]}function B(t){var e=t.data,n=t.pinStop,a=t.direction,i=function(t){return t.StopStatus>1?2:0===t.StopStatus||t.EstimateTime?Math.ceil(t.EstimateTime/60)<=2?1:0:2}(e);return Object(c.useEffect)((function(){if(n[a]===e.StopUID){var t=document.getElementById(n[a]),c=document.getElementById("timeList");t&&(c.scrollTop=t.offsetTop-2*t.clientHeight,t.style.backgroundColor="lightblue")}}),[n,a]),Object(T.jsxs)("div",{id:e.StopUID,className:"flex items-center arrival-time-item "+(1===i&&"bg-gray-100"),children:[Object(T.jsx)("div",{className:"flex justify-center items-center arrival-time-estimated-time "+(1===i?"comming":2===i?"gray":""),children:Object(T.jsx)("div",{children:P(e)})}),Object(T.jsx)("div",{className:" ml-8 arrival-time-stop-name flex justify-between",children:e.StopName.Zh_tw})]})}function M(t,e){var n=1e5*(t.StopPosition.PositionLon-e.longitude),c=1e5*(t.StopPosition.PositionLat-e.latitude);return Math.pow(Math.pow(n,2)+Math.pow(c,2),.5)}function A(t){var e=t.estimateData,n=t.RouteData,a=Object(c.useState)(0),i=Object(o.a)(a,2),s=i[0],r=i[1],u=Object(c.useState)({}),l=Object(o.a)(u,2),j=l[0],h=l[1],b=Object(c.useContext)(Ut),f=Object(c.useState)([]),d=Object(o.a)(f,2),m=d[0],p=d[1],O=Object(c.useState)(!0),x=Object(o.a)(O,2);x[0],x[1];return Object(c.useEffect)((function(){n&&function(t,e){return y.apply(this,arguments)}(n.City,n.RouteUID).then((function(t){return p(t)}))}),[n]),Object(c.useEffect)((function(){var t={},e=1e4,n="";m[0]&&m[0][0]&&m[0][0].Stops.forEach((function(t){var c=M(t,b);c<e&&c<500&&(e=c,n=t.StopUID)})),t[0]=n,e=1e4,n="",m[1]&&m[1][0]&&m[1][0].Stops.forEach((function(t){var c=M(t,b);c<e&&c<500&&(e=c,n=t.StopUID)})),t[1]=n,e=1e4,n="",m[2]&&m[2][0]&&m[2][0].Stops.forEach((function(t){var c=M(t,b);c<e&&c<500&&(e=c,n=t.StopUID)})),t[2]=n,h(t)}),[m,b]),Object(T.jsxs)("div",{className:"arrival-time-block h-full flex flex-col",children:[Object(T.jsxs)("div",{className:"flex items-center",children:[0 in e&&e[0].length>0&&Object(T.jsxs)("div",{className:"flex-1 flex items-center justify-center arrival-time-direction-toggle "+(0===s?"on":null),onClick:function(){return r(0)},children:["\u5f80\xa0",Object(T.jsx)("span",{className:"font-bold",children:n.DestinationStopNameZh})]}),1 in e&&e[1].length>0&&Object(T.jsxs)("div",{className:"flex-1 flex items-center justify-center arrival-time-direction-toggle "+(1===s?"on":null),onClick:function(){return r(1)},children:["\u5f80\xa0",Object(T.jsx)("span",{className:"font-bold",children:n.DepartureStopNameZh})]}),2 in e&&e[2].length>0&&Object(T.jsx)("div",{className:"flex-1 flex items-center justify-center arrival-time-direction-toggle "+(2===s?"on":null),onClick:function(){return r(2)},children:Object(T.jsx)("span",{className:"font-bold",children:"\u8ff4\u5708"})})]}),Object(T.jsx)("div",{id:"timeList",className:"max-h-screen bg-white shadow-lg   px-4  overflow-auto relative",style:{height:"75vh"},children:s in e&&e[s].map((function(t){return Object(T.jsx)(B,{data:t,pinStop:j,direction:s},t.StopSequence)}))})]})}var H=n.p+"static/media/west_24dp.77f97c6f.svg",J=n.p+"static/media/favorite_24dp.53c45348.svg",L=n.p+"static/media/favorite_border_24dp.e0f3e7ea.svg";function Z(t){var e=t.RouteUID,n=t.className,a=Object(c.useState)(!1),i=Object(o.a)(a,2),s=i[0],r=i[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("liked_bus_route_list"));t||(localStorage.setItem("liked_bus_route_list",JSON.stringify([])),t=JSON.parse(localStorage.getItem("liked_bus_route_list"))),r(!!t.find((function(t){return t===e})))}),[e]),Object(T.jsx)("img",{className:n+" p-3 ",src:s?J:L,alt:s?"\u5df2\u6536\u85cf liked":"\u6536\u85cf\u4ed6 like",onClick:function(t){t.preventDefault(),function(){if(s){var t=JSON.parse(localStorage.getItem("liked_bus_route_list")),n=t.findIndex((function(t){return t===e}));-1!==n&&(t.splice(n,1),localStorage.setItem("liked_bus_route_list",JSON.stringify(t))),r(!1)}else{var c=JSON.parse(localStorage.getItem("liked_bus_route_list"));-1===c.findIndex((function(t){return t===e}))&&(c.push(e),localStorage.setItem("liked_bus_route_list",JSON.stringify(c))),r(!0)}}()}})}function q(t){var e=t.RouteData;return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"bg-white flex justify-center items-center h-16 px-4",children:[Object(T.jsx)("span",{className:"ml-10",children:"\xa0"}),Object(T.jsx)("div",{className:"bus-estimated-time-routename",children:e.RouteName.Zh_tw}),Object(T.jsx)("div",{children:Object(T.jsx)(Z,{RouteUID:e.RouteUID})})]})})}var z=n(17),F=n(15),$=n(18),K=function(){function t(){Object(F.a)(this,t),this.indices=[],this.children={}}return Object($.a)(t,[{key:"getAllIndices",value:function(){var t=this,e=Object(z.a)(t.indices);return Object.entries(t.children).length>0&&Object.values(t.children).forEach((function(t){e.push.apply(e,Object(z.a)(t.getAllIndices()))})),e}}]),t}(),Y=function(){function t(){Object(F.a)(this,t),this.root=new K}return Object($.a)(t,[{key:"insert",value:function(t,e){for(var n=this.root,c=0;c<t.length;++c)n.children[t[c]]||(n.children[t[c]]=new K),n=n.children[t[c]],c===t.length-1&&n.indices.push(e)}},{key:"findAllIndices",value:function(t){for(var e=this.root,n=[],c=0;c<t.length;++c){if(!e.children[t[c]])return n;e=e.children[t[c]]}return e.getAllIndices()}}]),t}();function X(t){return G.apply(this,arguments)}function G(){return(G=Object(b.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/".concat(e,"?$format=JSON"),headers:p()}).then((function(t){return t.data})).catch((function(t){return console.log("error: ".concat(S[e],"\u516c\u8eca\u8def\u7dda\u8cc7\u6599 "),t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function V(){return(V=Object(b.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],Object.keys(S).forEach((function(t){e.push(X(t))})),n=[],t.abrupt("return",Promise.all(e).then((function(t){return t.forEach((function(t){return n.push.apply(n,Object(z.a)(t))}))})).then((function(){return n})).catch((function(t){console.log("error: getAllBusCityRoute() ",t)})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function W(t){var e=t.route_list,n=t.busRoute,a=t.inputContent,i=Object(c.useState)(""),s=Object(o.a)(i,2),u=s[0],l=s[1];return a&&0===a.length&&""!==u&&(e=n),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"flex justify-between mx-4",children:[Object(T.jsx)("span",{}),Object(T.jsxs)("select",{className:"bg-white",onChange:function(t){return l(t.target.value)},children:[Object(T.jsx)("option",{value:"",children:"\u5168\u7e23\u5e02"}),Object.entries(S).map((function(t){return Object(T.jsx)("option",{value:t[0],children:t[1]},t[0])}))]})]}),Object(T.jsx)("div",{className:"max-h-screen overflow-y-auto shadow-lg ",style:{height:"75vh"},children:e.filter((function(t){if(""===u||t.City===u)return t})).map((function(t,e){return Object(T.jsx)(r.b,{to:"/bus_estimated_time/".concat(t.RouteUID),children:Object(T.jsxs)("div",{className:"route-search-item",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{className:"route-name",children:t.RouteName.Zh_tw}),Object(T.jsxs)("span",{className:"route-city",children:["\uff08",S[t.City],"\uff09"]}),Object(T.jsx)("br",{}),Object(T.jsxs)("span",{className:"route-depart-dest",children:[t.DepartureStopNameZh,"-",t.DestinationStopNameZh]})]}),Object(T.jsx)(Z,{RouteUID:t.RouteUID})]})},t.RouteUID)}))})]})}var Q=n.p+"static/media/search_black_24dp.b56cb96d.svg";function tt(t){var e=t.inputHandle;return Object(T.jsx)("div",{className:"flex justify-center items-center",children:Object(T.jsxs)("div",{className:"input-window flex justify-center items-center ",children:[Object(T.jsx)("img",{src:Q,className:"lookup",alt:"\u5c0b\u627e\u8def\u7dda serach icon"}),Object(T.jsx)("input",{className:"input",inputMode:"numeric",placeholder:"\u8acb\u8f38\u5165\u516c\u8eca\u8def\u7dda\u6216\u865f\u78bc",autoComplete:"off",onChange:function(t){return e(t.target.value)}})]})})}function et(t){return nt.apply(this,arguments)}function nt(){return(nt=Object(b.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/Station/City/".concat(e,"?$format=JSON"),headers:p()}).then((function(t){var n=t.data;return n=n.map((function(t){return t.StationEnName=t.Stops[0].StopName.En,t.Stops=t.Stops.map((function(t){return{StopUID:t.StopUID,RouteUID:t.RouteUID}})),{City:e,StationUID:t.StationUID,StationName:t.StationName.Zh_tw,StationEnName:t.StationEnName,StationPosition:t.StationPosition,StationAddress:t.StationAddress,Stops:t.Stops}}))})).catch((function(t){return console.log("error: ".concat(v[e],"\u516c\u8eca\u7ad9\u4f4d\u8cc7\u6599 "),t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ct(){return(ct=Object(b.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],Object.keys(v).forEach((function(t){e.push(et(t))})),n=[],t.abrupt("return",Promise.all(e).then((function(t){return t.forEach((function(t){var e;return(e=n).push.apply(e,Object(z.a)(t))}))})).then((function(){return n=n.sort((function(t,e){return t.StationPosition.PositionLon<e.StationPosition.PositionLon?-1:1}))})).catch((function(t){console.log("error: getAllBusCityStation() ",t)})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function at(t,e,n,c){for(;n<c;){var a=Math.floor(n+(c-n)/2);t[a].StationPosition.PositionLon<e?n=a+1:c=a}return n}function it(t,e){var n=1e5*(t.StationPosition.PositionLon-e.longitude),c=1e5*(t.StationPosition.PositionLat-e.latitude);return Math.pow(Math.pow(n,2)+Math.pow(c,2),.5)}function st(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;if(0===t.length)return[];for(var c=n/1e5,a=at(t,e.longitude+c,0,t.length),i=at(t,e.longitude-c,0,a),s=[],r=i;r<a;++r)it(t[r],e)<n&&s.push(t[r]);return s}function rt(t){var e=t.station_list,n=t.busStation,a=t.inputContent,i=Object(c.useContext)(Tt),s=Object(c.useState)(""),u=Object(o.a)(s,2),l=u[0],j=u[1],h=Object(c.useState)({}),b=Object(o.a)(h,2),f=b[0],d=b[1];return Object(c.useState)((function(){var t={};n.forEach((function(e){t[e.City]||(t[e.City]=[]),t[e.City].length<500&&t[e.City].push(e)})),d(t)}),[n]),a&&0===a.length&&""!==l&&f[l]&&(e=f[l]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"flex justify-between mx-4",children:[Object(T.jsx)("span",{}),Object(T.jsxs)("select",{className:"bg-white",onChange:function(t){return j(t.target.value)},children:[Object(T.jsx)("option",{value:"",children:"\u5168\u7e23\u5e02"}),Object.entries(v).map((function(t){return Object(T.jsx)("option",{value:t[0],children:t[1]},t[0])}))]})]}),Object(T.jsx)("div",{className:"max-h-screen overflow-y-auto shadow-lg ",style:{height:"75vh"},children:e.filter((function(t){if(""===l||t.City===l)return t})).map((function(t){return Object(T.jsxs)("div",{className:"station-search-item",children:[Object(T.jsx)("span",{className:"station-name",children:t.StationName}),Object(T.jsxs)("span",{className:"station-city",children:["\uff08",v[t.City],"\uff09"]}),Object(T.jsx)("span",{className:"station-address",children:t.StationAddress}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:"\u7ad9\u9ede\u8def\u7dda\uff1a"}),Object(T.jsx)("div",{className:"flex flex-wrap",children:t.Stops.map((function(t,e){return Object(T.jsx)(r.b,{to:"/bus_estimated_time/".concat(t.RouteUID),children:Object(T.jsx)("span",{className:"pin-icon-route-name",children:i.find((function(e){return e.RouteUID===t.RouteUID})).RouteName.Zh_tw})},e)}))})]},t.StationUID)}))})]})}function ot(t){var e=t.inputHandle;return Object(T.jsx)("div",{className:"flex justify-center items-center",children:Object(T.jsxs)("div",{className:"input-window flex justify-center items-center ",children:[Object(T.jsx)("img",{src:Q,className:"lookup",alt:"\u5c0b\u627e\u8def\u7dda serach icon"}),Object(T.jsx)("input",{className:"input",placeholder:"\u8acb\u8f38\u5165\u7ad9\u9ede\u540d\u7a31",autoComplete:"off",onChange:function(t){return e(t.target.value)}})]})})}var ut=n.p+"static/media/bus_c1.01261033.svg",lt=n.p+"static/media/bus_c2.3a493e43.svg",jt=(n.p,n.p+"static/media/bus_c4.94f6594e.svg"),ht=n.p+"static/media/bus_c5.475883a6.svg";function bt(){return Object(T.jsx)("div",{className:"banner",children:Object(T.jsxs)("article",{className:"article",children:[Object(T.jsx)("h1",{className:"mt-12",children:"\u53f0\u7063\u516c\u8eca\u52d5\u614b"}),Object(T.jsx)("p",{className:"mt-4 text-gray-200",children:"\u6642\u523b\u67e5\u8a62\u7cfb\u7d71"}),Object(T.jsx)("p",{className:"mt-5 text-gray-400 tracking-normal text-xs lg:text-sm",children:"TAIWAN BUS+"})]})})}var ft=new R.Icon({iconUrl:D,iconSize:[24,24],className:"leaflet-marker-icon pin-icon red"}),dt=new R.Icon({iconUrl:k,iconSize:[36,36],className:"leaflet-marker-icon"});function mt(t){var e=t.nearByBusStation,n=Object(c.useContext)(Tt);return e.map((function(t){return Object(T.jsx)(C.a,{position:[t.StationPosition.PositionLat,t.StationPosition.PositionLon],icon:dt,children:Object(T.jsxs)(w.a,{children:[Object(T.jsx)("span",{className:"pin-icon-station-name",children:t.StationName}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{className:"pin-icon-station-address",children:t.StationAddress}),Object(T.jsx)("br",{}),t.Stops.map((function(t,e){return Object(T.jsx)(r.b,{to:"/bus_estimated_time/".concat(t.RouteUID),children:Object(T.jsx)("span",{className:"pin-icon-route-name",children:n.find((function(e){return e.RouteUID===t.RouteUID})).RouteName.Zh_tw})},t.RouteUID)}))]})},t.StationUID)}))}function pt(){var t=Object(c.useContext)(Ut),e=Object(c.useContext)(Rt),n=Object(c.useState)(null),a=Object(o.a)(n,2),i=a[0],s=a[1],r=Object(c.useState)([]),u=Object(o.a)(r,2),l=u[0],j=u[1];return Object(c.useEffect)((function(){i&&i.setView([t.latitude,t.longitude])}),[i,t]),Object(c.useEffect)((function(){j(st(e,t))}),[e,t]),Object(T.jsxs)(_.a,{center:[22.9977325,120.2141299],zoom:16,scrollWheelZoom:!1,whenCreated:s,children:[Object(T.jsx)(I.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(T.jsx)(C.a,{position:[t.latitude,t.longitude],icon:ft,children:Object(T.jsxs)(w.a,{children:[Object(T.jsx)("div",{className:"pin-here",children:"\u4f60\u5728\u9019\u88e1"}),"\u9644\u8fd1\u6709",Object(T.jsx)("span",{className:"text-blue-800 font-bold mx-1",children:l.length}),"\u500b\u7ad9\u9ede"]})}),Object(T.jsx)(mt,{nearByBusStation:l})]})}var Ot=[{path:"/",exact:!0,component:function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)(bt,{}),Object(T.jsxs)("section",{className:"view-border h-full lg:flex justify-between",children:[Object(T.jsx)(r.c,{to:"/find_bus_route/",children:Object(T.jsxs)("div",{className:"home-btn",children:[Object(T.jsx)("img",{src:ut,alt:"\u516c\u8eca\u5716\u6848"}),Object(T.jsx)("span",{className:"c1 ml-2",children:"\u5c0b\u627e\u8def\u7dda"})]})}),Object(T.jsx)(r.c,{to:"/near_by_bus_station/",children:Object(T.jsxs)("div",{className:"home-btn",children:[Object(T.jsx)("img",{src:ht,alt:"\u516c\u8eca\u5716\u6848"}),Object(T.jsx)("span",{className:"c5 ml-2",children:"\u9644\u8fd1\u7ad9\u9ede"})]})}),Object(T.jsx)(r.c,{to:"/find_bus_station/",children:Object(T.jsxs)("div",{className:"home-btn",children:[Object(T.jsx)("img",{src:lt,alt:"\u516c\u8eca\u5716\u6848"}),Object(T.jsx)("span",{className:"c2 ml-2",children:"\u7ad9\u9ede\u67e5\u8a62"})]})}),Object(T.jsx)(r.c,{to:"/liked_list/",children:Object(T.jsxs)("div",{className:"home-btn",children:[Object(T.jsx)("img",{src:jt,alt:"\u516c\u8eca\u5716\u6848"}),Object(T.jsx)("span",{className:"c4 ml-2",children:"\u6536\u85cf\u6e05\u55ae"})]})})]})]})}},{path:"/find_bus_route/",exact:!1,component:function(){var t=Object(c.useContext)(Tt),e=Object(l.f)(),n=Object(c.useState)(""),a=Object(o.a)(n,2),i=a[0],s=a[1],r=Object(c.useState)([]),u=Object(o.a)(r,2),j=u[0],h=u[1],b=Object(c.useState)(new Y),f=Object(o.a)(b,2),d=f[0],m=f[1];return Object(c.useEffect)((function(){t&&m(function(t){var e=new Y;return t.forEach((function(t,n){t.RouteName.Zh_tw&&e.insert(t.RouteName.Zh_tw,n),t.RouteName.En&&t.RouteName.En!==t.RouteName.Zh_tw&&e.insert(t.RouteName.En,n)})),e}(t))}),[t]),Object(c.useEffect)((function(){i.length>0?h(d.findAllIndices(i).sort().filter((function(t,e,n){return 0===e||n[e-1]!==n[e]})).map((function(e){return t[e]})).sort((function(t,e){return t.RouteName.Zh_tw.length<e.RouteName.Zh_tw.length?-1:1}))):h(t.slice(0,50))}),[i,d,t]),Object(T.jsx)("section",{className:"bg-white pt-4 lg:pb-10  ",children:Object(T.jsxs)("div",{className:"view-border",children:[Object(T.jsxs)("div",{className:"bg-white flex pl-1",onClick:function(){return e.goBack()},style:{cursor:"pointer"},children:[Object(T.jsx)("img",{src:H,alt:"\u56de\u4e0a\u4e00\u9801 back to previous page"}),Object(T.jsx)("span",{className:"ml-2",children:"\u8fd4\u56de\u9996\u9801"})]}),Object(T.jsx)(tt,{inputHandle:function(t){s(t)}}),Object(T.jsx)(W,{route_list:j,busRoute:t,inputContent:i})]})})}},{path:"/bus_estimated_time/:RouteUID",exact:!1,component:function(){var t=Object(c.useContext)(Tt),e=Object(l.g)().RouteUID,n=t.find((function(t){return t.RouteUID===e})),a=Object(c.useState)([]),i=Object(o.a)(a,2),s=i[0],r=i[1],u=Object(c.useState)(0),j=Object(o.a)(u,2),h=j[0],b=j[1],f=Object(l.f)(),d=Object(c.useCallback)((function(){h>0&&b(h-1)}),[h]);return Object(c.useEffect)((function(){var t=setInterval(d,1e3);return function(){clearInterval(t)}}),[d]),Object(c.useEffect)((function(){0===h&&n&&function(t,e){return g.apply(this,arguments)}(n.City,n.RouteUID).then((function(t){r(t)})).then((function(){return b(10)})).then((function(){}))}),[h,n,s]),Object(T.jsxs)("div",{className:"h-full flex flex-col",children:[Object(T.jsxs)("div",{className:"bg-white view-border pt-4 flex pl-1",onClick:function(){return f.goBack()},style:{cursor:"pointer"},children:[Object(T.jsx)("img",{src:H,alt:"\u56de\u4e0a\u4e00\u9801 back to previous page"}),Object(T.jsx)("span",{className:"ml-2",children:"\u8fd4\u56de\u641c\u5c0b"})]}),n&&Object(T.jsx)(q,{RouteData:n}),Object(T.jsx)("div",{className:"bg-white tracking-widest sticky top-0 z-10",children:Object(T.jsxs)("div",{className:" text-right lg:text-center py-1",children:[h,"\u79d2\u5f8c\u66f4\u65b0"]})}),Object(T.jsx)("div",{className:"view-border lg:pb-10 h-full flex flex-col",children:s?Object(T.jsx)(A,{estimateData:s,RouteData:n}):Object(T.jsx)("p",{className:"w-1/2",children:"\u51fa\u554f\u984c\u4e86\uff01\u8acb\u91cd\u65b0\u518d\u8a66\u4e00\u6b21\u3002"})})]})}},{path:"/near_by_bus_station/",exact:!1,component:function(){var t=Object(l.f)();return Object(T.jsxs)("section",{className:"h-full",children:[Object(T.jsxs)("div",{children:[Object(T.jsxs)("div",{className:" view-border pt-2 flex pl-1",onClick:function(){return t.goBack()},style:{cursor:"pointer"},children:[Object(T.jsx)("img",{src:H,alt:"\u56de\u4e0a\u4e00\u9801 back to previous page"}),Object(T.jsx)("span",{className:"ml-2",children:"\u8fd4\u56de\u9996\u9801"})]}),Object(T.jsx)("div",{className:"  flex justify-center items-center h-20",children:Object(T.jsx)("div",{className:"bus-stationname",children:"\u9644\u8fd1\u7684\u516c\u8eca\u7ad9\u9ede"})})]}),Object(T.jsx)("div",{className:"",children:Object(T.jsx)("div",{className:"w-screen  max-w-full lg:shadow-lg",style:{height:"70vh"},children:Object(T.jsx)(pt,{})})})]})}},{path:"/find_bus_station/",exact:!1,component:function(){var t=Object(c.useContext)(Rt),e=Object(l.f)(),n=Object(c.useState)(""),a=Object(o.a)(n,2),i=a[0],s=a[1],r=Object(c.useState)([]),u=Object(o.a)(r,2),j=u[0],h=u[1],b=Object(c.useState)(new Y),f=Object(o.a)(b,2),d=f[0],m=f[1],p=Object(c.useContext)(Ut),O=Object(c.useState)([]),x=Object(o.a)(O,2),g=x[0],v=x[1];return Object(c.useEffect)((function(){v(st(t,p))}),[t,p]),Object(c.useEffect)((function(){t&&m(function(t){var e=new Y;return t.forEach((function(t,n){t.StationName&&e.insert(t.StationName,n),t.StationEnName&&t.StationEnName!==t.StationName&&e.insert(t.StationEnName,n)})),e}(t))}),[t]),Object(c.useEffect)((function(){if(i.length>0)h(d.findAllIndices(i).sort().filter((function(t,e,n){return 0===e||n[e-1]!==n[e]})).map((function(e){return t[e]})).sort((function(t,e){return t.StationName.length<e.StationName.length?-1:1})));else if(g.length>0)h(g);else{var e=Math.floor(t.length/2);h(t.slice(e,e+10))}}),[i,d,t]),Object(T.jsx)("section",{className:"bg-white  pt-4 lg:pb-10 h-full",children:Object(T.jsxs)("div",{className:"view-border h-full flex flex-col",children:[Object(T.jsxs)("div",{className:"bg-white flex pl-1",onClick:function(){return e.goBack()},style:{cursor:"pointer"},children:[Object(T.jsx)("img",{src:H,alt:"\u56de\u4e0a\u4e00\u9801 back to previous page"}),Object(T.jsx)("span",{className:"ml-2",children:"\u8fd4\u56de\u9996\u9801"})]}),Object(T.jsx)(ot,{inputHandle:function(t){s(t)}}),Object(T.jsx)(rt,{station_list:j,busStation:t,inputContent:i})]})})}},{path:"/liked_list/",exact:!1,component:function(){var t=Object(c.useContext)(Tt),e=Object(l.f)(),n=Object(c.useState)([]),a=Object(o.a)(n,2),i=(a[0],a[1],t.length?JSON.parse(localStorage.getItem("liked_bus_route_list")).map((function(e){return t.find((function(t){return t.RouteUID===e}))})):[]);return Object(T.jsx)("section",{className:"bg-white  pt-4 lg:pb-10 h-full",children:Object(T.jsxs)("div",{className:"view-border h-full flex flex-col",children:[Object(T.jsxs)("div",{className:"bg-white flex pl-1",onClick:function(){return e.goBack()},style:{cursor:"pointer"},children:[Object(T.jsx)("img",{src:H,alt:"\u56de\u4e0a\u4e00\u9801 back to previous page"}),Object(T.jsx)("span",{className:"ml-2",children:"\u8fd4\u56de\u9996\u9801"})]}),Object(T.jsx)("div",{className:"max-h-screen overflow-y-auto shadow-lg ",style:{height:"75vh"},children:i&&i.length>0&&Object(T.jsx)(W,{route_list:i})})]})})}}],xt=Ot,gt=n(22),vt=n.n(gt);function St(t){var e=new Date,n=e.getTime()+t;return e.setTime(n),e.toUTCString()}function Nt(t){var e=t.setBusStation,n=Object(c.useState)(!0),a=Object(o.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("bus_station")&&vt.a.decompressFromBase64(localStorage.getItem("bus_station")));!t||!t.data||(new Date).getTime()>new Date(t.expire_time)?function(){return ct.apply(this,arguments)}().then((function(t){e&&e(t),localStorage.setItem("bus_station",vt.a.compressToBase64(JSON.stringify({data:t,expire_time:St(864e5)})))})).then((function(){s(!1)})):(e&&e(t.data),s(!1))}),[e]),i&&Object(T.jsxs)("div",{className:"bg-white opacity-90 z-50 w-full h-full fixed flex flex-col items-center justify-center",children:[Object(T.jsx)("p",{className:"text-center mb-2 tracking-widest",children:"\u8cc7\u6599\u66f4\u65b0\u4e2d\u2026"}),Object(T.jsx)("p",{className:"text-center tracking-widest",children:"\u7b2c\u4e00\u6b21\u66f4\u65b0\u9700\u7d0415\u79d2\u7684\u6642\u9593"})]})}function yt(t,e,n){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(c){(function(t,e){var n=1e5*(e.longitude-t.longitude),c=1e5*(e.latitude-t.latitude);return Math.pow(n,2)+Math.pow(c,2)>25})(e,c.coords)&&(t(c.coords),n(c.coords))}),(function(t){var e=t.code,n=t.message;console.error(e),console.error(n)}))}function Ct(t){var e=t.setUserLocation,n=t.period,a=void 0===n?30:n,i=Object(c.useState)({longitude:0,latitude:0}),s=Object(o.a)(i,2),r=s[0],u=s[1];return Object(c.useEffect)((function(){yt(e,r,u);var t=setInterval((function(){yt(e,r,u)}),1e3*a);return function(){clearInterval(t)}}),[e,a,r]),null}function wt(t){var e=t.setBusRoute;return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("bus_route")&&vt.a.decompressFromBase64(localStorage.getItem("bus_route")));!t||!t.data||(new Date).getTime()>new Date(t.expire_time)?function(){return V.apply(this,arguments)}().then((function(t){e&&e(t),localStorage.setItem("bus_route",vt.a.compressToBase64(JSON.stringify({data:t,expire_time:St(864e5)})))})):e&&e(t.data)}),[e]),null}var _t=n.p+"static/media/logo.606790e7.svg",It=n(88);function Dt(){var t=Object(c.useState)(!1),e=Object(o.a)(t,2),n=e[0],a=e[1];return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"header ",children:[Object(T.jsx)(r.c,{to:"/",children:Object(T.jsx)("img",{src:_t,alt:"logo"})}),Object(T.jsx)("div",{children:Object(T.jsx)(It.a,{size:20,toggled:n,toggle:a})})]}),Object(T.jsx)(kt,{isOpen:n,setOpen:a})]})}function kt(t){var e=t.isOpen,n=t.setOpen;return e?Object(T.jsxs)("ul",{className:"fixed  bg-white shadow-lg top-16 right-0 px-8 lg:hidden z-30",onClick:function(){return n(!1)},children:[Object(T.jsx)("li",{className:"mt-5 mb-5 ",children:Object(T.jsx)(r.c,{to:"/find_bus_route/",className:"header-nav-btn",children:"\u5c0b\u627e\u8def\u7dda"})}),Object(T.jsx)("li",{className:"mb-5",children:Object(T.jsx)(r.c,{to:"/near_by_bus_station/",className:"header-nav-btn",children:"\u9644\u8fd1\u7ad9\u9ede"})}),Object(T.jsx)("li",{className:"mb-5",children:Object(T.jsx)(r.c,{to:"/find_bus_station/",className:"header-nav-btn",children:"\u7ad9\u9ede\u67e5\u8a62"})}),Object(T.jsx)("li",{className:"mb-5",children:Object(T.jsx)(r.c,{to:"/liked_list/",className:"header-nav-btn",children:"\u6536\u85cf\u6e05\u55ae"})})]}):Object(T.jsx)("span",{})}function Et(){return Object(T.jsx)("div",{className:"mt-auto bg-gray-700 flex justify-center items-center h-8 lg:h-16 flex-grow-0 flex-shrink-0 ",children:Object(T.jsx)("span",{className:"text-xs text-white",children:"Copyright \xa9 2021 \u53f0\u7063\u516c\u8eca e \u9ede\u901a & Z.M. All rights reserved."})})}var Rt=Object(c.createContext)([]),Tt=Object(c.createContext)([]),Ut=Object(c.createContext)({longitude:121.5410178,latitude:25.0208745});var Pt=function(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)([]),s=Object(o.a)(i,2),r=s[0],l=s[1],j=Object(c.useState)(Object(c.useContext)(Ut)),h=Object(o.a)(j,2),b=h[0],f=h[1];return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(Ct,{setUserLocation:f}),Object(T.jsx)(Nt,{setBusStation:a}),Object(T.jsx)(wt,{setBusRoute:l}),Object(T.jsx)(Ut.Provider,{value:b,children:Object(T.jsx)(Rt.Provider,{value:n,children:Object(T.jsx)(Tt.Provider,{value:r,children:Object(T.jsxs)("div",{className:"min-h-screen flex flex-col flex-nowrap",children:[Object(T.jsx)(Dt,{}),Object(u.a)(xt),Object(T.jsx)(Et,{})]})})})})]})},Bt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),i(t),s(t)}))};var Mt=Object(l.h)((function(t){var e=t.history;return Object(c.useEffect)((function(){var t=e.listen((function(){window.scrollTo(0,0)}));return function(){t()}}),[]),null}));s.a.render(Object(T.jsx)(a.a.StrictMode,{children:Object(T.jsxs)(r.a,{children:[Object(T.jsx)(Mt,{}),Object(T.jsx)(Pt,{})]})}),document.getElementById("root")),Bt()}},[[83,1,2]]]);
//# sourceMappingURL=main.0be0e898.chunk.js.map