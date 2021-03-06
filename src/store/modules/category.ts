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
      res.data.result.forEach((item)=>{
        item.open = false
      })
    this.list = res.data.result
    },

    show(id:string){
      const res = this.list.find(item=>item.id === id)
      // console.log(res);
      res!.open = true
    },

    hide(id:string){
      const res = this.list.find(item=>item.id === id)
      // console.log(res);
      res!.open = false
    }
  },


  getters:{

  }
})