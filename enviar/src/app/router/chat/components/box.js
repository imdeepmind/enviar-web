import React from 'react';
import Moment from 'react-moment';

import { timeFormat } from '../../../../constants/configs';

const Box = props => {
    return (
        props.leftSide ? 
        <div className="w-100 d-flex flex-column mb-3 text-left align-items-start" id="message">
            <small className="">{props.author}</small>
            <span className="p-2 message-left">{props.message}{" "}<small className="time"><Moment format={timeFormat}>{props.createdAt}</Moment></small></span> 
        </div> : 
        <div className="w-100 d-flex flex-column mb-3 text-right align-items-end" id="message">
            <small className="">{props.author}</small>
            <span className="p-2 message-right" >{props.message}{" "}<small className="time"><Moment format={timeFormat}>{props.createdAt}</Moment></small></span> 
        </div>

    )
}

export default Box;