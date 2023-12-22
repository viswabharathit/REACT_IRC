import React from 'react';
import { useState } from 'react';
import { addUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

function AddUsers(){

    const navigate = useNavigate();
    const[data,setData]=useState({
            username:'',
            password:''
    })
    const handleChange =(e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }    
    const handleSubmit =async(e)=>{
        e.preventDefault();
        try{
        const res=await addUser(data)
        if(res.status === 201)
            alert('User added')
        navigate('/')
        }
        catch(e){
            console.log(e)
        }
    }    

    return (
        <>
        <form onSubmit={handleSubmit}>
        <input type='text' id='username' placeholder='username' onChange={handleChange}/>
        <input type='password' id='password' placeholder='password' onChange={handleChange}/>
        <button type='submit' className='submit-btn' >SUBMIT</button>
        </form>
        </>
    )
}
export default AddUsers;