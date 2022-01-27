import { gql } from '@apollo/client';
import { REVIEW_DETAILS } from './fragments';

export const SIGN_IN = gql`
  mutation Authenticate($credentials: AuthenticateInput!) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const SIGN_UP = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      user {
        username
      }
      repositoryId
      ...ReviewDetails
    }
  }
  ${REVIEW_DETAILS}
`;