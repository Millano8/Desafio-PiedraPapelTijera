import "./components/button-empezar"
import "./components/button-jugar"
import "./components/button-volver-a-jugar"
import "./components/perdiste-el"
import "./components/ganaste-el"
import "./components/score"
import "./components/hands-el"
import "./components/countDown-comp"
import "./components/computer-play"
import "./components/button-reset"
import {initInicio} from "./pages/inicio"
import {initInstructions} from "./pages/instructions"
import {initGanaste} from "./pages/resultado/ganaste"
import { initPerdiste } from "./pages/resultado/perdiste"
import { initRouter } from "./router"


function main(){
    const root = document.querySelector(".root")
    initRouter(root)
}

main()