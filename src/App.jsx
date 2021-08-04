import React, { useState, useEffect } from "react";
import Greeter from './components/Greeter';

const App = ()=> {
    

    const [username, setUsername] = useState('')  // returns [state, setState]
    const [password, setPassword] = useState('')
    const [loaded, setLoaded] = useState(false)
    


    useEffect(() => {  /// Executes on Render

       console.log('useEffect Running');
       setTimeout(() => {

           // your code here to update loaded state
            setLoaded(true);
            console.log('setLoaded = True!');
       
        }, 3000);
    
    });

    // displays "website loading h1" until button is clicked which loads page

    if(loaded===false){
        return(
            <h1> Website Loading...

                <div>
                    <button 
                    onClick={() => setLoaded(true)}
                    className="btn btn-danger">
                    Click Me.
                    </button>
                </div>
            </h1>
            
            );
        }

   

    return (
        
        <>
        <h1> Hello, I am reacting to React!⚛️🙀</h1>

            <div>
                {/* 3 greeter components */}
                <Greeter name = "Simon" phrase = "lol hello there..."/>
                <Greeter name = "Luke" phrase = "Hahahaha hello there..."/>
                <Greeter name = "Andrew" phrase = "Lmao hello there..."/>

            </div>

            {/* controlled react input */}
            <>
                Username: <input value = {username} onChange = {e => setUsername(e.target.value)}/>
                {/* <input value = {password} onChange = {e => setPassword(e.target.value)}/> */}
                <p>You are logging in as: {username}</p>

            </>
        </>
    );
};


export default App;
