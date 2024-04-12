"use strict";(self.webpackChunk_0jo_blog=self.webpackChunk_0jo_blog||[]).push([[691],{2049:function(t,e,r){var n=r(6283),i=r(5893);e.Z=t=>{let{variant:e="horizon",children:r}=t;return(0,i.jsx)(o,{variant:e,children:r})};const o=n.ZP.div`
    width: 100%;
    display: flex;
    flex-direction: ${t=>{let{variant:e}=t;return"vertical"===e?"column":"row"}};

    > * {
        flex: 1;
    }
`},3560:function(t,e,r){r.d(e,{$o:function(){return i},G1:function(){return c},LY:function(){return d},aZ:function(){return o},dX:function(){return p},eD:function(){return l},oh:function(){return a},wM:function(){return s}});var n=r(6283);const i=n.ZP.div`
  ${t=>{let{$style:e}=t;return e}};
`,o=(n.ZP.div`
`,n.ZP.div`
`),a=n.ZP.div`
  font-size: 12px;
  color: rgb(0, 198, 142);
  margin-bottom: 10px;

  span {
    border: 1px solid rgb(0, 198, 142);
    padding: 3px 5px;
    margin-right: 10px;
  }
`,s=n.ZP.p`
  font-size: 18px;
  margin-bottom: 3%;
  color: rgb(41, 41, 41);
`,l=n.ZP.div`

`,c=n.ZP.h1`
  font-size: 38px;
  font-weight: bold;
`,d=n.ZP.div`
  margin-top: 60px;

  div:first-child {
    flex: 0.2;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 170px;
    flex: 0.8;
  }
`,p={list:n.iv`
      width: 100%;
      display: flex;
      gap: 5%;
      padding: 40px 0;
      border-bottom: 1px solid #eaeaea;
  `,card:n.iv`
      div:first-child {
          width: 100%;
          height: 180px;
          overflow: hidden;
          margin-bottom: 2rem;

          img {
              width: 100%;
              height: 100%;
              object-fit: contain;
          }
      }

      div:nth-child(2) {
          width: 100%;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
      }
  `}},3904:function(t,e,r){var n=r(1883),i=r(5893);e.Z=function(t){let{description:e,title:r,pathname:o,children:a}=t;const s=(0,n.useStaticQuery)("764694655"),{title:l,description:c,siteUrl:d,author:p}=s.site.siteMetadata,u={title:r||l,description:e||c,url:`${d}${o||"/"}`};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("title",{children:u.title}),(0,i.jsx)("meta",{name:"description",content:u.description}),(0,i.jsx)("meta",{name:"author",content:p}),(0,i.jsx)("meta",{property:"og:title",content:u.title}),(0,i.jsx)("meta",{property:"og:description",content:u.description}),(0,i.jsx)("meta",{property:"og:url",content:u.url}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,i.jsx)("meta",{name:"twitter:creator",content:p}),(0,i.jsx)("meta",{name:"twitter:title",content:u.title}),(0,i.jsx)("meta",{name:"twitter:description",content:u.description}),a]})}},1239:function(t,e,r){r.r(e),r.d(e,{Head:function(){return A},default:function(){return N}});var n=r(9907),i=r(5893);var o=t=>{let{active:e=!1,category:r,...n}=t;return(0,i.jsx)(a,{...n,active:e,children:r})};const a=(0,n.Z)("button",{target:"esh4t7c0"})("z-index:9;display:inline-block;padding:0.25rem 0.75rem;font-size:0.9rem;white-space:nowrap;color:",(t=>{let{active:e}=t;return e?"rgb(0, 198, 142);":"#eaeaea"}),";border:1px solid ",(t=>{let{active:e}=t;return e?"rgb(0, 198, 142);":"#eaeaea"}),";cursor:pointer;&:not(:first-of-type){margin-left:1rem;}");var s=r(6283);const l=t=>{let{children:e}=t;return(0,i.jsx)(d,{children:e})};var c=l;l.Item=o;const d=s.ZP.div`
    display: flex;
    gap: 1rem;
    margin-top: 60px;
    padding: 20px 0;
    border-bottom: 1px solid #aaa;
`;var p=t=>{let{categoryList:e,selectedCategory:r,onChange:n}=t;return(0,i.jsx)(c,{children:null==e?void 0:e.map(((t,e)=>(0,i.jsx)(c.Item,{active:r===t,onClick:()=>n(t),category:t},e)))})},u=r(3560),h=r(5511),x=r(1883),m=r.p+"static/profile_img-43201cb9abc2a419c573aea980b7b433.jpeg";r.p,r.p;const f=t=>{let{post:e,variant:r="list"}=t;const{frontmatter:{category:n,date:o,slug:a,summary:s,title:l},id:c}=e;return(0,i.jsx)(x.Link,{to:`/posts/${a}`,children:(0,i.jsx)(u.$o,{variant:r,$style:u.dX[r],children:(0,i.jsxs)(u.aZ,{children:[(0,i.jsx)(h.rZ,{children:l}),(0,i.jsx)(u.wM,{children:s}),(0,i.jsx)(u.oh,{children:n.map(((t,e)=>(0,i.jsx)("span",{children:t},e)))}),(0,i.jsx)("div",{children:o})]})})})};var g=f;f.Card=t=>{let{post:e}=t},f.List=t=>{let{post:e}=t};var v=r(2049);const j=(0,n.Z)("div",{target:"e1iy0r652"})({name:"hucw8p",styles:"display:flex;gap:5%;padding:5% 0"}),y=(0,n.Z)("div",{target:"e1iy0r651"})({name:"rg57fq",styles:"width:200px;height:200px;border-radius:50%;overflow:hidden;img{width:100%;}"}),b=(0,n.Z)("div",{target:"e1iy0r650"})({name:"669iq2",styles:"display:flex;flex-direction:column;justify-content:center;h2{font-size:33px;font-weight:bold;margin-bottom:5px;}p{font-size:20px;margin-bottom:20px;}a{font-size:30px;}"});var w=r(9583),C=r(5434);var Z=()=>(0,i.jsxs)(b,{children:[(0,i.jsx)("h2",{children:"@0jo"}),(0,i.jsx)("p",{children:"나는 성장을 꾸준히 하고 있는가?"}),(0,i.jsxs)(h.h7,{$style:{gap:"10px"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"https://github.com/0jo-gil",target:"_blank",children:(0,i.jsx)(w.hJX,{})})}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:"mailto:0joofficial@gmail.com",children:(0,i.jsx)(C.ixJ,{})})})]})]});var k=()=>(0,i.jsx)(y,{children:(0,i.jsx)("img",{srcSet:m,alt:"profile 이미지"})});var z=()=>(0,i.jsxs)(j,{children:[(0,i.jsx)(k,{}),(0,i.jsx)(Z,{})]});const L=(0,n.Z)("h2",{target:"e15p0pbb1"})({name:"ern0zc",styles:"font-size:26px;color:#000;font-weight:bold;position:relative;&::after{content:'';display:block;width:80%;height:3px;background-color:#000;position:absolute;bottom:-10px;left:0;}"}),P=(0,n.Z)(x.Link,{target:"e15p0pbb0"})({name:"1vz2pnv",styles:"font-size:16px;color:#000;font-weight:bold"});const O=t=>{let{children:e}=t;return(0,i.jsx)(h.pW,{children:e})};var $=O;O.Title=t=>{let{title:e,link:r}=t;return(0,i.jsxs)(h.h7,{$style:{justifyContent:"space-between",marginBottom:"40px"},children:[e&&(0,i.jsx)(L,{children:e}),r&&(0,i.jsx)(P,{to:r.to,children:r.text})]})};var M=r(7294);var _=t=>{const{0:e,1:r}=(0,M.useState)("ALL"),n=(0,M.useMemo)((()=>t.sort(((t,e)=>e.totalCount-t.totalCount))),[t]),i=(0,M.useCallback)((t=>{r(t)}),[e]),o=(a="fieldValue",t=>t.map((t=>t[a])))(n);var a;return o.unshift("ALL"),{selectedCategory:e,categoryList:o,onChangeCategory:i}};var E=(t,e)=>{const r=(0,M.useMemo)((()=>"ALL"===t?e:e.filter((e=>{let{frontmatter:{category:r}}=e;return r.includes(t)}))),[t,e]),n=(0,M.useMemo)((()=>{return t=2,e.slice(0,t);var t}),[e]);return{postList:t?r:e,recentPostList:n}};var N=t=>{let{data:e,location:{pathname:r}}=t;const{allMarkdownRemark:{totalCount:n,nodes:o,group:a}}=e,{selectedCategory:s,categoryList:l,onChangeCategory:c}=_(a),{postList:d,recentPostList:u}=E(s,o);return console.log(l),(0,i.jsxs)($,{children:[(0,i.jsx)(z,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)($.Title,{title:"최근 게시물"}),(0,i.jsx)(v.Z,{variant:"horizon",children:u.map(((t,e)=>(0,i.jsx)(g,{variant:"card",post:t},e)))})]}),(0,i.jsx)(p,{categoryList:l,selectedCategory:s,onChange:c}),(0,i.jsx)("div",{children:(0,i.jsx)(v.Z,{variant:"vertical",children:d.map(((t,e)=>(0,i.jsx)(g,{variant:"list",post:t},e)))})})]})},S=r(3904);const A=t=>{let{location:{pathname:e},data:{site:r}}=t;const{title:n,description:o}=r.siteMetadata;return(0,i.jsx)(S.Z,{title:n,description:o,pathname:e})}},4405:function(t,e,r){r.d(e,{w_:function(){return c}});var n=r(7294),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(i),a=function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var i in e=arguments[r])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)},s=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]])}return r};function l(t){return t&&t.map((function(t,e){return n.createElement(t.tag,a({key:e},t.attr),l(t.child))}))}function c(t){return function(e){return n.createElement(d,a({attr:a({},t.attr)},e),l(t.child))}}function d(t){var e=function(e){var r,i=t.attr,o=t.size,l=t.title,c=s(t,["attr","size","title"]),d=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:r,style:a(a({color:t.color||e.color},e.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),t.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-da8edf0aeb8ba0f8ad25.js.map