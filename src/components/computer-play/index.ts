import { state } from "../../state";
type Jugada = "piedra" | "papel" | "tijeras"

const imgPapel = new URL("../images/Papel.png", import.meta.url) as any
const imgPiedra = new URL("../images/Piedra.png", import.meta.url) as any
const imgTijera = new URL("../images/Tijera.png", import.meta.url) as any


customElements.define("computer-play",
 class extends HTMLElement{
   shadow: ShadowRoot
   constructor(){
    super()
    this.shadow = this.attachShadow({mode:"open"})
   }
   connectedCallback(){
    const style = document.createElement("style")
    style.innerHTML = `
        .root{
            heigth: 250px;
            width: 100px;
        }
    `
    
    this.shadow.appendChild(style)
    this.render()
   }
   
   render(){
    const currentState = state.getState()
    const jugadaPc = currentState.currentGame.computerPlay

    const div = document.createElement("div")

    if (jugadaPc === "tijeras"){
        div.innerHTML = `
            <img src="${imgTijera}" class="root"/>
        `
    } else if (jugadaPc === "papel") {
        div.innerHTML = `
            <img src="${imgPapel}" class="root"/>
        `
    } else if (jugadaPc == "piedra") {
        div.innerHTML= `
            <img src="${imgPiedra}" class="root"/>
        `
    }
    this.shadow.appendChild(div)
   }

})
