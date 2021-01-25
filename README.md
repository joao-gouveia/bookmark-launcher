# bookmark-launcher

## Concept
 Bookmark Laucher (bml for shortage) is a cli that runs in Node JS. It works in a very simple way.
 If you use your terminal a lot (and your prefered Browser is Google Chrome), you can quickly run a command `bml <bookmark name>` to open that bookmark in Chrome.


## Instalation
Please take a look at install.md

## Commands

#### Read all your bookmarks to a the `bookmarks.json` file
- `bml run-bml`

#### Lauch bookmarks that exist in the `bookmarks.json` file
- `bml <bookmark_name>`

## Story
When I started using Windows instead of a MacOS to program, I missed a lot of things. One of those was Alfred, which I used all the time, specially to quickly open urls,
either saved separatly, or from my Google Bookmarks.

After searching for a Windows alternative which would fit my use case, I was not satisfied. 
Hence, I designed exactly what I was searching for: an app/cli which looks at my bookmarks and enables me to open them quickly with a few commands. 
Since I always have the terminal open (in MacOs I used iTerm2 with zsh and in Windows I use Cygwin with zsh) the way I achieve this works nicely for me.
