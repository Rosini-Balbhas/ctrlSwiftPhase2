import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { BsFillGridFill, BsCaretRightFill } from "react-icons/bs";



function Sidemenu(props) {
    const classval = "list-group-item list-group-item-action shadow";
    const [company, companyList] = useState(false);
    const [selfemployee, selfEmployeeList] = useState(false);
    const buttonHandler = () => {
        companyList((current) => !current);
    };
    const buttonHandler2 = () => {
        selfEmployeeList((current) => !current);
    };

    // const [isRole, commercialList] = useState("");
    // useEffect(() => {
    //     window.sessionStorage.setItem("isRole", "balbhas");

    // })
    const isRole= window.sessionStorage.getItem("isRole");
    // useEffect(() => {
    //     console.log(window.sessionStorage.getItem("isRole"));
    //     window.sessionStorage.getItem("isRole");

    // })

    return (
        <div className="col-md-3">
            <div className="list-group">
                <li
                    onClick={() => props.navigate("#")}
                    className={`${classval} ${props.selected === '#' ? "active" : ""
                        }`}
                >
                    <span className="icon-holder">
                        <i class="fa fa-line-chart" aria-hidden="true"></i>{" "}
                        Dashboard
                    </span>{" "}
                </li>
                {isRole === "company" ? (

                <li
                    onClick={() => props.navigate("/employeeList")}
                    className={`${classval} ${props.selected === "employeeList" ? " active" : ""
                        }`}
                >
                    <span className="icon-holder">
                        <i class="fa fa-users" aria-hidden="true"></i>{" "}
                    </span>
                    Employees
                </li>):null}


                <li
                    onClick={() => props.navigate("/tickets")}
                    className={`${classval} ${props.selected === "tickets" ? " active" : ""
                        }`}
                >
                    <span className="icon-holder">
                        <i class="fa fa-ticket" aria-hidden="true"></i>{" "}
                    </span>{" "}
                    Tickets
                </li>
                <li
                    onClick={() => props.navigate("/SRN")}
                    className={`${classval} ${props.selected === "SRN" ? " active" : ""
                        }`}
                >
                    <span className="icon-holder">
                        <i class="fa fa-clipboard" aria-hidden="true"></i>{" "}
                    </span>{" "}
                    SRN
                </li>




                {(isRole === "commercial") ? (<>
                    <li
                        onClick={buttonHandler}
                        //  onClick={() => handelClick()}
                        className={`${classval} ${props.selected === "companyRequest" ? "text-primary" : props.selected === "acceptedCompany" ? "text-primary" : " "
                            }`}
                    >
                        <span className="icon-holder">
                            {/* <BsFillGridFill />{" "} */}
                        </span>
                        Company Details
                        {company == true ?
                            <span className="ml-80"><i class="fa fa-angle-down  " aria-hidden="true"></i></span>
                            : <span className="ml-80"><i class="fa fa-angle-up  " aria-hidden="true"></i></span>}
                    </li>

                    <li
                        style={{
                            display: company == true ? "block" : "none",
                        }}
                    >
                        <li
                            onClick={() => props.navigate("/companyRequest")}
                            className={`${classval} ${props.selected === "companyRequest" ? " active" : ""
                                }`}
                        >
                            <span className="icon-holder">
                                {/* <BsCaretRightFill />{" "} */}
                            </span>
                            Request List
                        </li>
                        <li
                            onClick={() => props.navigate("/acceptedCompany")}
                            className={`${classval} ${props.selected === "acceptedCompany" ? " active" : ""
                                }`}
                        >
                            <span className="icon-holder">
                                {/* <BsCaretRightFill />{" "} */}
                            </span>
                            company List
                        </li>
                    </li>
                    <li
                        onClick={buttonHandler2}
                        className={`${classval} ${props.selected === "selfEmployeeRequest" ? "text-primary" : props.selected === "acceptedSelfEmployee1" ? "text-primary" : " "
                            }`}
                    >
                        <span className="icon-holder ">
                            {/* <BsFillGridFill />{" "} */}
                        </span>
                        Self Employees
                        {selfemployee == true ?
                            <span className="ml-100"><i class="fa fa-angle-down  " aria-hidden="true"></i></span>
                            : <span className="ml-100"><i class="fa fa-angle-up  " aria-hidden="true"></i></span>}
                    </li>

                    <li style={{ display: selfemployee == true ? "block" : "none" }}>
                        <li
                            onClick={() => props.navigate("/selfEmployeeRequest")}
                            className={`${classval} ${props.selected === "selfEmployeeRequest" ? " active" : ""
                                }`}
                        >
                            <span className="icon-holder">
                                {/* <BsCaretRightFill />{" "} */}
                            </span>
                            Request List
                        </li>
                        
                        <li
                            onClick={() => props.navigate("/acceptedSelfEmployee1")}
                            className={`${classval} ${props.selected === "acceptedSelfEmployee1" ? " active" : ""
                                }`}
                        >
                            <span className="icon-holder">
                                {/* <BsCaretRightFill />{" "} */}
                            </span>
                            Employees List
                        </li>
                    </li>

                </>) : null}
                {isRole === "balbhas" ? (
                    <>

                        <li
                            onClick={() => props.navigate("/CSR")}
                            className={`${classval} ${props.selected === "CSR" ? " active" : ""
                                }`}
                        >
                            <span className="icon-holder">
                                <i class="fa fa-clipboard" aria-hidden="true"></i>{" "}
                            </span>{" "}
                            CSR
                        </li>
                        <li
                            onClick={() => props.navigate("/Map")}
                            className={`${classval} ${props.selected === "Map" ? " active" : ""
                                }`}
                        >
                            <span className="icon-holder">
                                <i class="fa fa-map" aria-hidden="true"></i>{" "}
                            </span>{" "}
                            Map
                        </li>
                    </>

                ) : null
                }



                <li
                    onClick={() => props.navigate("/Report")}
                    className={`${classval} ${props.selected === "Report" ? " active" : ""
                        }`}
                >
                    <span className="icon-holder">
                        <i className="c-blue-900 ti-receipt"></i>{" "}
                    </span>{" "}
                    Report
                </li>
            </div>
        </div>
    );


}
export default Sidemenu;

