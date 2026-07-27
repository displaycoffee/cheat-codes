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

## Design

[Raw code snippet 📄](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-design.html)

| Status | Name       | Comment |
| ------ | ---------- | ------- |
| ✅     | Accordion  |         |
| ✅     | Buttons    |         |
| ✅     | Columns    |         |
| ✅     | Grid       |         |
| ✅     | Group      |         |
| ✅     | More       |         |
| ✅     | Page break |         |
| ✅     | Row        |         |
| ✅     | Separator  |         |
| ✅     | Spacer     |         |
| ✅     | Stack      |         |

## Embed

[Raw code snippet 📄](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-embed.html)

| Status | Name          | Comment                                                                                                                        |
| ------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ❌     | Amazon Kindle | Converts to general "Embed" block after pasting url. [Open issue #68714](https://github.com/WordPress/gutenberg/issues/68714). |
| ❌     | Animoto       | Skipping. No public share link available to test with.                                                                         |
| ❌     | Bluesky       | Converts to general "Embed" block after pasting url.                                                                           |
| ✅     | CloudUp       | Example taken from WordPress documentation on this block.                                                                      |
| ✅     | Crowdsignal   | Example taken from WordPress documentation on this block.                                                                      |
| ❌     | Dailymotion   | The embed works, but the video autoplays with sound, so not adding this.                                                       |
| ✅     | Embed         |                                                                                                                                |
| ✅     | Flickr        |                                                                                                                                |
| ✅     | Imgur         |                                                                                                                                |
| ✅     | Issuu         |                                                                                                                                |
| ❌     | Kickstarter   | Fails to embed. Kickstarter's bot protection blocks WordPress's server-side oEmbed fetch.                                      |
| ✅     | Mixcloud      |                                                                                                                                |
| ✅     | Pinterest     | Profile/board embeds work. Individual pin embeds failed to render despite following the documented steps.                      |
| ✅     | Pocket Casts  |                                                                                                                                |
| ✅     | Reddit        |                                                                                                                                |
| ❌     | ReverbNation  | Converts to general "Embed" block after pasting url.                                                                           |
| ❌     | Screencast    | Block variation removed from Gutenberg core. Legacy screencast.com hosting service it targeted was retired ~2023.              |
| ✅     | Scribd        |                                                                                                                                |
| ❌     | SlideShare    | Block variation removed from Gutenberg core. Docs are outdated. SlideShare content now lives under Scribd.                     |
| ✅     | SmugMug       | This should work, but embedded content from SmugMug won't show in the editor.                                                  |
| ✅     | SoundCloud    |                                                                                                                                |
| ✅     | Speaker Deck  |                                                                                                                                |
| ✅     | Spotify       |                                                                                                                                |
| ✅     | TED           |                                                                                                                                |
| ✅     | TikTok        |                                                                                                                                |
| ✅     | Tumblr        |                                                                                                                                |
| ✅     | VideoPress    |                                                                                                                                |
| ✅     | Vimeo         |                                                                                                                                |
| ✅     | Wolfram       |                                                                                                                                |
| ❌     | WordPress     | Converts to general "Embed" block after pasting url.                                                                           |
| ❌     | WordPress.tv  | Uses "VideoPress" embed block, so preview is the same as that block.                                                           |
| ❌     | X             | Converts to general "Embed" block after pasting url.                                                                           |
| ✅     | YouTube       |                                                                                                                                |

## Media

[Raw code snippet 📄](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-media.html)

| Status | Name         | Comment |
| ------ | ------------ | ------- |
| ✅     | Audio        |         |
| ✅     | Cover        |         |
| ✅     | File         |         |
| ✅     | Gallery      |         |
| ✅     | Icon         |         |
| ✅     | Image        |         |
| ✅     | Media & text |         |
| ✅     | Video        |         |

## Text

[Raw code snippet 📄](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-text.html)

| Status | Name         | Comment                                                            |
| ------ | ------------ | ------------------------------------------------------------------ |
| ❌     | Classic      | Most text formatting and styles should be covered by other blocks. |
| ✅     | Code         |                                                                    |
| ✅     | Details      |                                                                    |
| ✅     | Heading      |                                                                    |
| ✅     | List         |                                                                    |
| ✅     | Math         |                                                                    |
| ✅     | Paragraph    |                                                                    |
| ✅     | Poetry       |                                                                    |
| ✅     | Preformatted |                                                                    |
| ✅     | Pullquote    |                                                                    |
| ✅     | Quote        |                                                                    |
| ✅     | Table        |                                                                    |

## Theme

[Raw code snippet 📄](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-theme.html)

| Status | Name                           | Comment                                                                           |
| ------ | ------------------------------ | --------------------------------------------------------------------------------- |
| ✅     | Archive title                  | Only in the archive pages and will not be visible on other pages of the website.  |
| ❌     | Author                         | It's been [deprecated](https://github.com/WordPress/gutenberg/issues/53427).      |
| ✅     | Author biography               |                                                                                   |
| ✅     | Author name                    |                                                                                   |
| ✅     | Avatar                         |                                                                                   |
| ✅     | Breadcrumbs                    |                                                                                   |
| ✅     | Categories                     |                                                                                   |
| ✅     | Comments                       |                                                                                   |
| ✅     | Comments > Comment author name |                                                                                   |
| ✅     | Comments > Comment content     |                                                                                   |
| ✅     | Comments > Comment date        |                                                                                   |
| ✅     | Comments > Comment edit link   |                                                                                   |
| ✅     | Comments > Comment pagination  |                                                                                   |
| ✅     | Comments > Comment reply link  |                                                                                   |
| ✅     | Comments > Comment template    |                                                                                   |
| ✅     | Comments > Comment title       |                                                                                   |
| ✅     | Comments count                 |                                                                                   |
| ✅     | Comments form                  |                                                                                   |
| ✅     | Comments link                  |                                                                                   |
| ✅     | Date                           |                                                                                   |
| ✅     | Excerpt                        |                                                                                   |
| ✅     | Featured image                 |                                                                                   |
| ✅     | Login/out                      |                                                                                   |
| ✅     | Modified date                  |                                                                                   |
| ✅     | Navigation                     |                                                                                   |
| ✅     | Navigation > Custom link       |                                                                                   |
| ✅     | Navigation > Home link         |                                                                                   |
| ✅     | Navigation > Submenu           |                                                                                   |
| ✅     | Next post                      |                                                                                   |
| ✅     | Post date                      |                                                                                   |
| ❌     | Post navigation link           | There's no block for this. It's a combination of "Previous post" and "Next post". |
| ✅     | Post types label               |                                                                                   |
| ✅     | Previous post                  |                                                                                   |
| ✅     | Query loop                     |                                                                                   |
| ✅     | Query loop > Pagination        |                                                                                   |
| ✅     | Query loop > Post content      |                                                                                   |
| ✅     | Query loop > Post template     |                                                                                   |
| ✅     | Query loop > Query total       |                                                                                   |
| ❌     | Query title                    | This is made up of two blocks: "Archive title" and "Search results title".        |
| ✅     | Read more                      |                                                                                   |
| ✅     | Search results title           | Only in the search results and will not be visible on other pages of the website. |
| ✅     | Site logo                      |                                                                                   |
| ✅     | Site tagline                   |                                                                                   |
| ✅     | Site title                     |                                                                                   |
| ✅     | Tags                           |                                                                                   |
| ❌     | Template part                  | This is theme specific.                                                           |
| ✅     | Term count                     | Only in the archive pages and will not be visible on other pages of the website.  |
| ✅     | Term description               | Only in the archive pages and will not be visible on other pages of the website.  |
| ✅     | Term name                      | Only in the archive pages and will not be visible on other pages of the website.  |
| ✅     | Terms query                    |                                                                                   |
| ✅     | Time to read                   |                                                                                   |
| ✅     | Title                          |                                                                                   |
| ✅     | Word count                     |                                                                                   |

## Widgets

[Raw code snippet 📄](https://raw.githubusercontent.com/displaycoffee/cheat-codes/refs/heads/production/wordpress-block-preview/wordpress-block-preview-widgets.html)

| Status | Name                   | Comment |
| ------ | ---------------------- | ------- |
| ✅     | Archives               |         |
| ✅     | Calendar               |         |
| ✅     | Categories list        |         |
| ✅     | Custom HTML            |         |
| ✅     | Latest comments        |         |
| ✅     | Latest posts           |         |
| ✅     | Page list              |         |
| ✅     | RSS                    |         |
| ✅     | Search                 |         |
| ✅     | Shortcode              |         |
| ✅     | Social icons           |         |
| ✅     | Tag cloud              |         |
| ✅     | Terms list (tags list) |         |
