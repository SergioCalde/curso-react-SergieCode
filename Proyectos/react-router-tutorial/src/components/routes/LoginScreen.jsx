import { useContext } from "react";
import { useForm } from "../hooks/useForm"
import { UserContext } from "../context/UserContext";

export const LoginScreen = () => {

  const initialForm = {
    name: '',
    technology: '',
    email: '',
    social: ''
  };

  const { formState, name, technology, email, social, onInputChange } = useForm(initialForm);

  const { setUsuario } = useContext( UserContext );

  const onSubmit = ( event ) => {
    event.preventDefault();
    
    setUsuario(formState);

  }

  return (
    <form className="container" onSubmit={onSubmit}>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          type="text" 
          className="form-control" 
          name="name" 
          value={name}
          onChange={onInputChange}
          />
      </div>

      <div className="mb-3">
        <label htmlFor="technology" className="form-label">Technology</label>
        <input 
          type="text" 
          className="form-control" 
          name="technology" 
          value={technology}
          onChange={onInputChange}
          />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input 
          type="email" 
          className="form-control" 
          name="email"  
          value={email}
          onChange={onInputChange}
          />
      </div>

      <div className="mb-3">
        <label htmlFor="social" className="form-label">Social Media</label>
        <input 
          type="text" 
          className="form-control" 
          name="social" 
          value={social}
          onChange={onInputChange}
          />
      </div>

      <button type="submit" className="btn btn-primary">Register</button>
  </form>
  )
}
