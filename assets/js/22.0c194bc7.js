(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{80:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),e("p",[t._v("Components, documentation pages and collections can all have their own (optional) configuration files associated with them.")]),e("p",[t._v("In order to be recognised, configuration files must:")]),t._m(1),t._m(2),e("p",[t._v("The available configuration options depend on the type of the item being configured. See the relevant configuration reference for details:")]),e("ul",[e("li",[e("router-link",{attrs:{to:"../components/configuration-reference.html"}},[t._v("Components")])],1),e("li",[e("router-link",{attrs:{to:"../documentation/configuration-reference.html"}},[t._v("Pages")])],1),e("li",[e("router-link",{attrs:{to:"../collections/configuration-reference.html"}},[t._v("Collection")])],1)]),t._m(3),t._m(4),e("p",[t._v("The latter is recommended as it offers a lot more flexibility, but you may want to choose JSON or YAML if you have a particular need to keep things simple and declarative.")]),t._m(5),t._m(6),e("p",[t._v("Using the JavaScript (CommonJS) module format for your configuration files is a little more involved than using JSON or YAML, but is a "),e("strong",[t._v("lot more powerful")]),t._v(" as it allows you to do things like dynamically generating component "),e("router-link",{attrs:{to:"./context-data.html"}},[t._v("context data")])],1),e("p",[t._v("The file itself should be in the format of a Node CommonJS-style module that exports a configuration object. If you don't know what that is, don't worry! Just make sure its contents look like this:")]),t._m(7),e("p",[t._v("For example, a component configuration file in this format might look like this:")]),t._m(8),t._m(9),t._m(10),e("p",[t._v("See the "),e("router-link",{attrs:{to:"./context-data.html"}},[t._v("context data documentation")]),t._v(" for more details on ways to make use of this powerful feature.")],1),t._m(11),t._m(12),e("p",[t._v("A simple example of a JSON-formatted config file for a component might look like:")]),t._m(13),t._m(14),t._m(15),t._m(16),e("p",[t._v("A simple example of a YAML-formatted config file for a component might look like:")]),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),e("p",[t._v("Pages and components each have different properties that can be inherited - see their respective configuration docs for details.")]),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),e("p",[t._v("Similarly, context data is inherited and merged from upstream sources. For example, the following example set of configuration data:")]),t._m(28),e("p",[t._v("Would result in the resolved, aggregate context of the component looking like:")]),t._m(29)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"configuration-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration Files")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("Reside in the same directory as the item that they are configuring")]),e("li",[t._v("Have a file name in the format "),e("code",[t._v("item-name.config.{js|json|yml}")]),t._v(" - for example "),e("code",[t._v("button.config.json")]),t._v(", "),e("code",[t._v("patterns.config.js")]),t._v(" or "),e("code",[t._v("changelog.config.yml")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"available-configuration-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#available-configuration-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Available configuration options")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration-file-formats"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file-formats","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration file formats")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Configuration files can be formatted as "),s("a",{attrs:{href:"http://json.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("JSON")]),this._v(", "),s("a",{attrs:{href:"http://yaml.org/",target:"_blank",rel:"noopener noreferrer"}},[this._v("YAML")]),this._v(" or as a JavaScript file in the style of a CommonJS module that exports a configuration object.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"javascript-module-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-module-format","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript module format")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Configuration files authored in this format must have a filename that looks like "),s("code",[this._v("item-name.config.js")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{attrs:{class:"token comment"}},[t._v("// config data here")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("module"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),e("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\ttitle"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Sparkly Buttons"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tstatus"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"prototype"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcontext"),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"button-text"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Click me!"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"is-sparkly"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\t"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),s("p",[this._v("As this is JavaScript and not JSON, the exported object doesn't need to conform to the JSON specification's strict syntax rules for things like double quoting keys and so on.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Because it is just a JavaScript file, you can do things like use JavaScript to generate your context data for you, should you need to. Additionally, because it is imported as a NodeJS module, you can also "),s("code",[this._v("require")]),this._v(" any third party NPM modules (or even your own module files) to help with any data-generation - including doing things like fetching data form external APIs.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"json-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#json-format","aria-hidden":"true"}},[this._v("#")]),this._v(" JSON format")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Configuration files authored using JSON must have a filename that looks like "),s("code",[this._v("item-name.config.json")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{attrs:{class:"token property"}},[t._v('"title"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Sparkly Buttons"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{attrs:{class:"token property"}},[t._v('"status"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"prototype"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{attrs:{class:"token property"}},[t._v('"context"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{attrs:{class:"token property"}},[t._v('"button-text"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Click me!"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{attrs:{class:"token property"}},[t._v('"is-sparkly"')]),e("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\t"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("Note")]),s("p",[this._v("The file must be valid JSON, with double quoted property names and string values, and without any trailing commas, or it will throw an error when it is parsed.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"yaml-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yaml-format","aria-hidden":"true"}},[this._v("#")]),this._v(" YAML format")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Configuration files authored using YAML must have a filename that looks like "),s("code",[this._v("item-name.config.yml")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{attrs:{class:"token key atrule"}},[t._v("title")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Sparkly Buttons"')]),t._v("\n"),e("span",{attrs:{class:"token key atrule"}},[t._v("status")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"prototype"')]),t._v("\n"),e("span",{attrs:{class:"token key atrule"}},[t._v("context")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),e("span",{attrs:{class:"token key atrule"}},[t._v("button-text")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Click me!"')]),t._v("\n    "),e("span",{attrs:{class:"token key atrule"}},[t._v("is-sparkly")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration-inheritance"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-inheritance","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration inheritance")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Some configuration items will have their values "),s("em",[this._v("inherited")]),this._v(" from upstream collections or their default settings if the values are not set in the item's configuration file directly.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This can also be thought of a "),s("em",[this._v("cascade")]),this._v(" of configuration values from their default settings down through any nested collection configurations and into the item itself.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Whilst this is a somewhat advanced concept, it can often be very useful to save having to set the same configuration values on multiple items. For example, if all components in a collection need to have their status set to "),s("code",[this._v("wip")]),this._v(" then rather than having to set it on each individual component you can just set it in the collection's configuration file and it will cascade down to the components. You can then override it on selected components if necessary.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"properties-with-primitive-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties-with-primitive-values","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties with primitive values")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Properties with primitive (i.e. non-object) values, if specified on a downstream entity, will "),s("strong",[this._v("override")]),this._v(" upstream values. For instance, to figure out the value of the "),s("code",[this._v("status")]),this._v(" property for a component, Fractal will do the following:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ol",[e("li",[t._v("Check if it is set directly in the component's configuration file. If so, use that.")]),e("li",[t._v("Otherwise, recursively work upwards to check any parent collections to see if any of them have a status set in its configuration. If one is found to have a "),e("code",[t._v("status")]),t._v(" specified, stop and use that.")]),e("li",[t._v("If no value for the "),e("code",[t._v("status")]),t._v(" is found, use the default value (which may or may not have been overridden in a "),e("code",[t._v("fractal.js")]),t._v(" file or similar).")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"properties-with-object-and-array-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties-with-object-and-array-values","aria-hidden":"true"}},[this._v("#")]),this._v(" Properties with object and array values")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Properties with object or array values are treated slightly differently. Instead of overriding upstream values, they are "),s("strong",[this._v("merged with them")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("For example, if a collection has been assigned the tags "),e("code",[t._v("['sprint-1', 'dashboard']")]),t._v(" and one of its child components has the tags "),e("code",[t._v("['dashboard', 'needs-review']")]),t._v(" specified in its component configuration, then the resolved, "),e("strong",[t._v("aggregate")]),t._v(" tag list for the component will be "),e("code",[t._v("['dashboard', 'needs-review', 'sprint-1']")]),t._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token comment"}},[t._v("// in the fractal.js configuration file")]),t._v("\nfractal"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("components"),e("span",{attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{attrs:{class:"token keyword"}},[t._v("set")]),e("span",{attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{attrs:{class:"token string"}},[t._v("'default.context'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{attrs:{class:"token string"}},[t._v("'background'")]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v("'sparkly'")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// in an upstream collection config file, e.g. patterns.config.json")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{attrs:{class:"token string"}},[t._v('"context"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"special-sauce"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"background"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"stars"')]),t._v("\n\t"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),e("span",{attrs:{class:"token comment"}},[t._v("// in the component configuration file, e.g. button.config.json")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{attrs:{class:"token string"}},[t._v('"context"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{attrs:{class:"token string"}},[t._v('"text"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Click here!"')]),t._v("\n\t"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{attrs:{class:"token string"}},[t._v('"background"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"stars"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{attrs:{class:"token string"}},[t._v('"special-sauce"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token boolean"}},[t._v("true")]),e("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{attrs:{class:"token string"}},[t._v('"text"')]),e("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{attrs:{class:"token string"}},[t._v('"Click here!"')]),t._v("\n"),e("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])}],!1,null,null,null);s.default=n.exports}}]);