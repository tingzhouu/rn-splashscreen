# RN-SplashScreen

A quick documentation of how to setup splash screen on a React Native app.

### How to do it

1. Create the splash screen design
2. Add a `isLoading` boolean variable to `App.js`
3. Return the splash screen design if `isLoading` is true. Otherwise return the original `App` content.
4. For a loading spinner, I used [React Native Spinner Overlay](https://www.npmjs.com/package/react-native-loading-spinner-overlay)
5. TODO - How to remove the initial `Powered by React Native` screen when opening app for the first time

### References

I referred to the below sources on how to do this.
1. https://whatdidilearn.info/2019/01/13/how-to-implement-a-splash-screen-in-react-native.html
2. https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae