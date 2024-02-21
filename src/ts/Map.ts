export default class Map<T extends (string | number), V> {
    

    

    constructor() {
    }

    get(key: T): V | undefined {
return undefined
}
    set(key: T, value: V): void {

}
    delete(key: T): V | undefined {
        return undefined
}
    size(): number {
        return 0
}
}