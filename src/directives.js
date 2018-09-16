import Vue from 'vue'

/**
 * Image lazy-loading directive.
 *
 * @deprecated
 */
Vue.directive('lazy', (el, { value }) => {
  // If we find a CDN shorthand, replace it with the full URL.
  if (value.match(/^\$\//)) {
    value = value.replace(/^\$\//, Vue.prototype.$config.assets.cdnUrl)
  }

  const node = document.createElement(el.nodeName)
  node.onload = () => el.src = value
  node.src = value
})
