export default {
  props: ['field', 'value', 'infoList'],
  computed: {
    list({ infoList, field }) {
      return infoList?.[field.list] ?? []
    }
  }
}
