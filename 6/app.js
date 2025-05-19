import React, { useState } from 'react'; 
import './UseForm.css';  // Import the CSS file 
 
const UserForm = () => { 
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [showPassword, setShowPassword] = useState(false); 
  const [errors, setErrors] = useState({}); 
   
 const sanitizedName = name.trim(); 
    const sanitizedEmail = email.trim(); 
    const sanitizedPassword = password.trim(); 
 
 
  const validateEmail = (email) => { 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email); 
  }; 
 
  const validateForm = () => { 
   
    let isValid = true; 
    const newErrors = {}; 
 
    
    if (!sanitizedName) { 
      newErrors.name = 'Name is required'; 
      isValid = false; 
    } 
 

 
    if (!sanitizedEmail) { 
      newErrors.email = 'Email is required'; 
      isValid = false; 
    } else if (!validateEmail(sanitizedEmail)) { 
      newErrors.email = 'Invalid email format'; 
      isValid = false; 
    } 
 
    if (!sanitizedPassword) { 
      newErrors.password = 'Password is required'; 
      isValid = false; 
    } else if (sanitizedPassword.length < 6) { 
      newErrors.password = 'Password must be at least 6 characters long'; 
      isValid = false; 
    } 
 
    setErrors(newErrors); 
    return isValid; 
  }; 
 
  const handleSubmit = (event) => { 
    event.preventDefault(); 
    if (validateForm()) { 
      const sanitizedName = name.trim(); 
      const sanitizedEmail = email.trim(); 
      const sanitizedPassword = password.trim(); 
 
      console.log('Form submitted:', { 
        name: sanitizedName, 
        email: sanitizedEmail, 
        password: sanitizedPassword, 
 

      }); 
    } 
  }; 
 
  const handleInputChange = (event) => { 
    const { name, value } = event.target; 
    switch (name) { 
      case 'name': 
        setName(value); 
        break; 
      case 'email': 
        setEmail(value); 
        break; 
      case 'password': 
        setPassword(value); 
        break; 
      default: 
        break; 
    } 
    setErrors(prevErrors => { 
  const updatedErrors = Object.assign({}, prevErrors); 
  updatedErrors[name] = ''; 
  return updatedErrors; 
}); 
  }; 
 
  const toggleShowPassword = () => { 
    setShowPassword(!showPassword); 
  }; 
 
return ( 
    <form onSubmit={handleSubmit} className="form-container"> 
      <div className="form-group"> 
        <label htmlFor="name">Name:</label> 
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={name} 
          onChange={handleInputChange} 
          className={errors.name ? 'invalid' : ''} 
        /> 
        {errors.name && <p className="error-message">{errors.name}</p>} 
      </div> 
 
      <div className="form-group"> 
        <label htmlFor="email">Email:</label> 
        <input 
          type="email" 
          id="email" 
          name="email" 
          value={email} 
          onChange={handleInputChange} 
          className={errors.email ? 'invalid' : ''} 
        /> 
        {errors.email && <p className="error-message">{errors.email}</p>} 
      </div> 
 
      <div className="form-group"> 
        <label htmlFor="password">Password:</label> 
        <input 
          type={showPassword ? 'text' : 'password'} 
          id="password" 
          name="password" 
          value={password} 
          onChange={handleInputChange} 
          className={errors.password ? 'invalid' : ''} 
        /> 
        {errors.password && <p className="error-message">{errors.password}</p>} 
        <div className="password-toggle"> 
          <input 
            type="checkbox" 
            id="showPassword" 
            checked={showPassword} 
            onChange={toggleShowPassword} 
          /> 
          <label htmlFor="showPassword">Show Password</label> 
        </div> 
      </div> 
 
      <button type="submit" > 
        Submit 
      </button> 
    </form> 
  ); 
}; 
 
export default UserForm;