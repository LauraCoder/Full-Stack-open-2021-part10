import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  inputField: {
    backgroundColor: theme.colors.white,
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    color: theme.colors.textSecondary,
  },
  warning: {
    borderWidth: 1,
    borderColor: theme.colors.warning,
  }
});  

const TextInput = ({ whiteInput, style, error, ...props }) => {
  const textInputStyle = [
    whiteInput && styles.inputField,
    error && styles.warning,
    style,
  ];

  return <NativeTextInput 
    style={textInputStyle}
    error={error}
    {...props} 
  />;
};

export default TextInput;