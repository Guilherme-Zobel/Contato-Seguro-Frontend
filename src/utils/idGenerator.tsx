export function idGenerator(data: { id: number }[]) {
    let highestNumber = 0;
    
    for (let d of data) {
        if (d.id > highestNumber) {
            highestNumber = d.id
        }
    }

    return highestNumber + 1;
}