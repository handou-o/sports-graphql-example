import { graphql } from 'babel-plugin-relay/macro';

// Define a query
export const getPlayersQuery = graphql`
  query playersQuery {
    players {
      id
      shortname
      sex
      firstname
      lastname
      picture {
        url
      }
      country {
        picture {
          url
        }
      }
      stats {
        rank
        points
        weight
        height
        age
      }
    }
  }
`;