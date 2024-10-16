import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
            <>
            <div className="container" >
                <img src="https://static.hm.com.cn/media/tool/template/images/2024/09/20/_/l/_logo_teaser_1.jpg" alt="Snow"/>
                <button className="btn" onClick={() => navigate('/ladies')}>Ladies</button>
                <button className="btnM" onClick={() => navigate('/men')}>Men</button>
            </div>
            <br />
            <div className="container1">
                <img src="https://www.rd.com/wp-content/uploads/2024/02/HM-Store-GettyImages-1553216534_KSedit.jpg" alt="Snow"/>
                <button className="btn1">Shop Now</button>
            </div>
            </>

    )

}

export default Home