<template>
  <el-form
    v-bind="$attrs"
    v-on="$listeners"
    id="business-common-form"
    ref="form"
    :model="model"
    @submit.prevent
    @keyup.enter.native="search"
  >
    <form-item
      v-for="(field, idx) in fieldList"
      :field="field"
      :model="model"
      :info-list="infoList"
      :key="idx"
    />
    <template v-if="$scopedSlots.actions">
      <el-form-item>
        <slot v-bind="{ ref: $refs }" name="actions" />
      </el-form-item>
    </template>
    <template v-else>
      <el-form-item>
        <el-button type="primary" @click="search">{{ confirmText }}</el-button>
        <el-button @click="reset">{{ resetText }}</el-button>
      </el-form-item>
    </template>
    <slot></slot>
  </el-form>
</template>

<script>
import FormItem from './FormItem.vue'

export default {
  name: 'common-form',
  components: {
    FormItem
  },
  props: {
    // 表单数据
    model: {
      type: Object
    },
    // 相关字段
    fieldList: {
      type: Array
    },
    // 相关的列表
    infoList: {
      type: Object
    },
    // 确认的文集
    confirmText: {
      type: String,
      default: '查询'
    },
    // 重置的文字
    resetText: {
      type: String,
      default: '重置'
    }
  },
  mounted() {
    // 添加实例方法
    const methodsList = ['validate', 'validateField', 'resetFields', 'clearValidate']
    methodsList.forEach(method => {
      this[method] = this.$refs.form[method]
    })
  },
  methods: {
    async search() {
      await this.$refs.form.validate()
      this.$emit('search')
    },
    reset() {
      this.resetFields()
      this.$emit('reset')
    }
  }
}
</script>

<style lang="scss">
#business-common-form {
  .input-text-left input {
    text-align: left;
  }
}
</style>
