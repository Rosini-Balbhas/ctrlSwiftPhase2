// import React, { Component } from "react";
// import { PropTypes } from "prop-types";
// import { connect } from "react-redux";
// import { partnerForgotOtp, partnerResendOtp } from "./action";
// import Footer from "../components/footer";
// import Logo from "../images/logo.png";
// import Swal from "sweetalert2";
// import queryString from "query-string";

// class partnerResetOtp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       otp: "",
//       page: "",
//       submitted: false,
//       isValidatdOtpSuccess: false,
//       resendOtpSuccess: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   maxLengthCheck = (object) => {
//     if (object.target.value.length > object.target.maxLength) {
//       object.target.value = object.target.value.slice(
//         0,
//         object.target.maxLength
//       );
//     }
//   };

//   handleSubmit(e) {
//     e.preventDefault();
//     this.setState({ submitted: true });
//     const { email, otp } = this.state;
//     if (otp && otp.length === 6) {
//       this.props.partnerForgotOtp(email, otp);
//       //this.props.history.push('/resetPassword?page='+ this.state.page)
//     }
//   }

//   componentDidMount() {
//     let url = this.props.location.search;
//     let params = queryString.parse(url);
//     this.setState({ email: params.email });
//     this.setState({ page: params.page });
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     if (this.props.resendOtpSuccess !== prevProps.resendOtpSuccess) {
//       if (this.state.submitted && this.props.resendOtpSuccess.success) {
//       } else {
//         Swal.fire({
//           title: "",
//           text: this.props.resendOtpSuccess.message,
//           icon: "warning",
//           showCancelButton: false,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "OK",
//         });
//       }
//       this.setState({ submitted: false });
//     }

//     if (this.props.isValidatdOtpSuccess !== prevProps.isValidatdOtpSuccess) {
//       if (this.state.submitted && this.props.isValidatdOtpSuccess.success) {
//         this.props.history.push(
//           "/resetPassword?email=" +
//             this.state.email +
//             "&page=" +
//             this.state.page
//         );
//       } else if (!this.props.isValidatdOtpSuccess.success) {
//         Swal.fire({
//           title: "",
//           text: this.props.isValidatdOtpSuccess.message,
//           icon: "info",
//           showCancelButton: false,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "OK",
//         });
//       }
//       this.setState({ submitted: false });
//     }
//   }
//   resendChange = () => {
//     this.setState({ submitted: true });
//     if (this.state.email) {
//       this.props.partnerResendOtp(this.state.email);
//     }
//   };

//   render() {
//     const { otp, submitted } = this.state;
//     return (
//       <div
//         className="page-container logincontainer"
//         style={{ paddingLeft: "0px" }}
//       >
//         <div className="header navbar" style={{ width: "100%" }}>
//           <div className="header-container">
//             <ul className="nav-left">
//               <li>
//                 <img src={Logo} alt="CtrlSwift Logo" width="75%" />
//               </li>
//             </ul>
//           </div>
//         </div>
//         <main className="main-content">
//           <div id="mainContent">
//             <div className="container-fluid">
//               <div className="row mT-60">
//                 <div className="col-md-9"></div>
//                 <div className="col-md-3">
//                   <div className="bgc-white p-40 bd otpcontent">
//                     <h5
//                       className="text-left"
//                       style={{
//                         fontFamily: "Noto serif",
//                         fontStyle: "italic",
//                         fontSize: "20px",
//                       }}
//                     >
//                       Please enter the OTP
//                     </h5>
//                     <h6 className="text-left">Sent on your Mobile/Email ID</h6>
//                     <div className="mT-30">
//                       <form name="form" onSubmit={this.handleSubmit}>
//                         <div
//                           className={
//                             "form-group text-center" +
//                             (submitted && !otp ? " has-error" : "")
//                           }
//                         >
//                           <input
//                             type="number"
//                             align="middle"
//                             className="form-control text-center"
//                             name="otp"
//                             value={otp}
//                             maxLength={6}
//                             minLength={6}
//                             onInput={this.maxLengthCheck}
//                             onChange={this.handleChange}
//                           />
//                           {submitted && !otp && (
//                             <div
//                               style={{ fontSize: 12, color: "red" }}
//                               className="nav-left"
//                             >
//                               OTP is required
//                             </div>
//                           )}
//                           {submitted && otp.length !== 6 && otp && (
//                             <div
//                               style={{ fontSize: 12, color: "red" }}
//                               className="nav-left"
//                             >
//                               OTP is must be 6-digits
//                             </div>
//                           )}
//                         </div>

//                         <div>
//                           <div className="text-center">
//                             <button
//                               type="button"
//                               className="btn btn-primarys"
//                               onClick={this.handleSubmit}
//                             >
//                               VERIFY
//                             </button>

//                             <button
//                               onClick={this.resendChange}
//                               type="button"
//                               class="btn btn-link"
//                             >
//                               <div style={{ fontSize: 27, color: "green" }}>
//                                 <u>RESEND </u>
//                               </div>
//                             </button>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }
// }
// partnerResetOtp.propTypes = {
//   partnerForgotOtp: PropTypes.func,
//   partnerResendOtp: PropTypes.func,
// };
// const mapStateToProps = (state) => {
//   return {
//     isValidatdOtpSuccess: state.partnerForgotOtpReducer.isValidatdOtpSuccess,
//     resendOtpSuccess: state.partnerForgotOtpReducer.resendOtpSuccess,
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   partnerForgotOtp: (email, otp) => dispatch(partnerForgotOtp(email, otp)),
//   partnerResendOtp: (email) => dispatch(partnerResendOtp(email)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(partnerResetOtp);
