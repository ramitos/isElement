var type = require('type')

module.exports = function (el) {
  var element = !!HTMLElement
    ? Element
    : HTMLElement
  if(type(element) === 'function') return (el instanceof element)
  return type(el) === 'element' && type(el.nodeName) === 'string'
}
