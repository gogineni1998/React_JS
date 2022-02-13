import React,{createContext,useState} from "react";

export const MyContext = createContext()

export const MyProvider = (props) => {
    const [obj, setObj] = useState({
        stage : 1,
        players : [],
        result : ''
    })

    const addPlayerHandler = (name) => {
        setObj({...obj, players : [ ...obj.players,name]})
    }

    const changeStage = () => {
        console.log(obj.stage);
        obj.stage === 1 ? setObj({...obj, stage : 2}) : setObj({...obj, stage : 1})
    }

    const removePlayer = (name) => {
        setObj({...obj, players : [ ...obj.players].filter((item) => item !== name)})
    }

    const getlooser = () => {
        let randomIndex = Math.floor((Math.random() * obj.players.length) + 0);
        return obj.players[randomIndex]
    }

    const startOver = () => {
        setObj({
            stage : 1,
            players : [],
            result : ''
        })
    }

    return(
        <MyContext.Provider value = {{obj : obj, 
        addPlayerHandler : addPlayerHandler, 
        removePlayer : removePlayer, 
        changeStage : changeStage, 
        getlooser : getlooser, 
        startOver : startOver}}>
            {props.children}
        </MyContext.Provider>
    )
}