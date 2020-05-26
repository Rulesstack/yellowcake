import React from 'react'
import InstagramFeed from './InstagramFeed'
import './Footer.css'

export default () => (
  <div>
    <h2 className="taCenter">
      
    </h2>
    <br />
    <InstagramFeed count="8" />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © {new Date().getFullYear()} Rulesstack .All rights reserved. 
        </span>
      </div>
    </footer>
  </div>
)
