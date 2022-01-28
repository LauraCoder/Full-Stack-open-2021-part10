import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting, searchKeyword) => {
  let variables = {};

  switch (sorting) {
    case 'Highest rated repositories':
      variables = { 'orderBy': 'RATING_AVERAGE', 'orderDirection': 'DESC'}
      break;
    case 'Lowest rated repositories':
      variables = { 'orderBy': 'RATING_AVERAGE', 'orderDirection': 'ASC'}
      break;
    default:
      variables = { 'orderBy': 'CREATED_AT', 'orderDirection': 'DESC'};
  }

  variables = {
    ...variables,
    first: 8,
    searchKeyword
  };

  const { data, error, loading, fetchMore, ...result } = useQuery(
    GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
      variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return { 
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    error,
    loading,
    ...result,
  };
};

export default useRepositories;