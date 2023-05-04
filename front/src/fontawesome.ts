import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faAngleRight, faPlus, faRotateRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import type { App } from 'vue'

library.add(faAngleRight, faRotateRight, faTrashCan, faPlus)

export const fontawesome = {
  install: (app: App<Element>) => {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}
