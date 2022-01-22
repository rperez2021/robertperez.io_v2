import React from "react";
import { FaCodeFork } from "react-icons/fa"
import { 
  IoSocialHtml5Outline, 
  IoSocialNodejs, 
  IoSocialCss3Outline, 
  IoSocialJavascriptOutline,
  IoSocialWordpressOutline,
   } from "react-icons/io"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faJs, faJsSquare, faPhp, faGit, faLinux, faAws, faJava, faDocker } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import ReduxIcon from './icons/Redux.js'
import MongoIcon from './icons/Mongo.js'
import JqueryIcon from './icons/Jquery.js'
import FirebaseIcon from './icons/Firebase.js'

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
  
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        I considered putting skill bars below and although ocassionally I feel like I have leveld up, I also dont feel like I am an expert on anything,
        so I decided to split it into three categories. Tech I feel comfortable with, tech I feel I get the hang of and stuff I am still learning.
      </p>


      <div className="container">

        <h1>Yeah I got this...</h1>

        <div className="bgrid-quarters s-bgrid-thirds cf">
          <div className="bars">
            <ul className="skills">

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><IoSocialHtml5Outline/></span>
                  <em>HTML5</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><IoSocialCss3Outline/></span>
                  <em>CSS</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><FontAwesomeIcon icon={faJsSquare}/></span>
                  <em>JavaScript</em>
                </li>
              </div>


              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><IoSocialWordpressOutline/></span>
                  <em>Wordpress</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><IoSocialNodejs/></span>
                  <em>Nodejs</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis"><FaCodeFork /></span>
                  <em>Git</em>
                </li>
              </div>


              <div className="columns">
                <li>
                  <span className="bar-expand gothis"/>
                  <em>JQuery</em>
                </li>
              </div>

            </ul>
          </div>
        </div>


      </div>


      <div className="container">

        <h1>I think I got this?</h1>

        <div className="bgrid-quarters s-bgrid-thirds cf">
          <div className="bars">
            <ul className="skills">

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit"><FontAwesomeIcon icon={faReact}/></span>
                  <em>React</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit"><ReduxIcon /></span>
                  <em>Redux</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit"><FontAwesomeIcon icon={faPhp}/></span>
                  <em>PHP</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit"><FontAwesomeIcon icon={faDatabase}/></span>
                  <em>SQL</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit"><MongoIcon/></span>
                  <em>MongoDB</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit"/>
                  <em>Firebase</em>
                </li>
              </div>

               <div className="columns">
                <li>
                  <span className="bar-expand gettingit"><FontAwesomeIcon icon={faLinux}/></span>
                  <em>Linux</em>
                </li>
              </div>

               <div className="columns">
                <li>
                  <span className="bar-expand gettingit"><FontAwesomeIcon icon={faAws}/></span>
                  <em>AWS</em>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="container">

          <h1>Still Learning</h1>

          <div className="bgrid-quarters s-bgrid-thirds cf">
            <div className="bars">
              <ul className="skills">

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Elixir</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning"><FontAwesomeIcon icon={faJava}/></span>
                    <em>Java</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Webpack</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning"><FontAwesomeIcon icon={faDocker}/></span>
                    <em>Docker</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Testing</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning" />
                    <em>Ruby</em>
                  </li>
                </div>
              </ul>
            </div>
          </div>


        </div>

      </div>

    </div>
  </div>
);

export default Skills;
