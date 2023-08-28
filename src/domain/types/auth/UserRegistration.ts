import { ProfileResponseModel } from "../profile/Profile";

export interface TUserRegistration {
  username: string;
  password: string;
  profiles: ProfileResponseModel[];
}

export interface TUserConfirmOtp {
  otp: string;
  username: string;
}
