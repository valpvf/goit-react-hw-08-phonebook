import { AuthForm } from 'components';

import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';

const optionsRegisterForm = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    placeholder: 'Enter your name',
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    placeholder: 'Enter your email',
  },
  {
    label: 'Password',
    type: 'text',
    name: 'password',
    placeholder: 'Enter your password more then 8 characters',
  },
];

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleRegisterUser = data => {
    dispatch(registerUser(data));
  };

  return (
    <AuthForm
      onSubmit={handleRegisterUser}
      submitTitle="Register"
      options={optionsRegisterForm}
      initialState={initialState}
    />
  );
};

export default RegisterPage;
