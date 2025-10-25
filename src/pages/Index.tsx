import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для консультации.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const projects = [
    {
      image: "https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/03112aab-a77f-48ee-b299-252e18a8bead.jpg",
      title: "Дом «Лесной»",
      area: "120 м²"
    },
    {
      image: "https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/f19fc543-7b76-4480-9391-b4899b1c2559.jpg",
      title: "Дом «Уютный»",
      area: "95 м²"
    },
    {
      image: "https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/324db912-0d12-49ee-a596-c61feb66b8ab.jpg",
      title: "В процессе строительства",
      area: "140 м²"
    }
  ];

  const advantages = [
    {
      icon: "Leaf",
      title: "Экологичность",
      description: "Используем только натуральные материалы и безопасные технологии"
    },
    {
      icon: "Clock",
      title: "Быстрое строительство",
      description: "Возведение дома за 2-3 месяца под ключ"
    },
    {
      icon: "DollarSign",
      title: "Доступная цена",
      description: "Стоимость ниже на 30-40% по сравнению с кирпичом"
    },
    {
      icon: "Thermometer",
      title: "Энергоэффективность",
      description: "Низкие расходы на отопление благодаря утеплению"
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Гарантия на все виды работ до 10 лет"
    },
    {
      icon: "Home",
      title: "Индивидуальные проекты",
      description: "Реализуем любые дизайнерские решения"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Home" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-primary">ЭкоДом</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors">Преимущества</a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
            <a href="#consultation" className="text-foreground hover:text-primary transition-colors">Консультация</a>
          </nav>
          <Button onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}>
            Заказать звонок
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Каркасные дома <span className="text-primary">из натуральных материалов</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Строим экологичные и энергоэффективные дома по современным технологиям. Быстро, качественно, надежно.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg" onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}>
                  Бесплатная консультация
                </Button>
                <Button size="lg" variant="outline" className="text-lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                  Наши проекты
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">150+</div>
                  <div className="text-muted-foreground">Построенных домов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10 лет</div>
                  <div className="text-muted-foreground">Гарантии</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">2-3 мес</div>
                  <div className="text-muted-foreground">Срок строительства</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/03112aab-a77f-48ee-b299-252e18a8bead.jpg" 
                alt="Каркасный дом"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Icon name="CheckCircle" size={40} className="text-primary" />
                  <div>
                    <div className="font-semibold text-lg">100% качество</div>
                    <div className="text-muted-foreground">Контроль на каждом этапе</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Преимущества каркасного строительства
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Современные технологии для комфортной и экологичной жизни
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary">
                <CardContent className="pt-6">
                  <div className="mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={advantage.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Наши проекты
            </h2>
            <p className="text-xl text-muted-foreground">
              Примеры реализованных каркасных домов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Square" size={20} />
                    <span>{project.area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="consultation" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Бесплатная консультация
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку, и наш специалист свяжется с вами в течение 30 минут
            </p>
          </div>
          <Card className="border-2 border-primary/20 shadow-xl">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input 
                    placeholder="Иван Петров" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Комментарий (необязательно)</label>
                  <Textarea 
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg">
                  Отправить заявку
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={32} className="text-primary" />
                <span className="text-2xl font-bold">ЭкоДом</span>
              </div>
              <p className="text-background/80">
                Строим надежные каркасные дома из экологичных материалов
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <div className="space-y-3 text-background/80">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@ekodom.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва, ул. Строителей, 15</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Режим работы</h4>
              <div className="space-y-2 text-background/80">
                <p>Пн-Пт: 9:00 - 19:00</p>
                <p>Сб-Вс: 10:00 - 17:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>© 2024 ЭкоДом. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
