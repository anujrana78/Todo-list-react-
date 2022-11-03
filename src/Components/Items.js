import React from 'react'
import './items.css'

const Items = (props) => {

  
function deleteItem(key){
   const newList = props.itemList.filter( (itemObj) => {
    return itemObj.key !== key
    
   })
   props.setItemList(newList)
  }

  return (
    <div >
      { 
        props.itemList.map((data) =>{
          return <div className='item-container'>
            <h2>{data.item}</h2>
            <button className='btn-delete' onClick={() => deleteItem(data.key)}>X</button>
            </div>
         })
      }
    </div>
  )
}

export default Items
