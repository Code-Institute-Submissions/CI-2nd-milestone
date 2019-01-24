# Tasting Experience - Google Maps API
This project is build upon [The Tasting Experience](https://github.com/Seboeb/Code-Institute) project. At The Tasting Experience website you can book a cultural tasting for your friends or beloved ones, but sometimes you do not have the time or the money to book a tasting experience. Sometimes you just want to grab a nice drink - maybe with some delicious food - and still want a great experience for, lets say, just the midday or evening. Where do you look for such a place?

At [this](https://seboeb.github.io/CI-2nd-milestone/) separate page of The Tasting Experience website you can use Google Maps to find the perfect place that fits your needs.

## UX
This website page is focussing for users that cannot book a tasting experience, but still want to find a nice place to grab a good quality drink in a nice restaurant or other place. The user can search for a place to stay at night if he or she wants to sleep. The Google Maps API will provide the user with a graphical interface together with some filters to search for a specific area. The Google Maps API will also allow for planning a route to the selected place, including any hotels when selected.

### User stories
- As a user I want to search for bars and restaurants so that I can find a place for an alternative Tasting Experience.
- As a user I want to see customer reviews of the found bars and restaurants so that I can decide which place I will go to.
- As a user I want to be able to search in specific areas.
- As a user I can select my preferred bar or restaurant and get the corresponding contact details.
- As a user I can select if I want to search for a place to stay at the night (hotels).
- As a user I want to see what my options are to go and plan my route to the selected restaurant and hotels.
- As a user I can share my selected options with other people from the Tasting Experience website so that they can also experience my selection.

## Features
Here you can see the features that are already implemented and which are left to implement in this project.

### Existing Features
- Search restaurants in a selected region.
- Navigate the region on the google maps.
- See the rating, photo's and address of the restaurants.
- Select restaurant and start route navigation.
- See route details such as the distance and the expected travelling time.
- See route instructions line by line.

### Features Left to Implement
- Option or filter to choose what kind of restaurants you want to see.
- Select which method you want to route to your destination (by bicycle/train etc..).
- Share your selected option with the community of The Tasting Experience.

## Technologies used
This project uses several existing third party technologies to improve code quality and to speed up the development time. The following tools are used:
- **[JQuery](https://jquery.com/)**
    - JQuery makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.
- **[NodeJs](https://nodejs.org/en/)**
    - Node is designed to build scalable network applications. It will be used to run the webpack builder and start a webserver for project testing.
- **[npm](https://www.npmjs.com/)**
    - npm is the package manager for JavaScript and the world’s largest software registry. It will be used to manage all the javaScript dependencies used in this project.
- **[webpack](https://webpack.js.org/)**
    - Webpack is a build tool that puts all of your assets, including JavaScript, images, fonts, and CSS, in a dependency graph.
- **[Google Maps API](https://developers.google.com/maps/)**
    - The Google Maps API to allow usage of their google maps service.

Additionally, the following webpack modules are used:
- **node-sass, sass-loader**
    - These modules are used to convert sass or scss files to css files.
- **babel-loader, babel/core, babel/preset-env**
    - These modules are used to convert modern ES6 JavaScript files into robust ES5 JavaScript files which is supported on any browser.
- **file-loader**
- **html-loader**
- **html-webpack-plugin**
- **mini-css-extract-plugin**
- **clean-webpack-plugin**

## Installing
This project uses NodeJs for managing Javascript libraries, webpack and a testing webserver. Visite their [website](https://nodejs.org/en/) to install NodeJs for your operation system. NodeJs ships with npm, which will be automatically installed.

In order to run this project, please clone the repository to a folder on your computer. Open a terminal (or command prompt) and cd into your cloned folder. Type in the following command:
```
npm install
```
This command will install all the module dependencies that are listed in the package.json file. After installation of all the modules, you can type the following command to spin up the webserver of webpack:
```
npm run build
```
After a short amount of time, you will see that the terminal gives you the address of the local webserver that is running.

![webserver running](https://github.com/Seboeb/CI-2nd-milestone/blob/master/src/img/webpack-server.PNG)

If you open your browser and navigate to that url (in my case http://localhost:8080) you will see that the website is running but that the Google Maps is not showing. This happens due to a missing Google Maps API key. You will need to [get](https://cloud.google.com/maps-platform/) your own API key and put it in the index.html file located in the 'src' folder of this project.

![place api key](https://github.com/Seboeb/CI-2nd-milestone/blob/master/src/img/api_key.png)

## Testing
The project can be tested using the buildin webserver functionality of webpack. A full documentation of this functionality can be found [here](https://webpack.js.org/configuration/dev-server/). By spinning up this server and adding extra flags you can simulate the project being hosted by a real webserver.

By typing the following command:
```
webpack-dev-server --mode development
```
the webpack server will spin up and will run in development mode. Note that webpack was already installed during the `npm install` command. When the build of the webserver was successful, you can navigate in your browser to the local url where the server is running. When using the Google Chrome browers, you can open the development console and check for network operations and logs in the console while using the The Tasting Experience app website.

## Deployment

## Credits
### Content
### Media
- Images used in this project are grabbed from [pixabay](https://pixabay.com).

### Acknowledgements
- The short description of webpack was used from [this](https://blog.andrewray.me/webpack-when-to-use-and-why/) blog.
- A good introduction tutorial that I followed for webpack was provided by the Academind [videos](https://www.youtube.com/watch?v=GU-2T7k9NfI&list=PL55RiY5tL51rcCnrOrZixuOsZhAHHy6os).
