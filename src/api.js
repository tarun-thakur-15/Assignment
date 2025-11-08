import axios from "axios";
import { useEffect, useState } from "react";

function DataFetchingComponent() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    console.log("fetchData called");
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log('Data fetched successfully:', response.data); 
      setPosts(response.data); 
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); 
}

export default DataFetchingComponent;
