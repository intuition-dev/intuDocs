<!-- $theme: gaia -->
<!-- prerender: true -->
<!-- $size: 16:9 -->
<!-- footer: www.INTUITION.DEV -->

<!-- *template: invert -->

#  [==MetaBake==](https://INTUITION.DEV)

#### A meta-programming open source CLI tool
<!-- reword this? -->

---

<!-- *template: invert -->
# A Bit Of History
<!-- img -->

---
## A Bit Of History
#### The first website, was static
- Browsers were simple document viewers, where information played a key role and minimal markup allowed to structure it.

![30% center](images/first-website.png)

---
## A Bit Of History
#### Waves Of Technological Change

- During the first decade of 00's, websites grew in complexity. Content-driven and 2.0 dynamic web reshaped again how we thought and built websites.
- It was the time of LAMP stack and with CMS like Wordpress in consideration, we started to see many _citizens_ without development knowledge at all pull out website presences without any training or experience.

---
<!-- *template: invert -->

# The Current State Of Affairs

---

## The Current State Of Affairs
#### JavaScript Fatigue

- In the last years, we've all experienced the _javascript fatigue_ that came pouring out of a storm of frameworks.  
- In many cases, there seems to be no clear goal and  often times it leads to _overengineered solutions_ that leave you more exhausted and confused instead of aiding your workflow.

<!-- picture of javascript frontend hell -->
---

## The Current State of Affairs
#### What about SEO :question:

- Web crawlers currently implement someways for discovering content in either virtual DOM / front-end rendered websites.
- The case for SEO
<!-- complete -->

---

## The Current State of Affairs
#### Back to Basics: From Client-side to Server-side

|Client-side (Dynamic)| Server-side(Static)|
|:--|--:|
Compiled on the fly | Pre-generated |
Low Resource | Resource-intensive |
Usable offline | Online only |
Secure by default | Needs Security |

<!-- cite source -->

---

## The Current State of Affairs
#### Back to Basics: from LAMP to JAM stack
-  ==**JavaScript**== Any dynamic programming during the request/response cycle is handled by JavaScript, running entirely on the client. This could be any frontend framework, library, or even vanilla JavaScript.
-  ==**APIs**== All back-end processes or database actions are abstracted into reusable APIs, accessed over HTTPS with JavaScript.
-  ==**Markup**== Templated markup should be prebuilt at deploy time, usually using a site generator for content sites, or a build tool for web apps.
<small> source: https://jamstack.org/</small>

---

## The Current State of Affairs
### Back to Basics: Static Generators

#### Remember the apocalypse of backend?
- Many of the constraints that cornered static generated websites and placed upfront dynamically generated sites have fallen away, and will continue to do so. 
- ==**Modular services**== and ==**CDN**== based hosting/deployment  are becoming more pervassive.
- In a mobile era, ==**performance**== is a must: Loading speed of Static Generated Sites is unparalleled.

---
## The Current State of Affairs
### Git vs Mount
- Writing directly in Markdown and working with Git it's a default workflow for developers. But it's not so for average consumers who may find it discouraging .
- There is still a current Gap on how to bring together an easy-to-use for consumers CMS and static website generation.
- Workflows based on mounting Webdav could solve the problem for huge content management systems that are used by average citizens and not developers.
<!-- explain advantages of mount -->

---

## The Current State of Affairs
### We have not seen a productivity jump in ~10 years.
<!--- refer back to waves of tech change --->
<!-- show 1GL/2GL/3GL/4GL changes -->

---
<!-- *template: invert -->

# A Glimpse Into The Future
![70% center](./images/lajetee01-1.jpg)

---
## A Glimpse Into The Future

### The apocalypse of Backend

- ==**CDN**== is cheaper and quicker
- However, CDN is problematic with dynamic sites due to notorious cache invalidation
- A breeze to use with Static Generators

<!-- pic of CDN usage -->

--- 
## A Glimpse Into The Future

### The apocalypse of Backend

- Serverless
- AWS, FireStore FaunaDB, and more
- Hosted REST SaaS
- Deliver for both mobile and web from a single pure API

---
## A Glimpse Into The Future
### Every web app is a mobile app and every mobile app is a web app
<!-- explain about PWA guidelines-->
- People are savyy regarding their mobile device storage
- If a PWA offers same experience as an instalable app the user will probably prefer the PWA

---
## A Glimpse Into The Future
### What will shape Front-End from 2019-2020
- Server-less
- CDN
- Static Generators 
- Mount

---
## A Glimpse Into The Future
### What will shape Front-End from 2019-2020
- Components
- Markdown
- Code the prototype
- Increasing Automation
- Digital transformation & rise of citizen developers
---

<!---*template: invert --->
#  Closing the Gap between Past, Present and Future of Web Development:
## MetaBake

---
<!---*template: invert --->
# Why MetaBake

---

