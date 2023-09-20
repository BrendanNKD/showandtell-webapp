export interface ProfileResponseModel {
  email?: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  profilePic: number;
}

export interface ProfileState {
  profile: number | null;
}
