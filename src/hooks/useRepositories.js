import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting, searchKeyword) => {
  let variables = {};

  switch (sorting) {
    case 'Highest rated repositories':
      variables = { 'orderBy': 'RATING_AVERAGE', 'orderDirection': 'DESC', searchKeyword}
      break;
    case 'Lowest rated repositories':
      variables = { 'orderBy': 'RATING_AVERAGE', 'orderDirection': 'ASC', searchKeyword}
      break;
    default:
      variables = { 'orderBy': 'CREATED_AT', 'orderDirection': 'DESC', searchKeyword};
  }

  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(
    GET_REPOSITORIES, {
      fetchPolicy: 'cache-and-network',
      variables
  });

  const fetchRepositories = async () => {
    if(data) {
      setRepositories(data.repositories);
    }
  };

  useEffect(() => {
    if(data) {
      fetchRepositories();
    }
  }, [data]);

  return { repositories, loading, error };
};

export default useRepositories;