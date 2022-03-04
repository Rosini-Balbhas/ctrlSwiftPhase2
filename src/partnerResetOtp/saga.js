// import { put, takeLatest } from "redux-saga/effects";
// import * as Constants from "../constants";
// import * as Actions from "./action";
// import { postdata } from "../apil-call";
// import { Base_URL } from "../urls";
// import { errorMessages } from "../ErrorMessage";

// function* partnerResendOtp(action) {
//   console.log("action" + JSON.stringify(action));
//   try {
//     const responseData = yield postdata(
//       Base_URL + Constants.API_URLS.LOGIN_RESENDOTP_URL,
//       {
//         email: action.email,
//       }
//     );
//     console.log("responseData" + JSON.stringify(responseData));
//     if (
//       responseData.status === 200 &&
//       responseData.data.success !== "undefined" &&
//       responseData.data.success === true
//     ) {
//       yield put(Actions.partnerResendOtpResponse(responseData.data));
//     } else if (
//       responseData.data.success !== "undefined" &&
//       responseData.data.success === false
//     ) {
//       const responcesMessage = errorMessages(responseData.data.message);
//       const errorMessage = { success: false, message: responcesMessage };
//       yield put(Actions.partnerResendOtpResponse(errorMessage));
//     }
//   } catch (e) {
//     const errorMessage = {
//       success: false,
//       message: "Unable to get your request, please try again",
//     };
//     yield put(Actions.partnerResendOtpResponse(errorMessage));
//   }
// }

// function* partnerForgotOtp(action) {
//   console.log("action" + JSON.stringify(action));
//   try {
//     const responseData = yield postdata(
//       Base_URL + Constants.API_URLS.VERIFY_OTP_URL,
//       {
//         email: action.email,
//         otp: action.otp,
//       }
//     );
//     console.log("responseData" + JSON.stringify(responseData));
//     if (
//       responseData.status === 200 &&
//       responseData.data.success !== "undefined" &&
//       responseData.data.success === true
//     ) {
//       yield put(Actions.partnerForgotOtpResponse(responseData.data));
//     } else if (
//       responseData.data.success !== "undefined" &&
//       responseData.data.success === false
//     ) {
//       const responcesMessage = errorMessages(responseData.data.message);
//       const errorMessage = { success: false, message: responcesMessage };
//       yield put(Actions.partnerForgotOtpResponse(errorMessage));
//     }
//   } catch (e) {
//     const errorMessage = {
//       success: false,
//       message: "Could not get the OTP. Plz try again.",
//     };
//     yield put(Actions.partnerForgotOtpResponse(errorMessage));
//   }
// }
// export default function* partnerForgotOtpSage() {
//   yield takeLatest(
//     Constants.PARTNER_FORGOTPASSWORD_VERIFY_OTP,
//     partnerForgotOtp
//   );
//   yield takeLatest(Constants.PARTNER_RESENDOTP_VERIFY, partnerResendOtp);
// }
