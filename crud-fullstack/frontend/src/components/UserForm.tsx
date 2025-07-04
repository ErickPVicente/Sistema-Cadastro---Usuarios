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
      display: 'grid', 
      gap: '15px', 
      maxWidth: '400px', 
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <div>
        <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Nome:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px'
          }}
          placeholder="Digite o nome completo"
        />
      </div>
      
      <div>
        <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px'
          }}
          placeholder="usuario@exemplo.com"
        />
      </div>
      
      <div>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
          Senha:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '14px'
          }}
          placeholder="Mínimo 6 caracteres"
        />
      </div>
      
      <button 
        type="submit" 
        disabled={loading}
        style={{
          backgroundColor: loading ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          padding: '12px 20px',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginTop: '10px'
        }}
      >
        {loading ? 'Criando...' : 'Criar Usuário'}
      </button>
    </form>
  );
};

export default UserForm;