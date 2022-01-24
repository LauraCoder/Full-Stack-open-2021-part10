import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);
  
  const signIn = async ({ username, password }) => {
    const credentials = await mutate({ variables: { credentials: { username, password } } })
    const { data } = credentials;
    await authStorage.setAccessToken(data.authenticate.accessToken);
    client.resetStore();

    return credentials;
  };

  return [signIn, result];
};

export default useSignIn;