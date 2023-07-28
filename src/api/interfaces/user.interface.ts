export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    type?: string;
    createdAt: Date;
}
