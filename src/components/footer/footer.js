import { Button } from "react-md";



import './style.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-firstParty">
      {/* <Button id="contained-button-5" theme="clear" themeType="contained" >
            Create Portfolio
          </Button> */}
      </div>
          <div className="footer-btn" >
            <Button id="contained-button-5" theme="clear" themeType="contained" >
              Create Portfolio
            </Button>
            <Button className="footer-btn-left" id="contained-button-5" theme="clear" themeType="contained"  >
              Télécharger Portfolio
            </Button>
          </div>




    </div>
  )
}
export default Footer;