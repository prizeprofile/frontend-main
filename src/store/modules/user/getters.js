
/**
 * @param {object} user
 * @return {object[]}
 */
export const user = user => user

/**
 * @param {object} user
 * @return {string}
 */
export const userToken = ({ tokens }) => token => tokens[token]

/**
 * @param {object} user
 * @return {Boolean}
 */
export const isLogged = ({ tokens }) => !!tokens.service_token
