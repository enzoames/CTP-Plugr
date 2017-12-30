import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import validate from './RegisterValidation';
import { ReduxRenderInput, ReduxRenderSelect } from 'utils/renderform';
import { Link } from 'react-router';

class RegisterForm extends Component{
  constructor(props) {  
    super(props);
  }

  handleSubmit = (values) =>{
    //values.preventDefault()
    this.props.resetForm();
    //this.props.register(values);
    console.log("RegisterForm VALUES:", values);
  }

  render(){
    const { fields: { credential, firstname, lastname, username, email, password, confirmpassword }, handleSubmit, error} = this.props; 
    const mdsm_12 = "col-sm-12 col-md-12";
    const credentialOptions = [ 
      {label:'Athlete', value:'p', name:'credential'}, 
      {label:'Team Captain', value:'t', name:'credential'},
      {label:'League Organizer', value:'l', name:'credential'}
    ];

    return(
      <div className="register-form col-sm-12 col-md-6 col-md-offset-3">
        <form onSubmit={handleSubmit(this.handleSubmit)}>
          <ReduxRenderSelect field={credential} value={credential.value} options={credentialOptions} labelClassName={mdsm_12} label={"Who are you?"} inputClassName={mdsm_12} {...credential}/>
          <ReduxRenderInput field={firstname} labelClassName={mdsm_12} label={"First Name"} inputClassName={mdsm_12} />
          <ReduxRenderInput field={lastname} labelClassName={mdsm_12} label={"Last Name"} inputClassName={mdsm_12} />
          <ReduxRenderInput field={username} labelClassName={mdsm_12} label={"username"} inputClassName={mdsm_12} />
          <ReduxRenderInput field={email} labelClassName={mdsm_12} label={"Email"} inputClassName={mdsm_12} />
          <ReduxRenderInput field={password} labelClassName={mdsm_12} label={"Password"} inputClassName={mdsm_12} type={"password"} />
          <ReduxRenderInput field={confirmpassword} labelClassName={mdsm_12} label={"Confirm Password"} inputClassName={mdsm_12} type={"password"} />
          {error && <p className="text-danger"><strong>{error}</strong></p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}


export default reduxForm({
  form: 'RegisterForm',
  fields: ['credential', 'firstname', 'lastname', 'username', 'email', 'password', 'confirmpassword'],  
  validate: validate,
  forceUnregisterOnUnmount: true,
})(RegisterForm)





