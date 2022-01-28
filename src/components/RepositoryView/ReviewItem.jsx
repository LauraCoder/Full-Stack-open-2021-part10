import { StyleSheet, View } from "react-native";
import { format, parseISO } from 'date-fns'

import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  body: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  content: {
    alignItems: 'flex-start',
    paddingLeft: 15,
    paddingRight: 50,
  },
  rating: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: theme.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ReviewItem = ({ text, rating, createdAt, username, }) => {
  const formattedDate = format(parseISO(createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.flexContainer}>
      <View style={styles.body}>
        <View style={styles.rating}>
          <Text subHeadingBlue>{rating}</Text>
        </View>
        <View style={styles.content}>
          <Text subHeading>{username}</Text>
          <Text contentText>{formattedDate}</Text>
          <Text>{text}</Text>
        </View>
      </View>
    </View>
  )
};

export default ReviewItem;