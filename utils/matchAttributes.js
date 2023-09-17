const matchAttributes = (feature, attributes) => {
  const cleanedAttributes = Object.keys(attributes).reduce((prev, key) => {
    if (attributes[key] != null) {
      prev[key] = attributes[key]
    }

    return prev
  }, {})

  const attributesMatched = Object.keys(cleanedAttributes).map(key => {
    if (!feature[key]) return false

    return feature[key].toString().toLowerCase().includes(attributes[key].toLowerCase())
  })

  return attributesMatched.every(a => a)
}

export default matchAttributes
