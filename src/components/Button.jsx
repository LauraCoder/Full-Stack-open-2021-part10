import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
});

const Button  = ({ children, onPress }) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text color='white' fontWeight='bold'>{children}</Text>
  </Pressable>
);

export default Button;