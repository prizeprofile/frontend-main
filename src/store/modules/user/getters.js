
/**
 * @param {object} user
 * @return {object[]}
 */
export const user = ({ user }) => user

/**
 * @param {object} user
 * @return {string}
 */
export const userToken = ({ user }) => token => user.tokens[token]

/**
 * @param {object} user
 * @return {Boolean}
 */
export const isLogged = ({ user }) => user && user.isLogged

/**
 * Is true if this is the first session of a user.
 *
 * @param  {object}  user
 * @return {Boolean}
 */
export const isNew = ({ user }) => !user || user.created_at === user.updated_at
