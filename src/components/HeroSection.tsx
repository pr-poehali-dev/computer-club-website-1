import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
