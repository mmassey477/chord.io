1. For the final turn in I will hopefully have tested the app a lot to find any major bugs that I may have created. To do this I will try the app out with my friends as much as I can. I think feedback of users is critical part of web development. It is good to get feedback from an outside source who looks at it differently then you do. Also, for this week I will need to make sure I have the test environment ready for the demonstration. I will need to make sure the docker environment is set up correctly and also make sure my computer is visible from other computers on the network.

2. For this final deadline I ended up doing the majority of the work for this project, which is what I expected to happen even though I tried to prevent it. I added the functionality of a user adding songs the the hosts queue which may sound like an easy task but ended up taking an unbelievable amount of time. This was because Spotifys API does not allow direct access the the users queue which unfortunatley was the basis for my entire project. To combat this I have each party creation make a new collaborative playlist which is supposed to let multiple users add songs to the same playlist. This works on the spotify app but is unfortunatley not supported by the API, so I was back to having no users be able to add any songs. I read a lot of stack overflow questions about this which all said that the permissions I asked of the users when they logged in were not set correctly. So after many hours of tracking down the specific string I need to give Spotify during authentication I was finally able to add songs to the playlist. But then after testing on a different device as a different Spotify user I got an error saying only the creator of the playlist can add songs. A work around I figured out for this was web sockets. When a user other than the host added a song I had the socket broadcast the song to all other connected clients. Then once I received the song I checked to find the host and then used their account to add the song. This is probably a violation of the Spotify API agreemebt but it made my app possible. After getting the queue up and running I worked on a lot of ease of use projects. For example I placed the party Id as a url parameter so if a user refreshes the page the app will know what party they were own and can retrieve the queue. Also I added the ability for a user to sign out of spotify when they are done with the app.


4. 

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/signin.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/signedin.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/popup.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/queue.png)

![alt text](https://github.com/mmassey477/chord.io/blob/master/checkpoints/phone.jpg)
