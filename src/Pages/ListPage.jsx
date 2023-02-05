import React, {useState} from 'react'
import List from '../Components/List';
import Modal from '../Components/Modal'


function ListPage() {
    const [create, setCreate] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    
  return (
    <div>
        <List create={create} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
        <Modal setCreate={setCreate} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    </div>
    
  )
}

export default ListPage