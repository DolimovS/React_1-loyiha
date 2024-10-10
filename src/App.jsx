
import './App.css'
import Navbar from './Companents/Navbar/Navbar'
import Section from './Companents/Section/section'
import Section2 from './Companents/Section_2/section2'
import Section3 from './Companents/Section3/section3'
import Section4 from './Companents/Section_4/section4'
import Section5 from './Companents/Section_5/section5'
import Section6 from './Companents/Section_6/section6'
import Section7 from './Companents/Section_7/section7'
import Section8 from './Companents/Section_8/section8'
import Footer from './Companents/Footer/footer'
function App() {

  return (
    <div className="App container">
      <Navbar/>
      <Section />
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
      <Footer/>
    </div>
  )
}

export default App
