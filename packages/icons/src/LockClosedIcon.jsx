export default {
  name: 'LockClosedIcon',
  
  props: {
    size: {
      type: String,
      default: '20',
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
  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
</svg>

  }
}