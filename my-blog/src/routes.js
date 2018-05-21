import Index from './components/Index.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import SingleBlog from './components/SingleBlog.vue'
import SearchBlog from './components/SearchBlogs.vue'

import BlogList from './components/admin/BlogList.vue'
import AddBlog from './components/admin/AddBlog.vue'
import EditBlog from './components/admin/EditBlog.vue'
import AdminIndex from './components/admin/AdminIndex.vue'
import Admin from './components/admin/Admin.vue'

import AddCategory from './components/admin/AddCategory.vue'
import CateGoryEdit from './components/admin/CateGoryEdit.vue'
import CateGoryList from './components/admin/CateGoryList.vue'

export default[
    //前台展示路由
    {path:"/",component:Index,meta: {
        title: '首页'
      }},
    {path:"/category/:id",component:ShowBlogs},
    {path:"/blog/:id",component:SingleBlog},
    {path:"/search/",component:SearchBlog},
    //后台管理路由
    {path:"/admin",component:Admin,
        children:[
            {path:"/admin/AdminIndex",component:AdminIndex},
            {path:"/admin/BlogList",component:BlogList},
            {path:"/admin/add",component:AddBlog},
            {path:"/admin/edit/:id",component:EditBlog},
            {path:"/admin/addCategory",component:AddCategory},
            {path:"/admin/CateGoryEdit/:id",component:CateGoryEdit},
            {path:"/admin/CateGoryList",component:CateGoryList},
        ]
    }
]

