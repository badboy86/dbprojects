import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }

    handleSumbit = event => {
        event.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSumbit}>
                     
                    <FormInput 
                    name="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='Email'
                    required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required />
                    <div className='sign-in-form-buttons'>
                        <CustomButton type="submit" >
                            Sign In
                        </CustomButton>

                        <CustomButton onClick={signInWithGoogle} isgooglesignIn>
                            Sign In with google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        );
    }
}

export default SignIn;