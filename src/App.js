import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux"
import Routes from "./routes/router"
import store from "./store"

function App() {
  return (
    <Provider store={store} className="App">
    <Routes/>
    </Provider>
  );
}

export default App;
