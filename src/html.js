import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        {/* <script defer
  dangerouslySetInnerHTML={{
    __html: `
    var name = 'world';
    console.log('Hello ' + name);
    var navBar = document.getElementById("i4c-dialogs-container");
    console.log(navBar)
    window.addEventListener("scroll", event => {
        
        if (event.currentTarget.scrollY > 200) {
          console.log(event.currentTarget.scrollY)
          navBar.style.backgroundColor = "red";
          console.log("scrolled")
        } else {
        console.log(event.currentTarget.scrollY)
          navBar.style.backgroundColor = "yellow";
          console.log("not scrolled")
        }
      
      });
        `,
  }}
/> */}
      </body>
     
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
