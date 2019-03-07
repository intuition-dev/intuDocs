# Mount linux box folder to another linux box using CodeAnywhere editor

## Setup cloud dev.

1. Setup up a Linux box in the cloud, e.g. [Digital Ocean](www.digitalocean.com).

1. Change the root password for DO linux box. Connect by ssh in terminal. It will ask to enter existing password and then new password:

        $ ssh root@[IP-Address]

1. In CA (assuming that you have an account in CA, done in previous tutorial), connect to the Linux box.

1. In CA, open SSH to the Linux box.


### Mount webDAV from linux box on another linux box via CA:

We'll be mounting using `davfs2` — a Linux file system driver that allows to mount a WebDAV resource.

1. Install `davfs2`

		$ cat <<EOF | sudo debconf-set-selections
		davfs2 davfs2/suid_file boolean false
		EOF
		$ sudo apt-get update
		$ sudo apt install -y davfs2

1. Reconfigure `davfs2` to enable to use `davfs` under unprivileged users

    	$ sudo dpkg-reconfigure davfs2

1.  Create a directory: 

		$ mkdir ~/.davfs2

    create file:

    	$ vim ~/.davfs2/davfs2.conf

    with contents:

		```
		secrets /root/.davfs2/secret
		```
    	// press `a` keyboard button to run edit mode --> edit file --> `esc` --> `:w`(for saving) --> `enter` --> `:q` (to quit the file) --> `enter` 

1. Edit `~/.davfs2/secrets` file to add credentials to remote WebDav diectory:

    	$ vim ~/.davfs2/secrets

    Add a line to the end of file in following style:

		```
		https://<WebDav URI>   <username> <password>
		```

    eg: 
		```
		http://157.230.189.157:8080/webdav/www   admin 123123
		```

    Set the permission: 

		$ chmod 600 ~/.davfs2/secrets

1. Make a directory in which you'll mount

    	$ mkdir mount

    Add a line to `/etc/fstab` about the remote WebDav directory

    	$ vim /etc/fstab

		```
		https://<WebDav URI> <mount point>
		davfs user,noauto,file_mode=600,dir_mode=700 0 1
		```

    eg:
		```
		http://157.230.189.157:8080/webdav/www /root/mount davfs user,noauto,file_mode=600,dir_mode=700 0 1
		```

1. Add your user to the davfs2 group

		// check user:
		$ whoami
		$ sudo vim /etc/group

    Add your username as follows:

		```
		davfs2:x:134:<username>
		```

    eg:

		```
		davfs2:x:134:root
    	```

1. That's it. You can use following commands without being a root user to mount/umount

		$ mount <mount point>
		$ umount <mount point>

    eg:

		$ mount /root/mount
		$ umount /root/mount

In the [next tutorial ](/pug_static_data/) you will learn about Pug and static data binding.

NEXT: Go to [Templating/Pug and static binding](/pug_static_data/).
