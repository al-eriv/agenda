import React from "react";

function contador({ numClicks }){
    return(
      <div className='contador'>
        {numClicks}
      </div>
    );
}

export default contador;