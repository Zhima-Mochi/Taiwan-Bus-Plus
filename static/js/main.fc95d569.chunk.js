(this.webpackJsonpbus=this.webpackJsonpbus||[]).push([[0],{34:function(t,e,n){},83:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),s=n(28),a=n.n(s),o=n(4),r=(n(34),n(53),n(54),n(2)),u=n(46),l=n(3),j=n(5),d=n.n(j),h=n(11),b=n(16),f=n.n(b),p=n(47);var m=function(){var t=(new Date).toGMTString(),e=new p.a("SHA-1","TEXT");return e.setHMACKey("M0d0Qrehr5K5sB9wX5-jBTxMHNI","TEXT"),e.update("x-date: "+t),{Authorization:'hmac username="daae9592f5774bf6bfc0817806ca572f", algorithm="hmac-sha1", headers="x-date", signature="'+e.getHMAC("B64")+'"',"X-Date":t}};function O(t,e){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/DisplayStopOfRoute/City/".concat(e,"?$select=Direction%2CStops&$filter=RouteUID%20eq%20'").concat(n,"'&$format=JSON"),headers:m()}).then((function(t){return t.data})).catch((function(t){return console.log("error: StopOfRoute ",t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(){return g=Object(h.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/".concat(e,"?$select=PlateNumb%2CStopUID%2CStopName%2CRouteUID%2CRouteName%2CSubRouteUID%2CSubRouteName%2CDirection%2CEstimateTime%2CCurrentStop%2CDestinationStop%2CStopSequence%2CStopStatus%2CNextBusTime%2CIsLastBus%2CSrcUpdateTime&$filter=RouteUID%20eq%20'").concat(n,"'&$orderby=StopSequence&$format=JSON"),headers:m()}).then(function(){var t=Object(h.a)(d.a.mark((function t(i){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=i.data,t.abrupt("return",O(e,n).then((function(t){t&&t.length>0?c.forEach((function(e){e.StopSequence=t.find((function(t){return e.Direction===t.Direction})).Stops.find((function(t){return t.StopUID===e.StopUID})).StopSequence})):c.forEach((function(t,e){t.StopSequence=e}))})).then((function(){var t={0:[],1:[],2:[],255:[]};for(var e in c.forEach((function(e){t[e.Direction].push(e)})),t)t[e]=t[e].sort((function(t,e){return+t.StopSequence<+e.StopSequence?-1:1}));return t})));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return console.log("error: estimated arrival ",t)})));case 1:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}var v={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",Tainan:"\u81fa\u5357\u5e02",KinmenCounty:"\u91d1\u9580\u7e23",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02"},S={Taipei:"\u81fa\u5317\u5e02",NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23"},N={NewTaipei:"\u65b0\u5317\u5e02",Taoyuan:"\u6843\u5712\u5e02",Taichung:"\u81fa\u4e2d\u5e02",Tainan:"\u81fa\u5357\u5e02",Kaohsiung:"\u9ad8\u96c4\u5e02",Keelung:"\u57fa\u9686\u5e02",Hsinchu:"\u65b0\u7af9\u5e02",HsinchuCounty:"\u65b0\u7af9\u7e23",MiaoliCounty:"\u82d7\u6817\u7e23",ChanghuaCounty:"\u5f70\u5316\u7e23",NantouCounty:"\u5357\u6295\u7e23",YunlinCounty:"\u96f2\u6797\u7e23",ChiayiCounty:"\u5609\u7fa9\u7e23",Chiayi:"\u5609\u7fa9\u5e02",PingtungCounty:"\u5c4f\u6771\u7e23",YilanCounty:"\u5b9c\u862d\u7e23",HualienCounty:"\u82b1\u84ee\u7e23",TaitungCounty:"\u81fa\u6771\u7e23",KinmenCounty:"\u91d1\u9580\u7e23",PenghuCounty:"\u6f8e\u6e56\u7e23",LienchiangCounty:"\u9023\u6c5f\u7e23",Taipei:"\u81fa\u5317\u5e02"};function y(){return(y=Object(h.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/".concat(e,"?$filter=RouteUID%20eq%20'").concat(n,"'&$format=JSON"),headers:m()}).then((function(t){return t.data})).then((function(t){var e={0:[],1:[],2:[],255:[]};for(var n in t.forEach((function(t){e[t.Direction].push(t)})),e)e[n]=e[n].sort((function(t,e){return+t.StopSequence<+e.StopSequence?-1:1}));return e})).catch((function(t){return console.log("error: ".concat(N[e],"\u516c\u8eca\u7ad9\u724c\u8cc7\u6599 "),t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var C=n(85),w=n(86),_=n(87),I=n(88),D=n(90),R=n.p+"static/media/pin.9bb06f23.svg",k=n.p+"static/media/directions_bus_filled_24dp.1adceefa.svg",P=n.p+"static/media/radio_button_checked_black_24dp.9a33b9ed.svg",U=n.p+"static/media/radio_button_checked_red_24dp.110d4f2c.svg",E=n(7),T=n(0),B=new E.Icon({iconUrl:R,iconSize:[24,24],className:"leaflet-marker-icon pin-icon red"}),L=new E.Icon({iconUrl:P,iconSize:[40,40],className:"leaflet-marker-icon"}),M=new E.Icon({iconUrl:U,iconSize:[40,40],className:"leaflet-marker-icon"});function Z(t){var e=t.stopsOfRoute,n=t.direction,i=(t.mapStop,t.commingStop);return e[n]&&e[n][0]?e[n][0].Stops.map((function(t,e,n){return i&&-1!==i.indexOf(t.StopUID)?Object(T.jsx)("div",{children:Object(T.jsx)(C.a,{position:[t.StopPosition.PositionLat,t.StopPosition.PositionLon],icon:M,children:Object(T.jsx)(w.a,{children:Object(T.jsx)("span",{children:t.StopName.Zh_tw})})})},t.StopUID):Object(T.jsx)("div",{children:Object(T.jsx)(C.a,{position:[t.StopPosition.PositionLat,t.StopPosition.PositionLon],icon:L,children:Object(T.jsx)(w.a,{children:Object(T.jsx)("span",{children:t.StopName.Zh_tw})})})},t.StopUID)})):null}function A(t){var e=t.stopsOfRoute,n=t.direction,i=(t.mapStop,t.commingStop);return e[n]&&e[n][0]?e[n][0].Stops.map((function(t,e,n){return Object(T.jsx)("div",{children:e>0&&-1===i.indexOf(t.StopUID)&&Object(T.jsx)(_.a,{weight:8,color:"#355F8B",positions:[[n[e-1].StopPosition.PositionLat,n[e-1].StopPosition.PositionLon],[t.StopPosition.PositionLat,t.StopPosition.PositionLon]]},e)},t.StopUID)})):null}function H(t){var e=t.stopsOfRoute,n=t.direction,i=(t.mapStop,t.commingStop);return e[n]&&e[n][0]?e[n][0].Stops.map((function(t,e,n){return Object(T.jsx)("div",{children:e>0&&-1!==i.indexOf(t.StopUID)&&Object(T.jsx)(_.a,{weight:8,color:"#D08181",positions:[[n[e-1].StopPosition.PositionLat,n[e-1].StopPosition.PositionLon],[t.StopPosition.PositionLat,t.StopPosition.PositionLon]]},e)},t.StopUID)})):null}function J(t){var e=t.stopsOfRoute,n=t.direction,c=t.mapStop,s=t.commingStop,a=Object(i.useContext)(Kt),o=(Object(i.useContext)(Ft),Object(i.useState)(null)),u=Object(r.a)(o,2),l=u[0],j=u[1];return Object(i.useEffect)((function(){if(l&&e[n]&&e[n][0]&&e[n][0].Stops.length){var t=e[n][0].Stops[0].StopPosition;if(c&&c[n]){var i=e[n][0].Stops.find((function(t){return t.StopUID===c}));i&&(t=i.StopPosition)}l.setView([t.PositionLat,t.PositionLon])}}),[l,e,n,c]),Object(T.jsxs)(I.a,{tap:!1,center:[22.9977325,120.2141299],zoom:16,scrollWheelZoom:!1,whenCreated:j,children:[Object(T.jsx)(D.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(T.jsx)(C.a,{position:[a.latitude,a.longitude],icon:B,children:Object(T.jsx)(w.a,{children:Object(T.jsx)("div",{className:"pin-here",children:"\u4f60\u5728\u9019\u88e1"})})}),Object(T.jsx)(Z,{mapStop:c,stopsOfRoute:e,direction:n,commingStop:s}),Object(T.jsx)(A,{mapStop:c,stopsOfRoute:e,direction:n,commingStop:s}),Object(T.jsx)(H,{mapStop:c,stopsOfRoute:e,direction:n,commingStop:s})]})}var z=n.p+"static/media/map.b03c20b2.svg",q={0:"\u6b63\u5e38",1:"\u672a\u767c\u8eca",2:"\u4e0d\u505c\u9760",3:"\u672b\u73ed\u5df2\u904e",4:"\u4eca\u672a\u71df\u904b"};function F(t){if(t.StopStatus>1)return q[t.StopStatus];if(0===t.StopStatus||t.EstimateTime){var e=Math.floor((t.EstimateTime-10)/60);return e>1?e+" \u5206":1===e?"\u5373\u5c07\u9032\u7ad9":"\u9032\u7ad9\u4e2d"}if(t.NextBusTime){var n=new Date(t.NextBusTime),i="0"+n.getHours(),c="0"+n.getMinutes();return i.slice(i.length-2)+":"+c.slice(c.length-2)}return q[1]}function $(t){return t.StopStatus>1?2:0===t.StopStatus||t.EstimateTime?Math.floor(t.EstimateTime/60)<=1?1:0:2}function K(t){var e=t.data,n=t.pinStop,c=t.direction,s=t.setMapStop,a=$(e),o=Object(i.useState)(!1),u=Object(r.a)(o,2),l=u[0],j=u[1];return Object(i.useEffect)((function(){var t=document.getElementById(e.StopUID),i=document.getElementById("timeList");n[c]===e.StopUID?t&&(i.scrollTop=t.offsetTop-2*t.clientHeight,j(!0)):j(!1)}),[n,c]),Object(T.jsxs)("div",{id:e.StopUID,onClick:function(){s(e.StopUID)},className:"flex items-center arrival-time-item "+(l?"bg-blue-300 ":"")+(1===a&&"bg-gray-100"),style:{cursor:"pointer"},children:[Object(T.jsx)("div",{className:"flex justify-center items-center arrival-time-estimated-time "+(1===a?"comming":2===a?"gray":""),children:Object(T.jsx)("div",{children:F(e)})}),Object(T.jsx)("div",{className:" ml-8 arrival-time-stop-name flex justify-between",children:e.StopName.Zh_tw})]})}function Y(t,e){var n=1e5*(t.StopPosition.PositionLon-e.longitude),i=1e5*(t.StopPosition.PositionLat-e.latitude);return Math.pow(Math.pow(n,2)+Math.pow(i,2),.5)}function X(t){var e=t.estimateData,n=t.RouteData,c=Object(i.useState)(0),s=Object(r.a)(c,2),a=s[0],o=s[1],u=Object(i.useState)({}),l=Object(r.a)(u,2),j=l[0],d=l[1],h=Object(i.useState)(""),b=Object(r.a)(h,2),f=b[0],p=b[1],m=Object(i.useContext)(Kt),O=Object(i.useState)([]),x=Object(r.a)(O,2),g=x[0],v=x[1],S=Object(i.useState)(!0),N=Object(r.a)(S,2),C=N[0],w=N[1],_=Object(i.useState)([]),I=Object(r.a)(_,2),D=I[0],R=I[1];return Object(i.useEffect)((function(){n&&function(t,e){return y.apply(this,arguments)}(n.City,n.RouteUID).then((function(t){return v(t)}))}),[n]),Object(i.useEffect)((function(){var t={},e=1e4,n="";g[0]&&g[0][0]&&g[0][0].Stops.forEach((function(t){var i=Y(t,m);i<e&&i<500&&(e=i,n=t.StopUID)})),t[0]=n,e=1e4,n="",g[1]&&g[1][0]&&g[1][0].Stops.forEach((function(t){var i=Y(t,m);i<e&&i<500&&(e=i,n=t.StopUID)})),t[1]=n,e=1e4,n="",g[2]&&g[2][0]&&g[2][0].Stops.forEach((function(t){var i=Y(t,m);i<e&&i<500&&(e=i,n=t.StopUID)})),t[2]=n,d(t)}),[g,m]),Object(i.useEffect)((function(){var t=[];a in e&&e[a].forEach((function(e){1===$(e)&&t.push(e.StopUID)})),R(t)}),[g,e]),Object(T.jsxs)("div",{className:"arrival-time-block h-full flex flex-col",children:[Object(T.jsxs)("div",{className:"flex justify-between",children:[Object(T.jsx)("span",{}),Object(T.jsxs)("div",{className:"flex justify-center items-center tracking-widest mr-1 cursor-pointer py-1",onClick:function(){return w(!C)},children:[Object(T.jsx)("img",{src:z,className:"h-4 mr-2",alt:"\u5730\u5716\u5716\u6848"}),C?"\u6253\u958b\u5730\u5716":"\u6536\u8d77\u5730\u5716"]})]}),Object(T.jsx)("div",{className:"grow-0 transition-all "+(C?"h-0":"h-60 lg:h-80"),children:Object(T.jsx)("div",{className:"w-full  h-60 lg:h-80",children:j&&g&&Object(T.jsx)(J,{stopsOfRoute:g,mapStop:f,direction:a,commingStop:D})})}),Object(T.jsxs)("div",{className:"z-10 bg-white",children:[Object(T.jsxs)("div",{className:"flex items-center ",children:[0 in e&&e[0].length>0&&Object(T.jsxs)("div",{className:"flex-1 flex items-center justify-center arrival-time-direction-toggle "+(0===a?"on":null),onClick:function(){return o(0)},children:["\u5f80\xa0",Object(T.jsx)("span",{className:"font-bold",children:n.DestinationStopNameZh})]}),1 in e&&e[1].length>0&&Object(T.jsxs)("div",{className:"flex-1 flex items-center justify-center arrival-time-direction-toggle "+(1===a?"on":null),onClick:function(){return o(1)},children:["\u5f80\xa0",Object(T.jsx)("span",{className:"font-bold",children:n.DepartureStopNameZh})]}),2 in e&&e[2].length>0&&Object(T.jsx)("div",{className:"flex-1 flex items-center justify-center arrival-time-direction-toggle "+(2===a?"on":null),onClick:function(){return o(2)},children:Object(T.jsx)("span",{className:"font-bold",children:"\u8ff4\u5708"})})]}),Object(T.jsx)("div",{id:"timeList",className:"max-h-screen bg-white shadow-lg   px-4  overflow-auto relative",style:{height:C?"75vh":"30vh"},children:a in e&&e[a].map((function(t){return Object(T.jsx)(K,{setMapStop:p,data:t,pinStop:j,direction:a},t.StopSequence)}))})]})]})}var W=n.p+"static/media/favorite_24dp.53c45348.svg",V=n.p+"static/media/favorite_border_24dp.e0f3e7ea.svg";function G(t){var e=t.RouteUID,n=t.className,c=Object(i.useState)(!1),s=Object(r.a)(c,2),a=s[0],o=s[1];return Object(i.useEffect)((function(){var t=JSON.parse(localStorage.getItem("liked_bus_route_list"));t||(localStorage.setItem("liked_bus_route_list",JSON.stringify([])),t=JSON.parse(localStorage.getItem("liked_bus_route_list"))),o(!!t.find((function(t){return t===e})))}),[e]),Object(T.jsx)("img",{className:n+" p-3 ",src:a?W:V,alt:a?"\u5df2\u6536\u85cf liked":"\u6536\u85cf\u4ed6 like",onClick:function(t){t.preventDefault(),function(){if(a){var t=JSON.parse(localStorage.getItem("liked_bus_route_list")),n=t.findIndex((function(t){return t===e}));-1!==n&&(t.splice(n,1),localStorage.setItem("liked_bus_route_list",JSON.stringify(t))),o(!1)}else{var i=JSON.parse(localStorage.getItem("liked_bus_route_list"));-1===i.findIndex((function(t){return t===e}))&&(i.push(e),localStorage.setItem("liked_bus_route_list",JSON.stringify(i))),o(!0)}}()}})}var Q=n.p+"static/media/west_24dp.77f97c6f.svg";function tt(t){var e=t.content,n=void 0===e?"\u8fd4\u56de\u4e0a\u9801":e,i=Object(l.f)();return Object(T.jsx)("div",{className:"bg-white view-border pt-4 flex pl-1",children:Object(T.jsxs)("div",{className:"flex",onClick:function(){return i.goBack()},style:{cursor:"pointer"},children:[Object(T.jsx)("img",{src:Q,alt:"\u56de\u4e0a\u4e00\u9801 back to previous page"}),Object(T.jsx)("span",{className:"ml-2",children:n})]})})}function et(t){var e=t.RouteData;return Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)("div",{className:"bg-white flex justify-center items-center h-16 px-4",children:[Object(T.jsx)("span",{className:"ml-10",children:"\xa0"}),Object(T.jsx)("div",{className:"bus-estimated-time-routename",children:e.RouteName.Zh_tw}),Object(T.jsx)("div",{children:Object(T.jsx)(G,{RouteUID:e.RouteUID})})]})})}var nt=n(18),it=n(15),ct=n(19),st=function(){function t(){Object(it.a)(this,t),this.indices=[],this.children={}}return Object(ct.a)(t,[{key:"getAllIndices",value:function(){var t=this,e=Object(nt.a)(t.indices);return Object.entries(t.children).length>0&&Object.values(t.children).forEach((function(t){e.push.apply(e,Object(nt.a)(t.getAllIndices()))})),e}}]),t}(),at=function(){function t(){Object(it.a)(this,t),this.root=new st}return Object(ct.a)(t,[{key:"insert",value:function(t,e){for(var n=this.root,i=0;i<t.length;++i)n.children[t[i]]||(n.children[t[i]]=new st),n=n.children[t[i]],i===t.length-1&&n.indices.push(e)}},{key:"findAllIndices",value:function(t){for(var e=this.root,n=[],i=0;i<t.length;++i){if(!e.children[t[i]])return n;e=e.children[t[i]]}return e.getAllIndices()}}]),t}();function ot(t){return rt.apply(this,arguments)}function rt(){return(rt=Object(h.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/".concat(e,"?$format=JSON"),headers:m()}).then((function(t){return t.data})).catch((function(t){return console.log("error: ".concat(S[e],"\u516c\u8eca\u8def\u7dda\u8cc7\u6599 "),t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ut(){return(ut=Object(h.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],Object.keys(S).forEach((function(t){e.push(ot(t))})),n=[],t.abrupt("return",Promise.all(e).then((function(t){return t.forEach((function(t){return n.push.apply(n,Object(nt.a)(t))}))})).then((function(){return n})).catch((function(t){console.log("error: getAllBusCityRoute() ",t)})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function lt(t){var e=t.route_list,n=t.busRoute,c=t.inputContent,s=void 0===c?"":c,a=Object(i.useState)(""),u=Object(r.a)(a,2),l=u[0],j=u[1];return 0===s.length&&""!==l&&(e=n),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"flex justify-between mx-4 my-1",children:[Object(T.jsx)("span",{}),Object(T.jsxs)("select",{className:"bg-white",onChange:function(t){return j(t.target.value)},children:[Object(T.jsx)("option",{value:"",children:"\u5168\u7e23\u5e02"}),Object.entries(S).map((function(t){return Object(T.jsx)("option",{value:t[0],children:t[1]},t[0])}))]})]}),Object(T.jsx)("div",{className:"max-h-screen overflow-y-auto shadow-lg ",style:{height:"75vh"},children:e.filter((function(t){return(""===l||t.City===l)&&t})).map((function(t,e){return Object(T.jsx)(o.b,{to:"/bus_estimated_time/".concat(t.RouteUID),children:Object(T.jsxs)("div",{className:"route-search-item",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)("span",{className:"route-name",children:t.RouteName.Zh_tw}),Object(T.jsxs)("span",{className:"route-city",children:["\uff08",S[t.City],"\uff09"]}),Object(T.jsx)("br",{}),Object(T.jsxs)("span",{className:"route-depart-dest",children:[t.DepartureStopNameZh,"-",t.DestinationStopNameZh]})]}),Object(T.jsx)(G,{RouteUID:t.RouteUID})]})},t.RouteUID)}))})]})}var jt=n.p+"static/media/search_black_24dp.b56cb96d.svg";function dt(t){var e=t.inputHandle;return Object(T.jsx)("div",{className:"flex justify-center items-center",children:Object(T.jsxs)("div",{className:"input-window flex justify-center items-center ",children:[Object(T.jsx)("img",{src:jt,className:"lookup",alt:"\u5c0b\u627e\u8def\u7dda serach icon"}),Object(T.jsx)("input",{className:"input",placeholder:"\u8acb\u8f38\u5165\u516c\u8eca\u8def\u7dda\u6216\u865f\u78bc",autoComplete:"off",onChange:function(t){return e(t.target.value)}})]})})}function ht(t){return bt.apply(this,arguments)}function bt(){return(bt=Object(h.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",f()({method:"get",url:"https://ptx.transportdata.tw/MOTC/v2/Bus/Station/City/".concat(e,"?$format=JSON"),headers:m()}).then((function(t){var n=t.data;return n=n.map((function(t){return t.StationEnName=t.Stops[0].StopName.En,t.Stops=t.Stops.map((function(t){return{StopUID:t.StopUID,RouteUID:t.RouteUID}})),{City:e,StationUID:t.StationUID,StationName:t.StationName.Zh_tw,StationEnName:t.StationEnName,StationPosition:t.StationPosition,StationAddress:t.StationAddress,Stops:t.Stops}}))})).catch((function(t){return console.log("error: ".concat(v[e],"\u516c\u8eca\u7ad9\u4f4d\u8cc7\u6599 "),t)})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ft(){return(ft=Object(h.a)(d.a.mark((function t(){var e,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],Object.keys(v).forEach((function(t){e.push(ht(t))})),n=[],t.abrupt("return",Promise.all(e).then((function(t){return t.forEach((function(t){var e;return(e=n).push.apply(e,Object(nt.a)(t))}))})).then((function(){return n=n.sort((function(t,e){return t.StationPosition.PositionLon<e.StationPosition.PositionLon?-1:1}))})).catch((function(t){console.log("error: getAllBusCityStation() ",t)})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function pt(t,e,n,i){for(;n<i;){var c=Math.floor(n+(i-n)/2);t[c].StationPosition.PositionLon<e?n=c+1:i=c}return n}function mt(t,e){var n=1e5*(t.StationPosition.PositionLon-e.longitude),i=1e5*(t.StationPosition.PositionLat-e.latitude);return Math.pow(Math.pow(n,2)+Math.pow(i,2),.5)}function Ot(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;if(0===t.length)return[];for(var i=n/1e5,c=pt(t,e.longitude+i,0,t.length),s=pt(t,e.longitude-i,0,c),a=[],o=s;o<c;++o)mt(t[o],e)<n&&a.push(t[o]);return a}function xt(t){var e=t.station_list,n=t.busStation,c=t.inputContent,s=void 0===c?"":c,a=Object(i.useContext)($t),u=Object(i.useState)(""),l=Object(r.a)(u,2),j=l[0],d=l[1],h=Object(i.useState)({}),b=Object(r.a)(h,2),f=b[0],p=b[1];return Object(i.useState)((function(){var t={};n.forEach((function(e){t[e.City]||(t[e.City]=[]),t[e.City].length<500&&t[e.City].push(e)})),p(t)}),[n]),0===s.length&&""!==j&&f[j]&&(e=f[j]),Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:"flex justify-between mx-4 my-1",children:[Object(T.jsx)("span",{}),Object(T.jsxs)("select",{className:"bg-white",onChange:function(t){return d(t.target.value)},children:[Object(T.jsx)("option",{value:"",children:"\u5168\u7e23\u5e02"}),Object.entries(v).map((function(t){return Object(T.jsx)("option",{value:t[0],children:t[1]},t[0])}))]})]}),Object(T.jsx)("div",{className:"max-h-screen overflow-y-auto shadow-lg ",style:{height:"75vh"},children:e.filter((function(t){return(""===j||t.City===j)&&t})).map((function(t){return Object(T.jsxs)("div",{className:"station-search-item",children:[Object(T.jsx)("span",{className:"station-name",children:t.StationName}),Object(T.jsxs)("span",{className:"station-city",children:["\uff08",v[t.City],"\uff09"]}),Object(T.jsx)("span",{className:"station-address",children:t.StationAddress}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{children:"\u7ad9\u9ede\u8def\u7dda\uff1a"}),Object(T.jsx)("div",{className:"flex flex-wrap",children:t.Stops.map((function(t,e){return Object(T.jsx)(o.b,{to:"/bus_estimated_time/".concat(t.RouteUID),children:Object(T.jsx)("span",{className:"pin-icon-route-name",children:a.find((function(e){return e.RouteUID===t.RouteUID})).RouteName.Zh_tw})},e)}))})]},t.StationUID)}))})]})}function gt(t){var e=t.inputHandle;return Object(T.jsx)("div",{className:"flex justify-center items-center",children:Object(T.jsxs)("div",{className:"input-window flex justify-center items-center ",children:[Object(T.jsx)("img",{src:jt,className:"lookup",alt:"\u5c0b\u627e\u8def\u7dda serach icon"}),Object(T.jsx)("input",{className:"input",placeholder:"\u8acb\u8f38\u5165\u7ad9\u9ede\u540d\u7a31",autoComplete:"off",onChange:function(t){return e(t.target.value)}})]})})}var vt=n.p+"static/media/bus_c1.01261033.svg",St=n.p+"static/media/bus_c2.3a493e43.svg",Nt=(n.p,n.p+"static/media/bus_c4.94f6594e.svg"),yt=n.p+"static/media/bus_c5.475883a6.svg";function Ct(){return Object(T.jsx)("div",{className:"banner",children:Object(T.jsxs)("article",{className:"article",children:[Object(T.jsx)("h1",{className:"mt-12",children:"\u53f0\u7063\u516c\u8eca\u52d5\u614b"}),Object(T.jsx)("p",{className:"mt-4 text-gray-200",children:"\u6642\u523b\u67e5\u8a62\u7cfb\u7d71"}),Object(T.jsx)("p",{className:"mt-5 text-gray-400 tracking-normal text-xs lg:text-sm",children:"TAIWAN BUS+"})]})})}var wt=new E.Icon({iconUrl:R,iconSize:[24,24],className:"leaflet-marker-icon pin-icon red"}),_t=new E.Icon({iconUrl:k,iconSize:[36,36],className:"leaflet-marker-icon"});function It(t){var e=t.nearByBusStation,n=Object(i.useContext)($t);return e.map((function(t){return Object(T.jsx)(C.a,{position:[t.StationPosition.PositionLat,t.StationPosition.PositionLon],icon:_t,children:Object(T.jsxs)(w.a,{children:[Object(T.jsx)("span",{className:"pin-icon-station-name",children:t.StationName}),Object(T.jsx)("br",{}),Object(T.jsx)("span",{className:"pin-icon-station-address",children:t.StationAddress}),Object(T.jsx)("br",{}),Object(T.jsx)("div",{className:"flex flex-wrap",children:t.Stops.map((function(t,e){return Object(T.jsx)(o.b,{to:"/bus_estimated_time/".concat(t.RouteUID),children:Object(T.jsx)("span",{className:"pin-icon-route-name",children:n.find((function(e){return e.RouteUID===t.RouteUID})).RouteName.Zh_tw})},t.RouteUID)}))})]})},t.StationUID)}))}function Dt(){var t=Object(i.useContext)(Kt),e=Object(i.useContext)(Ft),n=Object(i.useState)(null),c=Object(r.a)(n,2),s=c[0],a=c[1],o=Object(i.useState)([]),u=Object(r.a)(o,2),l=u[0],j=u[1];return Object(i.useEffect)((function(){s&&s.setView([t.latitude,t.longitude])}),[s,t]),Object(i.useEffect)((function(){j(Ot(e,t))}),[e,t]),Object(T.jsxs)(I.a,{tap:!1,center:[22.9977325,120.2141299],zoom:16,scrollWheelZoom:!1,whenCreated:a,children:[Object(T.jsx)(D.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(T.jsx)(C.a,{position:[t.latitude,t.longitude],icon:wt,children:Object(T.jsxs)(w.a,{children:[Object(T.jsx)("div",{className:"pin-here",children:"\u4f60\u5728\u9019\u88e1"}),"\u9644\u8fd1\u6709",Object(T.jsx)("span",{className:"text-blue-800 font-bold mx-1",children:l.length}),"\u500b\u7ad9\u9ede"]})}),Object(T.jsx)(It,{nearByBusStation:l})]})}var Rt=[{path:"/",exact:!0,component:function(){return Object(T.jsxs)("div",{children:[Object(T.jsx)(Ct,{}),Object(T.jsxs)("section",{className:"view-border h-full lg:flex justify-between",children:[Object(T.jsx)(o.c,{to:"/find_bus_route/",children:Object(T.jsxs)("div",{className:"home-btn",children:[Object(T.jsx)("img",{src:vt,alt:"\u516c\u8eca\u5716\u6848"}),Object(T.jsx)("span",{className:"c1 ml-2",children:"\u5c0b\u627e\u8def\u7dda"})]})}),Object(T.jsx)(o.c,{to:"/near_by_bus_station/",children:Object(T.jsxs)("div",{className:"home-btn",children:[Object(T.jsx)("img",{src:yt,alt:"\u516c\u8eca\u5716\u6848"}),Object(T.jsx)("span",{className:"c5 ml-2",children:"\u9644\u8fd1\u7ad9\u9ede"})]})}),Object(T.jsx)(o.c,{to:"/find_bus_station/",children:Object(T.jsxs)("div",{className:"home-btn",children:[Object(T.jsx)("img",{src:St,alt:"\u516c\u8eca\u5716\u6848"}),Object(T.jsx)("span",{className:"c2 ml-2",children:"\u7ad9\u9ede\u67e5\u8a62"})]})}),Object(T.jsx)(o.c,{to:"/liked_list/",children:Object(T.jsxs)("div",{className:"home-btn",children:[Object(T.jsx)("img",{src:Nt,alt:"\u516c\u8eca\u5716\u6848"}),Object(T.jsx)("span",{className:"c4 ml-2",children:"\u6536\u85cf\u6e05\u55ae"})]})})]})]})}},{path:"/find_bus_route/",exact:!1,component:function(){var t=Object(i.useContext)($t),e=Object(i.useState)(""),n=Object(r.a)(e,2),c=n[0],s=n[1],a=Object(i.useState)([]),o=Object(r.a)(a,2),u=o[0],l=o[1],j=Object(i.useState)(new at),d=Object(r.a)(j,2),h=d[0],b=d[1];return Object(i.useEffect)((function(){t&&b(function(t){var e=new at;return t.forEach((function(t,n){t.RouteName.Zh_tw&&e.insert(t.RouteName.Zh_tw,n),t.RouteName.En&&t.RouteName.En!==t.RouteName.Zh_tw&&e.insert(t.RouteName.En,n);var i=function(t){for(var e=0;e<t.length;++e)if(t[e]>="0"&&t[e]<="9")return e;return-1}(t.RouteName.Zh_tw);i>0&&e.insert(t.RouteName.Zh_tw.slice(i),n)})),e}(t))}),[t]),Object(i.useEffect)((function(){c.length>0?l(h.findAllIndices(c).sort().filter((function(t,e,n){return 0===e||n[e-1]!==n[e]})).map((function(e){return t[e]})).sort((function(t,e){return t.RouteName.Zh_tw.length<e.RouteName.Zh_tw.length?-1:1}))):l(t.slice(0,50))}),[c,h,t]),Object(T.jsxs)("section",{className:"bg-white pt-4 lg:pb-10  ",children:[Object(T.jsx)(tt,{}),Object(T.jsxs)("div",{className:"view-border",children:[Object(T.jsx)(dt,{inputHandle:function(t){s(t)}}),Object(T.jsx)(lt,{route_list:u,busRoute:t,inputContent:c})]})]})}},{path:"/bus_estimated_time/:RouteUID",exact:!1,component:function(){var t=Object(i.useContext)($t),e=Object(l.g)().RouteUID,n=t.find((function(t){return t.RouteUID===e})),c=Object(i.useState)([]),s=Object(r.a)(c,2),a=s[0],o=s[1],u=Object(i.useState)(0),j=Object(r.a)(u,2),d=j[0],h=j[1],b=Object(i.useCallback)((function(){d>0&&h(d-1)}),[d]);return Object(i.useEffect)((function(){var t=setInterval(b,1e3);return function(){clearInterval(t)}}),[b]),Object(i.useEffect)((function(){0===d&&n&&function(t,e){return g.apply(this,arguments)}(n.City,n.RouteUID).then((function(t){o(t)})).then((function(){return h(10)})).then((function(){}))}),[d,n,a]),Object(T.jsxs)("div",{className:"h-full flex flex-col",children:[Object(T.jsx)(tt,{}),n&&Object(T.jsx)(et,{RouteData:n}),Object(T.jsx)("div",{className:"bg-white tracking-widest sticky top-0 z-20",children:Object(T.jsxs)("div",{className:" text-right lg:text-center py-1",children:[d,"\u79d2\u5f8c\u66f4\u65b0"]})}),Object(T.jsx)("div",{className:"view-border lg:pb-10 h-full flex flex-col",children:a?Object(T.jsx)(X,{estimateData:a,RouteData:n}):Object(T.jsx)("div",{className:"flex justify-center items-center my-10",children:Object(T.jsx)("p",{children:"\u51fa\u554f\u984c\u4e86\uff01\u8acb\u56de\u5230\u4e0a\u4e00\u9801\u91cd\u6574\u4e26\u518d\u8a66\u4e00\u6b21\u3002"})})})]})}},{path:"/near_by_bus_station/",exact:!1,component:function(){return Object(T.jsxs)("section",{className:"h-full",children:[Object(T.jsxs)("div",{children:[Object(T.jsx)(tt,{}),Object(T.jsx)("div",{className:"  flex justify-center items-center h-20",children:Object(T.jsx)("div",{className:"bus-stationname",children:"\u9644\u8fd1\u7684\u516c\u8eca\u7ad9\u9ede"})})]}),Object(T.jsx)("div",{className:"",children:Object(T.jsx)("div",{className:"w-screen  max-w-full lg:shadow-lg",style:{height:"70vh"},children:Object(T.jsx)(Dt,{})})})]})}},{path:"/find_bus_station/",exact:!1,component:function(){var t=Object(i.useContext)(Ft),e=Object(i.useState)(""),n=Object(r.a)(e,2),c=n[0],s=n[1],a=Object(i.useState)([]),o=Object(r.a)(a,2),u=o[0],l=o[1],j=Object(i.useState)(new at),d=Object(r.a)(j,2),h=d[0],b=d[1],f=Object(i.useContext)(Kt),p=Object(i.useState)([]),m=Object(r.a)(p,2),O=m[0],x=m[1];return Object(i.useEffect)((function(){x(Ot(t,f))}),[t,f]),Object(i.useEffect)((function(){t&&b(function(t){var e=new at;return t.forEach((function(t,n){t.StationName&&e.insert(t.StationName,n),t.StationEnName&&t.StationEnName!==t.StationName&&e.insert(t.StationEnName,n)})),e}(t))}),[t]),Object(i.useEffect)((function(){if(c.length>0)l(h.findAllIndices(c).sort().filter((function(t,e,n){return 0===e||n[e-1]!==n[e]})).map((function(e){return t[e]})).sort((function(t,e){return t.StationName.length<e.StationName.length?-1:1})));else if(O.length>0)l(O);else{var e=Math.floor(t.length/2);l(t.slice(e,e+10))}}),[c,h,t,O]),Object(T.jsxs)("section",{className:"bg-white  pt-4 lg:pb-10 h-full",children:[Object(T.jsx)(tt,{}),Object(T.jsxs)("div",{className:"view-border h-full flex flex-col",children:[Object(T.jsx)(gt,{inputHandle:function(t){s(t)}}),Object(T.jsx)(xt,{station_list:u,busStation:t,inputContent:c})]})]})}},{path:"/liked_list/",exact:!1,component:function(){var t=Object(i.useContext)($t),e=t.length&&localStorage.getItem("liked_bus_route_list")?JSON.parse(localStorage.getItem("liked_bus_route_list")).map((function(e){return t.find((function(t){return t.RouteUID===e}))})):[];return Object(T.jsxs)("section",{className:"bg-white  pt-4 lg:pb-10 h-full",children:[Object(T.jsx)(tt,{}),Object(T.jsx)("div",{className:"view-border h-full flex flex-col",children:Object(T.jsx)("div",{className:"max-h-screen overflow-y-auto shadow-lg ",style:{height:"75vh"},children:e&&e.length>0?Object(T.jsx)(lt,{route_list:e,busRoute:[],inputContent:"*"}):Object(T.jsx)("div",{className:"flex justify-center items-center my-10",children:"\u60a8\u9084\u6c92\u6709\u6536\u85cf\u8def\u7dda"})})})]})}}],kt=Rt,Pt=n(22),Ut=n.n(Pt);function Et(t){var e=new Date,n=e.getTime()+t;return e.setTime(n),e.toUTCString()}var Tt=[];function Bt(t){var e=t.setBusStation,n=Object(i.useState)(!0),c=Object(r.a)(n,2),s=c[0],a=c[1];return Object(i.useEffect)((function(){var t=JSON.parse(localStorage.getItem("bus_station")&&Ut.a.decompressFromBase64(localStorage.getItem("bus_station")));!t||!t.data||(new Date).getTime()>new Date(t.expire_time)?function(){return ft.apply(this,arguments)}().then((function(t){e&&e(t),localStorage.setItem("bus_station",Ut.a.compressToBase64(JSON.stringify({data:t,expire_time:Et(2592e5)})))})).then((function(){a(!1)})):(e&&e(t.data),a(!1))}),[e]),s&&Object(T.jsxs)("div",{className:"bg-white font-bold opacity-90 z-50 w-full h-full fixed flex flex-col items-center justify-center",children:[Object(T.jsx)("p",{className:"text-center mb-2 tracking-widest ",children:"\u8cc7\u6599\u66f4\u65b0\u4e2d\u2026"}),Object(T.jsx)("p",{className:"text-center mb-10 tracking-widest",children:"\u7b2c\u4e00\u6b21\u66f4\u65b0\u9700\u7d0415\u79d2\u7684\u6642\u9593"}),Tt.map((function(t,e){return Object(T.jsxs)("p",{className:"w-1/2 transition-all my-2 font-bold tracking-widest",children:[e+1," ",t]},e)}))]})}function Lt(t,e,n){navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(i){(function(t,e){var n=1e5*(e.longitude-t.longitude),i=1e5*(e.latitude-t.latitude);return Math.pow(n,2)+Math.pow(i,2)>25})(e,i.coords)&&(t(i.coords),n(i.coords))}),(function(t){var e=t.code,n=t.message;console.error(e),console.error(n)}))}function Mt(t){var e=t.setUserLocation,n=t.period,c=void 0===n?30:n,s=Object(i.useState)({longitude:0,latitude:0}),a=Object(r.a)(s,2),o=a[0],u=a[1];return Object(i.useEffect)((function(){Lt(e,o,u);var t=setInterval((function(){Lt(e,o,u)}),1e3*c);return function(){clearInterval(t)}}),[e,c,o]),null}function Zt(t){var e=t.setBusRoute;return Object(i.useEffect)((function(){var t=JSON.parse(localStorage.getItem("bus_route")&&Ut.a.decompressFromBase64(localStorage.getItem("bus_route")));!t||!t.data||(new Date).getTime()>new Date(t.expire_time)?function(){return ut.apply(this,arguments)}().then((function(t){e&&e(t),localStorage.setItem("bus_route",Ut.a.compressToBase64(JSON.stringify({data:t,expire_time:Et(864e5)})))})):e&&e(t.data)}),[e]),null}Tt.push("\u4f60\u77e5\u9053\u55ce\uff1f\u5317\u4e00\u5973\u4e2d\u7684\u516c\u8eca\u7ad9\u724c\u5176\u5be6\u53eb\u4f5c\u4e00\u5973\u4e2d\uff1f\u8d95\u7dca\u5230\u3010\u7ad9\u9ede\u67e5\u8a62\u3011\u8a66\u8a66\u5427\uff01"),Tt.push("\u8df3\u86d9\u516c\u8eca\u5176\u5be6\u662f\u6703\u958b\u4e0a\u9ad8\u901f\u516c\u8def\u7684\u516c\u8eca\u5594\uff01"),Tt.push("\u5230\u3010\u5c0b\u627e\u8def\u7dda\u3011\u67e5\u67e5\u770b\u65b0\u5317\u5e02F\u958b\u982d\u7684\u516c\u8eca\u5427\uff01\u5e02\u6c11\u4e0d\u7528\u9322\u5594\uff01");var At=n.p+"static/media/logo.606790e7.svg",Ht=n(89);function Jt(){var t=Object(i.useState)(!1),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(T.jsxs)("div",{className:"relative",children:[Object(T.jsxs)("div",{className:"header ",children:[Object(T.jsx)(o.c,{to:"/",children:Object(T.jsx)("img",{src:At,alt:"logo"})}),Object(T.jsxs)("div",{className:"flex",children:[Object(T.jsx)("div",{className:"hidden lg:block",children:Object(T.jsxs)("ul",{className:" bg-white flex justify-between items-center",onClick:function(){return c(!1)},children:[Object(T.jsx)("li",{className:"mx-4",children:Object(T.jsx)(o.c,{to:"/find_bus_route/",className:"header-nav-btn",children:"\u5c0b\u627e\u8def\u7dda"})}),Object(T.jsx)("li",{className:"mx-4",children:Object(T.jsx)(o.c,{to:"/near_by_bus_station/",className:"header-nav-btn",children:"\u9644\u8fd1\u7ad9\u9ede"})}),Object(T.jsx)("li",{className:"mx-4",children:Object(T.jsx)(o.c,{to:"/find_bus_station/",className:"header-nav-btn",children:"\u7ad9\u9ede\u67e5\u8a62"})}),Object(T.jsx)("li",{className:"mx-4",children:Object(T.jsx)(o.c,{to:"/liked_list/",className:"header-nav-btn",children:"\u6536\u85cf\u6e05\u55ae"})})]})}),Object(T.jsx)("div",{className:"lg:hidden",children:Object(T.jsx)(Ht.a,{size:20,toggled:n,toggle:c})})]})]}),Object(T.jsx)(zt,{isOpen:n,setOpen:c})]})}function zt(t){var e=t.isOpen,n=t.setOpen;return e?Object(T.jsxs)("ul",{className:"absolute bg-white shadow-lg top-16 right-0 px-8 z-30 lg:hidden",onClick:function(){return n(!1)},children:[Object(T.jsx)("li",{className:"mt-5 mb-5 ",children:Object(T.jsx)(o.c,{to:"/find_bus_route/",className:"header-nav-btn",children:"\u5c0b\u627e\u8def\u7dda"})}),Object(T.jsx)("li",{className:"mb-5",children:Object(T.jsx)(o.c,{to:"/near_by_bus_station/",className:"header-nav-btn",children:"\u9644\u8fd1\u7ad9\u9ede"})}),Object(T.jsx)("li",{className:"mb-5",children:Object(T.jsx)(o.c,{to:"/find_bus_station/",className:"header-nav-btn",children:"\u7ad9\u9ede\u67e5\u8a62"})}),Object(T.jsx)("li",{className:"mb-5",children:Object(T.jsx)(o.c,{to:"/liked_list/",className:"header-nav-btn",children:"\u6536\u85cf\u6e05\u55ae"})})]}):Object(T.jsx)("span",{})}function qt(){return Object(T.jsx)("div",{className:"mt-auto bg-gray-700 flex justify-center items-center h-8 lg:h-16 flex-grow-0 flex-shrink-0 ",children:Object(T.jsx)("span",{className:"text-xs text-white",children:"Copyright \xa9 2021 \u53f0\u7063\u516c\u8eca e \u9ede\u901a & Z.M. All rights reserved."})})}var Ft=Object(i.createContext)([]),$t=Object(i.createContext)([]),Kt=Object(i.createContext)({longitude:121.5410178,latitude:25.0208745});var Yt=function(){var t=Object(i.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)([]),a=Object(r.a)(s,2),o=a[0],l=a[1],j=Object(i.useState)(Object(i.useContext)(Kt)),d=Object(r.a)(j,2),h=d[0],b=d[1];return Object(T.jsxs)("div",{className:"App",children:[Object(T.jsx)(Mt,{setUserLocation:b}),Object(T.jsx)(Bt,{setBusStation:c}),Object(T.jsx)(Zt,{setBusRoute:l}),Object(T.jsx)(Kt.Provider,{value:h,children:Object(T.jsx)(Ft.Provider,{value:n,children:Object(T.jsx)($t.Provider,{value:o,children:Object(T.jsxs)("div",{className:"min-h-screen flex flex-col flex-nowrap",children:[Object(T.jsx)(Jt,{}),Object(u.a)(kt),Object(T.jsx)(qt,{})]})})})})]})},Xt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,91)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),s(t),a(t)}))};var Wt=Object(l.h)((function(t){var e=t.history;return Object(i.useEffect)((function(){var t=e.listen((function(){window.scrollTo(0,0)}));return function(){t()}}),[]),null}));a.a.render(Object(T.jsx)(c.a.StrictMode,{children:Object(T.jsxs)(o.a,{children:[Object(T.jsx)(Wt,{}),Object(T.jsx)(Yt,{})]})}),document.getElementById("root")),Xt()}},[[83,1,2]]]);
//# sourceMappingURL=main.fc95d569.chunk.js.map