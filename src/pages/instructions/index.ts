import { state } from "../../state"

export function initInstructions(params){
    const div = document.createElement("div")
    div.className = "init-instructions"
    div.innerHTML = `
        <div class="init-instructions__title">
            <h2>Presioná jugar y elegi: piedra, papel o tijeras antes de que pasen 5 segundos</h2>
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
    `
    const button = div.querySelector(".init-instructions__button")
    button?.addEventListener("click",()=>{
        params.goTo("/juego")
    })
    const reset = div.querySelector(".init-instructions__reset-button")
    reset?.addEventListener("click",()=>{
        state.restartGame()
    })
    return div
}