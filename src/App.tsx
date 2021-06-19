import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from "../src/components/Layout/Header";
import Footer from "../src/components/Layout/Footer";
import "./App.css";
import styled from "styled-components";
import Home from "./container/Home";
import Profile from "./container/Profile";
import Login from "./container/Login";
import Register from "./container/Register";
import {
	useLocation
  } from "react-router-dom";
function App() {
	let location = useLocation();

  return (
	  <>
			<Layout color="white">
				<Header noHead = {location.pathname === '/' || location.pathname === '/profile'?false:true}/>
				<Content>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />

					</Switch>
				</Content>

				<Footer noFooter = {location.pathname === '/' || location.pathname === '/profile'?false:true}/>
			</Layout>
	</>
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
	min-height: 100vh; 
	padding-right: 10rem;
	padding-bottom: 3rem;
	background-color: #ededed;
`;

