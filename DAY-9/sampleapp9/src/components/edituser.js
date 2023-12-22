import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { getUserId } from '../services/api';
import { editUser } from '../services/api';

function EditUsers()
{
    const navigate = useNavigate();
    const {id} = useParams();
    const[data,setData]=useState({
            username:'',
            password:''
        })

    const fetchUser=async()=>{
        try{
        const res = await getUserId()
        setData(res.data)
        }
        catch(e)
        {
            console.log(e)
        }
    }

    const handleChange =(e)=>{
        setData({...data,[e.target.id]:e.target.value})
    }   

    const handleSubmit =async(e)=>
    {
        e.preventDefault();
        try{
            const res2=await editUser(id,data)
            if(res2.status === 200)
                alert("user updated")
            navigate('/')
        }
        catch(e){

        }
    }
    useEffect(()=>{
        fetchUser()
    })

    return (

        <>
         <form onSubmit={handleSubmit}>
        <input type='text' id='username' value={data.username} placeholder='username' onChange={handleChange}/>
        <input type='password' id='password' value={data.password} placeholder='password' onChange={handleChange}/>
        <button type='submit' className='submit-btn' >Update</button>
        </form>
        </>
    )
}
export default EditUsers;

