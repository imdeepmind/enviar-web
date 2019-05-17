import React from 'react';
import Moment from 'react-moment';
import { Row, Col } from 'reactstrap';

import { dateFormat } from '../../../../constants/configs';

const Detail = props => {
    return(
        <Row className="pt-3 pr-2 pl-2">
            {props.location ? (
                <Col xs="12">
                    <h2><i className="fas fa-map-marker-alt"></i>{" "}Lives in</h2>
                    <h4>{props.location}</h4>
                </Col>
            ) : ""}

            {props.dob ? (
                <Col xs="12">
                    <h2><i className="fas fa-birthday-cake"></i>{" "}Born</h2>
                    <h4><Moment format={dateFormat}>{props.dob}</Moment></h4>
                </Col>
            ) : ""}

            {props.bio ? (
                <Col xs="12">
                    <h2><i className="fas fa-book"></i>{" "}Bio</h2>
                    <h4>{props.bio}</h4>
                </Col>
            ) : ""}
            
        </Row>
    )
}

export default Detail;