import { getCurrentInstance } from 'vue'

export function usePropUtils() {
  return {
    isAfferentProp: isAfferentProp()
  }
}

function isAfferentProp() { // Used only for setuping or mounting
  const { vnode } = getCurrentInstance()
  return (propKey)=>{
    if (typeof vnode.props[propKey] === 'undefined') {
      return false
    }
    return true
  }
}
