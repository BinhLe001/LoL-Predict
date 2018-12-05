(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,l){e.exports=l(95)},36:function(e,a,l){},57:function(e,a,l){},59:function(e,a,l){},95:function(e,a,l){"use strict";l.r(a);var t=l(0),n=l.n(t),i=l(4),s=l.n(i),r=(l(36),l(5)),o=l(6),u=l(8),c=l(7),m=l(9),b=l(25),d=l.n(b),v=l(12),p=(l(57),l(59),function(e){function a(){var e,l;Object(r.a)(this,a);for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return(l=Object(u.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(i)))).getTableContent=function(){return n.a.createElement("tbody",{className:"table-body"},l.props.matches.map(function(e,a){return n.a.createElement("tr",{key:a,className:"table-body-row"},n.a.createElement("td",null,e[0]),n.a.createElement("td",null,e[1]),n.a.createElement("td",null,e[2]),n.a.createElement("td",null,e[3]))}))},l}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=0===this.props.matches.length?n.a.createElement("div",{className:"table-empty"},"Select teams and click predict to use the model!"):this.getTableContent();return n.a.createElement("table",{className:"summary-table"},n.a.createElement("thead",{className:"table-head"},n.a.createElement("tr",null,n.a.createElement("th",{className:"blue-head"},"Blue"),n.a.createElement("th",{className:"blue-head"},"Win %"),n.a.createElement("th",{className:"red-head"},"Red"),n.a.createElement("th",{className:"red-head"},"Win %"))),e)}}]),a}(t.Component)),g=l(26),h=l.n(g),G="https://binhle.ngrok.io/",E=function(e){function a(e){var l;return Object(r.a)(this,a),(l=Object(u.a)(this,Object(c.a)(a).call(this,e))).handleBlueChange=function(e){null!==e?l.setState({blueTeam:e.label}):l.setState({blueTeam:""})},l.handleRedChange=function(e){null!==e?l.setState({redTeam:e.label}):l.setState({redTeam:""})},l.getPrediction=function(){var e=l.state.blueTeam,a=l.state.redTeam;if(e&&a)return l.setState({predictLoading:!0}),d.a.post(G,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},blue:{blueTeam:e},red:{redTeam:a}}).then(function(t){console.log(t);var n=t.data.blue.toFixed(3),i=t.data.red.toFixed(3),s=l.state.predictHistory.slice(),r=[e,n,a,i];s.unshift(r),l.setState({blueChance:n,redChance:i,predictHistory:s,predictLoading:!1})}).catch(function(e){alert("Failed to get predicitons with "+e),console.log(e),l.setState({predictLoading:!1})});alert("Please select teams before clicking predict.")},l.handleClick=function(){},l.state={blueTeam:"",redTeam:"",blueChance:"",redChance:"",predictHistory:[],predictLoading:!1},l}return Object(m.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.state.predictLoading?n.a.createElement("div",{className:"predict-loading"},n.a.createElement(h.a,{type:"ThreeDots",color:"white",height:15,width:40})):"Predict";return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App-header"},"6.s198 Demo - LoL Predict"),n.a.createElement("div",{className:"App-body"},n.a.createElement("div",{className:"body-description"},n.a.createElement("div",{className:"description-title"},"About the Project"),n.a.createElement("div",{className:"description-content"},n.a.createElement("p",null," ","This project explores the applicability of a"," ",n.a.createElement("b",null,"deep neural network classification model")," to predict League of Legends matches. In order to make pregame predictions, teams are described based on the"," ",n.a.createElement("b",null,"average game statistics of their previous 10 games"),"."),n.a.createElement("p",null,"The model takes"," ",n.a.createElement("b",null,"two inputs for each team and outputs the win probabilities for each team"),". This is an example of the model results for predicting the 2018 World Championships knockout stage."),n.a.createElement("img",{src:"/LoL-Predict/pics/bracket.png",alt:"bracket",className:"bracket-pic"}))),n.a.createElement("div",{className:"body-model"},n.a.createElement("div",{className:"model-title"},"Explore the Model"),n.a.createElement("div",{className:"model-content"},n.a.createElement("div",{className:"model-input"},n.a.createElement("div",{className:"input-title"},n.a.createElement("div",{className:"input-title-blue"},"Blue Team"),n.a.createElement("div",{className:"input-title-red"},"Red Team"),n.a.createElement("div",{className:"input-title-spacer"})),n.a.createElement("div",{className:"input-teams"},n.a.createElement("div",{className:"input-blue"},n.a.createElement(v.a,{id:"blue-select",placeholder:"Blue Team",className:"blue-select",onChange:this.handleBlueChange,options:y,isClearable:!0,isSearchable:!0})),n.a.createElement("div",{className:"input-red"},n.a.createElement(v.a,{id:"red-select",placeholder:"Red Team",className:"red-select",onChange:this.handleRedChange,options:y,isClearable:!0,isSearchable:!0})),n.a.createElement("div",{className:"input-button"},n.a.createElement("button",{className:"predict-button",onClick:this.getPrediction,disabled:this.predictLoading},e)))),n.a.createElement("div",{className:"model-history"},n.a.createElement(p,{matches:this.state.predictHistory}))))))}}]),a}(t.Component),y=[{label:"100 Thieves",value:"100 Thieves"},{label:"100 Thieves Academy",value:"100 Thieves Academy"},{label:"17 Academy",value:"17 Academy"},{label:"AHQ Fighter",value:"AHQ Fighter"},{label:"AHQ e-Sports Club",value:"AHQ e-Sports Club"},{label:"Afreeca Freecs",value:"Afreeca Freecs"},{label:"Ascension Gaming",value:"Ascension Gaming"},{label:"BBQ Olivers",value:"BBQ Olivers"},{label:"Besiktas",value:"Besiktas"},{label:"Big Gods Jackals",value:"Big Gods Jackals"},{label:"Bilibili Gaming",value:"Bilibili Gaming"},{label:"Bursaspor Esports",value:"Bursaspor Esports"},{label:"CJ Entus",value:"CJ Entus"},{label:"CLG Academy",value:"CLG Academy"},{label:"CNB e-Sports Club",value:"CNB e-Sports Club"},{label:"Cilekler",value:"Cilekler"},{label:"Cloud9",value:"Cloud9"},{label:"Cloud9 Academy",value:"Cloud9 Academy"},{label:"Clutch Gaming",value:"Clutch Gaming"},{label:"Clutch Gaming Academy",value:"Clutch Gaming Academy"},{label:"Counter Logic Gaming",value:"Counter Logic Gaming"},{label:"Crew e-Sports Club",value:"Crew e-Sports Club"},{label:"DAN Gaming",value:"DAN Gaming"},{label:"Dark Passage",value:"Dark Passage"},{label:"Delta Fox",value:"Delta Fox"},{label:"Dignitas",value:"Dignitas"},{label:"Dire Wolves",value:"Dire Wolves"},{label:"EDward Gaming",value:"EDward Gaming"},{label:"EVOS Esports",value:"EVOS Esports"},{label:"Echo Fox",value:"Echo Fox"},{label:"Echo Fox Academy",value:"Echo Fox Academy"},{label:"Edward Gaming",value:"Edward Gaming"},{label:"EnVyUs",value:"EnVyUs"},{label:"Ever8 Winners",value:"Ever8 Winners"},{label:"Fenerbahce Esports",value:"Fenerbahce Esports"},{label:"Fire Ball",value:"Fire Ball"},{label:"Flamengo eSports",value:"Flamengo eSports"},{label:"Flash Wolves",value:"Flash Wolves"},{label:"FlyQuest",value:"FlyQuest"},{label:"FlyQuest Academy",value:"FlyQuest Academy"},{label:"Flyquest",value:"Flyquest"},{label:"Fnatic",value:"Fnatic"},{label:"Fnatic Academy",value:"Fnatic Academy"},{label:"Funplus Phoenix",value:"Funplus Phoenix"},{label:"G-Rex",value:"G-Rex"},{label:"G2 Esports",value:"G2 Esports"},{label:"GIGABYTE Marines",value:"GIGABYTE Marines"},{label:"Galakticos",value:"Galakticos"},{label:"Galatasaray Esports",value:"Galatasaray Esports"},{label:"Gambit Esports",value:"Gambit Esports"},{label:"Game Talents",value:"Game Talents"},{label:"Gen.G",value:"Gen.G"},{label:"Giants",value:"Giants"},{label:"Giants Gaming",value:"Giants Gaming"},{label:"Gigabyte Marines",value:"Gigabyte Marines"},{label:"Gold Coin United",value:"Gold Coin United"},{label:"Golden Guardians",value:"Golden Guardians"},{label:"Golden Guardians Academy",value:"Golden Guardians Academy"},{label:"Griffin",value:"Griffin"},{label:"H2K",value:"H2K"},{label:"HWA Gaming",value:"HWA Gaming"},{label:"Hanwha Life Esports",value:"Hanwha Life Esports"},{label:"Hong Kong Attitude",value:"Hong Kong Attitude"},{label:"Hong Kong Esports",value:"Hong Kong Esports"},{label:"I MAY",value:"I MAY"},{label:"I May",value:"I May"},{label:"IDM Gaming",value:"IDM Gaming"},{label:"INTZ e-Sports",value:"INTZ e-Sports"},{label:"INTZ e-Sports Club",value:"INTZ e-Sports Club"},{label:"Immortals",value:"Immortals"},{label:"Invictus Gaming",value:"Invictus Gaming"},{label:"Isurus Gaming",value:"Isurus Gaming"},{label:"J Team",value:"J Team"},{label:"JD Gaming",value:"JD Gaming"},{label:"Jin Air Green Wings",value:"Jin Air Green Wings"},{label:"KSV Esports",value:"KSV Esports"},{label:"KT Rolster",value:"KT Rolster"},{label:"KaBuM e-Sports",value:"KaBuM e-Sports"},{label:"KaBuM eSports",value:"KaBuM eSports"},{label:"Kaos Latin Gamers",value:"Kaos Latin Gamers"},{label:"Keyd Stars",value:"Keyd Stars"},{label:"Kinguin",value:"Kinguin"},{label:"Kingzone DragonX",value:"Kingzone DragonX"},{label:"Kongdoo Mongster",value:"Kongdoo Mongster"},{label:"Kongdoo Monster",value:"Kongdoo Monster"},{label:"LGD Gaming",value:"LGD Gaming"},{label:"Longzhu Gaming",value:"Longzhu Gaming"},{label:"Lyon Gaming",value:"Lyon Gaming"},{label:"MAD Team",value:"MAD Team"},{label:"MVP",value:"MVP"},{label:"Machi 17",value:"Machi 17"},{label:"Millenium",value:"Millenium"},{label:"Misfits",value:"Misfits"},{label:"Misfits Academy",value:"Misfits Academy"},{label:"Mysterious Monkeys",value:"Mysterious Monkeys"},{label:"NewBee",value:"NewBee"},{label:"Newbee",value:"Newbee"},{label:"Ninjas in Pyjamas",value:"Ninjas in Pyjamas"},{label:"OMG",value:"OMG"},{label:"OpTic Academy",value:"OpTic Academy"},{label:"OpTic Gaming",value:"OpTic Gaming"},{label:"Operation Kino",value:"Operation Kino"},{label:"Origen",value:"Origen"},{label:"Oyunhizmetleri",value:"Oyunhizmetleri"},{label:"P3P eSports",value:"P3P eSports"},{label:"Paris Saint-Germain",value:"Paris Saint-Germain"},{label:"Pentagram",value:"Pentagram"},{label:"Phoenix1",value:"Phoenix1"},{label:"ProGaming Esports",value:"ProGaming Esports"},{label:"QG Reapers",value:"QG Reapers"},{label:"RED Canids",value:"RED Canids"},{label:"ROX Tigers",value:"ROX Tigers"},{label:"Rainbow7",value:"Rainbow7"},{label:"Raise Gaming",value:"Raise Gaming"},{label:"Rampage",value:"Rampage"},{label:"Red Bulls",value:"Red Bulls"},{label:"Red Canids",value:"Red Canids"},{label:"Remo Brave eSports",value:"Remo Brave eSports"},{label:"Roccat",value:"Roccat"},{label:"Rogue Warriors",value:"Rogue Warriors"},{label:"Royal Bandits e-sports",value:"Royal Bandits e-sports"},{label:"Royal Never Give Up",value:"Royal Never Give Up"},{label:"SK Telecom T1",value:"SK Telecom T1"},{label:"Samsung Galaxy",value:"Samsung Galaxy"},{label:"Schalke 04",value:"Schalke 04"},{label:"Snake Esports",value:"Snake Esports"},{label:"Snake eSports",value:"Snake eSports"},{label:"Splyce",value:"Splyce"},{label:"Suning Gaming",value:"Suning Gaming"},{label:"SuperMassive",value:"SuperMassive"},{label:"T Show E-Sports",value:"T Show E-Sports"},{label:"TSM Academy",value:"TSM Academy"},{label:"Team AURORA",value:"Team AURORA"},{label:"Team Afro",value:"Team Afro"},{label:"Team Gates",value:"Team Gates"},{label:"Team Liquid",value:"Team Liquid"},{label:"Team Liquid Academy",value:"Team Liquid Academy"},{label:"Team One e-Sports",value:"Team One e-Sports"},{label:"Team SoloMid",value:"Team SoloMid"},{label:"Team WE",value:"Team WE"},{label:"Team oNe Esports",value:"Team oNe Esports"},{label:"Team oNe e-Sports",value:"Team oNe e-Sports"},{label:"Tempo Storm",value:"Tempo Storm"},{label:"Topsports Gaming",value:"Topsports Gaming"},{label:"Unicorns of Love",value:"Unicorns of Love"},{label:"Vici Gaming",value:"Vici Gaming"},{label:"Virtus.pro",value:"Virtus.pro"},{label:"Vitality",value:"Vitality"},{label:"Vivo Keyd",value:"Vivo Keyd"},{label:"Wayi Spider",value:"Wayi Spider"},{label:"Wind and Rain",value:"Wind and Rain"},{label:"Young Generation",value:"Young Generation"},{label:"YouthCREW",value:"YouthCREW"},{label:"eUnited",value:"eUnited"},{label:"eXtreme Gamers",value:"eXtreme Gamers"},{label:"paiN Gaming",value:"paiN Gaming"}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.6faaac7a.chunk.js.map