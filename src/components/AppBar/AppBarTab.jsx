import { StyleSheet } from 'react-native';
import { Link } from "react-router-native";
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    marginTop: 20,
    paddingBottom: 25,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.white,
  },
});

const AppBarTab = ({ link, children, onPress }) => {
  return (
    <Link to={link} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Link>
  );
};

export default AppBarTab;