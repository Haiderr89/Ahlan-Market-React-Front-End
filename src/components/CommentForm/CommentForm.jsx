// src/components/CommentForm/CommentForm.jsx
import { useState, useEffect } from 'react';
import * as marketService from '../../services/marketService';
import './CommentForm.module.css';

const CommentForm = (props) => {
  const [formData, setFormData] = useState({ text: '' });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddComment(formData);
    setFormData({ text: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxHeight: "300px", // Set a fixed height for the comments container
    }}>
      <h2>Add Comment</h2>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      />
      <button type="submit" style={{width:"20vw", height: "10vh"}} className='bn'>SUBMIT COMMENT</button>
      
    </form>
  );
};

export default CommentForm;