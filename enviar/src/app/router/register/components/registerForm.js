import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
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
            <Row>
                <Col xs="12" md="6">
                    <Field name="name" component={OwnInput} type="text" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Name" />
                </Col>
                <Col xs="12" md="6">
                    <Field name="email" component={OwnInput} type="email" validate={[required(), email(), length({ min: 4, max: 24 })]} placeholder="Email" />
                </Col>
                <Col xs="12" md="6">
                    <Field name="username" component={OwnInput} type="text" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Username" />
                </Col>
                <Col xs="12" md="6">
                    <Field name="password" component={OwnInput} type="password" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Password" />
                </Col>
                <Col xs="12" md="6">
                    <Field name="gender" component={selectBox} type="select" validate={[required()]} placeholder="Gender" options={genderOptions} />
                </Col>
                <Col xs="12" md="6">
                    <Field name="dob" component={OwnInput} type="date" validate={[required()]} placeholder="Date of Birth" />
                </Col>
                <Col xs="12">
                    <Field name="country" component={OwnInput} type="text" validate={[required(), length({ min: 4, max: 24 })]} placeholder="Country"/>
                </Col>
            </Row>
            <Button color="primary" disabled={!props.valid} className="w-100 mt-3" type="submit">Register</Button>
            <Link to="/login" className="font-weight-bold text-decoration-none">
                    <Button color="primary" outline={true} className="w-100 mt-3  border border-primary"> or Login</Button>
                </Link>
        </Form>
    )
}

export default reduxForm({
    form: 'RegisterUser'
})(RegisterUser)