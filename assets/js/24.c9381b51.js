(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{78:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),a("p",[t._v("By default, when Fractal renders a component, it does so without wrapping it in any 'page' structure markup.")]),t._m(1),t._m(2),t._m(3),a("p",[t._v("Preview layouts are just another component, and so must reside in your component directory. Like any other components, preview layouts can be hidden by prefixing their name with an underscore if you don't want them to show up in listings or navigation.")]),t._m(4),t._m(5),a("p",[t._v("The contents of that file might look something like this:")]),t._m(6),t._m(7),t._m(8),a("div",{pre:!0},[a("p",[t._v("We can also see that the layout is including a stylesheet. The "),a("code",[t._v("href")]),t._v(" attribute value of the stylesheet "),a("code",[t._v("link")]),t._v(" element is being generated by a Handlebars helper - "),a("code",[t._v("{{ path '/example.css' }}")]),t._v(". For details on this and how to link to static assets such as CSS, JavaScript files and images from your preview layouts and view templates, see the "),a("router-link",{attrs:{to:"../web/#static-assets"}},[t._v("documentation on static assets")]),t._v(".")],1)]),a("p",[t._v("You can put as much or as little as you want into your preview layouts, but it's recommended that they match up as much as possible to the 'real' template that your components will be rendered in when used in your site.")]),t._m(9),a("p",[t._v("You can specify a default preview layout to use on a global basis or on a "),a("router-link",{attrs:{to:"./configuration-reference.html#preview"}},[t._v("component-by-component basis")]),t._v(" (allowing different layouts for different use-cases).")],1),a("p",[t._v("You can also take advantage of the "),a("router-link",{attrs:{to:"../core-concepts/configuration-files.html#configuration-inheritance"}},[t._v("configuration cascade")]),t._v(" and specify preview layouts on a per-collection basis as the default for all components in that collection.")],1),t._m(10),t._m(11),a("p",[t._v("You can set the default preview layout on your Fractal instance using the "),a("router-link",{attrs:{to:"../core-concepts/naming.html#referencing-other-items"}},[t._v("@handle reference")]),t._v(" for the chosen layout.")],1),t._m(12),t._m(13),a("p",[t._v("All components within this collection will have this set as their default preview layout unless the specifically override it.")]),t._m(14),t._m(15),a("p",[t._v("Setting it directly in a component's config file will override any defaults set further upstream.")]),t._m(16),t._m(17),a("p",[t._v("Preview layouts are just components and can have their own configuration files associated with them, just like any other components. That means you can specify context data for the layout in the configuration file, and you will be able to access it from within the layout.")]),t._m(18),t._m(19),t._m(20),a("p",[t._v("Having access to this means that you can do things like dynamically set the page title of your layout based on the component being rendered. For instance, in your layout template you could do:")]),t._m(21),a("p",[t._v("Your page title would then match the component being rendered.")]),t._m(22),a("p",[t._v("It may be useful to understand the exact rendering order when a preview layout is used. The rendering works as follows:")]),t._m(23)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"preview-layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preview-layouts","aria-hidden":"true"}},[this._v("#")]),this._v(" Preview Layouts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("That means that it is effectively an HTML "),e("em",[this._v("fragment")]),this._v(", as opposed to an HTML "),e("em",[this._v("page")]),this._v(". As a result, your components will appear unstyled; Fractal "),e("strong",[this._v("does not")]),this._v(" automatically insert any styles or behaviour into the rendered markup.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In order to faithfully render a component in the same way as it will look in your live site, Fractal supports the use of "),e("strong",[this._v("preview layouts")]),this._v(". These are used when rendering component previews, and allow you to 'wrap' your component in some page markup so you can do things like link to your stylesheets, JavaScript files and so on, just as you would in your site proper.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-a-preview-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-preview-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a preview layout")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For example, we could create a preview layout called "),e("code",[this._v("_preview.hbs")]),this._v(" in the root our components directory:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("├── components\n│   └── _preview.hbs\n")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-handlebars"}},[a("code",[a("span",{attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("media")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("all"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),a("span",{attrs:{class:"token handlebars language-handlebars"}},[a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("path")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/example.css'")]),t._v(" "),a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Preview Layout"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token handlebars language-handlebars"}},[a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{{")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("yield")]),t._v(" "),a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}}")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{pre:!0},[e("p",[this._v("Note the "),e("code",[this._v("{{{ yield }}}")]),this._v(" placeholder. That is where the rendered component will be included into the final generated markup.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("The triple "),e("code",[this._v("{{{")]),this._v(" mustache tags around the "),e("code",[this._v("yield")]),this._v(" placeholder are required so that handlebars does not automatically escape the rendered HTML of the component - if you are using a different templating language then you may need a different syntax to prevent the template engine from escaping the output.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"specifying-a-preview-layout-for-a-component"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#specifying-a-preview-layout-for-a-component","aria-hidden":"true"}},[this._v("#")]),this._v(" Specifying a preview layout for a component")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In all cases, the preview layout must be referenced by the "),e("strong",[this._v("handle")]),this._v(" of the layout component.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"global-default-preview-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#global-default-preview-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Global (default) preview layout")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("fractal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("set")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'default.preview'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'@preview'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"in-a-parent-collection-s-configuration-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in-a-parent-collection-s-configuration-file","aria-hidden":"true"}},[this._v("#")]),this._v(" In a parent collection's configuration file")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// patterns.config.json")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token string"}},[t._v('"preview"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@preview"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"in-a-component-s-configuration-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#in-a-component-s-configuration-file","aria-hidden":"true"}},[this._v("#")]),this._v(" In a component's configuration file")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("// component.config.json")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token string"}},[t._v('"preview"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"@preview"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"context-in-preview-layouts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#context-in-preview-layouts","aria-hidden":"true"}},[this._v("#")]),this._v(" Context in preview layouts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You "),e("strong",[this._v("will not")]),this._v(" be able to access the layout's context data from within the component that is being rendered. The component is not "),e("em",[this._v("included")]),this._v(" as a partial in the layout, but rather rendered first and then passed in as a property on the layout's context data.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"the-target-property"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-target-property","aria-hidden":"true"}},[this._v("#")]),this._v(" The "),e("code",[this._v("_target")]),this._v(" property")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Preview layouts, when rendered as a layout and not as a component on their own, will have access to a special context property called "),e("code",[this._v("_target")]),this._v(". This is a JSON representation of whichever component or variant is being rendered within the layout.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-handlebars"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token handlebars language-handlebars"}},[a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("{{")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("_target")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token variable"}},[t._v("label")]),t._v(" "),a("span",{attrs:{class:"token delimiter punctuation"}},[t._v("}}")])]),t._v(" | My Component Library"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"preview-rendering-details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preview-rendering-details","aria-hidden":"true"}},[this._v("#")]),this._v(" Preview rendering details")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ol",[a("li",[t._v("The component view is rendered, using its own set of context data.")]),a("li",[t._v("The rendered output is assigned to a special property, "),a("code",[t._v("yield")]),t._v(", which is attached to the preview layout's context data.")]),a("li",[t._v("A JSON representation of the component being rendered is assigned to the "),a("code",[t._v("_target")]),t._v(" property of the layout's context data.")]),a("li",[t._v("The layout view file is rendered using its own preview context data, complete with the additional "),a("code",[t._v("yield")]),t._v(" and "),a("code",[t._v("_target")]),t._v(" properties.")])])}],!1,null,null,null);e.default=n.exports}}]);