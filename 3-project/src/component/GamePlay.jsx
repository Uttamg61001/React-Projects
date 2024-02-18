import Total from "./Total";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay =() => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState();
    const [showRules, setShowRules] = useState();

    const generateRandomNumber = (min, max) => {
        return Math.floor (Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectedNumber) {
                setError("You have not selected any number");
                return;
        }
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev) => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev)=> prev + randomNumber);
        } else {
            setScore((prev)=> prev - 2);
        }

        setSelectedNumber(undefined);
    };

    const resetScore =() => {
        setScore(0);
    }
    

    return (
        <MainContainer>
            <div className="top_section">
        <Total score={score}/>
        <NumberSelector  error={error} setError={setError}
        selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice}></RoleDice>
            <DivMian>
                <button className="btns" onClick={resetScore}>Reset Score</button>
                <button onClick={()=> setShowRules((prev)=> !prev)}
                 className="btn-2" > {showRules ? "Hide" : "Show"} Rules</button>
            </DivMian>
            {showRules && <Rules/>}
        </MainContainer>
    )
}

export default GamePlay;

const MainContainer = styled.main`

padding-top: 70px;
    .top_section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
`;

const DivMian = styled.div`
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;

        .btns {
        color: black;
        background-color: white;
        padding: 10px 18px;
        border-radius: 4px;
        border: none;
        min-width: 220px;
        font-size: 16px;
        border: 1px solid black;
        cursor: pointer;
        transition: 0.3s background ease-in;

        &:hover {
            background-color: black;
            border: 1px solid black;
            color: white;
            transition: 0.3s background ease-in;
        }
}

.btn-2 {
    color: white;
        background-color: black;
        padding: 10px 18px;
        border-radius: 4px;
        border: none;
        min-width: 220px;
        font-size: 16px;
        border: 1px solid transparent;
        cursor: pointer;
        transition: 0.3s background ease-in;

        &:hover {
            background-color: white;
            border: 1px solid black;
            color: black;
            transition: 0.3s background ease-in;
        }
        

}        
        
`;