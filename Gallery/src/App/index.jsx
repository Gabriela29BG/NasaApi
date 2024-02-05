import { useEffect, useState } from 'react';
import { Card } from '../Card';
import './App.css';

function App() {
  const [item, setItem] = useState(null);
   
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=Kj1DsrAiAcmIQlzidMO6Fu12edgReoluJF0RBhw5');
        if (!response.ok) {
          throw new Error('Error');
        }
        const data = await response.json();
        setItem(data);
        console.log(data)
      } catch (error) {
        console.error('Error:', error);
        // Puedes manejar el error aquí, por ejemplo, mostrando un mensaje al usuario.
      }
    };

    getImages();
  }, []);

  return (
    <>
      {item && <Card data={item} />}
    </>
  );
}

export default App;

