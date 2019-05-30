import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, length } from 'redux-form-validators';
import classnames from 'classnames';
import {
    Form,
    Input,
    Button,
} from 'reactstrap';

let OwnInput = (field) => (
    <Fragment>
        <Input {...field.input}  {...field} className={classnames({'mb-1' : true, 'is-invalid' : field.meta.touched && field.meta.error})} />
        {
            field.meta.touched && field.meta.error &&
            <div className="has-error invalid-feedback text-center">{field.meta.error}</div>
        }
    </Fragment>
)

let LoginUser = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="username" component={OwnInput} type="text" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Username" />
            <Field name="password" component={OwnInput} type="password" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Password" />
            <Button color="dark" disabled={!props.valid} className="w-100 mt-3" type="submit">Login</Button>
        </Form>
    )
}

export default reduxForm({
    form: 'LoginUser'
})(LoginUser)