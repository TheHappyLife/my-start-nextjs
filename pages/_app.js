import GlobalStatesProvider from "@/context/globalStates";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GlobalStatesProvider>
      <Component {...pageProps} />
    </GlobalStatesProvider>
  );
}
