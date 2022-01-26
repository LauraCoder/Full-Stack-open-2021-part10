import { View, StyleSheet, ScrollView } from 'react-native';
import { useQuery, useApolloClient } from '@apollo/client';
import Constants from 'expo-constants';

import { ME } from '../../graphql/queries';
import useAuthStorage from '../../hooks/useAuthStorage'; 
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.backgroundDark,
  },
});

const AppBar = () => {
  const { data } = useQuery(ME);
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const user = data ? data.me : undefined;

  const signOut = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link='/'>Repositories</AppBarTab>
        {user
          ? <AppBarTab onPress={() => signOut()} link='/signin'>Sign out</AppBarTab>
          : <AppBarTab link='/signin'>Sign in</AppBarTab>
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;