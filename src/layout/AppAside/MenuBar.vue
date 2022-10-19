<template>
    <el-menu active-text-color="#ffd04b" background-color="#304156" class="el-menu-vertical-demo"
        :default-active="$route.path" router text-color="#fff" :collapse="isCollapse">
        <MenuItem :menuList="menuList">
        </MenuItem>
    </el-menu>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import MenuItem from './MenuItem.vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
// import dynamicMenu from '@/utils/dynamic-menu'

const store = useStore()

// 初始化router
const router = useRouter()
// 使用compute保存状态
const isCollapse = computed(() => {
    return store.getters.getMenuStatus
})

// 定义菜单数据
const menuList = reactive([
    {
        path: '/dashboard',
        component: "Layout",
        meta: {
            title: "首页",
            icon: "Setting",
            roles: ["sys:manage"]
        },
        children: []
    },
    {
        path: "/system",
        component: "Layout",
        alwaysShow: true,
        name: "system",
        meta: { title: "系统管理", icon: "Odometer", roles: ["sys:manage"], parentId: 0, },
        children: [{
            path: "/system/department",
            component: "/system/department/department",
            alwaysShow: false,
            name: "department",
            meta: { title: "机构管理", icon: "Position", roles: ["sys:dept"], parentId: 17, },
        }, {
            path: "/system/userList",
            component: "/system/User/UserList",
            alwaysShow: false,
            name: "userList",
            meta: { title: "用户管理", icon: "Position", roles: ["sys:user"], parentId: 17, },
        }, {
            path: "/system/roleList",
            component: "/system/Role/RoleList",
            alwaysShow: false,
            name: "roleList",
            meta: { title: "角色管理", icon: "Position", roles: ["sys:role"], parentId: 17, },
        }, {
            path: "/system/menuList",
            component: "/system/Menu/MenuList",
            alwaysShow: false,
            name: "menuList",
            meta: { title: "权限管理", icon: "Position", roles: ["sys:menu"], parentId: 17, },
        },],
    }, {
        path: "/goods",
        component: "Layout",
        alwaysShow: true,
        name: "goods",
        meta: { title: "商品管理", icon: "User", roles: ["sys:goods"], parentId: 0, },
        children: [{
            path: "/goodCategory",
            component: "/goods/goodsCategory/goodsCategoryList",
            alwaysShow: false,
            name: "goodCategory",
            meta: {
                title: "商品分类",
                icon: "Filter", roles: ["sys:goodsCategory"], parentId: 34,
            },
        },],
    }, {
        path: "/systenConfig",
        component: "Layout",
        alwaysShow: true,
        name: "systenConfig",
        meta: { title: "系统工具", icon: "Compass", roles: ["sys:systenConfig"], parentId: 0, },
        children: [{
            path: "/document",
            component: "/system/config/systemDocument",
            alwaysShow: false,
            name: "http://42.193.158.170:8089/swagger-ui/index.html",
            meta: { title: "接口文档", icon: "MessageBox", roles: ["sys:document"], parentId: 42, },
        },],
    },
])

// let menuList = reactive([])
// 获取路由表的完整数据  获取静态和动态路由
// const newRoutes = router.getRoutes()


// 将获取到的完整数据转换成菜单所需要的数据
// const newMenuList = dynamicMenu(newRoutes)
// menuList = newMenuList

</script>

<style lang="scss" scoped>
.el-menu {
    border-right: none;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

:deep .el-sub-menu .el-sub-menu__title {
    color: #f4f4f5 !important;
}

:deep(.el-menu-item.is-active) {
    color: #409eff !important;
}

:deep(.is-opened .el-menu-item) {
    background-color: #1f2d3d !important;
}

:deep(.el-menu-item:hover) {
    background-color: #001528 !important;
}
</style>
