import FormikTextInput from '../FormikTextInput';
import { View, StyleSheet } from 'react-native';

import Text from '../Text';
import theme from '../../theme';
import Button from '../Button';

const styles = StyleSheet.create({
  component: {
    backgroundColor: theme.colors.white,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
});

const CreateReviewForm = ({ onSubmit, error }) => {
  return (
    <View style={styles.component}>    
      {error &&
        <Text errorMessage>{error.message}</Text>
      }
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput multiline name='text' placeholder='Review' />      
      <Button onPress={onSubmit}>Create a review</Button>
    </View>
  );
};

export default CreateReviewForm;