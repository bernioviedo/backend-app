import { Grill } from "./grillEntity.js"
import { Repository } from "../shared/repository.js"

const grills = [
    new Grill(
        true,
        'Mediana'
    )
]

export class GrillRepository implements Repository<Grill>{
    public findAll(): Grill[] | undefined {
        return grills
    }
    public findOne(i: { id: string; }): Grill | undefined {
        return grills.find((grill) => grill.grillId === i.id)
    }
    public add(i: Grill): Grill | undefined {
        grills.push(i)
        return i
    }
    public update(i: Grill): Grill | undefined {
        const grillIdx = grills.findIndex((grill) => grill.grillId === i.grillId)

        if(grillIdx !== -1){
            grills[grillIdx] = { ...grills[grillIdx], ...i}
        }

        return grills[grillIdx]
    }
    public delete(i: { id: string; }): Grill | undefined {
        const grillIdx = grills.findIndex((grill) => grill.grillId === i.id)

        if (grillIdx !== -1) {
            const deletedGrill = grills[grillIdx]
            grills.splice(grillIdx, 1)
            return deletedGrill
        }
    }
}