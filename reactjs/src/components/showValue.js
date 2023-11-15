import React from "react";

const ShowValue = ({value, text}) => {
    console.log("ShowValue", text);
    return (
        <div>
            {text} : {value}
        </div>
    );
};

export default React.memo(ShowValue);
