import React, { useEffect, useState } from 'react';
import './App.css';
//to import  component folder
const requireModule = require.context('./components', false, /\.js$/);

function App() {
//object to  store all imported files from component folder
  const componentNames = {};
  
//adding files to the componentNames object through looping
  requireModule.keys().forEach(fileName => {
  const moduleName = fileName.replace(/(\.\/|\.js)/g, '');
  componentNames[moduleName] = requireModule(fileName).default;
  });
  
  console.log(componentNames);
 
  //setting state
  const [records, setRecords] = useState([
    { key: "component1", name: "Component 1", data: [] },
    { key: "component2", name: "Component 2", data: [] },
    { key: "component3", name: "Component 3", data: [] },
    { key: "component4", name: "Component 4", data: [] }
  ])
  let componentMap = componentNames;

  const handleDynamicComponent = () => {
  //creating dynamic component and In data with component key
   const updateRecords= records.length > 0 && records.map((ele) => {
      const DynamicComponent = componentMap[ele.key]
      ele.component = (
        <DynamicComponent
          data={ele.data}
          key={ele.data}
        />
      );
      return{...ele};
    })
    setRecords(updateRecords);
  }

  useEffect(() => {
    handleDynamicComponent()
  }, [])



  return (
    <>
      <h1 style={{ textAlign: "center" }} >Dynamic Component</h1>
      <h3 style={{ textAlign: "center" }} >This is how we can show dynamic components</h3>
      <div className="App">
        <br />
        {/* displaying components */}
        {
          records.map((item) =>
            <div class="card">
              <div class="container">
                <h4><b>{item.component}</b></h4>
                <p>Dynamic Component</p>
              </div>
            </div>
          )
        }
      </div>

    </>
  );
}

export default App;
