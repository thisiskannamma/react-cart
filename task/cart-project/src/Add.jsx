import React from "react";

function Add(props) {
    
  return (
    <div>
        <button onClick={() => {
                props.add(1)
            }} className="btn btn-outline-dark mt-auto" href="#">Add to Cart</button >
    </div>
  )
}

export default Add