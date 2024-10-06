import BatteryIcon from '../assets/svg/BatteryIcon'
import ChargerIcon from '../assets/svg/ChargerIcon';
import Inverter from '../assets/svg/Inverter';
import ServiceIcon from '../assets/svg/ServiceIcon';

export const faq=[{
    ques:"What services do you offer?",
    ans:"We offer a wide range of services including battery sales and service, automobile horn service, self motor service, alternator service, and home UPS wiring with inverter batteries.",
    imgDisplay:false
},{
    ques:"What are your shop policies?",
    ans:"Our shop policies include a satisfaction guarantee, warranty on all services, and transparent pricing.",
    imgDisplay:false
},{
    ques:"How can I contact you?",
    ans:"You can contact us through phone, email, or by visiting our shop during business hours."
},{
    ques:"Do you provide home delivery?",
    ans:"Yes, we provide home delivery for battery and inverter purchases.",
    imgDisplay:false
},{
    ques:"What are your payment options?",
    ans:"We accept cash, credit/debit cards, and online payment methods.",
    imgDisplay:true

}];

export const service=[{
    icon:BatteryIcon,
    service:'Battery Sales',
    serviceDesc:'We are proud to be an authorized dealer of Amaron batteries and others, recognized for their zero-maintenance design and exceptional performance.'
},{
    icon:ChargerIcon,
    service:'Battery Charging',
    serviceDesc:'Charging Methods are Includes constant voltage, constant current, and pulse charging for different battery types. Maintains battery health for vehicles that aren’t used frequently by Trickle Charging'
},{
    icon:ServiceIcon,
    service:'Self Motor, Alternator, Horn Service',
    serviceDesc:'We diagnose, fix, or replace faulty alternators and self motor to prevent electrical issues and battery drain. Personalized horn installations that meet safety regulations.'
},{
    icon:Inverter,
    service:'UPS & Inverter Batteries',
    serviceDesc:'High-quality batteries for reliable backup power during outages. Long-lasting inverter batteries with installation and maintenance services. Timely replacements for aging UPS and inverter batteries.'
}];