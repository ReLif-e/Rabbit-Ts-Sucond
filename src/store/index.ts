import userCategory from './modules/category'

// 集中管理pinia只需要导出这一个
export default function userCate(){
 return{
  category:userCategory()
 }
}