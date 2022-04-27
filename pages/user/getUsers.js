import axios from 'axios';
import {useEffect, useState} from 'react';
import tableStyles from '../common/styles/table.module.css'
import Link from 'next/link'

export default function GetUsers() {

    const columns = [
        "사용자ID",
        "이름",
        "이메일",
        "전화번호",
        "생년월일",
        "주소"
    ];
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:5000/user/getUsers')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                alert('ERROR')
            })
        }, [])

    return (
        <> < table className = {
            tableStyles.table
        } > <thead>
            <tr>
                <th colSpan={6}>
                    <h1>회원목록</h1>
                </th>
            </tr>

        </thead>
        <tbody>
            <tr>
                {columns.map((column, index)=>{
                   return <td key={index}>{column}</td>
                })}
            </tr>
            { data.length == 0 
            ? <tr> <td colSpan={6}> 데이터가 없습니다 </td></tr> 
            : data.map((user)=>{
             return <><tr key={user.userid}>
                <td>{user.userid}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.birth}</td>
                <td>{user.address}</td>
            </tr></>
            }) }
        </tbody>
    </table>
</>
    )
}