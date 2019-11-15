/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLink = `mutation CreateLink($input: CreateLinkInput!) {
  createLink(input: $input) {
    id
    url
    description
  }
}
`;
export const updateLink = `mutation UpdateLink($input: UpdateLinkInput!) {
  updateLink(input: $input) {
    id
    url
    description
  }
}
`;
export const deleteLink = `mutation DeleteLink($input: DeleteLinkInput!) {
  deleteLink(input: $input) {
    id
    url
    description
  }
}
`;
export const createGaggle = `mutation CreateGaggle($input: CreateGaggleInput!) {
  createGaggle(input: $input) {
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
export const updateGaggle = `mutation UpdateGaggle($input: UpdateGaggleInput!) {
  updateGaggle(input: $input) {
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
export const deleteGaggle = `mutation DeleteGaggle($input: DeleteGaggleInput!) {
  deleteGaggle(input: $input) {
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
