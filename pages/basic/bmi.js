import React, { useState } from 'react';
import axios from 'axios';
import tableStyles from '@/styles/Table.module.css'
export default function Bmi() {
    const [inputs, setInputs] = useState({})
    const proxy = 'http://localhost:5000'
    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy+'/basic/bmi', inputs)
        .then(res => {
            const bmi = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>이름 : ${bmi.name}</h3>
            <h3>키 : ${bmi.height} cm</h3>
            <h3>몸무게 : ${bmi.weight}kg</h3>
            <h3>BMI결과 : ${bmi.bmi}</h3>
            `
        })
        .catch(err => alert(err))
    }
    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    return ( <form action="" onSubmit={handleSubmit} >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h2>BMI</h2></th>
                </tr>
            </thead>
            <tbody>
        <tr >
            <td>
                <label htmlFor="">이름</label>
            </td>
            <td>
                <input type="text" name="name" onChange={handleChange} />
            </td>
        </tr>
        <tr >
            <td>
                <label htmlFor="">키</label>
            </td>
            <td>
            <input type="text" name="height" onChange={handleChange} />
            </td>
        </tr>
        <tr >
            <td>
                <div>
                    <label htmlFor="">몸무게</label>
                </div>
            </td>
            <td>
                <input type="text" name="weight" onChange={handleChange} /><br />
            </td>
        </tr>
        <tr><td colSpan={2}><input type="submit" value="BMI 체크" /></td></tr>
            <tr><td colSpan={2}>결과 : <span id="result-span"></span></td></tr>
                </tbody>
            </table></form>
    )
}