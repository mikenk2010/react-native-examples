## Week 4 Project: Twitter Redux

**Due:** {{PROJECT(4) | longdate}} at 11:59pm

### Overview

Build a simple Twitter client.

![Hamburger|250](http://i.imgur.com/OUSCQyYl.png)&nbsp;&nbsp;![User Profile|250](http://i.imgur.com/QZe53xhl.png)

### Submission instructions

Follow the guide for [[Submitting Assignments]]. Remember to include an animated gif and # of hours spent in the README. You can get started by copying this [README template](../../../snippets/intro_to_ios/readme_templates/twitter_redux_readme.md?raw=true) and checking things off as you complete them.

### Project Requirements

The following user stories **must** be completed:

- Hamburger menu
   - Dragging anywhere in the view should reveal the menu.
   - The menu should include links to your profile, the home timeline, and the mentions view.
   - The menu can look similar to the menu below or feel free to take liberty with the UI.
- Profile page
   - Contains the user header view
   - Contains a section with the users basic stats: # tweets, # following, # followers
   - Shows the user timeline
- Home Timeline
   - Tapping on a user image should bring up that user's profile page

The following user stories are **optional**:
(_high_, _med_, and _low_ refer to the effort to implement the feature, with _high_ being the most work and _low_ being the least)

- Profile Page
  - **Optional**: Implement the paging view for the user description. (_med_)
  - **Optional**: As the paging view moves, increase the opacity of the background screen. See the actual Twitter app for this effect (_med_)
  - **Optional**: Pulling down the profile page should blur and resize the header image. (_high_)
- Account switching
   - **Optional**: Long press on tab bar to bring up Account view with animation (_low_)
   - **Optional**: Tap account to switch to (_low_)
   - **Optional**: Include a plus button to Add an Account (_med_)
   - **Optional**: Swipe to delete an account (_med_)

### Video Walkthroughs

- Implementing a [Hamburger Menu in Swift](https://www.youtube.com/watch?v=RomtNzE-8lM&list=PLrT2tZ9JRrf5Zn-KeDMRP_euJbrBmUwDX&index=6).

### References

- [Working with Gesture Recognizers](https://guides.codepath.com/ios/Using-Gesture-Recognizers)
- [Event handling guide](https://developer.apple.com/library/ios/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/GestureRecognizer_basics/GestureRecognizer_basics.html#//apple_ref/doc/uid/TP40009541-CH2-SW44) (Apple)
