# WordPress Block Preview

This folder contains a preview of _almost all_ the WordPress Gutenberg blocks. I was wanting an all encompassing list of the blocks so that when building themes locally, I can test how the blocks look on a page or post. There are some snippets out there already, but they were older (and possibly outdated).

To use, click the three vertical dots in the upper right corner of the WordPress editor, switch to "Code editor", and copy and paste one of the snippets. I've broken out the snippets into block type, but if needed, all blocks can be found [here](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-all.html). I've noted which blocks are complete or which ones I'm ignoring.

| Icon | Status   |
| ---- | -------- |
| ✅   | Complete |
| ❌   | Ignoring |
| ❓   | Pending  |

Within the code, certain blocks appear more than once (like paragraph) because I've done variations of that block. Additionally, it's worth mentioning that you'll need to have dummy content for certain blocks to show anything (like "Latest posts" or "Comments link"). To do this, I used [FakerPress plugin](https://wordpress.org/plugins/fakerpress).

**Credits:**

- [Unsplash](https://unsplash.com/s/photos/random) for free images
- [Free Music Archive](https://freemusicarchive.org) for the [audio clip](https://freemusicarchive.org/music/lightning-traveler/origin-1/eclipsemp3-1)

**Related links:**

- [Blocks list](https://wordpress.org/documentation/article/blocks-list)
- [Block library source code](https://github.com/WordPress/gutenberg/tree/trunk/packages/block-library/src)

**Note:** if this helps you in any way, please feel free to "star" this repo or give me a follow. If not, no big deal.

### Text - [Code](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-text.html)

✅ Paragraph<br />
✅ Heading<br />
✅ List<br />
✅ Quote<br />
✅ Code<br />
✅ Details<br />
✅ Math<br />
✅ Preformatted<br />
✅ Pullquote<br />
✅ Table<br />
✅ Poetry<br />
❌ Classic - Not using in this preview.

### Media blocks - [Code](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-media.html)

✅ Image<br />
✅ Gallery<br />
✅ Audio<br />
✅ Cover<br />
✅ File<br />
✅ Media & text<br />
✅ Video<br />
✅ Icon

### Design blocks - [Code](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-design.html)

✅ Accordion<br />
✅ Buttons<br />
✅ Columns<br />
✅ Group<br />
✅ Row<br />
✅ Stack<br />
✅ Grid<br />
✅ More<br />
✅ Page break<br />
✅ Separator<br />
✅ Spacer

### Widgets blocks - [Code](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-widgets.html)

✅ Archives<br />
✅ Calendar<br />
✅ Terms list (tags list)<br />
✅ Categories list<br />
✅ Custom HTML<br />
✅ Latest comments<br />
✅ Latest posts<br />
✅ Page list<br />
✅ RSS<br />
✅ Search<br />
✅ Shortcode<br />
✅ Social icons<br />
✅ Tag cloud

### Theme blocks - [Code](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-theme.html)

✅ Navigation<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Custom link<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Home link<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Submenu<br />
✅ Site logo<br />
✅ Site title<br />
✅ Site tagline<br />
✅ Query loop<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Post template<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Post content<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Pagination<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Query total<br />
✅ Avatar<br />
✅ Title<br />
✅ Excerpt<br />
✅ Featured image<br />
❌ Author - Although it's still on the list of blocks, it's been [deprecated](https://github.com/WordPress/gutenberg/issues/53427).<br />
✅ Author name<br />
✅ Comments count<br />
✅ Comments link<br />
✅ Date<br />
✅ Post date<br />
✅ Modified date<br />
✅ Categories<br />
✅ Tags<br />
✅ Previous post<br />
✅ Next post<br />
✅ Time to read<br />
✅ Word count<br />
✅ Read more<br />
✅ Comments<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Comments title<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Comment template<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Comment author name<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Comment date<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Comment content<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Comment reply link<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Comment edit link<br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✅ Comment pagination<br />
✅ Comments form<br />
✅ Login/out<br />
✅ Term count - This block works only in the archive pages and will not be visible on other pages of the website.<br />
✅ Term description - This block works only in the archive pages and will not be visible on other pages of the website.<br />
✅ Term name - This block works only in the archive pages and will not be visible on other pages of the website.<br />
✅ Terms query<br />
✅ Archive title - This block works only in the archive pages and will not be visible on other pages of the website.<br />
✅ Search results title - This block works only in the search results and will not be visible on other pages of the website.<br />
✅ Post type label<br />
✅ Author biography<br />
❌ Template part - This is theme specific.<br />
❌ Query title - This is made up of two blocks: "Archive title" and "Search results title".<br />
❌ Post navigation link - There's no block for this. It's a combination of "Previous post" and "Next post".<br />
✅ Breadcrumbs

### Embed Blocks - [Code](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-embed.html)

❓ Embed<br />
❌ X - Converts to general "Embed" block after pasting url.<br />
✅ YouTube<br />
❌ WordPress - Converts to general "Embed" block after pasting url.<br />
✅ SoundCloud<br />
✅ Spotify<br />
✅ Flickr<br />
✅ Vimeo<br />
❌ Animoto - Skipping. No public share link available to test with.<br />
✅ CloudUp - Example taken from WordPress documentation on this block.<br />
✅ Crowdsignal - Example taken from WordPress documentation on this block.<br />
✅ Dailymotion<br />
✅ Imgur<br />
✅ Issuu<br />
❌ Kickstarter - Fails to embed. Kickstarter's bot protection blocks WordPress's server-side oEmbed fetch.<br />
✅ Mixcloud<br />
✅ Pocket Casts<br />
✅ Reddit<br />
❌ ReverbNation - Converts to general "Embed" block after pasting url.<br />
❌ Screencast - Block variation removed from Gutenberg core; the legacy screencast.com hosting service it targeted was retired ~2023.<br />
✅ Scribd<br />
❌ SlideShare - Block variation removed from Gutenberg core; docs are outdated. SlideShare content now lives under Scribd.<br />
✅ SmugMug - This should work, but embedded content from SmugMug won't show in the editor.<br />
✅ Speaker Deck<br />
✅ TikTok<br />
✅ TED<br />
✅ Tumblr<br />
✅ VideoPress<br />
✅ WordPress.tv - Uses VideoPress embed block.<br />
❌ Amazon Kindle - Converts to general "Embed" block after pasting url (known open Gutenberg bug, [#68714](https://github.com/WordPress/gutenberg/issues/68714)).<br />
✅ Pinterest - Profile/board embeds work; individual pin embeds failed to render despite following the documented steps.<br />
✅ Wolfram<br />
❌ Bluesky - Converts to general "Embed" block after pasting url.
