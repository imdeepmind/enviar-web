import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, length } from 'redux-form-validators';
import {
    Form,
    Input,
    Button,
} from 'reactstrap';

const adaptFileEventToValue = delegate => e => delegate(e.target.files[0]);

let OwnInput = (field) => (
    <Fragment>
        <Input {...field.input}  {...field} />
        {
            field.meta.touched && field.meta.error &&
            <span className="has-error text-danger">{field.meta.error}</span>
        }
    </Fragment>
)

const FileInput = ({ 
    input: { value: omitValue, onChange, onBlur, ...inputProps }, 
    meta: omitMeta, 
    ...props 
  }) => {
    return (
      <input
        onChange={adaptFileEventToValue(onChange)}
        onBlur={adaptFileEventToValue(onBlur)}
        type="file"
        {...props.input}
        {...props}
      />
    );
  };

let CreatePost = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>

            <Field name="img" component={FileInput} type="file" value={null} />
            <Field name="caption" component={OwnInput} type="textarea" validate={[required()]} placeholder="Add a caption for your post" />
            <Button color="primary" className="w-100" type="submit">Post</Button>
        </Form>
    )
}

export default reduxForm({
    form: 'CreatePost'
})(CreatePost)