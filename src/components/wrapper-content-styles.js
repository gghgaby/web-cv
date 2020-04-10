import { css } from 'lit-element';
export const wrapperContentStyles = css `
  h1 {
      margin: 16px;
    }
  .wrapper-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 100vh;
    align-items: center;
    color: #3f3f3f;
    background-color: #e6b2c6;
  }
  .wrapper-content h3{
    font-size: 24px;
  }
  .wrapper-content__me {
    flex: 1 1 200px;
    text-align: center;
    margin: 0 16px;
    padding: 0 16px;
    box-shadow: 10px 10px 13px -12px rgba(255,207,229,1);
    background-color: #d6e5fa;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    border-radius: 56px;
  }
  .wrapper-content__me img {
    max-width: 250px;
  }
  .wrapper-content__resume {
    flex: 2 1 200px;
    margin: 0 16px;
    padding: 0 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }
`;