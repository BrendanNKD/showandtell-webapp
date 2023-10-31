export interface CollectionProp {
  image: string;
  caption: string;
  profile: string;
  profileIndex: number;
  description: string;
  avatar: number;
  _id?: string;
}

export interface CollectionState {
  collection: CollectionProp[];
}

export interface CollectionsResponseModel {
  username: string;
  collection: CollectionProp[];
}
