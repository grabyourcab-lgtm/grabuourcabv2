// import React from 'react'
// import {
//   Car,
//   Navigation,
//   Sparkles,
//   Briefcase,
//   Plane,
//   Truck,
//   Tent,
//   Bus,
//   Heart,
//   Users,
//   TrainFront,
//   ShieldCheck,
//   PawPrint,
//   Stethoscope,
//   Accessibility,
//   Shield,
//   PartyPopper,
//   ChevronRight,
//   Quote,
//   Award,
//   Building2,
//   Target,
// } from 'lucide-react'
// import Header from '@/components/site/Header'
// import Footer from '@/components/site/Footer'

// const services = [
//   { icon: Car, title: 'Self Drive Car Rental', desc: 'Keys in your hand, freedom on your terms.' },
//   { icon: Navigation, title: 'Taxi Services', desc: 'Reliable rides across every city we serve.' },
//   { icon: Sparkles, title: 'Luxury Car Rental', desc: 'Premium vehicles for the moments that matter.' },
//   { icon: Briefcase, title: 'Corporate Transportation', desc: 'Dependable mobility built for business.' },
//   { icon: Plane, title: 'Airport Transfers', desc: 'On-time pickups and drops, every time.' },
//   { icon: Truck, title: 'Tempo Traveller Rental', desc: 'Spacious rides for groups on the move.' },
//   { icon: Tent, title: 'Caravan Rental', desc: 'A home on wheels for the open road.' },
//   { icon: Bus, title: 'Luxury Bus Rental', desc: 'Comfortable travel for larger gatherings.' },
//   { icon: Heart, title: 'Wedding & Event Transportation', desc: 'Beautifully arranged rides for special days.' },
//   { icon: Users, title: 'Group & Outstation Travel', desc: 'Well-planned journeys, near or far.' },
// ]

// const unique = [
//   { icon: TrainFront, title: 'Platform-to-Coach Taxi Assistance', desc: 'Help right up to your train compartment, so you never travel the last stretch alone.' },
//   { icon: ShieldCheck, title: 'Dedicated Taxi Service for Women', desc: 'Rides designed around safety, comfort, and peace of mind.' },
//   { icon: PawPrint, title: 'Pet-Friendly Taxi Service', desc: 'Because your travel plans should include the whole family.' },
//   { icon: Users, title: 'Senior Citizen Taxi Service', desc: 'Patient, considerate service for our older travellers.' },
//   { icon: Stethoscope, title: 'Taxi Service for Patients with an Attendant', desc: 'Careful, supported travel for medical journeys.' },
//   { icon: Accessibility, title: 'Taxi Service for Persons with Disabilities', desc: 'Accessible rides built around your needs.' },
//   { icon: Shield, title: 'Self Drive with Armed Bodyguard', desc: 'Added security on request, wherever you\u2019re headed.' },
//   { icon: PartyPopper, title: 'Customised Occasion Cars', desc: 'Decorated self-drive cars for birthdays, weddings, proposals and more.' },
// ]

// const stats = [
//   { icon: Award, value: '18+', label: 'Years of Leadership Experience' },
//   { icon: Car, value: '10+', label: 'Core Mobility Services' },
//   { icon: Sparkles, value: '8', label: 'Specialised Offerings' },
//   { icon: Building2, value: '1', label: 'Trusted Mobility Brand' },
// ]

