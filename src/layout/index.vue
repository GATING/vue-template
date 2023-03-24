<template>
  <keep-alive>
    <router-view :key="key" />
  </keep-alive>
</template>

<script>
import { mapGetters } from 'vuex'
import { map, some, differenceBy, includes, reduceRight } from 'lodash'
export default {
  name: 'Layout',
  data() {
    return {
      lastRoute: ''
    }
  },
  computed: {
    ...mapGetters(['cacheList']),
    key() {
      return this.$route.fullPath
    }
  },
  watch: {
    $route(newRoute, oldRoute) {
      this.lastRoute = oldRoute.fullPath
      if (newRoute !== oldRoute) {
        this.$nextTick(() => {
          this.setCache(newRoute)
        }, 0)
      }
    },
    cacheList(newCache, oldCache) {
      if (oldCache.length == 0 || newCache === oldCache) return
      let delCaches = []
      if (newCache.length === 0) {
        delCaches = map(oldCache, 'fullPath')
      } else {
        delCaches = map(differenceBy(oldCache, newCache, 'fullPath'), 'fullPath')
      }
      if (delCaches.length === 0) return
      reduceRight(
        this.$children,
        (result, node) => {
          const { $vnode } = node
          const { componentOptions, parent } = $vnode
          const { Ctor, tag } = componentOptions
          const key = $vnode.key || Ctor.cid + (tag ? `::${tag}` : '')
          console.log(delCaches)
          if (key && includes(delCaches, key)) {
            const cache = parent?.componentInstance?.cache
            if (cache) {
              delete cache[key]
            }
            node?.$destroy()
          }
        },
        []
      )
    }
  },
  mounted() {
    this.setCache(this.$route)
    window.addEventListener('popstate', this.goBack, false)
  },
  beforeDestroy() {
    window.removeEventListener('popstate', this.goBack, false)
  },
  methods: {
    setCache(route) {
      const { path, fullPath, query, meta } = route
      const cacheList = this.cacheList
      if (!some(cacheList, item => item.fullPath === fullPath) && this.$route.path !== '/') {
        cacheList.push({
          path,
          fullPath,
          query,
          meta
        })
        this.$store.commit('app/SET_CACHE', cacheList)
      }
    },
    goBack() {
      const { cacheList, lastRoute } = this
      let path = lastRoute
      let index = cacheList.findIndex(item => item.fullPath === path)
      if (index > -1) {
        const needDelete = cacheList.length != 1
        if (needDelete) {
          this.$store.commit(
            'app/SET_CACHE',
            cacheList.filter((e, i) => i !== index)
          )
        }
      }
    },
  }
}
</script>
