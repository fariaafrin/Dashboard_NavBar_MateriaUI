import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Button } from 'bootstrap';



const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");


    const responseGoogle = (response) => {
        console.log(response);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
    };



    const responseFacebook = (response) => {
        console.log(response);
    }

    const componentClicked = (data) => {
        console.warn(data);
    }


    return (
        <div>
            {/* <h1>Contact</h1>
            <h1>Name:{name}</h1>
            <h1>Email: {email}</h1>
            <img src={url} alt={name} /> */}
            <div style={{ height: '5px', width: '200px', margin: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItem: 'center' }}>
               
                <GoogleLogin
  
                    clientId="509825570884-t1osv0n5en4krnjmuq0k9v7rpe1t0c4t.apps.googleusercontent.com"
                    // buttonText="LOGIN WITH GMAIL"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                 
                   
                   
                   />


            </div>







            <div className='facebook1'>

                <FacebookLogin 
                    appId="750566338831492"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={componentClicked}
                    callback={responseFacebook}
                    
                />
                
            </div>


        </div>
    )
}
export default Contact