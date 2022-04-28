import { Send } from '@material-ui/icons'
import React from 'react'
import "./Newsletter.css"
const Newsletter = () => {
  return (
    <div className="Container-Newsletter">
      <h1 className="Title-Newsletter">Newsletter</h1>
      <div className="Description-Newsletter">Get timely updates from your favorite products.</div>
      <div className="InputContainer-Newsletter">
        <input className="Input-Newsletter" placeholder="Your email"></input>
        <button className="Button-Newsletter">
            <Send/>
        </button>
      </div>
    </div>
  )
}

export default Newsletter
