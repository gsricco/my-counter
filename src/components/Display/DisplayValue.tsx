import React from "react";

type DisplayPropsType = {
    counter: number
    maxValue: number
    startValue: number
    onChangeMaxValue: (maxValue: number) => void
    onChangeStartValue: (startValue: number) => void
    changeMessage: (msg: string) => void
    condition: boolean

}

export const DisplayValue = (props: DisplayPropsType) => {
    let maxValue = props.maxValue;
    let startValue = props.startValue;
    const onChangeMaxValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        maxValue = Number(e.currentTarget.value);
        if (maxValue) {
            props.changeMessage(`enter values and press 'SET'`)
            props.onChangeMaxValue(maxValue);
        }
        maxValue <= startValue || startValue < 0 ? props.changeMessage('you enter incorrect value') : props.changeMessage(`enter values and press 'SET'`)
        props.onChangeMaxValue(Number(e.currentTarget.value));

    }
    const onChangeStartValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        startValue = Number(e.currentTarget.value)
        if (startValue) {
            props.changeMessage(`enter values and press 'SET'`)
            props.onChangeStartValue(startValue);
        }
        maxValue <= startValue || startValue < 0 ? props.changeMessage('you enter incorrect value') : props.changeMessage(`enter values and press 'SET'`)

        props.onChangeStartValue(Number(e.currentTarget.value));

    }


    return (
        <div>
            <div className={'goodValue'}>
                <div>
                    max value
                    <input className={props.condition ? 'ignor' : 'correct'} value={props.maxValue} type="number"
                           onChange={onChangeMaxValueHandler}/>
                </div>
                <div>
                    start value
                    <input className={props.condition ? 'ignor' : 'correct'} value={props.startValue} type="number" onChange={onChangeStartValueHandler}/>
                </div>
            </div>
        </div>

    )

}
