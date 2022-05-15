export default {
  props: ['field', 'value', 'infoList'],
  computed: {
    list({ infoList, field }) {
      if (Array.isArray(field.list)) return field.list
      return infoList?.[field.list] ?? []
    }
  }
}
