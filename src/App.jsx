import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Home from './home';
import About from './about'
import Post from './post';
function App() {
  return (<BrowserRouter>
  <div>
    <ul>
    <li><Link to ="/"> home </Link></li>
    <li><Link to ="/about"> about </Link></li>
    <li><Link to ="/post?fname=Pattamachart&lname=Chueakrod"> Post </Link></li>
    <li><Link to ="/post/1"> Post </Link></li>
    <li><Link to ="/post/2"> Post </Link></li>
    </ul>
  </div>

  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/post" element = {<Post/>}/>
    <Route path="/post/:id" element = {<Post/>}/>
    
  </Routes>
  </BrowserRouter>
  );
}

export default App;
