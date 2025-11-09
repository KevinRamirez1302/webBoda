import HeroSection from './views/Hero';
import LoveStory from './views/historyLove';
import EventDetails from './views/detalles';
import RSVP from './views/confirmacion';
import Countdown from './views/countDown';
import { AperturaInvitacion } from './components/aperturaCarta';
import FloatingHearts from './components/floatingHeart';
import GiftSection from './views/gift';
import Bendicion from './views/bendicion';
import BuenosDeseos from './views/buenosDeseos';

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden bg-white dark:bg-white">
      <FloatingHearts />
      <AperturaInvitacion>
        <div className="flex flex-col min-h-screen bg-white dark:bg-white text-gray-900 dark:text-gray-900">
          <HeroSection />
          <Countdown />
          <EventDetails />
          <LoveStory />
          <Bendicion />
          <BuenosDeseos />
          <RSVP />
          <GiftSection />
        </div>
      </AperturaInvitacion>
    </div>
  );
}
