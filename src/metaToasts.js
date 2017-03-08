import {
  Check,
  Close,
  Pencil,
  Warn,
  Flash
} from './Icons'

export default {
  success: {
    header: 'Success',
    icon: Check,
    closeIcon: Close,
    timeout: 3000
  },
  note: {
    header: 'Note',
    icon: Pencil,
    closeIcon: Close
  },
  warn: {
    header: 'Warning',
    icon: Warn,
    closeIcon: Close
  },
  error: {
    header: 'Error',
    icon: Flash,
    closeIcon: Close
  }
}
