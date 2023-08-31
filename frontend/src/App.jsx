import React from 'react';
import testBoard from './shodan-test-board.jpg';
import './App.css';
import Skills from './skills.js';
import Subscribers from './subscribers.js';
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from "@fluentui/react-components";


function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={testBoard} className="shodan-logo" alt="logo" />
        </header>
        <Accordion>
          <AccordionItem value="1">
            <AccordionHeader>Subscribers</AccordionHeader>
            <AccordionPanel>
              <Subscribers/>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader>Skills</AccordionHeader>
            <AccordionPanel>
              <Skills/>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </React.Fragment>
  )
}

export default App;
