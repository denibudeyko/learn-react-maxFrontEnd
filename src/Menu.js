import React from 'react';



class Menu extends React.Component {

  render(){
    const { data } = this.props
    let newArray
      if(data.length){
          newArray = data.map(function(item,index){

          return(
            <li key={item.id}>
              <span>{item.name}</span>
              <span>{item.icon}</span>
            </li>
          )

        })
      }
      else{
        newArray =  <p>Записей нету</p>
      }

    return (
      <React.Fragment>
        <ul>
          {newArray}
        </ul>
        <div className={data.length ? 'wrapper' : 'none'}>
          
          <span>Общее количество пунктов меню <strong>{data.length}</strong></span>
        </div>
      </React.Fragment>
    )
  }

}

export default Menu;
