import { image } from "framer-motion/client"

export const shopInfo = {
  name: 'Gokul Auto Electricals',
  address: '171-1, Nanjundapuram Rd, Ramanathapuram, Coimbatore – 641 045',
  phone1: '+91 9842296867',
  phone2: '+91 6385596867',
  email: 'muthukumarmgae@gmail.com',
  whatsapp: 'https://wa.me/919842296867',
  call: 'tel:9842296867',
  mapsDir: 'https://www.google.co.in/maps/dir//Gokul+Auto+Electricals,+171-1,+Nanjundapuram+Rd,+Ramanathapuram,+Coimbatore,+Tamil+Nadu+641045/@10.9938909,76.9945945,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba859e81eaae225:0xef205b39e80119f!2m2!1d76.9978519!2d10.9926802?entry=ttu',
  hours: [
    { day: 'Monday – Saturday', time: '9:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '9:00 AM – 1:00 PM' },
  ],
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0!2d76.9978519!3d10.9926802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859e81eaae225%3A0xef205b39e80119f!2sGokul%20Auto%20Electricals!5e0!3m2!1sen!2sin!4v1',
  yearsExp: new Date().getFullYear() - 2000,
}

export const services = [
  { iconName: 'Battery', service: 'Amaron Battery Sales', serviceDesc: 'Authorized Amaron dealer for bikes, cars, trucks. 100% genuine with manufacturer warranty.' },
  { iconName: 'Zap', service: 'Free Battery Testing', serviceDesc: '20-point diagnostic test to check battery health, voltage & cold cranking amps — at no cost.' },
  { iconName: 'Wrench', service: 'Battery Installation', serviceDesc: 'Free on-site installation with every purchase. We also do doorstep service across Coimbatore.' },
  { iconName: 'MonitorSpeaker', service: 'UPS & Inverter Sales', serviceDesc: 'Amaron UPS & inverter batteries for home and office. Expert installation included.' },
  { iconName: 'Car', service: 'Alternator Repair', serviceDesc: 'Expert repair & replacement for all car and bike alternators. Tested and warranted.' },
  { iconName: 'Settings', service: 'Self Motor Service', serviceDesc: 'Starter motor testing, overhaul & replacement. Fast turnaround with genuine parts.' },
  { iconName: 'Cable', service: 'Auto Electrical Wiring', serviceDesc: 'Full auto wiring jobs, fault diagnosis & fuse replacement for any vehicle.' },
  { iconName: 'ShieldCheck', service: 'Annual Maintenance', serviceDesc: 'Comprehensive electrical health check — catch problems early, stay safe all year.' },
]

// Amaron is primary; others available for customer convenience
export const batteries = [
  { id: 'b1', brand: 'Amaron', name: 'Amaron Pro Rider', sub: 'Two Wheeler', price: 1380, mrp: 1514, cap: '5 Ah', warranty: '24 Months', tag: 'Bestseller', primary: true, image: 'https://res.cloudinary.com/dmtafuh5c/image/upload/v1778702231/2_Wheeler-MF5-_Front_byqnhk.png' },
  { id: 'b2', brand: 'Amaron', name: 'Amaron Flo', sub: 'Car', price: 5130, mrp: 5455, cap: '35 Ah', warranty: '72 Months', tag: 'Most Popular', primary: true ,image:'https://res.cloudinary.com/dmtafuh5c/image/upload/v1778705056/42b20l_zygzup.png'},
  { id: 'b3', brand: 'Amaron', name: 'Amaron Duro', sub: 'Car – ISS', price: 5000, mrp: 5600, cap: '40 Ah', warranty: '48 Months', tag: 'Most Popular', primary: true, image:'https://res.cloudinary.com/dmtafuh5c/image/upload/v1778744431/DURO_D23R_tkxahx.png'},
  { id: 'b4', brand: 'Amaron', name: 'Amaron Hi Way', sub: 'Commercial', price: 8177, mrp: 8478, cap: '80 Ah', warranty: '42 Months', tag: null, primary: true, image:'https://res.cloudinary.com/dmtafuh5c/image/upload/v1778741786/AAM-HW-HC620D31R_0_1_rizhdo.png'},
  // { id: 'b5', brand: 'Exide', name: 'Exide Matrix', sub: 'Car – Sedan', price: 4599, mrp: 5500, cap: '44 Ah', warranty: '24 Months', tag: null, primary: false },
  // { id: 'b6', brand: 'SF Sonic', name: 'SF Sonic Pro Rider', sub: 'Two Wheeler', price: 1650, mrp: 1950, cap: '5 Ah', warranty: '18 Months', tag: null, primary: false },
]

export const upsBatteries = [
  { id: 'u1', brand: 'Amaron', name: 'Amaron Quanta 7Ah', sub: 'UPS – Small Office', price: 1000, mrp: 1100, cap: '12V/7Ah', warranty: '24 Months', tag: 'Budget', primary: true, image:'https://res.cloudinary.com/dmtafuh5c/image/upload/v1778749076/quanta7ah_jb2y6l.png' },
  { id: 'u2', brand: 'Amaron', name: 'Amaron UPS - HB1200AP', sub: 'UPS – Medium', price: 7000, mrp: 10183, cap: '1200VA', warranty: '36 Months', tag: 'Home UPS', primary: true , image: 'https://res.cloudinary.com/dmtafuh5c/image/upload/v1778703732/ups-image_hkawop.png'},
  { id: 'u3', brand: 'Amaron', name: 'Amaron Inverter 150Ah', sub: 'Home Inverter', price: 13500, mrp: 16866 , cap: '12V/150Ah', warranty: '60 Months', tag: 'Home Power', primary: true , image:'https://res.cloudinary.com/dmtafuh5c/image/upload/v1778746357/tubular-150ah_1_pjn8nj.png'},
  { id: 'u4', brand: 'Tata', name: 'Tata Switch On Inverter 150Ah', sub: 'Home Inverter', price: 13000, mrp: 17693, cap: '12V/150Ah', warranty: '72 Months', tag: null, primary: false , image:'https://res.cloudinary.com/dmtafuh5c/image/upload/v1778705686/TataGreen-SwitchOn_150ah_oncxhr.png'},
]

export const brands = [
  { name: 'Amaron', note: 'Primary – Authorized Dealer', color: '#22c55e', primary: true },
  { name: 'Tata', note: 'Available on request', color: '#3b82f6', primary: false },
  { name: 'Others', note: 'Available on request', color: '#8b5cf6', primary: false },
]

export const reviews = [
  { name: 'Rajesh K.', vehicle: 'Maruti Swift', rating: 5, text: 'Got my battery replaced in 30 minutes. Very professional and transparent pricing. Amaron battery working perfectly!', loc: 'RS Puram', date: '2 days ago' },
  { name: 'Priya S.', vehicle: 'Honda Activa', rating: 5, text: 'My scooter battery died in the morning. Called Gokul Auto and they arrived within 20 minutes. Real lifesavers!', loc: 'Gandhipuram', date: '1 week ago' },
  { name: 'Arjun V.', vehicle: 'Hyundai i20', rating: 5, text: 'Best battery shop in Coimbatore! Got Amaron at a great price with free installation. Highly recommend!', loc: 'Peelamedu', date: '2 weeks ago' },
  { name: 'Karthik M.', vehicle: 'Toyota Innova', rating: 5, text: 'Excellent service for my Innova. They even checked the alternator at no charge. Very honest and trustworthy.', loc: 'Race Course', date: '1 month ago' },
  { name: 'Meena D.', vehicle: 'Bajaj Pulsar', rating: 4, text: 'Good service, genuine products. Small wait but totally worth it. The staff explains everything patiently.', loc: 'Saibaba Colony', date: '3 weeks ago' },
  { name: 'Surya P.', vehicle: 'TVS Apache', rating: 5, text: 'Quick, affordable and reliable. Staff really know their stuff. Battery running strong for 8 months now!', loc: 'Singanallur', date: '1 month ago' },
]

export const faq = [
  { ques: 'What brands of batteries do you sell?', ans: 'Amaron is our primary brand — we are an authorized Amaron dealer. We also stock Tata, Exide and other brands to meet customer preferences and budget requirements.', imgDisplay: false },
  { ques: 'Do you provide a warranty on batteries?', ans: 'Yes! All Amaron batteries carry manufacturer warranty from 18 to 48 months depending on the model. Other brands also carry their respective manufacturer warranties.', imgDisplay: false },
  { ques: 'Do you offer free installation?', ans: 'Yes, free battery installation is provided for all purchases at our shop. Doorstep delivery and installation is available across Coimbatore — call or WhatsApp to confirm.', imgDisplay: false },
  { ques: 'What are your business hours?', ans: 'Monday to Saturday: 9:00 AM – 8:00 PM. Sunday: 9:00 AM – 1:00 PM. For emergencies, call us directly.', imgDisplay: false },
  { ques: 'What payment methods do you accept?', ans: 'We accept Cash, Credit/Debit Cards, GPay, PhonePe and all UPI payment methods.', imgDisplay: true },
  { ques: 'Do you service UPS and inverter batteries?', ans: 'Yes! We sell and service Amaron UPS and inverter batteries for homes and offices, with installation and annual maintenance included.', imgDisplay: false },
  { ques: 'Can I get my battery tested before buying?', ans: 'Absolutely — free battery diagnostic test available. Bring your vehicle or battery and our technicians will test it thoroughly and advise honestly.', imgDisplay: false },
  { ques: 'Do you repair alternators and self motors?', ans: 'Yes. Alternator and starter motor repair, overhaul and replacement are core services. We handle all makes and models with genuine parts.', imgDisplay: false },
]
