import HeroSection from "./views/Hero";
import LoveStory from "./views/historyLove";
import EventDetails from "./views/detalles";
import RSVP from "./views/confirmacion";
import Countdown from "./views/countDown";
import {AperturaInvitacion} from "./components/aperturaCarta";
import FloatingHearts from "./components/floatingHeart";
import GiftSection from "./views/gift";


export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <FloatingHearts />
      <AperturaInvitacion>
        <div className="flex flex-col min-h-screen">
          <HeroSection/>
          <Countdown/>
          <EventDetails/>
          <LoveStory/>
          <RSVP/>
          <GiftSection/>
        </div>
      </AperturaInvitacion>
    </div>
  );
}
