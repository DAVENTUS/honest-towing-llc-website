import Head from "next/head";
import PageHero from '../components/global/PageHero'
import PictureBlock from "../components/global/PictureBlock";
import TextBlock from '../components/global/TextBlock'
import TextwithHeader from "../components/global/TextwithHeader";
import Testimonials from "../components/home/Testimonials";

export default function About() {
  return (
    <>
      <Head>
          <title>Honest Towing & Roadside | About</title>
          <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <PageHero 
          heading = 'About Us'
          image = 'carcrash.jpg'
          imageAlt = 'image alt'
          pageDesc = "Honest Towing is a family owned towing and roadside business dedicated to serving our neighbors in the Twin Cities. Our roots
          in the towing business stretch back decades. But one thing has stayed consistant, our desire to help!"
        />
        <TextBlock 
          text = "Affordability, Experience, and Trust is what sets us apart from other towing companies. At Honest Towing, we strive to give our customers
          the service they deserve!"
        />
        <TextwithHeader 
          reversed = {false}
          title = 'Affordable'
          text = "We put affordablity at the core of everything we do! 
          We gurrantee the best prices in all of the Twin Cities, and unlike other towing companies, we value transparency when it comes to our prices. You can see exactly how much
          your service is going to cost right on our website with our built in quote calculator!"
          addBtn = {true}
          btnLink = '/quote'
          btnText = 'Get An Instant Quote'
        />
        <TextwithHeader 
          reversed = {true}
          title = 'Experienced'
          text = "Our drivers have 15+ years in the towing and roadside field. So, it is safe to say we are more than experienced to handle whatever situation you are in! From flipped cars to 
          simple tire changes. We have done it all!"
          addBtn = {true}
          btnLink = '/services'
          btnText = 'View Our Services'
        /> 
        <TextwithHeader 
          reversed = {false}
          title = 'Trusted'
          text = "Our dedication to getting the job done fast and effectivly has earned the trust of our more than 1000 plus satisfied customers! And we do not take that trust for granted.
          We are proud to be a first choice towing and roadside company!"
          addBtn = {true}
          btnLink = '#testimonials'
          btnText = 'View Our Reviews'
        />
        <TextBlock 
          text = "Our philosophy is based on one thing, serving our customers above and beyond the call to action!"
        />
        <Testimonials 
          headerTitle = "Our Reviews"
          subHeading = "Read what our customers our saying!"
          includeMessage = {true}
        />
        <PictureBlock 
          image = 'carcrash.jpg'
          imageAlt = 'image alt'
        />
      </main>
    </>
  );
}
