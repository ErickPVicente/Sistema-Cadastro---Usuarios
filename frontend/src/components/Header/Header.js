import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiUsers, FiUserPlus, FiHome } from 'react-icons/fi';

import {
  HeaderContainer,
  HeaderContent,
  Logo,
  Navigation,
  NavLink,
  NavList
} from './Header.styles';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <FiUsers size={32} />
          <span>UserSystem</span>
        </Logo>
        
        <Navigation>
          <NavList>
            <li>
              <NavLink as={Link} to="/" $active={isActive('/')}>
                <FiHome size={20} />
                <span>Início</span>
              </NavLink>
            </li>
            <li>
              <NavLink as={Link} to="/cadastrar" $active={isActive('/cadastrar')}>
                <FiUserPlus size={20} />
                <span>Cadastrar</span>
              </NavLink>
            </li>
            <li>
              <NavLink as={Link} to="/usuarios" $active={isActive('/usuarios')}>
                <FiUsers size={20} />
                <span>Usuários</span>
              </NavLink>
            </li>
          </NavList>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
