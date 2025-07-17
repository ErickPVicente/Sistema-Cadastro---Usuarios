import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { FiUsers, FiTrash2, FiRefreshCw, FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { userService } from '../../services/userService';

import {
  ListContainer,
  ListHeader,
  ListTitle,
  HeaderActions,
  RefreshButton,
  SearchContainer,
  SearchInput,
  UsersGrid,
  UserCard,
  UserInfo,
  UserName,
  UserEmail,
  UserDate,
  DeleteButton,
  LoadingContainer,
  LoadingSpinner,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyMessage,
  Pagination,
  PaginationButton,
  PaginationInfo,
  ErrorState
} from './UserList.styles';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [deletingUserId, setDeletingUserId] = useState(null);

  const loadUsers = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await userService.listarUsuarios(page, 10);
      setUsers(response.users);
      setPagination(response.pagination);
      setCurrentPage(page);
      
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
      setError(error.message || 'Erro ao carregar usuários');
      toast.error('Erro ao carregar usuários');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('Tem certeza que deseja deletar este usuário?')) {
      return;
    }

    try {
      setDeletingUserId(userId);
      
      await userService.deletarUsuario(userId);
      
      toast.success('Usuário deletado com sucesso!');
      
      // Recarregar a lista
      await loadUsers(currentPage);
      
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
      toast.error(error.message || 'Erro ao deletar usuário');
    } finally {
      setDeletingUserId(null);
    }
  };

  const handleRefresh = () => {
    loadUsers(currentPage);
  };

  const handlePageChange = (page) => {
    loadUsers(page);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const filteredUsers = users.filter(user =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    loadUsers();
  }, []);

  if (loading) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
        <p>Carregando usuários...</p>
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorState>
        <h3>Erro ao carregar usuários</h3>
        <p>{error}</p>
        <RefreshButton onClick={handleRefresh}>
          <FiRefreshCw size={20} />
          Tentar novamente
        </RefreshButton>
      </ErrorState>
    );
  }

  return (
    <ListContainer>
      <ListHeader>
        <ListTitle>
          <FiUsers size={28} />
          Usuários Cadastrados
          {pagination.totalUsers && (
            <span>({pagination.totalUsers} {pagination.totalUsers === 1 ? 'usuário' : 'usuários'})</span>
          )}
        </ListTitle>
        
        <HeaderActions>
          <SearchContainer>
            <FiSearch size={20} />
            <SearchInput
              type="text"
              placeholder="Buscar por nome ou e-mail..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
          
          <RefreshButton onClick={handleRefresh}>
            <FiRefreshCw size={20} />
          </RefreshButton>
        </HeaderActions>
      </ListHeader>

      {filteredUsers.length === 0 ? (
        <EmptyState>
          <EmptyIcon>
            <FiUsers size={64} />
          </EmptyIcon>
          <EmptyTitle>
            {users.length === 0 ? 'Nenhum usuário cadastrado' : 'Nenhum usuário encontrado'}
          </EmptyTitle>
          <EmptyMessage>
            {users.length === 0 
              ? 'Cadastre o primeiro usuário para começar!'
              : 'Tente ajustar os termos da sua busca.'
            }
          </EmptyMessage>
        </EmptyState>
      ) : (
        <>
          <UsersGrid>
            {filteredUsers.map((user) => (
              <UserCard key={user._id}>
                <UserInfo>
                  <UserName>{user.nome}</UserName>
                  <UserEmail>{user.email}</UserEmail>
                  <UserDate>
                    Cadastrado em {formatDate(user.createdAt)}
                  </UserDate>
                </UserInfo>
                
                <DeleteButton
                  onClick={() => handleDeleteUser(user._id)}
                  disabled={deletingUserId === user._id}
                  title="Deletar usuário"
                >
                  {deletingUserId === user._id ? (
                    <LoadingSpinner size={16} />
                  ) : (
                    <FiTrash2 size={18} />
                  )}
                </DeleteButton>
              </UserCard>
            ))}
          </UsersGrid>

          {pagination.totalPages > 1 && (
            <Pagination>
              <PaginationButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={!pagination.hasPrevPage}
              >
                <FiChevronLeft size={20} />
                Anterior
              </PaginationButton>
              
              <PaginationInfo>
                Página {pagination.currentPage} de {pagination.totalPages}
              </PaginationInfo>
              
              <PaginationButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={!pagination.hasNextPage}
              >
                Próxima
                <FiChevronRight size={20} />
              </PaginationButton>
            </Pagination>
          )}
        </>
      )}
    </ListContainer>
  );
};

export default UserList;
