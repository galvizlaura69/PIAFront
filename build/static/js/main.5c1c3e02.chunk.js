(this["webpackJsonppia-front"]=this["webpackJsonppia-front"]||[]).push([[0],{169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),i=a(35),n=a.n(i),o=a(92),c=a(14),l=a(233),d=a(234),h=a(80),p=a.n(h),g=a(121),x=a.n(g),j=a(120),b=a.n(j),u=a(1);var m=e=>{let{setUsuario:t}=e;const a=Object(c.f)();return Object(u.jsx)(l.a,{sx:{position:"fixed",top:0,left:0,right:0,zIndex:1e3,width:"100%",height:"60px",boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.1)"},children:Object(u.jsxs)(l.a,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px",background:"#F2F4F4",height:"100%"},children:[Object(u.jsx)("button",{onClick:()=>{a.push("/")},style:{border:"none",background:"none",cursor:"pointer"},children:Object(u.jsx)("img",{src:"".concat("","/ICON.svg"),alt:"Inicio",style:{width:"60px",height:"60px",objectFit:"contain"}})}),Object(u.jsxs)(l.a,{sx:{display:"flex",gap:2},children:[Object(u.jsx)(d.a,{variant:"contained",startIcon:Object(u.jsx)(p.a,{}),onClick:()=>{a.push("/profile")},sx:{textTransform:"none",Width:"120px",justifyContent:"center",borderRadius:20,margin:"0 5px"},children:"Mi Perfil"}),Object(u.jsx)(d.a,{variant:"contained",startIcon:Object(u.jsx)(b.a,{}),onClick:()=>{a.push("/grafics")},sx:{textTransform:"none",Width:"120px",justifyContent:"center",borderRadius:20,margin:"0 5px"},children:"Gr\xe1ficas"}),Object(u.jsx)(d.a,{variant:"outlined",startIcon:Object(u.jsx)(x.a,{}),onClick:()=>{t(null),localStorage.removeItem("user")},sx:{textTransform:"none",minWidth:"120px",justifyContent:"center",borderRadius:20,margin:"0 5px"},children:"Cerrar Sesi\xf3n"})]})]})})},O=a(239),y=a(235),v=a(236);class f extends s.Component{constructor(e){super(e),this.state={styles:{paper:{padding:"8px",textAlign:"center",color:"black",height:"100%",fontWeight:"bold"},image:{maxWidth:"150%",maxHeight:"150px",marginTop:"15px",marginBottom:"15px"},gridItem:{width:"100%"}}}}render(){const{noticias:e}=this.props,{styles:t}=this.state;return Object(u.jsx)(y.a,{container:!0,spacing:5,children:e.map(((e,a)=>Object(u.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(u.jsxs)(v.a,{style:t.paper,children:[Object(u.jsx)(O.a,{variant:"h6",gutterBottom:!0,style:{fontWeight:"bold"},children:e.titulo}),Object(u.jsx)("img",{src:e.imagen,alt:e.titulo,style:t.image}),Object(u.jsx)(O.a,{children:e.contenido})]})},a)))})}}var w=f,C=a(240),S=a(229),A=a(232),P=a(25),k=a.n(P);const I="http://localhost:3010",D={};var F=async(e,t)=>{try{const{data:a}=await k.a.get("".concat(I,"/sensorData"),{params:{page:e,pageNumber:t}});return a.sensorData}catch(a){return a.message}};class T extends s.Component{constructor(e){super(e),this.getList=async()=>{try{const{page:e,pageNumber:t}=this.state;let a=await F(e,t);this.setState({dataSensorList:a,isNextButtonDisabled:a.length<5})}catch(e){console.error("Error fetching sensor data:",e)}},this.getCO2Color=e=>e<=400?"green":e<=700?"orange":"red",this.handleFilterChange=e=>{this.setState({filterColor:e.target.value})},this.handlePageChange=e=>{this.setState({page:e},(()=>{this.getList()}))},this.formatDate=e=>{const t=new Date(e),a="".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()),s="".concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds());return"Fecha: ".concat(a," / Hora: ").concat(s)},this.state={dataSensorList:[],filterColor:"all",page:1,pageNumber:5,isNextButtonDisabled:!1}}async componentDidMount(){this.getList()}render(){const{dataSensorList:e,filterColor:t,page:a,isNextButtonDisabled:s}=this.state,r="all"===t?e:e.filter((e=>this.getCO2Color(parseInt(e.co2Level))===t));return Object(u.jsxs)("div",{style:{width:"80%",margin:"auto",padding:"16px"},children:[Object(u.jsx)(O.a,{variant:"h5",gutterBottom:!0,style:{color:"#154360",textAlign:"center",marginBottom:"25px",height:"auto",fontSize:"40px",fontWeight:"bold"},children:"DATOS SENSOR"}),Object(u.jsxs)("div",{style:{display:"flex",width:"100%",margin:"auto"},children:[Object(u.jsxs)("div",{style:{width:"75%",marginRight:"30px"},children:[Object(u.jsx)(O.a,{variant:"filtro",style:{marginBottom:"-30px",color:"#154360",fontWeight:"bold"},children:"Filtrar por niveles"}),Object(u.jsx)(C.a,{fullWidth:!0,style:{marginBottom:"15px"},children:Object(u.jsxs)(S.a,{labelId:"color-filter-label",id:"color-filter",value:t,onChange:this.handleFilterChange,children:[Object(u.jsx)(A.a,{value:"all",children:"Todos"}),Object(u.jsx)(A.a,{value:"green",children:"Bajo"}),Object(u.jsx)(A.a,{value:"orange",children:"Medio"}),Object(u.jsx)(A.a,{value:"red",children:"Alto"})]})}),r.length>0?null===r||void 0===r?void 0:r.map(((e,t)=>Object(u.jsx)("div",{style:{marginBottom:"2px",padding:"4px",borderRadius:"4px",textAlign:"center"},children:Object(u.jsxs)(O.a,{variant:"subtitle1",style:{color:this.getCO2Color(parseInt(e.co2Level)),border:"1px solid",fontSize:"16px",fontWeight:"bold"},children:["CO2: ",parseInt(e.co2Level).toFixed(0)," PPM / ",Object(u.jsx)("span",{children:this.formatDate(e.createdAt)})]})},t))):Object(u.jsx)(O.a,{variant:"subtitle1",style:{textAlign:"center",color:"gray",marginTop:"20px"},children:"No hay registros de datos para este nivel."}),Object(u.jsxs)("div",{style:{textAlign:"center",marginTop:"20px"},children:[Object(u.jsx)(d.a,{variant:"contained",disabled:1===a,onClick:()=>this.handlePageChange(a-1),sx:{textTransform:"none",Width:"120px",justifyContent:"center",borderRadius:20,margin:"0 5px"},children:"Anterior"}),Object(u.jsx)(d.a,{variant:"contained",disabled:s,onClick:()=>this.handlePageChange(a+1),sx:{textTransform:"none",Width:"120px",justifyContent:"center",borderRadius:20,margin:"0 5px"},children:"Siguiente"})]})]}),Object(u.jsxs)("div",{style:{textAlign:"center",width:"25%",margin:"auto",marginTop:"20px",border:"1px solid #ccc",padding:"10px",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)"},children:[Object(u.jsx)(O.a,{variant:"subtitle2",style:{color:"#154360",textAlign:"center",height:"auto",fontSize:"15px",fontWeight:"bold"},children:"ESCALA DE NIVELES"}),Object(u.jsx)("img",{src:"https://firebasestorage.googleapis.com/v0/b/galviz-react-7a488.appspot.com/o/Escala.jpg?alt=media&token=2234dcf6-e8c4-49ec-9ccf-1ee9e5265b17",alt:"Escala",style:{width:"100%",height:"auto"}}),Object(u.jsxs)(O.a,{variant:"subtitle1",style:{fontSize:"12px",fontWeight:"bold"},children:[Object(u.jsx)("span",{style:{color:"green"},children:" Nivel Bajo: Menor o igual a 400 PPM"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{color:"orange"},children:" Nivel Medio: Entre 401 PPM y 700 PPM"}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{style:{color:"red"},children:" Nivel Alto:  Mayor a 700 PPM"})]})]})]})]})}}var U=T;class B extends s.Component{constructor(e){super(e)}render(){const{user:e}=this.props;return Object(u.jsxs)("div",{style:{width:"90%",margin:"auto"},children:[Object(u.jsx)("div",{style:{background:"white",paddingBottom:"40px"},children:Object(u.jsx)(U,{})}),Object(u.jsxs)("div",{style:{background:"#F2F4F4",padding:"50px 50px",minHeight:"800px",marginBottom:"80px"},children:[Object(u.jsxs)(O.a,{variant:"h4",gutterBottom:!0,style:{color:"#17202A",textAlign:"center",marginBottom:"50px",height:"auto",fontSize:"40px",fontWeight:"bold"},children:["Noticias Destacadas Para Ti ",Object(u.jsx)("span",{style:{color:"#154360"},children:e.name.toUpperCase()})]}),Object(u.jsx)(w,{noticias:[{titulo:"Tecnolog\xeda",imagen:"https://img.freepik.com/vector-gratis/ilustracion-clima-ecologico_1284-34386.jpg?size=338&ext=jpg&ga=GA1.1.1488620777.1712188800&semt=ais",contenido:"Descubre las \xfaltimas innovaciones tecnol\xf3gicas que est\xe1n cambiando el mundo. Desde inteligencia artificial hasta realidad aumentada, mantente al d\xeda con la vanguardia tecnol\xf3gica."},{titulo:"Contaminaci\xf3n del aire de Bogot\xe1 DC",imagen:"https://img.freepik.com/vector-gratis/ilustracion-guardar-mensaje-planeta_23-2148514659.jpg?size=338&ext=jpg&ga=GA1.1.539837299.1712016000&semt=ais",contenido:"El monitor de calidad del aire GAIA utiliza sensores l\xe1ser de part\xedculas para medir en tiempo real la contaminaci\xf3n por part\xedculas PM2,5 y PM10, que es uno de los contaminantes del aire m\xe1s da\xf1inos."},{titulo:"Cuidados y Uso de Tapabocas",imagen:"https://img.freepik.com/vector-gratis/ilustracion-contaminacion-ambiental-dibujada-mano_23-2150350835.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707264000&semt=ais",contenido:"Usa tapabocas en \xe1reas con alta concentraci\xf3n de contaminantes para proteger tus v\xedas respiratorias. Evita el ejercicio al aire libre en d\xedas de alta contaminaci\xf3n y mantente informado sobre la calidad del aire en tu \xe1rea."},{titulo:"Invernadero",imagen:"https://img.freepik.com/vector-gratis/composicion-isometrica-robots-agricolas_1284-25965.jpg?size=338&ext=jpg&ga=GA1.1.539837299.1711670400&semt=ais",contenido:"La calidad del aire en invernaderos es crucial para el crecimiento de las plantas. Es importante controlar los niveles de di\xf3xido de carbono (CO2), humedad y temperatura para optimizar la producci\xf3n. La ventilaci\xf3n adecuada y el monitoreo constante son clave para mantener un entorno saludable para las plantas."}]})]})]})}}var L=B,N=a(231);var E=async e=>{try{const{data:t}=await k.a.put("".concat(I,"/users/").concat(e.id),e);return t.data}catch(t){return t.message}};var M=async e=>{try{const{data:t}=await k.a.get("".concat(I,"/users/").concat(e),{headers:D});return t.user}catch(t){return t.message}};var z=async e=>{try{const{data:t}=await k.a.delete("".concat(I,"/users/").concat(e));return t.data}catch(t){return t.message}},R=a(28),W=a.n(R);class G extends s.Component{constructor(e){super(e),this.updateCurrentUser=async()=>{const{user:e,setUsuario:t}=this.props,{name:a,email:s,password:r}=this.state;try{await E({id:e._id,name:a,email:s,password:r});const t=await M(e._id);localStorage.setItem("user",JSON.stringify(t)),W()({title:"Genial",text:"Datos actualizados",icon:"success"})}catch(i){W()({title:"Fallo",text:"No es posible actualizar, intenta de nuevo",icon:"error"})}},this.deleteCurrentUser=async()=>{const{user:e,setUsuario:t}=this.props;try{if(window.confirm("\xbfEst\xe1 seguro de que desea darse de baja? Esta acci\xf3n no se puede deshacer.")){await z(e._id);W()({title:"Genial",text:"Usuario eliminado exitosamente",icon:"success"}),setTimeout((()=>{t(null),localStorage.setItem("user",null)}),2e3)}else W()("Cancelado","La acci\xf3n de eliminaci\xf3n ha sido cancelada.","info")}catch(a){W()({title:"Fallo",text:"No es posible eliminar, intenta de nuevo",icon:"error"})}},this.state={name:e.user.name,email:e.user.email,password:e.user.password}}render(){const{name:e,email:t,password:a}=this.state;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)(l.a,{m:2,p:2,children:[Object(u.jsxs)("form",{style:{justifyContent:"center",alignItems:"center",padding:"50px 50px",marginRight:"130px",marginTop:"40px",marginLeft:"150px",backgroundColor:"#F2F4F4"},children:[Object(u.jsx)(O.a,{style:{fontWeight:"bold",fontSize:"20px",marginBottom:"30px"},children:"MIS DATOS"}),Object(u.jsx)(l.a,{mb:3,children:Object(u.jsx)(N.a,{label:"Nombre",variant:"outlined",type:"name",value:e,onChange:e=>{this.setState({name:e.target.value})}})}),Object(u.jsx)(l.a,{mb:3,children:Object(u.jsx)(N.a,{label:"Correo",variant:"outlined",value:t,type:"email",disabled:!0})}),Object(u.jsx)(l.a,{mb:3,children:Object(u.jsx)(N.a,{label:"Contrase\xf1a",variant:"outlined",type:"password",value:a,onChange:e=>{this.setState({password:e.target.value})}})}),Object(u.jsx)(d.a,{variant:"contained",onClick:this.updateCurrentUser,style:{marginTop:"15px"},children:"Actualizar"})]}),Object(u.jsx)("img",{src:"https://img.freepik.com/vector-gratis/ilustracion-concepto-banca-linea_114360-21409.jpg?t=st=1712975210~exp=1712978810~hmac=e274be4fea8570a7de2033d1ed595e4490643dd286dfa8bf2f078948a0288ff6&w=1060",alt:"Font Date",style:{width:"500px",height:"400px",marginTop:"-900px",marginBottom:"40px",marginLeft:"750px"}})]}),Object(u.jsxs)(l.a,{m:2,p:2,style:{padding:"50px 200px",backgroundColor:"with",marginTop:"-30px"},children:[Object(u.jsx)(O.a,{style:{fontWeight:"bold",fontSize:"20px"},children:"Si no desea continuar utilizando el aplicativo puede darse de baja"}),Object(u.jsx)(d.a,{variant:"contained",onClick:this.deleteCurrentUser,style:{marginTop:"20px"},children:"DARME DE BAJA"})]})]})}}var J=G,_=a(51);const V={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"My First Dataset",data:[300,50,100,40,120,30],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};var K=()=>Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Pie Example"}),Object(u.jsx)(_.c,{data:V})]});const q={labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]};var H=()=>Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Line Example"}),Object(u.jsx)(_.b,{data:q})]});const Y={labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)"],borderColor:["rgba(255, 99, 132, 1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)"],borderWidth:1}]};var $=()=>Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{children:"Bar Example"}),Object(u.jsx)(_.a,{data:Y})]});class Q extends s.Component{constructor(e){super(e)}render(){const{user:e}=this.props;return Object(u.jsxs)("div",{style:{width:"90%",margin:"auto"},children:[Object(u.jsx)("h1",{children:"Gr\xe1ficas"}),Object(u.jsx)(K,{}),Object(u.jsx)(H,{}),Object(u.jsx)($,{})]})}}var X=Q;class Z extends s.Component{constructor(e){super(e),this.state={user:e.user,setUsuario:e.setUsuario}}render(){return Object(u.jsx)("div",{children:Object(u.jsxs)(o.a,{children:[Object(u.jsx)(l.a,{children:Object(u.jsx)(m,{setUsuario:this.state.setUsuario})}),Object(u.jsx)(l.a,{sx:{margin:"0 auto",marginTop:"80px"},className:"main-container",children:Object(u.jsxs)(c.c,{children:[Object(u.jsx)(c.a,{path:"/",exact:!0,children:Object(u.jsx)(L,{user:this.state.user})}),Object(u.jsx)(c.a,{path:"/profile",exact:!0,children:Object(u.jsx)(J,{user:this.state.user,setUsuario:this.state.setUsuario})}),Object(u.jsx)(c.a,{path:"/grafics",exact:!0,children:Object(u.jsx)(X,{user:this.state.user,setUsuario:this.state.setUsuario})})]})})]})})}}var ee=Z;var te=async()=>{try{const{data:e}=await k.a.get("".concat(I,"/users"));return e.users}catch(e){return e.message}};var ae=async e=>{try{console.log(e,"payload");const{data:t}=await k.a.post("".concat(I,"/users"),e),a=t.data;return console.log("response",t.data),a}catch(t){return t.message}},se=a(96),re=a.n(se),ie=a(97),ne=a.n(ie),oe=a(238),ce=a(95),le=a.n(ce);const de=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);class he extends s.Component{constructor(e){super(e),this.getList=async()=>{const e=await te();this.setState({users:e})},this.createNewUser=async()=>{const{name:e,email:t,password:a}=this.state;if(de(t))try{const s=await ae({name:e,email:t,password:a});console.log(s),this.setState({isRegistrando:!1}),W()({title:"Genial",text:"Nuevo usuario registrado",icon:"success"}),await this.getList()}catch(s){console.log(s,"error"),W()({title:"Oops",text:"Fallo al registrarse, intenta de nuevo",icon:"error"})}else W()({title:"Correo Inv\xe1lido",text:"Por favor, introduce un correo electr\xf3nico v\xe1lido.",icon:"error"})},this.loginUser=()=>{const{users:e,email:t,password:a}=this.state;try{const s=e.find((e=>e.email===t&&e.password===a));s?setTimeout((()=>{localStorage.setItem("user",JSON.stringify(s)),this.props.setUsuario(s)}),1e3):W()({title:"Oops",text:"Usuario o contrase\xf1a Erronea",icon:"error"})}catch(s){console.log(s,"error"),W()({title:"Oops",text:"Usuario o contrase\xf1a Erronea",icon:"error"})}},this.handleKeyDown=e=>{"Enter"===e.key&&this.loginUser()},this.togglePasswordVisibility=()=>{this.setState((e=>({showPassword:!e.showPassword})))},this.state={isRegistrando:!1,name:"",email:"",emailValid:!0,password:"",users:[],showPassword:!1}}async componentDidMount(){await this.getList()}render(){const{isRegistrando:e,email:t,emailValid:a,password:s}=this.state;return Object(u.jsx)(l.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:Object(u.jsx)("div",{style:{border:"1px solid #ccc",padding:"20px"},children:e?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{style:{textAlign:"center"},children:"Registrarme"}),Object(u.jsxs)("form",{style:{marginLeft:"60px",padding:"30px 90px 30px 30px"},children:[Object(u.jsx)(l.a,{mb:3,children:Object(u.jsx)(N.a,{label:"Nombre",type:"text",onChange:e=>this.setState({name:e.target.value}),InputProps:{endAdornment:Object(u.jsx)(oe.a,{disabled:!0,children:Object(u.jsx)(p.a,{})})}})}),Object(u.jsx)(l.a,{mb:3,children:Object(u.jsx)(N.a,{label:"Correo",type:"email",value:t,error:!a,helperText:a?"":"Correo inv\xe1lido",onChange:e=>{const t=e.target.value;this.setState({email:t,emailValid:de(t)})},InputProps:{endAdornment:Object(u.jsx)(oe.a,{disabled:!0,children:Object(u.jsx)(le.a,{})})}})}),Object(u.jsx)(l.a,{mb:3,children:Object(u.jsx)(N.a,{label:"Contrase\xf1a",type:this.state.showPassword?"text":"password",value:s,onChange:e=>this.setState({password:e.target.value}),onKeyDown:this.handleKeyDown,InputProps:{endAdornment:Object(u.jsx)(oe.a,{onClick:this.togglePasswordVisibility,children:this.state.showPassword?Object(u.jsx)(re.a,{}):Object(u.jsx)(ne.a,{})})}})}),Object(u.jsx)(d.a,{variant:"contained",onClick:()=>this.createNewUser(),style:{textAlign:"center",marginLeft:"63px",marginTop:"15px"},children:"Registrarme"}),Object(u.jsx)("br",{}),Object(u.jsx)(d.a,{onClick:()=>this.setState({isRegistrando:!1}),style:{textAlign:"center",marginTop:"15px",marginLeft:"-1px"},children:"Ya tengo cuenta, iniciar sesi\xf3n."})]})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{style:{textAlign:"left",marginLeft:"100px",marginBottom:"-50px"},children:"Iniciar Sesi\xf3n"}),Object(u.jsxs)("form",{style:{marginTop:"100px",marginLeft:"80px"},children:[Object(u.jsx)(l.a,{mb:3,children:Object(u.jsx)(N.a,{label:"Correo",value:t,type:"email",error:!a,helperText:a?"":"Correo inv\xe1lido",onChange:e=>{const t=e.target.value;this.setState({email:t,emailValid:de(t)})},InputProps:{endAdornment:Object(u.jsx)(oe.a,{disabled:!0,children:Object(u.jsx)(le.a,{})})}})}),Object(u.jsx)(l.a,{mb:3,children:Object(u.jsx)(N.a,{label:"Contrase\xf1a",type:this.state.showPassword?"text":"password",value:s,onChange:e=>this.setState({password:e.target.value}),onKeyDown:this.handleKeyDown,InputProps:{endAdornment:Object(u.jsx)(oe.a,{onClick:this.togglePasswordVisibility,children:this.state.showPassword?Object(u.jsx)(re.a,{}):Object(u.jsx)(ne.a,{})})}})}),Object(u.jsx)(d.a,{variant:"contained",onClick:()=>this.loginUser(),style:{marginBottom:"20px"},children:"Iniciar sesi\xf3n"}),Object(u.jsx)("br",{}),Object(u.jsx)(d.a,{onClick:()=>this.setState({isRegistrando:!0}),style:{marginLeft:"-09px"},children:"No tengo cuenta, quiero registrarme."})]}),Object(u.jsx)("img",{src:"https://img.freepik.com/vector-gratis/ilustracion-concepto-banca-linea_114360-21409.jpg?t=st=1712975210~exp=1712978810~hmac=e274be4fea8570a7de2033d1ed595e4490643dd286dfa8bf2f078948a0288ff6&w=1060",alt:"Font Date",style:{width:"500px",height:"400px",marginTop:"-350px",marginBottom:"40px",marginLeft:"600px"}})]})})})}}var pe=he;a(169);var ge=()=>{const[e,t]=r.a.useState(null);return Object(s.useEffect)((()=>{const e=localStorage.getItem("user");e&&t(JSON.parse(e))}),[]),Object(u.jsx)(u.Fragment,{children:e?Object(u.jsx)(ee,{user:e,setUsuario:t}):Object(u.jsx)(pe,{setUsuario:t})})};n.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(ge,{})}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.5c1c3e02.chunk.js.map