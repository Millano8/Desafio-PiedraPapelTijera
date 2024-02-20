import {state} from "../../state"
import { jugada } from "../juego"

export function initPelea(params){
    const div = document.createElement("div")
    div.className = "init-pelea"

    const imgPapel = new URL("../../components/images/Papel.png", import.meta.url) as any
    const imgPiedra = new URL("../../components/images/Piedra.png", import.meta.url) as any
    const imgTijera = new URL("../../components/images/Tijera.png", import.meta.url) as any
    const imgExplosion = new URL("../../components/images/img-explosion1.jpg", import.meta.url) as any

    const currentState = state.getState()
    const jugadaJugador = jugada
    const jugadaPc = state.computerPlay()

    if (jugadaJugador == "tijeras"){
        state.setMove("tijeras")
        div.innerHTML = `
            <div class="init-pelea">
                <div class="init-pelea__rotada">
                    <computer-play></computer-play>
                </div>
                <div class="init-pelea__explosion">
                    <img src="${imgExplosion}" class="init-pelea__explosionImg"/>
                </div>
                <div class="init-pelea__myPlay">
                    <img src="${imgTijera}" class="init-pelea__img"/>
                </div>
            </div>
            
        `
    }  else if (jugadaJugador == "papel"){
        state.setMove("papel")
        div.innerHTML = `
            <div class="init-pelea">
                <div class="init-pelea__rotada">
                    <computer-play></computer-play>
                </div>
                <div class="init-pelea__explosion">
                    <img src="${imgExplosion}" class="init-pelea__explosionImg"/>
                </div>
                <div class="init-pelea__myPlay">
                    <img src="${imgPapel}" class="init-pelea__img"/>
                </div>
            </div>
        `
    } else if (jugadaJugador == "piedra"){
        state.setMove("piedra")
        div.innerHTML = `
            <div class="init-pelea">
                <div class="init-pelea__rotada">
                    <computer-play></computer-play>
                </div>
                <div class="init-pelea__explosion">
                    <img src="${imgExplosion}" class="init-pelea__explosionImg"/>
                </div>
                <div class="init-pelea__myPlay">
                    <img src="${imgPiedra}" class="init-pelea__img"/>
                </div>
            </div>
            `
    }

    const ganador = state.whoWins(
        currentState.currentGame.myPlay,
        currentState.currentGame.computerPlay
    );

    const resultado = currentState.currentGame.resultado
    state.countPoints(resultado)
    const history = state.getHistory()

    
    setTimeout(()=>{
        if (resultado == "ganaste"){
            params.goTo("/resultadoGanaste")
        } else if (resultado == "perdiste"){
            params.goTo("/resultadoPerdiste")
        } else {
            params.goTo("/juego")
        }
    },3000)

    return div
}

