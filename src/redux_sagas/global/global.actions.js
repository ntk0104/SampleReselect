import types from './global.types'

// Loading action

export const loadingStart = () => {
  return {
    type: types.LOADING_START
  }
}

export const loadingStop = () => {
  return {
    type: types.LOADING_STOP
  }
}

export const increaseCounter = () => {
  return {
    type: types.INCREASE_COUNTER
  }
}

