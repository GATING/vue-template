<template>
  <el-form-item v-bind="field" :prop="field.value">
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
        v-model.trim="form[formKey]"
        v-bind="getProps(field)"
        v-on="field.on"
        :field="field"
        :info-list="infoList"
        :is="field.component || 'el-input'"
      />
      <span v-if="field.suffix" :class="field.suffixClass">{{ field.suffix }}</span>
    </template>
  </el-form-item>
</template>

<script>
import { last, split, slice, get } from 'lodash'
import ElRadio from './components/Radio.vue'
import ElUpload from './components/Upload.vue'
import ElSelect from './components/Select.vue'
import RemoteSelect from './components/RemoteSelect.vue'
import ElCheckbox from './components/Checkbox.vue'
import FreeRender from '../FreeRender'
export default {
  components: {
    ElRadio,
    ElUpload,
    ElSelect,
    ElCheckbox,
    RemoteSelect,
    FreeRender
  },
  props: {
    model: Object,
    field: Object,
    // 相关的列表
    infoList: {
      type: Object
    }
  },
  computed: {
    keysList({ field }) {
      return split(field.value, '.')
    },
    formKey({ keysList }) {
      return last(keysList)
    },
    form({ model, keysList }) {
      if (keysList.length <= 1) return model
      return get(model, slice(keysList, 0, -1))
    }
  },
  methods: {
    getProps({ component, label, extraProps }) {
      const props = extraProps || {}
      if (!props.placeholder) {
        props.placeholder = component === 'el-input' ? `请输入${label}` : `请选择${label}`
      }
      return props
    }
  }
}
</script>
