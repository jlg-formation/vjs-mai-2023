import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faAngleRight, faPlus, faRotateRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import type { Plugin } from 'vue'

library.add(faAngleRight, faRotateRight, faTrashCan, faPlus)

export const fontawesome: Plugin = {
  install: (app, options) => {
    console.log('options: ', options)
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
