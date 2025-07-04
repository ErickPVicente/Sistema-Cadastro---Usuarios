import React, { useState } from 'react';

const SimpleUserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 4000);
  };

  // Debug para verificar eventos
  const handleInputFocus = (field: string) => {
    console.log(`Campo ${field} foi focado`);
  };

  const handleInputChange = (field: string, value: string) => {
    console.log(`Campo ${field} alterado para: ${value}`);
    if (field === 'name') setName(value);
    if (field === 'email') setEmail(value);  
    if (field === 'password') setPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.ok) {
        showMessage(`✅ Usuário "${name}" foi cadastrado com sucesso!`, 'success');
        setName('');
        setEmail('');
        setPassword('');
      } else {
        const errorData = await response.json();
        showMessage(`❌ Erro ao criar usuário: ${errorData.message || 'Verifique os dados'}`, 'error');
      }
    } catch (error) {
      showMessage('❌ Erro de conexão com o servidor. Tente novamente.', 'error');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Criar Usuário</h2>
      
      {message && (
        <div style={{ 
          padding: '15px', 
          marginBottom: '20px', 
          backgroundColor: messageType === 'success' ? '#d4edda' : '#f8d7da',
          color: messageType === 'success' ? '#155724' : '#721c24',
          border: messageType === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb',
          borderRadius: '5px',
          textAlign: 'center',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px', fontWeight: 'bold' }}>
            Nome:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            onFocus={() => handleInputFocus('name')}
            onClick={() => console.log('Campo nome clicado')}
            required
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              outline: 'none',
              pointerEvents: 'auto',
              cursor: 'text',
              backgroundColor: 'white',
              zIndex: 10,
              position: 'relative',
              userSelect: 'text',
              WebkitUserSelect: 'text'
            }}
            placeholder="Digite seu nome"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            onFocus={() => handleInputFocus('email')}
            onClick={() => console.log('Campo email clicado')}
            required
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              outline: 'none',
              pointerEvents: 'auto',
              cursor: 'text',
              backgroundColor: 'white',
              zIndex: 10,
              position: 'relative',
              userSelect: 'text',
              WebkitUserSelect: 'text'
            }}
            placeholder="Digite seu email"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontSize: '16px', fontWeight: 'bold' }}>
            Senha:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            onFocus={() => handleInputFocus('password')}
            onClick={() => console.log('Campo senha clicado')}
            required
            minLength={5}
            style={{
              width: '100%',
              padding: '15px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '5px',
              outline: 'none',
              pointerEvents: 'auto',
              cursor: 'text',
              backgroundColor: 'white',
              zIndex: 10,
              position: 'relative',
              userSelect: 'text',
              WebkitUserSelect: 'text'
            }}
            placeholder="Digite sua senha (mín. 5 caracteres)"
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '18px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            pointerEvents: 'auto',
            zIndex: 10,
            position: 'relative',
            userSelect: 'none'
          }}
        >
          Criar Usuário
        </button>
      </form>
    </div>
  );
};

export default SimpleUserForm;
