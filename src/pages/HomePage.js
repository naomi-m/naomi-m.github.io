import { Container, Divider, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

// const config = require('../config.json');

export default function HomePage() {

  // container formatting
  // const flexFormat = { display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' };
  const allFormat = { fontFamily: 'calibri light' };
  const nameFormat = { textAlign: 'center' };
  const contentFormat = { width: '70%' };
  const pFormat = { margin: 0, padding: 0 }
  const fourSpaces = "\u00A0\u00A0\u00A0\u00A0";  // unicode representation of non-breaking space '&nbsp;'
  const footerFormat = { fontSize: 10, textAlign: 'center' };


  //TODO function that parses education/projects first line

  /**
   * Function that creates JS html code for item from TECHNICAL SKILLS section.
   * TODO alter to read/parse resume file for more efficiency.
   * @param {*} line 
   * @returns JS code
   */
  function skillLine(line) {
    // slice indexes
    let hyphLoc = 0;
    let colonLoc = line.indexOf(':');
    // slice
    let category = line.slice(hyphLoc+2, colonLoc);
    let description = line.slice(colonLoc+1);
    
    return <p style={pFormat}><b>{category}</b>: {description}</p>;
  }
  let ts1 = skillLine("– Preferred Languages: Java, Python");
  let ts2 = skillLine("– Language Exposure: C++, C, SQL, MySQL, JavaScript, HTML, CSS");
  let ts3 = skillLine("– Competencies: Internet & Web Systems (Java, AWS EC2), Networked Systems (C++, Docker), Database & Information Systems (MySQL, JavaScript), Computer & Network Security (Python, JavaScript, VirtualBox)");


  return (
    <Container style={allFormat}>
      <Container><br/><br/></Container>
      
      <Container style={nameFormat}>
        <h1>Naomi Makishi</h1>
        <p>testtestestasf;l akjsdflkj aioiuawer haksjfan nvmvmaiue woi yatyhqljkfas kljfaoi ueouop qwiet ypqwe fk sjdnvnzx cmvlkflkj aioiuawer haksjfan nvmvmaiue woi yatyhqljkfas kljfaoi ueouop qwiet ypqwe fk sjdnvnzx cmvlkja dfoja dfoi</p>
      </Container>
      
      <Container style={contentFormat}>
        <h3>EDUCATION</h3>
        <p style={pFormat}><b>University of Pennsylvania</b>{fourSpaces}|{fourSpaces}Aug 2022 - May 2024{fourSpaces}|{fourSpaces}Philadelphia, PA</p>
        <p style={pFormat}>Masters, Computer Science (MCIT)</p>
        <p>testtestestasf;l akjsdflkj aioiuawer haksjfan nvmvmaiue woi yatyhqljkfas kljfaoi ueouop qwiet ypqwe fk sjdnvnzx cmvlkflkj aioiuawer haksjfan nvmvmaiue woi yatyhqljkfas kljfaoi ueouop qwiet ypqwe fk sjdnvnzx cmvlkja dfoja dfoi</p>
        <br/>
      </Container>

      <Container style={contentFormat}>
        <h3>TECHNICAL SKILLS</h3>
        {ts1}
        {ts2}
        {ts3}
        <br/>
      </Container>

      <Container style={contentFormat}>
        <h3>PROJECTS</h3>
        <br/>
      </Container>

      <Container style={contentFormat}>
        <h3>PROFESSIONAL EXPERIENCE</h3>
        <br/>
      </Container>

      <Container><br/><br/></Container>

      <Container style={footerFormat}>
        <Divider />
        <p>Created using: JavaScript, React, HTML, CSS, Node.js, GitHub</p>
      </Container>
    </Container>
  );
};