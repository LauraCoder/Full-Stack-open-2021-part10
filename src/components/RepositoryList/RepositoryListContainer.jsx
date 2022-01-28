import React from 'react';
import { FlatList, Pressable } from 'react-native';

import ItemSeparator from '../ItemSeparator';
import RepositoryItem from '../RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return (
      <RepositoryListHeader
        sorting={props.sorting}
        setSorting={props.setSorting} 
        searchQuery={props.searchQuery}
        setSearchQuery={props.setSearchQuery}
      />
    );
  };

  render() {
    const props = this.props;

    const repositoryNodes = props.repositories
    ? props.repositories.edges.map(edge => edge.node)
    : [];

    const renderItem = ({ item }) => (
      <Pressable onPress={() => props.navigate(`/repositories/${item.id}`)}>
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
    );


    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={this.renderHeader}
        onEndReached={props.onEndReach}
        onEndReachedThreshold={0.5}
      />
    );
  }
}

export default RepositoryListContainer;