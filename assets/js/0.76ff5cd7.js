(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{76:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v("Fractal provides the option to export the web UI view into static HTML files, which can quickly and easily be shared with clients or hosted using a simple static file server.")]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),s("p",[t._v("When developing locally you'll want to use the "),s("router-link",{attrs:{to:"./development-server.html"}},[t._v("local development server")]),t._v(" to preview your project while you work on it, rather than running repeated exports after changes have been made.")],1)]),t._m(1),s("p",[t._v("Before you can run the build step you need to set a build destination for your Fractal instance:")]),t._m(2),t._m(3),s("p",[t._v("You can either start the export using the Fractal CLI tool (if you are using it) or programmatically using Fractal's API.")]),t._m(4),t._m(5),t._m(6),s("p",[t._v("You can provide the following optional command line options to override the default configuration:")]),t._m(7),t._m(8),s("p",[t._v("If you wish to start the export process programmatically, (often useful for "),s("router-link",{attrs:{to:"../integration/build-tools.html"}},[t._v("build tool")]),t._v(" integrations), you can create a new builder instance using the "),s("router-link",{attrs:{to:"../../api/endpoints/fractal-web.html#builder"}},[s("code",[t._v("fractal.web.builder()")])]),t._v(" method and then start it as required:")],1),t._m(9),s("p",[t._v("The "),s("router-link",{attrs:{to:"../../api/entities/builder.html"}},[s("code",[t._v("Builder")])]),t._v(" object returned by the call to "),s("code",[t._v("fractal.web.builder()")]),t._v(" is a Node EventEmitter and will emit error events (and others) that you can bind to. See the "),s("router-link",{attrs:{to:"../../api/endpoints/fractal-web.html"}},[s("code",[t._v("fractal.web")])]),t._v(" API docs for full details.")],1)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"exporting-to-static-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-to-static-html","aria-hidden":"true"}},[this._v("#")]),this._v(" Exporting to static HTML")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("fractal"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'builder.dest'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname "),s("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'/build'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"running-the-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-the-build","aria-hidden":"true"}},[this._v("#")]),this._v(" Running the build")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"using-the-cli-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli-tool","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the CLI tool")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("You can use the "),a("code",[this._v("build")]),this._v(" command from within the root of your project to get the server up and running:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[this._v("fractal build\n")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("-t, --theme <theme-name>")]),this._v(" - a custom theme to use.")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"programmatically"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#programmatically","aria-hidden":"true"}},[this._v("#")]),this._v(" Programmatically")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" builder "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" fractal"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("builder")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbuilder"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("build")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("then")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token template-string"}},[s("span",{attrs:{class:"token string"}},[t._v("`Fractal static HTML build complete!`")])]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])}],!1,null,null,null);a.default=n.exports}}]);