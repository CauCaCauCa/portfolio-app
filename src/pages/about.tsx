import React, { useEffect, useState } from 'react';

type Props = {
  data: string;
};

export default function About({ }: Props) {

  const [data, setData] = useState([]);
  useEffect(() => {
    getFullList().then((data) => {
      setData(data);
    });
  }, []);

  async function getFullList() {
    const response = await fetch('https://649925a379fbe9bcf83eb206.mockapi.io/lab7');
    const data = await response.json();
    return data;
  }
  return (
    <div>
      <h1>About</h1>
      {
        data.map((item: any) => (
          <div key={item.id}>
            <p>{item.title}</p>
          </div>
        ))
      }
    </div>
  );
}