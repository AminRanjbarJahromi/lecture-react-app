import React from "react";

// rsf is shortcut for creatin function component

function Header() {

    return (
        <>
            Header
        </>
    );
}

function Content() {

    return (
        <>
            Content: <Welcome name='Amin' message='and welcome to my first experince' />
            <br />
            content: <Welcome name='User' message=' welcome to your first experience' />
        </>
    );
}

function Welcome(props) {

    return (
        <div>
            Hi {props.name} {props.message}

        </div>
    );

}

function Footer() {

    return (
        <>
            Footer
        </>
    );
}

function AppFunction() {

    return (
        <>
            < Header />
            <hr />
            < Content />
            <hr />
            < Footer />
        </>
    );

}

export default AppFunction;