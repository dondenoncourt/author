
this readme would normally document whatever steps are necessary to get the
application up and running.

things you may want to cover:

* ruby version

* system dependencies

* configuration

* database creation

* database initialization

* how to run the test suite

* services (job queues, cache servers, search engines, etc.)

* deployment instructions

* ...


added ssh on litera box


=== dondenoncourt@gmail.com Apps
infinite-chamber-86506

Don.Denoncourt@Don-Denoncourt author % heroku git:remote -a
 ›   Error: Flag --app expects a value
Don.Denoncourt@Don-Denoncourt author % heroku apps
=== dondenoncourt@gmail.com Apps
infinite-chamber-86506

Don.Denoncourt@Don-Denoncourt author % heroku git:remote -a infinite-chamber-86506
set git remote heroku to https://git.heroku.com/infinite-chamber-86506.git
Don.Denoncourt@Don-Denoncourt author % set git remote heroku to https://git.heroku.com/infinite-chamber-86506.git


And that’s it. At this point, you can start writing your app like you’ve always done. To run it, you just need to type `rake start` and both React and Rails will start. Sweet, just one terminal window!

To deploy your app, you just need to git add ., git commit -m and then issue git push heroku master. Don’t forget to seed your database with heroku run rake db:seed!
