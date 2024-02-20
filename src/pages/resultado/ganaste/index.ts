import { initRouter } from "../../../router"

export function initGanaste(params){
    const div = document.createElement("div")
    div.className = "res-ganaste"
    div.innerHTML = `
        <div class="res-ganaste__img">
            <ganaste-el></ganaste-el>
        </div>
        <div class="res-ganaste__score">
            <score-el></score-el>
        </div>
        <div class="res-ganaste__button">
            <button-volver-jugar>Volver a jugar</button-volver-jugar>
        </div>
    `
    const button = div.querySelector("button-volver-jugar")
    button?.addEventListener("click",()=>{
        params.goTo("/instructions")
    })

    return div
}