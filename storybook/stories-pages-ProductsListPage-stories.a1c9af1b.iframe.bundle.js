(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[304],{"./src/stories/pages/ProductsListPage.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Interaction:function(){return Interaction},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ProductsListPage_stories}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),esm=__webpack_require__("./node_modules/@storybook/testing-library/dist/esm/index.js"),dist_esm=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react=__webpack_require__("./node_modules/react/index.js");function $parcel$export(e,n,v,s){Object.defineProperty(e,n,{get:v,set:s,enumerable:!0,configurable:!0})}$parcel$export({},"ErrorBoundary",(()=>$44d7e150ebc754d2$export$e926676385687eaf));$parcel$export({},"ErrorBoundaryContext",(()=>$ebb31c7feaa4405e$export$b16d9fb1a22de840));const $ebb31c7feaa4405e$export$b16d9fb1a22de840=(0,react.createContext)(null),$44d7e150ebc754d2$var$initialState={didCatch:!1,error:null};class $44d7e150ebc754d2$export$e926676385687eaf extends react.Component{state=$44d7e150ebc754d2$var$initialState;static getDerivedStateFromError(error){return{didCatch:!0,error:error}}resetErrorBoundary=(...args)=>{const{error:error}=this.state;null!==error&&(this.props.onReset?.({args:args,reason:"imperative-api"}),this.setState($44d7e150ebc754d2$var$initialState))};componentDidCatch(error,info){this.props.onError?.(error,info)}componentDidUpdate(prevProps,prevState){const{didCatch:didCatch}=this.state,{resetKeys:resetKeys}=this.props;didCatch&&null!==prevState.error&&function $44d7e150ebc754d2$var$hasArrayChanged(a=[],b=[]){return a.length!==b.length||a.some(((item,index)=>!Object.is(item,b[index])))}(prevProps.resetKeys,resetKeys)&&(this.props.onReset?.({next:resetKeys,prev:prevProps.resetKeys,reason:"keys"}),this.setState($44d7e150ebc754d2$var$initialState))}render(){const{children:children,fallbackRender:fallbackRender,FallbackComponent:FallbackComponent,fallback:fallback}=this.props,{didCatch:didCatch,error:error}=this.state;let childToRender=children;if(didCatch){const props={error:error,resetErrorBoundary:this.resetErrorBoundary};if((0,react.isValidElement)(fallback))childToRender=fallback;else if("function"==typeof fallbackRender)childToRender=fallbackRender(props);else{if(!FallbackComponent)throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop");childToRender=(0,react.createElement)(FallbackComponent,props)}}return(0,react.createElement)($ebb31c7feaa4405e$export$b16d9fb1a22de840.Provider,{value:{didCatch:didCatch,error:error,resetErrorBoundary:this.resetErrorBoundary}},childToRender)}}function $75c9d331f9c1ed1a$export$f20aa86254872370(value){if(null==value||"boolean"!=typeof value.didCatch||"function"!=typeof value.resetErrorBoundary)throw new Error("ErrorBoundaryContext not found");return!0}function $7c3c25b3f398a9d6$export$c052f6604b7d51fe(){const context=(0,react.useContext)($ebb31c7feaa4405e$export$b16d9fb1a22de840);$75c9d331f9c1ed1a$export$f20aa86254872370(context);const[state,setState]=(0,react.useState)({error:null,hasError:!1}),memoized=(0,react.useMemo)((()=>({resetBoundary:()=>{context?.resetErrorBoundary(),setState({error:null,hasError:!1})},showBoundary:error=>setState({error:error,hasError:!0})})),[context?.resetErrorBoundary]);if(state.hasError)throw state.error;return memoized}$parcel$export({},"useErrorBoundary",(()=>$7c3c25b3f398a9d6$export$c052f6604b7d51fe));function $62ff477d53f02a5b$export$f0c7a449e0cfaec7(component,errorBoundaryProps){const Wrapped=(0,react.forwardRef)(((props,ref)=>(0,react.createElement)($44d7e150ebc754d2$export$e926676385687eaf,errorBoundaryProps,(0,react.createElement)(component,{...props,ref:ref})))),name=component.displayName||component.name||"Unknown";return Wrapped.displayName=`withErrorBoundary(${name})`,Wrapped}$parcel$export({},"withErrorBoundary",(()=>$62ff477d53f02a5b$export$f0c7a449e0cfaec7));var _templateObject,_Default$parameters,_Default$parameters2,_Default$parameters2$,_Interaction$paramete,_Interaction$paramete2,_Interaction$paramete3,_play,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Header=__webpack_require__("./src/components/Common/Header.tsx"),Message=__webpack_require__("./src/components/Common/Message.tsx"),ProductList=__webpack_require__("./src/components/Product/ProductList.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Main=styled_components_browser_esm.ZP.main(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  max-width: 1300px;\n  margin: 60px auto 0;\n  padding: 0 0 100px 0;\n"]))),ProductsListPage_stories={title:"Pages/ProductsListPage",component:function ProductsListPage(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Header.Z,{}),(0,jsx_runtime.jsx)(Main,{children:(0,jsx_runtime.jsx)($44d7e150ebc754d2$export$e926676385687eaf,{fallback:(0,jsx_runtime.jsx)(Message.Z,{type:"error"}),children:(0,jsx_runtime.jsx)(react.Suspense,{fallback:(0,jsx_runtime.jsx)(Message.Z,{type:"loading"}),children:(0,jsx_runtime.jsx)(ProductList.Z,{})})})})]})},tags:["autodocs"],parameters:{viewport:{defaultViewport:"desktop"}}},Default={args:{}},Interaction={args:{},play:(_play=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee2(_ref){var canvasElement,step,canvas,productList,productListCanvas,cartButtons;return(0,regeneratorRuntime.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return canvasElement=_ref.canvasElement,step=_ref.step,window.localStorage.clear(),canvas=(0,esm.uh)(canvasElement),_context2.next=5,canvas.findByRole("list");case 5:return productList=_context2.sent,productListCanvas=(0,esm.uh)(productList),_context2.next=9,productListCanvas.findAllByRole("button");case 9:return cartButtons=_context2.sent,_context2.next=12,step("Click Cart Button",(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,esm.mV.click(cartButtons[0]);case 2:return _context.next=4,esm.mV.click(cartButtons[1]);case 4:case"end":return _context.stop()}}),_callee)}))));case 12:return _context2.next=14,(0,esm.X_)((function(){(0,dist_esm.l)(canvas.getByText(2)).toBeInTheDocument()}));case 14:case"end":return _context2.stop()}}),_callee2)}))),function play(_x){return _play.apply(this,arguments)})};Default.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Default.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Interaction.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},Interaction.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_Interaction$paramete=Interaction.parameters)||void 0===_Interaction$paramete?void 0:_Interaction$paramete.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  args: {},\n  play: async ({\n    canvasElement,\n    step\n  }) => {\n    window.localStorage.clear();\n    const canvas = within(canvasElement);\n    const productList = await canvas.findByRole('list');\n    const productListCanvas = within(productList);\n    const cartButtons = await productListCanvas.findAllByRole('button');\n    await step('Click Cart Button', async () => {\n      await userEvent.click(cartButtons[0]);\n      await userEvent.click(cartButtons[1]);\n    });\n    await waitFor(() => {\n      expect(canvas.getByText(2)).toBeInTheDocument();\n    });\n  }\n}"},null===(_Interaction$paramete2=Interaction.parameters)||void 0===_Interaction$paramete2||null===(_Interaction$paramete3=_Interaction$paramete2.docs)||void 0===_Interaction$paramete3?void 0:_Interaction$paramete3.source)})});var __namedExportsOrder=["Default","Interaction"]},"./src/components/Common/Header.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_router_dom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),_assets_CartIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/assets/CartIcon.tsx"),_hooks_useCartProductCount__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useCartProductCount.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.header(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  width: 100%;\n  height: 80px;\n  background-color: ",";\n"])),(function(_ref){return _ref.theme.colors.black})),HeaderContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.div(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1250px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 30px;\n"]))),LogoContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.rU)(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  display: flex;\n  align-items: center;\n\n  & > svg {\n    margin-right: 12px;\n    transform: scaleX(-1);\n  }\n\n  @media (min-width: ",") {\n    & > svg {\n      margin-right: 18px;\n      transform: scaleX(-1);\n    }\n  }\n"])),(function(_ref2){return _ref2.theme.breakPoints.small})),Logo=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.h1(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  padding: 8px 0 0;\n  color: ",";\n  font-size: 34px;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n\n  @media (min-width: ",") {\n    padding: 10px 0 0;\n    font-size: 40px;\n    line-height: 40px;\n  }\n"])),(function(_ref3){return _ref3.theme.colors.white}),(function(_ref4){return _ref4.theme.breakPoints.small})),CartPageLink=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.rU)(_templateObject5||(_templateObject5=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  display: flex;\n  color: ",";\n  font-size: 20px;\n  font-weight: 500;\n\n  @media (min-width: ",") {\n    font-size: 24px;\n  }\n"])),(function(_ref5){return _ref5.theme.colors.white}),(function(_ref6){return _ref6.theme.breakPoints.small})),ProductCountAlert=styled_components__WEBPACK_IMPORTED_MODULE_3__.ZP.span(_templateObject6||(_templateObject6=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.Z)(["\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  margin-left: 6px;\n  font-size: 16px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: ",";\n  line-height: 24px;\n\n  @media (min-width: ",") {\n    width: 26px;\n    height: 26px;\n    line-height: 28px;\n  }\n"])),(function(_ref7){return _ref7.theme.colors.primary}),(function(_ref8){return _ref8.theme.breakPoints.small}));__webpack_exports__.Z=function Header(){var cartProductCount=(0,_hooks_useCartProductCount__WEBPACK_IMPORTED_MODULE_1__.Z)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(HeaderContainer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(HeaderContent,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(LogoContainer,{to:"/",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_assets_CartIcon__WEBPACK_IMPORTED_MODULE_0__.Z,{width:51,height:44,color:"white"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Logo,{children:"SHOP"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(CartPageLink,{to:"/cart",children:["장바구니",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ProductCountAlert,{children:cartProductCount})]})]})})}},"./src/hooks/useCartProductCount.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_states_cartProducts__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/states/cartProducts/index.ts");__webpack_exports__.Z=function useCartProductCount(){return(0,recoil__WEBPACK_IMPORTED_MODULE_0__.sJ)(_states_cartProducts__WEBPACK_IMPORTED_MODULE_1__.TC)}},"?4f7e":function(){}}]);