import React from 'react'
import PropTypes from 'prop-types'

import pugsCircle from '../images/pugsCircle.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
        <span className="image fit"><img src={pugsCircle} alt="" /></span> 
        </div>
        <div className="content">
            <div className="inner">
                <h1>Nathaniel Gustafson</h1>
                <p>Front-End Web Developer</p>
                <p id="lowerCase">Welcome to my world! Have a look around to see my work and learn more about what makes me tick!</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Portfolio</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>Photography</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
