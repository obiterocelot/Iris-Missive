import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch('/posts/').then(
      response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      }
    ).then(
      data => {
        console.log(data)
        setBackendData(data)
      }
    )
  }, [])
  return (
    < div >
      {
        backendData.map((post, i) => (
          <p key={i}> {JSON.stringify(post)} </p>
        ))
      }
    </div >
  );
}

export default App;
