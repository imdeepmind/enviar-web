import React, { Component, Fragment } from 'react';

import { RESOURCE } from '../../../constants/endpoints'
import UserBlack from '../../../assets/img/user_black.png';
import UserWhite from '../../../assets/img/user_white.png';

class Avatar extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgClass: "rounded-circle border"
        }
    }
    imageErr = (event, color) => {
        event.target.src = color === 'light' ? UserWhite : UserBlack;
        this.setState({
            imgClass: "rounded-circle"
        });
    }

    render(){
        const width = this.props.width ? this.props.width : "48px";
        const style = {
            width: width,
            padding: "1px"
        }
        const border = this.props.border === "light" ? "border-white" : "border-primary";  
        const medium = this.props.quality === "medium" ? "medium" : "small";
        return(
            <Fragment>
                {this.props.source ? (
                    <img 
                        className={this.state.imgClass + " " + border} 
                        style={style} 
                        src={`${RESOURCE}/profile/${this.props.source}/${medium}`} 
                        alt={this.props.title}
                        onError={(e) => this.imageErr(e, this.props.border)}
                    />
                ) : (
                    <img 
                        className={"rounded-circle"} 
                        style={style} 
                        src={this.props.border === 'light' ? UserWhite : UserBlack} 
                        alt={this.props.title}
                        onError={(e) => this.imageErr(e, this.props.border)}
                    />
                )}
            </Fragment>
        )
    }
}
export default Avatar;