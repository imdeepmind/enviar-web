import React from 'react';
import { Link } from 'react-router-dom';

// import Avatar from '../../../components/avatar';

const Head = props => {
    return (
        <div className="bg-primary d-flex align-items-center p-3" id="chat-head">
            <button onClick={() => props.history.goBack()} className="border-0 text-white bg-transparent"><i style={{fontSize:"1.2rem"}} className="fas fa-chevron-circle-left"></i></button>
            {/* <Avatar source={props.avatar} title={props.name} border="light" /> */}
            <Link to={`users/${props.username}`} className="text-light" style={{fontSize:"1.1rem"}}>{props.name}</Link>
        </div>
    )
}

export default Head;