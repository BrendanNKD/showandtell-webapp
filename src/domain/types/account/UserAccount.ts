import { ProfileResponseModel } from "../profile/Profile";

export interface AccountResponseModel {
  username: string;
  profiles: ProfileResponseModel[];
}
