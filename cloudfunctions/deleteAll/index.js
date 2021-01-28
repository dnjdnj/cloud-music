// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
  env:'dnj-9gsu1l8r241dc20b'
})

const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('playlist').where({
      id:_.exists(true)
    }).remove()
  } catch(e) {
    console.error(e)
  }
}