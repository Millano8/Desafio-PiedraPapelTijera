import {initJuego} from "./pages/juego"
import {initInstructions} from "./pages/instructions"
import {initInicio} from "./pages/inicio"
import {initGanaste} from "./pages/resultado/ganaste"
import {initPerdiste} from "./pages/resultado/perdiste"
import { initPelea } from "./pages/pelea"

const BASE_PATH = "/Desafio-PiedraPapelTijera/"

function isGithubPages(){
    console.log(location.host.includes("github.io"))
    return location.host.includes("github.io")
}

const routes = [
    {
        path: /\/juego/,
        component: initJuego
    },
    {
        path: /\/instructions/,
        component: initInstructions
    },
    {
        path: /\/inicio/,
        component: initInicio
    },
    {
        path: /\/resultadoGanaste/,
        component: initGanaste
    },
    {
        path: /\/resultadoPerdiste/,
        component: initPerdiste
    },
    {
        path: /\/pelea/,
        component: initPelea
    }
]

export function initRouter(container: any){

    function goTo(path) {
        history.pushState({},"",path);
        handleRoute(path)
    }
    function handleRoute(route){
        if (isGithubPages()){
            const newRoute = route.replace(BASE_PATH, "/")

            for (const r of routes) {
                if (r.path.test(newRoute)){
                    const el = r.component({goTo:goTo})
                    if (container.firstChild) {
                        container.firstChild.remove()
                    }
                    container.appendChild(el)
                }
            }
        } else {
            for (const r of routes) {
                if (r.path.test(route)) {
                    const el = r.component({goTo:goTo})
    
                    if (container.firstChild) {
                        container.firstChild.remove()
                    }
                    container.appendChild(el)
                }
            }
        }
        
        console.log("El handleRoute recibio una nueva ruta", route) 
        
    }
    if (location.pathname == "/"){
        goTo("/inicio")
    } else {
        handleRoute(location.pathname)        
    }

}