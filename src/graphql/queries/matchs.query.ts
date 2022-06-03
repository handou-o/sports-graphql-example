import { graphql } from 'babel-plugin-relay/macro';

// Define a query
export const getMatchesQuery = graphql`
  query matchsQuery {
	matches {
		id
		players{
		  id
		  shortname
		}
		winner {
		  id
		}
		startTime
		endTime
	  }
  }
`;