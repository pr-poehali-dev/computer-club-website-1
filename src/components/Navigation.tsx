import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const Navigation = ({ activeSection, onNavigate }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-glow-cyan">CYBER GAMING CLUB</h1>
          <div className="hidden md:flex gap-6">
            {['Главная', 'Оборудование', 'Тарифы', 'FAQ', 'Контакты'].map((item, idx) => (
              <button
                key={item}
                onClick={() => onNavigate(['home', 'equipment', 'tariffs', 'faq', 'contacts'][idx])}
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
  );
};

export default Navigation;
