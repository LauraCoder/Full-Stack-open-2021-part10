import { FlatList, Pressable } from 'react-native';
import ItemSeparator from '../ItemSeparator';
import RepositoryItem from '../RepositoryItem';
import { useNavigate } from 'react-router-native';

const RepositoryListContainer = ({ repositories }) => {
  let navigate = useNavigate();
  
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const renderItem = ({ item }) => {
    /*const toSingleRepository = ({ item }) => {
      navigate(`/repositories/${item.id}`, { replace: true });
    };*/

    return (
    <Pressable onPress={() => navigate(`/repositories/${item.id}`)}>
      <RepositoryItem
        id={item.id}
        fullName={item.fullName}
        description={item.description}
        language={item.language}
        forksCount={item.forksCount}
        stargazersCount={item.stargazersCount}
        ratingAverage={item.ratingAverage}
        reviewCount={item.reviewCount}
        ownerAvatarUrl={item.ownerAvatarUrl}
      />
    </Pressable>
    )
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryListContainer;