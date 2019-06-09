import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Widget, toggleWidget, addResponseMessage, addUserMessage } from 'react-chat-widget';

import { getChat, usersIndividual, sendMessage } from '../../redux/actions';
import { defaultChatsSize } from '../../../constants/configs';

const loading = {
    display: 'flex',
    justifyContent: 'center',
}

let chatsLoaded = false;

class Chat extends Component{
    componentDidMount(){
        toggleWidget();
        this.props.usersIndividual({username: this.props.match.params.username}, this.props.history);
        this.dataListRender();
    }

    componentWillReceiveProps(nextProps){
        if (!nextProps.chatsReducer.loading && nextProps.chatsReducer.chats.length > 0 && !chatsLoaded){
            chatsLoaded = true;
            nextProps.chatsReducer.chats.map(val => {
                if (val.username === this.props.match.params.username) addResponseMessage(val.message);
                else addUserMessage(val.message);
                return 0; 
            })
        }
    }

    componentWillUnmount(){
        toggleWidget();
    }

    dataListRender(){
        //TODO: This will load only the last 50 messages. As of now there is no way to retrieve more older messages. 
        // I need to add a way to get those old messages
        const data = {
            page: 0,
            limit: defaultChatsSize,
            username: this.props.match.params.username
        }
        this.props.getChat(data, this.props.history);
    }

    sendMessage = (message) => {
        const data = {
            message,
            username:  this.props.match.params.username
        }
        this.props.sendMessage(data, this.props.history);
    }
    render(){
        console.log(this.props);
        return(
            <div>
                {this.props.userReducer.loading ? <BeatLoader css={loading} /> :
                    <Widget 
                        fullScreenMode={true}
                        handleNewUserMessage={this.sendMessage} 
                        showCloseButton={false}
                        title={this.props.userReducer.user.name}
                        subtitle={this.props.userReducer.user.status}
                    /> 
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        getChat, usersIndividual, sendMessage
    }
)(Chat);