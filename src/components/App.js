import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import history from '../history';

// <a> tags to navigate is BAD, beacuse it reloads the page, files, state etc

// 58021279711-442h722n1g2v5nh0jbc1bfpo6f0d1vn6.apps.googleusercontent.com

// router type matters at deployment
const App = () =>{
    return (
        <div className="ui container">
            <Router history={history} >
                <div>
                    <Header />
                    <Switch>
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/new" exact component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact component={StreamEdit} />
                    <Route path="/streams/delete/:id" exact component={StreamDelete} />
                    <Route path="/streams/:id" exact component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div>

        /*
        <div>
        <HashRouter>
            <div>
                <Route path="/" exact component={PageOne} />
                <Route path="/2" component={PageTwo} />
            </div>
        </HashRouter>
        </div>
        */ 

        /* 
        <div>
            <MemoryRouter>
                <div>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/2" component={PageTwo} />
                </div>
            </MemoryRouter>
        </div>
        */
    );
};

export default App;