import API, { graphqlOperation } from '@aws-amplify/api'
import PubSub from '@aws-amplify/pubsub';
import { createLink } from './graphql/mutations'

import awsconfig from './aws-exports';
API.configure(awsconfig);
PubSub.configure(awsconfig);

async function createNewLink() {
  const link = { url: "https://www.google.com" , description: "Realtime and Offline"}
  return await API.graphql(graphqlOperation(createLink, { input: link }))
}

const MutationButton = document.getElementById('MutationEventButton');
const MutationResult = document.getElementById('MutationResult');

MutationButton.addEventListener('click', (evt) => {
  MutationResult.innerHTML = `MUTATION RESULTS:`;
  createNewLink().then( (evt) => {
    MutationResult.innerHTML += `<p>${evt.data.createLink.url} - ${evt.data.createLink.description}</p>`
  })
});