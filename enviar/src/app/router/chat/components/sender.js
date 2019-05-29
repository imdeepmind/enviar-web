import React, {Component} from 'react';
import { Input, Button, Form } from 'reactstrap';

const sender = {
    position:"absolute",
    bottom: "0px",
    height: "46px"
}
const senderButton = {
    width: "30px",
    height: "45px",
    background: "#f7f7f9"
}

const senderField = {
    height: "45px",
    width: "calc(100%-30px)"
}

class Sender extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: ""
        }
    }
    handleMessageChange = e => {
        this.setState({message:e.target.value});
    }
    sendMessage = (e)  => {
        e.preventDefault();
        if (this.state.message){
            this.props.onSubmit(this.state.message);
            this.setState({message:""})
        }
    }
    render(){
       return (
        <Form className="d-flex border-top border-primary w-100" style={sender} onSubmit={this.sendMessage}>
            <Input style={senderField} className="no-focus" value={this.state.message} onChange={this.handleMessageChange} placeholder="say something..."/>
            <Button  type="submit" style={senderButton} className="text-center d-flex justify-content-center no-focus" ><i className="fas fa-paper-plane" onClick={this.sendMessage}></i></Button>
        </Form>
       )
    }
}

export default Sender;