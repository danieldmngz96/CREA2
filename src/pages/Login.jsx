import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import '../styles/pages/login.css';

const TextField = ({ id, name, legend, type, placeholder, register }) => {
  const [active, setActive] = useState(false);

  return (
    <fieldset className={`form-textfield ${active ? 'active' : ''}`}>
      <legend className='form-legend'>{legend}</legend>
      <input
        id={id || ''}
        name={name || ''}
        type={type || 'text'}
        className='form-input'
        placeholder={placeholder || ''}
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        {...register('email', {required: true, maxLength: 80})}
      />
    </fieldset>
  );


}

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    window.location.href = '/dashboard';
  }

  return (
    <>
      <Header />
      <section className='Login'>
        <h1>¡Bienvenido!</h1>
        <form className='form-control'  onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id='Email'
            type='email'
            name='email'
            legend='Correo *'
            register={register}
            placeholder='Correo electronico'
          />
          <fieldset className='form-textfield'>
            <legend className='form-legend'>Contraseña *</legend>
            <input
              id='Password'
              type='password'
              name='password'
              className='form-input'
              placeholder='Contraseña'
              {...register('password', {required: true, maxLength: 80})}
            />
          </fieldset>
          <button type='submit' className='form-button'>
            Continuar
          </button>
        </form>
      </section>
    </>
  );
}

export default Login;