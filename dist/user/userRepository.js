import { User } from "./userEntity.js";
const users = [
    new User('Santiago Sabbioni', 'santisabbioni@gmail.com', '3407440934', 0)
];
export class UserRepository {
    findAll() {
        return users;
    }
    findOne(i) {
        return users.find((user) => user.id === i.id);
    }
    add(i) {
        users.push(i);
        return i;
    }
    update(i) {
        const userIdx = users.findIndex((user) => user.id === user.id);
        if (userIdx !== -1) {
            users[userIdx] = { ...users[userIdx], ...i };
        }
        return users[userIdx];
    }
    delete(i) {
        const userIdx = users.findIndex((user) => user.id === i.id);
        if (userIdx !== -1) {
            const deletedUsers = users[userIdx];
            users.splice(userIdx, 1);
            return deletedUsers;
        }
    }
}
//# sourceMappingURL=userRepository.js.map