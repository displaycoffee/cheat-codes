/* React */
import React, { useState, useEffect } from 'react';

export const BannerCodeGenerator = (props) => {
	let { banners, defaultBanner, site } = props;
	site = typeof site == 'undefined' ? '/' : site;
	const activeClass = 'dc-banner-code-generator-active';
	const hasBanners = banners && banners.length !== 0 ? true : false;

	// Since array of banners is nested, create and array that combines values
	let allBanners = [];
	if (hasBanners) {
		banners.forEach((banner, index) => {
			if (banner.values && banner.values.length !== 0) {
				banner.values.forEach((value) => {
					// Add a group for checking section later, then push to allBanners
					value.group = index;
					allBanners.push(value);
				});
			}
		});
	}

	// Then set default banner
	const defaultIndex = typeof defaultBanner == 'undefined' ? 0 : defaultBanner - 1;
	defaultBanner = allBanners[defaultIndex] ? defaultIndex : 0;
	let [activeBanner, setActiveBanner] = useState(defaultBanner);

	// Create code output
	const createOutput = (image) => {
		// Set image attributes if available
		const setImageAttr = (attribute) => {
			const value = image[attribute] ? image[attribute] : false;
			return value ? ` ${attribute}="${value}"` : ``;
		};

		// Return code output
		return (
			<>
				{`\u003Ca href="${site}"\u003E`}
				<br />
				{`\u0009\u003Cimg${setImageAttr('src')}${setImageAttr('alt')}${setImageAttr('title')} /\u003E`}
				<br />
				{`\u003C/a\u003E`}
			</>
		);
	};

	// Set code output
	let [output, setOutput] = useState(createOutput(allBanners[activeBanner]));

	// Whenever active banner changes, update output
	useEffect(() => {
		output = createOutput(allBanners[activeBanner]);
		setOutput(output);
	}, [activeBanner]);

	return hasBanners ? (
		<>
			<div className="dc-banner-code-generator displaycoffee">
				{banners.map((banner, index) => {
					return banner.values && banner.values.length !== 0 ? (
						<section className="dc-banner-code-generator-section" key={index}>
							<h5>{banner.header}</h5>

							<div className="dc-banner-code-generator-banners">
								{allBanners.map((value, valueIndex) => {
									return value.group == index ? (
										<button
											className={`dc-banner-code-generator-button${valueIndex == activeBanner ? ` ${activeClass}` : ``}`}
											type="button"
											onClick={() => {
												// Update banner on click
												activeBanner = valueIndex;
												setActiveBanner(activeBanner);
											}}
											key={valueIndex}
										>
											<img
												src={value?.src ? value.src : ''}
												alt={value?.alt ? value.alt : ''}
												title={value?.title ? value.title : ''}
											/>
										</button>
									) : null;
								})}
							</div>
						</section>
					) : null;
				})}

				<div className="dc-banner-code-generator-code">
					<pre>
						<code>{output}</code>
					</pre>
				</div>
			</div>
		</>
	) : null;
};
