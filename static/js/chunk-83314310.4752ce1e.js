(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83314310"],{"0239":function(t,e,a){},"0cc1":function(t,e,a){"use strict";a("c365")},2506:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"f",(function(){return n})),a.d(e,"g",(function(){return c})),a.d(e,"j",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return l})),a.d(e,"a",(function(){return u})),a.d(e,"e",(function(){return d})),a.d(e,"l",(function(){return p})),a.d(e,"k",(function(){return m}));a("99af");var s=a("b775");function r(t){return Object(s["a"])({url:"/user/process/instance/".concat(t.page,"/").concat(t.pageSize),method:"put",data:t})}function n(t){return Object(s["a"])({url:"/user/process/instance/getById/".concat(t)})}function c(t){return Object(s["a"])({url:"/approvals/flows/".concat(t)})}function i(t){return Object(s["a"])({url:"/approvals/setting",method:"put",data:t})}function o(t){return Object(s["a"])({url:"/user/process/instance/".concat(t)})}function l(t){return Object(s["a"])({url:"/user/process/instance/tasks/".concat(t)})}function u(t){return Object(s["a"])({url:"//user/process/buss/showBussImgById/".concat(t)})}function d(t){return Object(s["a"])({url:"/user/process/definition",params:t})}function p(t){return Object(s["a"])({url:"/user/process/suspend/".concat(t.processKey),params:t})}function m(t){return Object(s["a"])({url:"/user/process/startProcess",data:t,method:"post"})}},"616f":function(t,e,a){t.exports=a.p+"static/img/img.0615818f.jpeg"},9406:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard-container"},[s("el-card",{staticClass:"header-card"},[s("div",[s("div",{staticClass:"fl headL"},[s("div",{staticClass:"headImg"},[s("img",{attrs:{src:t.avatar}})]),s("div",{staticClass:"headInfoTip"},[s("p",{staticClass:"firstChild"},[t._v("早安，"+t._s(t.name)+"，祝你开心每一天！")]),s("p",{staticClass:"lastChild"},[t._v("早安，"+t._s(t.name)+"，祝你开心每一天！")])])]),s("div",{staticClass:"fr"})])]),s("el-row",{attrs:{type:"flex",justify:"space-between"}},[s("el-col",{staticStyle:{"padding-right":"26px"},attrs:{span:13}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("工作日历")])]),s("WorkCalendar")],1),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"advContent"},[s("div",{staticClass:"title"},[t._v(" 公告")]),s("div",{staticClass:"contentItem"},[s("ul",{staticClass:"noticeList"},[s("li",[s("div",{staticClass:"item"},[s("img",{attrs:{src:a("616f"),alt:""}}),s("div",[s("p",[s("span",{staticClass:"col"},[t._v("朱继柳")]),t._v(" 发布了 第1期“传智大讲堂”互动讨论获奖名单公布")]),s("p",[t._v("2018-07-21 15:21:38")])])])]),s("li",[s("div",{staticClass:"item"},[s("img",{attrs:{src:a("616f"),alt:""}}),s("div",[s("p",[s("span",{staticClass:"col"},[t._v("朱继柳")]),t._v(" 发布了 第2期“传智大讲堂”互动讨论获奖名单公布")]),s("p",[t._v("2018-07-21 15:21:38")])])])]),s("li",[s("div",{staticClass:"item"},[s("img",{attrs:{src:a("616f"),alt:""}}),s("div",[s("p",[s("span",{staticClass:"col"},[t._v("朱继柳")]),t._v(" 发布了 第3期“传智大讲堂”互动讨论获奖名单公布")]),s("p",[t._v("2018-07-21 15:21:38")])])])])])])])])],1),s("el-col",{attrs:{span:11}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"header headTit"},[s("span",[t._v("流程申请")])]),s("div",{staticClass:"sideNav"},[s("el-button",{staticClass:"sideBtn",on:{click:function(e){t.showDialog=!0}}},[t._v("加班离职")]),s("el-button",{staticClass:"sideBtn"},[t._v("请假调休")]),s("el-button",{staticClass:"sideBtn"},[t._v("审批列表")]),s("el-button",{staticClass:"sideBtn"},[t._v("我的信息")])],1)]),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("绩效指数")])]),s("Radar")],1),s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"header headTit"},[s("span",[t._v("帮助链接")])]),s("div",{staticClass:"sideLink"},[s("el-row",[s("el-col",{attrs:{span:8}},[s("a",{attrs:{href:"#"}},[s("span",{staticClass:"icon iconGuide"}),s("p",[t._v("入门指南")])])]),s("el-col",{attrs:{span:8}},[s("a",{attrs:{href:"#"}},[s("span",{staticClass:"icon iconHelp"}),s("p",[t._v("在线帮助手册")])])]),s("el-col",{attrs:{span:8}},[s("a",{attrs:{href:"#"}},[s("span",{staticClass:"icon iconTechnology"}),s("p",[t._v("联系技术支持")])])])],1)],1)])],1)],1),s("el-dialog",{attrs:{visible:t.showDialog,title:"离职申请"},on:{close:t.btnCancel}},[s("el-form",{ref:"ruleForm",attrs:{model:t.ruleForm,"status-icon":"","label-width":"110px",rules:t.rules}},[s("el-form-item",{attrs:{label:"离职时间",prop:"end_time"}},[s("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择日期时间"},model:{value:t.ruleForm.exceptTime,callback:function(e){t.$set(t.ruleForm,"exceptTime",e)},expression:"ruleForm.exceptTime"}})],1),s("el-form-item",{attrs:{label:"离职原因",prop:"reason"}},[s("el-input",{staticStyle:{width:"70%"},attrs:{type:"textarea",autosize:{minRows:3,maxRows:8},placeholder:"请输入内容"},model:{value:t.ruleForm.reason,callback:function(e){t.$set(t.ruleForm,"reason",e)},expression:"ruleForm.reason"}})],1)],1),s("el-row",{attrs:{slot:"footer",type:"flex",justify:"center"},slot:"footer"},[s("el-col",{attrs:{span:6}},[s("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.btnOK}},[t._v("确定")]),s("el-button",{attrs:{size:"small"},on:{click:t.btnCancel}},[t._v("取消")])],1)],1)],1)],1)},r=[],n=a("1da1"),c=a("5530"),i=(a("96cf"),a("2f62")),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{type:"flex",justify:"end"}},[a("el-select",{attrs:{size:"small"},on:{change:t.onChange},model:{value:t.currentYear,callback:function(e){t.currentYear=e},expression:"currentYear"}},t._l(t.yearList,(function(t){return a("el-option",{key:t,attrs:{value:t,label:t}})})),1),a("el-select",{attrs:{size:"small"},on:{change:t.onChange},model:{value:t.currentMonth,callback:function(e){t.currentMonth=e},expression:"currentMonth"}},t._l(12,(function(t){return a("el-option",{key:t,attrs:{value:t,label:t}})})),1)],1),a("el-calendar",{scopedSlots:t._u([{key:"dateCell",fn:function(e){var s=e.date;return[a("div",[t._v(" "+t._s(t._f("formatDate")(s,"D"))+" "),[0,6].includes(s.getDay())?a("div",{staticClass:"rest"},[t._v("休")]):t._e()])]}}]),model:{value:t.currentDate,callback:function(e){t.currentDate=e},expression:"currentDate"}})],1)},l=[],u=(a("a630"),a("3ca3"),{name:"WorkCalendar",data:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,s=Array.from({length:11},(function(t,e){return(new Date).getFullYear()+e-5}));return{yearList:s,currentYear:e,currentMonth:a,currentDate:t}},methods:{onChange:function(){this.currentDate=new Date(this.currentYear+"-"+this.currentMonth)}}}),d=u,p=(a("0cc1"),a("2877")),m=Object(p["a"])(d,o,l,!1,null,"42f20d2d",null),f=m.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{ref:"main",staticStyle:{width:"600px",height:"400px"}})])},h=[],b=a("22b4"),C=a("1be7"),g=a("9394"),_=a("ff32"),x=a("e8e6"),y=a("f95e"),w=a("2da7");b["a"]([g["a"],_["a"],x["a"],y["a"],w["a"]]);var k={name:"Radar",data:function(){return{}},mounted:function(){var t=C["b"](this.$refs.main);t.setOption({title:{text:""},legend:{data:[]},tooltip:{trigger:"item"},radar:{indicator:[{name:"考勤",max:100},{name:"技术",max:100},{name:"管理",max:100},{name:"分享",max:100},{name:"bug",max:100},{name:"助人",max:100}],axisName:{color:"#fff",backgroundColor:"#6666",borderRadius:3,padding:[3,5]}},series:[{name:"绩效",type:"radar",data:[{value:[42,30,20,35,50,18],name:"张三"},{value:[50,14,28,26,42,21],name:"李四"}]}]})},methods:{}},j=k,O=Object(p["a"])(j,v,h,!1,null,"791b06ac",null),D=O.exports,F=a("2506"),T={name:"Dashboard",components:{WorkCalendar:f,Radar:D},data:function(){return{showDialog:!1,ruleForm:{exceptTime:"",reason:"",processKey:"process_dimission",processName:"离职"},rules:{exceptTime:[{required:!0,message:"离职时间不能为空"}],reason:[{required:!0,message:"离职原因不能为空"}]}}},computed:Object(c["a"])({},Object(i["c"])(["name","avatar"])),methods:{btnOK:function(){var t=this;this.$refs.ruleForm.validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(a){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!a){e.next=6;break}return s=Object(c["a"])(Object(c["a"])({},t.ruleForm),{},{userId:t.$store.state.user.userInfo.userId}),e.next=4,Object(F["k"])(s);case 4:t.$message.success("提交流程成功"),t.btnCancel();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},btnCancel:function(){this.showDialog=!1,this.$refs.ruleForm.resetFields(),this.ruleForm={exceptTime:"",reason:"",processKey:"process_dimission",processName:"离职"}}}},$=T,I=(a("e26b"),Object(p["a"])($,s,r,!1,null,"1b3ca15e",null));e["default"]=I.exports},c365:function(t,e,a){},e26b:function(t,e,a){"use strict";a("0239")}}]);