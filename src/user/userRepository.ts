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
    findAll(): User[] | undefined {
        return users
    }
    findOne(i: { id: string; }): User | undefined {
        return users.find((user) => user.id === i.id)
    }
    add(i: User): User | undefined {
        users.push(i)
        return i
    }
    update(i: User): User | undefined {
        const userIdx = users.findIndex((user) => user.id === user.id)

        if(userIdx !== -1){
            users[userIdx] = { ...users[userIdx], ...i }
        }
        return users[userIdx]
    }
    delete(i: { id: string; }): User | undefined {
        const userIdx = users.findIndex((user) => user.id === i.id)

        if(userIdx !== -1){
            const deletedUsers = users[userIdx]
            users.splice(userIdx, 1)
            return deletedUsers
        }
    }
}