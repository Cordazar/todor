```
_________ _______  ______   _______  _______ 
\__   __/(  ___  )(  __  \ (  ___  )(  ____ )
   ) (   | (   ) || (  \  )| (   ) || (    )|
   | |   | |   | || |   ) || |   | || (____)|
   | |   | |   | || |   | || |   | ||     __)
   | |   | |   | || |   ) || |   | || (\ (   
   | |   | (___) || (__/  )| (___) || ) \ \__
   )_(   (_______)(______/ (_______)|/   \__/
```
                                             

Todor is a backend API used to store and retreive TODO's for individual users

A TODO includes the following data:

- description text
- status (todo, done, in progress, etc)
- age

Todor exposes RESTFUL API endpoints that provides the following services:

- list TODO's
- create a new TODO
- update a existing TODO
- search TODO's

Todor only allows authenticated users to interact with the system.

Listing todos only returns the current users TODO's.

The search endpoint returns any TODO regardless of who owns it.

The search endpoint accepts parameters for sorting by status, age and user.

All libraries included with Todor are free to use, modify or not use at all.
