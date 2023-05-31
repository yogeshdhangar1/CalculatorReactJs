import React, { useState } from "react";
import './Button.css'

const Button = () => {
    const [value, setValue] = useState('');    

    const buttonValues = [
    ["AC", "(", ")", "+"],
    [7,8,9,"-"],
    [4,5,6,"*"],
    [1,2,3,"/"],
    [0,".","%","="]
    ];


const buttonClickHandler = (e) => {
    switch(e.target.value) {
        case "AC" :
            setValue("");
            break;
        case "%" :
            setValue(value/100);
            break;
        case '(' :
            setValue((e.target.value).concat(value));
            break;
        case ')' :
            setValue(value.concat(e.target.value));
            break;
        case '+' :
            setValue(value.concat(e.target.value));
            break;
        case '-' :
            setValue(value.concat(e.target.value));
            break;
        case '*' :
            setValue(value.concat(e.target.value));
            break;
        case '/' :
            setValue(value.concat(e.target.value));
            break;
        case '=' :
            setValue(eval(value).toString());
            break;
        default :
            setValue(value.concat(e.target.value));
            break;
    }
    console.log(e.target.value)
}

    return(
        <><div className="div">
            <p className="textbox">{value}</p>
        </div><div className="buttonBox">
                {buttonValues.flat().map((btn, i) => (
                    <button onClick={buttonClickHandler} className="button" value={btn} key={i}> {btn} </button>
                ))}
            </div></>
    )
}
export default Button;