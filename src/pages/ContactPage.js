import { useEffect, useState } from 'react';
import { Box, Container, Divider, Link } from '@mui/material';
import Collapsible from '../components/Collapsible';


export default function ContactPage() {
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
  


  return (
    <Container style={allFormat}>
      <Container style={nameFormat}>
        <h1>contact</h1>
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
    </Container>
  );
};