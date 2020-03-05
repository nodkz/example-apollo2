import React from 'react';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

import gqlMock from 'graphql-tag';
import { useEffect, useState } from 'react';

// More docs can be found here
//   https://www.apollographql.com/docs/react/development-testing/client-schema-mocking/

// example data
const authors = [
  { id: 1, firstName: 'Tom', lastName: 'Coleman', __typename: 'Author' },
  { id: 2, firstName: 'Sashko', lastName: 'Stubailo', __typename: 'Author' },
  { id: 3, firstName: 'Mikhail', lastName: 'Novikov', __typename: 'Author' },
];

const posts = [
  { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2, __typename: 'Post' },
  { id: 2, authorId: 2, title: 'Welcome to Meteor', votes: 3, __typename: 'Post' },
  { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1, __typename: 'Post' },
  { id: 4, authorId: 3, title: 'Launchpad is Cool', votes: 7, __typename: 'Post' },
];

export const typeDefs = gqlMock`
  type Author {
    id: Int!
    firstName: String
    lastName: String
    """
    the list of Posts by this author
    """
    posts: [Post]
  }
  type Post {
    id: Int!
    title: String
    authorId: Int
    author: Author
    votes: Int
  }

  # the schema allows the following query:
  extend type Query {
    posts: [Post]
    author(id: Int!): Author
  }
`;

export const resolvers = {
  Query: {
    posts: () => posts,
    author: (_: any, { id }: { id: number }) => authors.find((e) => e.id === id),
  },
  Author: {
    posts: (author: { id: number }) => posts.filter((e) => e.authorId === author.id),
  },
  Post: {
    author: (post: { authorId: number }) => authors.find((e) => e.id === post.authorId),
  },
};

const gqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
  link: ApolloLink.from([
    new HttpLink({
      uri: 'https://graphql-compose.herokuapp.com/northwind',
    }),
  ]),
});

export default function MockPage() {
  const [data, setData] = useState('Loading');
  useEffect(() => {
    const operation = gqlMock`
      query MockQuery {
        posts @client {
          __typename
          title
          authorId
          author { firstName }
        }
      }
    `;
    gqlClient.query({ query: operation }).then((r) => {
      setData(JSON.stringify(r, null, 2));
    });
  }, []);

  return <pre>{data}</pre>;
}
