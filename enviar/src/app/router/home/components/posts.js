import React from 'react';
import {
    Card, CardBody, CardImg, CardTitle
} from 'reactstrap';

import ProfileCard from '../../../components/profileCard';

import {  RESOURCE } from '../../../../constants/endpoints';



const Post = (props) => {
    return (
        <Card className="mb-4"> 
            <div className="p-2">
                <ProfileCard 
                    name={props.author} 
                    avatar={props.avatar} 
                    text={props.dateTime} />
            </div>
            <CardImg top width="100%" src={`${RESOURCE}/post/${props.postImage}/medium`} alt={props.caption} />
            <CardBody>
                <CardTitle>{props.caption}</CardTitle>
            </CardBody>
            <div className="d-flex justify-content-between align-items-center pl-3 pr-3 pb-2 pt-2 border-top" style={{fontSize:"1.2em"}}>
                Will be added soon
                {/* <div>
                    <i className="far fa-heart class-cursor-pointer" onClick={props.likeMethod}></i> <span>{props.likes} likes</span> 
                </div>
                <div>
                    <i className="far fa-comment-dots float-right class-cursor-pointer" onClick={props.commentMethod}></i>
                </div> */}
            </div>
        </Card>
    )
}

export default Post;