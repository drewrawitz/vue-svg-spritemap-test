export default {
  name: 'SvgIcon',

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  render (createElement, context) {
    const icon = require(`../assets/icons/${this.icon}.svg`).default;

    return createElement('svg', {
      attrs: {
        viewBox: icon.viewBox,
      }
    }, [
      createElement('use', {
        attrs: {
          'xlink:href': `#${icon.id}`,
        }
      })
    ])
  },
}