// const AboutPage = () => {
//   return (
//     <>
//     <Header/>
//     <div>
//       {/* ---------- Page hero ---------- */}
//       <section className="page-hero">
//         <div className="container">
//           <div className="crumbs">
//             <a href="/">Home</a>
//             <ChevronRight className="ic" style={{ width: 12, height: 12 }} />
//             <b>About Us</b>
//           </div>
//           <span className="eyebrow">Who We Are</span>
//           <h1>Doorstep to the Skies, We Take You Everywhere</h1>
//           <p className="lead">
//             Grab Your Cab is India&rsquo;s trusted mobility partner &mdash; built on the belief that
//             every journey, big or small, deserves reliability, safety and a personal touch.
//           </p>
//           <div className="hero-ctas" style={{ marginTop: 22 }}>
//             <a href="/contact" className="btn btn-amber">Get In Touch</a>
//             <a href="/services" className="btn btn-ghost">Explore Services</a>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Founder story ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="about-wrap">
//             <div>
//               <span className="eyebrow" style={{ display: 'block', color: 'var(--red)', fontWeight: 600, fontSize: 12.5, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 8 }}>
//                 Our Story
//               </span>
//               <h2>Built From 18 Years On The Road</h2>
//               <p>
//                 Grab Your Cab was founded with a vision to redefine the way people experience
//                 transportation in India. The company was established by Mr. Kamal Srivastava, a
//                 seasoned professional who spent over 18 years working in senior leadership roles
//                 with some of the top corporate organisations in India and abroad.
//               </p>
//               <p>
//                 During his corporate journey, extensive business travel gave him a first-hand view
//                 of what was missing from the industry &mdash; reliability, convenience,
//                 personalisation and a truly customer-centric approach. Airport transfers, corporate
//                 mobility, family trips, specialised travel needs &mdash; customers were left juggling
//                 multiple providers with no assurance of consistent quality.
//               </p>
//               <p>
//                 That gap became the reason Grab Your Cab exists: one trusted brand for every travel
//                 requirement, delivered with professionalism, transparency, safety and genuinely
//                 exceptional service.
//               </p>
//               <div className="ticks">
//                 <li><ShieldCheck className="ic" /> Safety-first fleet and drivers</li>
//                 <li><ShieldCheck className="ic" /> Transparent, upfront pricing</li>
//                 <li><ShieldCheck className="ic" /> One brand, every travel need</li>
//               </div>
//             </div>
//             <div className="about-pics">
//               <div
//                 className="p1"
//                 style={{
//                   position: 'absolute', display: 'grid', placeItems: 'center',
//                   background: 'linear-gradient(135deg, var(--red), var(--red-dark))', color: '#fff',
//                 }}
//               >
//                 <Car style={{ width: 64, height: 64 }} />
//               </div>
//               <div
//                 className="p2"
//                 style={{
//                   position: 'absolute', display: 'grid', placeItems: 'center',
//                   background: 'var(--slate)', color: '#fff',
//                 }}
//               >
//                 <Briefcase style={{ width: 40, height: 40 }} />
//               </div>
//               <div
//                 className="p3"
//                 style={{
//                   position: 'absolute', display: 'grid', placeItems: 'center',
//                   background: 'var(--grey)', border: '1px solid var(--line)', color: 'var(--red)',
//                 }}
//               >
//                 <Award style={{ width: 34, height: 34 }} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Stats band ---------- */}
//       <section className="stats-band">
//         <div className="container">
//           <div className="in">
//             {stats.map((s, i) => (
//               <div className="stat" key={i}>
//                 <div className="i"><s.icon className="ic" /></div>
//                 <b>{s.value}</b>
//                 <span>{s.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Services ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">What We Offer</span>
//             <h2>One Brand, Every Journey</h2>
//             <p>
//               From a self-drive weekend to a full corporate mobility programme, our portfolio is
//               built to cover every kind of trip under one trusted name.
//             </p>
//           </div>
//           <div className="svc-cards">
//             {services.map((s, i) => (
//               <div className="svc-card" key={i}>
//                 <div className="i"><s.icon className="ic" /></div>
//                 <div>
//                   <h3>{s.title}</h3>
//                   <p>{s.desc}</p>
//                 </div>
//                 <ChevronRight className="go" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- What sets us apart ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="sec-head">
//             <span className="eyebrow">What Sets Us Apart</span>
//             <h2>Solutions You Won&rsquo;t Find Under One Roof Anywhere Else</h2>
//             <p>
//               We&rsquo;re proud to be among the very few companies in India offering these
//               thoughtful, purpose-built travel solutions alongside our core services.
//             </p>
//           </div>
//           <div className="svc-cards">
//             {unique.map((u, i) => (
//               <div className="svc-card" key={i}>
//                 <div className="i"><u.icon className="ic" /></div>
//                 <div>
//                   <h3>{u.title}</h3>
//                   <p>{u.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Mission / pitch ---------- */}
//       <section className="sec grey">
//         <div className="container">
//           <div className="pitch">
//             <div
//               className="pic"
//               style={{
//                 display: 'grid', placeItems: 'center',
//                 background: 'linear-gradient(135deg, var(--slate), var(--slate-dark))',
//               }}
//             >
//               <div style={{ textAlign: 'center', color: '#fff' }}>
//                 <Target style={{ width: 56, height: 56, margin: '0 auto 14px' }} />
//                 <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 20 }}>
//                   India&rsquo;s Most Trusted
//                 </div>
//                 <div style={{ color: 'rgba(255,255,255,.75)', fontSize: 13.5, marginTop: 4 }}>
//                   Mobility Partner
//                 </div>
//               </div>
//             </div>
//             <div>
//               <span className="eyebrow">Our Mission</span>
//               <h2>Confidence, Comfort and Memorable Journeys</h2>
//               <p>
//                 Transportation is more than moving from one place to another &mdash; it&rsquo;s about
//                 creating confidence and comfort in every journey. Whether it&rsquo;s a single
//                 traveller or a large corporate group, every booking gets the same dedication,
//                 professionalism and attention to detail.
//               </p>
//               <p>
//                 Our mission is simple: to become India&rsquo;s most trusted mobility partner by
//                 continuously introducing innovative travel solutions, maintaining the highest
//                 standards of service, and ensuring every journey begins and ends with a smile.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Quote / closing statement ---------- */}
//       <section className="sec">
//         <div className="container">
//           <div className="tst" style={{ maxWidth: 760, margin: '0 auto', padding: '32px 36px' }}>
//             <Quote className="ic" style={{ width: 26, height: 26, color: 'var(--red)' }} />
//             <p style={{ fontSize: 17, marginTop: 14 }}>
//               Grab Your Cab isn&rsquo;t just a transport company. It&rsquo;s a complete mobility
//               solution designed around your needs.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Call banner ---------- */}
//       <section className="sec" style={{ paddingTop: 0 }}>
//         <div className="container">
//           <div
//             className="banner"
//             style={{ background: 'linear-gradient(120deg, var(--slate-dark), var(--red-dark))' }}
//           >
//             <div className="in">
//               <h2>Ready to Travel With Grab Your Cab?</h2>
//               <p>
//                 From airport runs to weddings, self-drive escapes to corporate fleets &mdash;
//                 let&rsquo;s plan your next journey together.
//               </p>
//               <div className="hbtns">
//                 <a href="/contact" className="btn btn-amber">Book Now</a>
//                 <a href="tel:+910000000000" className="btn btn-ghost" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>
//                   Call Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//      <Footer/>
//     </>
   
