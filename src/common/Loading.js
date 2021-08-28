import React from 'react';
import img from "../images/loading.gif"
function Loading(props) {
    return (
        <div className="loading">
            <img src={img} alt="" />
        </div>
    );
}

export default Loading;