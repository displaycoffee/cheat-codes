const dcBannerCodeGenerator = {
	activeClass: 'dc-banner-code-generator-active',
	toggleClass: (state, element) => {
		// Add or remove classes
		if (state == 'add') {
			element.classList.add(dcBannerCodeGenerator.activeClass);
		}
		if (state == 'remove') {
			element.classList.remove(dcBannerCodeGenerator.activeClass);
		}
	},
	build: (image, code, site) => {
		// Set image attributes if available
		const setImageAttr = (attribute) => {
			const value = image.getAttribute(attribute) ? image.getAttribute(attribute) : false;
			return value ? ` ${attribute}="${value}"` : ``;
		};

		// Build code for code block
		const imageCode = `&lt;img${setImageAttr('src')}${setImageAttr('alt')}${setImageAttr('title')} /&gt;`;
		const output = `&lt;a href="${site}"&gt;\u000D\u0009${imageCode}\u000D&lt;/a&gt;`;
		code.innerHTML = output;
	},
	click: (e, code, site, buttons) => {
		// Get current image
		const selector = e.target || e.srcElement;
		const currentButton = selector.nodeName == 'IMG' ? selector.parentNode : selector;
		const currentImage = selector.nodeName == 'BUTTON' ? selector.querySelector('img') : selector;

		// Check matches and active class
		const hasMatch = currentButton && currentImage;
		const hasClass = currentButton && currentButton.classList.contains(dcBannerCodeGenerator.activeClass);

		// If there is a match and if the current button doesn't have active class, proceed
		if (hasMatch && !hasClass) {
			// Loop through all the buttons and content blocks and remove any active class
			buttons.forEach((button) => {
				if (button.classList.contains(dcBannerCodeGenerator.activeClass)) {
					dcBannerCodeGenerator.toggleClass('remove', button);
				}
			});

			// Then add active class to new button and content block
			dcBannerCodeGenerator.toggleClass('add', currentButton);

			// Set new image code
			dcBannerCodeGenerator.build(currentImage, code, site);
		}
	},
	init: (generatorOptions) => {
		// Ensure options for generator are set
		const options = {
			default: 1,
			site: '/',
			container: '.dc-banner-code-generator',
			buttons: '.dc-banner-code-generator-button',
			code: '.dc-banner-code-generator-code code',
			select: '.dc-banner-code-generator-select-code',
		};

		// Enable options override
		if (generatorOptions) {
			if (generatorOptions.default) {
				options.default = generatorOptions.default;
			}
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
			if (generatorOptions.select) {
				options.select = generatorOptions.select;
			}
		}

		// Set generator selector
		const generators = document.querySelectorAll(options.container);

		if (generators && generators.length !== 0) {
			generators.forEach((generator) => {
				const code = generator.querySelector(options.code);
				const buttons = generator.querySelectorAll(options.buttons);
				const select = generator.querySelector(options.select);

				if (code && buttons && buttons.length !== 0) {
					// Get default index
					const defaultIndex = options.default - 1;

					// Set default button and add active class
					const defaultButton = buttons[defaultIndex] ? buttons[defaultIndex] : buttons[0];
					dcBannerCodeGenerator.toggleClass('add', defaultButton);

					// Set initial code
					dcBannerCodeGenerator.build(defaultButton.querySelector('img'), code, options.site);

					// Loop through all banner buttons and attach click event
					buttons.forEach((button) => {
						button.onclick = (e) => {
							dcBannerCodeGenerator.click(e, code, options.site, buttons);
						};
					});
				}

				// Add button click for selecting code
				if (code && select) {
					select.onclick = () => {
						const range = document.createRange();
						range.selectNodeContents(code);
						const selection = window.getSelection();
						selection.removeAllRanges();
						selection.addRange(range);
					};
				}
			});
		}
	},
};
