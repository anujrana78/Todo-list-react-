import "./App.css";
import Header from "./Components/Header";
import Items from "./Components/Items";


import { useEffect, useState } from "react";

function App() {
  
    //to show list from local storage
    const getLocalData = () => {
     let list =  localStorage.getItem('item')
    console.log(list)

    if(list) {
      return JSON.parse(localStorage.getItem('item'))
    } else {
      return[]
    }
    }

    

  const [currentItem, setCurrentItem] = useState('');
  
  const [itemList, setItemList] = useState(getLocalData());

  //to store the current item 
  const storeItem = (e) => {
    setCurrentItem(e.target.value);
  };



  //to save on local storage
  useEffect(() =>{
    localStorage.setItem("item",JSON.stringify(itemList))
  },[itemList])

  
  //to store items in array
  const storeList = () => {
   if(currentItem === ''){
    alert("Please enter a task")
    return
   }
   let key=Date.now()
    setItemList([...itemList, {item : currentItem,key }]);
    // localStorage.setItem("item",JSON.stringify(itemList))
  };



  return (
    <div className="App">
      <Header></Header>
      <div className="input-container">
        <input
          className="input-box"
          type="text"
          placeholder="Enter your to-do list here"
          onChange={storeItem}
        />
        <button onClick={storeList}>Add Item</button>
        
      </div>  

      <Items itemList={itemList} setItemList={setItemList}/>
    </div>
  );
}

export default App;
