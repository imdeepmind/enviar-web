import React, { Fragment } from 'react'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { required, email } from 'redux-form-validators';
import { connect } from 'react-redux'
import { Form, Input, Button, Label } from 'reactstrap';

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

const formatDate = date => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

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

let InfoForm = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <Field name="name" component={OwnInput} type="text" validate={[required()]} placeholder="Name" />
            <Field name="email" component={OwnInput} type="email" validate={[required(), email()]} placeholder="Email" />
            
            <Field name="city" component={OwnInput} type="text" placeholder="City"/>
            <Field name="state" component={OwnInput} type="text" placeholder="State"/>
            <Field name="country" component={OwnInput} type="text" validate={[required()]} placeholder="Country"/>
            
            
            <Field name="gender" component={selectBox} type="select" validate={[required()]} placeholder="Gender" options={genderOptions} />
            <Field name="dob" component={OwnInput} type="date" validate={[required()]} placeholder="Date of Birth" />

            <Field name="status" component={OwnInput} type="textarea" validate={[required()]} placeholder="Status"/>
            <Field name="bio" component={OwnInput} type="textarea" placeholder="Bio"/>

            <Button color="primary" className="w-100 mt-3" type="submit">Save</Button>
        </Form>
    )
}


InfoForm =  reduxForm({
    form: 'InfoForm',
    keepDirtyOnReinitialize: true,
    enableReinitialize: true,
    updateUnregisteredFields: true
})(InfoForm)

const selector = formValueSelector('InfoForm')

const mapStateToProps = (state, props) => {
    let dob = new Date(props.details.dob);
    return {
        initialValues: {
            ...props.details,
            dob: formatDate(dob)
        }
    }
}
InfoForm = connect(mapStateToProps, {})(InfoForm)

export default InfoForm;