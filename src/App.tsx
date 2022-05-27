import React, {useState} from 'react';
import './App.css';
import {Display} from "./Display";
import UneversalButton from "./UneversalButton";

function App() {
    let [counter, setCounter] = useState<number>(0);

    // const changeCounter = (value: number) => {setCounter(value);}
    const resetCounter = () => {setCounter(0);}
    const changeCounter1 = () => {if(counter<5) setCounter(counter + 1);}

    return (
        <div className="App">
            <div className={'content'}>
                <Display counter={counter}/>
                {/*<Button*/}
                {/*    counter={counter}*/}
                {/*    changeCounter={changeCounter}/>*/}
                <div className={'buttons'}>
                    <UneversalButton name={'inc'}  disable={counter === 5} callBack={changeCounter1}/>
                    <UneversalButton name={'reset'} disable={counter === 0} callBack={resetCounter}/>
                </div>
            </div>
        </div>
    );
}

export default App;

