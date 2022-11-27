const setItem = (key, value) => {
  // 将对象、数组类型的数据转换为 JSON 格式的字符串进行存储。
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

const getItem = key => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (error) {
    return data
  }
}

const removeItem = key => {
  window.localStorage.removeItem(key)
}

export default {
  setItem,
  getItem,
  removeItem
}
