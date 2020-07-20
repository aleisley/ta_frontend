import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { EditDoctor } from './views/EditDoctor';
import { AppointmentList } from './components/AppointmentList';
import { AddAppointmentForm } from './components/AddAppointmentForm';
import { EditAppointmentForm } from './components/EditAppointmentForm';
import { GlobalProvider } from './context/GlobalState';

import { AddDoctor } from './views/AddDoctor';
import { Doctors } from './views/Doctors';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/doctors/create/" component={ AddDoctor } />
            <Route exact path="/doctors/" component={ Doctors } />
            <Route exact path="/doctors/:id/edit/" component={ EditDoctor } />
            <Route exact path="/appointments/" component={ AppointmentList } />
            <Route exact path="/appointments/create/" component={ AddAppointmentForm } />
            <Route exact path="/appointments/:id/edit/" component={ EditAppointmentForm } />
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
