import './App.css';
import Search from './components/search';
import styled from 'styled-components';
import Select from 'react-select';
import { useState } from 'react';
function App() {
  const Div=styled.div`
 background-color: #282c34;
  padding:10% 0;
  `
  const Input=styled.input`
 padding:1% 30%;
border-radius:15px;
  
  `
  const languageList=[{
value:'javascript',label:'javascript'

  },
  {
    value:'tetris',label:'tetris'
    
      },{
        value:'java',label:'java'
        
          }]
          const [selected,setSelected]=useState('javascript')
          const [searchString,setSearchString]=useState('react')
          const searchHandler=event=>{
            setSearchString(event.target.value)
          }
          const listHandler=event=>{
            event.preventDefault()
    setSelected(event)
          }
  return (
    <Div >
      <header className="App-header">
        <label ><strong> SEARCH GITHUB REPO </strong></label>
       <Input placeholder='search' onChange={searchHandler} value={searchString}/>
       <Select options={languageList} onChange={value=>listHandler(value)} value={selected}/>
       <Search qlanguage={selected} qstring={searchString}/>
       
      </header>
    </Div>
  );
}

export default App;
