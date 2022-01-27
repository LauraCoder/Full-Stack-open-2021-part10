import * as Linking from 'expo-linking';
import { StyleSheet, View } from 'react-native';

import theme from '../../theme';
import Button from '../Button';
import ItemSeparator from '../ItemSeparator';
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
    id,
    url,
    singleRepository
  }) => {

  const openLink = () => Linking.openURL(url);

  return (
    <>
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
        {singleRepository &&
          <Button onPress={openLink}>Open in Github</Button>
        }
      </View>
      {singleRepository &&
        <ItemSeparator /> 
      }
    </>
  )
};

export default RepositoryItem ;