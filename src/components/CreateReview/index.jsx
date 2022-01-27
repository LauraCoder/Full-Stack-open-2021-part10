import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-native';
import * as yup from 'yup';
import { Formik } from 'formik';

import { CREATE_REVIEW } from '../../graphql/mutations';
import CreateReviewForm from './CreateReviewForm';

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number('The rating value must be a number')
    .integer('The rating value must be an integer')
    .positive('The rating value must be at least 0')
    .max(100, 'The max rating value is 100')
    .required('Rating is required'),
  review: yup
    .string(),
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const CreateReview = () => {
  const [createReview, {error}] = useMutation(CREATE_REVIEW);
  let navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;
    const parsedRating = +rating;

    try {
        const { data } = await createReview({ 
          variables: {
            review: {
              ownerName,
              repositoryName,
              rating: parsedRating,
              text
            }
          }
        })
        console.log(data);
        navigate(`/repositories/${data?.createReview?.repositoryId}`);
      } catch (e) {
        console.log(e);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} error={error} />}
      </Formik>
    </>
  );
};

export default CreateReview;