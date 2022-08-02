import React, { useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');
  const handleSubmit = async (e) => {
    console.log('sb');
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      console.log(await response.json());
      setDescription('');
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <>
      <h1 className='text-center mt-5'>Pern Todo List</h1>
      <form action='' className='d-flex mt-5' onClick={handleSubmit}>
        <input
          type='text'
          value={description}
          className='form-control'
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </>
  );
};

export default InputTodo;
