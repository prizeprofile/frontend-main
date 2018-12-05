import { ENTER_COMPETITION } from '@/store/types'

export default {

  /**
   * Remembers that a competition has been entered.
   *
   * @param {any.array} entered
   * @param {any} paload
   *
   * @return {void}
   */
  [ENTER_COMPETITION]: ({ entered }, payload) => {
    let i = entered.findIndex(competition => competition.id === payload.id)

    i === -1
      // If the competition has not been entered prior, push it to the array.
      ? entered.push(payload)
      // Otherwise update the current entry.
      : entered[i] = payload
  }
}
