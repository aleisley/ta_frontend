import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import { GlobalProvider } from './context/GlobalState';

import { AddDoctor } from './views/AddDoctor';
import { EditDoctor } from './views/EditDoctor';
import { Doctors } from './views/Doctors';
import { Appointments } from './views/Appointments';
import { AddAppointment } from './views/AddAppointment';
import { EditAppointment } from './views/EditAppointment';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/doctors/create/" component={ AddDoctor } />
            <Route exact path="/doctors/" component={ Doctors } />
            <Route exact path="/doctors/:id/edit/" component={ EditDoctor } />
            <Route exact path="/appointments/" component={ Appointments } />
            <Route exact path="/appointments/create/" component={ AddAppointment } />
            <Route exact path="/appointments/:id/edit/" component={ EditAppointment } />
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
