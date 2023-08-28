(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{331:function(t,s,a){"use strict";a.r(s);var e=a(0),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Excel 的导入导出都是依赖于"),s("a",{attrs:{href:"https://github.com/SheetJS/js-xlsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("js-xlsx"),s("OutboundLink")],1),t._v("来实现的。")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("js-xlsx")]),t._v("的基础上又封装了"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/vendor/Export2Excel.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("Export2Excel.js"),s("OutboundLink")],1),t._v("来方便导出数据。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("所以你先需要安装如下命令：")]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意 "),s("Badge",{attrs:{text:"v3.9.1+"}})],1),t._v(" "),s("p",[t._v("在"),s("code",[t._v("v3.9.1+")]),t._v("以后的版本中移除了对 Blob 的兼容性代码，如果你还需要兼容很低版本的浏览器可以手动引入"),s("a",{attrs:{href:"https://www.npmjs.com/package/blob-polyfill",target:"_blank",rel:"noopener noreferrer"}},[t._v("blob-polyfill"),s("OutboundLink")],1),t._v("进行兼容。")])]),t._v(" "),t._m(7),t._v(" "),s("table",[t._m(8),t._v(" "),s("tbody",[t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("tr",[s("td",[t._v("bookType")]),t._v(" "),s("td",[t._v("导出文件类型")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("xlsx, csv, txt, "),s("a",{attrs:{href:"https://github.com/SheetJS/js-xlsx#supported-output-formats",target:"_blank",rel:"noopener noreferrer"}},[t._v("more"),s("OutboundLink")],1)]),t._v(" "),s("td",[t._v("xlsx")])])])]),t._v(" "),t._m(13),t._v(" "),t._m(14),s("ul",[s("li",[s("a",{attrs:{href:"https://adempiere.github.io/adempiere-vue/#/excel/export-excel",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线 DEMO"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/views/excel/export-excel.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线代码"),s("OutboundLink")],1)])]),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("封装了"),s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/components/UploadExcel/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("UploadExcel"),s("OutboundLink")],1),t._v("Excel 导入组件，支持点击和拖拽上传，同样它也是依赖"),s("code",[t._v("js-xlsx")]),t._v("的。")]),t._v(" "),s("p",[t._v("它提供了两个回调函数：")]),t._v(" "),t._m(16),t._v(" "),t._m(17),s("ul",[s("li",[s("a",{attrs:{href:"https://adempiere.github.io/adempiere-vue/#/excel/upload-excel",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线 DEMO"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/views/excel/upload-excel.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("在线代码"),s("OutboundLink")],1)])])])}),[function(){var t=this._self._c;return t("h1",{attrs:{id:"excel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#excel"}},[this._v("#")]),this._v(" Excel")])},function(){var t=this._self._c;return t("h2",{attrs:{id:"excel-导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#excel-导出"}},[this._v("#")]),this._v(" Excel 导出")])},function(){var t=this._self._c;return t("h3",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[this._v("#")]),this._v(" 使用")])},function(){var t=this,s=t._self._c;return s("p",[t._v("由于 "),s("code",[t._v("Export2Excel")]),t._v("不仅依赖"),s("code",[t._v("js-xlsx")]),t._v("还依赖"),s("code",[t._v("file-saver")]),t._v("和"),s("code",[t._v("script-loader")]),t._v("。")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xlsx file-saver "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" script-loader "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-S")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v("\n")])])])},function(){var t=this._self._c;return t("p",[this._v("由于"),t("code",[this._v("js-xlsx")]),this._v("体积还是很大的，导出功能也不是一个非常常用的功能，所以使用的时候建议使用懒加载。使用方法如下：")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/vendor/Export2Excel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("excel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  excel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export_json_to_excel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表头 必填")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//具体数据 必填")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'excel-list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("autoWidth")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bookType")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xlsx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数"}},[this._v("#")]),this._v(" 参数")])},function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("header")]),t._v(" "),s("td",[t._v("导出数据的表头")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("/")]),t._v(" "),s("td",[t._v("[]")])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("data")]),t._v(" "),s("td",[t._v("导出的具体数据")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("/")]),t._v(" "),s("td",[t._v("[]]")])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("filename")]),t._v(" "),s("td",[t._v("导出文件名")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("/")]),t._v(" "),s("td",[t._v("excel-list")])])},function(){var t=this,s=t._self._c;return s("tr",[s("td",[t._v("autoWidth")]),t._v(" "),s("td",[t._v("单元格是否要自适应宽度")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("true / false")]),t._v(" "),s("td",[t._v("true")])])},function(){var t=this._self._c;return t("h3",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[this._v("#")]),this._v(" 示例")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/vendor/Export2Excel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("excel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" tHeader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Author'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Readings'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Date'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("list\n  excel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("export_json_to_excel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("header")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" tHeader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//表头 必填")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//具体数据 必填")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'excel-list'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("autoWidth")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bookType")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xlsx'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//非必填")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"excel-导入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#excel-导入"}},[this._v("#")]),this._v(" Excel 导入")])},function(){var t=this,s=t._self._c;return s("ul",[s("li",[s("p",[t._v("beforeUpload")]),t._v(" "),s("p",[t._v("你可以在上传之前做一些自己的特殊判断，如判断文件的大小是否大于 1 兆？若大于 1 兆则停止解析并提示错误信息。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeUpload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" isLt1M "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isLt1M"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$message")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Please do not upload files larger than 1m in size.'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'warning'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("onSuccess\n解析成功时候会触发的回调函数，它会返回表格的表头和内容。")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleSuccess")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" results"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" header "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" results\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tableHeader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" header\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=r.exports}}]);