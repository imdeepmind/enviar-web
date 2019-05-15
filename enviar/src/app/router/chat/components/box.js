import React from 'react';

import Avatar from '../../../components/avatar';

const messageBoxStyleMe = {
    width: '100%',
    minHeight: '44px',
    background: '#1ddced',
    color: "white",
    margin: '8px 3px',
    padding: '3px 8px',
    borderRadius: '30px'
}

const messageBoxStyleYou = {
    width: '100%',
    minHeight: '44px',
    background: '#1adda4',
    color: "white",
    margin: '8px 3px',
    padding: '3px 8px',
    borderRadius: '30px'
}

const Box = props => {
    console.log(props);
    return (
        props.leftSide ? 
        <div className="d-flex w-75">
            <div className="d-flex justify-content-center align-items-center"><Avatar source={props.avatar} title={props.author} width="48px" /></div>
            <div style={messageBoxStyleYou} className="d-flex align-items-center">{props.message}</div>
        </div> : 
        <div className="d-flex w-75 float-right">
            <div style={messageBoxStyleMe} className="d-flex align-items-center">{props.message}</div>
            <div className="d-flex justify-content-center align-items-center"><Avatar source={props.avatar} title={props.author} width="48px" /></div>
        </div>
    )
}

export default Box;