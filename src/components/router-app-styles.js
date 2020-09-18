import { css } from 'lit-element';
export const RouterAppStyles = css `
  *{
    color: #35495e;
  }
  .router-app-nav{
    display: flex;
    justify-content: flex-end;
    font-family: 'Amatic SC', cursive;
    font-size: 1.5rem;
    padding: 2rem 0;
  }

  .router-app-link {
    flex: 0 0 8rem;
  }

  .router-app-link.activated {
    font-size: 2rem;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%{
      text-shadow: none;
    }
    50%{
      text-shadow: 0px 0px 2px #ff7e67;
    }
    100%{
      text-shadow: none;
    };
  }

  .wrapper-content-me{
    font-family: 'Overlock', cursive;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 64px 0 0 0;
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
  .text-me{
    margin: 0 64px;
    flex: 0 0 50%;
    line-height: 2rem;
  }
  .greeting{
    margin: 1rem 0;
    font-size: 4rem;
    color: #ff7e67;
  }
  .img-me {
    width: 100%;
    border: 1px solid #ddd;
    padding: 8px;
    background: #fff;
    text-align:center;
    vertical-align:top;
    transform: rotate(20deg);
  }

  .tape {
    flex: 0 1 10rem;
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
    transform: rotate(-20deg);
    z-index: 3;
  }
  .wrapper-content-resume {
    font-family: 'Overlock', cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 48px auto;
  }
  .text-resume {
    color: #35495e;
    font-size: 18px;
    line-height: 24px;
    margin: 0;
  }
  .img-stack{
    width: 100%;
  }
  .resume-tech{
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 3rem;
  }
  .wrapper-content-projects{
    font-family: 'Overlock', cursive;
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
  .copyright-msg {
    font-size: 12px;
    color: #ff7e67;
    font-family: 'Concert One', cursive;
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

  @keyframes hinge {
    0% { transform: rotate(0); transform-origin: top left; animation-timing-function: ease-in-out; }  
    20%, 60% { transform: rotate(80deg); transform-origin: top left; animation-timing-function: ease-in-out; }  
    40% { transform: rotate(60deg); transform-origin: top left; animation-timing-function: ease-in-out; } 
    80% { transform: rotate(60deg) translateY(0); opacity: 1; transform-origin: top left; animation-timing-function: ease-in-out; } 
    100% { transform: rotate(0); transform-origin: top left; animation-timing-function: ease-in-out; }
  }
  .loading-wrapper{
    background-color: #FFFFFF;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 10;
  }
    .loading {
    width: 160px;
    height: 40px;
    border-radius: 50%;
    box-sizing: border-box;
        position: absolute;
        background: transparent;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
  }

  .dot {
    width: 20px;
    height: 20px;
    display: block;
    position: absolute;
    background-color: #ff7e67;
    transform: translateY(-50%);
    animation: dotAnimation 1.2s ease-in-out infinite;
  }

  .dot.dot1 {
    left: 20%;
    transfrom: translateX(-50%);
  }

  .dot.dot2 {
    left: 50%;
    transfrom: translateX(-50%);
    animation-delay: 0.2s;
  }

  .dot.dot3 {
    transfrom: translateX(-50%);
    left: 80%;
    animation-delay: 0.4s;
  }
  @keyframes dotAnimation {
    0% {
      opacity: 1;
      top: 65%;
    }
    50% {
      opacity: 0.3;
      top: 0;
    }
    100% {
      opacity: 1;
      top: 65%;
    }
  }
`;