
/**
 * Env helper.
 *
 * @param {string} key
 * @param {any} fallback
 * @return {any}
 */
window.env = (key, fallback = undefined) => {
  const value = process.env[`VUE_APP_${key}`]

  if (value === undefined) {
    return fallback
  }

  switch (value.toLowerCase()) {
    case 'true':
    case '(true)':
      return true
    case 'false':
    case '(false)':
      return false
    case 'empty':
    case '(empty)':
      return ''
    case 'null':
    case '(null)':
      return
  }

  return value
}
