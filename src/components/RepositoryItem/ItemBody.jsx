import { StyleSheet, View, Image } from 'react-native';
import ItemBodyContent from './ItemBodyContent';

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
});

const ItemBody = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={styles.body}>
    <Image
      style={styles.avatar}
      source={{
        uri: `${ownerAvatarUrl}`,
      }}
    />
    <ItemBodyContent 
      fullName={fullName} 
      description={description}
      language={language} 
    />
  </View>
);

export default ItemBody ;