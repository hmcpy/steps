webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("xd7I"),i={name:"Steps",data:function(){return{stepNums:[{step_title:"报名",step_num:1,inputVisible:!1,timeInputVisible:!1,step_explain:!1,step_time:"2019-07-19",inputValue:"",tags:[]},{step_title:"准考证",step_num:2,inputVisible:!1,timeInputVisible:!1,step_explain:!1,step_time:"2019-07-19",inputValue:"",tags:[]},{step_title:"考试",step_num:3,inputVisible:!1,timeInputVisible:!1,step_explain:!1,step_time:"2019-07-19",inputValue:"",tags:[]}]}},methods:{addStep:function(){var t=this.stepNums.length+1;this.stepNums.push({step_num:t,step_title:"添加标题",inputVisible:!1,timeInputVisible:!1,step_explain:!1,step_time:"2019-07-19",inputValue:"",tags:[]})},explainEnter:function(t,e){13===t&&(this.stepNums[e].step_explain=!1)},timeEnter:function(t,e){13===t&&(this.stepNums[e].timeInputVisible=!1)},contextMenu:function(){console.log(111)},decreaseStep:function(){this.stepNums.splice(this.stepNums.length-1,1)},handleClose:function(t,e,n){this.stepNums[e].tags.splice(n,1)},showTimeInput:function(t){var e=this;this.stepNums[t].timeInputVisible=!0,this.$nextTick(function(t){e.$refs.time_input[0].focus()})},titleInputShow:function(t){var e=this;this.stepNums[t].step_explain=!0,this.$nextTick(function(t){e.$refs.step_explain[0].focus()})},showInput:function(t){var e=this;this.stepNums[t].inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput[0].$refs.input.focus()})},handleInputConfirm:function(t){var e=this.stepNums[t].inputValue;e&&this.stepNums[t].tags.push({tagName:e,url:""}),this.stepNums[t].inputVisible=!1,this.stepNums[t].inputValue=""}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"step_container"},[t._l(t.stepNums,function(e,s){return[n("div",{key:s,staticClass:"step_row_data"},[n("div",{staticClass:"step_column_data"},[e.step_explain?n("input",{directives:[{name:"model",rawName:"v-model",value:e.step_title,expression:"stepNum.step_title"}],ref:"step_explain",refInFor:!0,staticClass:"step_explain",attrs:{type:"text"},domProps:{value:e.step_title},on:{keyup:function(e){return t.explainEnter(e.keyCode,s)},blur:function(){return e.step_explain=!1},input:function(n){n.target.composing||t.$set(e,"step_title",n.target.value)}}}):n("span",{on:{click:function(e){return t.titleInputShow(s)}}},[t._v("\n          "+t._s(e.step_title)+"\n        ")])]),t._v(" "),n("div",{staticClass:"step_column_data"},[n("div",{staticClass:"step_num"},[t._v("\n          "+t._s(e.step_num)+"\n        ")]),t._v(" "),t._l(e.tags,function(e,i){return n("el-tag",{key:e.tagName+i,attrs:{closable:"","disable-transitions":!1},on:{contextmenu:t.contextMenu,close:function(n){return t.handleClose(e,s,i)}}},[t._v("\n          "+t._s(e.tagName)+"\n        ")])}),t._v(" "),e.inputVisible?n("el-input",{ref:"saveTagInput",refInFor:!0,staticClass:"input-new-tag",attrs:{size:"small"},on:{blur:function(e){return t.handleInputConfirm(s)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputConfirm(s)}},model:{value:e.inputValue,callback:function(n){t.$set(e,"inputValue",n)},expression:"stepNum.inputValue"}}):n("el-button",{staticClass:"button-new-tag",attrs:{size:"small"},on:{click:function(e){return t.showInput(s)}}},[t._v("+ New Tag")]),t._v(" "),n("div",{staticClass:"step_time"},[e.timeInputVisible?n("input",{directives:[{name:"model",rawName:"v-model",value:e.step_time,expression:"stepNum.step_time"}],ref:"time_input",refInFor:!0,staticClass:"time_input",attrs:{type:"text"},domProps:{value:e.step_time},on:{keyup:function(e){return t.timeEnter(e.keyCode,s)},blur:function(){return e.timeInputVisible=!1},input:function(n){n.target.composing||t.$set(e,"step_time",n.target.value)}}}):n("span",{on:{click:function(e){return t.showTimeInput(s)}}},[t._v(t._s(e.step_time))])])],2)])]}),t._v(" "),n("div",{staticClass:"addStep"},[n("i",{staticClass:"el-icon-plus",on:{click:t.addStep}})]),t._v(" "),n("div",{staticClass:"decreaseStep"},[n("i",{staticClass:"el-icon-minus",on:{click:t.decreaseStep}})])],2)},staticRenderFns:[]};var p={name:"App",components:{Steps:n("C7Lr")(i,u,!1,function(t){n("Td6A")},"data-v-0841d64d",null).exports}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Steps")],1)},staticRenderFns:[]};var l=n("C7Lr")(p,a,!1,function(t){n("uHHi")},null,null).exports,o=n("NxjZ"),r=n.n(o);n("zlkP");s.default.use(r.a),s.default.config.productionTip=!1,new s.default({el:"#app",components:{App:l},template:"<App/>"})},Td6A:function(t,e){},uHHi:function(t,e){},zlkP:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9312dede154ef9d69955.js.map