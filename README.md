ANLEITUNG für Massimo
=====================

WICHTIG:
- `app`: development
- `docs`: kompilierte Dateien

Vorbereitung
------------

0. Finder -> diese Datei in Visual Studio Code öffnen ( Documents/gegege.ch/README.md )
1. Lupe -> SourceTree öffnen
2. oben links auf "Pull" klicken


Entwicklung
-----------

3. Lupe -> Terminal öffnen
4. in Terminal zum Entwicklungsverzeichnis gehen: cd ~/Documents/web/``
5. in Terminal die Live-Vorschau starten: `gulp`
6. die Quelldateien in Documents/gegege.ch/app/ nach Wunsch ändern (z.B. Bilder hinzufügen, Javascript anpassen, ... - gemäss "Rezept" unten)
7. wenn fertig: in Terminal die Live-Vorschau beenden: [control+c]


Paketierung
-----------

8. in Terminal Paketierung durchführen: `gulp deploy`


Upload auf Server
-----------------

9.  in SourceTree sicherstellen, dass oben links "Dateistatus" markiert ist
10. Die neuen oder veränderten Quelldateien aus app/ mit Haken markieren
11. Die neuen oder veränderten kompilierten Sateien aus docs/ mit Haken markieren
    (alle Javascript-Dateien werden zu docs/script/apps.js zusammengefasst)
12. unten im Fenster die "Commit"-Beschreibung ausfüllen (was hast du gemacht?),
    das Kästchen "Änderungen sofort nach origin/master pushen" muss angekreuzt sein
13. Button Commit drücken



REZEPTE
=======


Rezept: Neue Sattelbezüge hinzufügen
------------------------------------

im Finder: Bilder kopieren ins Verzeichnis Documents/gegege.ch/app/images/sattelbezug-large
Bild muss 1000x1000 px gross sein, Name muss sein z.B. "Sattelbezug-037.jpg" (Gross/Klein ist auch wichtig)

im Finder: Bilder kopieren ins Verzeichnis Documents/gegege.ch/app/images/sattelbezug-small
Gleich wie oben, Bild muss 400x400px gross sein

die Datei Documents/gegege.ch/app/globalLists.js in Visual Studio Code öffnen:
Die Liste (ab Zeile 12) anpassen und speichern.








Benötigte Software
==========================

* Texteditor Visual Studio Code: https://code.visualstudio.com/download
* Versionsverwaltung SourceTree: https://www.sourcetreeapp.com
* npm: https://www.npmjs.com/get-npm
* update npm to newest version: in terminal, enter `sudo npm install npm@latest -g`

## Für die Installation ohne vollständigen Admin Zugriff

configure NPM to use an already writable location for "user-global" programs:
`npm config set prefix "${HOME}/npm"`

Then make sure you add that folder to your path (add this to your `~/.zprofile`):
`export PATH="${PATH}:${HOME}/npm/bin"`


Front End Gulp Boilerplate
==========================

Front-end boilerplate for Gulp with everything you need to get started.

* First download or clone this repo :)
* Then run `npm install` to install dev dependencies. Use sudo if needed.

You'll need to have Gulp installed. If you already have Gulp installed, you can skip the following line. It is as simple as running:
* `sudo npm install -g gulp`

During development mode, run the default task so you'll have watchers and browser sync. Simply do the following:
* Run `gulp` to start it up
* Try to modify html, scss and javascript files and see how the page gets updated with BrowserSync

When you're ready to deploy, simply do the following:
* Run `gulp deploy`
* All of the files you need will be in /dist with your images optimized, css compressed and js compressed

## Node Versions Supported
The following Node versions have been tested
* 4.x
* 6.x

Version
==========================
1.4.0

News
==========================
Version 2.0 is currently under development! It'll be a big release and will include some pretty cool and easy features. It'll make using and customizing Harvest a breeze. A peak on what's to come:
* Generator-based so it's simple to configure how you want
* Modular tasks makes it easy to tweak it without digging through everything
* More options! Including LESS, SCSS, Stylus, ES2015, Browserify, and many more options that will be supported out of the box
* More suprises :)

The current phases of work is being maintained on thos KANBAN: https://tree.taiga.io/project/ryanbenson-harvest-20/kanban so if you want to see how things are proressing you can see what's going on. If you have any ideas or thoughts let me know, as now is the time.

Thanks for everyone's support and appreciation for this project!

More Information
==========================
Check out the website http://www.ryanbensonmedia.com/harvest for more information.

Revision History
==========================
February 6, 2016
* Merged in pull request from @rennan that updates dependencies

June 24, 2015
* Fixed missing images folder in app when I removed placeholder

May 8, 2015
* Fixed install instructions on README
* Minor revisions to README

April 15, 2015
* Merged PR from @telephant00
* Adds SCSS Source Maps

April 13, 2015
* Merged PR from @telephant00
* Fixed image dev task, it wasn't pushing images to a dest
* Removed README from images folder, causing segfault errors

April 9, 2015
* Removed LiveReload in favor of BrowserSync

March 6, 2015
* Removed del lib, it was causing issues with deployments
* Added sequence and shell libraries
* Moved deployment task to use sequence
* Using CLI to remove and setup dist folders on deployment, resolved bugs

February 11, 2015
* Updated npm dependency versions
* Updated to latest HTML5 Boilerplate (slightly modified)
* Updated CSS and JS vendors
* Removed a couple unused modules
* Started using version numbers and git flow

January 16, 2014
* Merge pull request from @quakenul fixing concat order issue with JS

November 20, 2014
* Added auto-prefixer support

October 17, 2014
* Removed recently deprecated `gulp-clean` module
* Using `del` module instead
* Updated gulpfile to use del method to cleanse the dist folder prior to the deployment task

September 25, 2014
* Merged pull request form @hhff
  * Improved gitignore for sass cache
  * Improved font-face mixing
  * Updated images and fonts gulp task for nested files

August 14, 2014:
* Finally figured out how to get all of the dependencies into dev, not production

June 20, 2014:
* Updated dependencies
* Completely changed how webserver and livereload works
* Refactored a lot of the build task, it is much more modular and flexible
* Added some extra boilerplate
* Removed a lot of the footprint styles, including the entire Skeleton framework
* Fixed SASS crashing on syntax/coding error
* Using default port number now (8080) for web server

February 03, 2014:
* Added caching of images so the deploy feature won't compress the same images multiple times
* Added cleaning of the `dist` folder in case things got deleted at some point
* Made the dev & dist scripts and css compressed file in the same place so no edits to the href/src needs to be done anymore
* Added graceful errors during watch, so SCSS or JS errors no longe break the `watch`
* Updated `gulpfile.js` since gulp.run() is deprecated now
* Added fonts to the `deploy`

February 04, 2014:
* Removed coffee dependency
* Removed some fingerprinted CSS
* Fixed some CSS/HTML references
* Cleaned up the builder and watcher and fixed watcher bugs, namely issue compression w/ SVGs
* Merged pull request from @Contra who added some best practices, thanks! :)

February 25, 2014
* I've been using this more in development and production, so this has been fine tuned a bit
* I added fonts and other misc assets that should be moved from `dev` to `dist` upon deployment
* I removed image caching because there was an issue where it would randomly break all of the images. I'll figure this but out later though.
* Updated npm dependencies accordingly
