// import Form from "./components/form";
// import './assets/App.css';
import WithLoading from './components/WithLoading';
import MyComponent from './components/MyComponent';
const WrappedComponentWithLoading = WithLoading(MyComponent);
function App() {
  return (
    <>
      <WrappedComponentWithLoading/>
    </>
  );
}

export default App;
