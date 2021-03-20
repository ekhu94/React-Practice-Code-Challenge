import React, { useState } from 'react'

const Sushi = ({ sushi, money, onSushiClick }) => {
  const [eaten, setEaten] = useState(false);
  const {name, img_url, price} = sushi;

  const onPlateClick = () => {
    if (!eaten && money-price >= 0) {
      setEaten(true);
      onSushiClick(sushi.id);
    } else {
      alert('もう帰ってください。お金がないだろう！')
    }
  };

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={onPlateClick}>
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