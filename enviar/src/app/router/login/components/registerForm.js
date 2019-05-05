import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, email } from 'redux-form-validators';
import Select from 'react-select';
import {
    Form,
    Input,
    Button,
} from 'reactstrap';

const genderOptions = [
    {
        "label" : "Male",
        "value" : "m",
    },
    {
        "label" : "Female",
        "value" : "f",
    },
    {
        "label" : "Other",
        "value" : "o"
    }
];

let OwnInput = (field) => (
    <Fragment>
        <Input {...field.input}  {...field} />
        {
            field.meta.touched && field.meta.error &&
            <span className="has-error text-danger">{field.meta.error}</span>
        }
    </Fragment>
)

let CustomSelect = (props) =>
    <Fragment>
        <Select
            className="form-control"
            {...props}
            onChange={(value) => props.input.onChange(value)}
            onBlur={() => props.input.onBlur(props.input.value)}
            options={props.options}
            value={props.input.value}
        />
        {
            props.meta.touched && props.meta.error &&
            <span className="has-error text-danger">{props.meta.error}</span>
        }
    </Fragment>

let RegisterUser = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="name" component={OwnInput} type="text" validate={[required()]} placeholder="Name" />
            <Field name="email" component={OwnInput} type="email" validate={[required(), email()]} placeholder="Email" />
            <Field name="username" component={OwnInput} type="text" validate={[required()]} placeholder="Username" />
            <Field name="password" component={OwnInput} type="password" validate={[required()]} placeholder="Password" />
            <Field name="conformPassword" component={OwnInput} type="password" validate={[required()]} placeholder="Password again" />
            <Field name="country" component={OwnInput} type="text" validate={[required()]} placeholder="Country"/>
            <Field name="gender" component={CustomSelect} type="text" validate={[required()]} placeholder="Gender" options={genderOptions} />
            <Field name="dob" component={OwnInput} type="date" validate={[required()]} placeholder="Date of Birth" />
            <Button color="primary" className="w-100" type="submit">Register</Button>
        </Form>
    )
}

export default reduxForm({
    form: 'RegisterUser'
})(RegisterUser)