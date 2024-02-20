type Jugada = "piedra" | "papel" | "tijeras";

type Game = {
    computerPlay: Jugada,
    myPlay: Jugada,
}

const state = {
    data: {
        currentGame:{
            computerPlay: "",
            myPlay: "",
            resultado: ""
        },
        history : [
            {
                myPoints : 0,
                computerPoints : 0
        }]
    },
    listeners: [],
    getState(){
        return this.data
    },
    setState(newState){
        this.data = newState;
        for (const callback of this.listeners){
            callback();
        }
    },
    subscribe(callback: (any)=>any){
        this.listeners.push(callback)
    },
    setMove(move:Jugada) {
        const currentState = this.getState()
        currentState.currentGame.myPlay = move
    },
    computerPlay(){
        const currentState = this.getState()
        const posibilidades : Jugada[] = ["papel","piedra","tijeras"]
        const jugadaAleatoria: Jugada = 
        posibilidades[Math.floor(Math.random() * posibilidades.length)]
        
        currentState.currentGame.computerPlay = jugadaAleatoria


        return jugadaAleatoria
    },
    pushToHistory(play:Game){
        const currentState = this.getState()
        currentState.history.push(play)
    },
    getHistory(){
        const currentState = this.getState()

        const history = localStorage.getItem("history")
        if (history) {
            const parsedHistory = JSON.parse(history)
            state.data.history = parsedHistory
        }
        return currentState.history
    },
    whoWins(myPlay:Jugada,computerPlay:Jugada){
        const currentState = this.getState()
        let ganador = ""

        if (myPlay == "tijeras" && computerPlay == "papel") {
            ganador = "ganaste"
        } else if (myPlay == "papel" && computerPlay == "piedra"){
            ganador = "ganaste"
        } else if (myPlay == "piedra" && computerPlay == "tijeras"){
            ganador = "ganaste"
        } else if (myPlay == computerPlay) {
            ganador = "empate"
        } else {
            ganador = "perdiste"
        }

        currentState.currentGame.resultado = ganador
        return ganador
    },
    countPoints(resultado){
        const currentState = this.getState()
        const history = this.getHistory()

        if (resultado == "ganaste"){
            history[currentState.history.length -1].myPoints++
        } else if (resultado == "perdiste"){
            history[currentState.history.length -1].computerPoints++
        }

        localStorage.setItem("history", JSON.stringify(currentState.history))
        return currentState.history
    },
    restartGame(){
        const currentState = this.getState()
        const history = this.getHistory()
        history[currentState.history.length -1].myPoints = 0
        history[currentState.history.length -1].computerPoints = 0

        localStorage.setItem("history", JSON.stringify(currentState.history))
    }
}

// state.pushToHistory({computerPlay:"piedra",myPlay:"papel"})

export {state}