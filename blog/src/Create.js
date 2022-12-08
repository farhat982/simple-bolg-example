import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState(' ');
  const [mainBody, setMainBody] = useState(' ');
  const [author, setAuthor] = useState('mario')
  const [isPending, setIsPending] = useState (false)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, mainBody, author};
      
      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
        method:'POST',
        headers: { 'Content-Type' : 'application/json'},
        body: JSON.stringify(blog)
      }).then (() => {
        setIsPending(false);
      })
      navigate('/');
  }

  return (
    <div className='create'>
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}> 
        <label>Blog Title:</label>
          <input 
            type='text'
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <label>Blog Post:</label>
          <textarea
          required
          value={mainBody}
          onChange={(e) => setMainBody(e.target.value)}
          >
          </textarea>
        <label>Blog Author:</label>
         <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
         >
           <option value='mario'>mario</option>
           <option value='yoshi'>yoshi</option>
         </select>
         {!isPending && <button>Add Blog</button>}
         {isPending && <button disabled>Adding Blog...</button>}
      </form>
    </div>
  )
}

export default Create
