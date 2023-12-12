import {useState} from 'react';
const TempComp =()=>
{
    const[data,setData]=useState({
        username:'',
        password:''
    })
    const HandleChange =(e)=>
    {
        setData({...data,[e.target.id]:e.target.value})
        console.log(data)
    }
    const HandleSubmit =(e)=>
    {
        e.preventDefault();
    }
    const [visible, setVisible] = useState (true);

    // const toggle = ()=>{
    //     setVisible(!visible)
    // }

    // setTimeout(()=>{
    //     setVisible(false)
    // }, 5000)
    return(
        <>
        <div>
            <div>Hello World</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Logging</li>
            </ul>
        </div>
            <form onSubmit={HandleSubmit}> 
                <input type="text" placeholder="UserName" id="username" onChange={HandleChange}/>
                <input type="password" placeholder="password" id="password" onChange={HandleChange}/>
                <input type="submit" value="Login"/>
                {/* <span>
                    <input type="Submit" value="Login"/>
                    <button onClick={toggle}>Cancek</button>
                </span> */}
            </form>
        </>
    )
}
export default TempComp;