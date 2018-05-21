<template>
<div>
    <admin-header></admin-header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 leftsilder">
                <admin-silder></admin-silder>
            </div>
            <div class="col-sm-9 col-md-10 rightsilder">
                <keep-alive>
                <router-view></router-view>
                </keep-alive>
            </div>
        </div>
    </div>
    
</div>
    
</template>                
<script>
    import AdminHeader from '../../components/admin/AdminHeader'
    import AdminSilder from '../../components/admin/AdminSilder'

    export default {
      name: 'App',
      components: {
        AdminHeader,AdminSilder
      }
    }
</script>

<style scoped>
.row{
    margin-top:52px;
    position:relative;
}
.leftsilder{
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
    padding:20px 0;
}
.rightsilder{
    margin-top:20px;
}
.active a{
    color: #fff;
    background-color: #428bca;
}
.active a:hover{
    color: #fff;
    background-color: #428bca;
}
</style>