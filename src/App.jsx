import Card from './Card'
import Answers from './Components/Answers'
import Contact from './Components/Contact'
import Email from './Components/Email'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Num from './Components/Num'
import Post from './Components/Post'
import Services from './Components/Services'
import Swipere from './Components/Swiper'
import Team from './Components/Team'
import Text from './Components/Text'
const App = () => {
  return (
    <div className='overflow-y-hidden' >
      <Navbar />
      <Hero />
      <Text />
      <Num />
      <Contact />
      <Swipere />
      <Team />
      <Answers />
      <Card />
      <Post />
      <Services />
      <Email />
      <Footer />
    </div>
  )
}

export default App