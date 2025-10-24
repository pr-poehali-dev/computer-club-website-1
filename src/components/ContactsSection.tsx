import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
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
  );
};

export default ContactsSection;
