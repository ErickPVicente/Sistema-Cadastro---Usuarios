import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #667eea;
  font-weight: 700;
  font-size: 1.5rem;
  
  svg {
    color: #667eea;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Navigation = styled.nav``;

export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  color: ${props => props.$active ? '#fff' : '#666'};
  background: ${props => props.$active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent'};
  
  &:hover {
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      : 'rgba(102, 126, 234, 0.1)'};
    color: ${props => props.$active ? '#fff' : '#667eea'};
    transform: translateY(-2px);
  }

  span {
    @media (max-width: 480px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    gap: 0.25rem;
  }
`;
