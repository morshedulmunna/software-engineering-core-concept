import React from "react";

const Button = ({handler, children}) => {
    console.log("Button-", children);

    return <button onClick={handler}>{children}</button>;
};

export default React.memo(Button);
