import{d as b,b as s,o as l,e as u,F as k,f as S,n as m,t as x}from"./vue.esm-bundler-DksWrH1k.js";function i(e){return typeof e=="number"?e+"px":e}const y=b({__name:"Cyberpunk",props:{text:{default:"Cyberpunk"},height:{default:200},width:{default:"100%"},fontSize:{default:80},fontStyle:{default:"normal"}},setup(e){const t=e,n=s(()=>i(t.fontSize)),r=s(()=>i(t.width)),o=s(()=>i(t.height));return(p,C)=>(l(),u("svg",{style:m({width:r.value,height:o.value}),class:"ysj-cyberpunk"},[(l(!0),u(k,null,S(Array.from({length:5}),(z,h)=>(l(),u("text",{key:h,style:m({fontSize:n.value,fontStyle:p.fontStyle}),class:"cyberpunk-text","dominant-baseline":"middle","text-anchor":"middle",x:"50%",y:"50%"},x(p.text),5))),128))],4))}}),v=(e,t)=>{const n=e.__vccOpts||e;for(const[r,o]of t)n[r]=o;return n},_=v(y,[["__scopeId","data-v-59c0573a"]]);y.__docgenInfo={exportName:"default",displayName:"Cyberpunk",description:"",tags:{},props:[{name:"text",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'Cyberpunk'"}},{name:"height",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"200"}},{name:"width",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"'100%'"}},{name:"fontSize",required:!1,type:{name:"union",elements:[{name:"number"},{name:"string"}]},defaultValue:{func:!1,value:"80"}},{name:"fontStyle",required:!1,type:{name:"union",elements:[{name:'"normal"'},{name:'"italic"'}]},defaultValue:{func:!1,value:"'normal'"}}],sourceFiles:["C:/Users/44550/Desktop/some-vue-element/packages/components/Cyberpunk/Cyberpunk.vue"]};const g=_,q={title:"Example/Cyberpunk",component:g,tags:["autodocs"],argTypes:{text:{control:{type:"text"}},width:{control:{type:"text"}},height:{control:{type:"text"}},fontStyle:{control:{type:"select"},options:["normal","italic"]},fontSize:{control:{type:"number"}}}},a={args:{text:"Storybook1111",fontStyle:"italic",height:"111111",fontSize:1111},render:e=>({components:{Cyberpunk:g},setup(){return{args:e}},template:`
      <div style="width: 900px">
        <Cyberpunk v-bind="args"/>
      </div>`})};var c,f,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    text: "Storybook1111",
    fontStyle: "italic",
    height: "111111",
    fontSize: 1111
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
}`,...(d=(f=a.parameters)==null?void 0:f.docs)==null?void 0:d.source}}};const V=["Default"];export{a as Default,V as __namedExportsOrder,q as default};
