import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

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
      <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-glow-cyan">CYBER GAMING CLUB</h1>
            <div className="hidden md:flex gap-6">
              {['Главная', 'Оборудование', 'Тарифы', 'FAQ', 'Контакты'].map((item, idx) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['home', 'equipment', 'tariffs', 'faq', 'contacts'][idx])}
                  className={`text-sm font-medium transition-all hover:text-primary ${
                    activeSection === ['home', 'equipment', 'tariffs', 'faq', 'contacts'][idx]
                      ? 'text-primary text-glow-cyan'
                      : 'text-foreground/70'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <Button className="glow-cyan bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Calendar" size={16} className="mr-2" />
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary glow-cyan">
                <Icon name="Zap" size={14} className="mr-1" />
                Топовое оборудование 2024
              </Badge>
              <h2 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="text-glow-cyan">ПОГРУЗИСЬ</span>
                <br />
                <span className="gradient-cyber bg-clip-text text-transparent">В БУДУЩЕЕ</span>
                <br />
                <span className="text-glow-magenta">КИБЕРСПОРТА</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg">
                RTX 4090, 240Hz мониторы, профессиональная периферия и атмосфера настоящего киберспорта
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="glow-cyan bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Gamepad2" size={20} className="mr-2" />
                  Забронировать место
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:border-primary">
                  <Icon name="Info" size={20} className="mr-2" />
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 gradient-cyber-dark blur-3xl opacity-50 animate-glow-pulse"></div>
              <Card className="relative overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm glow-cyan">
                <CardContent className="p-0">
                  <img
                    src="https://v3b.fal.media/files/b/tiger/eHx7QTC8EGEQ4RNpKiL9o_output.png"
                    alt="Gaming Setup"
                    className="w-full h-auto"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-secondary/20 text-secondary border-secondary glow-magenta mb-4">
              <Icon name="Cpu" size={14} className="mr-1" />
              Оборудование
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-glow-magenta">ИГРОВЫЕ СТАНЦИИ</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Каждая станция оснащена топовым железом для максимального FPS и комфортной игры
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8 bg-card/50">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="premium">Премиум</TabsTrigger>
              <TabsTrigger value="ultra">Ультра</TabsTrigger>
              <TabsTrigger value="standard">Стандарт</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipment.map((item, idx) => (
                  <Card
                    key={item.id}
                    className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all hover:glow-cyan animate-fade-in"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge className="bg-primary/20 text-primary border-primary">{item.category}</Badge>
                        <span className="text-2xl font-bold text-primary">{item.price}₽/ч</span>
                      </div>
                      <CardTitle className="text-2xl">{item.name}</CardTitle>
                      <CardDescription>Топовая конфигурация для профессионалов</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Cpu" size={16} className="text-primary" />
                          <span className="text-muted-foreground">CPU:</span>
                          <span className="font-medium">{item.specs.cpu}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Gpu" size={16} className="text-secondary" />
                          <span className="text-muted-foreground">GPU:</span>
                          <span className="font-medium">{item.specs.gpu}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="MemoryStick" size={16} className="text-accent" />
                          <span className="text-muted-foreground">RAM:</span>
                          <span className="font-medium">{item.specs.ram}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="HardDrive" size={16} className="text-primary" />
                          <span className="text-muted-foreground">Storage:</span>
                          <span className="font-medium">{item.specs.storage}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Monitor" size={16} className="text-secondary" />
                          <span className="text-muted-foreground">Monitor:</span>
                          <span className="font-medium">{item.specs.monitor}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Keyboard" size={16} className="text-accent mt-1" />
                          <div className="flex-1">
                            <span className="text-muted-foreground">Периферия:</span>
                            <p className="font-medium text-xs leading-relaxed">{item.specs.peripherals}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full glow-cyan bg-primary text-primary-foreground hover:bg-primary/90">
                        <Icon name="Calendar" size={16} className="mr-2" />
                        Забронировать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {['premium', 'ultra', 'standard'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {equipment
                    .filter((item) => item.category.toLowerCase().includes(category))
                    .map((item) => (
                      <Card
                        key={item.id}
                        className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all hover:glow-cyan"
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <Badge className="bg-primary/20 text-primary border-primary">{item.category}</Badge>
                            <span className="text-2xl font-bold text-primary">{item.price}₽/ч</span>
                          </div>
                          <CardTitle className="text-2xl">{item.name}</CardTitle>
                          <CardDescription>Топовая конфигурация для профессионалов</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <Icon name="Cpu" size={16} className="text-primary" />
                              <span className="text-muted-foreground">CPU:</span>
                              <span className="font-medium">{item.specs.cpu}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Gpu" size={16} className="text-secondary" />
                              <span className="text-muted-foreground">GPU:</span>
                              <span className="font-medium">{item.specs.gpu}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="MemoryStick" size={16} className="text-accent" />
                              <span className="text-muted-foreground">RAM:</span>
                              <span className="font-medium">{item.specs.ram}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="HardDrive" size={16} className="text-primary" />
                              <span className="text-muted-foreground">Storage:</span>
                              <span className="font-medium">{item.specs.storage}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Icon name="Monitor" size={16} className="text-secondary" />
                              <span className="text-muted-foreground">Monitor:</span>
                              <span className="font-medium">{item.specs.monitor}</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <Icon name="Keyboard" size={16} className="text-accent mt-1" />
                              <div className="flex-1">
                                <span className="text-muted-foreground">Периферия:</span>
                                <p className="font-medium text-xs leading-relaxed">{item.specs.peripherals}</p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button className="w-full glow-cyan bg-primary text-primary-foreground hover:bg-primary/90">
                            <Icon name="Calendar" size={16} className="mr-2" />
                            Забронировать
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="tariffs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-accent/20 text-accent border-accent glow-blue mb-4">
              <Icon name="CreditCard" size={14} className="mr-1" />
              Тарифы
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="gradient-cyber bg-clip-text text-transparent">ВЫГОДНЫЕ ЦЕНЫ</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Гибкая система тарификации для любого бюджета и времени игры
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tariffs.map((tariff, idx) => (
              <Card
                key={tariff.name}
                className={`relative border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all animate-fade-in ${
                  tariff.popular ? 'glow-magenta scale-105' : 'hover:glow-cyan'
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {tariff.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground border-secondary glow-magenta">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                  <div className="space-y-1">
                    <p className="text-5xl font-black text-primary">{tariff.price}₽</p>
                    <p className="text-muted-foreground text-sm">{tariff.duration}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Все игровые станции</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Безлимитный интернет</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Все игры и платформы</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-primary" />
                      <span>Комфортное место</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${
                      tariff.popular
                        ? 'glow-magenta bg-secondary text-secondary-foreground hover:bg-secondary/90'
                        : 'glow-cyan bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Выбрать тариф
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-primary/20 text-primary border-primary glow-cyan mb-4">
              <Icon name="HelpCircle" size={14} className="mr-1" />
              FAQ
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-glow-cyan">ЧАСТЫЕ ВОПРОСЫ</span>
            </h2>
            <p className="text-muted-foreground text-lg">Ответы на популярные вопросы о нашем клубе</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-primary/30 rounded-lg px-6 bg-card/50 backdrop-blur-sm hover:border-primary transition-all"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="bg-secondary/20 text-secondary border-secondary glow-magenta mb-4">
              <Icon name="MapPin" size={14} className="mr-1" />
              Контакты
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-4">
              <span className="text-glow-magenta">СВЯЖИТЕСЬ С НАМИ</span>
            </h2>
            <p className="text-muted-foreground text-lg">Приходите в гости или бронируйте онлайн</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm glow-cyan">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">г. Москва, ул. Киберспортивная, д. 42</p>
                <p className="text-sm text-muted-foreground mt-2">Метро: Технопарк (5 минут пешком)</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm glow-cyan">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  Часы работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Пн-Пт: 10:00 - 02:00</p>
                <p className="text-muted-foreground">Сб-Вс: 10:00 - 04:00</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm glow-magenta">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={20} className="text-secondary" />
                  Телефон
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-2">Бронирование и консультации</p>
              </CardContent>
            </Card>

            <Card className="border-primary/30 bg-card/50 backdrop-blur-sm glow-magenta">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Mail" size={20} className="text-secondary" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@cybergaming.club</p>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="glow-cyan bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-primary/20 py-8 px-4 bg-card/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Cyber Gaming Club. Все права защищены.
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Twitter" size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Icon name="Youtube" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
