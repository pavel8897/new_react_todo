import React, {useState} from 'react';
import Thing from './Thing'
import './style.css'
import { nanoid } from 'nanoid'

const ToDo = () => {
  const deals = [
    {id: 1, thing: 'Watch movie', done: false, cross: false},
    {id: 2, thing: 'Read book', done: false, cross: false},
    {id: 3, thing: 'Do sport', done: false, cross: false}
  ]

  const [todos, setTodos] = useState(deals)

  const crossItem = (event, index) => {
    event.preventDefault()
    setTodos(todos.map(item => {
      if(item.id === index) {
        return {...item, cross: true}        
      }
      console.log(item.cross)
      // console.log(index)
      return item
    }))
  }
  
  let result = deals.map((item, index) => {
    return <Thing
      thing = {item.thing}
      key = {item.id}
      index = {item.id}
      cross = {item.cross}
      crossItem = {crossItem}
    />
  })

  return (
    <div>
      <ul>
        {result}
      </ul>
    </div>
  )
}

export default ToDo;
