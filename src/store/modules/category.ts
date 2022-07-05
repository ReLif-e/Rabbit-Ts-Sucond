import {defineStore} from 'pinia'
import axios from '@/utils/request'
import { ApiRes, CategoryRes } from '@/type'
import { topCategory } from '../constants'
const Categorylist = topCategory.map(item=>{
  return {name:item}
})

export default defineStore('category',{
  state() {
      return{
        list:Categorylist as CategoryRes[]  //断言
      }
  },

  actions:{
   async getCategory(){
      const res = await axios.get<ApiRes<CategoryRes>>('/home/category/head')
      console.log(res);
    this.list = res.data.result
    }
  },


  getters:{

  }
})