import React from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';

const New = props => {
    return (
        <Card className="p-3 text-center">
           <Link to="/post"><h4 style={{margin:"0px"}}><i className="fas fa-camera-retro pr-1"></i>New Post</h4></Link>
        </Card>
    )
}

export default New;