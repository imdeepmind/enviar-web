import React from 'react';
import Moment from 'react-moment';
import ImageLoader from 'react-loading-image';
import { BounceLoader} from 'react-spinners';
import {
    Card, CardBody, CardTitle
} from 'reactstrap';

import ProfileCard from '../../../components/profileCard';

import {  RESOURCE } from '../../../../constants/endpoints';

import { dateTimeFormat } from '../../../../constants/configs';

import PostImage from '../../../../assets/img/post.png';
// author -<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

const imageErr = (event) => {
    event.target.src=PostImage;
}

const style = {
    height: "343px"
}

const Post = (props) => {
    return (
        <Card className="mb-4"> 
            <div className="p-2">
                <ProfileCard 
                    name={props.author} 
                    avatar={props.avatar} 
                    text={props.status} />
            </div>
            <ImageLoader
                className="w-100 h-auto"
                src={`${RESOURCE}/post/${props.postImage}/medium`}
                onError={imageErr}
                loading={() => <div className="d-flex justify-content-center align-items-center w-100"  style={style} ><BounceLoader key={0} /></div>}
            />
            <CardBody>
                <CardTitle>
                    {props.caption}
                    <br /> <small><Moment format={dateTimeFormat}>{props.dateTime}</Moment></small>
                </CardTitle>
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