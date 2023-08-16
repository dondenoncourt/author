//import logo from './logo.svg';
import React from 'react';
import logo from './shodan-test-board.jpg';
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
          <img src={logo} className="shodan-logo" alt="logo" />
        </header>
        <Subscribers/>
        <Skills/>
      </div>
      <div>
        <Accordion>
          <AccordionItem value="1">
            <AccordionHeader>Accordion Header 1</AccordionHeader>
            <AccordionPanel>
              <Subscribers/>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem value="2">
            <AccordionHeader>Accordion Header 2</AccordionHeader>
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
