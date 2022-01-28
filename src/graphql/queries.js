import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS, REVIEW_DETAILS, PAGE_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query getRepositories(
    $after: String,
    $first: Int,
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String
  ){
    repositories(
      after: $after,
      first: $first,
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword
    ){
      edges {
        node {
          ...RepositoryDetails
        }
        cursor
      }
      pageInfo {
        ...PageInfoDetails
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${PAGE_INFO}
`;

export const GET_REPOSITORY = gql`
  query getRepository ($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryDetails
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewDetails
            user {
              id
              username
            }
          }
          cursor
        }
        pageInfo {
          ...PageInfoDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
  ${PAGE_INFO}
`;

export const ME = gql`
  query Me($includeReviews: Boolean = false) {
    me {
      id
      username
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewDetails
            repository {
              fullName
              id
            }
          }
          cursor
        }
        pageInfo {
          ...PageInfoDetails
        }
      }
    }
  }
  ${REVIEW_DETAILS}
  ${PAGE_INFO}
`;