# Install WebAdmin Meta 'Intuition'

1. Before you run, create free [emailJs](https://www.emailjs.com) account: so Meta Intuition accounts can be validated via email.
Also create an email template, and note your emailJs `user_id` and `template_id`, you will be asked to enter them during the setup to send verification/password-reset emails to users.

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

   * `:9081/admin` - to add users
   * `:9081/editors` - to edit site

8. Optional: Use HTTP server (eg: [Caddy](caddyserver.com)) to proxy `:9081` to get **https**

**NOTE**: If you make a mistake, or want to start over: `$ yarn global remove intu` will remove the DB and installation. It will not remove your website or your website's content. But it will remove all the editor: you have to add them again.