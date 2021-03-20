import React, { useState } from 'react'
import Sushi from '../components/Sushi';
import MoreButton from '../components/MoreButton';

const SushiContainer = ({ sushis }) => {
  const [sushiIdx, setSushiIdx] = useState(0);

  const getNextSushis = () => {
    return renderedSushis.slice(sushiIdx, sushiIdx + 4)
  }

  const renderedSushis = sushis.map(s => {
    return <Sushi key={s.id} sushi={s} />
  });

  return (
    <React.Fragment>
      <div className="belt">
        {getNextSushis()}
        <MoreButton />
      </div>
    </React.Fragment>
  )
}

export default SushiContainer