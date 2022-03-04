import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Header1 from "../components/header1";
import Sidemenu from "../components/partnersidemenu/partnerSidemenu1"

class csr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: [
                {
                    csrNO: "#1001",
                    upName: "qqqqq",
                    partner: "selfEmp",
                    ticket: "#001",
                    status: "issue solved",
                    uploadDate: "08/02/22"
                },
                {
                    csrNO: "#1002",
                    upName: "qwerty",
                    partner: "company",
                    ticket: "#002",
                    status: "issue still persistence",
                    uploadDate: "09/02/22"
                }
            ]
        };
    }
    navigate = (url) => {
        this.props.history.push(url);
    };

    render() {
        const { tableData } = this.state
        return (
            <div>
                <header>
                    <Header1 />
                </header>
                <main>
                    <Row>
                        
                        <Sidemenu
                            navigate={(url) => this.navigate(url)}
                            selected="CSR"
                            className="sidemenu2"

                            
                        />
                        
                        <Col>

                            <Container className="p-40">
                                <table className="table table-hover">
                                    <thead className="table-primary">
                                        <tr>
                                            <th>CSR NO</th>
                                            <th>Uploaded by</th>
                                            <th>Partner Type</th>
                                            <th>Ticket</th>
                                            <th>status</th>
                                            <th>upload On</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData &&
                                            tableData.length > 0 &&
                                            tableData.map((user, userkey) => (
                                                <tr key={userkey}>
                                                    <td>{user.csrNO}</td>
                                                    <td>{user.upName}</td>
                                                    <td>{user.partner}</td>
                                                    <td>{user.ticket}</td>
                                                    <td>{user.status}</td>
                                                    <td>{user.uploadDate}</td>
                                                    <td></td>
                                                </tr>
                                            ))}

                                    </tbody>

                                </table>
                            </Container>
                        </Col>

                    </Row>

                </main>
            </div>
        );
    }
}

export default csr;