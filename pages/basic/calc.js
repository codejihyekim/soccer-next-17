import tableStyles from '@/styles/Table.module.css'
import React, {useState} from "react";

export default function Calculator(){
    const [result, setResult] = useState('')
    const [inputs, setInputs] = useState({opcode: "+"})
    const { num1, num2, opcode} = inputs
    const onChange = e => {
        e.preventDefault()
        const { name, value } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const onClick = e => {
        e.preventDefault()
        switch (opcode){
            case "+" :
                return setResult(Number(num1) + Number(num2))
            case "-" :
                return setResult(Number(num1) - Number(num2))
            case "*" :
                return setResult(Number(num1) * Number(num2))
            case "/" :
                return setResult(Number(num1) / Number(num2))
            case "%" :
                return setResult(Number(num1) % Number(num2))
            default :
                console.log("Default")
        }
    }
    return (<form >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th><h2>계산기</h2></th>
                </tr>
            </thead>
            <tbody>
        <tr >
        <td>
            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={onChange} /> 

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={onChange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select>

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={onChange} /><br />

            <button onClick={onClick}>계산하기</button></td>
            </tr>
            <tr><td>결과 : {result}</td></tr>
                </tbody>
            </table>
        </form>)
}