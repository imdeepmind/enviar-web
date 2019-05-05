import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, length } from 'redux-form-validators';
import {
    Form,
    Input,
    Button,
} from 'reactstrap';

let OwnInput = (field) => (
    <Fragment>
        <Input {...field.input}  {...field} />
        {
            field.meta.touched && field.meta.error &&
            <span className="has-error text-danger">{field.meta.error}</span>
        }
    </Fragment>
)

let LoginUser = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="username" component={OwnInput} type="text" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Username" />
            <Field name="password" component={OwnInput} type="password" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Password" />
            <Button color="primary" className="w-100" type="submit">Login</Button>
        </Form>
    )
}

export default reduxForm({
    form: 'LoginUser'
})(LoginUser)