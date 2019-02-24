
#  10 Pillars related to low-code

## Background and Part I

low-code is akin to O.O, or F.P.. low-code's goal is high development productivity, efficiency and effectiveness.

I discovered LOW-CODE when I went looking for the next wave of software development effectiveness. We go trough many waves, eg: mainframes, mini's like DEC, or data centers: now we use cloud computing. Worth mentioning that when we had data center budgets were $10MM and now with cloud, less than $1MM. Or more academic, if you have a CS degree, you know about 1GL machine, 2GL assembly, 3GL .js and.... what is 4GL? 
Computers get much more powerful every 10 years or so: and result in 10X improved effectiveness of software development! But, we have not had a productivity jump in ~10-15 years. And if you have less experience than 15 years - you may not expect a new wave to change everything. So this article maybe not for you.
But if you do expect a new wave of tech in software development, read on. 

Also, we can use LAMP|MEAN as the representative 'gold standard' of the current generation's as a base line of software productive. eg: WordPress is about 40% of WWW. (Even React FP is 8 years old) So: I went looking for the next level of software productivity.
And I document 10 pillars of the new wave. I'll look at it from a manager's POV. For example, lets say a company got buy without a CTO - but now they want to get to the next level: and you, the reader, is hired to be the new CTO. How do you lead a smart bunch of VPE, Director's and managers of software development to the next levels?

Here is 10 pillar outline, to lead your company to the next level of software development productivity - beyond of the current 10 year old generation. 

## Pillars

### 1. A specific Agile approach
Current Agile treats WAH and remote development as exceptions. An agile flavor called Stanford Flash Teams (SFT) assumes remote is a part of the team. It is more cost effective.
In addition Iterative (incomplete iterations) is helpful - but bit harder to teach. And daily async screen recording replace stand ups.

### 2. UX and user oriented teams 
Developers love to build, and that includes building useless things. Your highest tech leaders must be using 'Intercept/Observe' techniques - eg: screen recordings of users using the web|app - to share with the tech team. 
If you fail to do this, team will be talking about bits and bytes instead, not things that mater in the market or about the users. Some teams spend a lot of time playing, giving in to every temptation. 

### 3. Admin 
One key app is CMS(Blog/Website, et) and they have an admin app - such as WP(Wordpress). Each is app is tow apps: admin plus the app. One is none, two is one. Teams would immediately experience a huge jump in productivity compared to current generation's 'gold standard' in productivity mentioned above. A major cause of this productivity jump is the statically generation! Can be done over S3 as you'll see below.

### 4. Team players 
Maybe your org develops slow or fast: but without art directors and designers your web|app (aka interactive digital) will look bad in the market. The ratio of designers to developers on the team is changing. Maybe you have 1 designer for 4-5 developers today, but in the future you may have 2-3 designers per developer.  (And by designer I mean the designer that know CSS - I don't know why that even needed to be said).
In any case, your individual contributors must know how to work with designers. And have polyglot skills in more than one SASS framework. NIH is poor productivity, better to leverage a documented framework or two.

## Part II and Review

### 5. Learn quickly
Regardless of how you feel about it, in our vocation - you have to be able to master things quickly, and 'forget' older things. Just a fact.
So if OO and FP are over, you have to learn the coming (4GL?) declarative|low-code. One example of declarative|low-code is already known by a large percent of NodeJS developers that use NodeJS 'express' library: It uses Pug instead of HTML. Pug is similar to how eBay developes software using it's less popular 'Marko'. If you have never used Pug - it is a bit like a more powerful version of something called 'Markdown'. You can use Pug with PHP, Python, etc. Most common is to use declarative|low-code with static generators mentioned above. And yes, you do write dynamic apps and dynamic data binding via static generators. A static generator takes the developer friendly declarative|low-code and generates less friendly html|.js. Like how designers uses SASS to generate CSS.
So, be ready to retrain again for coming declarative|low-code. It is coming un-stoppable because it is more productive. So, be ready to learn the next thing. It allows managers to do more with a smaller team. (I'll say like adding an accounting system lets you do more accounting with less book keepers). LOW-CODE also allows those that are less technical to do web|app development. Development is becoming more white collar as computing power is increasing. 

### 6. SEO
There are many orgs competing for consumers - an no one will try your web|app unless they can discover it. So SEO. SEO includes AMP, like it or not. So your generators should be able to write both a web|app page and an AMP version of it. There is more to SEO, but just one point.

### 7. No negativity (towards DRY)
Some people are negative - I hope not many of such people on your team. DRY is good. For example using single code base to target multiple platforms, a hybrid approach. Best way to learn how to do hybrid development is to first learn Electron. I'm not talking about the current approach of React-native: that is two code bases, one for web and one for devices: as a tech leader I want a single code base - aka hybrid approach. 
Only after you learn Electron - then try build.phonegap.com version 8.0+. 
Faster/Cheaper development with full native functionality and performance with a single code base! Web, IOS, Android, PWA. Single code base. Are there people that want to use Swift | Java for some reason? Yes, but that is not a part of the long term future - open wins out. Move in that direction. 
For commercial apps, side benefit is that it makes it easier to keep a hight percent of revenue as you can integrated web. 

### 8. Software apocalypse 
We moved from data centers to Cloud v1: but then used the old familiar architecture, we just moved it to the cloud. It is a mess of a architecure diagram and not maintainable. Cloud v2.0 is fully server-less. Eg: AWS Amplify or better Google FireStore. For example user auth is client side only. A good first project is to move to move user auth Google FireBase and use FireStore for CRUD. Again, pure client side. Or you can hose a web|app on S3 (and mount it, no need for FTP). And use CDN for https certs. If you try it, you'll agree:year over year, head count for back end programers will progress towards 0. The cost savings are akin to going from Data Center to Cloud 1. So going from Cloud 1 to cloud V2.0 is a huge benefit - and produces similar amount of fear. 

### 9. Security
This includes CIO and HR under tech. Companies that want to be safe are moving to PC-in-the-cloud (interesting is http://shop.shadow.tech/usen  ). For example to be safe, you can be browser only in your org, with Chrome-book (or similar OS) company wide. An employee friendly way to lock down.
In any case we find ourself developing in the cloud often. We use tools like Vi. But you can use a Web-IDE (such as CodeAnywhere). I even squint and think of it as Wordpress Admin approach. My point is that in the future we will be doing even development on the web. 

### 10. Benchmarking
You should be able to benchmark your org vs another org in your industry. How quickly can an org in your industry segment developer software, how many pages|screens per day per developer?
There is some evidence out there on the web. And here is the most important part: you should know your productivity. How many pages|screens per day per developer are you doing? Ideally you compare this number before LOW-CODE and after LOW-CODE pillars. As well as operating costs.

## Review

So next wave of development productivity is coming and we can see that it will be low-code. Next wave is here and applied, you can see a hello world LOW-CODE CRUD example here:
- https://github.com/MetaBake/MetaBake-examples/tree/master/examples/crud
or you can run it by installing a LOW-CODE static generator mbake from here:
- https://www.staticgen.com/MetaBakeorg
and then 
   mbake -c

### Self promo
If your org would like to try one or more of the LOW-CODE pillars here please contact vic@mBake.org or wgeher@metabka.org. We can teach your team on site.

Or if you have a project that you want to do in 1/10th of the time at 1/10th of the cost, we'll build it for you. If you have a project that you have a $600K budget, we'll show it deliver at 1/10th of the cost/time! (but if you have a $60K budget and want it done for $6K, we are not the best fit). 



