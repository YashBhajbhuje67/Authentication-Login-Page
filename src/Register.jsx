import React, {useState} from 'react';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }
  return (
    <div className='auth-form-container'>
        <h2>Register</h2>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <input value={name} onChange={(e)=> setName(e.target.value)} placeholder='full Name' id='name' name='name'/>
            <label htmlFor='email'>email</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' placeholder='yourEmailAddress' id='email' name='email'/>
            <label htmlFor='email'>password</label>
            <input value={pass} onChange={(e)=> setPass(e.target.value)} type='password' placeholder='********' id='password' name='password'/>
            <button type="submit">Register</button>
        </form>
        <button className='link-btn' onClick={()=> props.onFormSwitch('login')}>Already Have an Account? Login here</button>
    </div>
  )
}

export default Register
