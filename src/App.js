import React, {useState, useRef} from 'react'
import './App.css';
import './AppAdaptive.css';
import Filter from './Filter'
import Response from './Response'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const url = useRef('')
  const [data, setData] = useState({})
  const createUrl = (date) => {
    if(date.state){
      let newUrl = ''
      let step = 1
      let arr = Object.keys(date.data)
      arr.map(key =>{
        if(arr.length !== step){
          newUrl += `${key}=${date.data[key].join()}-`
          step++
        }else{
          newUrl += `${key}=${date.data[key].join()}`
          url.current = newUrl
        }
      })
    }else{
      url.current = ''
    }
  }
  const createDate = (event) => {
    const elements = document.querySelectorAll(`.${event.target.name}`)
    let arr = []
    let obj = {...data}
    for (let i = 0; i < elements.length; i++) {
      if(elements[i].checked){
        arr.push(elements[i].value)
      }
    }
    if(arr.length === 0){
      delete obj[event.target.name]
      setData(obj)
      createUrl({state: false, data: '/'})
    }else{
      let newObj = Object.assign(obj, {[event.target.name]: arr})
      setData(newObj)
      createUrl({state: true, data: newObj})
    }     
  }

  return (
    <Router>
      <div className="App">
        <Filter data={createDate} url={url.current}/>
        <Switch>
          <Route path="/:id">
            <Response data={data} url={url.current}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
