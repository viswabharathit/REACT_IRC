import {useState} from 'react'
function Card() {
    
    const [visible, setVisible] = useState (true);

    const toggle = ()=>{
        setVisible(!visible)
    }

    setTimeout(()=>{
        setVisible(false)
    }, 5000)
    
    return (
        <>
            {visible ? (

            <div className ="wrapper">
                <div className="card">

                    <p className="cookieHeading">Welcome to UNote!</p>
                    <p className="cookieDescription">Get your thought organised into compact notes</p>

                    <div className="buttonContainer">
                        <button className="acceptButton">Continue</button>
                        <button className="declineButton">Cancel</button>
                    </div>
            </div>
            </div>
            ) : (<button onClick = {toggle} class = "manage">Manage</button>
            )
            }



        </>

    )
}
export default Card;