import React, { Fragment } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { required, file } from 'redux-form-validators';
import { connect } from 'react-redux'
import { Form, Button, Label } from 'reactstrap';
import classnames from 'classnames';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

const inputFileStyle = {
  display: 'none'
}

const inputFileLabelStyle = {
  width: '100%',
  background: '#f7f7f9',
  border: '0 solid #ced4da',
  overflow: 'hidden'
}

const previewImageStyle = {
  width: '100%'
}

const FileInput = ({ 
    input: { value: omitValue, onChange, onBlur, ...inputProps }, 
    meta: omitMeta, 
    ...props 
  }) => {
    // console.log('omit data',omitMeta)
    //TODO: Need to fix the touched issue
    return (
      <Fragment>
        <input
          className={classnames({'mb-1' : true, 'is-invalid' : !omitMeta.valid && omitMeta.error})}
          onChange={adaptFileEventToValue(onChange)}
          onBlur={adaptFileEventToValue(onBlur)}
          type="file"
          {...props.input}
          {...props}
        />
        {
            !omitMeta.valid && omitMeta.error &&
            <div className="has-error text-danger">{omitMeta.error}</div>
        }
      </Fragment>
    );
  };

let CreatePost = (props) => {
    const { handleSubmit, image } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Label for="img-upload" style={inputFileLabelStyle}>
            {image ?
               <img src={URL.createObjectURL(image)} style={previewImageStyle} alt="preview" /> : 
               (
                <div className="d-flex justify-content-center align-items-center flex-column text-center p-3 pt-5 pb-5  "> 
                  <i className="fas fa-cloud-upload-alt" style={{fontSize:"3em"}}></i>
                  Select a display picture to upload
                </div>
               )}
            </Label>
            <Field name="avatar" id="img-upload" accept="image/*" style={inputFileStyle} component={FileInput} type="file" value={null} validate={[required(),file({ maxSize: '512KB' }), file({ minSize: '3KB' })]} />
            <Button color="primary" disabled={!props.valid} className="w-100 mt-3" type="submit">Save</Button>
        </Form>
    )
}


CreatePost=  reduxForm({
    form: 'CreatePost'
})(CreatePost)

const selector = formValueSelector('CreatePost');

CreatePost = connect(
  state => {
    const image = selector(state, 'avatar');
    return {image};
  }
)(CreatePost);

export default CreatePost;

