import { resetState } from "./resetState";
import { RTKFetchBaseQueryError } from "domain/types/errors/rtkErrors";
import { Dispatch } from "redux";
import toast from "react-hot-toast";

export const ErrorHandler = (error: any, dispatch: Dispatch) => {
  if (error instanceof RTKFetchBaseQueryError) {
    if ("status" in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errStatus =
        "originalStatus" in error
          ? error.originalStatus
          : JSON.stringify(error.data);

      console.log(errStatus);
      if (errStatus === 440) {
        resetState(dispatch);
      }
    }
  }
};

export const AwsErrorHandler = (error: any) => {
  if (error.data.err === "NotAuthorizedException") {
    toast.error("Incorrect Username or Password");
  }
};
