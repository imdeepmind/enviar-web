import React, { Fragment } from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, email, length } from 'redux-form-validators';
import { connect } from 'react-redux'
import { Form, Input, Button } from 'reactstrap';
import classnames from 'classnames';

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
        <Input {...field.input}  {...field} className={classnames({'mb-1' : true, 'is-invalid' : field.meta.touched && field.meta.error})} />
        {
            field.meta.touched && field.meta.error &&
            <div className="has-error invalid-feedback">{field.meta.error}</div>
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
            <div className="has-error invalid-feedback">{field.meta.error}</div>
        }
    </Fragment>
)

let InfoForm = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={handleSubmit}>
            <b>a little bit about you</b>
            <Field name="name" component={OwnInput} type="text" validate={[required(), length({minimum: 4, maximum: 255})]} placeholder="Name" />
            <Field name="email" component={OwnInput} type="email" validate={[required(), email(), length({minimum: 4, maximum: 255}) ]} placeholder="Email" />
            <Field name="gender" component={selectBox} type="select" validate={[required()]} placeholder="Gender" options={genderOptions} />
            <Field name="dob" component={OwnInput} type="date" validate={[required()]} placeholder="Date of Birth" />

            <b>share a little bit of you</b>
            <Field name="status" component={OwnInput} type="textarea" validate={[required(),  length({minimum: 4, maximum: 255}) ]} placeholder="Status"/>
            <Field name="bio" component={OwnInput} type="textarea" placeholder="Bio" validate={[length({allowBlank: true, minimum: 24, maximum: 1024})]}/>
            
            <b>where you live</b>
            <Field name="city" component={OwnInput} type="text" placeholder="City" validate={[ length({allowBlank: true, minimum: 4, maximum: 255})]}/>
            <Field name="state" component={OwnInput} type="text" placeholder="State" validate={[ length({allowBlank: true, minimum: 4, maximum: 255})]} />
            <Field name="country" component={OwnInput} type="text" validate={[required(), length({minimum: 4, maximum: 255})]} placeholder="Country"/>
  
            <Button color="primary" disabled={!props.valid} className="w-100 mt-3" type="submit">Save</Button>
        </Form>
    )
}


InfoForm =  reduxForm({
    form: 'InfoForm',
    keepDirtyOnReinitialize: true,
    enableReinitialize: true,
    updateUnregisteredFields: true
})(InfoForm)

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