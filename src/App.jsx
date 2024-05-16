import { useState } from "react";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import { Route, Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [navStyle, setNavStyle] = useState('Enable Dark Mode');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setNavStyle('Enable Light Mode')
      document.body.style.backgroundColor = '#2c2c47'
    }
    else {
      setMode('light');
      setNavStyle('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
    }
  }
  return <>
    <Router>
      <NavBar title="textUtils" home="Home" about="About-Us" mode={mode} toggleMode={toggleMode} navStyle={navStyle} />
      <div className="text-form h-200 fill"  data-bs-theme={mode === 'light' ? '#2c2c47' : 'white'}>
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm heading="This is TextUtils" mode={mode} />
          </Route>
        </Switch> */}
        <Routes>
        <Route exact path='/about' element={<About mode={mode} />}></Route>
        <Route exact path='/first-react-app/' element={<TextForm heading="This is TextUtils" mode={mode} />}></Route>
        </Routes>
        {/* <TextForm heading="This is TextUtils" mode={mode} /> */}
        {/* <About mode={mode} /> */}
      </div>
    </Router>
  </>
}

export default App;