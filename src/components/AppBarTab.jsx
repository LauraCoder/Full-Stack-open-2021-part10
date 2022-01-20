import { StyleSheet } from 'react-native';
import { Link } from "react-router-native";
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

const AppBarTab = ({ link, children }) => {
  return (
    <Link to={link}>
      <Text style={styles.text}>{children}</Text>
    </Link>
  );
};

export default AppBarTab;