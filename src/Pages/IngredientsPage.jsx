import React from 'react';
import { useParams } from 'react-router-dom';

function IngredientsPage() {
  const params = useParams();
  const data = params.value;

  return (
    <div>{data}</div>
  )
}

export default IngredientsPage