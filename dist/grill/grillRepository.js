import { Grill } from "./grillEntity.js";
const grills = [
    new Grill(true, 'Mediana')
];
export class GrillRepository {
    findAll() {
        return grills;
    }
    findOne(i) {
        return grills.find((grill) => grill.grillId === i.id);
    }
    add(i) {
        grills.push(i);
        return i;
    }
    update(i) {
        const grillIdx = grills.findIndex((grill) => grill.grillId === i.grillId);
        if (grillIdx !== -1) {
            grills[grillIdx] = { ...grills[grillIdx], ...i };
        }
        return grills[grillIdx];
    }
    delete(i) {
        const grillIdx = grills.findIndex((grill) => grill.grillId === i.id);
        if (grillIdx !== -1) {
            const deletedGrill = grills[grillIdx];
            grills.splice(grillIdx, 1);
            return deletedGrill;
        }
    }
}
//# sourceMappingURL=grillRepository.js.map