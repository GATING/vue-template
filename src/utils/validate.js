/**
 * @tips 可以搭配common-regex，实现自定义校验器
 */

// 校验必填项
export const validateRequired = (message = '必填项不能为空', trigger = 'blur') => ({
  required: true,
  message,
  trigger
})

// 校验数组必填项
export const validateArrayRequired = (...rest) => ({
  type: 'Array',
  ...validateRequired(...rest)
})

// 校验日期必填项
export const validateDateRequired = (...rest) => ({
  type: 'date',
  ...validateRequired(...rest)
})
