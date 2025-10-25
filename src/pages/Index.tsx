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
      title: "Заявка принята!",
      description: "Наш менеджер свяжется с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const advantages = [
    {
      icon: "Zap",
      title: "Скорость",
      desc: "Строительство за 45-60 дней"
    },
    {
      icon: "Snowflake",
      title: "Энергоэффективность",
      desc: "Экономия до 40% на отоплении"
    },
    {
      icon: "DollarSign",
      title: "Выгодная цена",
      desc: "На 30% дешевле кирпичных домов"
    },
    {
      icon: "Leaf",
      title: "Экологичность",
      desc: "Натуральные материалы"
    },
    {
      icon: "Shield",
      title: "Надёжность",
      desc: "Гарантия 15 лет"
    },
    {
      icon: "Ruler",
      title: "Точность",
      desc: "Заводское качество сборки"
    }
  ];

  const projects = [
    {
      img: "https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/03112aab-a77f-48ee-b299-252e18a8bead.jpg",
      name: "Проект «Нордик»",
      area: "142 м²",
      price: "от 3.8 млн ₽"
    },
    {
      img: "https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/f19fc543-7b76-4480-9391-b4899b1c2559.jpg",
      name: "Проект «Модерн»",
      area: "98 м²",
      price: "от 2.6 млн ₽"
    },
    {
      img: "https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/324db912-0d12-49ee-a596-c61feb66b8ab.jpg",
      name: "Проект «Классик»",
      area: "165 м²",
      price: "от 4.2 млн ₽"
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Консультация",
      desc: "Обсуждаем ваши пожелания и подбираем проект"
    },
    {
      num: "02",
      title: "Договор",
      desc: "Фиксируем сроки и стоимость"
    },
    {
      num: "03",
      title: "Производство",
      desc: "Изготавливаем щиты на заводе"
    },
    {
      num: "04",
      title: "Монтаж",
      desc: "Собираем дом на участке за 2-3 недели"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Icon name="Home" size={24} className="text-white" />
              </div>
              <div>
                <div className="text-xl font-bold">ДомСтрой</div>
                <div className="text-xs text-gray-500">каркасные дома</div>
              </div>
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium">
              <a href="#advantages" className="hover:text-blue-600 transition">Преимущества</a>
              <a href="#projects" className="hover:text-blue-600 transition">Проекты</a>
              <a href="#process" className="hover:text-blue-600 transition">Этапы</a>
              <a href="#contact" className="hover:text-blue-600 transition">Контакты</a>
            </nav>
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Каркасно-щитовая технология
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Ваш дом
                <br />
                за <span className="text-blue-600">2 месяца</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Строим энергоэффективные каркасные дома под ключ. 
                Качество завода, скорость сборки, комфорт на десятилетия.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 h-14 shadow-lg shadow-blue-600/30"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Рассчитать стоимость
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 h-14 border-2"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Каталог проектов
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-blue-600">250+</div>
                  <div className="text-sm text-gray-500">Домов построено</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-blue-600">15 лет</div>
                  <div className="text-sm text-gray-500">На рынке</div>
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-blue-600">45-60</div>
                  <div className="text-sm text-gray-500">Дней строительство</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/2119adcd-1c5d-44f0-8cee-2779e72d3395/files/03112aab-a77f-48ee-b299-252e18a8bead.jpg"
                  alt="Каркасный дом"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Icon name="CheckCircle2" size={28} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Гарантия 15 лет</div>
                    <div className="text-sm text-gray-500">На все конструкции</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Почему каркасно-щитовая технология?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Современный подход к строительству частных домов
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div 
                key={i} 
                className="group p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="w-14 h-14 bg-blue-100 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition">
                  <Icon name={item.icon} size={28} className="text-blue-600 group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Популярные проекты
            </h2>
            <p className="text-xl text-gray-600">
              Готовые решения для вашего комфорта
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.img}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon name="Square" size={18} />
                      <span>{project.area}</span>
                    </div>
                    <div className="text-blue-600 font-bold">{project.price}</div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Подробнее
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Как мы работаем
            </h2>
            <p className="text-xl text-gray-600">
              Прозрачный процесс от заявки до новоселья
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-gray-100 mb-4">{step.num}</div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-blue-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-4 sm:px-6 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Получите расчёт стоимости
            </h2>
            <p className="text-xl text-blue-100">
              Оставьте заявку и получите персональное предложение в течение часа
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <Input 
                placeholder="Ваше имя" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="h-14 bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
              <Input 
                type="tel"
                placeholder="+7 (___) ___-__-__" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="h-14 bg-white/10 border-white/30 text-white placeholder:text-white/60"
              />
            </div>
            <Textarea 
              placeholder="Расскажите о вашем проекте: площадь, количество этажей, регион..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows={4}
              className="mb-6 bg-white/10 border-white/30 text-white placeholder:text-white/60"
            />
            <Button type="submit" size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50 text-lg h-14 font-semibold">
              Получить расчёт
            </Button>
            <p className="text-sm text-blue-100 text-center mt-4">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                  <Icon name="Home" size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold">ДомСтрой</div>
                  <div className="text-xs text-gray-400">каркасные дома</div>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Строительство энергоэффективных каркасных домов по каркасно-щитовой технологии. 
                Качество, скорость, надёжность.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition">
                  <Icon name="Phone" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition">
                  <Icon name="Mail" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer transition">
                  <Icon name="MessageCircle" size={20} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@domstroy.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Москва</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Режим работы</h4>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Пт: 9:00 - 20:00</p>
                <p>Сб-Вс: 10:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© 2024 ДомСтрой. Все права защищены</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
