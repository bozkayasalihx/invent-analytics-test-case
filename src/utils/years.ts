export class Years {
    static generateYears(startYear = 1980) {
        const curYear = new Date().getFullYear(),
            years = [];
        while (startYear <= curYear) {
            years.unshift(startYear++);
        }

        return years;
    }
}
