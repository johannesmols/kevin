(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{183:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(46),r=a.n(l),o=(a(84),a(28)),c=a(29),s=a(32),u=a(30),m=a(33),h=a(69),p=a.n(h),d=(a(86),a(88),{apiKey:"AIzaSyD3HU2wG3tzEK-Zf57BCeVz6FhE7BEwnnA",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest"],spreadsheetId:"1OHd_uNLhKvi1kKdUXUlVTKnf_xCQYiWhDqU8jotJyrY"}),g=a(70);var f=function(e){return e.reduce(function(e,t){return e+t},0)/e.length};function v(e,t){var a=[];e.forEach(function(e){(t&&e.team_land||!t&&e.gegner_land)&&(t?e.team_land.split(","):e.gegner_land.split(",")).forEach(function(e){a.push(e)})});var n=[["Nationalit\xe4t","Verteilung in Prozent"]],i=[];return a.forEach(function(e){i.includes(e)||(n.push([e,E(a,e)/a.length*100]),i.push(e))}),n}function E(e,t){var a=0;return e.forEach(function(e){t===e&&a++}),a}function _(e){return e.filter(function(e){return!0===e}).length/e.length*100}var k=a(5),y=a(185),C={title:"Win Rate",isStacked:!0,focusTarget:"category",hAxis:{title:""},vAxis:{title:"Prozent (0-100)",minValue:0,maxValue:100},series:{0:{color:"#3e8410"},1:{color:"#c44129"}}},x={title:"Matches mit Prime aktiviert",isStacked:!0,focusTarget:"category",hAxis:{title:""},vAxis:{title:"Prozent (0-100)",minValue:0,maxValue:100},series:{0:{color:"#3e8410"},1:{color:"#c44129"}}},T={title:"Matches in denen Kevin Hack called",isStacked:!0,focusTarget:"category",hAxis:{title:""},vAxis:{title:"Prozent (0-100)",minValue:0,maxValue:100},series:{0:{color:"#3e8410"},1:{color:"#c44129"}}},b={title:"Matches in denen das Team Hack called",isStacked:!0,focusTarget:"category",hAxis:{title:""},vAxis:{title:"Prozent (0-100)",minValue:0,maxValue:100},series:{0:{color:"#3e8410"},1:{color:"#c44129"}}},w={title:"Durschnittliche Toxizit\xe4t von Kevin",isStacked:!1,focusTarget:"category",hAxis:{title:""},vAxis:{title:"Toxizit\xe4t (1-5)",minValue:1,maxValue:5},series:{0:{color:"#ec9332"}}},N={title:"Durschnittlicher Tilt des gesamten Teams ausgenommen von Kevin",isStacked:!1,focusTarget:"category",hAxis:{title:""},vAxis:{title:"Tilt (1-5)",minValue:1,maxValue:5},series:{0:{color:"#0560bd"}}},A={region:"150",resolution:"countries",displayMode:"auto",magnifyingGlass:{enable:!0,zoomFactor:7.5},colorAxis:{minValue:0,colors:["green","orange","red"]}},K={title:"Durschnittliches Tilt Level mit und ohne Kevin",focusTarget:"category",vAxis:{title:"Tilt Level (1-5)",minValue:1}},L={title:"Kevins Hack Quall Quote im Vergleich zum Team",focusTarget:"category",vAxis:{title:"Prozent (0-100)",minValue:0,maxValue:100}},V={hAxis:{title:"Toxizit\xe4t",minValue:1,maxValue:5,viewWindowMode:"maximized"},vAxis:{title:"HLTV Rating 1.0"},legend:"none",trendlines:{0:{type:"exponential",lineWidth:10,opacity:.2}}},H=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={loading:!0,error:null,entries:[],results:0},a.start=function(){window.gapi.client.init({apiKey:d.apiKey,discoveryDocs:d.discoveryDocs}).then(function(){var e;e=a.onLoad,window.gapi.client.load("sheets","v4",function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:d.spreadsheetId,range:"Daten!A6:R",valueRenderOption:"FORMATTED_VALUE"}).then(function(t){var a=t.result.values.map(function(e){return{datum:e[0],rank:e[1],prime:e[2],map:e[3],team_land:e[4],gegner_land:e[5],kevin_anwesend:e[6],kevin_toxicity:e[7],kevin_hack_call:e[8],kevin_stats:e[9],kevin_hltv_rating:e[10],ergebnis:e[11],team_hack_call:e[12],joe_tilt:e[13],jakob_tilt:e[14],mika_tilt:e[15],match_link:e[16],anmerkung:e[17]}})||[];e({entries:a})},function(t){e(!1,t.result.error)})})})},a.onLoad=function(e,t){e?a.setState({entries:e.entries,results:e.entries.length,loading:!1}):a.setState({error:t,loading:!1})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.start)}},{key:"render",value:function(){return this.state.loading?i.a.createElement("div",{className:"Loading"},i.a.createElement(g.PacmanLoader,{color:"#6aa84f",loading:this.state.loading})):this.state.entries?i.a.createElement("div",{id:"panels"},i.a.createElement(y.a,{className:"panel-bootstrap",id:"panel-map-verteilung",defaultExpanded:!0},i.a.createElement(y.a.Heading,null,i.a.createElement(y.a.Title,{toggle:!0},"Map Verteilung")),i.a.createElement(y.a.Collapse,null,i.a.createElement(y.a.Body,null,i.a.createElement(k.a,{chartType:"PieChart",data:function(e){var t=[];e.forEach(function(e){t.push(e.map)});var a=[["Maps","Anzahl"]],n=[];return t.forEach(function(e){n.includes(e)||(a.push([e,E(t,e)]),n.push(e))}),a}(this.state.entries),graph_id:"MapVerteilung",width:"100%",height:"400px",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0})))),i.a.createElement(y.a,{className:"panel-bootstrap",id:"panel-map-analyse",defaultExpanded:!0},i.a.createElement(y.a.Heading,null,i.a.createElement(y.a.Title,{toggle:!0},"Map Analyse")),i.a.createElement(y.a.Collapse,null,i.a.createElement(y.a.Body,null,i.a.createElement(k.a,{chartType:"ColumnChart",data:function(e){var t=[["Map","Gewonnen",{type:"string",role:"tooltip"},"Verloren",{type:"string",role:"tooltip"}]];e.sort(function(e,t){return e.map.localeCompare(t.map)});var a=[];return e.forEach(function(n){if(!a.includes(n.map)){var i=n.map,l=[0,0];e.forEach(function(e){if(i===e.map&&e.ergebnis){var t=e.ergebnis.split(":");Number(t[0]>Number(t[1]))?l[0]++:Number(t[0]<Number(t[1]))&&l[1]++}});var r=l[0]/(l[0]+l[1])*100,o=l[1]/(l[0]+l[1])*100;a.push(n.map),t.push([n.map,r,r.toFixed(2)+"% ("+l[0]+")",o,o.toFixed(2)+"% ("+l[1]+")"])}}),t}(this.state.entries),graph_id:"MapAnalyseWinRate",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:C}),i.a.createElement(k.a,{chartType:"ColumnChart",data:function(e){var t=[["Map","Prime",{type:"string",role:"tooltip"},"Non-Prime",{type:"string",role:"tooltip"}]];e.sort(function(e,t){return e.map.localeCompare(t.map)});var a=[];return e.forEach(function(n){if(!a.includes(n.map)){var i=n.map,l=[0,0];e.forEach(function(e){i===e.map&&("Y"===e.prime?l[0]++:l[1]++)});var r=l[0]/(l[0]+l[1])*100,o=l[1]/(l[0]+l[1])*100;a.push(n.map),t.push([n.map,r,r.toFixed(2)+"% ("+l[0]+")",o,o.toFixed(2)+"% ("+l[1]+")"])}}),t}(this.state.entries),graph_id:"MapAnalysePrime",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:x}),i.a.createElement(k.a,{chartType:"ColumnChart",data:function(e){var t=[["Map","Ja",{type:"string",role:"tooltip"},"Nein",{type:"string",role:"tooltip"}]];e.sort(function(e,t){return e.map.localeCompare(t.map)});var a=[];return e.forEach(function(n){if(!a.includes(n.map)){var i=n.map,l=[0,0];e.forEach(function(e){i===e.map&&"Y"===e.kevin_anwesend&&("Y"===e.kevin_hack_call?l[0]++:l[1]++)});var r=l[0]/(l[0]+l[1])*100,o=l[1]/(l[0]+l[1])*100;a.push(n.map),t.push([n.map,r,r.toFixed(2)+"% ("+l[0]+")",o,o.toFixed(2)+"% ("+l[1]+")"])}}),t}(this.state.entries),graph_id:"MapAnalyseKevinHackCall",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:T}),i.a.createElement(k.a,{chartType:"ColumnChart",data:function(e){var t=[["Map","Ja",{type:"string",role:"tooltip"},"Nein",{type:"string",role:"tooltip"}]];e.sort(function(e,t){return e.map.localeCompare(t.map)});var a=[];return e.forEach(function(n){if(!a.includes(n.map)){var i=n.map,l=[0,0];e.forEach(function(e){i===e.map&&("Y"===e.kevin_hack_call?l[0]++:l[1]++)});var r=l[0]/(l[0]+l[1])*100,o=l[1]/(l[0]+l[1])*100;a.push(n.map),t.push([n.map,r,r.toFixed(2)+"% ("+l[0]+")",o,o.toFixed(2)+"% ("+l[1]+")"])}}),t}(this.state.entries),graph_id:"MapAnalyseTeamHackCall",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:b}),i.a.createElement(k.a,{chartType:"ColumnChart",data:function(e){var t=[["Map","Toxizit\xe4t",{type:"string",role:"tooltip"}]];e.sort(function(e,t){return e.map.localeCompare(t.map)});var a=[];return e.forEach(function(n){if(!a.includes(n.map)){var i=n.map,l=0,r=0;e.forEach(function(e){i===e.map&&"Y"===e.kevin_anwesend&&(l+=Number(e.kevin_toxicity),r++)}),a.push(n.map),t.push([n.map,l/r,(l/r).toFixed(2)+" (\xf8 aus "+r+" Spiel(en))"])}}),t}(this.state.entries),graph_id:"MapAnalyseKevinToxicity",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:w}),i.a.createElement(k.a,{chartType:"ColumnChart",data:function(e){var t=[["Map","Tilt",{type:"string",role:"tooltip"}]];e.sort(function(e,t){return e.map.localeCompare(t.map)});var a=[];return e.forEach(function(n){if(!a.includes(n.map)){var i=n.map,l=0,r=0;e.forEach(function(e){i===e.map&&(e.joe_tilt&&(l+=Number(e.joe_tilt),r++),e.jakob_tilt&&(l+=Number(e.jakob_tilt),r++),e.mika_tilt&&(l+=Number(e.mika_tilt),r++))}),a.push(n.map),t.push([n.map,l/r,(l/r).toFixed(2)+" (\xf8 aus "+r+" Werten)"])}}),t}(this.state.entries),graph_id:"MapAnalyseTeamTilt",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:N})))),i.a.createElement(y.a,{className:"panel-bootstrap",id:"panel-team-tilt-level",defaultExpanded:!0},i.a.createElement(y.a.Heading,null,i.a.createElement(y.a.Title,{toggle:!0},"Tilt Level mit und ohne Kevin")),i.a.createElement(y.a.Collapse,null,i.a.createElement(y.a.Body,null,i.a.createElement(k.a,{chartType:"ColumnChart",data:function(e){var t=[["Spieler","Tilt ohne Kevin","Tilt mit Kevin","Kombiniert"]],a=[],n=[],i=[],l=[],r=[],o=[];return e.forEach(function(e){e.joe_tilt&&("Y"===e.kevin_anwesend?n.push(Number(e.joe_tilt)):a.push(Number(e.joe_tilt))),e.jakob_tilt&&("Y"===e.kevin_anwesend?l.push(Number(e.jakob_tilt)):i.push(Number(e.jakob_tilt))),e.mika_tilt&&("Y"===e.kevin_anwesend?o.push(Number(e.mika_tilt)):r.push(Number(e.mika_tilt)))}),t.push(["Joe",f(a),f(n),f(a.concat(n))]),t.push(["Jakob",f(i),f(l),f(i.concat(l))]),t.push(["Mika",f(r),f(o),f(r.concat(o))]),t.push(["Gesamt",f(a.concat(i,r)),f(n.concat(l,o)),f(a.concat(n,i,l,r,o))]),t}(this.state.entries),graph_id:"TiltLevel",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:K})))),i.a.createElement(y.a,{className:"panel-bootstrap",id:"panel-hack-call",defaultExpanded:!0},i.a.createElement(y.a.Heading,null,i.a.createElement(y.a.Title,{toggle:!0},"Kevins Hackcall Quote im Vegleich zum Team")),i.a.createElement(y.a.Collapse,null,i.a.createElement(y.a.Body,null,i.a.createElement(k.a,{chartType:"ColumnChart",data:function(e){var t=[["Kategorie","Hack Call","Prime"]],a=[],n=[],i=[],l=[];e.forEach(function(e){"Y"===e.kevin_anwesend&&a.push(["Y"===e.kevin_hack_call,"Y"===e.prime]),e.team_hack_call&&"Y"===e.kevin_anwesend&&n.push(["Y"===e.team_hack_call,"Y"===e.prime]),"N"===e.kevin_anwesend&&e.team_hack_call&&i.push(["Y"===e.team_hack_call,"Y"===e.prime]),"Y"===e.kevin_anwesend&&("Y"===e.kevin_hack_call&&"N"===e.team_hack_call||"N"===e.kevin_hack_call&&"N"===e.team_hack_call?l.push(!0):l.push(!1))});var r=_(a.map(function(e,t){return e[0]})),o=_(a.filter(function(e){return!0===e[0]}).map(function(e,t){return e[1]})),c=_(n.map(function(e,t){return e[0]})),s=_(n.filter(function(e){return!0===e[0]}).map(function(e,t){return e[1]})),u=_(i.map(function(e,t){return e[0]})),m=_(i.filter(function(e){return!0===e[0]}).map(function(e,t){return e[1]})),h=_(l);return t.push(["Kevin",r,o]),t.push(["Team mit Kevin",c,s]),t.push(["Team ohne Kevin",u,m]),t.push(["Zustimmung mit Kevin",h,0]),t}(this.state.entries),graph_id:"HackCallColumn",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:L}),i.a.createElement(k.a,{chartType:"Sankey",data:function(e){var t=[["From","To","Weight"]],a=[],n=[];return e.forEach(function(e){e.kevin_anwesend&&e.kevin_hack_call&&(a.push(["Y"===e.kevin_hack_call,"Y"===e.prime]),n.push(["Y"===e.team_hack_call,"Y"===e.prime]))}),t.push(["Kevin","Hack Call",a.filter(function(e){return!0===e[0]}).length]),t.push(["Kevin","Non-Hack Call",a.filter(function(e){return!1===e[0]}).length]),t.push(["Team","Hack Call",n.filter(function(e){return!0===e[0]}).length]),t.push(["Team","Non-Hack Call",n.filter(function(e){return!1===e[0]}).length]),t.push(["Non-Hack Call","Prime",a.filter(function(e){return!1===e[0]}).concat(n.filter(function(e){return!1===e[0]})).filter(function(e){return!0===e[1]}).length]),t.push(["Non-Hack Call","Non-Prime",a.filter(function(e){return!1===e[0]}).concat(n.filter(function(e){return!1===e[0]})).filter(function(e){return!1===e[1]}).length]),t.push(["Hack Call","Prime",a.filter(function(e){return!0===e[0]}).concat(n.filter(function(e){return!0===e[0]})).filter(function(e){return!0===e[1]}).length]),t.push(["Hack Call","Non-Prime",a.filter(function(e){return!0===e[0]}).concat(n.filter(function(e){return!0===e[0]})).filter(function(e){return!1===e[1]}).length]),t}(this.state.entries),graph_id:"HackCall",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0})))),i.a.createElement(y.a,{className:"panel-bootstrap",id:"panel-kevin-toxic-hltv-rating-correlation",defaultExpanded:!0},i.a.createElement(y.a.Heading,null,i.a.createElement(y.a.Title,{toggle:!0},"Kevins Toxizit\xe4t im Kontext seiner Leistung")),i.a.createElement(y.a.Collapse,null,i.a.createElement(y.a.Body,null,i.a.createElement(k.a,{chartType:"ScatterChart",data:function(e){var t=[["Toxizit\xe4t","HLTV Rating 1.0"]];return e.forEach(function(e){"Y"===e.kevin_anwesend&&e.kevin_hltv_rating&&e.kevin_toxicity&&t.push([Number(e.kevin_toxicity),Number(e.kevin_hltv_rating)])}),t}(this.state.entries),graph_id:"KevinToxicRatingScatterChart",width:"100%",height:"100%",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:V})))),i.a.createElement(y.a,{className:"panel-bootstrap",id:"panel-gegner-nationalitaeten",defaultExpanded:!0},i.a.createElement(y.a.Heading,null,i.a.createElement(y.a.Title,{toggle:!0},"Gegner Nationalit\xe4ten")),i.a.createElement(y.a.Collapse,null,i.a.createElement(y.a.Body,null,i.a.createElement(k.a,{chartType:"GeoChart",data:v(this.state.entries,!1),graph_id:"GegnerNationalitaeten",width:"100%",height:"500px",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:A})))),i.a.createElement(y.a,{className:"panel-bootstrap",id:"panel-team-nationalitaeten",defaultExpanded:!0},i.a.createElement(y.a.Heading,null,i.a.createElement(y.a.Title,{toggle:!0},"Team Nationalit\xe4ten")),i.a.createElement(y.a.Collapse,null,i.a.createElement(y.a.Body,null,i.a.createElement(k.a,{chartType:"GeoChart",data:v(this.state.entries,!0),graph_id:"TeamNationalitaeten",width:"100%",height:"500px",loader:i.a.createElement("div",null,"Loading Chart"),legend_toggle:!0,options:A}))))):i.a.createElement("div",null,this.state.error)}}]),t}(n.Component),M=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("h3",{className:"App-title"},"Willkommen bei der Langzeitstudie zu Matchmaking mit Kevin"),i.a.createElement("p",null,'Diese Website veranschaulicht die Langzeitstudie zu Kevin Kr\xe4tschmer und seiner Auswirkung auf die Qualit\xe4t der Matchmaking Spiele in "Counter-Strike: Global Offensive".')),i.a.createElement(H,null),i.a.createElement("footer",{className:"App-footer"},i.a.createElement("p",null,"Made with",i.a.createElement("img",{src:p.a,className:"App-logo-small",alt:"React Logo"})," by"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/johannesmols/kevin"},"Johannes Mols"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},69:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},79:function(e,t,a){e.exports=a(183)},84:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){}},[[79,2,1]]]);
//# sourceMappingURL=main.5756d9cf.chunk.js.map