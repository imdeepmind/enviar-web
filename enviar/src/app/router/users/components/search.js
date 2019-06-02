import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required, length } from 'redux-form-validators';
import {  Input, Button } from 'reactstrap';
import classnames from 'classnames';

const searchField = {
    width: "calc(100% - 40px)"
}

const searchButton = {
    width: "40px",
    height: "45px"
}

let OwnInput = (field) => (
    <div style={searchField}>
        <Input {...field.input}  {...field} className={classnames({'w-100' : true, 'is-invalid' : field.meta.touched && field.meta.error})} />
        {
            field.meta.touched && field.meta.error &&
            <div className="has-error invalid-feedback">{field.meta.error}</div>
        }
    </div>
)

let SearchForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit} className="d-flex mb-3">
            <Field name="q" component={OwnInput} type="text" validate={[required(), length({minimum: 4, maximum: 255})]}  placeholder="search users..." />
            <Button color="primary" disabled={!props.valid} style={searchButton} className="text-center d-flex justify-content-center" type="submit"><i className="fas fa-search"></i></Button>
        </form>
    )
}


export default reduxForm({
    form: 'SearchForm'
})(SearchForm);

