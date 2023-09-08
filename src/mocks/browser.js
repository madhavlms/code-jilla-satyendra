import { setupWorker } from 'msw'

import requestHandlers from './handlers'

export const mockWorker = setupWorker(...requestHandlers)
