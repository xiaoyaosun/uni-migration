export default {
  name (node) {
    if (node.parent.name === 'text') {
      return 'span'
    }
    return node.name
  },
  content: true,
  attr: {}
}
