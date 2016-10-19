# **initPro**

### Synopsis

A slush generator for simple web project scaffolding with `browser-sync` configured to help us do live-reloading easily.

### Requirements

To use the initPro, you must have Gulp and Slush installed.

To install Gulp globally:
```
$ npm install -g gulp
```

To install Slush globally:
```
$ npm install -g slush
```

### Installation

To install initPro globally:
```
$ npm install -g slush-initPro
```

### Usage

Create a new folder for your project:
```
$ mkdir myproject
```

Run the generator from within the new folder:
```
$ slush initPro
```

### Running

To run the app, just:
```
$ gulp
```

Your development directory is the `app/` folder.

### Build

Minified files(css and images), will be in `dist/assets` folder.
To erase useless files in this folders, run:
```
$ gulp build
```

### License

GLP v3
