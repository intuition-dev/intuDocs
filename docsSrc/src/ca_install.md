## Tutorial 3: Install the tools for developing to linux box via CA
Next in CA you need to:

2. Change the root password for DO linux box.
3. Install node:

    ```
        $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

        //restart terminal next is one line command):

        $ export NVM_DIR="$HOME/.nvm" 
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

        $ nvm --version

        //(must be 0.33)

        $ nvm install 10

        $ nvm use 10.15
    ```

    and install yarn:

    ```
        $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
        $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
        $ sudo apt install --no-install-recommends yarn
        $ yarn --version
    ```
    _*Note*_: Due to the use of nodejs instead of node name in some distros, yarn might complain about node not being installed. A workaround for this is to add an alias in your .bashrc file, like so: alias node=nodejs. This will point yarn to whatever version of node you decide to use.
    
5. Install mbake CLI:
    ```
        $ yarn global add mbake 
    ```
6. Install ts-node and typescript.
7. Via git, pull the latest version of some project from the git repository.
9. Change some file, pug or .ts or readme - and `git push` to the git repository.

Now you've learned how to develop and operate in the cloud.

In the [next tutorial ](/t2/) you will learn about Pug and static data binding.

NEXT: Go to [Tutorial 4](/t2/).