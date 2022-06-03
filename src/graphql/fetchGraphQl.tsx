import { Variables } from 'relay-runtime';

async function fetchGraphQL(text: string, variables: Variables) {
	const graphQlEndpoint = process.env.GRAPHQL_ENDPOINT || 'https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/';
	const response = await fetch(graphQlEndpoint, {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
		query: text,
		variables,
	  }),
	});

	// Get the response as JSON
	return await response.json();
  }

  export default fetchGraphQL;