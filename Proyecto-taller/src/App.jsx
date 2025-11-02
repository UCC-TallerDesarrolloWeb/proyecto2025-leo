import Header from "@components/Header";
import Cart from "@components/Cart";
import AppRouter from "@router/AppRouter";
import "@styles/main.scss";

export default function App() {
  return (
    <>
      <Header />
      <Cart />
      <AppRouter />
    </>
  );
}
