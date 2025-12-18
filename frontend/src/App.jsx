import React from 'react';
import testBoard from './shodan-test-board.jpg';
import './App.css';
import Skills from './skills.js';
import Subscribers from './subscribers.js';
import Publishments from './publishments.js';
import Signup from './signup.jsx'; // import the Signup component
import { Box, Paper } from '@mui/material';

function App() {
 return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={testBoard} className="shodan-logo" alt="logo" />
        </header>
        <Box sx={{ 
          height: '840vh', 
          position: 'relative', 
          maxHeight: 'inherit',
          width: '100%',
          overflow: 'auto'
        }}>
          <Box sx={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'background.paper' }}>
            <Paper 
              elevation={0}
              sx={{ 
                padding: '5px 20px 5px 10px',
                fontSize: '13px',
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Box component="h1" sx={{ margin: 0 }}>Publishments</Box>
            </Paper>
          </Box>
          <Box sx={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'background.paper' }}>
            <Paper 
              elevation={0}
              sx={{ 
                padding: '5px 20px 5px 10px',
                fontSize: '13px',
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Box component="h1" sx={{ margin: 0 }}>Sign Up for Our Mailing List</Box>
            </Paper>
            <Box sx={{ padding: '15px 10px' }}>
              <Signup /> {/* add the Signup component */}
            </Box>
          </Box>
          <Box sx={{ padding: '15px 10px' }}>
            <Publishments/>
          </Box>
          <Box sx={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'background.paper' }}>
            <Paper 
              elevation={0}
              sx={{ 
                padding: '5px 20px 5px 10px',
                fontSize: '13px',
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'divider'
              }}
            >
              <Box component="h1" sx={{ margin: 0 }}>Skills</Box>
            </Paper>
          </Box>
          <Box sx={{ padding: '15px 10px' }}>
            <Skills/>
          </Box>
        </Box>
      </div>
    </React.Fragment>
  )
}

export default App;
