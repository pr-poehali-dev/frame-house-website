import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
      description: "Мы свяжемся с вами в течение 15 минут",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    { icon: "Building2", title: "Проектирование", desc: "Индивидуальные решения" },
    { icon: "Hammer", title: "Строительство", desc: "Под ключ 60-90 дней" },
    { icon: "Shield", title: "Гарантия", desc: "10 лет на все работы" }
  ];

  const stats = [
    { value: "200+", label: "Домов построено" },
    { value: "15", label: "Лет опыта" },
    { value: "100%", label: "Довольных клиентов" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <Icon name="Home" size={24} className="text-white" />
            </div>
            <span className="text-xl font-semibold">ЭкоДом</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#services" className="hover:text-gray-600 transition">Услуги</a>
            <a href="#projects" className="hover:text-gray-600 transition">Проекты</a>
            <a href="#contact" className="hover:text-gray-600 transition">Контакты</a>
          </nav>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-black hover:bg-gray-800"
          >
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                Каркасные дома
                <br />
                <span className="text-gray-400">нового поколения</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Строим современные экологичные дома по канадской технологии. Быстро, качественно, с гарантией.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-black hover:bg-gray-800 text-lg px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Рассчитать стоимость
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 border-2"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Проекты
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-8 pt-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/03112aab-a77f-48ee-b299-252e18a8bead.jpg"
                  alt="Современный каркасный дом"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-black text-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold mb-2">от 2.5М ₽</div>
                <div className="text-gray-400">дом под ключ</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Что мы делаем</h2>
            <p className="text-xl text-gray-600">Полный цикл работ от проекта до ключей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl hover:shadow-xl transition group">
                <div className="w-16 h-16 bg-black group-hover:bg-gray-800 rounded-xl flex items-center justify-center mb-6 transition">
                  <Icon name={service.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Реализованные проекты</h2>
            <p className="text-xl text-gray-600">Каждый дом — уникальная история</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: "https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/03112aab-a77f-48ee-b299-252e18a8bead.jpg", title: "Дом «Лесной»", area: "120 м²" },
              { img: "https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/f19fc543-7b76-4480-9391-b4899b1c2559.jpg", title: "Дом «Скандинавия»", area: "95 м²" },
              { img: "https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/324db912-0d12-49ee-a596-c61feb66b8ab.jpg", title: "Дом «Минимализм»", area: "140 м²" }
            ].map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-gray-500">{project.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">Обсудим ваш проект?</h2>
            <p className="text-xl text-gray-400">Оставьте заявку — перезвоним через 15 минут</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Input 
                  placeholder="Ваше имя" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div>
                <Input 
                  type="tel"
                  placeholder="+7 (999) 123-45-67" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="h-14 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
            </div>
            <Textarea 
              placeholder="Расскажите о вашем проекте..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button type="submit" size="lg" className="w-full bg-white text-black hover:bg-gray-100 text-lg h-14">
              Отправить заявку
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <Icon name="Home" size={24} className="text-black" />
                </div>
                <span className="text-xl font-semibold">ЭкоДом</span>
              </div>
              <p className="text-gray-400">Строительство каркасных домов по канадской технологии</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@ekodom.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">График работы</h4>
              <div className="text-gray-400 space-y-1">
                <p>Пн-Пт: 9:00 - 19:00</p>
                <p>Сб-Вс: 10:00 - 17:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2024 ЭкоДом. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
