import React, { Fragment, Component } from 'react';

class Support  extends Component{
    render(){
        return(
            <Fragment>
                <div id="support-hero" className="w-100 mh-100v text-light text-center d-flex justify-content-center align-items-center flex-column p-3">
                    <h1 className="text-light">SUPPORT US</h1>
                    <p>
                        I really appreciate that you want to support this project. The best way to support this project is to use this project, share this project. Furthermore, if you are a developer, then please check the project at GitHub.
                    </p>  
                    <button style={{marginTop:"3px"}} onClick={this.props.history.goBack} className="border-0 text-white bg-transparent p-3"><i className="fas fa-chevron-circle-left"></i></button>
                </div>
            </Fragment>
        )
    }
}

export default Support;