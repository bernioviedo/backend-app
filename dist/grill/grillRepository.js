import { Grill } from "./grillEntity.js";
const grills = [
    new Grill(true, 'Mediana')
];
export class GrillRepository {
    async findAll() {
        return await grills;
    }
    async findOne(i) {
        return await grills.find((grill) => grill.grillId === i.id);
    }
    async add(i) {
        await grills.push(i);
        return i;
    }
    async update(i) {
        const grillIdx = await grills.findIndex((grill) => grill.grillId === i.grillId);
        if (grillIdx !== -1) {
            grills[grillIdx] = { ...grills[grillIdx], ...i };
        }
        return grills[grillIdx];
    }
    async delete(i) {
        const grillIdx = await grills.findIndex((grill) => grill.grillId === i.id);
        if (grillIdx !== -1) {
            const deletedGrill = grills[grillIdx];
            grills.splice(grillIdx, 1);
            return deletedGrill;
        }
    }
}
//# sourceMappingURL=grillRepository.js.map