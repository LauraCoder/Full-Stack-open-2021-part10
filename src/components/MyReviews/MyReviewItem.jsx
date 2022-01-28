import { StyleSheet, View, Alert } from "react-native";
import { format, parseISO } from 'date-fns'

import useDeleteReview from '../../hooks/useDeleteReview';
import theme from '../../theme';
import Text from '../Text';
import Button from "../Button";

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
  footer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
});

const MyReviewItem = ({ id, text, rating, createdAt, fullName, repositoryId, navigate, refetch }) => {
  const [deleteReview] = useDeleteReview();
  const formattedDate = format(parseISO(createdAt), 'dd.MM.yyyy');

  const deleteMyReview = () => {
    deleteReview(id);
    refetch();
  };

  const deleteAlert = () => {
    Alert.alert(
        'Delete review',
        'Are you sure you want to delete this review?',
        [
          {
            text: "CANCEL",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { 
            text: "DELETE", onPress: () => deleteMyReview(),
          }
        ],
        
      { cancelable: false }
    )
  };

  return (
    <View style={styles.flexContainer}>
      <View style={styles.body}>
        <View style={styles.rating}>
          <Text subHeadingBlue>{rating}</Text>
        </View>
        <View style={styles.content}>
           <Text subHeading>{fullName}</Text>
          <Text contentText>{formattedDate}</Text>
          <Text>{text}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button onPress={() => navigate(`/repositories/${repositoryId}`)}>View repository</Button>
        <Button warning onPress={() => deleteAlert()}>Delete review</Button>
      </View>
    </View>
  )
};

export default MyReviewItem;