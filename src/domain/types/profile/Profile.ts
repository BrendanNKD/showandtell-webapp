export interface ProfileResponseModel {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  profilePic: number;
  stars: number;
  level: number;
  totalStars: number;

}

export interface ProfileState {
  profile: number | null;
  isMain: boolean;
}

export interface UpdateProfileRequestModel {
  index: number;
  profile: ProfileResponseModel;
}
