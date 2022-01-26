import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const [repository, setRepository] = useState();
  const { data, error, loading } = useQuery(
    GET_REPOSITORY, {
      fetchPolicy: 'cache-and-network',
      variables: { id }
  });

  const fetchRepository = async () => {
    if(data) {
      setRepository(data.repository);
    }
  };

  console.log('data', data);
  useEffect(() => {
    if(data) {
      fetchRepository();
    }
  }, [data]);

  console.log('useRepository', repository)
  return { repository, loading, error };
};

export default useRepository;