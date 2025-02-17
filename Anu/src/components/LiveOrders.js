import React from "react";
import "../App.css"; 


const Row = ({ children, spacing }) => {
    const childStyle = { marginLeft: `${spacing}px` };

    return (
        <div className="Row">
            {React.Children.map(children, (child, index) =>
                React.isValidElement(child) ? (
                    React.cloneElement(child, {
                        style: { ...child.props.style, ...(index > 0 ? childStyle : {}) },
                    })
                ) : (
                    child
                )
            )}
        </div>
    );
};

function LiveOrders() {
    return (
        <div className="App">
            <h2>Live Orders</h2>
            <Row spacing={32}>
                <p>Pizza Margarita</p>
                <p>2</p>
                <p>$30</p>
                <p>18:30</p>
                <p>John</p>
            </Row>
        </div>
    );
}

export default LiveOrders;
