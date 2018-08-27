const getItemsCount = (items) => {
  if (items.length > 0) {
    return items.reduce((acc, item) => acc + item.amount, 0)
  } else {
    return 0
  }
}

export default getItemsCount