import React, { useState } from 'react';

const TestPage: React.FC = () => {
  const [clicked, setClicked] = useState('');
  const [inputValue, setInputValue] = useState('');

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h1>🧪 TESTE DE INTERATIVIDADE</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setClicked('Botão funcionando! ' + new Date().toLocaleTimeString())}
          style={{
            padding: '15px 25px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          🖱️ Clique Aqui
        </button>
        
        <button 
          onClick={() => alert('Alert funcionando!')}
          style={{
            padding: '15px 25px',
            fontSize: '16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🚨 Testar Alert
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px', fontSize: '16px', fontWeight: 'bold' }}>
          🖋️ Digite algo:
        </label>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Teste de digitação..."
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '16px',
            border: '3px solid #007bff',
            borderRadius: '5px',
            backgroundColor: 'white'
          }}
        />
      </div>

      <div style={{ 
        padding: '15px',
        border: '2px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f8f9fa',
        minHeight: '100px'
      }}>
        <h3>📊 Resultados dos Testes:</h3>
        <p><strong>Último clique:</strong> {clicked || 'Nenhum clique ainda'}</p>
        <p><strong>Texto digitado:</strong> "{inputValue}"</p>
        <p><strong>Caracteres:</strong> {inputValue.length}</p>
      </div>
    </div>
  );
};

export default TestPage;
