import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Competencies from './components/Competencies/Competencies';
import Support from './components/Support/Support';
import Menu from './components/Menu/Menu';
import Expertise from './components/Expertise/Expertise';
import Tariffs from './components/Tariffs/Tariffs';
import DevTime from './components/DevTime/DevTime';
import Team from './components/Team/Team';
import Reviews from './components/Reviews/Reviews';
import Partners from './components/Partners/Partners';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Cases from './components/Cases/Cases';

const App = () => {
  return (
    <div>
      <Menu />
      <Header /> 
      <Competencies /> 
      <Support /> 
      <Expertise /> 
      <Tariffs /> 
      <DevTime /> 
      <Team /> 
      <Cases /> 
      <Reviews /> 
      <Partners /> 
      <FAQ /> 
      <Footer />
    </div>
  );
}

export default App;
