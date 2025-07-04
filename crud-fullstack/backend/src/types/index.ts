export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface UserRequest {
    name: string;
    email: string;
    password: string;
}