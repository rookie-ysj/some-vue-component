import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist/umd', // 输出目录
    lib: {
      entry: resolve(__dirname, './index.ts'), // 入口文件（因为库没有index.html）,__dirname是此文件所在的目录
      name: 'SomeVueElement', // 暴露的全局变量，在formats为umd或者iife是必须的
      // 输出的包文件名。默认fileName是name选项如果传入一个字符串，如index生成的就是index.*js。
      // 如果像下面传入一个函数，就可以自定义配置
      // fileName: (format: string) => `ysj.${format}.js`,
      fileName: 'index',
      // 打包模式，默认为es和umd
      // es es6的import和export
      // iife(Immediately Invoked Function Expression)会打包成一个全局变量，var SomeVueElement = function(a){}(b)
      // umd是cjs和amd的糅合，AMD是浏览器优先，异步加载，cjs是服务器优先，同步加载。umd会判断是否支持node模板，支持就用cjs。否则判断是否支持amd
      formats: ['umd']
    }, // 库模式：打包一个vue或者react的库
    rollupOptions: {
      external: ['vue'], // 打包的时候不会把vue打包进去，当开发一个库的时候使用，不把package.json的依赖项打包进去
      output: {
        exports: 'named',
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量,es可以不要
        globals: {
          vue: 'vue'
        },
      }
    } // vite打包是基于rollup的，可以配置rollupOptions
  }
})