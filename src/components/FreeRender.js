export default {
  functional: true,
  props: {
    scope: Object,
    render: Function
  },
  render: (h, ctx) => (ctx.props.render ? ctx.props.render(ctx.props.scope) : null)
}
