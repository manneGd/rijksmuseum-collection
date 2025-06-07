import Collections from "./pages/Collections";
import Header from "./components/Header";
import styles from "./pages/Collections.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Collections />
    </div>
  );
}

export default App;
