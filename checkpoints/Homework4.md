1. What you planned on doing for this homework deadline.
At this point I would like to have the Spotify API incorporated. I will begin by installing the api with npm. This will allow me to send requests to Spotify to manipulate and receive song data, queue data, and user data. I will need to read their documentation on the methods to add songs to queues, search songs, log a user into spotify and get the song data. These methods will be called by the backend of my application which in turn get called from http request sent from the front end by the application users. 

2. What your actually accomplished for this deadline.
For this deadline I worked a lot on integrating the Spotify api into the structure of my application. I was able to successfully have the user login to the application through Spotify which will then save the user to the mongo database and log them in on the app. I have started working on the next turn in task because it will be the majority of the app. The user now has the option to join a party or create one and I will implement their options and functions for next time. I have also began making other calls to the Spotify API such as retrieving songs, artists and albums. These calls return json objects that are very well organized which makes it very easy to parse and use them. 

3. What you had planned to do for the next deadline.
This turn in will be the final app ready for testing. I am hoping to get a lot of it done over Fall break as it is the most work. One thing that I will have to research is how to have a live list of all the songs in the queue, not unlike how all the changes on a Google doc can be seen live by all the users. This week I will also be done with rest of the front end and all the function calls to the backend. For the front end I will have the page, to either join an existing party or create your own new party, fully done with the functions that go along with it. I will also have the main voting page for the members of the party to suggest new songs and other members to vote on those songs. This will require a queue object that is saved and updated to the database when a new song has been approved. I will also have the main page for the host which will have the current song playing as the focus with the usual music controls under it. It will also have the queue list under it with the number of votes listed by each song. The host will have the ultimate control over whether to play the song or not by deleting it for the queue. 

4. 

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/welcome.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/spotify.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/party.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/dialog.png)
