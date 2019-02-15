import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const defaultState = {
  isEditMode: false,
}

const client = new ApolloClient({
	uri: 'https://api-euwest.graphcms.com/v1/cjqtmixrn1qq301hq6lctjuab/master',
	clientState: {
		defaults: defaultState,
		resolvers: {}
	}
})

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
