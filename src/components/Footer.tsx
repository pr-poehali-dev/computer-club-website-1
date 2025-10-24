import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
