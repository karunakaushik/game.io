(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,function(e,t,n){},,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/robot.04f4be75.svg"},function(e,t,n){e.exports=n.p+"static/media/human.855fb65c.svg"},function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),o=n.n(l),c=(n(20),n(1)),i=n(2),u=n(4),s=n(3),m=n(8),p=n(9),h=0,f=1,E=["O","X"],d=0,v=1,g=function(e){return e.map((function(e,t){return[e,t]})).filter((function(e){return null===e[0]}))},y=function(e){return g(e).length>0},O=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var a=Object(p.a)(t[n],3),r=a[0],l=a[1],o=a[2];if(null!==e[r]&&e[r]===e[l]&&e[r]===e[o])return{position:n>=0&&n<=2?"h h".concat(n):n>=3&&n<=5?"v v".concat(n-3):"d".concat(n-6),iconType:e[r],isTie:null}}return{position:"",iconType:null,isTie:!y(e)||null}},b=function(e,t){return e+Math.floor(Math.random()*(t-e))},T=function(e,t,n){return[].concat(Object(m.a)(e.slice(0,t)),[n],Object(m.a)(e.slice(t+1,e.length)))},S=function e(t,n,a,r){var l=function(e,t){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<n.length;a++){var r=Object(p.a)(n[a],3),l=r[0],o=r[1],c=r[2];if(null!==e[l]&&e[l]===e[o]&&e[l]===e[c])return e[l]===t?10:-10}return 0}(t,a);if(10===l)return l-n;if(-10===l)return l+n;if(!y(t))return 0;var o,c=t.length;if(r){o=-1e3;for(var i=0;i<c;i++){if(null===t[i]){var u=T(t,i,a);o=Math.max(o,e(u,n+1,a,!r))}}}else{o=1e3;for(var s=0;s<c;s++){if(null===t[s]){var m=T(t,s,1-a);o=Math.min(o,e(m,n+1,a,!r))}}}return o},w=function(e,t){for(var n=-1e3,a=null,r=e.length,l=0;l<r;l++){if(null===e[l]){var o=T(e,l,t),c=S(o,0,t,!1);c>n&&(n=c,a=l)}}return a},N=function(e){var t=g(e);return t.length>0?t[b(0,t.length)][1]:null},P=r.a.createContext(),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).initState={gameType:h,currentIcon:b(0,2),playerTurn:b(0,2),cells:new Array(9).fill(null),gameState:{position:"",iconType:null,isTie:null}},e.state={gameType:e.initState.gameType,currentIcon:e.initState.currentIcon,playerTurn:e.initState.playerTurn,cells:e.initState.cells,gameState:e.initState.gameState,changeType:function(t){e.state.gameType!==t&&e.initNewGame(t)},humanPlay:function(t){e.humanPlay(t)},newGame:function(){e.initNewGame(e.state.gameType)}},e.initGame=function(){e.state.gameType===f&&e.state.playerTurn===v&&(e.timeout&&clearTimeout(e.timeout),e.timeout=setTimeout((function(){var t=N(e.state.cells);e.computerPlay(t)}),1e3))},e.initNewGame=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.initState.gameType;e.setState((function(){return{gameType:t,currentIcon:b(0,2),playerTurn:b(0,2),cells:e.initState.cells,gameState:e.initState.gameState}}),(function(){e.initGame()}))},e.applyState=function(e,t){var n=e.cells,a=1-e.currentIcon,r=1-e.playerTurn,l=T(n,t,e.currentIcon);return{gameState:O(l),currentIcon:a,playerTurn:r,cells:l}},e.humanPlay=function(t){""!==e.state.gameState.position||null!==e.state.cells[t]||e.state.gameType!==h&&e.state.playerTurn!==d||e.setState((function(n){return e.applyState(n,t)}),(function(){""===e.state.gameState.position&&e.state.gameType===f&&e.state.playerTurn===v&&setTimeout((function(){e.makeAIMove()}),1e3)}))},e.computerPlay=function(t){""===e.state.gameState.position&&null===e.state.cells[t]&&e.state.gameType===f&&e.state.playerTurn===v&&e.setState((function(n){return e.applyState(n,t)}),(function(){""===e.state.gameState.position&&e.state.gameType===h&&e.state.playerTurn===d&&setTimeout((function(){e.makeHUMANMove()}),1e3)}))},e.makeAIMove=function(){var t=w(e.state.cells,e.state.currentIcon);null!==t&&e.computerPlay(t)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.initGame()}},{key:"render",value:function(){return r.a.createElement(P.Provider,{value:this.state},this.props.children)}}]),n}(a.Component),x=n(13),j=n.n(x),C=n(14),I=n.n(C),R=(n(21),n(11),n(22),function(e){return r.a.createElement(P.Consumer,null,(function(t){var n=t.cells[e.index],a=null!==n?E[n]:"I",l="I"!==a?"done":"";return r.a.createElement("button",{className:"cell cell-".concat(e.index," ").concat(l),onClick:function(){return t.humanPlay(e.index)}},a)}))}),G=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).boardRef=r.a.createRef(),a}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){var e=this;""!==this.context.gameState.position?setTimeout((function(){e.boardRef.current.classList.add("full")}),50):this.boardRef.current.classList.remove("full")}},{key:"render",value:function(){return r.a.createElement("div",{className:"boardcontainer ".concat(this.context.gameState.position),ref:this.boardRef},r.a.createElement("div",{className:"boardRow1"},r.a.createElement(R,{index:0}),r.a.createElement(R,{index:1}),r.a.createElement(R,{index:2})),r.a.createElement("div",{className:"boardRow2"},r.a.createElement(R,{index:3}),r.a.createElement(R,{index:4}),r.a.createElement(R,{index:5})),r.a.createElement("div",{className:"boardRow3"},r.a.createElement(R,{index:6}),r.a.createElement(R,{index:7}),r.a.createElement(R,{index:8})))}}]),n}(a.Component);G.contextType=P;n(6);var H=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={popupHeader:"Looks like you don't have an account"},a}return Object(i.a)(n,[{key:"refreshPage",value:function(){window.location.reload()}},{key:"render",value:function(){return r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup_inner"},r.a.createElement("div",{style:{color:"white",fontSize:20}},r.a.createElement("div",null,r.a.createElement("h4",null,"First Player"),r.a.createElement("li",null,"YOU CHOOSE CORNER",r.a.createElement("ol",null,"1.Opponent chose nearest edge",r.a.createElement("ol",null,"Select the non-diagonal corner farthest to the tile opponent chose and then the diagonal corner")),r.a.createElement("ol",null,"2.Opponent chose farthest edge",r.a.createElement("ol",null,"Select any non-diagonal corner and then the usual V strategy - 135 or 139 forms")),r.a.createElement("ol",null,"3.Opponent chose diagonal corner",r.a.createElement("ol",null,"Select any corner and then the other corner")),r.a.createElement("ol",null,"4.Opponent chose non-diagonal corner",r.a.createElement("ol",null,"Select the corner diagonal to the tile opponent chose and then the other corner")),r.a.createElement("ol",null,"5.Opponent chose center",r.a.createElement("ol",null,"Select the diagonally opposite corner. If opponent chooses a corner, select other corner. If the opponent doesn't choose another corner, it will result a tie."))),r.a.createElement("li",null,"YOU CHOOSE CENTER",r.a.createElement("ol",null,"Opponent chose edge",r.a.createElement("ol",null,"Select the corner farthest to tile opponent chose")),r.a.createElement("ol",null,"Opponent chose corner",r.a.createElement("ol",null,"Select the corner diagonal to the tile opponent chose.If the opponent chooses another corner, it will result in a TIE. If the opponent doesn't choose another corner, you could select one."))),r.a.createElement("li",null,"YOU CHOOSE EDGE",r.a.createElement("ol",null,"No strategies")),r.a.createElement("h4",null,"Second Player"),r.a.createElement("li",null,"OPPONENT CHOOSE CORNER",r.a.createElement("ol",null,"Select center and obstruct winning chances of opponent")),r.a.createElement("li",null,"OPPONENT CHOOSE CENTER",r.a.createElement("ol",null,"Select corner and obstruct winning chances of opponent")),r.a.createElement("li",null,"OPPONENT CHOOSE EDGE",r.a.createElement("ol",null,"No strategies")))),r.a.createElement("br",null),r.a.createElement("button",{className:"closeButton",onClick:this.props.refreshPage},"CLOSE")))}}]),n}(r.a.Component),B=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={showPopup:!1,header:"Welcome"},e}return Object(i.a)(n,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"hintButton",onClick:this.togglePopup.bind(this)},"HINTS"),this.state.showPopup?r.a.createElement(H,{text:"Popup window text",refreshPage:this.togglePopup.bind(this)}):null)}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={popupHeader:"Looks like you don't have an account"},a}return Object(i.a)(n,[{key:"refreshPage",value:function(){window.location.reload()}},{key:"render",value:function(){return r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup_inner"},r.a.createElement("div",{style:{color:"white",fontSize:20}},r.a.createElement("div",null,r.a.createElement("h4",null,"Instructions here: "),r.a.createElement("li",null,"If you are X, your opponent is O. Players take turns putting their marks in empty squares."),r.a.createElement("li",null,"The first player to get 3 of their marks in a row (vertical, across, or diagonally) is the winner."),r.a.createElement("li",null,"When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie."))),r.a.createElement("br",null),r.a.createElement("button",{className:"closeButton",onClick:this.props.refreshPage},"CLOSE")))}}]),n}(r.a.Component),D=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).state={showPopup:!1,header:"Welcome"},e}return Object(i.a)(n,[{key:"togglePopup",value:function(){this.setState({showPopup:!this.state.showPopup})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{className:"instButton",onClick:this.togglePopup.bind(this)},"INSTRUCTION"),this.state.showPopup?r.a.createElement(M,{text:"Popup window text",refreshPage:this.togglePopup.bind(this)}):null)}}]),n}(a.Component),A=function(e){var t=e.value,n=e.name;return r.a.createElement(P.Consumer,null,(function(e){return r.a.createElement("li",{onClick:function(){return e.changeType(t)},className:t===e.gameType?"active":""},n)}))},L=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).resetTime=function(){a.setState({count:0})},a.state={count:0},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval((function(){return e.setState((function(t,n){return 10==t.count&&clearInterval(e.timer),{count:10===t.count?"TimeOut":t.count+1}}))}),1e3)}},{key:"render",value:function(){var e=this,t="",n=this.context.currentIcon;return t=this.context.gameState.isTie?"Tie!":this.context.gameType===h?""===this.context.gameState.position?"It's player(".concat(E[n],") turn"):"Player(".concat(E[1-n],") wins!"):""===this.context.gameState.position?this.context.playerTurn===d?"It's your turn":"It's computer turn":this.context.playerTurn===d?"Computer win!":"You win!",r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"headerDiv"},r.a.createElement("h1",{class:"headertext"},"Tic Tac Toe"),r.a.createElement("div",{className:"playersDiv"},r.a.createElement("div",{className:"playersBox"},r.a.createElement("div",{className:"hintandinst"},r.a.createElement(B,null),r.a.createElement(D,null)," "),r.a.createElement("div",{className:"playerinnerBox"},r.a.createElement("div",{className:"humanplayers"},r.a.createElement("img",{src:I.a,alt:"Human"}),r.a.createElement(A,{value:h,name:"2 Human-Players"})),r.a.createElement("div",{className:"computerVS"},r.a.createElement("img",{src:j.a,alt:"ROBOT"}),r.a.createElement(A,{value:f,name:"Versus Computer/AI"})))),r.a.createElement("div",{className:"gameBox"},r.a.createElement("div",{className:"newgameButton"},r.a.createElement("button",{onClick:function(){return e.context.newGame()}},"New Game")),r.a.createElement("br",null),r.a.createElement("div",{className:"newgameTButton"},r.a.createElement("button",{onClick:function(){e.context.newGame(),e.resetTime(),e.componentDidMount()}},"New Game with Timer"),r.a.createElement("p",{id:"timer"}," ",this.state.count,"  ")),r.a.createElement("div",{className:"info"},t),r.a.createElement(G,null))),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/N17335H4/ENTERTAIN-THE-CREW.git",target:"_blank"},"View in Github"))))}}]),n}(a.Component);L.contextType=P;var U=L,W=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement("div",{className:"app"},r.a.createElement(U,null)))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.cbc8f77e.chunk.js.map