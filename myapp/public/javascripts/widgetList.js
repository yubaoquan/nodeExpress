import $ from 'jquery';
import a from './a';
import Vue from 'Vue';

new Vue({
    el: '#page',
    template: `
    <section class="content">
        <div class="row">
            <div class="col-md-3 col-md-offset-2">
                <div class="box box-success">
                    <div class="box-footer">
                            <div class="input-group">
                              <input type="text" name="message" placeholder="请输入组件名 ..."
                              class="form-control" v-model="widgetName" v-on:keyup.13="create">
                              <span class="input-group-btn">
                                <button type="submit" class="btn btn-success btn-flat" v-on:click="create">新建</button>
                              </span>
                            </div>
                      </div>
                  </div>
            </div>
            <div class="col-md-3 col-md-offset-2">
                <div class="box box-primary">
                    <div class="box-footer">
                            <div class="input-group">
                              <input type="text" name="message" placeholder="请输入组件名 ..."
                              class="form-control" v-model="searchKey" v-on:keyup.13="onSearch">
                              <span class="input-group-btn">
                                <button type="submit" class="btn btn-primary btn-flat"
                                v-on:click="onSearch">查询</button>
                              </span>
                            </div>
                      </div>
                  </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="box box-primary">
                    <table class="table table-bordered table-striped dataTable">
                        <thead>
                            <tr>
                                <th>控件ID</th>
                                <th>控件名称</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="widget in widgets">
                                <td>{{widget._id}}</td>
                                <td>{{widget.name}}</td>
                                <td><a href="javascript:;">删除</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
    `,
    data: {
        searchKey: '123',
        widgetName: '',
        widgets: []
    },
    ready() {
        $.ajax({
            url: '/widgetList',
            method: 'get',
            success: function(res) {
                console.info(res)
                this.widgets = res.result;
            }.bind(this)
        });
    },
    methods: {
        onSearch() {
            this.search(this.searchKey);
        },
        search(searchKey) {
            $.ajax({
                url: '/widget',
                method: 'get',
                data: {
                    name: searchKey || ''
                },
                success: function(res) {
                    console.info(res);
                    this.widgets = res.result;
                }.bind(this)
            });
        },
        create() {
            if (!this.widgetName) {
                alert('请输入控件名称');
                return;
            }
            $.ajax({
                url: '/widget',
                method: 'post',
                data: {
                    name: this.widgetName
                },
                success: function(res) {
                    if (res.success) {
                        this.search();
                    } else {
                        alert(res.desc);
                    }
                }.bind(this)
            });
        }
    }
});
