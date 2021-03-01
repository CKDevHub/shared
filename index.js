!function(){function e(e,a,i){return e.length>0?i=e.map(e=>{let i={};return t(e,a,i),i}):t(e,a,i),i}function t(t,a,i){for(const s in t)if(t.hasOwnProperty(s)){const n=t[s];let r=(""!=a?a+".":"")+s;"object"==typeof n&&null!=n&&null!=n?void 0===n.length&&r.split(".").length<2?e(n,r,i):i[r]=JSON.stringify(t[s]):i[r]=t[s]}}metadata={systemName:"openweathermap.jssp.broker",displayName:"Openweathermap JSSP Broker",description:"API for api.openweathermap.org",configuration:{ServiceURL:{displayName:"Service URL",type:"string",value:"http://api.openweathermap.org"}}},ondescribe=async function({configuration:e}){postSchema({objects:{OpenWeatherMapResponse:{displayName:"OpenWeatherMapResponse",description:"OpenWeatherMapResponse",properties:{base:{displayName:"base",type:"string",description:"base Value"},"clouds.all":{displayName:"clouds.all",type:"number",description:"clouds.all Value"},cod:{displayName:"cod",type:"number",description:"cod Value"},"coord.lat":{displayName:"coord.lat",type:"decimal",description:"coord.lat Value"},"coord.lon":{displayName:"coord.lon",type:"decimal",description:"coord.lon Value"},dt:{displayName:"dt",type:"number",description:"dt Value"},id:{displayName:"id",type:"number",description:"id Value"},"main.humidity":{displayName:"main.humidity",type:"number",description:"main.humidity Value"},"main.pressure":{displayName:"main.pressure",type:"number",description:"main.pressure Value"},"main.temp":{displayName:"main.temp",type:"decimal",description:"main.temp Value"},"main.temp_max":{displayName:"main.temp_max",type:"decimal",description:"main.temp_max Value"},"main.temp_min":{displayName:"main.temp_min",type:"decimal",description:"main.temp_min Value"},name:{displayName:"name",type:"string",description:"name Value"},"sys.country":{displayName:"sys.country",type:"string",description:"sys.country Value"},"sys.id":{displayName:"sys.id",type:"number",description:"sys.id Value"},"sys.message":{displayName:"sys.message",type:"decimal",description:"sys.message Value"},"sys.sunrise":{displayName:"sys.sunrise",type:"number",description:"sys.sunrise Value"},"sys.sunset":{displayName:"sys.sunset",type:"number",description:"sys.sunset Value"},"sys.type":{displayName:"sys.type",type:"number",description:"sys.type Value"},weather:{displayName:"weather is a JSON Object Array of Weather",type:"extendedString",extendedType:"k2.com/2019/memo",description:"Call the Unpack JSON Object Array List Method on Weather to resolve"},"wind.deg":{displayName:"wind.deg",type:"number",description:"wind.deg Value"},"wind.speed":{displayName:"wind.speed",type:"decimal",description:"wind.speed Value"}},methods:{get:{displayName:"get",type:"read",inputs:[],requiredInputs:[],parameters:{appid:{displayName:"appid",type:"string"},q:{displayName:"q",type:"string"}},requiredParameters:[],outputs:["base","clouds.all","cod","coord.lat","coord.lon","dt","id","main.humidity","main.pressure","main.temp","main.temp_max","main.temp_min","name","sys.country","sys.id","sys.message","sys.sunrise","sys.sunset","sys.type","weather","wind.deg","wind.speed"],data:{httpMethod:"get",httpPath:"/weather"}}}},Weather:{displayName:"Weather",description:"Weather",properties:{description:{displayName:"description",type:"string",description:"description Value"},icon:{displayName:"icon",type:"string",description:"icon Value"},id:{displayName:"id",type:"number",description:"id Value"},main:{displayName:"main",type:"string",description:"main Value"}},methods:{UnpackJSONObjectArray:{displayName:"Unpack JSON Object Array",type:"list",inputs:[],requiredInputs:[],parameters:{"JSON.String.Param":{displayName:"JSON Weather Object Array String",description:"JSON String",type:"string",extendedType:"k2.com/2019/memo"}},requiredParameters:["JSON.String.Param"],outputs:["description","icon","id","main"]},PackJSONObject:{displayName:"Pack JSON Object",type:"read",inputs:["description","icon","id","main"],outputs:["JSON.String"]}}}}})},onexecute=async function({objectName:t,methodName:a,parameters:i,properties:s,configuration:n}){switch(t){case"OpenWeatherMapResponse":await async function(t,a,i,s){switch(t){case"get":await function(t,a,i){return new Promise((t,a)=>{let s=i.ServiceURL,n="data/2.5/weather",r=new XMLHttpRequest;r.onreadystatechange=function(){try{if(4!==r.readyState)return;if(200!==r.status)throw new Error("Failed with status "+r.status);let a=e(JSON.parse(r.responseText),"",{});postResult(a),t()}catch(e){a(e)}},s=s.endsWith("/")?s:s+"/",n=n.startsWith("/")?n.substr(1):n+"/",r.open("get",s+n),r.send()})}(0,0,s);break;default:throw new Error("The method "+t+" is not supported.")}}(a,0,0,n);break;case"Weather":await async function(e,t,a,i){switch(e){case"UnpackJSONObjectArray":await function(e,t,a){return new Promise((t,a)=>{try{let a=JSON.parse(e["JSON.String.Param"]);a.forEach(e=>{for(const t in e)if(e.hasOwnProperty(t)){"object"==typeof e[t]&&(e[t]=JSON.stringify(e[t]))}}),postResult(a),t()}catch(e){a(e)}})}(t);break;case"PackJSONObject":await function(e,t,a){return new Promise((e,a)=>{try{let a={"JSON.String":JSON.stringify(t)};postResult(a),e()}catch(e){a(e)}})}(0,a);break;default:throw new Error("The method "+e+" is not supported.")}}(a,i,s);break;default:throw new Error("The object "+t+" is not supported.")}}}();
//# sourceMappingURL=index.js.map
