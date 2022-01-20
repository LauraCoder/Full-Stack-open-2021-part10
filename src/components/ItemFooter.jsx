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
      <ItemStat count={formatThousands(stargazersCount)} label='Stars' />
      <ItemStat count={formatThousands(forksCount)} label='Forks' />
      <ItemStat count={formatThousands(reviewCount)} label='Reviews' />
      <ItemStat count={formatThousands(ratingAverage)} label='Rating' />
    </View>
  )
};

export default ItemFooter ;