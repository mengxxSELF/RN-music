export default ({url}) => {
  console.log(url)
    fetch(url)
    .then((response) => response.json())        // json方式解析，如果是text就是 response.text()
    .then((responseData) => {
console.log(responseData)
       // 获取到的数据处理
    })
    .catch((error) => {
      console.log(error)   // 错误处理
    })
}
