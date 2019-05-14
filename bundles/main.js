System.register(['inferno'], function (exports, module) {
	'use strict';
	var createVNode;
	return {
		setters: [function (module) {
			createVNode = module.createVNode;
		}],
		execute: function () {

			exports('default', span);

			function span() {
			  return createVNode(1, "span", null, "text", 16);
			}

		}
	};
});
//# sourceMappingURL=main.js.map
