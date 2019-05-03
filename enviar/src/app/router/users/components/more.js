import React from 'react';
import { Card, CardTitle } from 'reactstrap';

const More = props => {
    return (
        <Card onClick={props.moreContent} className="cursor-pointer text-center"> 
            <CardTitle className="p-2">More</CardTitle>
        </Card>
    )
}

export default More;