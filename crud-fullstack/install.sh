#!/bin/bash

echo "🚀 EXECUTANDO PROJETO CRUD FULLSTACK"
echo "======================================"

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Instale em: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"

# Instalar dependências do backend
echo ""
echo "📦 Instalando dependências do BACKEND..."
cd backend
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependências do backend instaladas com sucesso!"
else
    echo "❌ Erro ao instalar dependências do backend"
    exit 1
fi

# Instalar dependências do frontend
echo ""
echo "📦 Instalando dependências do FRONTEND..."
cd ../frontend
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependências do frontend instaladas com sucesso!"
else
    echo "❌ Erro ao instalar dependências do frontend"
    exit 1
fi

echo ""
echo "🎉 INSTALAÇÃO CONCLUÍDA!"
echo "======================================"
echo ""
echo "Para executar o projeto:"
echo "1. Backend:  cd backend && npm run dev"
echo "2. Frontend: cd frontend && npm start"
echo ""
echo "Ou execute: ./run.sh"
