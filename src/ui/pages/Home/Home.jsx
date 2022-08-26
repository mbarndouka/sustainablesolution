import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Frame from '../../../assets/Frame 21.svg'
import Button from '../../components/button/index'
import Welcome from '../../../assets/welcome.svg'
import Frame1 from '../../../assets/Frame370.svg'
import Frame2 from '../../../assets/Frame3701.svg'
import Frame3 from '../../../assets/Frame3702.svg'
import Last from '../../../assets/lastimage.jpg'


export default function Home() {
  return (
    <div className='home'>
      {/* <div className='nav'> */}
        <Navbar/>
      {/* </div> */}
      <div className="home-first">
        <img src={Frame} alt="" />
        <div className="home-text-start">
          <div className="first-writting-1">
            Think Different, feel the difference.
          </div>
          <div className="first-writting-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis consectetur lorem tortor enim
          </div>
          <Button>Get Started</Button>
        </div>
        <div className="home-image">
            <img src={Welcome} alt="" />
        </div>
      </div>
      <div className="home-second">
        <div className="second-first">
          <div className="div1">
          Think big, change the world
          </div>
          <div className="div2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus non malesuada diam tortor turpis nulla. Eros elementum leo arcu non morbi a cursus facilisi eu. Ultrices nisi, pharetra, gravida egestas. Volutpat vitae, malesuada velit a nulla nisl in. Et egestas tincidunt ipsum auctor duis diam varius condimentum. Magna est venenatis pulvinar est et. Magna ut tempus non quis at id. Orci ac at vestibulum mauris.
          </div>
        </div>
        <div className='second-second'>
          <div className='second-second-f'>
            <div className="description1">
              <img src={Frame1} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus massa cras pellentesque placerat.</p>
            </div>
            <div className="description2">
              <img src={Frame2} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus massa cras pellentesque placerat.</p>
            </div>
            <div className="description3">
              <img src={Frame3} alt="" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus massa cras pellentesque placerat.</p>
            </div>
          </div>
          <div className="second-second-s">
            <Button className='btn'>Learn more</Button>
          </div>
        </div>
      </div>
      <div className="home-third">
        <div className="third-one">
          50+
          <p>Sponsors</p>
        </div>
        <div className='third-two'>
          100+
          <p>Schools</p>
        </div>
        <div className="third-three">
          20+
          <p>Contries</p>
        </div>
      </div>
      <div className="home-forth">
        <div className="forth-one">
          <h1>Our vision to your future</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus non malesuada diam tortor turpis nulla. Eros elementum leo arcu non morbi a cursus facilisi eu. Ultrices nisi, pharetra, gravida egestas. Volutpat vitae, malesuada velit a nulla nisl in. Et egestas tincidunt ipsum auctor duis diam varius condimentum. Magna est venenatis pulvinar est et. Magna ut tempus non quis at id. Orci ac at vestibulum mauris.</p>
        </div>
        <div className="forth-two">
          <img src={Last} alt="" />
        </div>
      </div>
        <Footer/>
    </div>
  )
}
