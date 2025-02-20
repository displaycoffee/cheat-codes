/* React */
import React, { useState } from 'react';

export const HelloContent = (props) => {
	let { tabs, defaultTab } = props;
	defaultTab = typeof defaultTab == 'undefined' ? 0 : defaultTab - 1;
	let [activeTab, setActiveTab] = useState(defaultTab);
	const activeClass = 'dc-banner-code-generator-active';

	return tabs && tabs.length !== 0 ? (
		<div className="dc-banner-code-generator-tabs displaycoffee">
			<div className="dc-banner-code-generator-tabs-buttons">
				<ul className="dc-banner-code-generator-tabs-list">
					{tabs.map((tab, index) => (
						<li key={index}>
							<button
								className={`dc-banner-code-generator-button${index == activeTab ? ` ${activeClass}` : ``}`}
								type="button"
								onClick={() => {
									// Update tab on click
									activeTab = index;
									setActiveTab(activeTab);
								}}
							>
								{tab.label}
							</button>
						</li>
					))}
				</ul>
			</div>

			<div className="dc-banner-code-generator-tabs-content">
				{tabs.map((tab, index) => {
					const contentClass = `dc-banner-code-generator-block${index == activeTab ? ` ${activeClass}` : ``}`;
					return (
						<React.Fragment key={index}>
							{tab.component ? (
								<div className={contentClass}>
									<tab.component />
								</div>
							) : (
								<div className={contentClass} dangerouslySetInnerHTML={{ __html: tab.content }}></div>
							)}
						</React.Fragment>
					);
				})}
			</div>
		</div>
	) : null;
};
