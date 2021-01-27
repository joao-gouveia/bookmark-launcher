# Installation

It is pretty straight forward to install the `bml cli`.

- Download [this repository](https://github.com/joao-gouveia/bookmark-launcher) (either download the source code or clone the repo to your machine).
- Install [Node JS](https://nodejs.org/en/download/)
- Go to the repository folder and run `npm install -g` to install the CLI globally in your machine. This way you can use it no matter what is the folder you are in the terminal.
- If your Google Chrome is not installed in the default folder, find the path to the bookmarks file of Chrome in your machine and add it to the `configuration.json` in the `chromeBookmarkFilePath` field. If it is in the default folder, you don't need to do this.
- By default, the processed bookmarks file will be saved in `/out/bookmarks.json`. If you want to change this, change the value of the field `processedBookmarksFilePath` in the `configuration.json`

And you are ready to go!

To start using the CLI, run `bml run-save` to save the `bookmarks.json`. Now it is ready to use.

Try using `bml <bookmark_name>`. It should be working!

Enjoy!