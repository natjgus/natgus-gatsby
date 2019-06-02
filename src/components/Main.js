import React from 'react'
import PropTypes from 'prop-types'
import Portfolio from './Portfolio'
import Card from 'react-bootstrap/Card';

import trussInteriors from '../images/truss-interiors.png'
import portoWeb from '../images/porto-web.jpg'
import abqStreetArt from '../images/abq-street-art.svg'
import druMackWeb from '../images/dru-mack-web.png'
import sklarCenter from '../images/sklar-center.png'
import twoPugs from '../images/two-pugs.png'
import sethAnderson from '../images/seth-anderson.png'
import hvlInteriors from '../images/hvl-interiors.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Background</h2>
          <span className="image main"><img src={portoWeb} alt="" /></span>
          <p>Hello there! I am a world-travelling, rock-climbing, pug-loving front end web developer looking to shift career directions to working with a motivated team that </p>
          <p>I love exploration, problem-solving, and connecting with others. Prior to starting my career in web development I spent years teaching English internationally and living in Spain, Turkey, Austria, and South Africa.</p>
          <p>Since completing a fullstack bootcamp through <a href="www.deepdivecoding.com" target="blank">Deep Dive Coding</a> I have spent the last year travelling extensively doing contract work for a variety of clients. My main client was an agency based in Santa Fe that tasked me with being their lead developer in charge of a team . I have learned a lot of valuable lessons from this time in the freelance world, but have . I am excited to pour my energy and motivation usually spent on </p>
          <p></p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Portfolio</h2>
          <div className="portfolio" >
            <h3>App Development</h3>
            <div className="portfolioItem">
              <p>During my time spent learning at Deep Dive Coding I worked amongst a team to build a mobile web application, <a href="https://www.abqstreetart.com" target="_blank" >ABQ Street Art</a>, an interactive map that allows users to search and locate murals, sculptures, and other public art in Albuquerque.</p>
              <a href="https://www.abqstreetart.com" rel="noopener" target="_blank" className="imageLink"><img className="" src={abqStreetArt} alt="ABQ Street Art red and green chile logo" /> </a> 
            </div>  
          </div>
          <Portfolio
            headerText="Website Design and Development"
            itemDescription="Throughout the last 16 months of freelance web development I have created a wide variety of professional websites for clients from professional athletes to interior designers. I have built many of the sites from scratch, from the logo design and branding to complete site development.  With clean, responsive design in mind I use the following technologies extensively:"
          />
          <ul>
            <li>HTML5 & SCSS</li>
            <li>Wordpress</li>
            <li>PHP</li>
            <li>JavaScript (vanilla, jQuery, and other frameworks)</li>
            <li>SEO Performance</li>
            <li>Adobe Creative Cloud Programs</li>
          </ul>
          <div className="portfolioGrid">
            <Card >
              <a href="https://www.drumackclimbs.com" rel="noopener" target="_blank">
              <Card.Img variant="top" src={druMackWeb} />
              <Card.Body>
                <Card.Title>Dru Mack Climbs</Card.Title>
              </Card.Body>
              </a>
            </Card>
            <Card >
            <a href="https://www.trussinteriors.com" rel="noopener" target="_blank">
              <Card.Img variant="top" src={trussInteriors} />
              <Card.Body>
              <Card.Title>Truss Interiors</Card.Title>
              </Card.Body>
              </a>
            </Card>
            <Card >
              <a href="https://www.sklarcenter.com" rel="noopener" target="_blank">
              <Card.Img variant="top" src={sklarCenter} />
              <Card.Body>
              <Card.Title>Sklar Center for Medicine</Card.Title>
              </Card.Body>
              </a>
            </Card>
            </div>
            <div className="portfolioGrid">
            <Card >
              <a href="https://www.sarahgus.yoga" rel="noopener" target="_blank">
              <Card.Img variant="top" src={twoPugs} />
              <Card.Body>
                <Card.Title>Two Pugs Yoga</Card.Title>
              </Card.Body>
              </a>
            </Card>
            <Card >
              <a href="https://www.sethandersonstudio.com" rel="noopener" target="_blank">
              <Card.Img variant="top" src={sethAnderson} />
              <Card.Body>
              <Card.Title>Seth Anderson Studios</Card.Title>
              </Card.Body>
              </a>
            </Card>
            <Card >
              <a href="https://www.hvlinteriors.com" rel="noopener" target="_blank">
              <Card.Img variant="top" src={hvlInteriors} />
              <Card.Body>
              <Card.Title>HVL Interiors</Card.Title>
              </Card.Body>
              </a>
            </Card>
          </div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Photography</h2>
          <p>My complete photography portfolio is coming soon. In the meantime here is an eclectic gallery with some of my favorite shots. Enjoy!</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>Intersted in working together, have any questions, or just want to connect? </p>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-linkedin"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main