//   )
// }

// export default AboutPage

import React from 'react'
import {
  Car,
  Navigation,
  Sparkles,
  Briefcase,
  Plane,
  Truck,
  Tent,
  Bus,
  Heart,
  Users,
  TrainFront,
  ShieldCheck,
  PawPrint,
  Stethoscope,
  Accessibility,
  Shield,
  PartyPopper,
  ChevronRight,
  Quote,
  Award,
  Building2,
  Target,
  Eye,
  HeartHandshake,
} from 'lucide-react'
import Header from '@/components/site/Header'
import Footer from '@/components/site/Footer'

// const services = [
//   { icon: Car, title: 'Self Drive Car Rental', desc: 'Keys in your hand, freedom on your terms.' },
//   { icon: Navigation, title: 'Taxi Services', desc: 'Reliable rides across every city we serve.' },
//   { icon: Sparkles, title: 'Luxury Car Rental', desc: 'Premium vehicles for the moments that matter.' },
//   { icon: Briefcase, title: 'Corporate Transportation', desc: 'Dependable mobility built for business.' },
//   { icon: Plane, title: 'Airport Transfers', desc: 'On-time pickups and drops, every time.' },
//   { icon: Truck, title: 'Tempo Traveller Rental', desc: 'Spacious rides for groups on the move.' },
//   { icon: Tent, title: 'Caravan Rental', desc: 'A home on wheels for the open road.' },
//   { icon: Bus, title: 'Luxury Bus Rental', desc: 'Comfortable travel for larger gatherings.' },
//   { icon: Heart, title: 'Wedding & Event Transportation', desc: 'Beautifully arranged rides for special days.' },
//   { icon: Users, title: 'Group & Outstation Travel', desc: 'Well-planned journeys, near or far.' },
// ]

