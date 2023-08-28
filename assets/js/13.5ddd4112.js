(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{217:function(t,a,e){"use strict";e.r(a);var s=e(0),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"paginacion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#paginacion"}},[t._v("#")]),t._v(" Paginación "),a("Badge",{attrs:{text:"v3.9.2+"}})],1),t._v(" "),a("p",[t._v("El componente de paginación se basa principalmente en el elemento 'el-pagination' para el empaquetado secundario, y expandió la función de desplazamiento automático (auto-scroll).")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("También se admite soporte de otros atributos del elemento "),a("code",[t._v("el-pagination")]),t._v(". Consulte la "),a("a",{attrs:{href:"http://element.eleme.io/#/zh-CN/component/pagination",target:"_blank",rel:"noopener noreferrer"}},[t._v("Documentación"),a("OutboundLink")],1),t._v(" para obtener más detalles.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://github.com/adempiere/adempiere-vue/blob/master/src/components/Pagination/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("Código fuente"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://adempiere.github.io/adempiere-vue/#/table/complex-table",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo en línea"),a("OutboundLink")],1)])])])])}),[function(){var t=this._self._c;return t("h2",{attrs:{id:"uso-basico"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uso-basico"}},[this._v("#")]),this._v(" Uso básico")])},function(){var t=this,a=t._self._c;return a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pagination")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":total")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":page.sync")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("listQuery.page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":limit.sync")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("listQuery.limit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@pagination")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("getList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Pagination "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@/components/Pagination'")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("components")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Pagination "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("total")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("listQuery")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("page")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("limit")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Obtener datos")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"atributos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#atributos"}},[this._v("#")]),this._v(" Atributos")])},function(){var t=this,a=t._self._c;return a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Atributo")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descripción")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Predeterminado")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("total")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("recuento total de artículos")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("/")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("page")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("número de página actual, soporta el modificador .sync")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("limit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Recuento de elementos de cada página, admite el modificador .sync")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("page-sizes")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Opciones de conteo de artículos por página")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Number []")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10, 20, 30, 50]")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("hidden")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("si ocultar")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("auto-scroll")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Si se desplaza automáticamente a la parte superior después de la paginación")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("true")])])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"eventos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#eventos"}},[this._v("#")]),this._v(" Eventos")])},function(){var t=this,a=t._self._c;return a("table",[a("thead",[a("tr",[a("th",[t._v("Nombre del evento")]),t._v(" "),a("th",[t._v("Descripción")]),t._v(" "),a("th",[t._v("Parámetros")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("pagination")]),t._v(" "),a("td",[t._v("Se dispara cuando cambia el límite o la página")]),t._v(" "),a("td",[t._v("{pagina, límite}")])])])])},function(){var t=this._self._c;return t("h2",{attrs:{id:"codigo-fuente-y-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#codigo-fuente-y-demo"}},[this._v("#")]),this._v(" Código fuente y Demo")])}],!1,null,null,null);a.default=n.exports}}]);