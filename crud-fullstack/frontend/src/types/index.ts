export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface UserFormProps {
    onSubmit: (user: User) => void;
    initialData?: User;
}