const services = [
  { image: '/taxi-services/self-drive.jpeg', title: 'Self Drive Car Rental', desc: 'Keys in your hand, freedom on your terms.' },
  { image: '/taxi-services/taxi.jpeg', title: 'Taxi Services', desc: 'Reliable rides across every city we serve.' },
  { image: '/taxi-services/luxury-car.jpeg', title: 'Luxury Car Rental', desc: 'Premium vehicles for the moments that matter.' },
  { image: '/taxi-services/corporate.jpeg', title: 'Corporate Transportation', desc: 'Dependable mobility built for business.' },
  { image: '/taxi-services/airport.jpg', title: 'Airport Transfers', desc: 'On-time pickups and drops, every time.' },
  { image: '/taxi-services/tempo.jpeg', title: 'Tempo Traveller Rental', desc: 'Spacious rides for groups on the move.' },
  { image: '/taxi-services/tempo-travel.jpeg', title: 'Caravan Rental', desc: 'A home on wheels for the open road.' },
  { image: '/taxi-services/luxury-bus.jpeg', title: 'Luxury Bus Rental', desc: 'Comfortable travel for larger gatherings.' },
  { image: '/taxi-services/wedding.webp', title: 'Wedding & Event Transportation', desc: 'Beautifully arranged rides for special days.' },
  { image: '/taxi-services/outstation.webp', title: 'Group & Outstation Travel', desc: 'Well-planned journeys, near or far.' },
];

const unique = [
  { icon: TrainFront, title: 'Platform-to-Coach Taxi Assistance', desc: 'Help right up to your train compartment, so you never travel the last stretch alone.' },
  { icon: ShieldCheck, title: 'Dedicated Taxi Service for Women', desc: 'Rides designed around safety, comfort, and peace of mind.' },
  { icon: PawPrint, title: 'Pet-Friendly Taxi Service', desc: 'Because your travel plans should include the whole family.' },
  { icon: Users, title: 'Senior Citizen Taxi Service', desc: 'Patient, considerate service for our older travellers.' },
  { icon: Stethoscope, title: 'Taxi Service for Patients with an Attendant', desc: 'Careful, supported travel for medical journeys.' },
  { icon: Accessibility, title: 'Taxi Service for Persons with Disabilities', desc: 'Accessible rides built around your needs.' },
  { icon: Shield, title: 'Self Drive with Armed Bodyguard', desc: 'Added security on request, wherever you\u2019re headed.' },
  { icon: PartyPopper, title: 'Customised Occasion Cars', desc: 'Decorated self-drive cars for birthdays, weddings, proposals and more.' },
]

const stats = [
  { icon: Award, value: '18+', label: 'Years of Leadership Experience' },
  { icon: Car, value: '10+', label: 'Core Mobility Services' },
  { icon: Sparkles, value: '8', label: 'Specialised Offerings' },
  { icon: Building2, value: '1', label: 'Trusted Mobility Brand' },
]

const founders = [
  {
    icon: Briefcase,
    name: 'Mr. Kamal Srivastava',
    role: 'Founder',
    bio: 'A seasoned professional with over 18 years in senior leadership roles across top corporate organisations in India and abroad. Extensive business travel gave him a first-hand view of what was missing from the industry \u2014 reliability, convenience, personalisation and a truly customer-centric approach. That gap became the reason Grab Your Cab exists.',
    image:"/images/founders/kamal.jpeg"
  },
  {
    icon: Award,
    name: 'Ms. Vinnie Sharma',
    role: 'Co-Founder',
    bio: 'Brings over 18 years of corporate experience in senior leadership roles with some of India\u2019s leading organisations, spanning Sales, Marketing, Auditing, Business Operations and Customer Experience. Her strategic thinking and innovative mindset have played a significant role in shaping Grab Your Cab into a customer-focused brand that stands apart from the competition.',
    image:"/images/founders/vinnie.jpeg"
  },
]

const values = [
  {
    icon: Eye,
    title: 'Our Vision',
    desc: 'To become India\u2019s most trusted and innovative mobility company by delivering world-class transportation solutions that combine technology, safety, convenience, and exceptional customer service. We aspire to continuously introduce innovative travel solutions that make transportation simpler, smarter, and more accessible for individuals, families, businesses, and communities across India.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    desc: 'To provide reliable, transparent, and customer-centric transportation services while continuously raising industry standards through innovation, operational excellence, and personalized travel experiences. Every journey we serve reflects our commitment to quality, trust, and customer satisfaction.',
  },
  {
    icon: HeartHandshake,
    title: 'Our Promise',
    desc: 'Whether you are travelling alone, with your family, with colleagues, or with hundreds of guests, Grab Your Cab is committed to delivering the same level of professionalism, comfort, and care. We don\u2019t just provide vehicles. We provide confidence. We provide convenience. We create journeys that people remember.',
  },
]

