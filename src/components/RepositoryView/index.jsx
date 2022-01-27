import { useParams } from 'react-router-native';
import { FlatList } from "react-native";

import useRepository from '../../hooks/useRepository';
import ItemSeparator from '../ItemSeparator';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';
import Text from '../Text';

const RepositoryView  = () => {
  const { id } = useParams();
  const { repository, reviews, loading } = useRepository( id );

  const renderReviewItem = ({ item }) => (
    <ReviewItem
      id={item?.node.id}
      text={item?.node.text}
      rating={item?.node.rating}
      createdAt={item?.node.createdAt}
      username={item?.node.user.username}
    />
  );

  if (loading) return <Text>Loading...</Text>

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => renderReviewItem({item}) }
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
};

export default RepositoryView;