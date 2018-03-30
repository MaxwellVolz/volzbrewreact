# Volzbrew Website Repo

Volzbrew is a ReactJS and MaterialUI based, mobile-ready, website and blog.


# New Features!

  - General Setup 
  - Development Section(in progress) 
  - Compile Section
  - Push to Git Section 
  
### Tech

Volzbrew uses a number of open source projects to work properly:

* [ReactJS] - Javascript UI by Facebook!
* [MaterialUI] - UI elements by Google!
* [node.js] - evented I/O for the backend


### Installation

Volzbrew requires [Node.js](https://nodejs.org/) v8.10+ to run.

Install the dependencies.

```sh
$ cd volzbrewreact
$ npm install
```


### Development

Compile the code and start the local server.

```sh
$ npm start
```

#### Important Files and Folders

* package.json - describes dependencies installed with 'npm install'
* build/ - contains production files for website, generated with 'npm run build'
* src/ - contains development files for website
* src/App.js - app starting point, router setup, and page declarations
* src/imgs - website images
* src/components - generic react components that occur the same on multiple pages; i.e. Navbar, Footer
* src/pages/ - website pages
* src/index.css - class styling and media queries
* src/style/theme.js - MaterialUI generic theme styling

#### Making a New Page

1. Copy and rename a folder of a page that is similiar to what you are going to make.
2. Add your page to the site in App.js
  a. Add an 'import YourPage from './pages/Your'' - notice how the names are not the same
  b. Declare your page with 'const Your = () => (<div> <YourPage /> </div>)'
  c. Add your page to the router with a path("URL") of your choosing '<Route path='/yourPage' component={YourPage} />'
  d. Check the console for compiling issues to see if you missed anything(see common problems below)
  e. Navigate to localhost/YourPage to see your new page
3. Create a link to your page using a button '<Link to="/yourPage"><Button>ButtonText</Button></Link>'

#### Import MaterialUI Components

1. Grab code for the DOM elements from the MaterialUI /demo page
2. Take note of the specific element styling described in 'const styles' on the /demo page
3. Change references to 'className={styles.root}' to 'style={styles.elementName}'
4. Verify import statements for MaterialUI dependencies


### Compiling

Compile code for production, see console output after running.

```sh
$ npm run build
```

### Pushing updates to Git

Push early and often! Don't let your code rot and have to deal with merge conflicts.

Stage changes
```sh
$ git add . 
```

Add a commit message
```sh
$ git commit -m "succinct message about your update" 
```

Push to github
```sh
$ git push origin master 
```

Notes:
We aren't using branches.
The '.gitignore' file describes files and folders which changes will not be recorded or synced with git.

### Pushing updates to AWS
Coming Soon!

### Todos

 - Pushing updates to AWS
 - Tip for installing xcode tools for Mac (Joe's issue)
 - Development Section expand


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [node.js]: <http://nodejs.org>
   [ReactJS]: <https://github.com/facebook/create-react-app>
   [MaterialUI]: <https://material-ui-next.com/getting-started/usage/>
