import React, {useEffect, useState} from 'react';
import './App.css';
import {DisplayCounter} from "./components/Display/DisplayCounter";
import UneversalButton from "./components/Button/UneversalButton";
import {DisplayValue} from "./components/Display/DisplayValue";
import Info from "./components/Info/Info";

const getMaxValue = () => {
    let maxValueString = localStorage.getItem('maxValue');
    if (maxValueString) return JSON.parse(maxValueString); else return 0;
}
const getStartValue = () => {
    let startValueString = localStorage.getItem('startValue');
    if (startValueString) return JSON.parse(startValueString); else return 0;
}
const getCounter = () => {
    let counterString = localStorage.getItem('counter');
    if (counterString) return JSON.parse(counterString); else return 0;
}
const getMessage = () => {
    let messageString = localStorage.getItem('message');
    if (messageString) return messageString; else return '';
}

function App() {
    let [maxValue, setMaxValue] = useState<number>(getMaxValue);
    let [startValue, setStartValue] = useState<number>(getStartValue);
    let [counter, setCounter] = useState<number>(getCounter);
    let [message, setMessage] = useState<string>(getMessage);

    let condition;

    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [maxValue])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
    }, [startValue])
    useEffect(() => {
        localStorage.setItem('counter', JSON.stringify(counter));
    }, [counter])
    useEffect(() => {
        localStorage.setItem('message', message);
    }, [message])

    const onChangeMaxValue = (maxValue: number) => {
        setMaxValue(maxValue);
    }

    const onChangeStartValue = (startValue: number) => {
        setStartValue(startValue);
    }

    const onSetCounter = () => {
        setCounter(startValue);
        setMessage('');
    }

    const resetCounter = () => {
        setCounter(startValue);
    }
    const changeCounter = () => {
        if (counter < maxValue) setCounter(counter + 1);
    }

    const changeMessage = (msg: string) => {
        setMessage(msg);
    }

    condition = maxValue <= startValue || startValue < 0;
    // if (maxValue <= startValue || startValue < 0) condition = true;else condition = false;

    return (
        <div className="App">
            <Info/>
            <div className={'content'}>
                <DisplayValue counter={counter} onChangeMaxValue={onChangeMaxValue}
                              onChangeStartValue={onChangeStartValue} maxValue={maxValue} startValue={startValue}
                              changeMessage={changeMessage} condition={condition}/>
                <div className={'buttons'}>
                    <UneversalButton name={'set'} disable={condition} callBack={onSetCounter}/>
                </div>
            </div>
            {condition&&<img className={'pic'}
                  src="https://downloadwap.com/thumbs3/screensavers/d/new/cartoon-anime/bart_eyes-23642.gif" alt={''}/>}

            <div className={'content'}>
                <DisplayCounter counter={counter} maxValue={maxValue} message={message} condition={condition}/>
                <div className={'buttons'}>
                    <UneversalButton name={'inc'} disable={counter === maxValue || condition} callBack={changeCounter}/>
                    <UneversalButton name={'reset'} disable={counter === startValue || condition}
                                     callBack={resetCounter}/>
                </div>
            </div>
        </div>
    );
}

export default App;

