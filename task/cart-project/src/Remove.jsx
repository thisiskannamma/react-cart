import React, { useState } from "react";

function Remove(props) {
   
    return (
        <div>
            <button onClick={() => {
                props.remove(1)
            }} className="btn btn-outline-dark mt-auto" href="#">Remove From Cart</button >
        </div>
    )
}

export default Remove