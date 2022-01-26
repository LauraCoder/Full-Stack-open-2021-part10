import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import ItemBody from './ItemBody';
import ItemFooter from './ItemFooter';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    padding: 10,
  },
});

const RepositoryItem  = ({ 
    ownerAvatarUrl,
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    id
  }) => (
  <View style={styles.flexContainer}>
    <ItemBody
      ownerAvatarUrl={ownerAvatarUrl}
      fullName={fullName}
      description={description}
      language={language}
      id={id}
    />
    <ItemFooter
      stargazersCount={stargazersCount}
      forksCount={forksCount}
      reviewCount={reviewCount}
      ratingAverage={ratingAverage}
    />
  </View>
);

export default RepositoryItem ;