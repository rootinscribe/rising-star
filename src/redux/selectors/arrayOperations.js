const includes = (item, list) => {
  for (i = 0; i < list.length; i++) {
    if (item.id === list[i].id) {
      return true
    }
  }
  return false
}

const index = (item, list) => {
  for (i = 0; i < list.length; i++) {
    if (item.id === list[i].id) {
      return i
    }
  }
  return 0
}

export { includes, index }