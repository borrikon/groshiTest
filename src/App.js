import React from 'react'
import Header from "./components/header/header"
import Body from "./components/body/body"

import {styles} from './styles'
import Backdrop from './components/backdrop/backdrop'
import CreateTaskModal from './components/createTaskModal/createTaskModal'

function App() {
  const {container} = styles()
  return (
        <div className={container}>
            <Header />
            <Body />
            <Backdrop />
            <CreateTaskModal />
        </div>
  );
}

export default App;
