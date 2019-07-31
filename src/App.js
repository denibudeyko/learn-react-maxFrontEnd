import React from 'react';
import Menu from './Menu'
import Slider from './Slider'
import './App.css'

const menuPoints = [
  {
    id: 1,
    name: 'Name №1',
    icon: 'icon_src_1.png'
  },
  {
    id: 2,
    name: 'Name №2',
    icon: 'icon_src_2.png'
  },
  {
    id: 3,
    name: 'Name №3',
    icon: 'icon_src_3.png'
  },
  {
    id: 4,
    name: 'Name №4',
    icon: 'icon_src_4.png'
  }
]

class App extends React.Component {

  render(){
    

    return (
      <React.Fragment>
        <Menu data={menuPoints} />
        <Slider />
      </React.Fragment>
    )

  }

}

export default App;
