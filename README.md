# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Mobile rating page](/images/irc_mobile.png)
![Mobile rating result page](/images/irc_mobile_result.png)
![Desktop rating page](/images/irc_desktop.png)
![Desktop rating result page](/images/irc_desktop_result.png)

### Links

- Solution URL: [GitHub solution](https://github.com/Devs-advocate/Interactive-rating-component)
- Live Site URL: [Netlify deployment](https://interactive-rating-screen.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

I was able to implement better web accessibility into the website. This was accomplished with semantic HTML and web accessibility attribution.
Also the use of "!important" for an overriding style

```html
<button
  type="button"
  class="option"
  aria-label="lowest-rating"
  value="1"
>
  <main class="main-content">
    <section class="how-did-we-do"></section>
  </main>
</button>
```

```css
.option:hover {
  background-color: var(--primary-orange) !important;
}
```

### Continued development

I will continue to learn about web accessibility to enhance the experience of a diverse audience.

## Author

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/@Devs-advocate)
