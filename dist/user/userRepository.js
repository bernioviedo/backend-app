import { User } from "./userEntity.js";
const users = [
    new User('Santiago Sabbioni', 'santisabbioni@gmail.com', '3407440934', 0)
];
export class UserRepository {
    async findAll() {
        return await users;
    }
    async findOne(i) {
        return await users.find((user) => user.id === i.id);
    }
    async add(i) {
        await users.push(i);
        return i;
    }
    async update(i) {
        const userIdx = await users.findIndex((user) => user.id === user.id);
        if (userIdx !== -1) {
            users[userIdx] = { ...users[userIdx], ...i };
        }
        return users[userIdx];
    }
    async delete(i) {
        const userIdx = await users.findIndex((user) => user.id === i.id);
        if (userIdx !== -1) {
            const deletedUsers = users[userIdx];
            users.splice(userIdx, 1);
            return deletedUsers;
        }
    }
}
//# sourceMappingURL=userRepository.js.map