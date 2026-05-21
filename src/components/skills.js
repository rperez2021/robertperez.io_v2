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
  FaDocker,
  FaDatabase,
  FaRobot,
  FaPlug
} from 'react-icons/fa'
import {
  DiMongodb,
  DiJqueryLogo
} from 'react-icons/di'
import {
  SiTypescript,
  SiRedux,
  SiVuedotjs,
  SiAstro,
  SiOpenai
} from 'react-icons/si'

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
        create real projects. It is not a definitive list and I am constantly
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
                    <SiTypescript />
                  </span>
                  <em>TypeScript</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis">
                    <FaWordpress />
                  </span>
                  <em>WordPress</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gothis">
                    <FaNodeJs />
                  </span>
                  <em>Node.js</em>
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
                  <em>jQuery</em>
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
                    <SiRedux />
                  </span>
                  <em>Redux</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <SiVuedotjs />
                  </span>
                  <em>Vue</em>
                </li>
              </div>

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <SiAstro />
                  </span>
                  <em>Astro</em>
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

              <div className="columns">
                <li>
                  <span className="bar-expand gettingit">
                    <FaDocker />
                  </span>
                  <em>Docker</em>
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
                    <span className="bar-expand stilllearning">
                      <FaRobot />
                    </span>
                    <em>Claude / Anthropic</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning">
                      <SiOpenai />
                    </span>
                    <em>ChatGPT / OpenAI</em>
                  </li>
                </div>

                <div className="columns">
                  <li>
                    <span className="bar-expand stilllearning">
                      <FaPlug />
                    </span>
                    <em>MCP</em>
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
