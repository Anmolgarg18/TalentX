import React from 'react';
import Slider from 'react-slick';
import { Navbar } from '../Components/Navbar';
import solution from '../Assests/solution.png'
import heros from '../Assests/image2.png';
import cards1 from '../Assests/card1.png';
import cards2 from '../Assests/card2.png';
import cards3 from '../Assests/card3.png';
import gut from '../Assests/gut.png';
import banner1 from '../Assests/banner1.png';
import banner2 from '../Assests/banner2.png';
import banner3 from '../Assests/banner3.png';
import partners from '../Assests/partners.png'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Footer } from '../Components/Footer';

const cards = [
  {
    img: cards1,
    text: "Harnessing cutting-edge technology to automate and optimize every aspect of talent management",
    head:"Latest Technology"
  },
  {
    img: cards2,
    text: "Gain deep, validated insights through assessments crafted by leading organizational psychologists—rooted in proven behavioral science.?",
    head: "Behavioral Science"
  },
  {
    img: cards3,
    text: "Our platform flexes to fit your workflow, offering scalable, customizable solutions that evolve with your business and talent strategy.",
    head: "Adaptive Design"
  }
];

const banners = [
  {
    head: "Unlock Xcellence",
    img: banner1,
    text: "Partner with Talent X to design and deliver Immersive AI- Powered Talent Diagnostics Solutions through our flexible and certified platform"
  },
  {
    head: "Xcelerate Growth",
    img: banner2,
    text: "Unleash the full potential of your talent strategy with our highly validated talent diagnostics and growth algorithms designed to accelerate development and drive organizational success"
  },
  {
    head: "Highly Compliant",
    img: banner3,
    text: "At Talent-X, your data is protected with industry-leading standards, ensuring ISO27001 and GDPR compliance. "
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  arrows: true,
  pauseOnHover: false,
};

export const Home = () => {
  return (
    <div className='overflow-hidden object-contain'>
  <Navbar/>
      {/* Slider Section */}
    <div className="overflow-hidden">
  <Slider {...settings}>
    {banners.map((banner, index) => (
      <div key={index} className="w-full h-[100vh] bg-[#F5F1F1] relative">
        {/* Banner Image */}
        <img
          src={banner.img}
          alt={`banner-${index}`}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Banner Text Content */}
        <div className="relative w-[90%] mx-auto h-full flex items-center">
          <div className="flex flex-col justify-center items-start text-left px-4 sm:px-6 md:px-0 text-white">
            <h1 className="font-inriaserif text-[30px] sm:text-[45px] md:text-[60px] lg:text-[80px] xl:text-[90px] underline decoration-1 underline-offset-[20px] sm:underline-offset-[30px] lg:underline-offset-[35px] leading-tight">
              {banner.head}
            </h1>
            <p className="font-inriaserif text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] xl:text-[33px] w-[85%] md:w-[70%] 2xl:w-[53%] w-full mt-4 sm:mt-6">
              {banner.text}
            </p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>



      {/* Section 2 */}
      <div className="bg-white w-full py-12 h-auto">
        <div className="max-w-[90%] mx-auto h-full">
          <h1 className="text-[22px] md:text-[28px] xl:text-[45px] text-center font-inriaserif leading-[1.2] font-bold mx-auto md:max-w-[65%] w-[70%]">
           We offer integrated suite of immersive diagnostics and assessment tools
          </h1>
         <p className='text-center text-[18px] md:text-[22px] font-inriaserif my-3 mx-auto w-[80%] lg:w-[53%]'> Talent X Tools (TxT) helps you attract the best talent possible and develop top performers’ skills with actionable feedback. Deliver directly through TxT platform or rebrand as you like for your client’s needs.</p>
        
          <div className="flex flex-wrap justify-center my-10 md:grid md:grid-cols-3 ">
            {cards.map((card, index) => (
              <div key={index} className="text-center overflow-hidden  flex flex-col items-center justify-center ">
                <img src={card.img}  alt={`Card ${index + 1}`} loading="lazy" className="h-[100px] w-auto object-cover rounded-full"/>
                <h2 className='text-[24px] font-bold mt-3'>{card.head}</h2>
                <p className="h-[80px] text-[20px] font-inriaserif w-[70%] my-3">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
         
        </div>
      </div>

      {/* Section 3 */}
<div className="w-full h-auto bg-[#6C27B3]">
  <div className="w-[90%] mx-auto h-full py-[50px]">
    

    <div className='grid grid-cols-12 gap-6 md:gap-10 w-full mx-auto mt-8'>
      {/* Left Content */}
      <div className='col-span-12 md:col-span-7 flex flex-col justify-center items-start gap-6'>
        <h2 className='text-white text-[25px] sm:text-[30px] md:text-[55px] font-inriaserif text-left leading-snug'>
      Why are we our client’s trusted partners?
    </h2>
        <ul className="list-disc list-inside text-[16px] sm:text-[18px] md:text-[20px] font-inriaserif space-y-2 text-left text-white">
          <li>Provide data-driven insights for better talent decisions.</li>
          <li>Offer customized solutions tailored to each client’s needs.</li>
          <li>Foster sustained growth with continuous feedback and development.</li>
          <li>Operate with integrity and transparency in all we do.</li>
          <li>Stay ahead with innovative, cutting-edge solutions.</li>
        </ul>
      </div>

      {/* Right Image */}
      <div className="col-span-12 md:col-span-5 flex justify-center items-center">
        <img src={partners} alt="Our Partners" className="w-auto max-w-full h-auto object-contain" />
      </div>
    </div>
  </div>
</div>


      {/* Section 4 */}
<div className='bg-white h-auto w-full'>
  
  <div className='w-[90%] mx-auto h-full py-10'>
    <h2 className='font-inriaserif text-[30px] md:text-[35px] lg:text-[44px] text-left ps-5 leading-[1]'>Introducing <span className='font-bold'>MultiRater.TxT</span></h2>
    <h2 className='font-inriaserif text-[15px] md:text-[25px] text-[31px] text-left ps-5'>Game Changer for 360 Diagnostics</h2>
    <div className='grid grid-cols-12 my-10 gap-6 md:gap-10'>
 <div className='flex flex-col md:col-span-6 col-span-12'>
  <ul className="space-y-4 text-left text-black">
  {[
    "MultiRater.TxT redefines 360 feedback—shifting the focus from generic ratings to rich, evidence-based insights that reflect real-world behavior",
    "Powered by advanced LLM technology, the platform is trained on your organization’s unique competency models and success profiles for hyper-relevant analysis.",
    "Delivers a deep behavioral diagnosis, revealing patterns and psychological blockers that often limit top talent from reaching their full potential."
  ].map((item, index) => (
    <li key={index} className="flex items-start gap-3 font-inriaserif space-y-3 text-[18px] lg::text-[22px] mt-1">
      <span className="bg-[#6D4BDF] text-white px-2 py-1 rounded text-sm font-semibold h-fit mt-1"> {index + 1} </span>{item}
    </li>
  ))}
</ul>
 </div>
 <div className='md:col-span-6 col-span-12'>
  <img src={solution} alt="" className='h-auto w-auto' />
 </div>
 </div>
 <div className=' flex gap-5 justify-center itens-center'>
 <button className='px-4 py-2 bg-[#8B53FF] text-white rounded-lg flex justify-center items-center font-bold'>Explore More</button>
 <button className='px-4 py-2 border-2 border-[#8B53FF] text-black font-bold rounded-lg flex justify-center items-center'>Meet The Experts</button>
 </div>
  
</div>
    </div>



    {/* section 5 */}
   <div className='w-full h-auto bg-[#F1E9E9]'>
  <div className='w-[90%] mx-auto h-full py-12 font-inriaserif'>
    <h2 className='text-[28px] lg:text-[36px] text-black font-bold mb-8'>
      Assessment, Diagnostics & Analytics: Delivered as a Service
    </h2>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto'>
      {[
        {
          head: "Customized",
          para:
            "Diagnostics tailored specifically to align with your frameworks, ensuring that every assessment is relevant and actionable.",
        },
        {
          head: "Brandable",
          para:
            "Seamlessly integrated into your brand guidelines, with consistent project communications across participant portals and leadership dashboards.",
        },
        {
          head: "Supported Turnkey",
          para:
            "Comprehensive project support with ISO27001-compliant technical delivery, ensuring a secure and smooth execution from start to finish.",
        },
      ].map((item, index) => (
        <div key={index} className=' mx-auto w-[63%]'>
          <h3 className='text-[22px] lg:text-[30px] font-bold text-black text-left my-5'>{item.head}</h3>
          <p className='text-black text-[12px] lg:text-[20px] text-left'>{item.para}</p>
        </div>
      ))}
    </div>
  </div>  
</div>




{/* section 6 */}
<div className="w-full bg-white py-12 font-inriaserif">
  <div className='w-[90%] mx-auto'>
    <h2 className="text-2xl md:text-4xl font-bold text-black mb-6 text-left">Our Vision</h2>
  <div className="relative text-left">
    {/* Opening Quote */}
    
     <span className="text-[80px] text-black   font-extrablack">“</span> <br/>
    <p className="font-bold text-black text-[18px] md:text-[20px] leading-relaxed font-medium mt-[-50px]">
      We believe learning happens when organizations actively listen to their environment—gathering data, extracting insights, and evolving their strategies.<br/>  
At the core of this transformation lies adaptive capability. <span className="text-[80px] text-black ps-2 mt-[-15px] font-extrablack absolute">”</span></p>
 

 
   
  </div>
  </div>
  
</div>


{/* section 7 */}
<Footer/>
    </div>
  );
};
