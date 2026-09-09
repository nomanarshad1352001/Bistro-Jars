import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import Craft from "@/components/home/Craft";
import SignatureStory from "@/components/home/SignatureStory";
import MenuTeaser from "@/components/home/MenuTeaser";
import GalleryStrip from "@/components/home/GalleryStrip";
import Garden from "@/components/home/Garden";
import Reviews from "@/components/home/Reviews";
import Visit from "@/components/home/Visit";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Manifesto />
      <Craft />
      <SignatureStory />
      <MenuTeaser />
      <GalleryStrip />
      <Garden />
      <Reviews />
      <Visit />
    </>
  );
}
