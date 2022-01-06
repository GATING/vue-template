<script lang="jsx">
import { indicesOf, mergeRange } from './utils'
/**
 * @see <a href="https://github.com/AlbertLucianto/vue-text-highlight">文档同这个</a>
 */
export default {
  name: 'text-highlight',
  props: {
    // 需要匹配的值
    queries: [Array, String, RegExp],
    // 被搜索的字符串是否区分大小写
    caseSensitive: Boolean,
    // 是否将字符串作为整个单词进行搜索
    wholeWordMatch: Boolean,
    highlightStyle: [Object, Array, String],
    highlightClass: [Object, Array, String],
    highlightComponent: {
      type: [String, Object],
      default: 'mark'
    }
  },

  data() {
    return {
      text: ''
    }
  },
  computed: {
    highlights({ text, queries, caseSensitive, wholeWordMatch, highlightChunks }) {
      return highlightChunks(text, queries, { caseSensitive, wholeWordMatch })
    }
  },
  beforeMount() {
    this.setTextFromSlot()
  },
  beforeUpdate() {
    this.setTextFromSlot()
  },
  methods: {
    setTextFromSlot() {
      const defaultSlot = this.$slots.default
      if (!defaultSlot) this.text = ''
      else if (defaultSlot[0].tag !== undefined && process.env.NODE_ENV !== 'production') {
        console.warn('children of <text-highlight> must be a plain string.')
        this.text = ''
      } else {
        this.text = defaultSlot[0].text
      }
    },
    highlightChunks(text, queriesOrQuery, { caseSensitive = false, wholeWordMatch = false } = {}) {
      let queries = queriesOrQuery
      if (typeof queriesOrQuery === 'string' || queriesOrQuery instanceof RegExp) {
        queries = [queriesOrQuery]
      } else if (!Array.isArray(queriesOrQuery)) {
        if (process.env.NODE_ENV !== 'production') {
          throw new Error('queries must be either string, array of strings or regex.')
        } else {
          return []
        }
      }

      const matches = []

      queries.forEach(query => {
        matches.push(...indicesOf(text, query, { caseSensitive, wholeWordMatch }))
      })

      const highlights = mergeRange(matches)

      const chunks = []
      let lastEnd = 0

      highlights.forEach(([start, end], index) => {
        if (lastEnd !== start) {
          chunks.push({
            isHighlighted: false,
            text: text.slice(lastEnd, start)
          })
        }
        chunks.push({
          isHighlighted: true,
          text: text.slice(start, end),
          highlightIndex: index
        })

        lastEnd = end
      })

      if (lastEnd !== text.length) {
        chunks.push({
          isHighlighted: false,
          text: text.slice(lastEnd)
        })
      }

      return chunks
    }
  },
  // template有空格，故使用render
  render() {
    const { highlights, highlightComponent, highlightClass, highlightStyle } = this
    return (
      <span>
        {highlights.map(({ text, isHighlighted, highlightIndex }) => {
          if (!isHighlighted) {
            return text
          }
          return (
            <highlightComponent
              class={[highlightClass]}
              style={highlightStyle}
              key={highlightIndex}
              index={highlightIndex}
              text={text}
              {...this.attributes}
            >
              {text}
            </highlightComponent>
          )
        })}
      </span>
    )
  }
}
</script>
