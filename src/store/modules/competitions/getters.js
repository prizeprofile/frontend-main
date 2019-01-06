
/**
 * Finds out if the competition has been already entered.
 *
 * @param {object} state
 * @return {Function}
 */
export const hasEnteredCompetition = competitions => id =>
  !!competitions.entered.find(competition => competition.id === id)

/**
 * Returns last viewed competition.
 *
 * @param {object} state
 * @return {any}
 */
export const viewedCompetition = competitions => competitions.viewed