## Why MetaBake
#### Goal: Web App and Cross Platform *Productivity*

- INTUITION as a tool aims for high-productivity by bringing together what we have learnt from the past years of Front-End experimentation with atemporal pillars of good development approaches.
- In a future with increasing automation. Citizen developers will become more widespread.
- Our goal as developers is to be able to both outperforming competent citizen developers in speed and leaving room for focusing on excellent UI and UX.

---

## Why MetaBake

##### Unlike other low-code tools, INTUITION it's fully Free and Open Source.

##### Simple starter requirements:
- There is almost no learning curve. JS, HTML and CSS is all you need.
- If you are already familiar with Sass/scss and engines. You will ace it.
- mbake is not even a framework as we don't favour _highy opinionated_ solutions. It's both a CLI tool that aims for meta-programming with high productivity  and a library of reusable _framework-agnostic_  Custom Elements.

---

## Why MetaBake
### ==It allows you to:==
- Gradually Adopt it
- Leverage a single codebase and SasS as the Only architecture
- You can onboard easily all kinds of developers. From citizen developers to junior and senior developers.
- CMS-aware Static Websites and simple custom CMS

---
## Why MetaBake
### ==Aims for:==
-  Serverless CRUD
-  SEO and Competitive Content Marketing
-  AMP & Components
-  CMS
-  Cross-platform (Cordova/PhoneGap)
-  UI First
---
## Why MetaBake
### ==Aims for:==
#### ServerLess CRUD


- You can scaffold and explore and example CRUD app with this simple command:
```
$: mbake -u
```
- And start building an app easily integrated with Firebase, FaunaDB, AWS, etc.

---
## Why MetaBake
### ==Aims for:==
#### SEO and Competitive Content Marketing

- with dat.yalm for front matter adding meta head tags is just a breeze.
<!-- show example from blog -->

---
## Why MetaBake
### ==Aims for:==
# Focus on UI Design

*"Design is a Form of Authority."*
- Use to your advantage the CSS Preprocessors and Frameworks.
- ==**Creativity**== cannot be automated.
- Consider Design a key target, not a disposable.
<!---img of design// hierarchy of needs in design--->

---
<!---*template: invert --->
# INTUITION Pillars

---

## INTUITION Pillars
### ==Based on:==
- Automatic Programming
- Static Generation & Templating Markup
- Dynamic Data Binding
- Library of Custom Elements 
- Website Prototyping and Iterative Development
- CLI/Keyboard, not GUI

---

## INTUITION Pillars
### Static Generation & Templating Markup
- Pug is an elegant template engine. Think of it like MarkDown but better
```
html
  head
    title= pageTitle
  body
    h1 Header Text
    #container
      if someCondition
        p This paragraph is rendered if true
      else
        p Otherwise, this one is rendered
```

---
## INTUITION Pillars
### Dynamic Data Binding
<!-- code example -->
==**index.pug**==
```javascript
header
  body
    p Hello #{key1}
```
==**dat.yaml**==

```javascript
key1: World
```

---

## INTUITION Pillars
### Library of Custom Elements. 

##### Advantages:
- Custom Elements are a framework-agnostic specification that aims for increased modularization, reusability and maintanability of code.
- Custom Elements are part of an approach to fully dismantle monolithic web apps and develop a truly reusable library of solutions.
- The DOM of the Custom Element acts as the API: a team of developers doesn't need to know how a component is implemented in order to use it.

---
## INTUITION Pillars
### Library of Custom Elements. 
##### Advantages:
- You can compose a full web app just by bringing together well designed Custom Elements. You don't need a monolithic JS Framework or a whole lot of dependencies.
- Each Component will connect with a backend microservice if needed.
- Locally scoped CSS is possible too. Forget about CSS colliding across all the app

---

## INTUITION Pillars
### Website Prototyping and Iterative Development
- INTUITION supports all the development cycle of a product. From prototyping to completion.
- You can star building and experimenting easily and then build on top of it, maximizing the reusability of every step.
---

## INTUITION Pillars
### CLI/Keyboard based

- We all know that keyboard based tools are much quicker and customizable to your workflow than being constrained in a GUI.
- INTUITION is CLI based with easy commands for building and compiling.
- For instance:
````
$: mbake -t . // compile all your typescript files
$: mbakeX -c . // compile all your components
$: mbake -s . // compile all your .scss into .css
`````
---
<!--template: gaia -->
## MetaBake
#### Practical Example

<!--- td --->
<!--- perhaps include a video here on how a the CMS + CMS works ? -->

----
## MetaBake
# Get Started 
```javascript
$ yarn global add mbake
$ mbake -w .
$ cd website
$ mbakeX -w .
```
#### :arrow_right:  https://INTUITION.DEV/
#### :arrow_right: https://github.com/MetaBake

---

# Thank you!

#### https://INTUITION.DEV
<!--- place logo --->
<small> Slides written with Marp</small>

