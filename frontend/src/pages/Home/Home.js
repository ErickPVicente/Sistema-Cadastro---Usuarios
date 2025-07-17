import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers, FiUserPlus, FiTrendingUp } from 'react-icons/fi';

import {
  HomeContainer,
  HeroSection,
  HeroContent,
  Title,
  Subtitle,
  CTAButton,
  FeaturesSection,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  StatsSection,
  StatCard,
  StatNumber,
  StatLabel
} from './Home.styles';

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <Title>
            Sistema de Cadastro
            <br />
            <span>de Usuários</span>
          </Title>
          <Subtitle>
            Gerencie seus usuários de forma simples, rápida e segura.
            Uma solução moderna e intuitiva para o seu negócio.
          </Subtitle>
          <CTAButton as={Link} to="/cadastrar">
            <FiUserPlus size={20} />
            Começar Agora
          </CTAButton>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeatureCard>
          <FeatureIcon>
            <FiUserPlus size={32} />
          </FeatureIcon>
          <FeatureTitle>Cadastro Rápido</FeatureTitle>
          <FeatureDescription>
            Cadastre novos usuários em segundos com nossa interface intuitiva
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FiUsers size={32} />
          </FeatureIcon>
          <FeatureTitle>Gerenciamento</FeatureTitle>
          <FeatureDescription>
            Visualize e gerencie todos os usuários cadastrados em uma lista organizada
          </FeatureDescription>
        </FeatureCard>

        <FeatureCard>
          <FeatureIcon>
            <FiTrendingUp size={32} />
          </FeatureIcon>
          <FeatureTitle>Relatórios</FeatureTitle>
          <FeatureDescription>
            Acompanhe estatísticas e métricas dos usuários cadastrados
          </FeatureDescription>
        </FeatureCard>
      </FeaturesSection>

      <StatsSection>
        <StatCard>
          <StatNumber>100%</StatNumber>
          <StatLabel>Seguro</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>24/7</StatNumber>
          <StatLabel>Disponível</StatLabel>
        </StatCard>

        <StatCard>
          <StatNumber>∞</StatNumber>
          <StatLabel>Usuários</StatLabel>
        </StatCard>
      </StatsSection>
    </HomeContainer>
  );
};

export default Home;
