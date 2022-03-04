import React from "react";
import { Row } from "react-bootstrap";
import Sidemenu from "../../components/partnersidemenu/partnerSidemenu1";
import Header1 from "../../components/header1"


class commercialDashboard extends React.Component {
    render() {
        return (
            <div >
                <header>
                    <Header1 />
                </header>
                <main>
                    <Row>
                        <Sidemenu
                            navigate={(url) => this.navigate(url)}
                            selected="dashboard"
                            commercial="true"
                        />


                    </Row>
                </main>

            </div>
        );

    }
}

export default commercialDashboard;