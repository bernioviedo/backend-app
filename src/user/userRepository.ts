import { User } from "./userEntity.js"
import { Repository } from "../shared/repository.js"

const users = [
    new User(
        'Santiago Sabbioni',
        'santisabbioni@gmail.com',
        '3407440934',
        0
    )
]

export class UserRepository implements Repository<User>{
    async findAll(): Promise<User[] | undefined> {
        return await users
    }
    async findOne(i: { id: string; }): Promise<User | undefined> {
        return await users.find((user) => user.id === i.id)
    }
    async add(i: User): Promise<User | undefined> {
        await users.push(i)
        return i
    }
    async update(i: User): Promise<User | undefined> {
        const userIdx = await users.findIndex((user) => user.id === user.id)

        if(userIdx !== -1){
            users[userIdx] = { ...users[userIdx], ...i }
        }
        return users[userIdx]
    }
    async delete(i: { id: string; }): Promise<User | undefined> {
        const userIdx = await users.findIndex((user) => user.id === i.id)

        if(userIdx !== -1){
            const deletedUsers = users[userIdx]
            users.splice(userIdx, 1)
            return deletedUsers
        }
    }
}