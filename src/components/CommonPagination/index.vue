<template>
  <el-pagination
    :total="total"
    :page-size="size"
    :current-page="current"
    :page-sizes="[10, 20, 30, 50, 100]"
    layout="total, sizes, prev, pager, next, jumper"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<script>
import * as request from '@util/request'
export default {
  model: {
    prop: 'list',
    event: 'change'
  },
  props: {
    url: {
      type: String,
      required: true
    },
    params: {
      type: Object,
      default: () => {}
    },
    config: {
      type: Object,
      default: () => {}
    },
    doRequest: {
      type: Boolean,
      default: false // true的时候主动更新数据
    },
    list: {
      type: Array,
      default: () => []
    },
    // 请求方式，get、post、put、del
    // 不叫delete，delete是关键字
    type: {
      type: String,
      default: 'post'
    }
  },
  data() {
    return {
      // 当前页
      current: 1,
      // 每页条数
      size: 10,
      // 总数
      total: 10,
      // 加锁
      lock: false
    }
  },
  watch: {
    doRequest(flag) {
      if (flag) {
        // 防止params更新比doRequest快
        this.$nextTick(() => {
          this.getList()
        })
        this.$emit('update:doRequest', false)
      }
    },
    params: {
      handler() {
        this.current = 1
      },
      deep: true
    }
  },
  created() {
    if (!this.lock) {
      this.getList()
    }
  },
  activated() {
    if (!this.lock) {
      this.getList()
    }
  },
  methods: {
    handleSizeChange(size) {
      this.size = size
      this.getList()
    },
    handleCurrentChange(current) {
      this.current = current
      this.getList()
    },
    async getList() {
      const { url, type, params, current, size, config } = this
      if (!url) return
      this.lock = true
      // 根据自己项目改造，current，size，total，list等key
      const requestParams = {
        ...params,
        current,
        size
      }
      try {
        const result = await request[type.toLocaleLowerCase()](url, requestParams, config)
        this.$emit('change', result?.list ?? [])
        this.total = result?.total ?? 0
      } catch (error) {
        console.error(error)
      }
      this.lock = false
    }
  }
}
</script>
