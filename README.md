<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![GitHub][github-shield]][github-url]

# [MergeMe](https://mergeme.herokuapp.com/) | Social Media Platform

<br />
<div align="center">
  <a href="https://mergeme.herokuapp.com/">
    <img src="logo.jpg" alt="Logo" width="200" height="80">
  </a>

<h3 align="center">MergeMe</h3>

  <p align="center">
    <b>MergeMe</b> is a <b>Social Media Platform</b> with main purpose to <b>Merge</b> people around the globe.<b>MergeMe</b> is a social media platform where people can communicate with each other in real-time, create and share posts, and create networks such as group chats with each other. <b>MergeMe</b> is appealing because it is simple to use without any unnecessary features and thus make it straightforward for the users to <b>Merge</b> with each other. Moreover, the proposed software is special because it implements a real-time chat feature that enables users to chat inside the web application without the need to download any external software such as a messenger.
    <br />
    <a href="https://github.com/GeorgiosIoannouCoder/mergeme"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://mergeme.herokuapp.com/">View Web Application</a>
    ·
    <a href="https://github.com/GeorgiosIoannouCoder/mergeme/issues">Report Bug</a>
    ·
    <a href="https://github.com/GeorgiosIoannouCoder/mergeme/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#key-features">Key Features</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#architecture">Architecture</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://mergeme.herokuapp.com/)

#### <ins>***MergeMe tries to solve the following problem statement in the social media industry:***</ins>

- **People need a social media build by the people for the people, without heavy advertisements and platform negativity!**

### Key Features

1. **Sign-up page with a real-time validation and feedback form.**
2. **Fully customizable profile where people can also upload pictures and edit them in the web application.**
3. **Reset password functionality.**
4. **Live search functionality where users can search for other users and the searches are automatically stored in their search history.**
5. **Follow and unfollow users.**
6. **Add and delete posts and comments.**
7. **Enable location with each post.**
8. **Allow users to like and react with emojis on each post and comment.**
9. **Receive notifications for each new activity that is related to each user.**
10. **Infinite scroll to fetch more data as you keep scrolling down the news feed.**
11. **Real-time chat without the need to reload the web page or download any external software such as a messenger.**
12. **Display the status of each user such as green for online status, grey for away status, and red for offline status.**
13. **An option that allows users to have an instant pop-up message on their screen when they receive a chat message.**

<p align="right"><a href="#readme-top">Back to top</a></p>

### Built With

[![Figma][Figma]][Figma-url]
[![Postman][Postman]][Postman-url]
[![MongoDB][MongoDB]][MongoDB-url]
[![Node][Node.js]][Node-url]
[![Express][Express.js]][Express-url]
[![JWT][JWT]][JWT-url]
[![JavaScript][Javascript]][Javascript-url]
[![HTML][HTML]][HTML-url]
[![CSS][CSS]][CSS-url]
[![React][React]][React-url]
[![Next][Next.js]][Next-url]
[![SemanticUI][SemanticUI]][SemanticUI-url]
[![SocketIO][SocketIO]][SocketIO-url]
[![Nodemailer][Nodemailer]][Nodemailer-url]
[![SendGrid][SendGrid]][SendGrid-url]
[![Cloudinary][Cloudinary]][Cloudinary-url]
[![Git][Git]][Git-url]
[![Heroku][Heroku]][Heroku-url]

<p align="right"><a href="#readme-top">Back to top</a></p>

### Architecture

<div align="center">
  <img src="architecture.png" alt="Architecture">
</div>

<p align="right"><a href="#readme-top">Back to top</a></p>

## Getting Started

**To get a local copy of MergeMe up and running locally follow these simple example steps:**

### Prerequisites

**NOTE:** How to check if Node and NPM are installed and what are their versions

```sh
  node -v
  npm -v
```

**NOTE:** How to check if Git is installed and what is its version

```sh
  git -v
```

