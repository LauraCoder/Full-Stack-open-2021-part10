import { useQuery } from '@apollo/client';

import { ME } from '../graphql/queries';

const useReviews = () => {  
  const { data, error, loading, refetch } = useQuery(
    ME, {
      fetchPolicy: 'cache-and-network',
      variables: { 
        includeReviews: true,
      }
  });

  return { 
    reviews: data?.me.reviews.edges,
    refetch,
    error,
    loading,
  };
};

export default useReviews;