import { images } from "./helper";
import { Button } from "react-md";



import './style.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-firstPart">
        {images.map((el, i) => (
          <div key={i} className='navbar-divPart'>
            <img src={el.img} alt={el.section} ></img>
          </div>

        ))}
      </div>

      <div className="navbar-secondPart">
        {images.map((el, i) => (

          <div key={i} className='navbar-divPart'>

            <Button id="outlined-button-5" theme="clear" themeType="outline">
              {el.nameSection}
            </Button>

          </div>
        ))}

      </div>

      {/* <div  >
        {images.map((el, i) => (
          <div key={i} className="navbar-firstPart">
           
            <div className='navbar-divPart'>
              <img src={el.img} alt={el.section} ></img>
            </div>

            <div className="navbar-secondPart" >
              <div className='navbar-divPart'>
                {el.nameSection}
              </div>
            </div>
            
          </div>


        ))}

      </div> */}

    </div>
  )
}
export default Navbar;