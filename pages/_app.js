import { store } from "@/app/store";
import { Provider } from "react-redux";
import "../styles/_globals.scss";
import Layout from "./layout";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</Layout>
	);
}
