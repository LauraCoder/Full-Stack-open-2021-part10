import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  content: {
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingRight: 50,
  },
  languages: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
});

const ItemBodyContent = ({ fullName, description, language }) => (
  <View style={styles.content}>
    <Text subHeading>{fullName}</Text>
    <Text contentText>{description}</Text>
    <View style={styles.languages}>
      <Text color='white'>{language}</Text>
    </View>
  </View>
);

export default ItemBodyContent ;