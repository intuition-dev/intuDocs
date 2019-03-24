# Dynamic data/CRUD/'ViewModel'

This section relates to dynamic data, not static content. To extract an example CRUD web-app in the current folder:
```sh
mbake -u
```
It has a README.md in root of the website that you can glance.

For CRUD, we'll take it in steps. It should be easier, but there is some wider knowledge needed.


## CRUD Step 1 - Table

- You should know HTML Forms, default UI style is http://github.com/kumailht/gridforms
- For table we use http://github.com/olifolkerd/tabulator
in the ./CRUD/screen/tabulator you can see the example. You should at least glance it.


## CRUD Step 2 - ViewModel! and UI-first

The screen in ./CRUD/screen/tabulator, lets work with just that one screen for a bit.

It has a 'databinding' (TabulatorBind.js) and it reads from a VidewModel(VM), in ./CRUD/assets/TabulatorViewModel.ts!

So lets zoom out for a second for the Table example: 
- There is a view: index.pug (that extends a layout). The view contains the table Tabulator.js from above linked github
 (and tabulator.js is loaded via depp.js)
- The view has a databinding to get/set 'fields' in the view.
- The databinding uses a VM: ./CRUD/assets/TabulatorViewModel.ts

Briefly, a VM is a VM when it's 'public' methods 'map' to the view. And it is the VM that calls remote API services.


### VM - The main part

So what is VM? It is the keystone of the modern M-VM-V application architecture.
A VM's public methods map to a view. That is 99% of a VM. It is a class where it's public methods map to the view(in our case Pug):
- If you have 2 tables in your view, then VM needs to have 2 arrays 
- If you have 2 forms in your view, then VM needs to have 2 objects, since objects have name-value pairs. 
- If you have 2 charts in your view, then VM needs to have 2 objects in a way that makes it easy to bind to the chart.

In the same way a server side 'ORM Model' may 'map' to the a table|document fields, the VM maps to the view. The VM does not represent server side ORM or stores in any way - it ignores it!
The VM maps to the view, and makes it easy to map/bind to the view.
So a VM is a complex VM that fully maps to the View!
If you change the View, you must change the VM and if you change the VM, you must change the View.
One of the goals of VM is to make it easy to 'bind' to the view, so VM must represent the View as a 'model' of it.

In object-oriented development you should avoid deep inheritance for the VM, just a plain class may work best. But in .ts we do
use interface to demonstrate that the class maps to the Pug view. When .ts is compiled to js those interfaces are dropped. 

Once you understand VM, proceed to the rest of this document.


#### Important: The VM should have 'fake' data during iterative development. 

This enables rapid prototyping. During the early iterations you are just making sure the view is what the customer want's - without any 
regard how the data will be retrieved or stored! Because the challenge is to understand the requirements and what value customer
derives from that screen/page. Implementing (REST or similar) services later is not the challenge for experienced developers - so focus on UI and the requirements and rapid iterations. 


### VM - Part 2



Validation
remamping


QA



Table, Forms, FireStore|DreamFactory and Validation, Auth




Additional information link: https://github.com/metabake/MetaBake/tree/master/CRUD

UI First

For back end we had to use something, so we used Google FireStore, so you'll have to review the docs on their site for any back end code.
