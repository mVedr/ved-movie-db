<h1>Official Documentation</h1>

<h3>You can visit the site here  : https://ved-movie-database.netlify.app/ </h3>

<h4>This is my first-ever project based on react, and also the first one I've hosted.</h4>

<h5>Even though I have made many more complex and larger projects using react , flutter and next js, I have submitted this code as it is very clean and simple to understand.</h5>

<h3>Some of the Projects:</h3>

My Blog Website(https://github.com/mVedr/my-blog)

My Mobile App(https://github.com/mVedr/orange-io)

A Video Chat App(https://github.com/mVedr/video-chat-app)


<h3>Packages Used:</h3>

<table>

<tr> 
<th>Packages Used</th>
<th>Reason</th>
</tr>

<tr>
<td><a href="">Axios</a></td>
<td>For making http requests to TMDB Server</td>
</tr>

<tr>
<td><a href="">react-router-dom</a></td>
<td>For managing routing of the app</td></tr>

<tr>
<td><a href="">react-loading-skeleton</a></td>
<td>For styling movie cards when they are not loaded yet.</td>
</tr>

<tr>
<td><a href="">react-responsive-carousel</a></td>
<td>For styling movie cards .</td>
</tr>
</table>

<h2>Installation And Setup</h2>
<h4>1) Make sure you have Node Js installed</h4>
Check for this by the following command :
node --version

If the command is getting recognised, then good to go. Otherwise can be downloaded from here.

<h4>2) Then go to preferred directory and clone this project by running :</h4>
git clone https://github.com/mVedr/ved-movie-db.git


<h4>3) Now move into the directory 'ved-movie-db' :</h4>
cd ved-movie-db


<h4>4) Now install all the required dependencies by simply running :</h4>
npm install

<h4>5) Now get api key from here.</h4>
It is optional though, because in this case user can simply use my key, but it is better to store our api keys safely in a .env file.
I have not done that here, so that user can avoid the hassle of creating a new api key.

<h4>6) Finally run this command and visit 'http://localhost:3000/' :</h4>
npm run start

<h2>Things I learned during this project</h2>

<h3>Dynamic API requests</h3>
Even though this is a pretty basic project, one thing I had to work very hard on was the search functionality.
Displaying popular movies was pretty easy as the api had only one end point. But search functionality required input from users dynamically and the hence api endpoints changed based on the user inputs.

<h3>Delaying response time manually</h3>
Another difficulty I faced was , I wanted the page to reload after every new input, but the issue was that page was getting refreshed before the data from api was being collected, hence no changes were being made in the webpage. So I thought of maintaining a counter which counts upto 1000 and then performs the reload.
