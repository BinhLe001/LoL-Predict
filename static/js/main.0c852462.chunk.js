(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(46)},22:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),m=a(9),c=a.n(m),r=(a(22),a(10)),i=a(11),l=a(12),o=a(15),d=a(13),h=a(16),u=a(14),p=a.n(u),v=(a(44),"https://jennyxue.ngrok.io/"),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).handleClear=function(e){a.setState({team1:"Afreeca Freecs",team2:"Cloud9",team3:"Fnatic",team4:"Edward Gaming",team5:"Royal Never Give Up",team6:"G2 Esports",team7:"KT Rolster",team8:"Invictus Gaming",team9:"",team10:"",team11:"",team12:"",team13:"",team14:"",team15:"",predict1:"",predict2:"",predict3:"",predict4:"",predict5:"",predict6:"",predict7:""})},a.handleChange=function(e){return function(t){a.setState(Object(r.a)({},e,t.target.value))}},a.getPrediction=function(e,t){console.log(e),console.log(t);try{return p.a.post(v,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},blue:{blueTeam:e},red:{redTeam:t}})}catch(a){console.error(a)}},a.handleClick=function(){""!==a.state.team14&&""!==a.state.team13?a.getPrediction(a.state.team13,a.state.team14).then(function(e){var t=e.blue>e.red?a.state.team13:a.state.team14,n=Math.round(100*Math.max(e.data.blue,e.data.red));a.setState({team15:t,predict7:n+"%"})}).catch(function(e){console.log(e)}):""!==a.state.team12&&""!==a.state.team11&&""!==a.state.team10&&""!==a.state.team9?(a.getPrediction(a.state.team9,a.state.team10).then(function(e){var t=e.blue>e.red?a.state.team9:a.state.team10,n=Math.round(100*Math.max(e.data.blue,e.data.red));a.setState({team13:t,predict5:n+"%"})}).catch(function(e){console.log(e)}),a.getPrediction(a.state.team11,a.state.team12).then(function(e){var t=e.blue>e.red?a.state.team11:a.state.team12,n=Math.round(100*Math.max(e.data.blue,e.data.red));a.setState({team14:t,predict6:n+"%"})}).catch(function(e){console.log(e)})):""!==a.state.team8&&""!==a.state.team7&&""!==a.state.team6&&""!==a.state.team5&&""!==a.state.team4&&""!==a.state.team3&&""!==a.state.team2&&""!==a.state.team1&&(a.getPrediction(a.state.team1,a.state.team2).then(function(e){console.log(e);var t=e.blue>e.red?a.state.team1:a.state.team2,n=Math.round(100*Math.max(e.data.blue,e.data.red));console.log(n),a.setState({team9:t,predict1:n+"%"})}).catch(function(e){console.log(e)}),a.getPrediction(a.state.team3,a.state.team4).then(function(e){var t=e.blue>e.red?a.state.team3:a.state.team4,n=Math.round(100*Math.max(e.data.blue,e.data.red));a.setState({team10:t,predict2:n+"%"})}).catch(function(e){console.log(e)}),a.getPrediction(a.state.team5,a.state.team6).then(function(e){var t=e.blue>e.red?a.state.team5:a.state.team6,n=Math.round(100*Math.max(e.data.blue,e.data.red));a.setState({team11:t,predict3:n+"%"})}).catch(function(e){console.log(e)}),a.getPrediction(a.state.team7,a.state.team8).then(function(e){var t=e.blue>e.red?a.state.team7:a.state.team8,n=Math.round(100*Math.max(e.data.blue,e.data.red));a.setState({team12:t,predict4:n+"%"})}).catch(function(e){console.log(e)}))},a.state={team1:"Afreeca Freecs",team2:"Cloud9",team3:"Fnatic",team4:"Edward Gaming",team5:"Royal Never Give Up",team6:"G2 Esports",team7:"KT Rolster",team8:"Invictus Gaming",team9:"",team10:"",team11:"",team12:"",team13:"",team14:"",team15:"",predict1:"",predict2:"",predict3:"",predict4:"",predict5:"",predict6:"",predict7:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App-header"},"6.s198 Demo - LoL Pregame Predict"),s.a.createElement("div",{className:"Header-stroke"}),s.a.createElement("div",{className:"App-body"},s.a.createElement("div",{className:"Bracket-body"},s.a.createElement("div",{className:"Bracket-round"},s.a.createElement("div",{className:"Team-body"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team1,onChange:this.handleChange("team1")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Vertical-stroke"})),s.a.createElement("div",{className:"Team-body",id:"Right-border"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team2,onChange:this.handleChange("team2")}),s.a.createElement("div",{className:"Team-stroke"})),s.a.createElement("div",{className:"Team-body"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team3,onChange:this.handleChange("team3")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Vertical-stroke"})),s.a.createElement("div",{className:"Team-body",id:"Right-border"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team4,onChange:this.handleChange("team4")}),s.a.createElement("div",{className:"Team-stroke"})),s.a.createElement("div",{className:"Team-body"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team5,onChange:this.handleChange("team5")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Vertical-stroke"})),s.a.createElement("div",{className:"Team-body",id:"Right-border"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team6,onChange:this.handleChange("team6")}),s.a.createElement("div",{className:"Team-stroke"})),s.a.createElement("div",{className:"Team-body"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team7,onChange:this.handleChange("team7")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Vertical-stroke"})),s.a.createElement("div",{className:"Team-body",id:"Right-border"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team8,onChange:this.handleChange("team8")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Spacer"}))),s.a.createElement("div",{className:"Bracket-round"},s.a.createElement("div",{className:"Team-body"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team9,onChange:this.handleChange("team9")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Win-prob"},this.state.predict1),s.a.createElement("div",{className:"Vertical-stroke2"})),s.a.createElement("div",{className:"Team-body",id:"Right-border"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team10,onChange:this.handleChange("team10")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Win-prob"},this.state.predict2)),s.a.createElement("div",{className:"Team-body"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team11,onChange:this.handleChange("team11")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Win-prob"},this.state.predict3),s.a.createElement("div",{className:"Vertical-stroke2"})),s.a.createElement("div",{className:"Team-body",id:"Right-border"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team12,onChange:this.handleChange("team12")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Win-prob"},this.state.predict4))),s.a.createElement("div",{className:"Bracket-round"},s.a.createElement("div",{className:"Team-body"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team13,onChange:this.handleChange("team13")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Win-prob2"},this.state.predict5),s.a.createElement("div",{className:"Vertical-stroke3"})),s.a.createElement("div",{className:"Team-body",id:"Right-border"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team14,onChange:this.handleChange("team14")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Win-prob2"},this.state.predict6))),s.a.createElement("div",{className:"Bracket-round"},s.a.createElement("div",{className:"Team-body"},s.a.createElement("input",{className:"Team-input",type:"text",value:this.state.team15,onChange:this.handleChange("team15")}),s.a.createElement("div",{className:"Team-stroke"}),s.a.createElement("div",{className:"Win-prob3"},this.state.predict7)))),s.a.createElement("div",{className:"Bracket-button"},s.a.createElement("button",{className:"Clear-button",onClick:this.handleClear},"Clear Bracket"),s.a.createElement("button",{className:"Predict-button",onClick:this.handleClick},"Predict Round"))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,2,1]]]);
//# sourceMappingURL=main.0c852462.chunk.js.map