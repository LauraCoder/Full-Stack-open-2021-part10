import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const { data, error, loading } = useQuery(
    GET_REPOSITORY, {
      fetchPolicy: 'cache-and-network',
      variables: { id }
  });
  const repository = data?.repository;
  const reviews = data?.repository.reviews.edges;

  return { repository, reviews, loading, error };
};

export default useRepository;