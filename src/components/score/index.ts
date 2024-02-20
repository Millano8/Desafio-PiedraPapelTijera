import { state } from "../../state";

customElements.define("score-el",
    class extends HTMLElement{
        shadow: ShadowRoot;
        constructor(){
            super()
            this.shadow= this.attachShadow({mode:"open"})
        }
        connectedCallback(){
            const style = document.createElement("style")
            style.innerHTML = `
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
            `
            this.shadow.appendChild(style)
            this.render()
        }
        render(){
            const currentState = state.getState()
            const history = state.getHistory()
            const puntosJugador = history[0].myPoints
            const puntosPc = history[0].computerPoints

            const container = document.createElement("div")
            container.className = "root"
            container.innerHTML = `
                <h2 class="title">SCORE: </h2>
                <p class="player-uno">Vos: ${puntosJugador}</p>
                <p class="player-dos">Computer: ${puntosPc}</p>
            `

            this.shadow.appendChild(container)
        }
})