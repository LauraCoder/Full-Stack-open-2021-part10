import RepositoryItem from '../RepositoryItem';

const RepositoryInfo = ({ repository }) => (
  <RepositoryItem
    id={repository?.id}
    fullName={repository?.fullName}
    description={repository?.description}
    language={repository?.language}
    forksCount={repository?.forksCount}
    stargazersCount={repository?.stargazersCount}
    ratingAverage={repository?.ratingAverage}
    reviewCount={repository?.reviewCount}
    ownerAvatarUrl={repository?.ownerAvatarUrl}
    url={repository?.url}
    singleRepository
  />
);

export default RepositoryInfo;