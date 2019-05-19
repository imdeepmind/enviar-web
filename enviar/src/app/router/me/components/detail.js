import React from 'react';
import Moment from 'react-moment';
import { Row, Col } from 'reactstrap';

import { dateFormat } from '../../../../constants/configs';

const Detail = props => {
    return(
        <Row className="pt-3 pr-2 pl-2">
            {props.location ? (
                <Col xs="12">
                    <h3><i className="fas fa-map-marker-alt"></i>{" "}Lives in</h3>
                    <h5>{props.location}</h5>
                </Col>
            ) : ""}

            {props.dob ? (
                <Col xs="12">
                    <h3><i className="fas fa-birthday-cake"></i>{" "}Born</h3>
                    <h5><Moment format={dateFormat}>{props.dob}</Moment></h5>
                </Col>
            ) : ""}

            {props.bio ? (
                <Col xs="12">
                    <h3><i className="fas fa-book"></i>{" "}Bio</h3>
                    <h5>{props.bio}</h5>
                </Col>
            ) : ""}
            
        </Row>
    )
}

export default Detail;