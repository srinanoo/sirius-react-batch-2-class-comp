import React from "react";

class FooterClass extends React.Component {
    render() {
        return (
            <>
                <div className="row3">
                    <h3>About Me</h3>
                    <div className="row3section1">
                        <div>
                            <h4>Personal Details</h4>
                            <ul>
                                <li>ITEM</li>
                                <li>ITEM</li>
                                <li>ITEM</li>
                                <li>ITEM</li>
                            </ul>
                        </div>
                        <div>
                            <h4>Educational Details</h4>
                            <ul>
                                <li>ITEM</li>
                                <li>ITEM</li>
                                <li>ITEM</li>
                                <li>ITEM</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row4">
                    <div>&copy; Copyright. All Rights Reserved.</div>
                </div>
            </>
        )
    }
}

export default FooterClass;