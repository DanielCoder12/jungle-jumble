import { Jumble } from "./models/Jumble.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/IsValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  values = loadState('values', [Value])

  // NOTE Used to load initial data

  /** @type {import('./models/Jumble.js').Jumble[]} */
  jumbles = [
    new Jumble({ name: '👻 Jumble', text: 'Ghosts go crazy for the living, because we got them bodies, ya know what I mean?' }),
    new Jumble({ name: '🦝 Jumble', text: "If you think about it, Trash Pandas are actually really cool because they look awesome. They are the ninja's of nature." })
  ]

  activeJumble = null

  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
