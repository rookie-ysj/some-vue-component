import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dtsPlugin from 'vite-plugin-dts'; // 生成ts声明

const COMPONENTS_NAMES = [
  "Cyberpunk"
] as const

export default defineConfig({
  plugins: [vue(), dtsPlugin({
    tsconfigPath: '../../tsconfig.build.json',
    outDir: 'dist/types'
  })],
  build: {
    outDir: 'dist/es', // 输出目录
    lib: {
      entry: resolve(__dirname, './index.ts'), // 入口文件（因为库没有index.html）,__dirname是此文件所在的目录
      name: 'SomeVueElement', // 暴露的全局变量，在formats为umd或者iife是必须的
      // 输出的包文件名。默认fileName是name选项如果传入一个字符串，如index生成的就是index.*js。
      // 如果像下面传入一个函数，就可以自定义配置
      // fileName: (format: string) => `ysj.${format}.js`,
      fileName: 'index',
      // 打包模式，默认为es和umd
      // es es6的import和export
      // cjs common js，require和module.exports
      // iife(Immediately Invoked Function Expression)会打包成一个全局变量，var SomeVueElement = function(a){}(b)
      // umd是cjs和amd的糅合，AMD是浏览器优先，异步加载，cjs是服务器优先，同步加载。umd会判断是否支持node模板，支持就用cjs。否则判断是否支持amd
      formats: ['es']
    }, // 库模式：打包一个vue或者react的库
    rollupOptions: {
      external: ['vue'], // 打包的时候不会把vue打包进去，当开发一个库的时候使用，不把package.json的依赖项打包进去
      output: {
        inlineDynamicImports: false,
        // manualChunks分包
        // manualChunks: {
        //   lodash: ['lodash']
        // } 这种写法可以指定要分出来的包
        // 或者如下写法，函数
        manualChunks(id) {
          console.log(id)
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('/packages/hooks')) {
            return 'hooks'
          }
          if (id.includes('node_modules')) {
            return 'utils'
          }
          for (let i of COMPONENTS_NAMES) {
            if (id.includes(`/packages/components/${i}`)) {
              return i
            }
          }
        }
      }
    } // vite打包是基于rollup的，可以配置rollupOptions
  }
})