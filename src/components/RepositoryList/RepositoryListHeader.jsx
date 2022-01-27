import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import OrderedByMenu from "./OrderedByMenu";

const RepositoryListHeader = ({sorting, setSorting, searchQuery, setSearchQuery}) => {
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <OrderedByMenu sorting={sorting} setSorting={setSorting} />
    </View>
  )
};

export default RepositoryListHeader;