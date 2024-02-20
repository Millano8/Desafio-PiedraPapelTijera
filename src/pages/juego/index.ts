import { initRouter } from "../../router";
import { state } from "../../state";
import "../../components/computer-play"
let jugada = ""


export function initJuego(params){
    const div = document.createElement("div")
    div.className = "init-juego"
    const imgPapel = new URL("../../components/images/Papel.png", import.meta.url) as any
    const imgPiedra = new URL("../../components/images/Piedra.png", import.meta.url) as any
    const imgTijera = new URL("../../components/images/Tijera.png", import.meta.url) as any

    div.innerHTML = `
        <div class="pagina-juego">
            <div class="init-juego__rotadas">
                <div>
                    <img src="${imgPapel}"/>
                </div>
                <div>
                <img src="${imgPiedra}"/>
                </div>
                <div>
                    <img src="${imgTijera}"/>
                </div>
            </div>
            <div class="count-down">
                <count-down></count-down>
            </div>
            <div class="init-juego__hands">
                <div>
                    <img src="${imgPapel}" class="papel"/>
                </div>
                <div>
                    <img src="${imgPiedra}" class="piedra"/>
                </div>
                <div>
                    <img src="${imgTijera}"/ class="tijeras">
                </div>
            </div>
        </div>
    `
    
    
    const elegiPapel = div.querySelector(".papel")
    const elegiPiedra = div.querySelector(".piedra")
    const elegiTijeras = div.querySelector(".tijeras")



    elegiPapel?.addEventListener("click",()=>{
        clearTimeout(timeOutReturn);
        jugada = "papel"

        setTimeout(()=>{
            params.goTo("/pelea")
        },1000)
    })

    elegiPiedra?.addEventListener("click",()=>{
        clearTimeout(timeOutReturn)
        jugada = "piedra"

        setTimeout(()=>{
            params.goTo("/pelea")
        },1000)

        
    })

    elegiTijeras?.addEventListener("click",()=>{
        clearTimeout(timeOutReturn)
        jugada = "tijeras"

        setTimeout(()=>{
            params.goTo("/pelea")
        },1000)
    })

    const timeOutReturn = setTimeout(()=>{
        params.goTo("/instructions")
    },5000)

    return div
}

export {jugada}