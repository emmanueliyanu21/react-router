import React from 'react'

const About = (props) => {
    //console.log(props)
    // setTimeout(() => {
    //     props.history.push('/contact')
    // }, 2000)
    return (
        <div className="container">
            <h4 className="center">About</h4>
            <p>Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the public folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.</p>
        </div>
    )
}

export default About