import { useState } from 'react';
import * as yup from 'yup';

import useSignIn from '../../hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInContainer from './SignInContainer';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Username is too short')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password is too short')
    .required('Password is required'),
});

const SignIn = () => {
  const [signIn] = useSignIn();
  let navigate = useNavigate();
  const [ errorMessage, setErrorMessage ] = useState('');

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate("/", { replace: true });
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }    
  };

  return <SignInContainer onSubmit={onSubmit} validationSchema={validationSchema} errorMessage={errorMessage} />
};

export default SignIn;