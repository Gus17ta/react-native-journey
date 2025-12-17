import { useState } from 'react'
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementar = () => {
    setCount(count + 1)
  }
  const decrementar = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center',
        minWidth: '300px'
      }}>
        <h1 style={{
          color: '#333',
          marginBottom: '2rem',
          fontSize: '2rem'
        }}>
          Counter App
        </h1>
        
        {/* Botão Menos */}
        <button 
          onClick={decrementar}
          style={{
            background: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.5rem',
            borderRadius: '10px',
            cursor: 'pointer',
            margin: '0.5rem',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          -
        </button>
        
        {/* Número */}
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          color: '#667eea',
          margin: '2rem 0'
        }}>
          {count}
        </div>
        
        {/* Botão Mais */}
        <button 
          onClick={incrementar}
          style={{
            background: '#2ecc71',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            fontSize: '1.5rem',
            borderRadius: '10px',
            cursor: 'pointer',
            margin: '0.5rem',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
        >
          +
        </button>
        
        <br />
        
        {/* Botão Reset */}
        <button 
          onClick={reset}
          style={{
            background: '#95a5a6',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            borderRadius: '10px',
            cursor: 'pointer',
            marginTop: '1rem',
            transition: 'all 0.3s'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Reset
        </button>
      </div>
    </div>
   
  );
}

export default App;