const AboutPage = () => {
  return (
    <>
    <Header/>
    <div>
      {/* ---------- Page hero ---------- */}
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">
            <a href="/">Home</a>
            <ChevronRight className="ic" style={{ width: 12, height: 12 }} />
            <b>About Us</b>
          </div>
          <span className="eyebrow">Who We Are</span>
          <h1>Doorstep to the Skies, We Take You Everywhere</h1>
          <p className="lead">
            Grab Your Cab is India&rsquo;s trusted mobility partner &mdash; built on the belief that
            every journey, big or small, deserves reliability, safety and a personal touch.
          </p>
          <div className="hero-ctas" style={{ marginTop: 22 }}>
            <a href="/contact" className="btn btn-amber">Get In Touch</a>
            <a href="/" className="btn btn-ghost">Explore Services</a>
          </div>
        </div>
      </section>

      {/* ---------- Founder story ---------- */}
      <section className="sec">
        <div className="container">
          <div className="about-wrap">
            <div>
              <span className="eyebrow" style={{ display: 'block', color: 'var(--red)', fontWeight: 600, fontSize: 12.5, letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: 8 }}>
                Our Story
              </span>
              <h2>Built From 18 Years On The Road</h2>
              <p>
               Grab Your Cab was founded by Mr. Kamal Srivastava, a visionary entrepreneur with over 18 years of experience in senior leadership positions with leading corporate organizations in India and abroad.
Throughout his corporate career, he travelled extensively across cities and countries. While managing business travel, corporate transportation, and client visits, he observed that the transportation industry lacked consistency, professionalism, customer focus, and personalized solutions. Travellers often had to depend on multiple vendors for different requirements, with little assurance of quality, safety, or reliability.
              </p>
              <p>
                During his corporate journey, extensive business travel gave him a first-hand view
                of what was missing from the industry &mdash; reliability, convenience,
                personalisation and a truly customer-centric approach. Airport transfers, corporate
                mobility, family trips, specialised travel needs &mdash; customers were left juggling
                multiple providers with no assurance of consistent quality.
              </p>
              <p>
                Recognizing this gap, Mr. Srivastava envisioned a company where every transportation requirement could be fulfilled under one trusted roof. This vision became Grab Your Cab, a brand dedicated to delivering world-class transportation services while introducing innovative solutions that genuinely solve customer problems.
              </p>
              <p>
                The journey of Grab Your Cab has been further strengthened by its Co-Founder, Ms. Vinnie Sharma, who brings over 18 years of corporate experience in senior leadership roles with some of India's leading organizations.
Her expertise spans Sales, Marketing, Auditing, Business Operations, Customer Experience, and multiple industry verticals. Her strategic thinking, operational excellence, and innovative mindset have played a significant role in shaping Grab Your Cab into a customer-focused brand that stands apart from the competition.
Ms. Sharma has been instrumental in introducing fresh ideas, improving service quality, strengthening operational processes, and building customer-first solutions that differentiate Grab Your Cab from conventional transportation companies.

              </p>
              <p>
                Together, Mr. Kamal Srivastava and Ms. Vinnie Sharma share a common vision: building
                India&rsquo;s most trusted mobility company by combining corporate professionalism
                with exceptional customer service and continuous innovation.
              </p>
              <div className="ticks">
                <li><ShieldCheck className="ic" /> Safety-first fleet and drivers</li>
                <li><ShieldCheck className="ic" /> Transparent, upfront pricing</li>
                <li><ShieldCheck className="ic" /> One brand, every travel need</li>
              </div>
            </div>
            <div className="about-pics">
              <div
                className="p1"
                style={{
                  position: 'absolute', display: 'grid', placeItems: 'center',
                  background: 'linear-gradient(135deg, var(--red), var(--red-dark))', color: '#fff',
                }}
              >
                <Car style={{ width: 64, height: 64 }} />
              </div>
              <div
                className="p2"
                style={{
                  position: 'absolute', display: 'grid', placeItems: 'center',
                  background: 'var(--slate)', color: '#fff',
                }}
              >
                <Briefcase style={{ width: 40, height: 40 }} />
              </div>
              <div
                className="p3"
                style={{
                  position: 'absolute', display: 'grid', placeItems: 'center',
                  background: 'var(--grey)', border: '1px solid var(--line)', color: 'var(--red)',
                }}
              >
                <Award style={{ width: 34, height: 34 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Founders cards ---------- */}
      {/* <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">Leadership</span>
            <h2>Meet Our Founders</h2>
            <p>
              Two leaders, one shared vision &mdash; building India&rsquo;s most trusted mobility
              company.
            </p>
          </div>
          <div className="svc-cards">
            {founders.map((f, i) => (
              <div className="svc-card" key={i}>
                <div className="i"><f.icon className="ic" /></div>
                <div>
                  <h3>{f.name}</h3>
                  <span style={{ display: 'block', color: 'var(--red)', fontWeight: 600, fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase', margin: '2px 0 8px' }}>
                    {f.role}
                  </span>
                  <p>{f.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <section className="sec grey">
  <div className="container">
    <div className="sec-head">
      <span className="eyebrow">Leadership</span>
      <h2>Meet Our Founders</h2>
      <p>
        Two leaders, one shared vision &mdash; building India&rsquo;s most trusted mobility
        company.
      </p>
    </div>
    <div className="svc-cards">
      {founders.map((f, i) => (
        <div className="svc-card" key={i}>
          <div className="founder-img-wrap">
            <img
              src={f.image}
              alt={f.name}
              className="founder-img"
            />
          </div>
          <div>
            <h3>{f.name}</h3>
            <span
              style={{
                display: 'block',
                color: 'var(--red)',
                fontWeight: 600,
                fontSize: 12.5,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                margin: '2px 0 8px',
              }}
            >
              {f.role}
            </span>
            <p>{f.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ---------- Stats band ---------- */}
      <section className="stats-band">
        <div className="container">
          <div className="in">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <div className="i"><s.icon className="ic" /></div>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="sec grey">
        <div className="container">
          
          {/* <div className="svc-cards">
            {services.map((s, i) => (
              <div className="svc-card" key={i}>
                <div className="i"><s.icon className="ic" /></div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                <ChevronRight className="go" />
              </div>
            ))}
          </div> */}
          <section className="sec grey">
  <div className="container">
    <div className="sec-head">
      <span className="eyebrow">What We Offer</span>
      <h2>One Brand, Every Journey</h2>
      <p>
        From a self-drive weekend to a full corporate mobility programme, our portfolio is
        built to cover every kind of trip under one trusted name.
      </p>
    </div>
    <div className="svc-cards">
      {services.map((s, i) => (
        <div className="svc-card" key={i}>
          <div className="i">
            <img src={s.image} alt={s.title} className="ic" />
          </div>
          <div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
          <ChevronRight className="go" />
        </div>
      ))}
    </div>
  </div>
</section>
        </div>
      </section>

      {/* ---------- What sets us apart ---------- */}
      <section className="sec">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">What Sets Us Apart</span>
            <h2>Solutions You Won&rsquo;t Find Under One Roof Anywhere Else</h2>
            <p>
              We&rsquo;re proud to be among the very few companies in India offering these
              thoughtful, purpose-built travel solutions alongside our core services.
            </p>
          </div>
          <div className="svc-cards">
            {unique.map((u, i) => (
              <div className="svc-card" key={i}>
                <div className="i"><u.icon className="ic" /></div>
                <div>
                  <h3>{u.title}</h3>
                  <p>{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Vision / Mission / Promise (separated) ---------- */}
      <section className="sec grey">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow">What Drives Us</span>
            <h2>Our Vision, Mission &amp; Promise</h2>
            <p>
              Three ideas that guide every decision we make and every journey we deliver.
            </p>
          </div>
          <div className="svc-cards">
            {values.map((v, i) => (
              <div className="svc-card" key={i}>
                <div className="i"><v.icon className="ic" /></div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Quote / closing statement ---------- */}
      {/* <section className="sec">
        <div className="container">
          <div className="tst" style={{ maxWidth: 760, margin: '0 auto', padding: '32px 36px' }}>
            <Quote className="ic" style={{ width: 26, height: 26, color: 'var(--red)' }} />
            <p style={{ fontSize: 17, marginTop: 14 }}>
              Grab Your Cab isn&rsquo;t just a transport company. It&rsquo;s a complete mobility
              solution designed around your needs.
            </p>
          </div>
        </div>
      </section> */}

      {/* ---------- Call banner ---------- */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="container">
          <div
            className="banner"
            style={{ background: 'linear-gradient(120deg, var(--slate-dark), var(--red-dark))' }}
          >
            <div className="in">
              <h2>Ready to Travel With Grab Your Cab?</h2>
              <p>
                From airport runs to weddings, self-drive escapes to corporate fleets &mdash;
                let&rsquo;s plan your next journey together.
              </p>
              <div className="hbtns">
               <a
  href="https://wa.me/917522817555"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-amber"
>
  Book Now
</a>
                <a href="tel:+917522817555" className="btn btn-ghost" style={{ background: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
     <Footer/>
    </>
   
  )
}

export default AboutPage