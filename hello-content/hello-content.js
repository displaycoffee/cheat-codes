const dcHelloContent = {
	activeClass: 'dc-hello-content-active',
	toggleClass: (state, element) => {
		// Add or remove classes
		if (state == 'add') {
			element.classList.add(dcHelloContent.activeClass);
		}
		if (state == 'remove') {
			element.classList.remove(dcHelloContent.activeClass);
		}
	},
	click: (e, i, buttons, contents) => {
		// Get the current button and content elements
		const currentButton = e.target || e.srcElement;
		const currentContents = contents[i];

		// Check matches and active class
		const hasMatch = currentButton && currentContents;
		const hasClass = currentButton && currentButton.classList.contains(dcHelloContent.activeClass);

		// If there is a match and if the current button doesn't have active class, proceed
		if (hasMatch && !hasClass) {
			// Loop through all the buttons and content blocks and remove any active class
			buttons.forEach((button) => {
				if (button.classList.contains(dcHelloContent.activeClass)) {
					dcHelloContent.toggleClass('remove', button);
				}
			});
			contents.forEach((content) => {
				if (content.classList.contains(dcHelloContent.activeClass)) {
					dcHelloContent.toggleClass('remove', content);
				}
			});

			// Then add active class to new button and content block
			dcHelloContent.toggleClass('add', currentButton);
			dcHelloContent.toggleClass('add', currentContents);
		}
	},
	init: (tabOptions) => {
		// Ensure options for tabs are set
		const options = {
			default: 1,
			container: '.dc-hello-content-tabs',
			button: '.dc-hello-content-button',
			content: '.dc-hello-content-block',
		};

		// Enable options override
		if (tabOptions) {
			if (tabOptions.default) {
				options.default = tabOptions.default;
			}
			if (tabOptions.container) {
				options.container = tabOptions.container;
			}
			if (tabOptions.button) {
				options.button = tabOptions.button;
			}
			if (tabOptions.content) {
				options.content = tabOptions.content;
			}
		}

		// Set tab selector
		const tabSections = document.querySelectorAll(options.container);

		// Check if tabs sections are on the page
		if (tabSections && tabSections.length !== 0) {
			tabSections.forEach((tabs) => {
				// Get buttons and content elements
				const buttons = tabs.querySelectorAll(options.button);
				const contents = tabs.querySelectorAll(options.content);

				if (buttons && buttons.length !== 0 && contents && contents.length !== 0) {
					// Get default index
					const defaultIndex = options.default - 1;

					// Set default button and content block as active
					const defaultButton = buttons[defaultIndex] ? buttons[defaultIndex] : buttons[0];
					const defaultContent = contents[defaultIndex] ? contents[defaultIndex] : contents[0];
					dcHelloContent.toggleClass('add', defaultButton);
					dcHelloContent.toggleClass('add', defaultContent);

					// Loop through buttons and add functionality
					buttons.forEach((button, index) => {
						button.onclick = (e) => {
							dcHelloContent.click(e, index, buttons, contents);
						};
					});
				}
			});
		}
	},
};
