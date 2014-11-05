var type = require('type')

module.exports = function (el) {
  var element = HTMLElement
    ? HTMLElement
    : Element

  if(type(element) === 'function') return (el instanceof element)
  return type(el) === 'element' && type(el.nodeName) === 'string'
}