1. Please make sure you have Node and npm installed and use Node version: **v16.15.0**. For all other package versions please look at [package.json](https://github.com/GeorgiosIoannouCoder/mergeme/blob/main/package.json) file.
    - You can use nvm to switch between different node versions:
      - Windows: [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)
      - Mac: [https://www.youtube.com/watch?v=BhLFxy6Jz8c](https://www.youtube.com/watch?v=BhLFxy6Jz8c)
      - Linux: [https://www.youtube.com/watch?v=tm1XllMkbAU](https://www.youtube.com/watch?v=tm1XllMkbAU)

2. Please make sure you have git installed
    - Windows: [https://git-scm.com/download/win](https://git-scm.com/download/win)
    - Mac: [https://git-scm.com/download/mac](https://git-scm.com/download/mac)
    - Linux: [https://git-scm.com/download/linux](https://git-scm.com/download/linux)

### Installation

#### SetUp

1. Navigate to the directory where you want to clone/run/save the application

    ```sh
    cd your_selected_directory
    ```

2. Clone this repository

   ```sh
   git clone https://github.com/GeorgiosIoannouCoder/mergeme.git
   ```

3. Navigate to the mergeme git repository

   ```sh
   cd mergeme
   ```

4. Install NPM packages

   ```sh
   npm i
   ```

5. Create a config.env file inside the mergeme directory

   ***Note:***

   ***1. Please put your own MONGO_URI. You can obtain one by creating an account [here](https://www.mongodb.com/) and then create your own organization, project, and cluster.***

   ***2. Please put your own jwtSecret. It can be anything you like.***

   ***3. Please put your own sendGrid_api. You can obtain one by creating an account [here](https://sendgrid.com/en-us).***
   
   ```js
    MONGO_URI=your_online_MONGO_URI
    jwtSecret=here_have_a_random_secret_code
    sendGrid_api=api_key_get_it_from_sendgrid
    ```

6. Create a next.config.js file inside the mergeme directory

   ***Note:***

   ***1. Please put your own your_cludinary_cloud_name. You can obtain one by creating an account [here](https://cloudinary.com/) and then get your own cloud name.***

   ***2. Please change the cloud name in [uploadPicToCloudinary.js](https://github.com/GeorgiosIoannouCoder/mergeme/blob/main/utils/uploadPicToCloudinary.js#L8).***

   ***3. Please change the cloud name in [signup.js](https://github.com/GeorgiosIoannouCoder/mergeme/blob/main/api/signup.js#L12).***

   ***4. Please change the unsigned upload preset name in [uploadPicToCloudinary.js](https://github.com/GeorgiosIoannouCoder/mergeme/blob/main/utils/uploadPicToCloudinary.js#L7).***

    ```js
    module.exports = {
      env: {
        CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/your_cludinary_cloud_name/image/upload",
      },
    };
    ```

7. Run the development server (running at port 3000)

   ```sh
   npx nodemon server
   ```

<p align="right"><a href="#readme-top">Back to top</a></p>

## Usage

To try the MergeMe application click on this [link](https://mergeme.herokuapp.com/)!

You can use the following two accounts to test the application in case that you do not want to register:

1. User
    - Email: stevejobs@apple.com
    - Password: stevejobs123

2. User
    - Email: billgates@microsoft.com
    - Password: billgates123

<p align="right"><a href="#readme-top">Back to top</a></p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right"><a href="#readme-top">Back to top</a></p>

## License

Distributed under the MIT License. See [LICENSE](https://github.com/GeorgiosIoannouCoder/mergeme/blob/master/LICENSE) for more information.

MIT License

Copyright (c) 2023 Georgios Ioannou

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="right"><a href="#readme-top">Back to top</a></p>

## Contact

Georgios Ioannou - [@LinkedIn](https://linkedin.com/in/georgiosioannoucoder)

Georgios Ioannou - [@georgiosioannoucoder](https://georgiosioannoucoder.github.io/) - Please contact me via the form in my portfolio.

Project Link: [https://github.com/GeorgiosIoannouCoder/mergeme](https://github.com/GeorgiosIoannouCoder/mergeme)

<p align="right"><a href="#readme-top">Back to top</a></p>

[contributors-shield]: https://img.shields.io/github/contributors/GeorgiosIoannouCoder/mergeme.svg?style=for-the-badge
[contributors-url]: https://github.com/GeorgiosIoannouCoder/mergeme/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/GeorgiosIoannouCoder/mergeme.svg?style=for-the-badge
[forks-url]: https://github.com/GeorgiosIoannouCoder/mergeme/network/members

[stars-shield]: https://img.shields.io/github/stars/GeorgiosIoannouCoder/mergeme.svg?style=for-the-badge
[stars-url]: https://github.com/GeorgiosIoannouCoder/mergeme/stargazers

[issues-shield]: https://img.shields.io/github/issues/GeorgiosIoannouCoder/mergeme.svg?style=for-the-badge
[issues-url]: https://github.com/GeorgiosIoannouCoder/mergeme/issues

[license-shield]: https://img.shields.io/github/license/GeorgiosIoannouCoder/mergeme.svg?style=for-the-badge
[license-url]: https://github.com/GeorgiosIoannouCoder/mergeme/blob/master/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=0077B5
[linkedin-url]: https://linkedin.com/in/georgiosioannoucoder

[github-shield]: https://img.shields.io/badge/-GitHub-black.svg?style=for-the-badge&logo=github&colorB=000
[github-url]: https://github.com/GeorgiosIoannouCoder/

[product-screenshot]: logo.jpg

[Figma]: https://img.shields.io/badge/figma-a259ff?style=for-the-badge&logo=figma&logoColor=1abcfe
[Figma-url]: https://www.figma.com/

[Postman]: https://img.shields.io/badge/postman-000000?style=for-the-badge&logo=postman&logoColor=orange
[Postman-url]: https://www.postman.com/

[MongoDB]: https://img.shields.io/badge/mongodb-001e2b?style=for-the-badge&logo=mongodb&logoColor=00ed64
[MongoDB-url]: https://www.mongodb.com/

[Node.js]: https://img.shields.io/badge/node.js-303030?style=for-the-badge&logo=nodedotjs&logoColor=3c873a
[Node-url]: https://nodejs.org/en

[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=ffffff
[Express-url]: https://expressjs.com/

[JWT]: https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens
[JWT-url]: https://jwt.io/

[JavaScript]: https://img.shields.io/badge/javascript-323330?style=for-the-badge&logo=javascript&logoColor=f0db4f
[JavaScript-url]: https://www.javascript.com/

[HTML]: https://img.shields.io/badge/html-e34c26?style=for-the-badge&logo=html5&logoColor=ffffff
[HTML-url]: https://developer.mozilla.org/en-US/docs/Web/HTML

[CSS]: https://img.shields.io/badge/css-ffffff?style=for-the-badge&logo=css3&logoColor=264de4
[CSS-url]: https://developer.mozilla.org/en-US/docs/Web/CSS

[React]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=ffffff
[Next-url]: https://nextjs.org/

[SemanticUI]: https://img.shields.io/badge/semantic%20ui%20react-000000?style=for-the-badge&logo=semanticuireact&logoColor=#008080
[SemanticUI-url]: https://react.semantic-ui.com/

[SocketIO]: https://img.shields.io/badge/socket.io-000000?style=for-the-badge&logo=socket.io&logoColor=ffffff
[SocketIO-url]: https://socket.io/

[SendGrid]: https://img.shields.io/badge/sendgrid-1A82E2?style=for-the-badge&logo=sendgrid&logoColor=1A82E2
[SendGrid-url]: https://sendgrid.com/

[Nodemailer]: https://img.shields.io/badge/nodemailer-000000?style=for-the-badge&logo=nodemailer&logoColor=07b6d5
[Nodemailer-url]: https://nodemailer.com/about/

[Cloudinary]: https://img.shields.io/badge/cloudinary-000000?style=for-the-badge&logo=cloudinary&logoColor=07b6d5
[Cloudinary-url]: https://cloudinary.com/

[Git]: https://img.shields.io/badge/git-000000?style=for-the-badge&logo=git&logoColor=orange
[Git-url]: https://git-scm.com/

[Heroku]: https://img.shields.io/badge/heroku-6762A6?style=for-the-badge&logo=heroku&logoColor=ffffff
[Heroku-url]: https://www.heroku.com/
