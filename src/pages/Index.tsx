import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import EquipmentSection from '@/components/EquipmentSection';
import TariffsSection from '@/components/TariffsSection';
import FAQSection from '@/components/FAQSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const equipment = [
    {
      id: 1,
      name: 'Gaming Station PRO',
      category: 'Премиум',
      specs: {
        cpu: 'Intel Core i9-13900K',
        gpu: 'NVIDIA RTX 4090 24GB',
        ram: '64GB DDR5',
        storage: '2TB NVMe SSD',
        monitor: '27" 240Hz 1ms',
        peripherals: 'Razer BlackWidow V4 Pro, Razer DeathAdder V3 Pro'
      },
      price: 2000,
      image: 'https://v3b.fal.media/files/b/tiger/eHx7QTC8EGEQ4RNpKiL9o_output.png'
    },
    {
      id: 2,
      name: 'Gaming Station ULTRA',
      category: 'Топ',
      specs: {
        cpu: 'AMD Ryzen 9 7950X',
        gpu: 'NVIDIA RTX 4080 16GB',
        ram: '32GB DDR5',
        storage: '1TB NVMe SSD',
        monitor: '27" 165Hz 1ms',
        peripherals: 'HyperX Alloy Origins, Logitech G Pro X Superlight'
      },
      price: 1500,
      image: 'https://v3b.fal.media/files/b/tiger/eHx7QTC8EGEQ4RNpKiL9o_output.png'
    },
    {
      id: 3,
      name: 'Gaming Station STANDARD',
      category: 'Стандарт',
      specs: {
        cpu: 'Intel Core i7-13700K',
        gpu: 'NVIDIA RTX 4070 12GB',
        ram: '32GB DDR4',
        storage: '1TB NVMe SSD',
        monitor: '24" 144Hz 1ms',
        peripherals: 'SteelSeries Apex 7, SteelSeries Rival 3'
      },
      price: 1000,
      image: 'https://v3b.fal.media/files/b/tiger/eHx7QTC8EGEQ4RNpKiL9o_output.png'
    }
  ];

  const tariffs = [
    { name: 'Час', duration: '1 час', price: 300, popular: false },
    { name: '3 часа', duration: '3 часа', price: 800, popular: true },
    { name: '5 часов', duration: '5 часов', price: 1200, popular: false },
    { name: 'День', duration: '12 часов', price: 2000, popular: false }
  ];

  const faqs = [
    {
      question: 'Какие игры доступны?',
      answer: 'У нас установлены все популярные игры: CS2, Dota 2, Valorant, Apex Legends, Fortnite, GTA V, Cyberpunk 2077 и многие другие. Также доступны платформы Steam, Epic Games, Battle.net.'
    },
    {
      question: 'Нужна ли предварительная бронь?',
      answer: 'Рекомендуем бронировать место заранее, особенно в выходные и вечернее время. Бронирование можно сделать онлайн или по телефону.'
    },
    {
      question: 'Можно ли принести свою периферию?',
      answer: 'Да, вы можете использовать свою клавиатуру, мышь или наушники. У всех станций есть USB-порты и аудио-разъемы.'
    },
    {
      question: 'Есть ли еда и напитки?',
      answer: 'В клубе есть бар с напитками, снеками и быстрой едой. Также можно заказать доставку из близлежащих кафе.'
    },
    {
      question: 'Проводятся ли турниры?',
      answer: 'Да! Мы регулярно проводим турниры по популярным играм с призовым фондом. Следите за анонсами в наших соцсетях.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      <HeroSection />
      <EquipmentSection equipment={equipment} />
      <TariffsSection tariffs={tariffs} />
      <FAQSection faqs={faqs} />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
