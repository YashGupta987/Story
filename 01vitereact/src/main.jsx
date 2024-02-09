import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
 
//  let MyApp = ()=>{
//   return(      
//   <div>
//   <h1> Custom app</h1>
//   </div>
      
//   )
// }
// const reactElement = {
//   type: 'a',
//   props: {
//       href:"https://google.com",
//       target: '_blank'
//   },
//   children : "Click me to visit google"
// } 
const AnotherElement = ()=>{
  <a href='https://google.com' target='_blank'> Visit google</a>
}

const ReactElement = ()=> React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'Click here to vivt google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   {/* <App /> */}
  //   {/* <MyApp/> */}
  //   {/* MyApp() */}
  //   {/* <reactElement/> object can not be use like a function here */}
  //   {/* AnotherElement */}
  //   <ReactElement/>
  // </React.StrictMode>,
  <>
    // <React.StrictMode>
    //   {/* <App /> */}
    //   {/* <MyApp/> */}
    //   {/* MyApp() */}
    //   {/* <reactElement/> object can not be use like a function here */}
    //   {/* AnotherElement */}
    //   <ReactElement/>
    // </React.StrictMode>,
    <ReactElement />
    <AnotherElement /></>
)
