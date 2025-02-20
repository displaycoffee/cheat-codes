const dcBannerCodeGenerator = {
	build: (image, code, site) => {
		// Set image attributes
		const setImageAttr = (attribute) => {
			const value = image.getAttribute(attribute) ? image.getAttribute(attribute) : false;
			return value ? ` ${attribute}="${value}"` : ``;
		};

		// Build code for code block
		const imageCode = `&lt;img${setImageAttr('src')}${setImageAttr('alt')}${setImageAttr('title')} /&gt;`;
		const output = `&lt;a href="${site}"&gt;\u000D\u0009${imageCode}\u000D&lt;/a&gt;`;
		code.innerHTML = output;
	},
	click: (e, code, site) => {
		// Get current image
		const selector = e.target || e.srcElement;
		const image = selector.nodeName == 'BUTTON' ? selector.querySelector('img') : selector;

		// Set new image code
		dcBannerCodeGenerator.build(image, code, site);
	},
	init: (generatorOptions) => {
		// Ensure options for generator are set
		const options = {
			site: '/',
			container: '.dc-banner-code-generator',
			buttons: '.dc-banner-code-generator-buttons',
			code: '.dc-banner-code-generator-code code',
		};

		// Enable options override
		if (generatorOptions) {
			if (generatorOptions.site) {
				options.site = generatorOptions.site;
			}
			if (generatorOptions.container) {
				options.container = generatorOptions.container;
			}
			if (generatorOptions.buttons) {
				options.buttons = generatorOptions.buttons;
			}
			if (generatorOptions.code) {
				options.code = generatorOptions.code;
			}
		}

		// Set generator selector
		const generators = document.querySelectorAll(options.container);

		if (generators && generators.length !== 0) {
			generators.forEach((generator) => {
				const code = generator.querySelector(options.code);
				const buttons = generator.querySelectorAll(options.buttons);

				if (code && buttons && buttons.length !== 0) {
					// Set initial code
					dcBannerCodeGenerator.build(buttons[0].querySelector('img'), code, options.site);

					// Loop through all banner buttons and attach click event
					buttons.forEach((button) => {
						button.onclick = (e) => {
							dcBannerCodeGenerator.click(e, code, options.site);
						};
					});
				}
			});
		}
	},
};
