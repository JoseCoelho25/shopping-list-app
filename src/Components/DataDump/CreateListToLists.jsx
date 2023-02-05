import React, {useState} from 'react'
import CreateNewList from '../../Pages/CreateNewList'
import ListsPage from '../../Pages/ListsPage'

function CreateListToLists() {
    const [create, setCreate] = useState("");
    console.log(setCreate)
    console.log(create)
    
  return (
    <div>
        <CreateNewList setCreate={setCreate}/>
        <ListsPage create={create}  />
    </div>
    
  )
}

export default CreateListToLists