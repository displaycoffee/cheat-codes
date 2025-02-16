const dcHelloContent = {
	activeClass: 'dc-hello-content-active',
	toggleClass: function (state, element) {
		// Add or remove classes
		if (state == 'add') {
			element.classList.add(dcHelloContent.activeClass);
		}
		if (state == 'remove') {
			element.classList.remove(dcHelloContent.activeClass);
		}
	},
	click: function (e, i, buttons, content) {
		// Get the current button and content elements
		const currentButton = e.target || e.srcElement;
		const currentContent = content[i];

		// Check matches and active class
		const hasMatch = currentButton && currentContent ? true : false;
		const hasClass = currentButton && currentButton.classList.contains(dcHelloContent.activeClass) ? true : false;

		// If there is a match and if the current button doesn't have active class, proceed
		if (hasMatch && !hasClass) {
			// Loop through all the buttons and content blocks and remove any active class
			for (let j = 0; j < buttons.length; j++) {
				if (buttons[j].classList.contains(dcHelloContent.activeClass)) {
					dcHelloContent.toggleClass('remove', buttons[j]);
				}
			}
			for (let k = 0; k < content.length; k++) {
				if (content[k].classList.contains(dcHelloContent.activeClass)) {
					dcHelloContent.toggleClass('remove', content[k]);
				}
			}

			// Then add active class to new button and content block
			dcHelloContent.toggleClass('add', currentButton);
			dcHelloContent.toggleClass('add', currentContent);
		}
	},
	init: function (tabOptions) {
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
		const tabs = document.querySelector(options.container);

		// Check if selector is on the page
		if (tabs) {
			// Get buttons and content elements
			const buttons = tabs.querySelectorAll(options.button);
			const content = tabs.querySelectorAll(options.content);

			if (buttons && buttons.length !== 0 && content && content.length !== 0) {
				// Get default index
				const defaultIndex = options.default - 1;

				// Set default button and content block as active
				const defaultButton = buttons[defaultIndex];
				const defaultContent = content[defaultIndex];
				dcHelloContent.toggleClass('add', defaultButton);
				dcHelloContent.toggleClass('add', defaultContent);

				// Loop through buttons and add functionality
				for (let i = 0; i < buttons.length; i++) {
					// Store the current index
					const currentIndex = i;

					// Attach onclick event
					buttons[i].onclick = function (e) {
						dcHelloContent.click(e, currentIndex, buttons, content);
					};
				}
			}
		}
	},
};
