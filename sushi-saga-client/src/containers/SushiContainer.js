import React from 'react'
import Sushi from '../components/Sushi';
import MoreButton from '../components/MoreButton';

const SushiContainer = ({ sushis, onMoreClick, onSushiClick }) => {

  const renderedSushis = sushis.map(s => {
    return <Sushi key={s.id} sushi={s} onSushiClick={onSushiClick} />
  });

  return (
    <React.Fragment>
      <div className="belt">
        {renderedSushis}
        <MoreButton onMoreClick={onMoreClick} />
      </div>
    </React.Fragment>
  )
}

export default SushiContainer