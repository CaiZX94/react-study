/**
 * 路由组件出口文件
 */
// import Loadable from 'react-loadable';
import Index from './index/Index';

import Buttons from './ui/Buttons';
import Icons from './ui/Icons';
import Loadings from './ui/Loadings';
import Modals from './ui/Modals';
import Tabs from './ui/Tabs';
import Banners from './ui/Banners';
import Reminds from './ui/Reminds';

import BaseAnimations from './animation/BaseAnimations';
import ExampleAnimations from './animation/ExampleAnimations';

import BaseTables from './table/BaseTables';
import AdvancedTables from './table/AdvancedTables';
import AsynTables from './table/AsynTables';

import BaseForms from './form/BaseForms';

import Echarts from './charts/Echarts';
import Highcharts from './charts/Highcharts';


// const WysiwygBundle = Loadable({ // 按需加载富文本配置
//     loader: () => import('./ui/Wysiwyg'),
//     loading: Loading,
// });

export default {
  Index,
  Buttons, Icons, Loadings, Modals,Tabs,Banners,Reminds,
  BaseAnimations, ExampleAnimations, 
  BaseTables, AdvancedTables, AsynTables, 
  BaseForms,
  Echarts,Highcharts
}