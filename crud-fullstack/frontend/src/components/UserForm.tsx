import React, { useState } from 'react';

interface UserFormProps {
  onUserAdded?: () => void;
  initialData?: { name: string; email: string; password: string };
}

const UserForm: React.FC<UserFormProps> = ({ onUserAdded, initialData }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [password, setPassword] = useState(initialData?.password || '');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!name.trim() || !email.trim() || !password.trim()) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    if (password.length < 5) {
      alert('A senha deve ter pelo menos 5 caracteres');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Erro ao criar usuário');
      }

      // Limpar o formulário
      setName('');
      setEmail('');
      setPassword('');
      
      // Notificar o componente pai
      if (onUserAdded) {
        onUserAdded();
      }
      
      alert('Usuário criado com sucesso!');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Erro ao criar usuário');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      display: 'block', 
      gap: '15px', 
      maxWidth: '400px', 
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#ffffff',
      position: 'relative',
      zIndex: 1
    }}>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Nome:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            outline: 'none',
            cursor: 'text',
            pointerEvents: 'auto'
          }}
          placeholder="Digite o nome completo"
          autoComplete="off"
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            outline: 'none',
            cursor: 'text',
            pointerEvents: 'auto'
          }}
          placeholder="usuario@exemplo.com"
          autoComplete="off"
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Senha:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={5}
          style={{
            width: '100%',
            padding: '12px',
            border: '2px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
            outline: 'none',
            cursor: 'text',
            pointerEvents: 'auto'
          }}
          placeholder="Mínimo 5 caracteres"
          autoComplete="off"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={loading}
        style={{
          width: '100%',
          backgroundColor: loading ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          padding: '12px 20px',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginTop: '10px',
          pointerEvents: 'auto'
        }}
      >
        {loading ? 'Criando...' : 'Criar Usuário'}
      </button>
    </form>
  );
};

export default UserForm;