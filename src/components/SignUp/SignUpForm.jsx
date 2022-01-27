import FormikTextInput from '../FormikTextInput';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import Button from '../Button';

const styles = StyleSheet.create({
  component: {
    backgroundColor: theme.colors.white,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  errorMessage: {
    color: theme.colors.warning,
    paddingTop: 10,
    textAlign: 'center',
  }
});

const SignUpForm = ({ onSubmit, error }) => {
  return (
    <View style={styles.component}>    
      {error &&
        <Text style={styles.errorMessage}>{error.message}</Text>
      }
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <FormikTextInput name='passwordConfirmation' placeholder='Confirm password' secureTextEntry />
      <Button onPress={onSubmit}>Sign up</Button>
    </View>
  );
};

export default SignUpForm;