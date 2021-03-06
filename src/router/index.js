import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import Hello from '@/components/Hello';
import htmlFive from '@/components/htmlFive';
import VR from '@/components/vr/index';
import VRSHOW from '@/components/vr/vrFrame';
import Test from '@/components/Test';
import Testa from '@/components/test/Test-a';
import Testb from '@/components/test/Test-b';
import VrList from '@/components/vrtemplate/index';
import Vjia from '@/components/vrtemplate/vrvjia';
import Kujiale from '@/components/vrtemplate/kujiale';
import kujialemobile from '@/components/vrtemplate/kujialemobile';
import vjiamobile from '@/components/vrtemplate/vjiamobile';
import twotree from '@/components/Twotree';
import weigong from '@/components/weigong';
import weismall from '@/components/weismall';

import Borders from '@/components/resultcollections/Borders';
import Loading from '@/components/resultcollections/Loading';
import AdTemplate from '@/components/resultcollections/Ad_template';
import Resultlist from '@/components/Resultlist';

Vue.use(VueRouter);
Vue.prototype.axios = axios;

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'index',
            component: Hello
        },
        {
            path: '/test',
            name: 'test',
            component: Test,
            children: [{
                    path: '/test/testa',
                    name: 'testa',
                    component: Testa
                },
                {
                    path: '/test/testb',
                    name: 'testb',
                    component: Testb
                }
            ]
        },
    {
      path:'/html5',
      name:'html5',
      component:htmlFive
    },
    {
      path:'/vr',
      name:'vr',
      component:VR,
      children:[]
    },
    {
      path:'/vrShow',
      name:'vrShow',
      component:VRSHOW
    },
    {
      path:'/vrlist',
      name:'vrlist',
      component:VrList,
      children:[
      {
        path:'/vrlist/vjia',
          name:'vjia',
          component:Vjia
      },
      {
        path:'/vrlist/kujiale',
          name:'kujiale',
          component:Kujiale
      },
      {
        path:"/vrlist/kujialemobile",
        name:"kujialemobile",
        component:kujialemobile
      },
      {
        path:"/vrlist/vjiamobile",
        name:"vjiamobile",
        component:vjiamobile
      }
      ]
    },
    {
      path:'/twotree',
      name:'twotree',
      component:twotree
    },
    {
      path:'/weigong',
      name:'weigong',
      component:weigong
    },
    {
      path:'/weismall',
      name:'weismall',
      component:weismall
    },
    {
      path:'/borders',
      name:'borders',
      component:Borders
    },
    {
      path:'/loading',
      name:'loading',
      component:Loading
    },
    {
      path:'/ad',
      name:'ad',
      component:AdTemplate
    },
    {
      path:'/resultlist',
      name:'resultlist',
      component:Resultlist
    }
  ]
})

