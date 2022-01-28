import { useParams } from 'react-router-native';
import { FlatList } from "react-native";

import useRepository from '../../hooks/useRepository';
import ItemSeparator from '../ItemSeparator';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem';

const RepositoryView  = () => {
  const { id } = useParams();
  const { repository, reviews, fetchMore } = useRepository( id );

  const onEndReach = () => {
    fetchMore();
  };

  const renderReviewItem = ({ item }) => (
    <ReviewItem
      id={item?.node.id}
      text={item?.node.text}
      rating={item?.node.rating}
      createdAt={item?.node.createdAt}
      username={item?.node.user.username}
    />
  );

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => renderReviewItem({item}) }
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
};

export default RepositoryView;