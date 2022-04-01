import * as React from 'react'
import PortfolioModal from './portfoliomodal'
import SJDBLogo from '../images/sjdblogo.jpg'
import BKitchenLogo from '../images/bitchinkitchenlogo.png'
import IRLGamersLogo from '../images/irlgamerslogo.png'
import BrevityIsLogo from '../images/brevityislogo.png'

const portfolioElements = [
  {
    id: 1,
    title: 'Brevity Is',
    url: 'https://brevity-is.com',
    image: { BrevityIsLogo },
    type: 'Web Design Firm',
    desc: 'My Company Website',
    tools: 'HTML, CSS, JS',
    collaborators: ''
  },
  {
    id: 2,
    title: 'SJDB Advocates',
    url: 'http://www.sjdbadvocates.com',
    image: { SJDBLogo },
    type: 'Small Business Website',
    desc: 'Small Business Client',
    tools: 'HTML, CSS, JS',
    collaborators: ''
  },
  {
    id: 3,
    title: 'Bitchin Kitchen',
    url: 'https://bitchin-kitchen.herokuapp.com/',
    image: { BKitchenLogo },
    type: 'Single Page App',
    desc: 'Meal Prepping Application',
    tools: 'Heroku, Postgres, Express, Node, React, Webpack, Firebase',
    collaborators:
      'Collaborators: Kyle Magee, Ryan Palermo, Roberto Perez, Brian Santos'
  },
  {
    id: 4,
    title: 'IRL Gamers',
    url: 'http://www.irlgamers.com',
    image: { IRLGamersLogo },
    type: 'Single Page App',
    desc: 'Game and Event Scheduling Application',
    tools: 'Mongoose, Express, React, Node, Redux, Webpack, Firebase',
    collaborators:
      'Collaborators: Janet Hwu, Kyle Magee, Michael Malach, Roberto Perez'
  }
]

export class Portfolio extends React.Component {
  render() {
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolioElements.map(function(data, index) {
                return <PortfolioModal key={data.id} data={data} />
              })}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
