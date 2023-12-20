import React from 'react';
import styled from "styled-components";
import pic from './assets/images/pic.png'
import {Card} from "./components/Card";



function App() {
    return (
        <div className="App">
            <CardsContainer>
                <Card src={pic}
                      title="Headline"
                      text="Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen."/>
            </CardsContainer>
        </div>
    );
}

export default App;

const CardsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1170px;
    padding: 0 15px;
    margin: 0 auto;
    height: 100vh;
`