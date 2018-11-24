
/**
 * Dumps all available competitions.
 *
 * @param {object} state
 * @return {object[]}
 */
export const competitions = competitions => competitions

/**
 * Finds out if the competition has been already entered.
 *
 * @param {object} state
 * @return {Function}
 */
export const hasEnteredCompetition = competitions => id =>
  !!competitions.entered.find(competition => competition.id === id)
