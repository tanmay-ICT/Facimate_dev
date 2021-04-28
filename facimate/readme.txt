<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/8.4.2/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="/__/firebase/8.4.2/firebase-analytics.js"></script>

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>



<TinderCard className="swipe" key={person.name}>
          <div
            style={{ backgroundImage: `url(${person.url})` }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>

         <Router>
        <Switch>
          <Route path="/chat">
            <h1> Chat </h1>
          </Route>
          <Route path="/">
            <h1> Homepage </h1>
            <TinderCards />
          </Route>
        </Switch>
      </Router>