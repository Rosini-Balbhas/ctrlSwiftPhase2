import { put, takeLatest } from "redux-saga/effects";
import * as Constants from "../constants";
import * as Actions from "./action";
import { postdata, postSecureObject } from "../apil-call";
import { Base_URL } from "../urls";
import { errorMessages } from "../ErrorMessage";

function* partnerVerifyEmail(action) {
  console.log("action" + JSON.stringify(action));
  try {
    const responseData = yield postSecureObject(
      Base_URL + Constants.API_URLS.PARTNER_FORGOTPASSWORD_URL,
      {
        email: action.email,
      }
    );
    console.log("responseData" + JSON.stringify(responseData));
    if (
      responseData.status === 200 &&
      responseData.data.success !== "undefined" &&
      responseData.data.success === true
    ) {
      yield put(Actions.partnerVerifyEmailResponse(responseData.data));
    } else if (
      responseData.data.success !== "undefined" &&
      responseData.data.success === false
    ) {
      console.log("error message testing");
      const errorMessage = errorMessages(responseData.data.message);
      console.log("error message testing", JSON.stringify(errorMessage));
      yield put(Actions.partnerVerifyEmailResponse(errorMessage));
    }
  } catch (e) {
    const errorMessage = {
      success: false,
      message: "Technical issues, Please try again",
    };
    yield put(Actions.partnerVerifyEmailResponse(errorMessage));
  }
}
export default function* partnerGetmailSaga() {
  yield takeLatest(Constants.PARTNER_FORGOTPASSWORD_DATA, partnerVerifyEmail);
}
