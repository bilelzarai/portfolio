import { images } from "./helper";



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

          <div key={i } className='navbar-divPart'>
            {el.nameSection}
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