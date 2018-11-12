(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(46),r=a.n(i),o=(a(84),a(28)),c=a(29),s=a(32),u=a(30),h=a(33),d=a(69),m=a.n(d),p=(a(86),a(88),{apiKey:"AIzaSyD3HU2wG3tzEK-Zf57BCeVz6FhE7BEwnnA",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest"],spreadsheetId:"1OHd_uNLhKvi1kKdUXUlVTKnf_xCQYiWhDqU8jotJyrY"}),g=a(70);var f=function(e){return e.reduce(function(e,t){return e+t},0)/e.length};function v(e,t){var a=[];e.forEach(function(e){(t&&e.team_land||!t&&e.gegner_land)&&(t?e.team_land.split(","):e.gegner_land.split(",")).forEach(function(e){a.push(e)})});var n=[["Nationalit\xe4t","Verteilung in Prozent"]],l=[];return a.forEach(function(e){l.includes(e)||(n.push([e,E(a,e)/a.length*100]),l.push(e))}),n}function E(e,t){var a=0;return e.forEach(function(e){t===e&&a++}),a}var k=a(18),_=a(185),b={region:"150",resolution:"countries",displayMode:"auto",magnifyingGlass:{enable:!0,zoomFactor:7.5},colorAxis:{minValue:0,colors:["green","orange","red"]}},w={title:"Durschnittliches Tilt Level mit und ohne Kevin",focusTarget:"category",vAxis:{title:"Tilt Level (1-5)",minValue:1}},y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!0,error:null,entries:[],results:0},a.start=function(){window.gapi.client.init({apiKey:p.apiKey,discoveryDocs:p.discoveryDocs}).then(function(){var e;e=a.onLoad,window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:p.spreadsheetId,range:"Daten!A6:Q",valueRenderOption:"FORMATTED_VALUE"}).then(function(t){var a=t.result.values.map(function(e){return{datum:e[0],rank:e[1],prime:e[2],map:e[3],team_land:e[4],gegner_land:e[5],kevin_anwesend:e[6],kevin_toxicity:e[7],kevin_hack_call:e[8],kevin_stats:e[9],ergebnis:e[10],team_hack_call:e[11],joe_tilt:e[12],jakob_tilt:e[13],mika_tilt:e[14],match_link:e[15],anmerkung:e[16]}})||[];e({entries:a})},function(t){e(!1,t.result.error)})})})},a.onLoad=function(e,t){e?a.setState({entries:e.entries,results:e.entries.length,loading:!1}):a.setState({error:t,loading:!1})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.start)}},{key:"render",value:function(){return this.state.loading?l.a.createElement("div",{className:"Loading"},l.a.createElement(g.PacmanLoader,{color:"#6aa84f",loading:this.state.loading})):this.state.entries?l.a.createElement("div",{id:"panels"},l.a.createElement(_.a,{className:"panel-bootstrap",id:"panel-map-verteilung",defaultExpanded:!0},l.a.createElement(_.a.Heading,null,l.a.createElement(_.a.Title,{toggle:!0},"Map Verteilung")),l.a.createElement(_.a.Collapse,null,l.a.createElement(_.a.Body,null,l.a.createElement(k.a,{chartType:"PieChart",data:function(e){var t=[];e.forEach(function(e){t.push(e.map)});var a=[["Maps","Anzahl"]],n=[];return t.forEach(function(e){n.includes(e)||(a.push([e,E(t,e)]),n.push(e))}),a}(this.state.entries),graph_id:"MapVerteilung",width:"100%",height:"400px",legend_toggle:!0})))),l.a.createElement(_.a,{className:"panel-bootstrap",id:"panel-team-tilt-level",defaultExpanded:!0},l.a.createElement(_.a.Heading,null,l.a.createElement(_.a.Title,{toggle:!0},"Tilt Level mit und ohne Kevin")),l.a.createElement(_.a.Collapse,null,l.a.createElement(_.a.Body,null,l.a.createElement(k.a,{chartType:"ColumnChart",data:function(e){var t=[["Spieler","Tilt ohne Kevin","Tilt mit Kevin","Kombiniert"]],a=[],n=[],l=[],i=[],r=[],o=[];return e.forEach(function(e){e.joe_tilt&&("Y"===e.kevin_anwesend?n.push(Number(e.joe_tilt)):a.push(Number(e.joe_tilt))),e.jakob_tilt&&("Y"===e.kevin_anwesend?i.push(Number(e.jakob_tilt)):l.push(Number(e.jakob_tilt))),e.mika_tilt&&("Y"===e.kevin_anwesend?o.push(Number(e.mika_tilt)):r.push(Number(e.mika_tilt)))}),t.push(["Joe",f(a),f(n),f(a.concat(n))]),t.push(["Jakob",f(l),f(i),f(l.concat(i))]),t.push(["Mika",f(r),f(o),f(r.concat(o))]),t.push(["Gesamt",f(a.concat(l,r)),f(n.concat(i,o)),f(a.concat(n,l,i,r,o))]),t}(this.state.entries),graph_id:"TiltLevel",width:"100%",height:"100%",legend_toggle:!0,options:w})))),l.a.createElement(_.a,{className:"panel-bootstrap",id:"panel-hack-call",defaultExpanded:!0},l.a.createElement(_.a.Heading,null,l.a.createElement(_.a.Title,{toggle:!0},"Kevins Hackcall Quote im Vegleich zum Team")),l.a.createElement(_.a.Collapse,null,l.a.createElement(_.a.Body,null,l.a.createElement(k.a,{chartType:"Sankey",data:function(e){var t=[["From","To","Weight"]],a=[],n=[];return e.forEach(function(e){e.kevin_anwesend&&e.kevin_hack_call&&(a.push(["Y"===e.kevin_hack_call,"Y"===e.prime]),n.push(["Y"===e.team_hack_call,"Y"===e.prime]))}),t.push(["Kevin","Hack Call",a.filter(function(e){return!0===e[0]}).length]),t.push(["Kevin","Non-Hack Call",a.filter(function(e){return!1===e[0]}).length]),t.push(["Team","Hack Call",n.filter(function(e){return!0===e[0]}).length]),t.push(["Team","Non-Hack Call",n.filter(function(e){return!1===e[0]}).length]),t.push(["Non-Hack Call","Prime",a.filter(function(e){return!1===e[0]}).concat(n.filter(function(e){return!1===e[0]})).filter(function(e){return!0===e[1]}).length]),t.push(["Non-Hack Call","Non-Prime",a.filter(function(e){return!1===e[0]}).concat(n.filter(function(e){return!1===e[0]})).filter(function(e){return!1===e[1]}).length]),t.push(["Hack Call","Prime",a.filter(function(e){return!0===e[0]}).concat(n.filter(function(e){return!0===e[0]})).filter(function(e){return!0===e[1]}).length]),t.push(["Hack Call","Non-Prime",a.filter(function(e){return!0===e[0]}).concat(n.filter(function(e){return!0===e[0]})).filter(function(e){return!1===e[1]}).length]),t}(this.state.entries),graph_id:"HackCall",width:"100%",height:"100%",loader:l.a.createElement("div",null,"Loading Chart"),legend_toggle:!0})))),l.a.createElement(_.a,{className:"panel-bootstrap",id:"panel-gegner-nationalitaeten",defaultExpanded:!0},l.a.createElement(_.a.Heading,null,l.a.createElement(_.a.Title,{toggle:!0},"Gegner Nationalit\xe4ten")),l.a.createElement(_.a.Collapse,null,l.a.createElement(_.a.Body,null,l.a.createElement(k.a,{chartType:"GeoChart",data:v(this.state.entries,!1),graph_id:"GegnerNationalitaeten",width:"100%",height:"500px",legend_toggle:!0,options:b})))),l.a.createElement(_.a,{className:"panel-bootstrap",id:"panel-team-nationalitaeten",defaultExpanded:!0},l.a.createElement(_.a.Heading,null,l.a.createElement(_.a.Title,{toggle:!0},"Team Nationalit\xe4ten")),l.a.createElement(_.a.Collapse,null,l.a.createElement(_.a.Body,null,l.a.createElement(k.a,{chartType:"GeoChart",data:v(this.state.entries,!0),graph_id:"TeamNationalitaeten",width:"100%",height:"500px",legend_toggle:!0,options:b}))))):l.a.createElement("div",null,this.state.error)}}]),t}(n.Component),N=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h3",{className:"App-title"},"Willkommen bei der Langzeitstudie zu Matchmaking mit Kevin"),l.a.createElement("p",null,'Diese Website veranschaulicht die Langzeitstudie zu Kevin Kr\xe4tschmer und seiner Auswirkung auf die Qualit\xe4t der Matchmaking Spiele in "Counter-Strike: Global Offensive".')),l.a.createElement(y,null),l.a.createElement("footer",{className:"App-footer"},l.a.createElement("p",null,"Made with",l.a.createElement("img",{src:m.a,className:"App-logo-small",alt:"React Logo"})," by"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/johannesmols/kevin-langzeitstudie"},"Johannes Mols"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},79:function(e,t,a){e.exports=a(183)},84:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){}},[[79,2,1]]]);
//# sourceMappingURL=main.67f3d558.chunk.js.map