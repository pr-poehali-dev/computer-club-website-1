import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Equipment {
  id: number;
  name: string;
  category: string;
  specs: {
    cpu: string;
    gpu: string;
    ram: string;
    storage: string;
    monitor: string;
    peripherals: string;
  };
  price: number;
  image: string;
}

interface EquipmentSectionProps {
  equipment: Equipment[];
}

const EquipmentCard = ({ item, idx }: { item: Equipment; idx?: number }) => {
  return (
    <Card
      className="border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all hover:glow-cyan animate-fade-in"
      style={idx !== undefined ? { animationDelay: `${idx * 0.1}s` } : undefined}
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
  );
};

const EquipmentSection = ({ equipment }: EquipmentSectionProps) => {
  return (
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
                <EquipmentCard key={item.id} item={item} idx={idx} />
              ))}
            </div>
          </TabsContent>

          {['premium', 'ultra', 'standard'].map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipment
                  .filter((item) => item.category.toLowerCase().includes(category))
                  .map((item) => (
                    <EquipmentCard key={item.id} item={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default EquipmentSection;
