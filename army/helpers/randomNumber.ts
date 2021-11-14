/**
 * Create Random number provided by min and max.
 * @param min - Minimum value from which value has to be generated.
 * @param max - Maximum value to which value has to be generated.
 * @returns - Returns the random number.
 */
function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default randomIntFromInterval;