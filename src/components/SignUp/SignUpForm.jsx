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
});

const SignUpForm = ({ onSubmit, errorMessage }) => {
  return (
    <View style={styles.component}>    
      {!errorMessage ? null :
        <Text errorMessage>{errorMessage}</Text>
      }
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <FormikTextInput name='passwordConfirmation' placeholder='Confirm password' secureTextEntry />
      <Button onPress={onSubmit}>Sign up</Button>
    </View>
  );
};

export default SignUpForm;