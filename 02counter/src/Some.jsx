//it is a assignment given in video lecture
import { useState, useEffect } from 'react';

function Some(){

    const [counter, setUpCounter] = useState(0)

    const addValue = () => {
        if(counter == 20){
            return 
        }
        else{
            setUpCounter(counter + 1)
        }
    }

    const removeValue = () => {
        if(counter == 0){
            return
        }
        else{
            setUpCounter(counter -1)
        }
    }

    return(
        <div>
            <h1>Chai aur react</h1>
            <h2>Counter Value {counter}</h2>
            <br></br>
            <button
            onClick={addValue}
            >Add Value</button>
            <br></br>
            <button
            onClick={removeValue}
            >Remove Value</button>
        </div>
    )
}





export default Some;