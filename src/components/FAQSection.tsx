import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
}

const FAQSection = ({ faqs }: FAQSectionProps) => {
  return (
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
  );
};

export default FAQSection;
