import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <div className="app">

      {/* GRID */}
      <div className="grid">

        {userData.length === 0 ? (
          <h3 className="loading">Loading...</h3>
        ) : (
          userData.map((elem, idx) => (
            <Card key={idx} elem={elem} />
          ))
        )}

      </div>

      {/* PAGINATION */}
      <div className="pagination">

        <button
          className="btn"
          style={{ opacity: index === 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>

        <h4 className="page">Page {index}</h4>

        <button
          className="btn"
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
          }}
        >
          Next
        </button>

      </div>

    </div>
  );
};

export default App;