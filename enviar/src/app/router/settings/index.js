import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';

import TopNav from '../../container/topNav';
import FloatingActionButton from '../../container/floatingActionButton';
import ChangePasswordForm from './components/changePasswordForm';

import { changePassword } from '../../redux/actions';

class Settings extends Component{

    onChangePassword = (dt) => {
        const data = {
            oldPassword: dt.old,
            newPassword: dt.new,
            conformNewPassword: dt.conformNewPassword
        }
        this.props.changePassword(data);
    }
    render(){
        console.log(this.props);
        return(
            <Fragment>
                <TopNav history={this.props.history} />
                    <Container>
                        <h3>Change your password</h3>
                        <ChangePasswordForm onSubmit={this.onChangePassword} />
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
        changePassword
    }
)(Settings);