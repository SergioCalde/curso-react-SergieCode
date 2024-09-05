import { useRef, useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormComponent = () => {

    const focusRef = useRef();

    // console.log(focusRef);

    const initialForm = {
        userName: '',
        email: '',
        password: ''
    };

    const { userName, email, password, onInputChange } = useForm( initialForm );

    // const { userName, email, password } = formState;

    const onSubmit = ( event ) => {
        event.preventDefault();
        console.log(userName, email, password)
    };

    useEffect(() => {
      focusRef.current.focus();
    }, [])
    

  return (
        <form onSubmit={ onSubmit }>
            <div className="mb-3">
            <label 
                htmlFor="userName" 
                className="form-label"
                >User name 
            </label>
            <input 
                type="text" 
                className="form-control" 
                name="userName"
                placeholder="Enter your Username"
                value={ userName }
                onChange={ onInputChange }/>
            </div>
            <div className="mb-3">
            <label 
                htmlFor="exampleInputEmail1" 
                className="form-label"
                >Email address
            </label>
            <input 
                ref = { focusRef }
                type="email" 
                className="form-control" 
                name="email" 
                aria-describedby="emailHelp"
                placeholder="Enter your email"
                value={ email }
                onChange={ onInputChange }/>
            </div>
            <div className="mb-3">
            <label 
                htmlFor="exampleInputPassword1" 
                className="form-label"
                >Password
            </label>
            <input 
                type="password" 
                className="form-control" 
                name="password"
                placeholder="Enter your password"
                value={ password }
                onChange={ onInputChange }/>
            </div>
            <button 
                type="submit" 
                className="btn btn-primary"
                >Submit
            </button>
        </form>
  )
}
