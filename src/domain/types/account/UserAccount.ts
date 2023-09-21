import { ProfileResponseModel } from "../profile/Profile";

export interface AccountResponseModel {
  username: string;
  email: string;
  profiles: ProfileResponseModel[];
}
