import { View, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Button from '../Button';

const styles = StyleSheet.create({
    component: {
      marginLeft: 20,
      marginRight: 20,
    },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.component}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Button onPress={onSubmit}>Sign in</Button>
    </View>
  );
};

export default SignInForm;