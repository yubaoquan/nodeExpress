import $ from 'jquery';
import Vue from 'Vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

$(function() {
    $('.red').css({
        'background-color': 'red'
    });
});

new Vue({
    el: '#page',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        sendRequest() {
            console.info(1191)
            // GET /someUrl
              this.$http.get('/widget').then((response) => {
                  console.info('success');
              }, (response) => {
                  console.info('fail');
              });
        }
    }
});
