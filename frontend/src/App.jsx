import React from 'react';
import testBoard from './shodan-test-board.jpg';
import './App.css';
import Skills from './skills.js';
import Subscribers from './subscribers.js';
import Publishments from './publishments.js';
import { getTheme, mergeStyleSets } from '@fluentui/react'
import { ScrollablePane, IScrollablePaneStyles } from '@fluentui/react/lib/ScrollablePane';
import { Sticky, StickyPositionType } from '@fluentui/react/lib/Sticky';

const theme = getTheme();
const classNames = mergeStyleSets({
  wrapper: {
    height: '840vh',
    position: 'relative',
    maxHeight: 'inherit',
  },
  pane: {
    width: '100%',
    border: '1px solid ' + theme.palette.neutralLight,
  },
  sticky: {
    color: theme.palette.neutralDark,
    padding: '5px 20px 5px 10px',
    fontSize: '13px',
    borderTop: '1px solid ' + theme.palette.black,
    borderBottom: '1px solid ' + theme.palette.black,
  },
  textContent: {
    padding: '15px 10px',
  },
});
const scrollablePaneStyles: Partial<IScrollablePaneStyles> = { root: classNames.pane };

function App() {
 return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <img src={testBoard} className="shodan-logo" alt="logo" />
        </header>
        <div className={classNames.wrapper}>
          <ScrollablePane
            scrollContainerFocus={true}
            scrollContainerAriaLabel="Sticky component example"
            styles={scrollablePaneStyles}
          >
            <Sticky stickyPosition={StickyPositionType.Both}>
              <div role="heading" aria-level={1} className={classNames.sticky}>
                Publishments
              </div>
            </Sticky>
            <Publishments/>
            <Sticky stickyPosition={StickyPositionType.Both}>
              <div role="heading" aria-level={1} className={classNames.sticky}>
                Skills
              </div>
            </Sticky>
            <Skills/>
          </ScrollablePane>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App;
