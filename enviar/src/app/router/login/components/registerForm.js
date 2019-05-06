import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, email } from 'redux-form-validators';
import {
    Form,
    Input,
    Button,
} from 'reactstrap';

const genderOptions = [
    {
        "label" : "Gender",
        "value" : ""
    },
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

let selectBox = (field) => (
    <Fragment>
        <Input {...field.input}  {...field}>
            {field.options.map(val => {
                return <option key={val.value} value={val.value}>{val.label}</option>
            })}
        </Input>
        {
            field.meta.touched && field.meta.error &&
            <span className="has-error text-danger">{field.meta.error}</span>
        }
    </Fragment>
)


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
            <Field name="gender" component={selectBox} type="select" validate={[required()]} placeholder="Gender" options={genderOptions} />
            <Field name="dob" component={OwnInput} type="date" validate={[required()]} placeholder="Date of Birth" />
            <Button color="primary" className="w-100" type="submit">Register</Button>
        </Form>
    )
}

export default reduxForm({
    form: 'RegisterUser'
})(RegisterUser)