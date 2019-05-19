import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from 'redux-form-validators';
import { Form, Input, Button } from 'reactstrap';


let OwnInput = (field) => (
    <Fragment>
        <Input {...field.input}  {...field} />
        {
            field.meta.touched && field.meta.error &&
            <span className="has-error text-danger">{field.meta.error}</span>
        }
    </Fragment>
)

let ChangePassword = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="old" component={OwnInput} type="text" validate={[required()]} placeholder="Enter your old password" />
            <Field name="new" component={OwnInput} type="text" validate={[required()]} placeholder="Enter your new password" />
            <Field name="conformNewPassword" component={OwnInput} type="text" validate={[required()]} placeholder="Enter your new password again" />
            <Button color="primary" className="w-100 mt-3" type="submit">Save</Button>
        </Form>
    )
}

export default reduxForm({
    form: 'ChangePassword'
})(ChangePassword)