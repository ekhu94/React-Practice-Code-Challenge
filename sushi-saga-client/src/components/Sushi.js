import React, { useState } from 'react'

const Sushi = ({ sushi }) => {
  const [eaten, setEaten] = useState(false);
  const {name, img_url, price} = sushi;
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => setEaten(!eaten)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          eaten ?
            null
          :
            <img src={img_url} width="100%" alt={name} />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi