export default {
  name: 'UserAddIcon',
  
  props: {
    size: {
      type: String,
      default: '24',
      validator: (s) => (!isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length -1)) && s.slice(-1) === 'x' )
    }
  },

  functional: true,

  render() {
    const size = this.$props.size.slice(-1) === 'x' 
      ? this.$props.size.slice(0, this.$props.size.length -1) + 'em'
      : parseInt(this.$props.size) + 'px';

    const attrs = {}
    attrs.width = size
    attrs.height = size
  
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" {...attrs}>
  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"/>
</svg>

  }
}