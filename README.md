## Bridging Tutorial

This repository contains the code for the [Mateusz's Mędrek Bridging Tutorial](https://mateusz1913.github.io/rnbridgingtutorial/) on how to create a React Native module for iOS and Android.

## Modules
App implements 2 native modules:
* [app-info-package](https://mateusz1913.github.io/rnbridgingtutorial/docs/guides/app-info-module/intro) - a React Native module for iOS and Android that returns the app's build number, bundleId and version.
* [conic-gradient-package](https://mateusz1913.github.io/rnbridgingtutorial/docs/guides/conic-gradient-view/intro) - a React Native module for iOS and Android that renders a conic gradient view.

## Running the example app:
* Install dependencies:
```bash
$ yarn
```

* [iOS only] Install pods
```bash
$ npx pod-install
```

* Run the app on iOS:
``` bash
$ yarn ios
```

* Run the app on Android:
``` bash
$ yarn android
```
