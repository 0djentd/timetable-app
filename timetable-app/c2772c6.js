(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{459:function(t,e,o){"use strict";o.r(e);var n=o(203),l=o(460),r=o(434),c=o(566),d=o(428),m=o(572),h=o(574),v=o(199),f=o(565),k=o(116),w=o(570),_=o(569),x=o(575),I=o(478),S=o(567),D=o(73),y=(o(14),o(217),o(12),o(64),o(213),{components:{BFormTimepicker:o(571).a},data:function(){return{showDisplaySettings:!1,showJson:!1,search:"",multiSort:!0,dense:!0,autoDense:!0,autoDenseLimit:5,filterTime:!1,showTitle:!0,showDescription:!0,showStart:!0,showPriority:!0,showActions:!0,tasks:[],editedIndex:-1,editedItem:{title:"",description:"",start:0,priority:0},defaultItem:{title:"",description:"",start:0,priority:0},dialog:!1,dialogDelete:!1}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},computed:{jsonTasks:{get:function(){return JSON.stringify(this.tasks,null,4)},set:function(t){this.tasks=JSON.parse(t)}},headers:function(){var t=this,e={text:"Start",value:"start",filter:function(e){return!t.filterTime||e>=t.currentTime}},o=[];return this.showTitle&&o.push({text:"Title",value:"title"}),this.showDescription&&o.push({text:"Description",value:"description"}),this.showStart&&o.push(e),this.showPriority&&o.push({text:"Priority",value:"priority"}),this.showActions&&o.push({text:"Actions",value:"actions",sortable:!1}),o},currentTime:function(){var time=new Date;return time.getHours()+":"+time.getMinutes()},formTitle:function(){return-1===this.editedIndex?"New task":"Edit task"},showDense:function(){return this.autoDense&&this.dense?this.tasks.length>=this.autoDenseLimit:this.dense}},methods:{loadFromLocalStorage:function(){var t=localStorage.getItem("timetable-app-tasks"),e=[];t&&(e=JSON.parse(t).tasks);this.tasks=e||[]},saveToLocalStorage:function(){var t=JSON.stringify({tasks:this.tasks});localStorage.setItem("timetable-app-tasks",t)},editItem:function(t){this.editedIndex=this.tasks.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.tasks.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){this.tasks.splice(this.editedIndex,1),this.closeDelete(),this.saveToLocalStorage()},resetEditedItem:function(){var t=this;this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},close:function(){this.dialog=!1,this.resetEditedItem()},closeDelete:function(){this.dialogDelete=!1,this.resetEditedItem()},save:function(){this.editedIndex>-1?Object.assign(this.tasks[this.editedIndex],this.editedItem):this.tasks.push(this.editedItem),this.close(),this.saveToLocalStorage()}},mounted:function(){this.loadFromLocalStorage()}}),T=o(89),component=Object(T.a)(y,(function(){var t=this,e=t._self._c;return e(f.a,[e(c.a,{attrs:{cols:"12",sm:"2"}},[e(k.a,{attrs:{rounded:"lg"}},[e(r.c,[t._v(" How to use? ")]),t._v(" "),e(r.b,[t._v('First, click "New task" to add a new task. You can then sort, edit or\n        remove tasks.')])],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"8"}},[e(k.a,{staticStyle:{padding:"20px"},attrs:{rounded:"lg",elevation:"1"}},[t.showJson?e("div",[e(S.a,{attrs:{dense:"","auto-grow":""},model:{value:t.jsonTasks,callback:function(e){t.jsonTasks=e},expression:"jsonTasks"}})],1):t._e(),t._v(" "),t.showJson?t._e():e(m.a,{attrs:{dense:t.showDense,"multi-sort":t.multiSort,loading:!t.tasks,search:t.search,headers:t.headers,items:t.tasks,"items-per-page":50,"sort-by":"start"},scopedSlots:t._u([{key:"top",fn:function(){return[e(D.a,{attrs:{flat:""}},[e(r.c,{staticClass:"text-h6"},[t._v("Timetable")]),t._v(" "),e(_.a),t._v(" "),e(I.a,{attrs:{"append-icon":"mdi-magnify",label:"Search tasks"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),e(_.a),t._v(" "),e(h.a,{attrs:{"max-width":"700px"},scopedSlots:t._u([{key:"activator",fn:function(o){var l=o.on,r=o.attrs;return[e(n.a,t._g(t._b({staticClass:"mx-2"},"v-btn",r,!1),l),[t._v("\n                  New Task\n                ")])]}}],null,!1,1227495144),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),e(l.a,{staticClass:"pb-2"},[e(r.c,[t._v("\n                  "+t._s(t.formTitle)+"\n                ")]),t._v(" "),e(r.b,[e(d.a,[e(f.a,[e(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(I.a,{attrs:{label:"Title"},model:{value:t.editedItem.title,callback:function(e){t.$set(t.editedItem,"title",e)},expression:"editedItem.title"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e("b-form-timepicker",{model:{value:t.editedItem.start,callback:function(e){t.$set(t.editedItem,"start",e)},expression:"editedItem.start"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(w.a,{attrs:{label:"Priority","thumb-label":"",min:"0",max:"10"},model:{value:t.editedItem.priority,callback:function(e){t.$set(t.editedItem,"priority",e)},expression:"editedItem.priority"}})],1)],1),t._v(" "),e(f.a,[e(S.a,{attrs:{label:"Description","auto-grow":"",dense:"",clearable:""},model:{value:t.editedItem.description,callback:function(e){t.$set(t.editedItem,"description",e)},expression:"editedItem.description"}})],1)],1)],1),t._v(" "),e(r.a,[e(_.a),t._v(" "),e(n.a,{attrs:{text:""},on:{click:t.close}},[t._v(" Cancel ")]),t._v(" "),e(n.a,{attrs:{text:""},on:{click:t.save}},[t._v(" Save ")]),t._v(" "),e(_.a)],1)],1)],1),t._v(" "),e(h.a,{attrs:{"max-width":"700px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(l.a,{staticClass:"pb-2"},[e(r.c,[t._v("Remove task")]),t._v(" "),e(r.b,[t._v('\n                  Are you sure you want to remove task "'+t._s(t.editedItem.title)+'"?\n                ')]),t._v(" "),e(r.a,[e(_.a),t._v(" "),e(n.a,{attrs:{text:""},on:{click:t.closeDelete}},[t._v("Cancel")]),t._v(" "),e(n.a,{attrs:{text:""},on:{click:t.deleteItemConfirm}},[t._v("OK")]),t._v(" "),e(_.a)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(o){var n=o.item;return[e(v.a,{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(n)}}},[t._v("\n            mdi-pencil\n          ")]),t._v(" "),e(v.a,{attrs:{small:""},on:{click:function(e){return t.deleteItem(n)}}},[t._v(" mdi-delete ")])]}}],null,!1,1584066305)})],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12",sm:"2"}},[e(k.a,{staticClass:"px-4 py-2",attrs:{rounded:"lg"}},[e(r.c,{staticClass:"text-h6"},[t._v("Settings")]),t._v(" "),e(x.a,{attrs:{dense:"",label:"Multi-sort"},model:{value:t.multiSort,callback:function(e){t.multiSort=e},expression:"multiSort"}}),t._v(" "),e(x.a,{attrs:{dense:"",label:"Dense"},model:{value:t.dense,callback:function(e){t.dense=e},expression:"dense"}}),t._v(" "),e(x.a,{attrs:{dense:"",disabled:!t.dense,label:"Auto-dense"},model:{value:t.autoDense,callback:function(e){t.autoDense=e},expression:"autoDense"}}),t._v(" "),e(w.a,{attrs:{disabled:!t.autoDense||!t.dense,"thumb-label":"",dense:"",max:"50"},model:{value:t.autoDenseLimit,callback:function(e){t.autoDenseLimit=e},expression:"autoDenseLimit"}}),t._v(" "),e(x.a,{attrs:{dense:"",label:"Filter-time"},model:{value:t.filterTime,callback:function(e){t.filterTime=e},expression:"filterTime"}}),t._v(" "),e(x.a,{attrs:{dense:"",label:"Show additional settings"},model:{value:t.showDisplaySettings,callback:function(e){t.showDisplaySettings=e},expression:"showDisplaySettings"}}),t._v(" "),t.showDisplaySettings?e("div",[e(x.a,{attrs:{dense:"",label:"Show title"},model:{value:t.showTitle,callback:function(e){t.showTitle=e},expression:"showTitle"}}),t._v(" "),e(x.a,{attrs:{dense:"",label:"Show description"},model:{value:t.showDescription,callback:function(e){t.showDescription=e},expression:"showDescription"}}),t._v(" "),e(x.a,{attrs:{dense:"",label:"Show start time"},model:{value:t.showStart,callback:function(e){t.showStart=e},expression:"showStart"}}),t._v(" "),e(x.a,{attrs:{dense:"",label:"Show priority"},model:{value:t.showPriority,callback:function(e){t.showPriority=e},expression:"showPriority"}}),t._v(" "),e(x.a,{attrs:{dense:"",label:"Show actions"},model:{value:t.showActions,callback:function(e){t.showActions=e},expression:"showActions"}})],1):t._e(),t._v(" "),e(x.a,{attrs:{dense:"",label:"Show JSON"},model:{value:t.showJson,callback:function(e){t.showJson=e},expression:"showJson"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},573:function(t,e,o){"use strict";o.r(e);var n={name:"IndexPage",components:{AppTimetable:o(459).default}},l=o(89),component=Object(l.a)(n,(function(){return(0,this._self._c)("AppTimetable")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppTimetable:o(459).default})}}]);