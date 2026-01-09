import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'

function App() {
  return(
    <>
      <Header/>
      <Food/>
      <Footer/>
      <Button/>
      <Student name="Patrick" age={42} isStudent={true}/>
    </>
  );
}

export default App
