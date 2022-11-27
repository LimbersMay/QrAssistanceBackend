
import { UserEntity } from "./user.entity";

export interface UserRepository{
    findUserById(userId: string): Promise<UserEntity | null>;
    createUser(user: UserEntity): Promise<UserEntity | null>;
    modifyUser(user: UserEntity): Promise<UserEntity | null>;
    listUser(): Promise<UserEntity | null>;
}