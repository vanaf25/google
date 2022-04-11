import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Route, Routes } from 'react-router-dom';
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
export const themes = {
  light: {
    foreground: 'rgba(0,0,0,0.8)',
    background: '#f0f2f5',
    mode:"light",
    linkColor:"#096dd9"
  },
  dark: {
    foreground: '#f0f2f5',
    background: '#2e2e2e',
    mode:"dark",
    linkColor: "#1890ff"
  },
};
export const ThemeContext=React.createContext({theme:themes.light,toggleTheme:()=>{}})
function App() {
  const [currentTheme,setCurrentTheme]=useState(themes.light)
  const toggleTheme=()=>setCurrentTheme(prevState =>prevState.mode==="light" ? themes.dark:themes.light )
  document.body.style.background=currentTheme.background
  return (
    <ThemeContext.Provider value={{theme:currentTheme,toggleTheme}} >
      <div className={"app"}>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={"/search"} element={<Search/>}/>
        </Routes>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
