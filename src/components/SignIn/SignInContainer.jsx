import { Formik } from 'formik';
import { View } from 'react-native';
import Text from '../Text';
import SignInForm from './SignInForm';

const initialValues = {
  username: '',
  password: '',
};

const SignInContainer = ({ onSubmit, validationSchema, errorMessage }) => {

  return (
    <View>
      <Formik 
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
      {!errorMessage ? null :
        <Text errorMessage>{errorMessage}</Text>
      }
    </View>
  );
};

export default SignInContainer;