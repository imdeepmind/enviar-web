import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, email, length } from 'redux-form-validators';
import classnames from 'classnames';
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
        <Input {...field.input}  {...field} className={classnames({'mb-1' : true, 'is-invalid' : field.meta.touched && field.meta.error})} />
        {
            field.meta.touched && field.meta.error &&
            <div className="has-error invalid-feedback text-center">{field.meta.error}</div>
        }
    </Fragment>
)

let selectBox = (field) => (
    <Fragment>
        <Input {...field.input}  {...field} className={classnames({'mb-1' : true, 'is-invalid' : field.meta.touched && field.meta.error})} >
            {field.options.map(val => {
                return <option key={val.value} value={val.value}>{val.label}</option>
            })}
        </Input>
        {
            field.meta.touched && field.meta.error &&
            <div className="has-error invalid-feedback text-center">{field.meta.error}</div>
        }
    </Fragment>
)


let RegisterUser = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="name" component={OwnInput} type="text" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Name" />
            <Field name="email" component={OwnInput} type="email" validate={[required(), email(), length({ min: 4, max: 24 })]} placeholder="Email" />
            <Field name="username" component={OwnInput} type="text" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Username" />
            <Field name="password" component={OwnInput} type="password" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Password" />
            <Field name="conformPassword" component={OwnInput} type="password" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Password again" />
            <Field name="country" component={OwnInput} type="text" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Country"/>
            <Field name="gender" component={selectBox} type="select" validate={[required()]} placeholder="Gender" options={genderOptions} />
            <Field name="dob" component={OwnInput} type="date" validate={[required()]} placeholder="Date of Birth" />
            <Button color="dark" disabled={!props.valid} className="w-100 mt-3" type="submit">Register</Button>
        </Form>
    )
}

export default reduxForm({
    form: 'RegisterUser'
})(RegisterUser)