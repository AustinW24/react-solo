import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import EditSongModal from "./components/Home/EditSongModal";
import UploadPage from "./components/UploadPage";
import SinglePost from './components/SinglePost'
import RemoveSongModal from "./components/RemoveSong/RemoveSongModal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
          <Navigation isLoaded={isLoaded} />
      {isLoaded && (
          <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/home">
            <Home />
            <EditSongModal />
            <RemoveSongModal />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/upload'>
            <UploadPage />

          </Route>
          <Route path='/:id/delete'>
            <SinglePost />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
