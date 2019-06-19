import React from 'react'
import Card from 'react-bootstrap/Card'

import trussInteriors from '../images/truss-interiors.png'
import abqStreetArt from '../images/abq-street-art.svg'
import druMackWeb from '../images/dru-mack-web.png'
import sklarCenter from '../images/sklar-center.png'
import twoPugs from '../images/two-pugs.png'
import sethAnderson from '../images/seth-anderson.png'
import hvlInteriors from '../images/hvl-interiors.png'



export default props => (
    <div class="portfolio-component">
    
        <h2 className="major">Portfolio</h2>
        <div className="portfolio" >
        <h3>App Development</h3>
        <div className="portfolioItem">
            <p>During my time spent learning at Deep Dive Coding I worked amongst a team to build a mobile web application, <a href="https://www.abqstreetart.com" target="_blank" >ABQ Street Art</a>, an interactive map that allows users to search and locate murals, sculptures, and other public art in Albuquerque.</p>
            <a href="https://www.abqstreetart.com" rel="noopener noreferrer" target="_blank" className="imageLink"><img className="" src={abqStreetArt} alt="ABQ Street Art red and green chile logo" /> </a> 
        </div>  
        </div>
        <div className="portfolio" >
            <h3>{props.headerText}</h3>
            <div className="portfolioItem">
                <p>{props.itemDescription}</p>
            </div>  
            <ul>
                <li>HTML5 & SCSS</li>
                <li>Wordpress & PHP</li>
                <li>JavaScript</li>
                <li>VueJS</li>
                <li>SEO Performance</li>
                <li>Adobe Creative Cloud Programs</li>
            </ul>
            <div className="portfolioGrid">
                <Card >
                <a href="https://www.drumackclimbs.com" rel="noopener noreferrer" target="_blank">
                <Card.Img variant="top" src={druMackWeb} />
                <Card.Body>
                    <Card.Title>Dru Mack Climbs</Card.Title>
                </Card.Body>
                </a>
                </Card>
                <Card >
                <a href="https://www.trussinteriors.com" rel="noopener noreferrer" target="_blank">
                <Card.Img variant="top" src={trussInteriors} />
                <Card.Body>
                <Card.Title>Truss Interiors</Card.Title>
                </Card.Body>
                </a>
                </Card>
                <Card >
                <a href="https://www.sklarcenter.com" rel="noopener noreferrer" target="_blank">
                <Card.Img variant="top" src={sklarCenter} />
                <Card.Body>
                <Card.Title>Sklar Center for Medicine</Card.Title>
                </Card.Body>
                </a>
                </Card>
                </div>
                <div className="portfolioGrid">
                <Card >
                <a href="https://www.sarahgus.yoga" rel="noopener noreferrer" target="_blank">
                <Card.Img variant="top" src={twoPugs} />
                <Card.Body>
                    <Card.Title>Two Pugs Yoga</Card.Title>
                </Card.Body>
                </a>
                </Card>
                <Card >
                <a href="https://www.sethandersonstudio.com" rel="noopener noreferrer" target="_blank">
                <Card.Img variant="top" src={sethAnderson} />
                <Card.Body>
                <Card.Title>Seth Anderson Studios</Card.Title>
                </Card.Body>
                </a>
                </Card>
                <Card >
                <a href="https://www.hvlinteriors.com" rel="noopener noreferrer" target="_blank">
                <Card.Img variant="top" src={hvlInteriors} />
                <Card.Body>
                <Card.Title>HVL Interiors</Card.Title>
                </Card.Body>
                </a>
                </Card>
            </div>
        </div>
    </div>
)