import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Button } from 'reactstrap';
import classnames from 'classnames';

import { getMe } from '../../../app/redux/actions';

import FloatingActionButton from '../../container/floatingActionButton';
import Hero from './components/hero';
import Detail from './components/detail';
import AError from './components/error';

const loading = {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px'
}

const tabStyle = {
    marginRight: "-15px",
    marginLeft: "-15px"
}

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activeTab: '1'
        };
    }
    componentDidMount(){
        this.dataListRender();
    }
    toggle = tab => {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
    }
    buildAddress = () => {
        let arr = []
        const detail = this.props.meReducer.me;
        if (detail.city)
            arr.push(detail.city)
            
        if (detail.state)
            arr.push(detail.state)
        
        if (detail.country)
            arr.push(detail.country)

        return arr.join(', ');
    }
    dataListRender = () => {
        this.props.getMe();
    }
    render(){
        return (
            <Fragment>
                <Container>
                    {this.props.meReducer.loading ? <BeatLoader key={0} css={loading} /> : (
                        !this.props.meReducer.error ? 
                        <Fragment>
                             <Hero 
                                name={this.props.meReducer.me.name} 
                                username={this.props.meReducer.me.username} 
                                avatar={this.props.meReducer.me.avatar} 
                                history={this.props.history}
                                status={this.props.meReducer.me.status}
                                gender={this.props.meReducer.me.gender}
                            />
                            <div className="d-flex justify-content-between align-items-center" style={tabStyle}>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '1' })} onClick={() => { this.toggle('1'); }}><i className="fas fa-book-open"></i></Button>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '2' })} onClick={() => { this.toggle('2'); }}><i className="fas fa-user-friends"></i></Button>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '3' })} onClick={() => { this.toggle('3'); }}><i className="fas fa-users"></i></Button>
                                <Button className={classnames({ 'border-bottom border-primary': this.state.activeTab === '4' })} onClick={() => { this.toggle('4'); }}><i className="fas fa-user-slash"></i></Button>
                            </div>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Detail 
                                        location={this.buildAddress()} 
                                        dob={this.props.meReducer.me.dob} 
                                        bio={this.props.meReducer.me.bio}
                                    />
                                </TabPane>
                            </TabContent>



                            
                        </Fragment>
                        : <AError title={this.props.meReducer.error} />
                    )}
                    <FloatingActionButton history={this.props.history} />
                </Container>
            </Fragment>
            
        )
    }
}

const mapStateToProps = (state) => state;
  
export default connect(
    mapStateToProps,
    {
        getMe
    }
)(Me);