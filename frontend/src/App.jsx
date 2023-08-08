//import logo from './logo.svg';
import logo from './shodan-test-board.jpg';
import './App.css';
import Skills from './skills.js';
import Subscribers from './subscribers.js';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { 
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false
    }
  }
})


function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="shodan-logo" alt="logo" />
        </header>
        <Subscribers/>
        <Skills/>
      </div>
  )
}

export default App;
