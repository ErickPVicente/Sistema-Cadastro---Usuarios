#!/bin/bash

echo "🚀 EXECUTANDO PROJETO CRUD FULLSTACK"
echo "======================================"

# Verificar se as dependências estão instaladas
if [ ! -d "backend/node_modules" ]; then
    echo "❌ Dependências do backend não encontradas. Execute: ./install.sh"
    exit 1
fi

if [ ! -d "frontend/node_modules" ]; then
    echo "❌ Dependências do frontend não encontradas. Execute: ./install.sh"
    exit 1
fi

echo "🔧 Iniciando backend na porta 3001..."
cd backend
npm run dev &
BACKEND_PID=$!

# Aguardar o backend inicializar
sleep 5

echo "🎨 Iniciando frontend na porta 3000..."
cd ../frontend
npm start &
FRONTEND_PID=$!

echo ""
echo "✅ Projeto executando!"
echo "======================================"
echo "🔧 Backend:  http://localhost:3001"
echo "🎨 Frontend: http://localhost:3000"
echo "======================================"
echo ""
echo "Pressione Ctrl+C para parar os serviços"

# Aguardar interrupção do usuário
trap "echo '⏹️  Parando serviços...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT

# Manter o script rodando
wait
