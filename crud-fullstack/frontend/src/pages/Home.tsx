import React, { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';

interface User {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

const Home: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:3001/api/users');
            if (!response.ok) {
                throw new Error('Erro ao buscar usuários');
            }
            const data = await response.json();
            setUsers(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Erro desconhecido');
        } finally {
            setLoading(false);
        }
    };

    const handleUserAdded = () => {
        fetchUsers(); // Recarrega a lista após adicionar um usuário
    };

    const handleDeleteUser = async (userId: string) => {
        try {
            const response = await fetch(`http://localhost:3001/api/users/${userId}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Erro ao deletar usuário');
            }
            await fetchUsers(); // Recarrega a lista
        } catch (err) {
            alert(err instanceof Error ? err.message : 'Erro ao deletar usuário');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <div style={{ textAlign: 'center', padding: '20px' }}>Carregando usuários...</div>;
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
                <p>Erro: {error}</p>
                <button onClick={fetchUsers}>Tentar novamente</button>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Adicionar Novo Usuário</h2>
            <UserForm onUserAdded={handleUserAdded} />
            
            <h2 style={{ marginTop: '40px' }}>Lista de Usuários ({users.length})</h2>
            {users.length === 0 ? (
                <p>Nenhum usuário encontrado.</p>
            ) : (
                <div style={{ display: 'grid', gap: '10px' }}>
                    {users.map(user => (
                        <div 
                            key={user.id} 
                            style={{ 
                                border: '1px solid #ddd', 
                                padding: '15px', 
                                borderRadius: '5px',
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
                                    Criado em: {new Date(user.createdAt).toLocaleDateString('pt-BR')}
                                </small>
                            </div>
                            <button 
                                onClick={() => handleDeleteUser(user.id)}
                                style={{ 
                                    backgroundColor: '#dc3545', 
                                    color: 'white', 
                                    border: 'none', 
                                    padding: '8px 16px', 
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Excluir
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;