export interface ProfileResponseModel {
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

export interface ProfileState {
  profile: number | null;
}
