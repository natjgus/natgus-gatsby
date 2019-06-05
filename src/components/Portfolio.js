import React from 'react'



export default props => (
    
    <div className="portfolio" >
        <h3>{props.headerText}</h3>
        <div className="portfolioItem">
        <p>{props.itemDescription}</p>
        
        </div>  
    </div>
)