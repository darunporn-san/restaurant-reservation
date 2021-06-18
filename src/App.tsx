import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "../src/components/Layout/Header";
import Footer from "../src/components/Layout/Footer";
import "./App.css";
import styled from "styled-components";
import Home from "../src/container/Home";
import { Provider } from "react-redux";
import store from "./data/store";
function App() {
  return (
		<Provider store={store}>
			<Layout color="white">
				<Header />
				<Content>
					<Switch>
						<Route exact path="/" component={Home} />
					</Switch>
				</Content>

				<Footer />
			</Layout>
		</Provider>
	);
}

export default App;

const Layout = styled.div`
	background-color: ${(props) => props.color};
	min-height: 100vh;
	font-family: "Rajdhani", sans-serif;
`;

const Content = styled.div`
	padding-left: 10rem;
	min-height: calc(100vh - 120px);
	padding-right: 10rem;
	padding-bottom: 3rem;
	/* margin-bottom: 60px; */
	background-color: #ededed;
`;

