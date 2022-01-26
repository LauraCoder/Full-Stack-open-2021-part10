import { StyleSheet, View } from 'react-native';
import ItemStat from './ItemStat';

const styles = StyleSheet.create({
  footer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

const ItemFooter = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
  const formatThousands = (value) => value < 999 ? value : (value / 1000).toFixed(1) + 'k';

  return (
    <View style={styles.footer}>
      <ItemStat count={formatThousands(stargazersCount)} label='Stars' testID='stars' />
      <ItemStat count={formatThousands(forksCount)} label='Forks' testID='forks' />
      <ItemStat count={formatThousands(reviewCount)} label='Reviews' testID='reviews' />
      <ItemStat count={formatThousands(ratingAverage)} label='Rating' testID='rating' />
    </View>
  )
};

export default ItemFooter ;