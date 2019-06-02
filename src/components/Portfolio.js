import React from 'react'
import pic02 from '../images/pic02.jpg'


export default props => (
    
    <div className="portfolio" >
        <h3>{props.headerText}</h3>
        <div className="portfolioItem">
        <p>{props.itemDescription}</p>
        
        </div>  
    </div>
)