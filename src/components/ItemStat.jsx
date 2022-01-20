import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  stat: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const ItemStat = ({ count, label }) => (
  <View style={styles.stat}>
    <Text subHeading>{count}</Text>
    <Text contentText>{label}</Text>
  </View>
);

export default ItemStat ;