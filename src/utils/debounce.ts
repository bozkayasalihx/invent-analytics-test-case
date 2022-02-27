export function debounce(func: Function, wait: number, immediate: boolean) {
    let timeout: NodeJS.Timeout | null;

    return async function executedFunction() {
        // @ts-ignore
        let context = this;

        let later = async function () {
            timeout = null;
            if (!immediate) await func.apply(context);
        };

        var callNow = immediate && !timeout;

        timeout && clearTimeout(timeout);

        timeout = setTimeout(later, wait);

        if (callNow) await func.apply(context);
    };
}
