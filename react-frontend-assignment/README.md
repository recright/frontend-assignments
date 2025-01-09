# Recright frontend developer trainee assignment (React version)

This is a simple assignment for Recright's frontend developer trainee position. It tests multiple levels of basic frontend skills. Please read instructions carefully.

Don't panic, it doesn't have to be perfect. Do your best and show us what you can do.

## Assignment instructions
The assignment is to create a simple web page with React. All neccessary files and libraries are provided in this repository. Do not use CSS frameworks like Bootstrap, Tailwind or Material-UI.
- Page should look same as in the provided layout pictures (desktop and mobile).
- List of posts should be fetched from a provided REST API endpoint and displayed on the page.
- When form is submitted it should console.log form data, hide the form and show a thank you message.

## Layout pictures

Layout pictures can be found in folder layout_pictures. There are four pictures, one for desktop before submitting the form and one after. Then there are two pictures for mobile, one with navigation closed and one with navigation open.

## REST API endpoint

Here's an endpoint you should use to fetch posts. It returns 3 posts in JSON format:
`https://jsonplaceholder.typicode.com/posts?_limit=3`

## Assets and colors
- Image assets are provided in the static folder and can be reaches like this: <img src="/hero_img.png" alt="hero image" />

Colors:
- Rose: #F9D6D2
- Red: #D63D3F 
- Black: #000000
- White: #FFFFFF

## Icons

React-icons library is already installed and you can use icons like so: 
```
import { FaBars, FaTimes } from "react-icons/fa";

<FaBars />
<FaTimes />
```

## How to get started
1. Make sure you have node.js installed on your computer (least version 18). You can find node.js here https://nodejs.org/en/download
2. Clone this repository
3. Change directory to this react-frontend-assignment folder. 
4. We have provided you most of the needed JSX code. You need to write CSS and JS to make it look like the provided layout pictures and work like described in the assignment instructions.
5. Run terminal command `npm install`
6. Run terminal command `npm run develop` to start development environment
7. Open your browser and go to `http://localhost:8000/`
8. Write your code using the provided layout pictures, instructions and provided files and libraries


## How to return the assignment
1. Create a new public git repository in your own GitHub account
2. Push your code to the repository
3. Add the link to the repository to the application form
