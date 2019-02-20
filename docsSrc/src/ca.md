# Mount SFTP to linux box via sshfs tool using CodeAnywhere editor

## Setup cloud dev.

1. Setup up a Linux box in the cloud, e.g. [Digital Ocean](www.digitalocean.com).

1. Change the root password for DO linux box. Connect by ssh in terminal. It will ask to enter existing password and then new password:

        $ ssh root@[IP-Address]

1. Setup a Web IDE account, e.g. [CodeAnywhere](https://codeanywhere.com) online text editor (hereafter CA)

1. In CA, connect to the Linux box.

1. In CA, open SSH to the Linux box.



###  Mount SFTP through sshfs

1. First create a storage for the app, eg: [cdn77](https://www.cdn77.com)
	
	How to use CDN 77 sftp / edge https server:

	1. Click CDN link on the top menu
	2. Scroll to the bottom of page -> click `add new SDN storage` 

	To enable a web end point (server):

	3. Click CDN link on the top menu again
	4. Click `Add new CDN Resource`
	5. On the radio button click `storage`
	
2. Than login to CA and create a `new connection` to connect to your recently created Linux box in Digital Ocean.
3. Open terminal in CA in this linux box and install `sshfs` for mount:

		$ apt install aptitude
		$ apt-add-repository universe
		$ sudo apt-get install sshfs
		$ mkdir mount // change [mount] with any name you like
		$ sshfs user_kpq3rmpl@push-33.cdn77.com:/ mount
		// ($ sshfs [user]@[host]:/ [name-of-folder-to-mount-in]) 

	now you will have a mount directory in your linux box that has mounted CDN Storage inside.
	For more information on installing sshfs on linux check [Using SSHFS To Mount Remote Directories](https://www.linode.com/docs/networking/ssh/using-sshfs-on-linux/)

1. Then on linux box install node, yarn and mbake.
1. Via git, pull the latest version of some project from the git repository in your `mount/www` folder.
1. Change some file, .pug or .ts or readme - `$ mbake .` it and push to the git repository.

Now you've learned how to develop and operate in the cloud and you can edit your mounted CDN storage files from CodeAnywhere ssh.

In the [next tutorial ](/pug_static_data/) you will learn about Pug and static data binding.

NEXT: Go to [Templating/Pug and static binding](/pug_static_data/).