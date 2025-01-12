import { useEffect, useState } from 'react';
import { Box, Container, Divider, Link } from '@mui/material';
import Collapsible from '../components/Collapsible';

// const config = require('../config.json');

export default function ResumePage() {
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
  /**
   * Function that creates JS html code for edu/projects first line.
   * TODO parse file.
   * @param {*} line 
   * @returns JS code
   */
  function eduProjFirstLine(line) {
    // slice 1
    let barLoc = line.indexOf('|');  // index where to slice
    let title = line.slice(0, barLoc).trim();
    // slice 2
    let remaining = line.slice(barLoc+1)
    barLoc = remaining.indexOf('|');
    let dates = remaining.slice(0, barLoc).trim();
    // slice 3
    let city = remaining.slice(barLoc+1).trim();
    
    return <p style={pFormat}><b>{title}</b>{fourSpaces}|{fourSpaces}{dates}{fourSpaces}|{fourSpaces}{city}</p>;
  }

  /**
 * Function that creates JS html code for proexp seecond line.
 * TODO parse file.
 * @param {*} line 
 * @returns JS code
 */
  function expTitle(title, line) {
    // slice 1
    let barLoc = line.indexOf('|');  // index where to slice
    let dates = line.slice(0, barLoc).trim();
    // slice 2
    let remaining = line.slice(barLoc+1)
    barLoc = remaining.indexOf('|');
    let company = remaining.slice(0, barLoc).trim();
    // slice 3
    let city = remaining.slice(barLoc+1).trim();
    <p style={pFormat}><b>{title}</b></p>
    return <p style={pFormat}><b>{title}</b><br/>{dates}{fourSpaces}|{fourSpaces}{company}{fourSpaces}|{fourSpaces}{city}</p>;
  }

  /**
   * Function that creates JS html code for item from TECHNICAL SKILLS section.
   * TODO parse file.
   * @param {*} line 
   * @returns JS code
   */
  function skillLine(line) {
    let colonLoc = line.indexOf(':');  // index where to slice
    // slice
    let category = line.slice(2, colonLoc);  // hypen, space always at start so start at 2
    let description = line.slice(colonLoc+1);
    
    return <p style={pFormat}><b>{category}</b>: {description}</p>;
  }


  // call functions
  let ts1 = skillLine("– Preferred Languages: Java, Python");
  let ts2 = skillLine("– Language Exposure: C++, C, SQL, MySQL, JavaScript, HTML, CSS");
  let ts3 = skillLine("– Competencies: Internet & Web Systems (Java, AWS EC2), Networked Systems (C++, Docker), Database & Information Systems (MySQL, JavaScript), Computer & Network Security (Python, JavaScript, VirtualBox)");
  let e1 = eduProjFirstLine("University of Pennsylvania    |    Aug 2022 – May 2024    |    Philadelphia, PA");
  let e2 = eduProjFirstLine("Temple University    |    Aug 2012 – May 2016    |    Philadelphia, PA");
  let p1 = eduProjFirstLine("Chord and Search | Jan 2024 – May 2024 | C++, NS3, Docker, GitHub");
  let p2 = eduProjFirstLine("FishFishGo | Aug 2023 – Dec 2023 | Java, AWS EC2, REST, GitHub");
  let p3 = eduProjFirstLine("Movie ZYMMformation | Mar 2024 – May 2024 | MySQL, JavaScript, Node.js, React, AWS RDS, GitHub");
  let p4 = eduProjFirstLine("Security Attacks | Aug 2023 – Dec 2023 | C, x86 Assembly, Python, JavaScript, VirtualBox");
  let exp1 = expTitle("Graduate Teaching Assistant: Intro to Software Development, Networked Systems", "Jan 2024 – Present | University of Pennsylvania | Philadelphia, PA");
  let exp2 = expTitle("Assistant Director of Data Analytics","Jul 2018 – Jul 2022 | University of Pennsylvania | Philadelphia, PA");


  return (
    <Container style={allFormat}>
      {/* name */}
      <Container style={nameFormat}>
        <h1>Naomi Makishi</h1>
        {/* TODO add image for links */}
        {/* <Container style={flexFormat}>
          <Box sx={{ width: 100, p: 0 }}>
            <a style={pFormat} href="http://www.linkedin.com/in/makishi"></a>
            <img src="/src/images/linkedinlogo.png" alt="LinkedIn logo with link to profile"/>
          </Box>
          <Box sx={{ width: 100, p: 0 }}>
          <a style={pFormat} href="http://www.github.com/naomi-m"><img src="" alt="GitHub logo with link to profile"></img></a>
          </Box>
        </Container> */}
        {/* <p>testtestestasf;l akjsdflkj aioiuawer haksjfan nvmvmaiue woi yatyhqljkfas kljfaoi ueouop qwiet ypqwe fk sjdnvnzx cmvlkflkj aioiuawer haksjfan nvmvmaiue woi yatyhqljkfas kljfaoi ueouop qwiet ypqwe fk sjdnvnzx cmvlkja dfoja dfoi</p> */}
      </Container>
      
      {/* edu */}
      <Container style={contentFormat}>
        <h3>EDUCATION</h3>
        {e1}
        <p style={pFormat}>Masters, Computer Science (MCIT)</p>
        <br />
        <Collapsible label="">
          {e2}
          <p style={pFormat}>Bachelors, Criminal Justice</p>
        </Collapsible>
      </Container>

      {/* skills */}
      <Container style={contentFormat}>
        <h3>TECHNICAL SKILLS</h3>
        {ts1}
        {ts2}
        {ts3}
      </Container>

      {/* projects */}
      <Container style={contentFormat}>
        <h3>PROJECTS</h3>

        {p1}
        <p style={pFormat}>– Peer-to-peer search engine – used Distributed Hash Table (DHT) for O(log n) efficient stabilization, information storage, and retrieval. Used GitHub for collaboration with teammates.
        </p>
        <p style={pFormat}>– Constructed node stabilization Chord-based network overlay protocol.
        </p>
        <p style={pFormat}>– Implemented IP-layer network node neighbor discovery and Link State routing using Dijkstra’s algorithm – used NS3 as a network simulator and Docker to run in Linux environment.
        </p>        
        <br/>

        {p2}
        <p style={pFormat}>– Client-server web app search engine like early-day Google – deployed on the cloud using AWS EC2.
        </p>
        <p style={pFormat}>– Employed large-scale data analytics techniques like MapReduce by creating mini version of the scalable analytics system Spark from scratch. Used GitHub for collaboration with teammates.
        </p>
        <p style={pFormat}>– Exercised OOP by building frontend, distributed storage, robots.txt-polite crawler, and indexer components.
        </p>
        <br/>

        {p3}
        <p style={pFormat}>– Client-server web app that displays movie facts from AWS RDS retrieving data using CTE’s, group by’s, aggregations, etc. Built API routes on Node.js. Used GitHub for collaboration with teammates.
        </p>
        <p style={pFormat}>– Pre-processed data using Python/Google Colab, and designed MySQL queries in DataGrip.
        </p>
        <p style={pFormat}>– Used React Functional Components to render DB info, useState hooks, and Container/Data Grid components from MUI library for frontend.
        </p>
        <br/>

        {p4}
        <p style={pFormat}>– Penetration tests on systems using low-level attacks like buffer overflow – manipulating the stack with C and Assembly within virtualized Linux environment.
        </p>
        <p style={pFormat}>– Exploited basic cryptography and authentication failures via length extensions, MD5 collisions using fastcoll tool, and RSA signature forgeries using Bleichenbacher technique, in Python.
        </p>
        <p style={pFormat}>– Exploited web-based vulnerabilities through usage of SQL injections, CSRF, and XSS strategies.
        </p>
      </Container>

      {/* exp */}
      <Container style={contentFormat}>
        <h3>PROFESSIONAL EXPERIENCE</h3>

        {exp1}
        <p style={pFormat}>– Taught course content by leading and supporting recitations, improving engagement and comprehension.
        </p>
        <p style={pFormat}>– Provided technical debugging support during one-on-one office hours (Python, Java, C++).
        </p>
        <p style={pFormat}>– Facilitated troubleshooting and provided feedback through class discussion forums and grading.
        </p>
        <br/>

        {exp2}
        <p style={pFormat}>– Collaborated with various internal/external partners to coordinate the student calling program by determining data-driven best practices, analyzing and providing client reports, and quality checking and maintaining large data transfer processes through SFTP.
        </p>
        <p style={pFormat}>– Managed recurring omni-channel (email, mail, text) direct response projects, datasets in the hundreds of thousands, analyses, and reports for internal clients with heavy utilization of Qlikview, Excel, and Salesforce Marketing Cloud. Ran reports using Microsoft PowerBI and RStudio.
        </p>
        <p style={pFormat}>– Enhanced project KPIs through data-driven strategic initiatives and optimized SOPs to improve project management. Met deadlines and accommodated ad-hoc requests due to good time management and planning. Used project management tools like JIRA and Asana.
        </p>
        <p style={pFormat}>– Fostered relationships across different hierarchies and teams within the complex Development & Alumni Relations organizational structure, partnering with diverse colleagues and working styles, which improved collaboration and communication.
        </p>
      </Container>

      {/* page bottom spacing */}
      <Container><br/><br/></Container>
      
    </Container>
  );
};