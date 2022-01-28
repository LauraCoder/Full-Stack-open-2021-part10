import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';
import { Formik } from 'formik';

import { SIGN_UP } from '../../graphql/mutations';
import useSignIn from '../../hooks/useSignIn';
import SignUpForm from './SignUpForm';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username is too short!')
    .max(30, 'Username is too long!')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password is too short!')
    .max(50, 'Password is too long!')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match!')
    .required('Password confirmation is required'),
});

const initialValues = {
    username: '',
    password: '',
    passwordConfirmation: '',
};

const SignUp = () => {
  const [signUp] = useMutation(SIGN_UP);
  const [signIn] = useSignIn();
  const [ errorMessage, setErrorMessage ] = useState('');
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signUp({ 
        variables: {
          user: {
            username,
            password
          }
        }
      })
      if(data?.createUser) {
        const { data } = await signIn({ username, password });
        console.log(data);
        navigate("/", { replace: true });
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(e.message);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} errorMessage={errorMessage} />}
      </Formik>
    </>
  );
};

export default SignUp;