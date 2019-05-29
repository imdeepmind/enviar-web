import React from 'react';
import Moment from 'react-moment';

import { timeFormat } from '../../../../constants/configs';

const styleMessageRight = {
    borderBottomLeftRadius:"30px",
    borderTopLeftRadius:"30px",
    background:"deepskyblue",
    minWidth: "30%",
    maxWidth: "70%"
}

const styleMessageLeft = {
    borderBottomRightRadius:"30px",
    borderTopRightRadius:"30px",
    background:"#72ff72",
    minWidth: "30%",
    maxWidth: "70%"
}

const timeStyle = {
    color: "grey",
    fontSize: "0.6rem",
    fontStyle: "italic"
}

const Box = props => {
    return (
        props.leftSide ? 
        <div className="w-100 d-flex flex-column mb-3 text-left align-items-start">
            <small className="">{props.author}</small>
            <span className="p-2 text-white"  style={styleMessageLeft}>{props.message}{" "}<small style={timeStyle}><Moment format={timeFormat}>{props.createdAt}</Moment></small></span> 
        </div> : 
        <div className="w-100 d-flex flex-column mb-3 text-right align-items-end">
            <small className="">{props.author}</small>
            <span className="p-2 text-white"  style={styleMessageRight}>{props.message}{" "}<small style={timeStyle}><Moment format={timeFormat}>{props.createdAt}</Moment></small></span> 
        </div>

    )
}

export default Box;