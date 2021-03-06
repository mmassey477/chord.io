1. This week I will be done with rest of the front end and all the function calls to the backend. For the front end I will have the page, to either join an existing party or create your own new party, fully done with the functions that go along with it. I will also have the main voting page for the members of the party to suggest new songs and other members to vote on those songs. This will require a queue object that is saved and updated to the database when a new song has been approved. I will also have the main page for the host which will have the current song playing as the focus with the usual music controls under it. It will also have the queue list under it with the number of votes listed by each song. The host will have the ultimate control over whether to play the song or not by deleting it for the queue. 

2. For this week I ended up spending a lot of time with caching and web sessions. When a user logs in to the application the user object is saved to the mongo database and passed back to the front end. Unfortunatley if the user refreshes the page the user object will disappear. To prevent this from happening I used a web session so whenever a user logs in they start a new session that chaches the user object for 24 hours so they can refresh the page or leave and come back and still be logged into the application. I had to do a lot of research to figure out how this worked but after many trial and errors I was able to accomplish this. I think it was well worth the time because I will have far less Spotify API requests which will help me stay under the free limit for testing. It will also give users more conveince and freedom. Another aspect of the app that I put a lot of time and research into was web sockets. I used a library called socket.io to connect the client directly to my server using web sockets. Web sockets will allow users to see a live queue without having to refresh the page.Sort of like Google Docs. The user can also search for songs and see a brief response back.

3. Also this week, we did some user testing which was very beneficial because I can't really test having two users connect at the same time without having 2 computers. It also gave me a good chance to see how my app will perform when I demo it to the class at the end of the semester. The feedback I received was when a new user logged in it still said my name at the top because my name was still cached on the server so I will have to sort this bug out before the final. Also we were able to pinpoint the IP address my computer exposes to the network which will prove valueable for the live demo.

4. For the final I had planned on doing a lot of testing and revising. Also, for this week I will need to make sure I have the test environment fully ready for the demonstration. I will need to make sure the docker environment is set up correctly and also make sure my computer is visible from other computers on the network which we were able to confirm on Thursday. I will also do the final front end UI because I ran out of time to finish that for this turn in, but it should be a fast and simple proccess because I already have the data on the front end.


5. 

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/welcome.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/spotify.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/party.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/dialog.png)
