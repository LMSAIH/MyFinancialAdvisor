import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { ChatPage } from './components/pages/ChatPage';

//Application routes
function App() {
  return (
    
    <div className='Wrapper'>
      <BrowserRouter>
        <Navbar />
        <div className='Content'>
        <Routes>
          <Route path='/chat' element={<ChatPage />} />
          <Route path='/login' />
          <Route path='/auth' />
        </Routes>
        </div>
      </BrowserRouter>
    </div>


  );
}

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div>
        <Link to={'/chat'}>Chat</Link>
      </div>
      <div>
        <Link to={'/login'}>Chat</Link>
      </div>
      <div>
        <Link to={'/auth'}>Chat</Link>
      </div>
    </div>
  )
}

export default App;


