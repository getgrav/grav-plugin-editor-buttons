# Grav Editor Buttons Plugin

The **Editor Buttons Plugin** for [Grav](http://github.com/getgrav/grav) adds additional buttons to the Grav Admin Editor.

# Installation

The Data plugin is easy to install with GPM.

```
$ bin/gpm install editor-buttons
```

Or clone from GitHub and put in the `user/plugins/editor-buttons` folder.

# Configuration

In the Admin Panel, Plugins list, clicking **Editor Buttons** will show you some options. You can independently activate one or more editor buttons.

Currently available buttons are

- Insert Table
- Insert Headings

If the "Markdown Notices" plugin is installed, these will also be available:

- Insert Info Notice
- Insert Note Notice
- Insert Tip Notice
- Insert Warning Notice

If the "Shortcodes Core" plugin is installed, these will also be available:

- Align Left | Center | Right
- Insert Column
- Create Safe Email
- Insert Notice
- Insert Underline
- Insert Size

If the "Shortcodes UI" plugin is installed, these will also be available:

- Insert Tabs
- Insert Accordion
- Insert Browser
- Insert Polaroid
- Insert Image Compare

# Usage

Open a page, and along the editor default buttons you'll see the newly activated buttons.

# Future improvements

This is a first revision of the plugin.

Ideas for the near future:

- Allow to remove any of the default editor buttons
- Add additional editor buttons
- Allow stacking the buttons in vertical lists, to improve the usage of the space
