import React, { useState, useEffect } from 'react';
import SimpleUserForm from '../components/SimpleUserForm';

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface EditUserFormProps {
  user: User;
  onSave: (id: string, userData: { name: string; email: string; password?: string }) => void;
  onCancel: () => void;
}

const EditUserForm: React.FC<EditUserFormProps> = ({ user, onSave, onCancel }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      alert('Nome e email são obrigatórios');
      return;
    }

    if (password && password.length < 5) {
      alert('Se informada, a senha deve ter pelo menos 5 caracteres');
      return;
    }

    const userData: { name: string; email: string; password?: string } = {
      name: name.trim(),
      email: email.trim()
    };

    if (password.trim()) {
      userData.password = password;
    }

    onSave(user.id, userData);
  };

  return (
    <div 
      style={{
        border: '2px solid #007bff',
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '10px',
        backgroundColor: '#f8f9ff'
      }}
    >
      <h4 style={{ margin: '0 0 15px 0', color: '#007bff' }}>✏️ Editando usuário</h4>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Nome:
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '4px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '4px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Nova Senha (opcional):
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Deixe em branco para manter a senha atual"
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '2px solid #ddd',
              borderRadius: '4px',
              outline: 'none'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            style={{
              backgroundColor: '#28a745',
              color: 'white',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            💾 Salvar
          </button>
          <button
            type="button"
            onClick={onCancel}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            ❌ Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

const SimplePage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const showMessage = (text: string, type: 'success' | 'error') => {
    setMessage(text);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id: string, userName: string) => {
    // Confirmação antes de excluir
    const confirmDelete = window.confirm(
      `🗑️ Tem certeza que deseja excluir o usuário "${userName}"?\n\nEsta ação não pode ser desfeita.`
    );
    
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/api/users/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        showMessage(`✅ Usuário "${userName}" foi excluído com sucesso!`, 'success');
        fetchUsers();
      } else {
        throw new Error('Erro na resposta do servidor');
      }
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      showMessage(`❌ Erro ao excluir usuário "${userName}". Tente novamente.`, 'error');
    }
  };

  const updateUser = async (id: string, userData: { name: string; email: string; password?: string }) => {
    try {
      const response = await fetch(`http://localhost:3001/api/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (response.ok) {
        showMessage(`✅ Usuário "${userData.name}" foi atualizado com sucesso!`, 'success');
        setEditingUser(null);
        fetchUsers();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro na resposta do servidor');
      }
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
      showMessage(`❌ Erro ao atualizar usuário. Tente novamente.`, 'error');
    }
  };

  const startEdit = (user: User) => {
    setEditingUser(user);
  };

  const cancelEdit = () => {
    setEditingUser(null);
  };

  useEffect(() => {
    fetchUsers();
    // Atualizar lista a cada 3 segundos
    const interval = setInterval(fetchUsers, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Sistema de Cadastro de Usuários
      </h1>
      
      {/* Área de Mensagens */}
      {message && (
        <div 
          style={{
            padding: '15px',
            borderRadius: '5px',
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
            backgroundColor: messageType === 'success' ? '#d4edda' : '#f8d7da',
            color: messageType === 'success' ? '#155724' : '#721c24',
            border: messageType === 'success' ? '1px solid #c3e6cb' : '1px solid #f5c6cb'
          }}
        >
          {message}
        </div>
      )}
      
      <SimpleUserForm />
      
      <div style={{ marginTop: '40px' }}>
        <h2>Usuários Cadastrados ({users.length})</h2>
        
        {loading ? (
          <p>Carregando usuários...</p>
        ) : users.length === 0 ? (
          <p>Nenhum usuário cadastrado.</p>
        ) : (
          <div>
            {users.map(user => (
              <div key={user.id}>
                {editingUser && editingUser.id === user.id ? (
                  <EditUserForm 
                    user={editingUser}
                    onSave={updateUser}
                    onCancel={cancelEdit}
                  />
                ) : (
                  <div 
                    style={{
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      padding: '15px',
                      marginBottom: '10px',
                      backgroundColor: '#f9f9f9',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <h3 style={{ margin: '0 0 5px 0' }}>{user.name}</h3>
                      <p style={{ margin: '0', color: '#666' }}>{user.email}</p>
                      <small style={{ color: '#888' }}>
                        ID: {user.id} | Criado: {new Date(user.createdAt).toLocaleString('pt-BR')}
                      </small>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => startEdit(user)}
                        style={{
                          backgroundColor: '#28a745',
                          color: 'white',
                          border: 'none',
                          padding: '10px 15px',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        ✏️ Editar
                      </button>
                      <button
                        onClick={() => deleteUser(user.id, user.name)}
                        style={{
                          backgroundColor: '#dc3545',
                          color: 'white',
                          border: 'none',
                          padding: '10px 15px',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        🗑️ Excluir
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimplePage;
