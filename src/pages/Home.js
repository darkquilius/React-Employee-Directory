import React from 'react';
import Table from "../components/Table";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";

const Home = () => {
	return (
        <Wrapper>
      <Title>Employee List</Title>
      <Table/>
    </Wrapper>
	);
};

export default Home;