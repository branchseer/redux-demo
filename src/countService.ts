export function getCountFromServer(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => resolve(42), 1000)
    })
}
