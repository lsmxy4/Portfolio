import React,{useCallback,useEffect,useState} from 'react'
import { ThemeContext } from './themeContext'

const STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(){
  if(typeof window==='undefined') return 'dark'

  let stored
  try { stored = localStorage.getItem(STORAGE_KEY) } catch { /* 저장소 접근 제한 시 기본 테마 사용 */ }

  if(stored==='light' || stored==='dark')return stored

  return 'dark'

}


const ThemeProvider = ({children}) => {
 
  const [theme, setTheme]=useState(getInitialTheme)

  useEffect(()=>{

    document.documentElement.setAttribute('data-theme',theme)
    try { localStorage.setItem(STORAGE_KEY,theme) } catch { /* 현재 세션에서 테마 전환 유지 */ }

  },[theme])
 
  const toggleTheme =useCallback(()=>{
    setTheme((t)=>(t==='light'? 'dark':'light'))
  },[])

  const value = {theme, toggleTheme, setTheme}

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
