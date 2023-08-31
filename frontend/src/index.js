import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

ReactDOM.render(
  <FluentProvider className="fluent-provider">
    <App />
  </FluentProvider>, document.getElementById("root")
);

