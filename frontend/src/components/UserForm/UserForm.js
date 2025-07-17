import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FiUser, FiMail, FiLock, FiSave, FiLoader } from 'react-icons/fi';

import { userService } from '../../services/userService';

import {
  FormContainer,
  FormCard,
  FormTitle,
  Form,
  InputGroup,
  InputLabel,
  InputWrapper,
  Input,
  InputIcon,
  SubmitButton,
  ErrorMessage,
  SuccessMessage
} from './UserForm.styles';

const UserForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};

    // Validação do nome
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    } else if (formData.nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres';
    }

    // Validação do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    // Validação da senha
    if (!formData.senha) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (formData.senha.length < 6) {
      newErrors.senha = 'Senha deve ter pelo menos 6 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Limpar mensagem de sucesso
    if (successMessage) {
      setSuccessMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await userService.cadastrarUsuario(formData);
      
      // Limpar formulário
      setFormData({ nome: '', email: '', senha: '' });
      setErrors({});
      
      // Exibir mensagem de sucesso
      setSuccessMessage(response.message);
      toast.success('Usuário cadastrado com sucesso!');
      
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error);
      
      if (error.error && error.message) {
        toast.error(error.message);
        
        // Se for erro de email já cadastrado, mostrar no campo
        if (error.error === 'E-mail já cadastrado') {
          setErrors({ email: error.message });
        }
      } else {
        toast.error('Erro ao cadastrar usuário. Tente novamente.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <FormCard>
        <FormTitle>Cadastrar Novo Usuário</FormTitle>
        
        {successMessage && (
          <SuccessMessage>{successMessage}</SuccessMessage>
        )}
        
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <InputLabel htmlFor="nome">Nome Completo</InputLabel>
            <InputWrapper>
              <InputIcon>
                <FiUser size={20} />
              </InputIcon>
              <Input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                $hasError={!!errors.nome}
              />
            </InputWrapper>
            {errors.nome && <ErrorMessage>{errors.nome}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <InputLabel htmlFor="email">E-mail</InputLabel>
            <InputWrapper>
              <InputIcon>
                <FiMail size={20} />
              </InputIcon>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Digite seu e-mail"
                $hasError={!!errors.email}
              />
            </InputWrapper>
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </InputGroup>

          <InputGroup>
            <InputLabel htmlFor="senha">Senha</InputLabel>
            <InputWrapper>
              <InputIcon>
                <FiLock size={20} />
              </InputIcon>
              <Input
                type="password"
                id="senha"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Digite sua senha (min. 6 caracteres)"
                $hasError={!!errors.senha}
              />
            </InputWrapper>
            {errors.senha && <ErrorMessage>{errors.senha}</ErrorMessage>}
          </InputGroup>

          <SubmitButton type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <FiLoader className="loading-icon" size={20} />
                Cadastrando...
              </>
            ) : (
              <>
                <FiSave size={20} />
                Cadastrar Usuário
              </>
            )}
          </SubmitButton>
        </Form>
      </FormCard>
    </FormContainer>
  );
};

export default UserForm;
