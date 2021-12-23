<template>
  <div class="flex">
    <div class="el-upload-list--picture-card">
      <div v-for="file in fileList" :key="file.url" class="el-upload-list__item">
        <el-image fit="fill" class="el-upload-list__item-thumbnail" :src="file.url" />
        <!-- 遮罩层 -->
        <span class="el-upload-list__item-actions">
          <span @click="editFile(file)" v-if="!disabled">
            <i class="el-icon-edit-outline"></i>
          </span>
          <span @click="previewCurrent(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
          <span @click="removeCurrent(file)" v-if="!disabled">
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </div>

    <el-upload
      v-bind="otherProps"
      v-show="fileList.length < limit"
      action=""
      ref="uploader"
      list-type="picture-card"
      :limit="limit"
      :accept="accept"
      :on-change="change"
      :on-exceed="exceed"
      :http-request="upload"
      :multiple="multiple"
      :disabled="disabled"
      :show-file-list="false"
    >
      <i slot="default" class="el-icon-plus"></i>
    </el-upload>
    <slot name="tip"></slot>
    <el-dialog :visible.sync="visible" width="500px" destroy-on-close append-to-body>
      <img width="100%" :src="imageUrl" />
    </el-dialog>
  </div>
</template>

<script>
// 如需拖拽排序，自己下载 vuedraggable，用法比较简单
export default {
  name: 'uploader',
  props: {
    // 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]
    fileList: {
      type: Array,
      default: () => []
    },
    // 接受上传的文件类型
    accept: {
      type: String,
      default: 'image/jpeg, image/png'
    },
    // 最大允许上传个数
    limit: {
      type: Number,
      default: 9999
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否允许多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 其他el-upload配置
    otherProps: {
      type: Object,
      default: () => ({})
    }
  },
  model: {
    prop: 'fileList',
    event: 'change'
  },
  data() {
    return {
      visible: false,
      imageUrl: '',
      editIdx: -1
    }
  },

  methods: {
    getFileIdx(file) {
      return this.fileList.indexOf(file)
    },
    // 编辑上传
    editFile(file) {
      this.editIdx = this.getFileIdx(file)
      this.$refs.uploader.$el.querySelector('.el-upload').click()
    },
    change(file, fileList) {
      this.$emit('change', fileList)
      console.log(123)
    },
    // 文件超出个数限制时的钩子
    exceed() {
      this.$message.warning(`最多可上传${this.limit}张图片`)
    },
    // 上传图片,这里最好结合自己公司的做法，所以upload时间没做处理
    upload({ file }) {
      if (this.editIdx !== -1) {
        this.fileList.splice(this.editIdx, 1)
      }
      this.editIdx = -1
      this.$emit('upload', file)
    },
    // 预览图片
    previewCurrent({ url }) {
      this.imageUrl = url
      this.visible = true
    },
    // 删除当前的文件
    async removeCurrent(file) {
      await this.$confirm(`确定删除该文件吗?`, '提示', {
        type: 'warning'
      })
      const { fileList, getFileIdx } = this
      const idx = getFileIdx(file)
      fileList.splice(idx, 1)
    }
  }
}
</script>
