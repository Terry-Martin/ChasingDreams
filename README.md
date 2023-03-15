# ChasingDreams
(Developer: Terry Martin)

Based on - jarradbaker readme

![Mockup image](assets/images/readme_images/am-i-responsive.jpg)

[Live webpage](https://terry-martin.github.io/ChasingDreams/)

## Table Of Contents

1. [Project Goals](#project-goals)
    1. [Creator Goals](#creator-goals)
    2. [Player Goals](#player-goals)
2. [Game Info](#game-info)
    1. [Game Themes](#game-themes)
    2. [Game Ideas](#game-ideas)
    3. [Game Basics](#game-basics)
3. [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requrements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
4. [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colour)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](#wireframes)
5. [Technologies Used](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks and Tools](#frameworks-and-tools)
6. [Features](#features)
7. [Testing](#validation)
    1. [HTML Validation](#HTML-validation)
    2. [CSS Validation](#CSS-validation)
    3. [Accessibility](#accessibility)
    4. [Performance](#performance)
    5. [Device testing](#performing-tests-on-various-devices)
    6. [Browser compatibility](#browser-compatability)
    7. [Testing user stories](#testing-user-stories)
8. [Bugs](#Bugs)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals

### Creator Goals
- Build on HTML and CSS learnings
- Include JavaScript for interactivity and feedback
- Create a game about Dreams incorporating the above three languages
- Allow user to read and answer questions about dream songs
- Give user a chance to complete game under certain conditions
- Keep tight control of which buttons are available to user to reduce bugs
- Direct the users focus to what they should do next


### Player Goals
- Input answers to questions
- View current score/stats
- Receive feedback if a question is right or wrong and see overall progress
- Be made aware of target needed to complete game
- Obtain knowlege of game functions through feedback

## Game Info

### Game Themes
- Sleep is the main theme of the game with the goal of achiving eight hours of it. Eight hours is something we are all told is a solid target for us to have healthy lives. However, that eight hours is elusive to most of us because of busy lives or busy brains.
- Dreams are sometimes said to be guardians of sleep. The longer we dream, the longer we sleep.
- Pysical comfort and mental relaxion assist us in having a deeper calmer sleep. Feeling cosy and carefree is another way to put this, so perhaps the idea of ourselves wrapped in our favourite jumper or having a super comfy pillow under our head can help us sleep that tad longer...

### Game Ideas
- Player is given a target of 8 hours sleep to complete them game
- Game itself is a quiz with missing song lyrics
- Each question answered counts as 1 hour of sleep. So, 8 questions to finish the game
- Player is given a Sleep Depth score at start of game. This number will go up or down depending on answers to quiz
- Sleep Depth is also affected by random, external factors (such as neighbours dog is barking)
- Players can find items that increase or decrease their Sleep Depth (such as Dream Jumper)
- If Sleep Depth reaches zero, the player will wake up

### Game Basics
- User will read a short intro and then be invited to click a "Start Dreaming" button
- User will have a view of Missing Song Lyric (Question and Answer Box), Player Info, Sleep Info and Player Items
- Missing Song Lyric will contain 4 lines of a song. One word will be blanked out with red underline in its place
- A question is displayed directly below the song about the missing lyric. The user will be told how many letters are in the missing word
- User will type in text box and will receive feedback if the answer is correct or incorrect.
- Player Info (showing name and player stats), Sleep Info (showing current progress of how many hours currently asleep) and Player Items (any items player made have found. Players can hold a max of 3 items at a time)
- Players have a 1 in 8 chance of getting an item when they answer a question. This means, on avgerage, players will receive one item if they complete the game (8 questions to complete). There are three types of items - Dream Jumper, Luxuiry Pillow and Comforter. Each type also has three versions, so 3 jumers, 3 pillow, 3 comforters. Each item has a different impact on player stats. The items appear in bottom right corner.

## User Experience

### Target Audience
The website is designed with the following target audience in mind:
- Project assessor
- Student peers
- Poeple with an interest in music
- People who enjoy games
- People with a interest in dreams/sleep

### User Requirements and Expectations
- Straight forward, easy to use interface
- Quick page load times
- Feedback for each question they answer
- Feedback on their overall progress
- Clear target to complete the game
- Questions to be interesting with a medium degree of difficulty

### User Stories

#### Player
1. As a player, I want to start the game
2. As a player, I want to understand what the game is about
3. As a player, I want to know how to play the game
4. As a player, I want to be able to see how am i am progressing through the game
5. As a player, I want to verify if i got a an answer right or wrong
6. As a player, I want to be told what the correct answer is if i give the wrong answer
7. As a player, I want to receive acknowledment if i complete the game
8. As a player, I want to be able to play the game without any bugs

#### Creator
13. As the creator, I want showcase my abilities with HTML, CSS and JavaScript
14. As the creator, I want users to enjoy the game and have a interest in completing it
15. As the creator, I want users to be surprised by some of the game features
16. As the creator, I want to think about the songs as they answer the questions and have a desire to play that song afterwards

## Design

### Design Choices
The website was designed with soft colours and whimiscal font to give a relaxed atmosphere. Although the game is based on music questions, luck plays a large part in their ability to complete it. This idea reflects back to the idea that we dont have much control in real life to long we can sleep. 

### Colour
The colour palette was quite small for this website with the colour combination taken from
https://digitalsynopsis.com/design/minimal-web-color-palettes-combination-hex-code/
The colours used were #F8B195 #F67280  #C06C84  #6C5B7B  #355C7D 
Whitesmoke was also used for some of the text.

### Fonts
The font family chosen was 'Merienda One', cursive. This is a flowing, playful script that works well for a game/dream setting

### Structure
The structure of this site is all on one page. There is a main grid of one row and two coloms. This splits the game areas into the left and right part of the screen. The Left side contains the song lyrics, missing word, game question, text box for answer and both control buttons (submit answer and continue). The right had part of main grid shows player info/stats, player progress and player items. A further grid is used in the right hand game section to break it down. FLex is also used extensivily through the site. Sections of the page are hidden or shown when needed. Control buttons are hidden/shown and enabled/disabled when required to reduce user error and also make it more intuitive to the user on what they should do next. An array is used to contain the questions and answers, while a nested array is used to store the different types of items and their sub-items.

### Wireframe 

Most of the game features from the first wire frame made it into submitted version (with a few exceptions, notable NPCs). The overall final layout is similar to original design.
![balsamiq image](assets/images/readme_images/balsamiq.jpg)


## Technologies Used

### Languages
The following languages were used to develop the website:
- HTML
- CSS
- JavaScript

### Frameworks and Tools
The following frameworks and tools were used to develop the website:
- Git
- Github
- Gitpod
- Google Fonts
- Font Awesome
- Balsamiq
- Dream by WOMBO

## Features
The website is one page with XXX features

### Header (logo and navigation)
- Shows on every page
- The nav links stack under the logo on smaller screens making it responsive
- Enables easy and smooth navigation
- The current page is highlighted in blue
- User Stories: 8, 14
<details><summary>Header</Summary>
<img src="docs/features/Header.png">  
</details>

### Footer
- Shows on every page like the header
- Like the header, the social links also stack underneath the copyright text on smaller screens
- User Stories: 2, 8, 14
<details><summary>Footer</Summary>
<img src="docs/features/Footer.png">  
</details>

### 404 page
- Redirects the user to a working page
- Explains what the issue is
- User Stories: 8, 15
<details><summary>404 Page</Summary>
<img src="docs/features/404page.png">  
</details>

## Validation

### HTML Validation

The Nu HTML Checker (W3C) is used to validate HTML documents. This ensures that all unintended mistakes are spotted before release, so that they can be corrected. All of my pages passed the check without any errors, including the 404 page.

<details><summary>Home</Summary>
<img src="docs/Validation/HTML/index.png">  
</details>

<details><summary>Tricks</Summary>
<img src="docs/Validation/HTML/tricks.png">  
</details>

<details><summary>Boards</Summary>
<img src="docs/Validation/HTML/boards.png">  
</details>

<details><summary>Contact</Summary>
<img src="docs/Validation/HTML/contact.png">   
</details>

<details><summary>404</Summary>
<img src="docs/Validation/HTML/404.png">
</details>

### CSS Validation

The W3C Jigsaw CSS Validation Service is used in exactly the same way as the Nu HTML Validator, but for CSS. I ran both my actual style.css file, and an actual web page through it, and both passed without any errors.

<details><summary>Web Page</Summary>
<img src="docs/Validation/CSS/CSS.png">
</details>

<details><summary>Stylesheet</Summary>
<img src="docs/Validation/CSS/stylesheet.png">
</details>

### Accessibility

The WAVE web accessibility evaluation tool by WebAIM was used to ensure the webpages met accessibility standards. All 5 pages passed without any errors.

<details><summary>Home</Summary>
<img src="docs/Validation/Accessibility/index.png">
</details>

<details><summary>Tricks</Summary>
<img src="docs/Validation/Accessibility/tricks.PNG">
</details>

<details><summary>Boards</Summary>
<img src="docs/Validation/Accessibility/boards.PNG">
</details>

<details><summary>Contact</Summary>
<img src="docs/Validation/Accessibility/contact.PNG">
</details>

<details><summary>404</Summary>
<img src="docs/Validation/Accessibility/404.PNG">
</details>

### Performance

The Google Lighthouse tool, within the Google Chrome Developer Tools was used to ensure that each page met a high performance rating. This shows that the website will load efficiently over various devices.

<details><summary>Home</Summary>
<img src="docs/Validation/Performance/index.png">
</details>

<details><summary>Tricks</Summary>
<img src="docs/Validation/Performance/tricks.png">
</details>

<details><summary>Boards</Summary>
<img src="docs/Validation/Performance/boards.png">
</details>

<details><summary>Contact</Summary>
<img src="docs/Validation/Performance/contact.png">
</details>

<details><summary>404</Summary>
<img src="docs/Validation/Performance/404.png">
</details>

### Performance tests on various devices

Throughout development and testing, I used the following devices to ensure that the site was responsive, and worked as intended.

- Samsung Galaxy ZFold 2 (both ultra slim mode, and wide mode)
- Microsoft Surface Book 2 (Both as the laptop, and tablet)
- Macbook Pro
- Desktop PC with a 32" monitor

### Browser Compatibility

The website was tested on several web browsers to ensure consistency. The browsers used are as follows:

- Microsoft Edge
- Google Chrome
- Brave Browser (A Chrome based browser)
- Mozilla Firefox
- Opera GX

### Testing User Stories

1. As a first time user, I want to understand the product

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |
| Why Choose Us? | Navigate to the Home page and scoll down | See the Why Choose Us? section | Works as expected |
| Boards | Navigate to the Boards page | See the page containing all the products | Works as expected |
| Products | Navigate to the Boards page, and scroll down | See all of the products available | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
  <details><summary>Why Choose Us?</Summary>
    <img src="docs/Validation/UserStoryTests/WhyChooseUsTestStep1.png">
    <img src="docs/Validation/UserStoryTests/WhyChooseUsTestStep2.png">
  </details>
  <details><summary>Boards</Summary>
    <img src="docs/Validation/UserStoryTests/BoardsTest.png">
  </details>
  <details><summary>Products</Summary>
    <img src="docs/Validation/UserStoryTests/ProductsTest.png">
  </details>
</details>

2. As a first time user, I want to learn about the company

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Footer | Scroll down to the bottom of any page | See the social links | Works as expected |
| History | Navigate to the Home page and scroll down to the bottom | See the History of Skate Shack section | Works as expected |
| Google Map | Navigate to the Contact page | See the Google Map | Works as expected |
| Address | Navigate to the Contact page | See the Address above the Google Map | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Footer</Summary>
    <img src="docs/Validation/UserStoryTests/FooterTest.png">
  </details>
  <details><summary>History</Summary>
    <img src="docs/Validation/UserStoryTests/HistoryTestStep1.png">
    <img src="docs/Validation/UserStoryTests/HistoryTestStep2.png">
  </details>
  <details><summary>Google Map</Summary>
    <img src="docs/Validation/UserStoryTests/GoogleMapTest.png">
  </details>
  <details><summary>Address</Summary>
    <img src="docs/Validation/UserStoryTests/AddressTest.png">
  </details>
</details>

3. As a first time user, I want to know how much the product costs

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Boards | Navigate to the Boards page | See the page containing all the products | Works as expected |
| Products | Navigate to the Boards page, and scroll down | See all of the products available | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Boards</Summary>
    <img src="docs/Validation/UserStoryTests/BoardsTest.png">
  </details>
  <details><summary>Products</Summary>
    <img src="docs/Validation/UserStoryTests/ProductsTest.png">
  </details>
</details>

4. As a first time user, I want to learn more about skateboarding

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
</details>

5. As a first time user, I want to learn how to use the product

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
</details>

6. As a first time user, I want to ask questions about my order

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact form | Navigate to the Contact page | See the Contact form and be able to fill it in | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Contact Form</Summary>
    <img src="docs/Validation/UserStoryTests/ContactFormTest.png"> 
  </details>
</details>

7. As a first time user, I want to know why to choose this company

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Why Choose Us? | Navigate to the Home page and scoll down | See the Why Choose Us? section | Works as expected |
| History | Navigate to the Home page and scroll down to the bottom | See the History of Skate Shack section | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Why Choose Us?</Summary>
    <img src="docs/Validation/UserStoryTests/WhyChooseUsTestStep1.png">
    <img src="docs/Validation/UserStoryTests/WhyChooseUsTestStep2.png">
  </details>
  <details><summary>History</Summary>
    <img src="docs/Validation/UserStoryTests/HistoryTestStep1.png">
    <img src="docs/Validation/UserStoryTests/HistoryTestStep2.png">
  </details>
</details>

8. As a first time user, I want to be able to navigate the site easily

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Header | Scroll up to the top of any page | See the logo and nav bar | Works as expected |
| Footer | Scroll down to the bottom of any page | See the social links | Works as expected |
| 404 Page | If a link is broken, or the url is entered incorrectly | See the 404 Page | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Header</Summary>
    <img src="docs/Validation/UserStoryTests/HeaderTest.png">
  </details>
  <details><summary>Footer</Summary>
    <img src="docs/Validation/UserStoryTests/FooterTest.png">
  </details>
  <details><summary>404</Summary>
    <img src="docs/Validation/UserStoryTests/404Test.png">
  </details>
</details>

9. As a returning user, I want to be able to contact the company

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact form | Navigate to the Contact page | See the Contact form and be able to fill it in | Works as expected |
| Google Map | Navigate to the Contact page | See the Google Map | Works as expected |
| Address | Navigate to the Contact page | See the Address above the Google Map | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Contact Form</Summary>
    <img src="docs/Validation/UserStoryTests/ContactFormTest.png">
  </details>
  <details><summary>Google Map</Summary>
    <img src="docs/Validation/UserStoryTests/GoogleMapTest.png">
  </details>
  <details><summary>Address</Summary>
    <img src="docs/Validation/UserStoryTests/AddressTest.png">
  </details>
</details>

10. As a returning user, I want to learn more tricks

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
</details>

11. As a returning user, I want to learn where a physical store is

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Google Map | Navigate to the Contact page | See the Google Map | Works as expected |
| Address | Navigate to the Contact page | See the Address above the Google Map | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Google Map</Summary>
    <img src="docs/Validation/UserStoryTests/GoogleMapTest.png">
  </details>
  <details><summary>Address</Summary>
    <img src="docs/Validation/UserStoryTests/AddressTest.png">
  </details>
</details>

12. As a returning user, I want to look at products

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Boards | Navigate to the Boards page | See the page containing all the products | Works as expected |
| Products | Navigate to the Boards page, and scroll down | See all of the products available | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Boards</Summary>
    <img src="docs/Validation/UserStoryTests/BoardsTest.png">
  </details>
  <details><summary>Products</Summary>
    <img src="docs/Validation/UserStoryTests/ProductsTest.png">
  </details>
</details>

13. As a site owner, I want users to find out about our products

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Boards | Navigate to the Boards page | See the page containing all the products | Works as expected |
| Products | Navigate to the Boards page, and scroll down | See all of the products available | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Boards</Summary>
    <img src="docs/Validation/UserStoryTests/BoardsTest.png">
  </details>
  <details><summary>Products</Summary>
    <img src="docs/Validation/UserStoryTests/ProductsTest.png">
  </details>
</details>

14. As a site owner, I want users to have a good visual experience when using the website

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Header | Scroll up to the top of any page | See the logo and nav bar | Works as expected |
| Footer | Scroll down to the bottom of any page | See the social links | Works as expected |
| Hero Image | Navigate to the top of the Home page | See the Hero Image and cover text | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Header</Summary>
    <img src="docs/Validation/UserStoryTests/HeaderTest.png">
  </details>
  <details><summary>Footer</Summary>
    <img src="docs/Validation/UserStoryTests/FooterTest.png">
  </details>
  <details><summary>Hero Image</Summary>
    <img src="docs/Validation/UserStoryTests/HeroImageTest.png">
  </details>
</details>

15. As a site owner, I want users to be able to see a 404 page if anything goes wrong

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| 404 Page | If a link is broken, or the url is entered incorrectly | See the 404 Page | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>404</Summary>
    <img src="docs/Validation/UserStoryTests/404Test.png">
  </details>
</details>

16. As a site owner, I want to enrich our users' skateboarding experience

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Tricks | Navigate to the Tricks page and find any Trick | See the tricks | Works as expected |
| Trick Videos | Navigate to the Tricks page and find any Trick Video | See the trick videos | Works as expected |

<details><summary>Screenshots</Summary>
  <details><summary>Tricks</Summary>
    <img src="docs/Validation/UserStoryTests/TricksTest.png">
  </details>
  <details><summary>Tricks Videos</Summary>
    <img src="docs/Validation/UserStoryTests/TricksVideosTest.png">
  </details>
</details>

## Bugs

| **Bug** | **Fix** |
|---------|---------|
| Height for most sections wasn't big enough | Removed the max-height value so the height would be as big as the actual content |
| Grid items and Borders not fitting sizing | Added box-sixing: border-box and everything looked as it should |
| Padding issue on tricks page for small mobile phone screens | Removed the padding for smaller screen sizes |
| Social links not directing properly and not opening in a new tab | Corrected all links with http/https, and made them open in new tabs |

## Deployment

The website was deployed through the use of GitHub Pages, a feature built in to GitHub. This can be done by following the steps below.
1. In the desired repository, click on "Settings" from the top menu.
2. From the side menu to your left, select "Pages" in the "Code and automation" section.
3. Make sure the "Source" option is set to "Deploy from a branch"
4. Select the desired "Branch" from the drop down below (main branch in most cases, making sure the director is set to /(root)).
5. Select "Save", and after it refreshes the page, you will see a box at the top of the page providing you with the URL of your now published site.

You can fork my, or any other repository by doing the following.
1. Go to the desired repository
2. Click "Fork" in the upper right corner
3. Select the owner, and set the repository name. A description can be added if desired
4. Choose whether to copy the default branch, or all branches
5. Click "Create Form"

You can clone a repository by following the steps below.
1. Go to the desired repository
2. Click the "Code" button at the top of the files section of the page
3. Select your desired method for cloning (HTTPS/SSH/GitHub CLI)
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory
6. Type "git clone", and then paste the URL you copied earlier. It will look like this, with your GitHub username instead of "YOUR-USERNAME": "$ git clone https://github.com/YOUR-USERNAME/DESIRED-REPOSITORY"
7. Press Enter. Your local clone will be created.

## Credits

### Media

#### Videos

- "How to Ollie in under 4 minutes" Video was taken from Youtube, from the creator "CCS"
- "How to Shuvit & Pop Shuvit | In-Depth Trick Tip | Tactics" Video was taken from Youtube, from the creator "Tactics Boardshop"
- "HOW TO FS 180" Video was taken from Youtube, from the creator "Jonny Giger"
- "How to Kickflip in 5 minutes" Video was taken from Youtube, from the creator "CCS"
- "How to Heelflip" Video was taken from Youtube, from the creator "Jonny Giger"

#### Images

- "main-hero-image-new.jpg" by "Salvio Bhering" on Pexels
- "404.jpg" by "Erik McLean" on Pexels
- "board1.jpg" from "Vol.1 Checker Skateboard Deck (black and white)" on SkatePro.uk
- "board2.jpg" from "Vol.1 Checker Skateboard Deck (purple and black)" on SkatePro.uk
- "board3.jpg" from "Vol.1 Tie-Dye Skateboard Deck" on SkatePro.uk
- "board4.jpg" from "Blue Baker Signature Deck" on SkatePro.uk
- "board5.jpg" from "Red Baker Signature Deck" on SkatePro.uk
- "board6.jpg" from "Green Baker Signature Deck" on SkatePro.uk

### Code

- HTML: For the interactive google map was taken from google maps.
- HTML: "i" tags with the icons and the social media link icons were all imported from FontAwesome.
- CSS: The font "Quicksand" was imported from Google Fonts.
- HTML: The embedded youtube videos' code was edited to fit my site, but originally from Youtube.

## Acknowledgements

I would like to take this opportunity to acknowledge and thank the following people:
- My mentor Mo Shami for continuous guidance and support.
- My mother, who always encouraged me to strive for a career that I enjoy.
- My peers on the Code Institute Slack channels, for advice and feedback.
- My partener Kirsty, for her belief in me, s