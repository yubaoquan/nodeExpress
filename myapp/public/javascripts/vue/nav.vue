<style>
    .dropdown:hover .dropdown-menu {
        display: block;
    }
</style>
<template>
    <header class="main-header">
        <nav class="navbar navbar-static-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a href="/" class="navbar-brand"><b>NEMV</b>灰常牛逼</a>
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li v-bind:class="{'active': pageIndex == 0}">
                            <a href="/">首页</a>
                        </li>
                        <li v-bind:class="{'active': pageIndex == 1}">
                            <a href="/widgets">组件列表</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <span class="caret"></span></a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                                <li class="divider"></li>
                                <li><a href="#">One more separated link</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div class="navbar-form navbar-left" role="search">
                        <div class="form-group">
                            <input type="text" class="form-control" id="navbar-search-input" placeholder="Search">
                        </div>
                    </div>
                    <ul class="nav navbar-nav navbar-right">
                        <li class="dropdown">
                            <a href="javascript:;">Dropdown</a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a href="#">Action</a></li>
                                <li><a href="#">Another action</a></li>
                                <li><a href="#">Something else here</a></li>
                                <li class="divider"></li>
                                <li><a href="#">Separated link</a></li>
                            </ul>
                        </li>
                        <li><a href="#">登录</a></li>
                    </ul>
                </div>
                <!-- /.navbar-collapse -->
            </div>
            <!-- /.container-fluid -->
        </nav>
    </header>
    <div class="h50"></div>
</template>
<script>
    import $ from 'jquery'
    export default {
        data() {
            return {
                msg: 'mmmmm',
                pageIndex: 0
            };
        },
        ready() {
            switch(location.pathname) {
                case '/':
                    this.pageIndex = 0;
                    break;
                case '/widgets':
                    this.pageIndex = 1;
                    break;
            }
        }
    }
</script>
