## Setup CDN storage as your HTTP server and mount it

mbake is Cloud v2.0. You do not need to install or maintain any HTTP, DB or any other server.

## Steps

0. Create an account on [CDN77](https://www.cdn77.com/) if you don't already have one.

1. First create a storage for the app, eg: [cdn77](https://www.cdn77.com)
	
1. Then click CDN link on the top menu.
2. Scroll to the bottom of page -> click `add new SDN storage` 
3. To enable a web end point (server), click CDN link on the top menu again.
4. Click `Add new CDN Resource`.
5. On the radio button click `storage`.

1. Install on Mac [Mountain Duck](https://mountainduck.io) you may choose a different _sftp mount_ software. There are more than a dozen [other choices](http://tinyurl.com/y62extth). Mount replaces FTP.

1. In Mountain Duck, create a new sftp connection. Fill the fields for `server`, `username` with the credentails from your recently created CDN Storage and click by the `url` field value, the mounted folder will open in Finder.

1. To verify that the mount is working, you can put an index.html into the mounted folder _project root_ (e.g. `W:\wgehner-website`) on your file system. You might just copy-paste the `index.html` you generated [here](/#how-to-install-mbake). Then view it in the browser via the Endpoint URL from your recently created CDN Resource.

__Summary__: With Cloud hosting and mount, you can edit apps from your filesystem and see the edits reflected on the web without extra deployment work.

In the [next tutorial](/ca/) you will learn how to mount SFTP to Linux box on CodeAnywhere.

NEXT: Go to [Mount SFTP to linux box via sshfs using CodeAnywhere editor](/ca/).