import { div } from "framer-motion/client"

const Footer = () => {

    return (
        <div className="footer">
            <div  className="footercontent">
                <div>
                    <h1 style={{fontSize: "20px",fontWeight:"bold"}}>Shop</h1>
                    <ul>
                        <li>Home</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Blog</li>
                        <li>About</li>
                    </ul>
                </div>

                <div>
                    <h1 style={{fontSize: "20px",fontWeight:"bold"}}>Corpoate Info</h1>
                    <ul>
                        <li>Help</li>
                        <li>Shipping & Returns</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div>
                    <h1 style={{fontSize: "20px",fontWeight:"bold"}}>Help</h1>
                    <ul>
                        <li>My H&M</li>
                        <li>Customer service</li>
                        <li>Live chat</li>
                        <li>Find a store</li>
                        <li>Legal & Privacy</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div style={{marginTop:"20px"}}>
                    <p>Sign up now and be the first to know<br/> about exclusive offers, latest fashion<br/> news & style tips!</p>
                    <p style={{fontWeight:"bold",marginTop:"10px"}}>Read MORE</p>
                </div>
            </div>
            <div>
                <img style={{width:"40px",height:"40px",marginRight:"50%",marginLeft:"50%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png" alt="" />
            </div>
        </div>
    )
}

export default Footer