import React, { useState } from 'react';
import testBoard from './shodan-test-board.jpg';
import './App.css';
import Skills from './skills.js';
import Publishments from './publishments.js';
import Signup from './signup.jsx'; // import the Signup component
import { Box, Tabs, Tab, Typography } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <div className="App">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="main navigation tabs">
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Publishments" {...a11yProps(1)} />
              <Tab label="Sign Up for Our Mailing List" {...a11yProps(2)} />
              <Tab label="Skills" {...a11yProps(3)} />
            </Tabs>
          </Box>
          {value === 0 ? (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                component="img"
                src={testBoard}
                alt="Don Denoncourt"
                sx={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: '20px 40px',
                  borderRadius: '4px',
                }}
              >
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                  }}
                >
                  Don Denoncourt, Author
                </Typography>
              </Box>
            </Box>
          ) : (
            <>
              <TabPanel value={value} index={1}>
                <Publishments/>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Signup onSuccess={() => setValue(0)} />
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Skills/>
              </TabPanel>
            </>
          )}
        </Box>
      </div>
    </React.Fragment>
  )
}

export default App;
