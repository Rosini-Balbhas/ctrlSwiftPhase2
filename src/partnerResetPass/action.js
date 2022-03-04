import * as Constants from "../constants";

export const partnerVerifyEmail = (email) => ({
  type: Constants.PARTNER_FORGOTPASSWORD_DATA,
  url: Constants.API_URLS.PARTNER_FORGOTPASSWORD_URL,
  email,
});

export const partnerVerifyEmailResponse = (isVerifySuccess) => ({
  type: Constants.PARTNER_FORGOTPASSWORD_RESPONSE,
  isVerifySuccess,
});
