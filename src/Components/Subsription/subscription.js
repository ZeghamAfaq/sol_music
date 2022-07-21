import React from 'react'
import './style.css'
import DoneIcon from '@mui/icons-material/Done';

const Subsription = () => {
  return (
    <div className='subsription'>
        <div className='left-subs'>
            <h1>Subscription from $15/month</h1>
            <h3>Start a free trial now</h3>
            <p>Lorem Imsam Dollor Lorem Imsam Dollor
                Lorem Imsam Dollor Lorem Imsam Dollor
                Lorem Imsam Dollor Lorem Imsam Dollor
                Lorem Imsam Dollor Lorem Imsam Dollor
                Lorem Imsam Dollor Lorem Imsam Dollor
                Lorem Imsam Dollor Lorem Imsam Dollor
            </p>
            <button className='btn'>Try It Now</button>
        </div>
        <div className='right-subs'>
            <ul>
                <li><DoneIcon />Play any track</li>
                <li><DoneIcon />Listen offline</li>
                <li><DoneIcon />No add interruptions</li>
                <li><DoneIcon />Unlimited skips</li>
                <li><DoneIcon />High quality audio</li>
                <li><DoneIcon />Shuffle play</li>
            </ul>
        </div>
    </div>
  )
}

export default Subsription