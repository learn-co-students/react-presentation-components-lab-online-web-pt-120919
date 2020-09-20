import React from 'react';

const SimplerComponent = (props) => {
    return (
        <div>
            <button onClick={props.handleClick}>I am just happy</button>
            {/* {props.status} */}
        </div>
    );
};

export default SimplerComponent;