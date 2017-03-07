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
    Icon: Check,
    CloseIcon: Close,
    lifeSpan: 3000
  },
  note: {
    header: 'Note',
    Icon: Pencil,
    CloseIcon: Close
  },
  warn: {
    header: 'Warning',
    Icon: Warn,
    CloseIcon: Close
  },
  error: {
    header: 'Error',
    Icon: Flash,
    CloseIcon: Close
  }
}
