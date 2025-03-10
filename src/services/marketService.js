const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/market`;


const index = async () => {
    try {
      const res = await fetch(BASE_URL, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      console.log(res)
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  
const show = async (marketId) => {
  try {
    const res = await fetch(`${BASE_URL}/${marketId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

  const create = async (AddProduct) => {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(AddProduct),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  
  const deleteProduct = async (marketId) => {
    try {
      const res = await fetch(`${BASE_URL}/${marketId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  async function update(marketId, marketFormData) {
    try {
      const res = await fetch(`${BASE_URL}/${marketId}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(marketFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  }

  //comment 
  const createComment = async (marketId, commentFormData) => {
    try {
      const res = await fetch(`${BASE_URL}/${marketId}/comments`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentFormData),
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (marketId, commentId) => {
    try {
      const res = await fetch(`${BASE_URL}/${marketId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const response = res.json()
      console.log(response)
      return response;
    } catch (error) {
      console.log(error);
    }
  };


  export { 
    index,
    create,
    show,
    deleteProduct,
    createComment,
    update,
    deleteComment
   };