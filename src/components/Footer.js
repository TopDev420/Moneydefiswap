import "../assets/css/footer.css"
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa"

const Footer = (props) => {
  return (
    <div>
      <div className={`footer ${props.theme ? 'dark-footer' : 'light-footer'}`}>
        <div className='col-lg-4 col-md-4 col-sm-6'>
          <div className="nav-left d-flex">
            <div
              className="mark align-self-center"
              style={{ backgroundColor: props.theme ? '#151c2f' : '#E0B000' }}
            ></div>
            <span className="mark-name align-self-center">Moneydefiswap</span>
          </div>
          <h4 style={{ color: props.theme ? "white" : "#273252" }}>Stay Connected</h4>
          <div className="social-icon">
            <FaFacebook style={{ margin: "0rem .5rem", cursor: "pointer" }} />
            <FaInstagram style={{ margin: "0rem .5rem", cursor: "pointer" }} />
            <FaPinterest style={{ margin: "0rem .5rem", cursor: "pointer" }} />
            <FaYoutube style={{ margin: "0rem .5rem", cursor: "pointer" }} />
          </div>
          <div className="mail-info">
            <p className={props.theme ? '' : 'light-footer-font'}>Info@Moneydefiswap.com</p>
          </div>
          <p className={props.theme ? '' : 'light-footer-font'}>+00 000 0000000</p>
          <p className={props.theme ? '' : 'light-footer-font'}>+00 000 0000000</p>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-6'></div>
        <div className='col-lg-4 col-md-4 col-sm-6'>
          <h4 className={props.theme ? '' : 'light-footer-font'} style={{ padding: 0, margin: 0, color: "white" }}>Newsletter</h4>
          <p className={props.theme ? '' : 'light-footer-font'} style={{ fontSize: "12px", lineHeight: ".8rem" }}>
            Please send me the email for the latest updates
            <br />
            and announcements.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <input
              type="text"
              placeholder="your email address"
              className={`custom-form ${props.theme ? '' : 'light-footer-address'}`}
            ></input>
            <button className={`btn btn-subscribe ${props.theme ? 'dark-footer-subscribe' : 'light-footer-subscribe'}`}>Subscribe</button>
          </div>
        </div>
      </div>
      <div className={`copy-right ${props.theme ? 'dark-footer-copy' : 'light-footer-copy'}`}>
        <p style={{ fontSize: "16px", textAlign: "right", color: props.theme ? '#151C2F' : '#E0B000' }}>
          All Rights Reserved 2022-2023
        </p>
      </div>
    </div >
  )
}

export default Footer
