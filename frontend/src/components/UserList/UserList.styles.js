import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

export const ListContainer = styled.div`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ListTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  span {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    justify-content: center;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 1rem;
    color: #999;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: none;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  font-size: 1rem;
  min-width: 300px;
  transition: all 0.3s ease;

  &:focus {
    background: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    width: 100%;
  }
`;

export const RefreshButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  color: #667eea;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    transition: transform 0.3s ease;
  }
`;

export const UsersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const UserCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 0.6s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 0;
`;

export const UserName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  word-break: break-word;
`;

export const UserEmail = styled.p`
  color: #666;
  margin: 0;
  font-size: 0.95rem;
  word-break: break-all;
`;

export const UserDate = styled.span`
  color: #999;
  font-size: 0.85rem;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-left: 1rem;

  &:hover:not(:disabled) {
    background: #e74c3c;
    color: white;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LoadingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);

  p {
    font-size: 1.1rem;
  }
`;

export const LoadingSpinner = styled.div`
  width: ${props => props.size ? `${props.size}px` : '40px'};
  height: ${props => props.size ? `${props.size}px` : '40px'};
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

export const EmptyIcon = styled.div`
  opacity: 0.5;
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s infinite;
`;

export const EmptyTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const EmptyMessage = styled.p`
  font-size: 1.1rem;
  opacity: 0.8;
  max-width: 400px;
`;

export const ErrorState = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    opacity: 0.8;
    margin-bottom: 1rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  color: #667eea;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background: white;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`;

export const PaginationInfo = styled.span`
  color: white;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 0 0.5rem;
    font-size: 0.9rem;
  }
`;
