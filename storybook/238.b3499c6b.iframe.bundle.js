/*! For license information please see 238.b3499c6b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[238],{"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _slicedToArray}});var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||(0,unsupportedIterableToArray.Z)(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},"./node_modules/react-router-dom/dist/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{VK:function(){return BrowserRouter}});var router_Action,react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}!function(Action){Action.Pop="POP",Action.Push="PUSH",Action.Replace="REPLACE"}(router_Action||(router_Action={}));const PopStateEventType="popstate";function invariant(value,message){if(!1===value||null==value)throw new Error(message)}function getHistoryState(location,index){return{usr:location.state,key:location.key,idx:index}}function createLocation(current,to,state,key){return void 0===state&&(state=null),_extends({pathname:"string"==typeof current?current:current.pathname,search:"",hash:""},"string"==typeof to?router_parsePath(to):to,{state:state,key:to&&to.key||key||Math.random().toString(36).substr(2,8)})}function router_createPath(_ref){let{pathname:pathname="/",search:search="",hash:hash=""}=_ref;return search&&"?"!==search&&(pathname+="?"===search.charAt(0)?search:"?"+search),hash&&"#"!==hash&&(pathname+="#"===hash.charAt(0)?hash:"#"+hash),pathname}function router_parsePath(path){let parsedPath={};if(path){let hashIndex=path.indexOf("#");hashIndex>=0&&(parsedPath.hash=path.substr(hashIndex),path=path.substr(0,hashIndex));let searchIndex=path.indexOf("?");searchIndex>=0&&(parsedPath.search=path.substr(searchIndex),path=path.substr(0,searchIndex)),path&&(parsedPath.pathname=path)}return parsedPath}function getUrlBasedHistory(getLocation,createHref,validateLocation,options){void 0===options&&(options={});let{window:window=document.defaultView,v5Compat:v5Compat=!1}=options,globalHistory=window.history,action=router_Action.Pop,listener=null,index=getIndex();function getIndex(){return(globalHistory.state||{idx:null}).idx}function handlePop(){action=router_Action.Pop;let nextIndex=getIndex(),delta=null==nextIndex?null:nextIndex-index;index=nextIndex,listener&&listener({action:action,location:history.location,delta:delta})}function createURL(to){let base="null"!==window.location.origin?window.location.origin:window.location.href,href="string"==typeof to?to:router_createPath(to);return invariant(base,"No window.location.(origin|href) available to create URL for href: "+href),new URL(href,base)}null==index&&(index=0,globalHistory.replaceState(_extends({},globalHistory.state,{idx:index}),""));let history={get action(){return action},get location(){return getLocation(window,globalHistory)},listen(fn){if(listener)throw new Error("A history only accepts one active listener");return window.addEventListener(PopStateEventType,handlePop),listener=fn,()=>{window.removeEventListener(PopStateEventType,handlePop),listener=null}},createHref(to){return createHref(window,to)},createURL:createURL,encodeLocation(to){let url=createURL(to);return{pathname:url.pathname,search:url.search,hash:url.hash}},push:function push(to,state){action=router_Action.Push;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex()+1;let historyState=getHistoryState(location,index),url=history.createHref(location);try{globalHistory.pushState(historyState,"",url)}catch(error){window.location.assign(url)}v5Compat&&listener&&listener({action:action,location:history.location,delta:1})},replace:function replace(to,state){action=router_Action.Replace;let location=createLocation(history.location,to,state);validateLocation&&validateLocation(location,to),index=getIndex();let historyState=getHistoryState(location,index),url=history.createHref(location);globalHistory.replaceState(historyState,"",url),v5Compat&&listener&&listener({action:action,location:history.location,delta:0})},go(n){return globalHistory.go(n)}};return history}var ResultType;!function(ResultType){ResultType.data="data",ResultType.deferred="deferred",ResultType.redirect="redirect",ResultType.error="error"}(ResultType||(ResultType={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function router_stripBasename(pathname,basename){if("/"===basename)return pathname;if(!pathname.toLowerCase().startsWith(basename.toLowerCase()))return null;let startIndex=basename.endsWith("/")?basename.length-1:basename.length,nextChar=pathname.charAt(startIndex);return nextChar&&"/"!==nextChar?null:pathname.slice(startIndex)||"/"}class router_AbortedDeferredError extends Error{}const validMutationMethodsArr=["post","put","patch","delete"],validRequestMethodsArr=(new Set(validMutationMethodsArr),["get",...validMutationMethodsArr]);new Set(validRequestMethodsArr),new Set([301,302,303,307,308]),new Set([307,308]),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;Symbol("deferred");const NavigationContext=react.createContext(null);const LocationContext=react.createContext(null);function useInRouterContext(){return null!=react.useContext(LocationContext)}class RenderErrorBoundary extends react.Component{constructor(props){super(props),this.state={location:props.location,revalidation:props.revalidation,error:props.error}}static getDerivedStateFromError(error){return{error:error}}static getDerivedStateFromProps(props,state){return state.location!==props.location||"idle"!==state.revalidation&&"idle"===props.revalidation?{error:props.error,location:props.location,revalidation:props.revalidation}:{error:props.error||state.error,location:state.location,revalidation:props.revalidation||state.revalidation}}componentDidCatch(error,errorInfo){console.error("React Router caught the following error during render",error,errorInfo)}render(){return this.state.error?React.createElement(RouteContext.Provider,{value:this.props.routeContext},React.createElement(RouteErrorContext.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}var DataRouterHook,DataRouterStateHook;!function(DataRouterHook){DataRouterHook.UseBlocker="useBlocker",DataRouterHook.UseRevalidator="useRevalidator",DataRouterHook.UseNavigateStable="useNavigate"}(DataRouterHook||(DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseBlocker="useBlocker",DataRouterStateHook.UseLoaderData="useLoaderData",DataRouterStateHook.UseActionData="useActionData",DataRouterStateHook.UseRouteError="useRouteError",DataRouterStateHook.UseNavigation="useNavigation",DataRouterStateHook.UseRouteLoaderData="useRouteLoaderData",DataRouterStateHook.UseMatches="useMatches",DataRouterStateHook.UseRevalidator="useRevalidator",DataRouterStateHook.UseNavigateStable="useNavigate",DataRouterStateHook.UseRouteId="useRouteId"}(DataRouterStateHook||(DataRouterStateHook={}));function dist_Router(_ref5){let{basename:basenameProp="/",children:children=null,location:locationProp,navigationType:navigationType=router_Action.Pop,navigator:navigator,static:staticProp=!1}=_ref5;useInRouterContext()&&invariant(!1);let basename=basenameProp.replace(/^\/*/,"/"),navigationContext=react.useMemo((()=>({basename:basename,navigator:navigator,static:staticProp})),[basename,navigator,staticProp]);"string"==typeof locationProp&&(locationProp=router_parsePath(locationProp));let{pathname:pathname="/",search:search="",hash:hash="",state:state=null,key:key="default"}=locationProp,locationContext=react.useMemo((()=>{let trailingPathname=router_stripBasename(pathname,basename);return null==trailingPathname?null:{location:{pathname:trailingPathname,search:search,hash:hash,state:state,key:key},navigationType:navigationType}}),[basename,pathname,search,hash,state,key,navigationType]);return null==locationContext?null:react.createElement(NavigationContext.Provider,{value:navigationContext},react.createElement(LocationContext.Provider,{children:children,value:locationContext}))}var AwaitRenderStatus;!function(AwaitRenderStatus){AwaitRenderStatus[AwaitRenderStatus.pending=0]="pending",AwaitRenderStatus[AwaitRenderStatus.success=1]="success",AwaitRenderStatus[AwaitRenderStatus.error=2]="error"}(AwaitRenderStatus||(AwaitRenderStatus={}));new Promise((()=>{}));class AwaitErrorBoundary extends react.Component{constructor(props){super(props),this.state={error:null}}static getDerivedStateFromError(error){return{error:error}}componentDidCatch(error,errorInfo){console.error("<Await> caught the following error during render",error,errorInfo)}render(){let{children:children,errorElement:errorElement,resolve:resolve}=this.props,promise=null,status=AwaitRenderStatus.pending;if(resolve instanceof Promise)if(this.state.error){AwaitRenderStatus.error;let renderError=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(promise,"_tracked",{get:()=>!0}),Object.defineProperty(promise,"_error",{get:()=>renderError})}else resolve._tracked?(resolve,void 0!==promise._error?AwaitRenderStatus.error:void 0!==promise._data?AwaitRenderStatus.success:AwaitRenderStatus.pending):(AwaitRenderStatus.pending,Object.defineProperty(resolve,"_tracked",{get:()=>!0}),resolve.then((data=>Object.defineProperty(resolve,"_data",{get:()=>data})),(error=>Object.defineProperty(resolve,"_error",{get:()=>error}))));else AwaitRenderStatus.success,Promise.resolve(),Object.defineProperty(promise,"_tracked",{get:()=>!0}),Object.defineProperty(promise,"_data",{get:()=>resolve});if(status===AwaitRenderStatus.error&&promise._error instanceof AbortedDeferredError)throw neverSettledPromise;if(status===AwaitRenderStatus.error&&!errorElement)throw promise._error;if(status===AwaitRenderStatus.error)return React.createElement(AwaitContext.Provider,{value:promise,children:errorElement});if(status===AwaitRenderStatus.success)return React.createElement(AwaitContext.Provider,{value:promise,children:children});throw promise}}function BrowserRouter(_ref){let{basename:basename,children:children,window:window}=_ref,historyRef=react.useRef();null==historyRef.current&&(historyRef.current=function router_createBrowserHistory(options){return void 0===options&&(options={}),getUrlBasedHistory((function createBrowserLocation(window,globalHistory){let{pathname:pathname,search:search,hash:hash}=window.location;return createLocation("",{pathname:pathname,search:search,hash:hash},globalHistory.state&&globalHistory.state.usr||null,globalHistory.state&&globalHistory.state.key||"default")}),(function createBrowserHref(window,to){return"string"==typeof to?to:router_createPath(to)}),null,options)}({window:window,v5Compat:!0}));let history=historyRef.current,[state,setState]=react.useState({action:history.action,location:history.location});return react.useLayoutEffect((()=>history.listen(setState)),[history]),react.createElement(dist_Router,{basename:basename,children:children,location:state.location,navigationType:state.action,navigator:history})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;var dist_DataRouterHook,dist_DataRouterStateHook;(function(DataRouterHook){DataRouterHook.UseScrollRestoration="useScrollRestoration",DataRouterHook.UseSubmitImpl="useSubmitImpl",DataRouterHook.UseFetcher="useFetcher"})(dist_DataRouterHook||(dist_DataRouterHook={})),function(DataRouterStateHook){DataRouterStateHook.UseFetchers="useFetchers",DataRouterStateHook.UseScrollRestoration="useScrollRestoration"}(dist_DataRouterStateHook||(dist_DataRouterStateHook={}))}}]);