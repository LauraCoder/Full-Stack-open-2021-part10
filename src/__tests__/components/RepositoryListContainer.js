import { render } from '@testing-library/react-native';
import RepositoryListContainer from "../../components/RepositoryList/RepositoryListContainer";

/* eslint-disable jest/expect-expect */
describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      const repositoryFullNames = getAllByTestId('fullName');
      const [firstRepositoryName, secondRepositoryName] = repositoryFullNames;
      expect(firstRepositoryName).toHaveTextContent('jaredpalmer/formik');
      expect(secondRepositoryName).toHaveTextContent('async-library/react-async');
      
      const repositoryDescriptions = getAllByTestId('description');
      const [firstRepositoryDescription, secondRepositoryDescription] = repositoryDescriptions;
      expect(firstRepositoryDescription).toHaveTextContent('Build forms in React, without the tears');
      expect(secondRepositoryDescription).toHaveTextContent('Flexible promise-based React data loader');
      
      const repositoryLanguages = getAllByTestId('language');
      const [firstRepositoryLanguage, secondRepositoryLanguage] = repositoryLanguages;
      expect(firstRepositoryLanguage).toHaveTextContent('TypeScript');
      expect(secondRepositoryLanguage).toHaveTextContent('JavaScript');
      
      const repositoryStars = getAllByTestId('stars');
      const [firstRepositoryStars, secondRepositoryStars] = repositoryStars;
      expect(firstRepositoryStars).toHaveTextContent('21.9k');
      expect(secondRepositoryStars).toHaveTextContent('1.8k');
      
      const repositoryForks = getAllByTestId('forks');
      const [firstRepositoryForks, secondRepositoryForks] = repositoryForks;
      expect(firstRepositoryForks).toHaveTextContent('1.6k');
      expect(secondRepositoryForks).toHaveTextContent('69');
      
      const repositoryReviews = getAllByTestId('reviews');
      const [firstRepositoryReviews, secondRepositoryReviews] = repositoryReviews;
      expect(firstRepositoryReviews).toHaveTextContent('3');
      expect(secondRepositoryReviews).toHaveTextContent('3');
      
      const repositoryRating = getAllByTestId('rating');
      const [firstRepositoryRating, secondRepositoryRating] = repositoryRating;
      expect(firstRepositoryRating).toHaveTextContent('88');
      expect(secondRepositoryRating).toHaveTextContent('72');
    });
  });
});