/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLink = `query GetLink($id: ID!) {
  getLink(id: $id) {
    id
    url
    description
  }
}
`;
export const listLinks = `query ListLinks(
  $filter: ModelLinkFilterInput
  $limit: Int
  $nextToken: String
) {
  listLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      url
      description
    }
    nextToken
  }
}
`;
export const getGaggle = `query GetGaggle($id: ID!) {
  getGaggle(id: $id) {
    id
    name
    description
    items {
      id
      url
      description
    }
  }
}
`;
export const listGaggles = `query ListGaggles(
  $filter: ModelGaggleFilterInput
  $limit: Int
  $nextToken: String
) {
  listGaggles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      items {
        id
        url
        description
      }
    }
    nextToken
  }
}
`;
