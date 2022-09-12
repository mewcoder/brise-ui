export default {
  name: 'MicrophoneIcon',
  
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
  <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"/>
</svg>

  }
}