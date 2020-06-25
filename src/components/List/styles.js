import styled from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;

    & + div{
      border-left: 1px solid rgba(255, 255, 255, 0.02);

    }

    header{
        display: flex;
        justify-content:space-between;
        align-items: center;
        height: 42px;  


        h2{
            font-weight: 700;
            font-size: 16px;
            padding: 0 10px;
        }

        button{
            width: 42px;
            height: 42px;
            margin-bottom: 5px;
            border-radius: 18px;
            background: rgb(2, 210, 213);
            border: 0;
            cursor: pointer;
        }
        button:active{
            border: 3px solid rgb(2, 170, 213);
        }
    }

    ul{
        margin-top: 30px;
        opacity: ${props => props.done ? 0.6 : 1};
    }
`;
