# bookmark-launcher

## Concept
 Bookmark Laucher (bml for short) is a CLI that runs in Node JS which works in a very simple way.
 If you use your terminal a lot (and your preferred browser is Google Chrome), you can quickly run a command `bml <bookmark name>` to open that bookmark in Chrome.

## Installation
Please take a look at the [installation guide](INSTALL.md).

## Commands

#### Read all your bookmarks to the `bookmarks.json` file
- `bml run-save`

#### Lauch bookmarks that exist in the `bookmarks.json` file
- `bml <bookmark_name>`

If the `<bookmark_name>` in the command is close to a saved bookmark, the bookmark will open. 

If you add a new bookmark and you want to be able to launch it from the terminal, you should run `bml run-save` again.

## Story
When I started using Windows instead of a MacOS to code at my job, I missed a lot of things. One of those was Alfred, which I used all the time, specially to quickly open URLs, either saved separatly or from my Google Bookmarks.

After searching for a Windows alternative to fit my use case I was not satisfied with what I found. 
Hence, I designed exactly what I was searching for: an App/CLI which parses my bookmarks and enables me to open them quickly with a few commands. 
Since I always have the terminal open (in MacOs I used iTerm2 with zsh and in Windows I use Cygwin with zsh) it works nicely for me.
