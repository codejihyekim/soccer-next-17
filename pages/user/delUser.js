import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
import tableStyles from '../common/styles/table.module.css'
export default function  DelUser(){
    const [delUser, setDelUser] =useState({})
    useEffect(() => {
        const loginUser = localStorage.getItem('loginUser')
        const user = JSON.parse(loginUser)
        setDelUser(user)
    }, [])
    const dispatch = useDispatch()
    const handleChange = e=>{
        e.preventDefault()
        const{name, value} = e.target;
        setDelUser({userid: delUser.userid,password: value})
    }
    return <form onSubmit={
        e => {
            e.preventDefault()
            dispatch(userActions.delUserRequest(delUser))
        }
    }
    >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h1>회원탈퇴</h1></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>사용자ID</b></td>
                    <td><input type="text" name='userid' value={delUser.userid} /></td>
                </tr>
                <tr>
                    <td><b>비밀번호 확인</b></td>
                    <td><input type="text" name='password' onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button type="submit">로그인</button><br /></td>
                </tr>
            </tbody>
        </table>
    </form>
}