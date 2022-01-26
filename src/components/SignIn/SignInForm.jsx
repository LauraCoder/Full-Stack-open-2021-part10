import { Pressable, View, StyleSheet } from 'react-native';
import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';

const styles = StyleSheet.create({
    component: {
      marginLeft: 20,
      marginRight: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
        padding: 15,
        borderRadius: 5,
        backgroundColor: theme.colors.primary,
    },
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.component}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text color='white' fontWeight='bold'>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;