var e=globalThis,t={},i={},n=e.parcelRequired1a4;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var s={id:e,exports:{}};return t[e]=s,n.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequired1a4=n),(0,n.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>i,set:e=>i=e,enumerable:!0,configurable:!0});var i,n=new Map;i=function(e,t){for(var i=0;i<t.length-1;i+=2)n.set(t[i],{baseUrl:e,path:t[i+1]})}}),n("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["dZpbI","index.54046e74.js","3tOKg","perdiste.dcc11aeb.png","7spTd","ganaste.ab8c5652.png","l7cZy","Papel.a18e2c61.png","j9E4C","Piedra.083177db.png","hWexY","Tijera.a063bb16.png","1etes","img-explosion1.eed10714.jpg"]')),customElements.define("custom-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`

                .root{
                width: 322px;
                height: 87px;
                border: solid #001997 10px;
                border-radius: 10px;
                background-color: #006CFC;
                font-family: 'Odibee Sans', sans-serif;
                font-size: 45px;
                text-align: center;
            } 
            `,this.shadow.appendChild(e),this.render()}render(){let e=document.createElement("button");e.textContent=this.textContent,e.className="root",this.shadow.appendChild(e)}}),customElements.define("jugar-buttom",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
                .root{
                    width: 322px;
                    height: 87px;
                    border: solid #001997 10px;
                    border-radius: 10px;
                    background-color: #006CFC;
                    font-family: 'Odibee Sans', sans-serif;
                    font-size: 45px;
                    text-align: center;
                }
              `,this.shadow.appendChild(e),this.render()}render(){let e=document.createElement("button");e.textContent=this.textContent,e.className="root",this.shadow.appendChild(e)}}),customElements.define("button-volver-jugar",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`

                .root{
                width: 322px;
                height: 87px;
                border: solid #001997 10px;
                border-radius: 10px;
                background-color: #006CFC;
                font-family: 'Odibee Sans', sans-serif;
                font-size: 45px;
                text-align: center;
                color: white;
            } 
            `,this.shadow.appendChild(e),this.render()}render(){let e=document.createElement("button");e.textContent=this.textContent,e.className="root",this.shadow.appendChild(e)}});var s={};s=new URL("perdiste.dcc11aeb.png",import.meta.url).toString(),customElements.define("perdiste-el",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=document.createElement("div"),t=document.createElement("img"),i=new URL(s);t.src=i,e.appendChild(t),this.shadow.appendChild(e)}});var a={};a=new URL("ganaste.ab8c5652.png",import.meta.url).toString(),customElements.define("ganaste-el",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=document.createElement("div");e.className="root";let t=document.createElement("img"),i=new URL(a);t.src=i,e.appendChild(t),this.shadow.appendChild(e)}});const r={data:{currentGame:{computerPlay:"",myPlay:"",resultado:""},history:[{myPoints:0,computerPoints:0}]},listeners:[],getState(){return this.data},setState(e){for(let t of(this.data=e,this.listeners))t()},subscribe(e){this.listeners.push(e)},setMove(e){this.getState().currentGame.myPlay=e},computerPlay(){let e=this.getState(),t=["papel","piedra","tijeras"],i=t[Math.floor(Math.random()*t.length)];return e.currentGame.computerPlay=i,i},pushToHistory(e){this.getState().history.push(e)},getHistory(){let e=this.getState(),t=localStorage.getItem("history");if(t){let e=JSON.parse(t);r.data.history=e}return e.history},whoWins(e,t){let i=this.getState(),n="";return n="tijeras"==e&&"papel"==t?"ganaste":"papel"==e&&"piedra"==t?"ganaste":"piedra"==e&&"tijeras"==t?"ganaste":e==t?"empate":"perdiste",i.currentGame.resultado=n,n},countPoints(e){let t=this.getState(),i=this.getHistory();return"ganaste"==e?i[t.history.length-1].myPoints++:"perdiste"==e&&i[t.history.length-1].computerPoints++,localStorage.setItem("history",JSON.stringify(t.history)),t.history},restartGame(){let e=this.getState(),t=this.getHistory();t[e.history.length-1].myPoints=0,t[e.history.length-1].computerPoints=0,localStorage.setItem("history",JSON.stringify(e.history))}};customElements.define("score-el",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
                .root{
                    width: 259px;
                    height: 217px;
                    border: solid #000000 10px;
                    border-radius: 10px;
                    background-color: #FFFFFF;
                    font-family: 'Odibee Sans', sans-serif;
                }
                .title{
                    font-size: 55px;
                    margin: 10px;
                }
                p{
                    font-size: 45px;
                    margin: 0;
                }
            `,this.shadow.appendChild(e),this.render()}render(){r.getState();let e=r.getHistory(),t=e[0].myPoints,i=e[0].computerPoints,n=document.createElement("div");n.className="root",n.innerHTML=`
                <h2 class="title">SCORE: </h2>
                <p class="player-uno">Vos: ${t}</p>
                <p class="player-dos">Computer: ${i}</p>
            `,this.shadow.appendChild(n)}});var o={};o=new URL("Papel.a18e2c61.png",import.meta.url).toString();var l={};l=new URL("Piedra.083177db.png",import.meta.url).toString();var d={};d=new URL("Tijera.a063bb16.png",import.meta.url).toString(),customElements.define("hands-el",class extends HTMLElement{constructor(){super(),this.size=this.getAttribute("size"),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=document.createElement("div"),t=document.createElement("img"),i=document.createElement("img"),n=document.createElement("img"),s=new URL(o);t.src=s;let a=new URL(l);i.src=a;let r=new URL(d);n.src=r,e.className="container",document.createElement("style").textContent=`
                .container{
                    display: flex;
                    jusify-content: center;
                    width: 100%;
                }

                img:hover{
                    cursor: pointer;
                }
            `,e.appendChild(t),e.appendChild(i),e.appendChild(n),this.shadow.appendChild(e)}}),customElements.define("count-down",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){let e=document.createElement("style");e.innerHTML=`
                .timer{
                    margin-top:-40px;
                    height:100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `,this.shadow.appendChild(e);let t=document.createElement("div");t.className="timer",t.innerHTML=`
                <svg class="timer__svg" width="244" heigth="243" viewBox="0 0 244 243" fill="none" xmlns="http://www.w3.org/2000/svg">

                <circle cx="121.5" cy="121.5" r="110" stroke="black" stroke-width="23" fill="none">
                    <animate attributeName="stroke-desharray" from="1000 696" to="696 696" dur="5s" fill="freeze" begin="0s"/>
                    <animate attributeName="stroke-dashoffset" from="0" to="696" dur="3s" fill="freeze" begin="0s"/>
                </circle>
                
                <text class="timer__number" x="50%" y="50%" text-anchor="middle" dy=".3em" fill="black" font-size="124">5</text>
                </svg>
                </svg>

                
            `,t.querySelector(".timer__svg");let i=5,n=setInterval(()=>{--i<0?clearInterval(n):t.querySelector(".timer__number").textContent=i.toString()},1e3);this.shadow.appendChild(t)}});const c=new URL(o),p=new URL(l),m=new URL(d);customElements.define("computer-play",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
        .root{
            heigth: 250px;
            width: 100px;
        }
    `,this.shadow.appendChild(e),this.render()}render(){let e=r.getState().currentGame.computerPlay,t=document.createElement("div");"tijeras"===e?t.innerHTML=`
            <img src="${m}" class="root"/>
        `:"papel"===e?t.innerHTML=`
            <img src="${c}" class="root"/>
        `:"piedra"==e&&(t.innerHTML=`
            <img src="${p}" class="root"/>
        `),this.shadow.appendChild(t)}}),customElements.define("reset-button",class extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("style");e.innerHTML=`
        .root{
            width: 322px;
            height: 87px;
            margin-top: 20px;
            border: solid #900C3F 10px;
            border-radius: 10px;
            background-color: #C70039;
            font-family: 'Odibee Sans', sans-serif;
            font-size: 45px;
            text-align: center;

        `,this.shadow.appendChild(e),this.render()}render(){let e=document.createElement("button");e.textContent=this.textContent,e.className="root",this.shadow.appendChild(e)}});let u="";var h={};h=new URL("img-explosion1.eed10714.jpg",import.meta.url).toString();const g=[{path:/\/juego/,component:function(e){let t=document.createElement("div");t.className="init-juego";let i=new URL(o),n=new URL(l),s=new URL(d);t.innerHTML=`
        <div class="pagina-juego">
            <div class="init-juego__rotadas">
                <div>
                    <img src="${i}"/>
                </div>
                <div>
                <img src="${n}"/>
                </div>
                <div>
                    <img src="${s}"/>
                </div>
            </div>
            <div class="count-down">
                <count-down></count-down>
            </div>
            <div class="init-juego__hands">
                <div>
                    <img src="${i}" class="papel"/>
                </div>
                <div>
                    <img src="${n}" class="piedra"/>
                </div>
                <div>
                    <img src="${s}"/ class="tijeras">
                </div>
            </div>
        </div>
    `;let a=t.querySelector(".papel"),r=t.querySelector(".piedra"),c=t.querySelector(".tijeras");a?.addEventListener("click",()=>{clearTimeout(p),u="papel",setTimeout(()=>{e.goTo("/pelea")},1e3)}),r?.addEventListener("click",()=>{clearTimeout(p),u="piedra",setTimeout(()=>{e.goTo("/pelea")},1e3)}),c?.addEventListener("click",()=>{clearTimeout(p),u="tijeras",setTimeout(()=>{e.goTo("/pelea")},1e3)});let p=setTimeout(()=>{e.goTo("/instructions")},5e3);return t}},{path:/\/instructions/,component:function(e){let t=document.createElement("div");t.className="init-instructions",t.innerHTML=`
        <div class="init-instructions__title">
            <h2>Presion\xe1 jugar y elegi: piedra, papel o tijeras antes de que pasen 5 segundos</h2>
        </div>
        <div class="init-instructions__button">
            <jugar-buttom>Jugar!</jugar-buttom>
        </div>
        <div class="init-instructions__reset-button">
            <reset-button>Reset Score</reset-button>
        </div>
        <div class="init-instructions__hands">
            <hands-el></hands-el>
        </div>   
    `;let i=t.querySelector(".init-instructions__button");i?.addEventListener("click",()=>{e.goTo("/juego")});let n=t.querySelector(".init-instructions__reset-button");return n?.addEventListener("click",()=>{r.restartGame()}),t}},{path:/\/inicio/,component:function(e){let t=document.createElement("div");t.className="init-page",t.innerHTML=`
        <div class="init-page__title">
            <h1>Piedra Papel o Tijeras</h1>
        </div>
        <div class="init-page__button">
            <custom-button class="boton-inicio">Empezar</custom-button>
        </div>
        <div class="init-page__hands">
            <hands-el></hands-el>
        </div>
    `;let i=t.querySelector(".boton-inicio");return i?.addEventListener("click",()=>{e.goTo("/instructions")}),t}},{path:/\/resultadoGanaste/,component:function(e){let t=document.createElement("div");t.className="res-ganaste",t.innerHTML=`
        <div class="res-ganaste__img">
            <ganaste-el></ganaste-el>
        </div>
        <div class="res-ganaste__score">
            <score-el></score-el>
        </div>
        <div class="res-ganaste__button">
            <button-volver-jugar>Volver a jugar</button-volver-jugar>
        </div>
    `;let i=t.querySelector("button-volver-jugar");return i?.addEventListener("click",()=>{e.goTo("/instructions")}),t}},{path:/\/resultadoPerdiste/,component:function(e){let t=document.createElement("div");t.className="res-perdiste",t.innerHTML=`
        <div class="res-perdiste__img">
            <perdiste-el></perdiste-el>
        </div>
        <div class="res-perdiste__score">
            <score-el></score-el>
        </div>
        <div class="res-perdiste__button">
            <button-volver-jugar>Volver a jugar</button-volver-jugar>
        </div>
    `;let i=t.querySelector("button-volver-jugar");return i?.addEventListener("click",()=>{e.goTo("/instructions")}),t}},{path:/\/pelea/,component:function(e){let t=document.createElement("div");t.className="init-pelea";let i=new URL(o),n=new URL(l),s=new URL(d),a=new URL(h),c=r.getState(),p=u;r.computerPlay(),"tijeras"==p?(r.setMove("tijeras"),t.innerHTML=`
            <div class="init-pelea">
                <div class="init-pelea__rotada">
                    <computer-play></computer-play>
                </div>
                <div class="init-pelea__explosion">
                    <img src="${a}" class="init-pelea__explosionImg"/>
                </div>
                <div class="init-pelea__myPlay">
                    <img src="${s}" class="init-pelea__img"/>
                </div>
            </div>
            
        `):"papel"==p?(r.setMove("papel"),t.innerHTML=`
            <div class="init-pelea">
                <div class="init-pelea__rotada">
                    <computer-play></computer-play>
                </div>
                <div class="init-pelea__explosion">
                    <img src="${a}" class="init-pelea__explosionImg"/>
                </div>
                <div class="init-pelea__myPlay">
                    <img src="${i}" class="init-pelea__img"/>
                </div>
            </div>
        `):"piedra"==p&&(r.setMove("piedra"),t.innerHTML=`
            <div class="init-pelea">
                <div class="init-pelea__rotada">
                    <computer-play></computer-play>
                </div>
                <div class="init-pelea__explosion">
                    <img src="${a}" class="init-pelea__explosionImg"/>
                </div>
                <div class="init-pelea__myPlay">
                    <img src="${n}" class="init-pelea__img"/>
                </div>
            </div>
            `),r.whoWins(c.currentGame.myPlay,c.currentGame.computerPlay);let m=c.currentGame.resultado;return r.countPoints(m),r.getHistory(),setTimeout(()=>{"ganaste"==m?e.goTo("/resultadoGanaste"):"perdiste"==m?e.goTo("/resultadoPerdiste"):e.goTo("/juego")},3e3),t}}];!function(e){function t(e){history.pushState({},"",e),i(e)}function i(i){if(console.log(location.host.includes("github.io")),location.host.includes("github.io")){let n=i.replace("/Desafio-PiedraPapelTijera/","/");for(let i of g)if(i.path.test(n)){let n=i.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(n)}}else for(let n of g)if(n.path.test(i)){let i=n.component({goTo:t});e.firstChild&&e.firstChild.remove(),e.appendChild(i)}console.log("El handleRoute recibio una nueva ruta",i)}console.log("Location pathname: ",location.pathname),"/Desafio-PiedraPapelTijera"==location.pathname?t("/inicio"):i(location.pathname)}(document.querySelector(".root"));
//# sourceMappingURL=index.54046e74.js.map
