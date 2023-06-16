import "./App.css";
import SiderBar from "./components/sidebar/Siderbar";
import Dashboard from "./components/dashboard/Dashboard";
import Upload from "./components/dashboard/uploads/Upload";

function App() {
    return (
        <div className="App">
            <SiderBar />
            <div className="second-section">
                <Dashboard />
                <Upload />
            </div>
        </div>
    );
}

export default App;
