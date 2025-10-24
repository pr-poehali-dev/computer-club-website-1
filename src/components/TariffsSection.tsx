import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Tariff {
  name: string;
  duration: string;
  price: number;
  popular: boolean;
}

interface TariffsSectionProps {
  tariffs: Tariff[];
}

const TariffsSection = ({ tariffs }: TariffsSectionProps) => {
  return (
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
  );
};

export default TariffsSection;
