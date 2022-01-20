import { StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  text: {
    margin: 20,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.white,
  },
});

const AppBarTab = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default AppBarTab;