import React, { useState } from 'react'
import Item from './components/item'


export default function Home() {

  const addNewItem = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setItems([...Items, inputValue])
    return 
  }

  const handleDelete = (index : number) => {
    const newItems = [...Items]
    newItems.splice(index, 1)
    setItems(newItems)
    console.log(Items)
  }

  const [Items, setItems ] = useState(['blåbär', 'grej1', 'grej2' ])  
  const [inputValue, setItemValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  return (
    <>

    <div id="container">
      <form>
        <input value={searchValue} type="search" onChange={(e) => setSearchValue(e.target.value)}/>
      </form>

      <h1>Add Items</h1>

      <form onSubmit={addNewItem}>
        <input value={inputValue} type="text" onChange={(e) => setItemValue(e.target.value)}/>
        <input type="submit" />
      </form>

      <h2>Items :</h2>
      {Items.filter((item) => {

        return searchValue.toLowerCase() === '' ? item : item.toLowerCase().includes(searchValue)

      }).map((item : string, index : number) => <Item value={item} key={index} onDelete={() => handleDelete(index)}></Item>)}
    </div>

    </>
  )
}
