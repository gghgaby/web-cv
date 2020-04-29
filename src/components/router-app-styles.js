import { css } from 'lit-element';
export const RouterAppStyles = css `
  *{
    color: #35495e;
  }
  .router-app-nav{
    display: flex;
    justify-content: flex-end;
    font-family: 'Neucha', cursive;
  }
  .wrapper-content-me{
    font-family: 'Patrick Hand', cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 64px 0 0 0;
    font-size: 20px;
    line-height: 24px;
  }
  .text-me{
    margin: 64px;
    flex: 0 0 50%;
  }
  .greeting{
    font-size: 100px;
    color: #ff7e67;
    animation: hi 1s ease infinite;
  }
  .img-me {
    width: 100%;
    border: 1px solid #ddd;
    padding: 8px;
    background: #fff;
    text-align:center;
    vertical-align:top;
    -webkit-box-shadow: 0px 1px 3px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 1px 3px rgba(0,0,0,0.4);
    box-shadow: 0px 1px 3px rgba(0,0,0,0.4);
  }
  .tape {
    flex: 0 1 250px;
    width: 100%;
    position: relative;
  }
  .uno:before{
    content: "";
    display: block;
    width: 100px;
    height: 30px;
    position: relative;
    top: 20px;
    margin: auto;
    background: rgba(255,255,200,0.6);
    -webkit-box-shadow: 0px 1px 3px rgba(0,0,0,0.4);
    -moz-box-shadow: 0px 1px 3px rgba(0,0,0,0.4);
    box-shadow: 0px 1px 3px rgba(0,0,0,0.4);
  }
  .wrapper-content-resume {
    font-family: 'Neucha', cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 64px 0 0 0;
    align-items: center;
    height: 60vh;
    flex-wrap: wrap;
  }
  .text-resume {
    color: #35495e;
    flex: 0 1 50%;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }
  .img-stack{
    width: 100%;
  }
  .resume-tech{
    flex: 0 0 60%;
    display: flex;
    justify-content: center;
  }
  .wrapper-content-projects{
    font-family: 'Patrick Hand', cursive;
    display: flex;
    align-items: center;
    margin: 64px 0 0 0;
    color: #511845;
  }
  .contact{
    position: absolute;
    right: 55px;
    width: 30px;
    top: 200px;
  }
  @keyframes colorInf {
    0% {
      color: #ff7e67;
    }
    50% {
      color: #347474;
    }
    100% {
      color: #42b883;
    }
  }
  @keyframes hi {
    30% { transform: scale(1.1); }
    40%, 60% { transform: rotate(-10deg) scale(1.1); }
    50% { transform: rotate(10deg) scale(1.1); }
    70% { transform: rotate(0deg) scale(1.1); }
    100% { transform: scale(1); }
  }
  @keyframes hinge {
    0% { transform: rotate(0); transform-origin: top left; animation-timing-function: ease-in-out; }  
    20%, 60% { transform: rotate(80deg); transform-origin: top left; animation-timing-function: ease-in-out; }  
    40% { transform: rotate(60deg); transform-origin: top left; animation-timing-function: ease-in-out; } 
    80% { transform: rotate(60deg) translateY(0); opacity: 1; transform-origin: top left; animation-timing-function: ease-in-out; } 
    100% { transform: rotate(0); transform-origin: top left; animation-timing-function: ease-in-out; }
  }
`;