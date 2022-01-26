import useRepository from '../../hooks/useRepository';
import Text from "../Text";
import { useParams } from 'react-router-native';

const RepositoryView  = () => {
  //let id = "zeit.swr";
  const { id } = useParams();
  const { repository } = useRepository( id );

  console.log('SingleView', id, repository)

  return (
    <Text>SingleView</Text>
  )

};

export default RepositoryView;