export interface PersonProps {
  name: string;
  imageId: string;
}

export interface AvatarProps {
  person: PersonProps;
  size: number;
}
