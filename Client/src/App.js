import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./helpers/PrivateRoute";
import "./App.css";

const Register = lazy(() => import("./components/Register"));
const Login = lazy(() => import("./components/Login"));
const Home = lazy(() => import("./containers/Home"));
const CreateClient = lazy(() => import("./components/CreateClient"));
const EditClient = lazy(() => import("./components/EditClient"));
const Layout = lazy(() => import("./containers/Layout"));
const DisplayCLients = lazy(() => import("./containers/DisplayClients"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Register} />
              <Route path="/login" component={Login} />
              <Layout>
                <PrivateRoute path="/admin" component={Home} />
                <PrivateRoute path="/create-client" component={CreateClient} />
                <PrivateRoute path="/edit-client/:id" component={EditClient} />
                <PrivateRoute path="/home" component={DisplayCLients} />
              </Layout>
            </Switch>
          </Suspense>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
