(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[0],[,,,,,,,,,,function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Yellow umbrella.28d67ebe.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/yellow_loader.6a37e3be.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Pink umbrella.9889a9b8.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/pink_loader.4d893a66.svg"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/Blue umbrella.2d36f97a.png"},function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/blue_loader.cee80363.svg"},,function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/upload_icon.88a4b874.svg"},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var l=i(1),r=i.n(l),o=i(5),n=i.n(o),a=i(2),c=i(4),s={YELLOW:{color:"yellow",rgb:"255,255,0",border:"rgb(255,239,213)",umbrella:i(10).default,loader:i(11).default},PINK:{color:"pink",rgb:"255,192,203",border:"rgb(255,182,193)",umbrella:i(12).default,loader:i(13).default},BLUE:{color:"blue",rgb:"0,0,255",border:"rgb(176,224,230)",umbrella:i(14).default,loader:i(15).default}},d=i(0),u=function(e){var t=e.colorKey,i=e.setColor,l=e.style,r=e.setIsLoading,o={body:Object(c.a)(Object(c.a)({},l),{},{display:"flex"}),dot:function(e,t){return{border:"3px solid ".concat(t?e.border:e.color),backgroundColor:"".concat(e.color),marginRight:"5px",cursor:"pointer"}}},n=function(e){e!==t&&(r(!0),setTimeout((function(){!function(e){r(!1),i(e)}(e)}),1e3))};return Object(d.jsx)("div",{style:o.body,children:Object.entries(s).map((function(e,i){return Object(d.jsx)("div",{onClick:function(){return n(e[0])},className:"dot",style:o.dot(e[1],t===e[0])},"colorDot_".concat(i))}))})},b=function(e){var t=e.customImage,i=e.colorType,l=e.isLoading,r={umbrella:{width:"60%",marginLeft:"12%"},loading:{width:60,marginLeft:"45%",marginTop:"15%"},customImage:{width:50,right:"33%",bottom:"25px",position:"relative"}};return Object(d.jsx)("div",{children:l?Object(d.jsx)("img",{className:"loading",style:r.loading,src:s[i].loader}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{style:r.umbrella,src:s[i].umbrella}),t&&Object(d.jsx)("img",{src:t,style:r.customImage})]})})},g=i(17).default,f=function(e){var t=e.fileName,i=e.setFileTypeError,r=e.validFileTypes,o=e.setImageName,n=e.setImage,c=e.fileSizeLimit,s=Object(l.useRef)(null),u={body:{width:"65%",backgroundColor:"cornflowerblue",height:"35px",cursor:"pointer",color:"white",textAlign:"center",paddingTop:"12px",fontSize:"17px"},name:{width:130,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",marginLeft:"35%",textAlign:"center"},upload:{height:15,float:"left",marginLeft:"5%",marginTop:"1%"}};return Object(d.jsxs)("div",{style:u.body,onClick:function(){return s.current.click()},children:[Object(d.jsx)("img",{style:u.upload,className:"white-svg",src:g}),Object(d.jsx)("div",{style:u.name,children:t||"UPLOAD LOGO"}),Object(d.jsx)("input",{ref:s,style:{display:"none"},onChange:function(e){if(e.target.files.length)if(!r.includes(e.target.files[0].type)||e.target.files[0].size>1048576*c)i(!0),o(null),n(null);else{i(!1);var t=Object(a.a)(e.target.files,1)[0];if(t){var l=new FileReader;l.onload=function(e){o(t.name),n(e.target.result)},l.readAsDataURL(t)}}},type:"file"})]})},m=function(){var e=Object(l.useState)("PINK"),t=Object(a.a)(e,2),i=t[0],r=t[1],o=Object(l.useState)(null),n=Object(a.a)(o,2),c=n[0],g=n[1],m=Object(l.useState)(null),j=Object(a.a)(m,2),p=j[0],h=j[1],x=Object(l.useState)(!1),O=Object(a.a)(x,2),y=O[0],v=O[1],w=Object(l.useState)(!1),L=Object(a.a)(w,2),I=L[0],S=L[1],C={body:{backgroundColor:"rgb(".concat(s[i].rgb,",0.3)")},container:{top:"30%",height:"70%",position:"relative"},content:{display:"flex"},left:{float:"left",width:"60%"},right:{float:"right",width:"40%"},h1:{fontWeight:"600",fontSize:"40px",marginBottom:"40px"},h2:{fontWeight:"500",fontSize:"18px",marginBottom:"10px"},h3:{fontWeight:"400",fontSize:"15px",marginBottom:"10px"},h4:{fontWeight:"lighter",fontSize:"15px",marginBottom:"15px",color:"".concat(y?"red":"black")},colors:{marginBottom:"40px"}};return Object(d.jsx)("div",{style:C.body,className:"Umbrella",children:Object(d.jsx)("div",{style:C.container,children:Object(d.jsxs)("div",{style:C.content,children:[Object(d.jsx)("div",{style:C.left,children:Object(d.jsx)(b,{isLoading:I,colorType:i,customImage:c})}),Object(d.jsxs)("div",{style:C.right,children:[Object(d.jsx)("div",{style:C.h1,children:"Custom Umbrella"}),Object(d.jsx)(u,{setIsLoading:S,style:C.colors,colorKey:i,setColor:r}),Object(d.jsx)("div",{style:C.h2,children:"Customise your Umbrella"}),Object(d.jsx)("div",{style:C.h3,children:"Upload a logo for instant preview."}),Object(d.jsx)("div",{style:C.h4,children:".png and .jpg files only. Max file size is 5Mb."}),Object(d.jsx)(f,{setFileTypeError:v,setIsLoading:S,validFileTypes:["image/png","image/jpeg"],fileName:p,setImageName:h,setImage:g,fileSizeLimit:5})]})]})})})};var j=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(m,{})})},p=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,l=t.getFID,r=t.getFCP,o=t.getLCP,n=t.getTTFB;i(e),l(e),r(e),o(e),n(e)}))};i(18);n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),p()}],[[19,1,2]]]);
//# sourceMappingURL=main.412cf7ec.chunk.js.map