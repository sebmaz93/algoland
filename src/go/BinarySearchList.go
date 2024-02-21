export default function bs_list(haystack: number[], needle: number): boolean {
    const len = haystack.length;
    let arr = haystack;

    let lo = 0;
    let hi = len;

    do {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            lo = m + 1;
        }
    } while (lo < hi);

    return false;
}
