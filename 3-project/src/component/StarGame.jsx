import styled from "styled-components";

const StartGame =({toggle}) => {

    return (
        <Container>
            <div>
            <img src="/images/dices.png" alt="dice-logo" />
            </div>
            
            <div className="content">
                <h1>Dice Game</h1>
                <button className="Play-btn" onClick={toggle}>Play Now</button>
            </div>
        </Container>
    );


};

export default StartGame;

const Container = styled.div`
        width: 1180px;
        display: flex;
        margin: 0 auto;
        height: 100vh;
        align-items: center;

.content h1 {
    font-size: 96px;
    white-space: nowrap;
}

.Play-btn{

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

// const Button = styled.button`

//         color: white;
//         background-color: black;
//         padding: 10px 18px;
//         border-radius: 4px;
//         border: none;
//         min-width: 220px;
//         font-size: 16px;
//         border: 1px solid transparent;
//         cursor: pointer;
//         transition: 0.4s background ease-in;
        
//         &:hover {
//             background-color: white;
//             border: 1px solid black;
//             color: black;
//             transition: 0.3s background ease-in;
//         }

//     `;