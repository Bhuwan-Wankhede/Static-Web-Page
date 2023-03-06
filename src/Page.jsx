import girl from './girl.jpg';
import men from './Men.jpg';
import men2 from './Men2.jpg';
import hand from './hand2.png';
import './index.css'
const bg = {
    backgroundColor: '#454545',
    color: 'white',
}
const co = {
    color: 'black'
}
const Page = (props) => {
    return (<>
        <div className="container">
            <div className="head">
                <header>
                    <h1>  bank.c</h1>
                    <nav className="header">
                        <ul>
                            <a href="#"><li>Pricing </li></a>
                            <a href="#"><li>Blog</li></a>
                            <a href="#"><li className='Features'>Features &nbsp;<i className="fa-solid fa-angle-down"></i></li></a>
                            <a href="#"><li>Contact</li></a>
                        </ul>
                    </nav>
                    <nav className='icons'>
                        <i id="icons" className="fa-sharp fa-solid fa-vault"></i>
                        <i id="icons" className="fa-regular fa-bell"></i>
                    </nav>
                    <img src={men2} alt="photo" />
                </header>
            </div>
            <div className='flexing'>
                <div className="container-card">
                    <a href='#' className='hh3'> <i className="fa-solid fa-gift"></i>&nbsp; 30 Days free trail</a>
                    <h1>The Best <br></br> Payments <br></br>Experience</h1>
                    <p>Make your daily routine easier by managing <br></br>money and transaction with the Bank Card</p>
                    <input type="email" placeholder="Enter your email"></input>
                    <button type="submit">Get started</button>
                    <br></br>
                    <br></br>
                    <div className='foot'>
                        <h3 className='hb3'> Send Money to </h3>
                        <div className='cardContainer'>
                            <div className='card' style={bg}>
                                <a href='#'><i class='fa fa-plus-square'></i><br></br>Add New Contact</a>
                            </div>
                            <div className='card'>
                                <a href='#' style={co} ><img src={men} /><br></br>Steve Donald</a>
                            </div>
                            <div className='card'>
                                <a href='#' style={co} ><img src={girl} /><br></br>Lahai Nolan</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='phone'>
                    <img src={hand} alt='photo'/>
                    {/* <img src={sky} alt='photo'/> */}
                    <div className='cardContainer'>
                        <div className='cardPhone'>

                        </div>
                        <div className='cardPhone'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}
export default Page;