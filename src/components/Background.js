import React from 'react'


import natBigSur from '../images/bday-big-sur.jpg'
import resume from '../pdfs/nathaniels-resume-2019.pdf'

class Background extends React.Component {
  render () {
    return (
      <div>
        <h2 className="major">Background</h2>
        <span className="image main"><img src={natBigSur} alt="Nat Gustafson portrait on the Big Sur coast" /></span>
        <p>Hello there! My name is Nathaniel Gustafson. I am a world-travelling, rock-climbing, pug-loving front-end web developer looking to shift career directions to working with a motivated team on more in-depth and technically challenging projects.</p>
        <p>I love exploration, problem-solving, and connecting with others. Prior to starting my career in web development, I spent years teaching English internationally and living in Spain, Turkey, Austria, and South Africa.</p>
        <p>Since completing a fullstack bootcamp through <a href="www.deepdivecoding.com" target="blank">Deep Dive Coding</a>, I have spent the last year travelling extensively doing contract work for a variety of clients. My main client was an agency based in Santa Fe that tasked me with being their lead developer. In that role I was in charge of a small team of developers tasked with building new sites and debugging and fixing everything from CSS to improper API calls to database issues. I have learned a lot of valuable lessons from this time in the freelance world, but would like to invest more time and energy in working with highly skilled developers to better my craft. I am excited to pour my energy and motivation usually spent on travelling and freelance work into learning new skills and advancing my career.</p>
        <p>For a full view of my education and work experience you can download my <a href={resume} target="_blank">resume here.</a></p>
      </div>
    )
  }
}

export default Background;