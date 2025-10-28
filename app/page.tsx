import HeroSection from "./views/Hero";
import LoveStory from "./views/historyLove";
import EventDetails from "./views/detalles";
import RSVP from "./views/confirmacion";
import Countdown from "./views/countDown";
import {AperturaInvitacion} from "./components/aperturaCarta";


export default function Home() {
  return (
 <>
 <AperturaInvitacion>
  <HeroSection/>
 <LoveStory/>
 <EventDetails/>
 <Countdown/>
 <RSVP/>
 </AperturaInvitacion>
 
 
 
 </>
  );
}
