(this["webpackJsonpchumming-matcher"]=this["webpackJsonpchumming-matcher"]||[]).push([[0],{12:function(e,t){},14:function(e,t,a){e.exports=a(28)},19:function(e,t,a){},25:function(e,t){},26:function(e,t){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(13),s=a.n(i),o=(a(19),a(1)),c=a(2),l=a(4),m=a(3),p=a(5),d=a(6),h=a(9),f=a.n(h);function u(){this.even=void 0,this.odd=new Array(2)}function v(){this.vertex=void 0,this.type=void 0}for(var E=new Array(500),g=0;g<500;g++)E[g]=new Array(500);var b=new Array(500),y=new Array(2);for(g=0;g<2;g++)y[g]=new Array(500);var O=new Array(2),k=new Array(500),w=new Array(500);for(g=0;g<500;g++)w[g]=new u;var j,D,x,N=new Array(1e3);for(g=0;g<1e3;g++)N[g]=new v;function S(){var e=x.n,t=x.e;!function(e){for(var t=0;t<e;t++)for(var a=0;a<e;a++)E[t][a]=0}(e);for(var a=0;a<t;a++){var r=x[a][0],n=x[a][1];r!=n&&(E[r-1][n-1]=E[n-1][r-1]=1)}return e}function A(e,t,a,r,n){e!=a&&(0==r?0==n?(A(w[e].even,t,a,(r+1)%2,0),y[t][O[t]++]=e):0==n&&(y[t][O[t]++]=e,A(w[e].even,t,a,(r+1)%2,0)):1==r&&-2==w[e].odd[1]?0==n?(A(w[e].odd[0],t,a,(r+1)%2,0),y[t][O[t]++]=e):0==n&&(y[t][O[t]++]=e,A(w[e].odd[0],t,a,(r+1)%2,0)):1==r&&-2!=w[e].odd[1]&&(0==n?(A(w[e].odd[0],t,-1,(r+1)%2,0),A(w[e].odd[1],t,e,(r+1)%2,0),y[t][O[t]++]=e):0==n&&(A(w[e].odd[1],t,e,(r+1)%2,0),A(w[e].odd[0],t,-1,(r+1)%2,0),y[t][O[t]++]=e)))}function C(e,t){var a=new v;a.vertex=e,a.type=t,N[D++]=a}function R(e,t){var a,r,n,i;for(a=0;y[0][a]==y[1][a];a++);a--,r=b[y[0][a]];for(var s=a;s<O[0];s++)b[y[0][s]]=r;for(s=a+1;s<O[1];s++)b[y[1][s]]=r;for(var o=0;o<2;o++)for(s=a+1;s<O[o]-1;s++)if(-2==w[y[o][s]].even)w[y[o][s]].even=y[o][s+1],C(y[o][s],0);else if(-2==w[y[o][s]].odd[0]&&-2==w[y[o][s+1]].even)w[y[o][s]].odd[0]=y[o][s+1],C(y[o][s],1);else if(-2==w[y[o][s]].odd[0]&&-2!=w[y[o][s+1]].even){for(n=b[y[o][s]],i=s;b[s]==n&&s<O[o]-1;s++);s--,w[y[o][i]].odd[0]=y[o][s+1],w[y[o][i]].odd[1]=y[o][s],C(y[o][i],1)}1==E[e][t]?(-2==w[e].odd[0]&&(w[e].odd[0]=t,C(e,1)),-2==w[t].odd[0]&&(w[t].odd[0]=e,C(t,1))):2==E[e][t]&&(-2==w[e].even&&(w[e].even=t,C(e,0)),-2==w[t].even&&(w[t].even=e,C(t,0)))}function H(){for(var e,t,a=0;a<2;a++)for(var r=0;r<O[a]-1;r++)e=y[a][r],t=y[a][r+1],1==E[e][t]?E[e][t]=E[t][e]=2:2==E[e][t]&&(E[e][t]=E[t][e]=1);e=y[0][O[0]-1],t=y[1][O[1]-1],1==E[e][t]?E[e][t]=E[t][e]=2:2==E[e][t]&&(E[e][t]=E[t][e]=1),k[y[0][0]]=k[y[1][0]]=!0}function P(e){var t,a;!function(e){j=D=0;for(var t=0;t<e;t++)b[t]=t,w[t].even=w[t].odd[0]=w[t].odd[1]=-2}(e);for(var r=0;r<e;r++)k[r]||(w[r].even=-1,C(r,0));for(;j<D;){if(t=N[j].vertex,0==(a=N[j].type)){for(r=0;r<e;r++)if(1==E[t][r])if(b[t]==b[r]);else if(-2!=w[r].even){if(O[0]=O[1]=0,A(t,0,-1,0,0),A(r,1,-1,0,0),y[0][0]!=y[1][0])return H(),!0;R(t,r)}else-2==w[r].even&&-2==w[r].odd[0]&&(w[r].odd[0]=t,C(r,1))}else if(1==a)for(r=0;r<e;r++)if(2==E[t][r])if(b[t]==b[r]);else if(-2!=w[r].odd[0]){if(O[0]=O[1]=0,A(t,0,-1,1,0),A(r,1,-1,1,0),y[0][0]!=y[1][0])return H(),!0;R(t,r)}else-2==w[r].even&&-2==w[r].odd[0]&&(w[r].even=t,C(r,0));j++}return!1}function B(){var e,t=[];!function(e){for(var t=0;t<e;t++)k[t]=!1;for(;P(e););}(e=S());for(var a=0;a<e;a++)for(var r=a+1;r<e;r++)2==E[a][r]&&t.push([a,r]);return t}var T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={empDict:{},empArr:[],managers:{},toRemove:[],stepOneError:"",stepTwoError:""},a.onParticipantChangeHandler=a.onParticipantChangeHandler.bind(Object(d.a)(a)),a.onHistoricalChangeHandler=a.onHistoricalChangeHandler.bind(Object(d.a)(a)),a.generate=a.generate.bind(Object(d.a)(a)),a.participantReader=new FileReader,a.historicalPairReader=new FileReader,a.participantReader.onload=function(e){var t=f.a.read(e.target.result,{type:"binary"}),r=t.Sheets[t.SheetNames[0]],n={},i=[],s={},o="",c="",l="C";for(var m in r)if("!ref"!==m){if("!margins"===m){"C"!==l&&a.setState({stepOneError:"Error: Last row is missing manager email."});break}if(void 0===r[m].v){a.setState({stepOneError:"Error: "+m+" is an empty cell."});break}if(m.includes("A")){if("C"!==l){a.setState({stepOneError:"Error: "+m+" is missing manager email."});break}o=r[m].v,i.push(o),l="A"}else if(m.includes("B")){if("A"!==l){a.setState({stepOneError:"Error: "+m+" is missing name."});break}c=r[m].v,l="B"}else if(m.includes("C")){if("B"!==l){a.setState({stepOneError:"Error: "+m+" is missing company email."});break}n[c]={name:o,manager:r[m].v,index:Object.keys(n).length},s.hasOwnProperty(r[m].v)?s[r[m].v].push(c):s[r[m].v]=[c],l="C"}}a.setState({empArr:i,empDict:n,managers:s})},a.historicalPairReader.onload=function(e){var t,r=f.a.read(e.target.result,{type:"binary"}),n=r.Sheets[r.SheetNames[0]],i="B",s=[];for(var o in n)if("!ref"!==o){if("!margins"===o){"B"!==i&&a.setState({stepTwoError:"Error: Last row is missing pair."});break}if(!a.state.empDict.hasOwnProperty(n[o].v)){a.setState({stepTwoError:"Error: Email '"+n[o].v+"' at Cell "+o+" is not in the list of participants."});break}if(o.includes("A")){if("B"!==i){a.setState({stepTwoError:"Error: "+o+" has a missing pair."});break}t=a.state.empDict[n[o].v].index,i="A"}else if(o.includes("B")){if("A"!==i){a.setState({stepTwoError:"Error: "+o+" has a missing pair."});break}s.push([t,a.state.empDict[n[o].v].index]),i="B"}}a.setState({toRemove:s}),console.log(s)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"onParticipantChangeHandler",value:function(e){this.setState({stepOneError:""}),e.target.files[0]&&this.participantReader.readAsBinaryString(e.target.files[0])}},{key:"onHistoricalChangeHandler",value:function(e){this.setState({stepTwoError:""}),e.target.files[0]&&this.historicalPairReader.readAsBinaryString(e.target.files[0])}},{key:"generate",value:function(){if(!this.state.stepOneError&&!this.state.stepTwoError){x=[];for(var e=1;e<51;e++)for(var t=e+1;t<52;t++)x.push([e,t]);var a=this.state.toRemove;for(var r in this.state.managers){if(this.state.empDict.hasOwnProperty(r))for(var n in this.state.managers[r])a.push([this.state.empDict[r].index,this.state.empDict[this.state.managers[r][n]].index]);for(var i=0;i<this.state.managers[r].length-1;i++)for(var s=i+1;s<this.state.managers[r].length;s++)a.push([this.state.empDict[this.state.managers[r][i]].index,this.state.empDict[this.state.managers[r][s]].index])}for(var o in x=JSON.stringify(x),a){var c=void 0;c=a[o][0]<a[o][1]?"["+(parseInt(a[o][0])+1)+","+(parseInt(a[o][1])+1)+"]":"["+(parseInt(a[o][1])+1)+","+(parseInt(a[o][0])+1)+"]",x=x.replace(c,"")}x=(x=x.replace(/,+/gi,",")).replace("[,","["),console.log(x),(x=JSON.parse(x)).n=Object.keys(this.state.empDict).length,x.e=x.length,this.props.setPairs(B(),this.state.empDict),this.setState({toRemove:a})}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"form-frame"},n.a.createElement("form",{style:{height:"90vh"}},n.a.createElement("div",{className:"name-input"},n.a.createElement("h1",{className:"form-header"},"Step 1: Input Names"),n.a.createElement("input",{type:"file",name:"excel-file-participants",id:"excel-file-participants",class:"file-upload",accept:".xlsx",onChange:this.onParticipantChangeHandler}),n.a.createElement("label",{for:"excel-file-participants"},"Upload Excel File"),n.a.createElement("p",{className:"error-text"},this.state.stepOneError),Object.keys(this.state.empDict).length>0?n.a.createElement("p",{className:"info-text"}," Added ",Object.keys(this.state.empDict).length," participants"):n.a.createElement("div",null),Object.keys(this.state.empDict).length>0?n.a.createElement("div",{className:"name-list"},Object.keys(this.state.empDict).map((function(t,a){return n.a.createElement("p",{className:"names",key:"emp-"+a},a+1+". "+e.state.empDict[t].name+" ("+t+")")}))):n.a.createElement("div",null)),n.a.createElement("div",{className:"name-input"},n.a.createElement("h1",{className:"form-header"},"Step 2: Input Historical Pairs"),n.a.createElement("input",{type:"file",name:"excel-file-historical",id:"excel-file-historical",class:"file-upload",accept:".xlsx",onChange:this.onHistoricalChangeHandler}),n.a.createElement("label",{for:"excel-file-historical"},"Upload Excel File"),n.a.createElement("p",{className:"error-text"},this.state.stepTwoError),Object.keys(this.state.toRemove).length>0?n.a.createElement("p",{className:"info-text"}," Added ",this.state.toRemove.length," exclusions"):n.a.createElement("div",null),Object.keys(this.state.toRemove).length>0?n.a.createElement("div",{className:"name-list"},this.state.toRemove.map((function(t,a){return n.a.createElement("p",{className:"names",key:"rem-"+a},e.state.empDict[Object.keys(e.state.empDict)[t[0]]].name,"+",e.state.empDict[Object.keys(e.state.empDict)[t[1]]].name)}))):n.a.createElement("div",null)))),n.a.createElement("div",{className:"submit-column"},n.a.createElement("button",{type:"button",onClick:this.generate,className:"submit-button"},"Generate")))}}]),t}(r.Component),I=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).call(this,e))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"output-box"},this.props.pairs.length>0?n.a.createElement("h1",{className:"result-header"}," Here are the chumming pairs: "):n.a.createElement("div",null),n.a.createElement("table",{className:"pair-display"},this.props.pairs.map((function(t,a){return n.a.createElement("tr",{key:"row-"+a},n.a.createElement("td",null,e.props.empDict[Object.keys(e.props.empDict)[t[0]]].name),n.a.createElement("td",null,e.props.empDict[Object.keys(e.props.empDict)[t[1]]].name))}))),this.props.pairs.length>0?n.a.createElement("h1",{className:"result-header"}," Attach this to an historical pairing excel sheet: "):n.a.createElement("div",null),n.a.createElement("table",{className:"pair-display"},this.props.pairs.map((function(t,a){return n.a.createElement("tr",{key:"row-"+a},n.a.createElement("td",null,Object.keys(e.props.empDict)[t[0]]),n.a.createElement("td",null,Object.keys(e.props.empDict)[t[1]]))}))))}}]),t}(r.Component),F=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={pairs:[],empDict:{}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(T,{setPairs:function(t,a){return e.setState({pairs:t,empDict:a})}}),n.a.createElement(I,{pairs:this.state.pairs,empDict:this.state.empDict}))}}]),t}(r.Component);a(27);var J=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.fa43a380.chunk.js.map