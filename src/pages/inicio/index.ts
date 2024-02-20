import {initRouter} from "../../router"

export function initInicio(params){
    const div = document.createElement("div")
    div.className = "init-page"
    div.innerHTML = `
        <div class="init-page__title">
            <h1>Piedra Papel o Tijeras</h1>
        </div>
        <div class="init-page__button">
            <custom-button class="boton-inicio">Empezar</custom-button>
        </div>
        <div class="init-page__hands">
            <hands-el></hands-el>
        </div>
    `
    const button = div.querySelector(".boton-inicio")

    button?.addEventListener("click",()=>{
        params.goTo("/instructions")
    })

    return div
}