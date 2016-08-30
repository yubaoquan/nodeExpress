import $ from 'jquery';
import Vue from 'Vue';
import Nav from './vue/nav.vue';

$(function() {
    $('.red').css({
        'background-color': 'red'
    });
});

new Vue({
    el: 'body',
    components: {
        'mynav': Nav
    }
});
