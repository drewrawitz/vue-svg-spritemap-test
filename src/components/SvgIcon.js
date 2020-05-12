export default {
  name: 'SvgIcon',

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  render (createElement) {
    const icon = require(`../assets/icons/${this.icon}.svg`).default;

    return createElement('svg', {
      attrs: {
        viewBox: icon.viewBox,
      },
      on: this.$listeners,
    }, [
      createElement('use', {
        attrs: {
          'xlink:href': `#${icon.id}`,
        }
      })
    ])
  },
}
