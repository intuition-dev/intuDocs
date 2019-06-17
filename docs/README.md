
# Meta Intuition

## 'It will lead you IN the right direction' 

#### Meta Intuition is WebAdmin Screen to CMS, e-Com, et al.

In WebAdmin, you can edit pages' content using markdown which won't let you page become broken, you only edit the content/text itself and all other things is done for you after you click "save". It allows you clone existing pages to write another post/page, upload images and set publish date to posts. 

WebAdmin has **Admin screen** where you need to select type of site or choose the existing site to edit and **Editor screen** where you can perform operations with the content. WebAdmin also supports multiple editors users, which can be added in Admin screen and users will be notified about it via email.

## Overview

WebAdmin is based on JavaScript and SQLite. It is using [markdown](https://daringfireball.net/projects/markdown/syntax), and is written on [pug](https://pugjs.org/api/getting-started.html).
So it has two parts:

- admin screen: where all settings are set up and users are added 
- editor screen: the editor itself, where users can login and content of a chosen site can be managed


# Install WebAdmin Meta 'Intuition'

1. Before you run, create free [emailJs](https://www.emailjs.com) account: so Meta Intuition accounts can be validated via email.
Also create an email template, and note your emailJs `user_id` and `template_id`, you later will be asked to enter them in the admin screen to send verification/password-reset emails to users.

2. Create a (linux) instance in the cloud, for example on [Digital Ocean](www.digitalocean.com). 

2. Optional: If you will run a large site with terabytes and petabytes, create a NAS, or you can migrate later.

3. Install node, yarn

4. Then install the app:
    ```sh
    $ yarn global add intu
    ```

5. In terminal run command to start the app: 
    ```sh
    $ intu
    ```

6. Setup configurations in the browser window `:9081/setup`
Remember your admin email and password.

7. Fast URL's
   `:9081/admin` - to add users
   `:9081/editors` - to edit site

8. Optional: Use HTTP server (eg: [Caddy](caddyserver.com)) to proxy `:9081` to get **https**

**NOTE**: If you make a mistake, or want to start over: `$ yarn global remove intu` will remove the DB and installation. It will not remove your website or your website's content. But it will remove all the editor: you have to add them again.


# Quickstart

1. Install and run the app:

```sh
$ yarn global add intu
$ intu
```


2. `/setup` page will automatically open in browser.
    Set up email and password for the admin user on this screen.
3. Then login (with this credentials) to admin app: `/admin`
4. Enter and save **path to your site**, **emailJs settings** and choose which **starter site** to extract **or** use your **existing site**.
    Add editor user.
5. Login to editor app: `/editor` (with the credentials for just created editor user)
6. Now you can manage your site content, choose files and directories on the left.