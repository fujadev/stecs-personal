import React from 'react';

const ChartView = ({ counter }) => {
  return (
    <div className='custom-chart-view'>
      <div className='chart-inner-view'>
        <h4>50%</h4>
        <span className='overlay-white'></span>
        <span className='count-view'>1% of 5000</span>
        {/* <span className='count-view'>{counter}/5000</span> */}
      </div>
    </div>
  )
}

export default ChartView;