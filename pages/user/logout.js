import React from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../../redux/reducers/userReducer.ts';
export default function Logout(){
    const dispatch = useDispatch()
    return <form onSubmit={
        e => {
            e.preventDefault()
            dispatch(userActions.logoutRequest())
        }
    }
    >
        <button type="submit">로그아웃</button>
    </form>
}    