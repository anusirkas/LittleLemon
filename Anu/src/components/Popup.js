import { useState } from "react";

const Button = ({ children, backgroundColor, onClick }) => {
    return <button style={{ backgroundColor }} onClick={onClick}>{children}</button>;
};

const Alert = ({ children, onClose }) => {
    return (
        <>
            <div className="Overlay" onClick={onClose} /> 
            <div className="Alert">
                {children}
                <button onClick={onClose}>Cancel</button>
            </div>
        </>
    );
};

const DeleteButton = ({ onClick }) => {
    return <Button backgroundColor="red" onClick={onClick}>Delete</Button>;
};

function Children() {
    const [showAlert, setShowAlert] = useState(false);

    return (
        <div className="App">
            <header>Little Lemon Restaurant</header>
            <DeleteButton onClick={() => setShowAlert(true)} />
            {showAlert && (
                <Alert onClose={() => setShowAlert(false)}>
                    <h4>Delete Account</h4>
                    <p>Are you sure you want to proceed? You will miss all your delicious recipes!</p>
                </Alert>
            )}
        </div>
    );
}

export default Children;
