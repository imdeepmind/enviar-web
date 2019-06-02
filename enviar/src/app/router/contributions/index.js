import React, { Component } from 'react';

class Contributors extends Component{
    render(){
        return(
            <div>
                <div id="contributors" className="w-100 mh-100v text-left p-3 d-flex align-items-start justify-content-center flex-column text-light">
                    <h1 className="text-light">Contributors</h1>
                    <p>All the contributors of this project except me</p>
                    <button style={{marginTop:"3px"}} onClick={this.props.history.goBack} className="border-0 text-white bg-transparent p-3 no-focus"><i className="fas fa-chevron-circle-left"></i></button>
                </div>
                <div className="w-100 mh-100v text-left p-3 d-flex align-items-start justify-content-center flex-column">
                    <div>Default Profile Avatar - Icons made by <a href="https://www.freepik.com/?__hstc=57440181.34da643cb6a07b340fde999b532ce749.1556902993149.1556902993149.1557681941053.2&__hssc=57440181.5.1557681941053&__hsfp=1705634725" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer" >CC 3.0 BY</a></div>
                    <div>On Error Post Image - Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer" >CC 3.0 BY</a></div>
                </div>
            </div>
        )
    }
}
export default Contributors;