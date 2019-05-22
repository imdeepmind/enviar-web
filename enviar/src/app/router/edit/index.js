import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';
import Avatar from '../../components/avatar';
import DpForm from './components/dpForm';
import InfoForm from './components/infoForm';

import { getMe, editDp, editInfo } from '../../redux/actions';

const loading = {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px'
}

class Edit extends Component{
    constructor(props) {
        super(props);
        this.state = {
          modalDp: false
        };
      }
    
    toggleDpModal = () => {
        this.setState(prevState => ({
            modalDp: !prevState.modalDp
        }));
    }
    componentDidMount(){
        this.props.getMe();
    }
    onImageUpdate = avatar => {
        this.props.editDp(avatar);
        this.toggleDpModal();
    }
    onInfoUpdate = data => {
        this.props.editInfo(data);
    }
    render(){
        console.log('asd',this.state);
        return(
            <Fragment>
                <TopNav history={this.props.history} />
                <Container>
                    {this.props.meReducer.loading ? <BeatLoader key={0} css={loading} /> : 
                        this.props.meReducer.error ? "Error" : 
                        <Row>
                            <Modal isOpen={this.state.modalDp} toggle={this.toggleDpModal}>
                                <ModalHeader toggle={this.toggleDpModal}>Update your display picture</ModalHeader>
                                <ModalBody>
                                    <DpForm onSubmit={this.onImageUpdate} />
                                </ModalBody>
                            </Modal>

                            <Col xs="12" md="6" className="text-center" onClick={this.toggleDpModal}>
                                <Avatar source={this.props.meReducer.me.avatar} title={this.props.meReducer.me.name} width="120px" quality="medium"/>
                            </Col>
                            <Col xs="12" md="6" className="text-center mt-3">
                                <h3>{this.props.meReducer.me.name}</h3>
                                <h4>@{this.props.meReducer.me.username}</h4>    
                            </Col>
                            <Col xs="12">
                                <InfoForm onSubmit={this.onInfoUpdate} details={this.props.meReducer.me} />
                            </Col>
                        </Row>
                    }
                </Container>
                <FloatingActionButton history={this.props.history} />
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        getMe, editDp, editInfo
    }
)(Edit);