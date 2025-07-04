import { Request, Response } from 'express';

interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

// Banco de dados em memória (temporário)
let users: User[] = [
    {
        id: '1',
        name: 'Administrador',
        email: 'admin@admin.com',
        password: '12345',
        createdAt: new Date()
    }
];

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body;
            
            // Verificar se email já existe
            const existingUser = users.find(u => u.email === email);
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }

            const newUser: User = {
                id: String(users.length + 1),
                name,
                email,
                password,
                createdAt: new Date()
            };

            users.push(newUser);
            
            // Não retornar a senha
            const { password: _, ...userWithoutPassword } = newUser;
            res.status(201).json(userWithoutPassword);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getAllUsers(req: Request, res: Response) {
        try {
            // Não retornar as senhas
            const usersWithoutPasswords = users.map(({ password, ...user }) => user);
            res.status(200).json(usersWithoutPasswords);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const user = users.find(u => u.id === req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            
            // Não retornar a senha
            const { password: _, ...userWithoutPassword } = user;
            res.status(200).json(userWithoutPassword);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateUser(req: Request, res: Response) {
        try {
            const userIndex = users.findIndex(u => u.id === req.params.id);
            if (userIndex === -1) {
                return res.status(404).json({ message: 'User not found' });
            }

            const updatedUser = { ...users[userIndex], ...req.body };
            users[userIndex] = updatedUser;
            
            // Não retornar a senha
            const { password: _, ...userWithoutPassword } = updatedUser;
            res.status(200).json(userWithoutPassword);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const userIndex = users.findIndex(u => u.id === req.params.id);
            if (userIndex === -1) {
                return res.status(404).json({ message: 'User not found' });
            }

            users.splice(userIndex, 1);
            res.status(204).send();
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}

export default new UserController();