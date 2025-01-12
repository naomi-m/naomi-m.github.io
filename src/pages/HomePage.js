import { useEffect, useState } from 'react';
import { Box, Container, Divider, Link } from '@mui/material';
import Collapsible from '../components/Collapsible';

// const config = require('../config.json');

export default function HomePage() {
  const widthCompare = 1000;  //768 standard px for mobile
  let widthWeb = 100;
  let widthMobile = 60;
  let [containerWidth, setContainerWidth] = useState(window.innerWidth <= widthCompare ? widthWeb : widthMobile);

  useEffect(() => {
    // sync container width based on window size
    function handleResize() {
      setContainerWidth(window.innerWidth <= widthCompare ? widthWeb : widthMobile);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });


  // container formatting
  const flexFormat = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', width: `${containerWidth}%` };
  const allFormat = { width: `${containerWidth}%` };
  const nameFormat = { textAlign: 'center', marginTop: 100 };
  const contentFormat = { padding: 30 };
  const pFormat = { margin: 0, padding: 0 }
  const fourSpaces = "\u00A0\u00A0\u00A0\u00A0";  // unicode representation of non-breaking space '&nbsp;'
  const footerFormat = { fontSize: 10, textAlign: 'center' };


  // functions



  // call functions


  return (
    <Container style={allFormat}>
      {/* name */}
      <Container style={nameFormat}>
        <h4>Background</h4>
        <p style={pFormat}>Recent graduate from Penn with a CS Masters having focused my coursework on becoming a well-rounded developer. I have experience with databases, fundamental security practices, networking architecture, distributed systems, and frontend web app deployment.
          I am most proficient with Java and Python, but I have had exposure to other languages and am willing to use any language or tool when building projects. I have various experiences – using GitHub for version control, multi-collaborator projects, running containerized Linux environments using Docker, and AWS EC2 web app deployment – to highlight a few. The project I am most proud of is the early-day Google search engine (FishFishGo) I created with teammates.
          I have experience performing in high-stress, complex hierarchical organizations, as well as collaborating with various colleagues and across teams. Experienced with project management, organization skills, in addition to creativity in improving processes and providing deliverables, to drive internal goals.</p>
      </Container>

      <Container style={nameFormat}>
        <h4>Website</h4>
        <p style={pFormat}>Personal hobby website created using: JavaScript, React, HTML, CSS, Node.js, GitHub. Collapsible section created using useState and button. Content width dynamic based on page resizing using useEffect and useState.</p>
      </Container>
      
      {/* page bottom spacing */}
      <Container><br/><br/></Container>


    </Container>
  );
};


// old code: maybe reuse
      // {/* footer */}
      // <Container style={footerFormat}>
      //   <Divider />
      //   <p>Created using: JavaScript, React, HTML, CSS, Node.js, GitHub</p>
      // </Container>