1. Before you run, create free [emailJs](https://www.emailjs.com) account: so that INTUITION.DEV your local accounts can be validated via email. Also create a email template, and note your emailJs `service_id`, `user_id`,  `template_id`, needed to send validation emails. Yes, user admin is built in.

2. Then install the INTUITION.DEV tool:
    ```bash
    npm i -g intu
    ```
    or you can use yarn instead of npm anytime.

3. In Terminal run command to create a sample CRUD app: 
    ```
    intu -c
    cd CRUD
    npm i
    ```

4. Now you should follow the README.md file there for the full tutorial.
or
    ```
    node index.js
    ```

5. Setup configurations in the browser window `:9081/setup`
   Remember your admin email and password.

6. URL's
   `:9081/admin` - to add users
   `:9081/editors` - to edit site
