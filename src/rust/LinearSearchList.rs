export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    let res = false;

    for (let i = 0; i <= haystack.length; i++) {
        if (haystack[i] === needle) {
            res = true;
            break;
        }
    }
    return res;
}
