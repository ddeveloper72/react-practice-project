import React from "react";
import Card from "./Card";
import Button from "./Button";
import Styles from "./ErrorModal.module.css";
import ReactDom from 'react-dom';

const Backdrop = props => {
    return <div className={Styles.backdrop} onClick={props.onErrorConfirm} />
}

const ModalOverlay = props => {
    return <Card className={Styles.modal}>
        <header className={Styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={Styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={Styles.actions}>
            <Button onClick={props.onErrorConfirm}>Ok</Button>
        </footer>
    </Card>
}

const ErrorModal = props => {

    return (
        <React.Fragment>
            {/* use std javascript to render the JSX code to the dom element portals identified by ID */}
            {ReactDom.createPortal(
                <Backdrop onErrorConfirm={props.onErrorConfirm} />,
                document.getElementById('backdrop-root')
            )}
            {ReactDom.createPortal(
                <ModalOverlay title={props.title} message={props.message} onErrorConfirm={props.onErrorConfirm} />,
                document.getElementById('overlay-root')
            )}
        </React.Fragment>
    )
};


export default ErrorModal;
