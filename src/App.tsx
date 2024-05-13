import React from 'react';
import Button from './components/Button';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import NavBar from './components/NavBar';
import CardGroup from './components/CardGroup';
import { useState } from "react";


function App() {
  const items = [
    'aaa',
    'bbb',
    'ccc',
    'ddd',
    'eee'
  ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  let itemsss = ["Home", "Product", "Service"];

  const [alertVisible, setAlertVisibility] = useState(false);
  /* Main app that sets the  page layout*/
  return <div>

    <div className="container">
      <div className="row align-items-center">
        <div>
          <NavBar
            brandName="My Brand"
            imageSrcPath={".assets/react.svg"}
            navItems={itemsss} />
          <div>
            {alertVisible && <Alert onClose={() => setAlertVisibility(false)}> AAA alert </Alert>}
            <Button color="primary" onClick={() => setAlertVisibility(true)}>My Button</Button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col col-lg-2 align-self-start">
          <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
        </div>
        <div className="col-md-auto align-self-center">
          <CardGroup></CardGroup>
        </div> 
      </div>
    </div>
  </div >

}

export default App;
