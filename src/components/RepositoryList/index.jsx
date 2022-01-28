import { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { Provider } from 'react-native-paper';
import { useNavigate } from 'react-router-native';

import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [ sorting, setSorting ] = useState('Latest repositories');
  const [ searchQuery, setSearchQuery ] = useState('');
  const [ searchQueryDebounce ] = useDebounce(searchQuery, 500);
  const { repositories, fetchMore } = useRepositories(sorting, searchQueryDebounce);
  let navigate = useNavigate();

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <Provider>
      <RepositoryListContainer
        repositories={repositories}
        sorting={sorting}
        setSorting={setSorting}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        navigate={navigate}
        onEndReach={onEndReach}
      />
    </Provider>
  );
};

export default RepositoryList;