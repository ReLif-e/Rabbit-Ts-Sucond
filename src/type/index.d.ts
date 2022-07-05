// 类型

export interface CategoryRes {
  id:string
  name:string
  picture:string
  // 因为children里面的内容和上面的差不多,可以将变量赋值个children
  // 然后通过ApiRes的T传递过去
  // 通过result接受,result里面的内容就是这些东西
  children:CategoryRes[]
 
}

export interface ApiRes<T> {
  code:string
  msg:string
  result:T[]
}

