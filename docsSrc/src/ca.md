# Mount linux box folder to another linux box using CodeAnywhere editor

## Setup cloud dev.

1. Setup up a Linux box in the cloud, e.g. [Digital Ocean](www.digitalocean.com).

1. Change the root password for DO linux box. Connect by ssh in terminal. It will ask to enter existing password and then new password:

        $ ssh root@[IP-Address]

1. In CA (assuming that you have an account in CA, done in previous tutorial), connect to the Linux box.

1. In CA, open SSH to the Linux box.


###  Mount folder from Linux machine on another Linux machine

<!-- 2. Login to CA and create a `new connection` to connect to your recently created Linux box in Digital Ocean.
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
1. Change some file, .pug or .js or readme - `$ mbake .` it and push to the git repository.

Now you've learned how to develop and operate in the cloud and you can edit your mounted CDN storage files from CodeAnywhere ssh. -->

In the [next tutorial ](/pug_static_data/) you will learn about Pug and static data binding.

NEXT: Go to [Templating/Pug and static binding](/pug_static_data/).
