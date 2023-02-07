import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';
import MainLayout from '../Layouts/MainLayout';

function IngredientsPage() {
  const params = useParams();
  const data = params.value;

  return (
    <MainLayout>
      <Header titleName={data}/>
    </MainLayout>  
  )
}

export default IngredientsPage