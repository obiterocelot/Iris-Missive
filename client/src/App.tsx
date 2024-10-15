import React, { useEffect, useState } from 'react'

type Post = {
  id: number,
  userId: string,
  title?: string,
  content?: string,
  createdAt?: Date,
  updatedAt?: Date,
}

function App(): JSX.Element {

  const [backendData, setBackendData] = useState<Post[]>([])

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
