export function downloadFile(blob, fileName) {
  const link = document.createElement('a')
  // 使用获取到的blob对象创建的url
  const url = window.URL.createObjectURL(blob)
  link.href = url
  // 指定下载的文件名
  link.download = fileName
  link.click()
  // 移除blob对象的url
  window.URL.revokeObjectURL(url)
}
