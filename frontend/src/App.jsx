import React, { useState } from 'react';
import testBoard from './shodan-test-board.jpg';
import './App.css';
import Skills from './skills.js';
import Publishments from './publishments.js';
import Signup from './signup.jsx'; // import the Signup component
import { Tabs, Tab } from 'react-bootstrap';

function App() {
  const [value, setValue] = useState('0');

  const handleChange = (eventKey) => {
    setValue(eventKey);
  };

  return (
    <React.Fragment>
      <div className="App">
        <div style={{ width: '100%' }}>
          <Tabs
            activeKey={value}
            onSelect={handleChange}
            className="mb-3"
            style={{ borderBottom: '1px solid #dee2e6' }}
          >
            <Tab eventKey="0" title="Home">
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={testBoard}
                  alt="Don Denoncourt"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '20px 40px',
                    borderRadius: '4px',
                  }}
                >
                  <h3
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
                      margin: 0,
                    }}
                  >
                    Don Denoncourt, Author
                  </h3>
                </div>
              </div>
            </Tab>
            <Tab eventKey="1" title="Publishments">
              <div style={{ padding: '1rem' }}>
                <Publishments/>
              </div>
            </Tab>
            <Tab eventKey="2" title="Sign Up for Our Mailing List">
              <div style={{ padding: '1rem' }}>
                <Signup onSuccess={() => setValue('0')} />
              </div>
            </Tab>
            <Tab eventKey="3" title="Skills">
              <div style={{ padding: '1rem' }}>
                <Skills/>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
