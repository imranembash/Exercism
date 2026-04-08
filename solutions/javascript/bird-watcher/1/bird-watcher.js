// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalBirdsPerDay = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    totalBirdsPerDay += birdsPerDay[i];
  }
  return totalBirdsPerDay
  
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let start = (week - 1) * 7;
  let end = start + 7;
  let totalBirdsInWeek = 0;
  for(let i = start; i < end && birdsPerDay.length; i++) {
    totalBirdsInWeek += birdsPerDay[i];
  }
  return totalBirdsInWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
 
  for(let i = 0; i < birdsPerDay.length; i+=2){
    birdsPerDay[i] += 1
  }
  
}
