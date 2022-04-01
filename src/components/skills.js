import * as React from 'react'
import {
  FaCodeBranch,
  FaHtml5,
  FaCss3,
  FaJs,
  FaWordpress,
  FaNodeJs,
  FaReact,
  FaPhp,
  FaLinux,
  FaAws,
  FaJava,
  FaDocker,
  FaDatabase
} from 'react-icons/fa'
import { DiMongodb, DiJqueryLogo, DiFirebase } from 'react-icons/di'

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        Below is a list of technologies I am familiar with and have used to
        create real projects. It is not an definitive list and am constantly
        learning new tech and experimenting.
      </p>

      <div className="container">
        <h1>Tools I use:</h1>

        <div className="bgrid-quarters s-bgrid-thirds cf">
          <div className="bars">
            <ul className="skills">
              <div className="columns">
                <li>
                  <span className="bar-expand gothis">
                    <FaHtml5 />
                  </span>
                  <em>HTML5</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis">
                    <FaCss3 />
                  </span>
                  <em>CSS</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis">
                    <FaJs />
                  </span>
                  <em>JavaScript</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis">
                    <FaWordpress />
                  </span>
                  <em>Wordpress</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis">
                    <FaNodeJs />
                  </span>
                  <em>Nodejs</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis">
                    <FaCodeBranch />
                  </span>
                  <em>Git</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis">
                    <DiJqueryLogo />
                  </span>
                  <em>JQuery</em>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="bgrid-quarters s-bgrid-thirds cf">
          <div className="bars">
            <ul className="skills">
              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <FaReact />
                  </span>
                  <em>React</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <FaReact />
                  </span>
                  <em>Redux</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <FaPhp />
                  </span>
                  <em>PHP</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <FaDatabase />
                  </span>
                  <em>SQL</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <DiMongodb />
                  </span>
                  <em>MongoDB</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <DiFirebase />
                  </span>
                  <em>Firebase</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <FaLinux />
                  </span>
                  <em>Linux</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <FaAws />
                  </span>
                  <em>AWS</em>
                </li>
              </div>
            </ul>
          </div>
        </div>

        <div className="container">
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
                    <span className="bar-expand stilllearning">
                      <FaJava />
                    </span>
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
                    <span className="bar-expand stilllearning">
                      <FaDocker />
                    </span>
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
)

export default Skills
