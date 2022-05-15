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
    <el-form-item v-bind="field" v-for="(field, idx) in fieldList" :key="idx" :prop="field.value">
      <!-- label -->
      <template slot="label">
        <template v-if="field.scopedSlotsLabel">
          <slot :name="field.scopedSlotsLabel" />
        </template>
        <template v-else-if="field.renderLabel">
          <free-render :render="field.renderLabel" />
        </template>
        <template v-else-if="field.label">{{ field.label }}</template>
      </template>

      <template v-if="$scopedSlots[field.scopedSlots]">
        <slot :name="field.scopedSlots" />
      </template>
      <template v-else>
        <span v-if="field.prefix" :class="field.prefixClass">{{ field.prefix }}</span>
        <component
          v-model.trim="model[field.value]"
          v-bind="getProps(field)"
          v-on="field.on"
          :field="field"
          :info-list="infoList"
          :is="field.component || 'el-input'"
        />
        <span v-if="field.suffix" :class="field.suffixClass">{{ field.suffix }}</span>
      </template>
    </el-form-item>
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
import ElRadio from './components/Radio.vue'
import ElUpload from './components/Upload.vue'
import ElSelect from './components/Select.vue'
import RemoteSelect from './components/RemoteSelect.vue'
import ElCheckbox from './components/Checkbox.vue'
import FreeRender from '../FreeRender'

export default {
  name: 'common-form',
  components: {
    ElRadio,
    ElUpload,
    ElSelect,
    ElCheckbox,
    RemoteSelect,
    FreeRender
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
    const methodsList = ['validate', 'validateField', 'resetFields', 'resetFields']
    methodsList.forEach(method => {
      this[method] = this.$refs.form[method]
    })
  },
  methods: {
    getProps({ component, label, extraProps }) {
      const props = extraProps || {}
      if (!props.placeholder) {
        props.placeholder = component === 'el-input' ? `请输入${label}` : `请选择${label}`
      }
      return props
    },
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
