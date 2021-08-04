import React from 'react';

const Greeter = (props) => {

    return(

        /// should received 2 props : phrase and name
        <>
        <div className="greeter">

            <h1 className="bg-primary">Welcome: {props.phrase}, {props.name} </h1>
            {/* <div className="greeter-name">Name: {props.name}</div> */}

        </div>

        </>


    );



};

export default Greeter;