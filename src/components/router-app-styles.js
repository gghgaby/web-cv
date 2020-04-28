import { css } from 'lit-element';
export const RouterAppStyles = css `
  *{
    color: #511845;
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
  }
  .wrapper-content-me:before{
    content: '';
    position: absolute;
    bottom:0;
    right: 100px;
    height: 90vh;
    background-image: url("./src/images/ink.png");
  }
  .text-me{
    margin: 64px;
    flex: 0 0 50%;
  }
  .text-me:before{
    content: 'Hi!';
    font-size: 64px;
    color: #900c3f;
    animation: colorInf 5s infinite;
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
  }
  .wrapper-content-resume p {
    color: #900c3f;
    flex: 0 1 50%;
  }
  .wrapper-content-projects{
    font-family: 'Patrick Hand', cursive;
    display: flex;
    align-items: center;
    margin: 64px 0 0 0;
  }
  .contact{
    position: absolute;
    right: 55px;
    width: 30px;
    top: 200px;
  }
  @keyframes colorInf {
  0% {
    color: #900c3f;
  }
  50% {
    color: #c70039;
  }
  100% {
    color: #ff5733;
  }
}
`;