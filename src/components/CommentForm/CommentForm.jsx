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
    <form onSubmit={handleSubmit}>
      <h2>Comments</h2>
      <label htmlFor="text-input">Your comment:</label>
      <textarea
        required
        type="text"
        name="text"
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      />
      <button type="submit" style={{width:"20vw", height: "10vh"}}>SUBMIT COMMENT</button>
    </form>
  );
};

export default CommentForm;