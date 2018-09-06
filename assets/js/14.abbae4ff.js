(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{88:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("Fractal makes it easy to create documentation for your project. Documentation pages are written in "),a("a",{attrs:{href:"https://guides.github.com/features/mastering-markdown/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github-flavoured Markdown")]),t._v(" and support the use of YAML 'front-matter' for configuration, as well as configuration via standard "),a("router-link",{attrs:{to:"../core-concepts/configuration-files.html"}},[t._v("configuration files")]),t._v(".")],1),a("p",[t._v("Additionally, if you need to generate more complex documentation, you can use a "),a("router-link",{attrs:{to:"../core-concepts/view-templates.html"}},[t._v("template language")]),t._v(" of your choosing (as for "),a("router-link",{attrs:{to:"../components/"}},[t._v("components")]),t._v(", the default is Handlebars) to help dynamically generate pages.")],1),a("p",[t._v("Pages can be organised into as many folders and sub-folders as is necessary for your project, but must all reside in the documentation folder that you have configured in your "),a("router-link",{attrs:{to:"../project-settings.html"}},[t._v("project settings")]),t._v(".")],1),t._m(1),a("p",[t._v("A very simple documentation page might look like this:")]),t._m(2),a("p",[t._v("Fractal will then take that and turn it into HTML ready for display:")]),t._m(3),a("p",[t._v("If there is no configuration data available (see below) then Fractal will generate metadata (such the title of the page) based on the file name.")]),t._m(4),t._m(5),t._m(6),a("p",[t._v("In this case we are specifying that we want the title of the page (used in the web UI and other places) to be 'Change Log'. To see a full list of available configuration items, check out the "),a("router-link",{attrs:{to:"../documentation/configuration-reference.html"}},[t._v("documentation configuration reference")]),t._v(".")],1),a("p",[t._v("If you don't want to use YAML front matter, you can also use a "),a("router-link",{attrs:{to:"../core-concepts/configuration-files.html"}},[t._v("separate configuration file")]),t._v(" in the same way as you would for a component.")],1),t._m(7),a("p",[t._v("Because pages are rendered using Handlebars (or another "),a("router-link",{attrs:{to:"../customisation/template-engines.html"}},[t._v("template engine")]),t._v(" of your choosing) before being run through the Markdown processor, you can easily dynamically generate sections of pages.")],1),a("p",[t._v("As for components, any "),a("router-link",{attrs:{to:"../core-concepts/context-data.html"}},[t._v("context data")]),t._v(" that you wish to have access to in the page must be specified under the "),a("code",[t._v("context")]),t._v(" property. You can then use Handlebars to generate content based on that data.")],1),a("p",[t._v("For instance, if you are using YAML front matter, you could re-create the example at the start of this page as follows:")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("This is to prevent page configuration data clashing with context data intended to be used when rendering the page.")]),t._m(13),t._m(14),t._m(15),t._m(16),a("p",[t._v("Order prefixes are ignored when auto-generating page titles.")]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),a("p",[t._v("Sometimes you may want to show a piece of code that itself contains a Handlebars expression, without that expression being parsed out at the rendering step. To do this you can prefix the expression with a backslash:")]),t._m(23),a("p",[t._v("This will prevent the Handlebars template engine from attempting to render that variable and will instead just keep it as a string.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"documentation-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#documentation-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" Documentation Pages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"a-simple-page"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-page","aria-hidden":"true"}},[this._v("#")]),this._v(" A simple page")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-markdown"}},[e("code",[this._v("This is some documentation for the project. Still to do:\n\n"),e("span",{attrs:{class:"token list punctuation"}},[this._v("*")]),this._v(" Finish the docs\n"),e("span",{attrs:{class:"token list punctuation"}},[this._v("*")]),this._v(" Write tests\n"),e("span",{attrs:{class:"token list punctuation"}},[this._v("*")]),this._v(" Make the tea\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("This is some documentation for the project. Still to do:"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Finish the docs"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Write tests"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Make the tea"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"yaml-front-matter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yaml-front-matter","aria-hidden":"true"}},[this._v("#")]),this._v(" YAML front-matter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("YAML 'front-matter' is a way of specifying configuration data at the top of a markdown file. It is a block of YAML that is fenced-off from the rest of the document via triple hyphen ("),e("code",[this._v("---")]),this._v(") separators. For example:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[this._v("---")]),this._v("\n"),e("span",{attrs:{class:"token key atrule"}},[this._v("title")]),e("span",{attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" Change Log\n"),e("span",{attrs:{class:"token punctuation"}},[this._v("---")]),this._v("\nThis is the body of the page\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-data-in-page-templates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-data-in-page-templates","aria-hidden":"true"}},[this._v("#")]),this._v(" Using data in page templates")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-handlebars"}},[a("code",[t._v("---\ntitle: Project Overview\ncontext:\n  items:\n    - Finish the docs\n    - Write tests\n    - Make the tea\n---\nThis is some documentation for the project. Still to do:\n\n"),a("span",{attrs:{class:"token handlebars language-handlebars"}},[a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),a("span",{attrs:{class:"token block keyword"}},[t._v("#each")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("items")]),a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n* "),a("span",{attrs:{class:"token handlebars language-handlebars"}},[a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("this")]),t._v(" "),a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n"),a("span",{attrs:{class:"token handlebars language-handlebars"}},[a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),a("span",{attrs:{class:"token block keyword"}},[t._v("/each")]),a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("It's important to note that the template engine rendering happens "),e("strong",[this._v("before")]),this._v(" the Markdown parsing, so you are free to use it to generate Markdown or HTML (which is ignored by Markdown parsers).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"accessing-page-metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#accessing-page-metadata","aria-hidden":"true"}},[this._v("#")]),this._v(" Accessing page metadata")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Pages only have direct access to data specified within the "),e("code",[this._v("context")]),this._v(" object. If you need to access information about the page itself (such as the "),e("code",[this._v("title")]),this._v(") you have to use the special "),e("code",[this._v("_self")]),this._v(" variable, as follows:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-handlebars"}},[a("code",[a("span",{attrs:{class:"token handlebars language-handlebars"}},[a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("_self")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token variable"}},[t._v("title")]),t._v(" "),a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("\x3c!-- Outputs: Project Overview --\x3e")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note that the "),e("code",[this._v("_self")]),this._v(" variable is actually a JSON representation of the page object itself, and not just a regurgitation of configuration data (i.e. "),e("code",[this._v("title")]),this._v(" will have a value whether or not it is overridden in the configuration, as Fractal generates one for every page).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ordering-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ordering-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" Ordering pages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Pages can be ordered by prefixing file names with a "),e("strong",[this._v("two digit number")]),this._v(" (with leading zero, if required) "),e("strong",[this._v("followed by a hyphen")]),this._v(". For example:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── pages\n│   ├── 01-index.md\n│   ├── 02-changelog.md\n│   └── 03-naming-conventions.md\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Alternatively, you can use the "),e("code",[this._v("order")]),this._v(" property in the page's configuration file to specify an order without amending the filename.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hiding-pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hiding-pages","aria-hidden":"true"}},[this._v("#")]),this._v(" Hiding pages")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Pages can be hidden from listings and navigation in two ways. You can either specify "),e("code",[this._v("hidden: true")]),this._v(" in the pages's configuration file or you can prefix the page's filename with an underscore. So in the following example, the "),e("code",[this._v("changelog")]),this._v(" page would not show up in any navigation:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── pages\n│   ├── _changelog.md\n│   ├── index.md\n│   └── naming-conventions.md\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),a("p",[t._v("You can also combine "),a("em",[t._v("ordering")]),t._v(" and "),a("em",[t._v("hiding")]),t._v(" by constructing a filename such as "),a("code",[t._v("_01-changelog.md")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"escaping-handlebars-expressions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#escaping-handlebars-expressions","aria-hidden":"true"}},[this._v("#")]),this._v(" Escaping Handlebars expressions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-handlebars"}},[e("code",[this._v("\\"),e("span",{attrs:{class:"token handlebars language-handlebars"}},[e("span",{attrs:{class:"token delimiter punctuation"}},[this._v("{{")]),this._v(" "),e("span",{attrs:{class:"token variable"}},[this._v("foo")]),this._v(" "),e("span",{attrs:{class:"token delimiter punctuation"}},[this._v("}}")])]),this._v("\n")])])}],!1,null,null,null);e.default=n.exports}}]);