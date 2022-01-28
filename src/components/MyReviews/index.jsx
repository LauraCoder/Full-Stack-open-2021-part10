import { FlatList } from 'react-native';
import { useNavigate } from 'react-router-native';

import useReviews from '../../hooks/useReviews';
import ItemSeparator from '../ItemSeparator';
import MyReviewItem from './MyReviewItem';

const MyReviews = () => {
  const { reviews, refetch } = useReviews();
  let navigate = useNavigate();

  const renderReviewItem = ({ item }) => (
    <MyReviewItem
      id={item?.node.id}
      text={item?.node.text}
      rating={item?.node.rating}
      createdAt={item?.node.createdAt}
      fullName={item?.node.repository.fullName}
      repositoryId={item?.node.repository.id}
      navigate={navigate}
      refetch={refetch}
    />
  );

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => renderReviewItem({item}) }
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
};

export default MyReviews;