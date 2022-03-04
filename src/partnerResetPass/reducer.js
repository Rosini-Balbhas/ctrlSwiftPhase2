import * as Constants from "../constants";
import { any } from "prop-types";

export default (state = {}, { type, email = "", isVerifySuccess = any }) => {
  switch (type) {
    case Constants.PARTNER_RECEIVE_FORGOTPASSWORD: {
      const statenew = { ...state };
      statenew.email = email;
      return statenew;
    }

    case Constants.PARTNER_FORGOTPASSWORD_RESPONSE: {
        console.log("reducer"+JSON.stringify(isVerifySuccess) )
      const statenew = { ...state };
      statenew.isVerifySuccess = isVerifySuccess;
      return statenew;
    }
    default:
      return state;
  }
};
