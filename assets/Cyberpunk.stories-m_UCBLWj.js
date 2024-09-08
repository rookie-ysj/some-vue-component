import{d as h,b as s,o as l,e as u,F as k,f as x,n as p,t as v}from"./vue.esm-bundler-DksWrH1k.js";function i(e){return typeof e=="number"?e+"px":e}const y=h({__name:"Cyberpunk",props:{text:{default:"Cyberpunk"},height:{default:200},width:{default:"100%"},fontSize:{default:80},fontStyle:{default:"normal"}},setup(e){const t=e,n=s(()=>i(t.fontSize)),r=s(()=>i(t.width)),o=s(()=>i(t.height));return(m,C)=>(l(),u("svg",{style:p({width:r.value,height:o.value}),class:"ysj-cyberpunk"},[(l(!0),u(k,null,x(Array.from({length:5}),(w,b)=>(l(),u("text",{key:b,style:p({fontSize:n.value,fontStyle:m.fontStyle}),class:"cyberpunk-text","dominant-baseline":"middle","text-anchor":"middle",x:"50%",y:"50%"},v(m.text),5))),128))],4))}}),S=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},_=S(y,[["__scopeId","data-v-38a7f637"]]);y.__docgenInfo={exportName:"default",displayName:"Cyberpunk",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Cyberpunk'"}},{name:"height",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"200"}},{name:"width",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"'100%'"}},{name:"fontSize",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"80"}},{name:"fontStyle",required:!1,type:{name:"union",elements:[{name:'"normal"'},{name:'"italic"'}]},defaultValue:{func:!1,value:"'normal'"}}],sourceFiles:["/home/runner/work/some-vue-component/some-vue-component/packages/components/Cyberpunk/Cyberpunk.vue"]};const g=_,q={title:"Example/Cyberpunk",component:g,tags:["autodocs"],argTypes:{text:{control:{type:"text"}},width:{control:{type:"text"}},height:{control:{type:"text"}},fontStyle:{control:{type:"select"},options:["normal","italic"]},fontSize:{control:{type:"number"}}}},a={args:{text:"Storybook",fontStyle:"italic"},render:e=>({components:{Cyberpunk:g},setup(){return{args:e}},template:`
      <div style="width: 900px">
        <Cyberpunk v-bind="args"/>
      </div>`})};var c,d,f;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: "Storybook",
    fontStyle: "italic"
  },
  render: args => ({
    components: {
      Cyberpunk
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="width: 900px">
        <Cyberpunk v-bind="args"/>
      </div>\`
  })
}`,...(f=(d=a.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const V=["Default"];export{a as Default,V as __namedExportsOrder,q as default};
