# Simple CRUD example app and ViewModel+Bind


## ViewModel

A ViewModel maps to a page/screen. A ViewModel should be named after a page and each page should have a ViewModel. (Rarely a page has 2 ViewModels, for example if there is a Tag/Component that is on more than one page/screen that has it's own ViewModel) So if there is a table in the screen/page, the ViewModel would have a public property of an array or such. If there is a form, the ViewModel would have a public property of an object that has the fields_names that map form_input_names. And if there are 2 tables and two form, then the ViewModel has 2 public arrays and 2 public objects. So binding is easy. And each ViewModel should be discreet. 

The CRUD and Fetch() that ViewModel is just plumbing. 
### 98% of VideModel is mapping it to a view(pug) page|screen.

**CRUD** stands for create-read-update-delete. These are the basic operations that a simple web app would be designed to achieve.

After you will create simple CRUD app you will create your own Firestore database, insert data and add authentication to the app. 

Firestore is Firebase’s new database. It’s designed to store and sync app data at global scale easily. It’s a managed NoSQL document-oriented database for mobile and web development. Firestore includes pure client-side user authentication and can be used from the browser via JavaScript. No custom serverside code is needed. This is key to be able to develop faster.

You will need to learn about http://tabulator.info/ which allows you to create interactive tables in seconds from any HTML Table, JavaScript Array, AJAX data source or JSON formatted data.

## Steps for creating simple CRUD app

1. For an example dynamic web app CRUD in console type: 

        $ mbake -c

    This command will extract the CRUD sample project to your computer. 
     
    *If you are using S3 buckets you can copy the project files (inside of /crud) into the project root, so in a browser you should see the CRUD App served by S3 with your endpoint URL*
 
 2. Navigate to the 'Tabu' menu item and inspect the fragment /tabu/list.pug. 
 Note the #example-table tag and the new Tabulator() function that converts the table into a datatable with headers and data.

3. Now, navigate to the 'ViewModel CRUD' and 'ViewModel CRUD 2' menu items. First inspect the fragment models/OneModel.ts, and its methods (read, add, update, delete and valid), and after that inspect the fragments viewmodel/TableBind.js and view-model-2/bind.js. 

4. To learn Firebase, you will now remap the Firestore connection to your own Firestore. Create a Google account if you don't already have one. Log into https://console.firebase.google.com. Create a project named test-crud. Under the left menu 'Develop - Database', create a Firestore app in test mode. On the Project Overview, click the </> button near 'Add an app to get started' to open a popup. In your mapped project /assets/tags/preRW-tag.pug, overwrite the values for apiKey, authDomain and projectId with the values shown in the Firestore popup and save. 
From the tags folder run: 

        $ mbake -t .

    /layout/layout.pug will use the updated script(src='/assets/tags/preRW-tag.min.js'). 
    In a browser, refresh the Live CRUD page.
 
 5. Inspect /viewmodel/form/FormBind.js and  /viewmodel/form/index.pug. Back in the browser enter some data in the form fields and click 'Save data'. Back in the Firestore Console, in 'Develop - Database', you should see the inserted data as first item in 'table_one'. Repeat to insert a second item. 
 
6. You will now secure the database. In the Firestore Console, on the Rules tab in 'Develop - Database', replace

        allow: read, write;

    with

        allow read, write: if request.auth.token.email_verified == true;

    Publish the change. Only logged in users who have been verified by email can now read from or write to the database. Since you are currently not logged in, 'Add data' on the 'CRUD' screen should now fail.

8. You will now configure and test a sign-in method. In the Firestore Console, in 'Develop - Authentication', click on 'Set up sign-in method'. Enable Email/Password sign-up and save. In the CRUD App, navigate to the multi-purpose 'Auth' screen (/screen/auth/). Enter your email and a password and click the 'Sign Up' button. The new user should appear in the Firestore Authentication list of Users. 
9. Check your email and click on the link you received (The email can be customized on the Firestore Authentication Templates tab). Return to the Auth screen (/screen/auth/) and click the 'Sign In' button. If the login succeeded, 'Save data' on the 'ViewModel CRUD' screen should now succeed, and you should see the added data in the Firestore database console.

## ViewModel+Bind 
**Separate the UI from data** 
ViewModel is a great way of organizing your code, so each section of your code has a purpose, and those purposes are different.
 
* There is a 'models' folder inside assets, where we describe each class/model without UI, its typescript. The models do the heavy lifting, eg: call the service and prepare data in a way that is needed for the View and Pug. To compile the changes in the typescript file, do the command from the 'models' folder:
    
        $ tsc
    
* Each page will have its own binding class eg: TableBind where we do data binding there is no calls to Model classes from the pages. If you want to get any data, you need to create Binding class in the same folder, and from there make a call to the Model class.

In the [next tutorial](/design/), we cover _6 fundamental elements of design_.

NEXT: Go to [6 fundamental elements of design](/design/).