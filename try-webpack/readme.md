webpack 是一个打包（build）工具,why 打包？
  常规的（落后的）开发方式 ，jQuery html css 交给后端上线
  MVVM开发时代，一切皆可打包

静态资源=>打包=>目标项目

webpack将现代js开发中的各种新鲜技术，集合打包，打包前无法运行，（eg:js内es6的模块化module/stylus不支持浏览器直接执行，hbs模板编译，.vue）在目标容器上（浏览器）运行