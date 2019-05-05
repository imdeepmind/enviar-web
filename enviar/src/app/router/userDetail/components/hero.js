import React from 'react';
import { Row, Col } from 'reactstrap';

import Avatar from '../../../components/avatar';

const styleHero = {
    'background' : 'linear-gradient(to right, #4A00E0, #8E2DE2)',
    'height'     : '100vh',
    'width'      : '100%' 
}

const Hero = (props) => {
    return (
        <div className="d-flex align-items-center justify-content-center flex-column p-5 text-light text-center" style={styleHero}>
            <Avatar source={props.avatar} title={props.name}/>
            <h1 className="text-light">{props.name}</h1>
            <h3 className="text-light">@{props.username}</h3>
        </div>
    )
}

export default Hero;