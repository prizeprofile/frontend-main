/**
 * Dumps all user data.
 *
 * @param {object} state
 * @return {object[]}
 */
export const user = state => state.user

/**
 * @param {object} state
 * @return {string}
 */
export const userToken = state => token => state.user.tokens[token]

/**
 * @param {object} state
 * @return {Boolean}
 */
export const isLogged = state => state.user && state.user.isLogged
