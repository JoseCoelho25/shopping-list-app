import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';

function IngredientsPage() {
  const params = useParams();
  const data = params.value;

  return (
    <MainLayout>
      <div>{data}</div>
    </MainLayout>  
  )
}

export default IngredientsPage