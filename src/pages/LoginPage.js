import { AuthForm } from 'components';

import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';

const optionsLoginForm = [
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
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleLoginUser = data => {
    dispatch(loginUser(data));
  };

  return (
    <AuthForm
      onSubmit={handleLoginUser}
      submitTitle="Login"
      options={optionsLoginForm}
      initialState={initialState}
    />
  );
};

export default LoginPage;
