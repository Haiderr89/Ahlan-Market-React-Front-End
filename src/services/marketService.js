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
  
  export { 
    index,
    create,
   };