export const getImageUrl = (person: { imageId: string }, size = 's') =>
  `https://i.imgur.com/${person.imageId}${size}.jpg`;
