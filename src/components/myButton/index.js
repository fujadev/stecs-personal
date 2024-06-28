// import React from "react";
// import classes from "./styles.module.css";

// const MyButton = (props) => {
//     if (props.href) {
//         return <a className={classes.myButton} {...props} />
//     }
//     return <button className === signUpButton ? className={classes.signUpButton} className={classes.myButton} type="button" {...props} />
// }

// export default MyButton;

import React from "react";
import classes from "./styles.module.css";

const MyButton = (props) => {
    // Destructure props to get className, children, and other props
    const { className, children, ...otherProps } = props;

    if (props.href) {
        return (
            <a className={classes.myButton} {...otherProps}>
                {children} {/* Render children as the content of the anchor */}
            </a>
        );
    }

    // Determine if it's a sign up button based on props
    const isSignUpButton = props.type === "signUp";

    // Conditional rendering of button based on isSignUpButton
    if (isSignUpButton) {
        return (
            <button className={`${classes.signUpButton}`} {...otherProps}>
                {children} {/* Render children as the content of the button */}
            </button>
        );
    } else {
        return (
            <button className={`${classes.myButton} ${className}`} type="button" {...otherProps}>
                {children} {/* Render children as the content of the button */}
            </button>
        );
    }
};

export default MyButton;
