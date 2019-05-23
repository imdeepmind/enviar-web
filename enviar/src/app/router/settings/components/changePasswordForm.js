import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from 'redux-form-validators';
import { Form, Input, Button } from 'reactstrap';
import classnames from 'classnames';

let OwnInput = (field) => (
    <Fragment>
        <Input {...field.input}  {...field} className={classnames({'mb-1' : true, 'is-invalid' : field.meta.touched && field.meta.error})} />
        {
            field.meta.touched && field.meta.error &&
            <div className="has-error invalid-feedback">{field.meta.error}</div>    
        }
    </Fragment>
)

let ChangePassword = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="old" component={OwnInput} type="password" autoComplete="new-password" validate={[required()]} placeholder="Enter your old password" />
            <Field name="new" component={OwnInput} type="password" autoComplete="new-password" validate={[required()]} placeholder="Enter your new password" />
            <Field name="conformNewPassword" component={OwnInput} type="password" autoComplete="new-password" validate={[required()]} placeholder="Enter your new password again" />
            <Button color="primary" disabled={!props.valid} className="w-100 mt-3" type="submit">Save</Button>
        </Form>
    )
}

export default reduxForm({
    form: 'ChangePassword'
})(ChangePassword)