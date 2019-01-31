# Mount S3 to linux box via goofys using CodeAnywhere editor

## Setup cloud dev.

1. Setup up a Linux box in the cloud, e.g. [Digital Ocean](www.digitalocean.com).

1. Change the root password for DO linux box. Connect by ssh in terminal. It will ask to enter existing password and then new password:

        $ ssh root@[IP-Address]

1. Setup a Web IDE account, e.g. [CodeAnywhere](https://codeanywhere.com) online text editor (hereafter CA)

1. In CA, connect to the Linux box.

1. In CA, open SSH to the Linux box.



### Cloud Mount S3

1. Setup S3 mounting software.

		$ cd ~
		$ sudo wget http://bit.ly/goofys-latest
		$ mv goofys-latest goofys
		$ sudo chmod +x goofys

		//just in case you need logs
		$ ln -s /var/log ~

2. In mbake, you should be comfortable mounting to the local PC. Now we mount in the cloud using CA.

		//edit your credentials, [other2] part is very optional, if you need 2 mounts.
		$ mkdir ~/.aws

3. In CA edit ~/.aws/credentials

		[default]
		aws_access_key_id = KEY
		aws_secret_access_key = SECRET
		[other2]
		aws_access_key_id = KEY2
		aws_secret_access_key = SECRET2

4. Make a directory in which you'll mount s3 bucket

		$ mkdir folder_name
		// check if folder was created
		$ ls -la

5. Mount your S3 bucket into it, use your BUCKET-NAME and folder_name

		~/goofys --profile default -o allow_other --use-content-type BUCKET-NAME ~/folder_name

		// check to see your S3 webapp files
		ls -la

		// if errors, check /var/log/syslog for direction

1. Install node, yarn and mbake
1. Via git, pull the latest version of some project from the git repository.
1. Change some file, pug or .ts or readme - `mbake .` it and `git push` to the git repository.

Now you've learned how to develop and operate in the cloud and you can edit your mounted bucket files from CodeAnywhere ssh.

In the [next tutorial ](/pug_static_data/) you will learn about Pug and static data binding.

NEXT: Go to [Templating/Pug and static binding](/pug_static_data/).