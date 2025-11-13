import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Курсовая (теоретическая)",
      description: "Просто рассказываем, что уже известно по теме",
      icon: "BookOpen",
      color: "bg-purple-100",
      items: [
        { name: "Глава 1", price: "4500 руб." },
        { name: "Глава 2", price: "4500 руб." }
      ]
    },
    {
      title: "Курсовая с исследованием",
      description: "Добавляем цифры и выводы",
      icon: "LineChart",
      color: "bg-pink-100",
      items: [
        { name: "Глава 1 + Введение", price: "4600 руб." },
        { name: "Глава 2 (анализ)", price: "5200 руб." },
        { name: "Глава 3 (рекомендации)", price: "3000 руб." }
      ]
    },
    {
      title: "Дипломная работа",
      description: "Большой и серьезный проект",
      icon: "GraduationCap",
      color: "bg-orange-100",
      items: [
        { name: "Любая глава (1, 2 или 3)", price: "7300 руб." }
      ]
    }
  ];

  const benefits = [
    { icon: "DollarSign", text: "Цены адекватные", desc: "Ниже рыночных" },
    { icon: "MessageCircle", text: "Почти всегда на связи", desc: "Быстрый ответ 24/7" },
    { icon: "Pencil", text: "Помогу с правками", desc: "Внесу нужные изменения" },
    { icon: "Zap", text: "Скорость", desc: "Быстро и качественно" },
    { icon: "Calendar", text: "Цены не прыгают", desc: "Честные условия" },
    { icon: "Smile", text: "Со мной на «ты»", desc: "Без формальностей" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-orange-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 text-lg px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500">
            Помощь в учебе 😎
          </Badge>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Без паники и заоблачных цен
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Привет! Меня зовут <span className="font-semibold text-purple-600">Рия</span>, и я помогу тебе справиться с учебными работами, чтобы ты мог освободить время для чего-то по-настоящему важного <span className="text-gray-500">(или для сна, мы не осуждаем)</span>.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 flex items-center justify-center gap-3">
            <Icon name="Sparkles" className="text-purple-500" size={32} />
            Понятный прайс на популярные штуки
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="p-6 hover-scale border-2 hover:border-purple-300 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur"
              >
                <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 animate-float`} style={{ animationDelay: `${idx * 0.5}s` }}>
                  <Icon name={service.icon as any} size={32} className="text-purple-700" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="space-y-3">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <span className="text-sm text-gray-700">{item.name}</span>
                      <span className="font-bold text-purple-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 mb-16 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 border-2 border-purple-200">
          <div className="flex items-start gap-3 mb-4">
            <Icon name="Sparkles" className="text-purple-600 mt-1" size={24} />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">А еще я делаю много чего еще</h3>
              <p className="text-gray-700 mb-4">
                Эссе, рефераты, отчеты, сочинения и другие учебные задания. <span className="font-semibold text-purple-600">Стартовая цена от 300 руб.</span> Точную стоимость обсудим индивидуально, чтобы было честно.
              </p>
              <div className="flex items-start gap-2 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <Icon name="AlertCircle" className="text-orange-600 mt-0.5 flex-shrink-0" size={20} />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Важный момент про дедлайны:</span> Если время поджимает так, что кажется, будто ты в боевике — будет небольшая доплата за скорость. Ее размер зависит от сложности задания и того, сколько часов у нас в запасе.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Почему студенты обращаются именно ко мне?
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            <span className="italic">Spoiler: потому что выгодно и удобно</span>
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx}
                className="p-6 hover-scale text-center border-2 hover:border-purple-300 transition-all duration-300 bg-white/80 backdrop-blur"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>
                  <Icon name={benefit.icon as any} size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{benefit.text}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-8 sm:p-12 text-center bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white border-0 shadow-2xl">
          <Icon name="Rocket" size={48} className="mx-auto mb-6 animate-float" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Готов(а) начать?</h2>
          <p className="text-lg mb-8 opacity-95">
            Просто напиши мне, и обсудим твое задание!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 hover-scale font-semibold text-lg px-8">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в VK
            </Button>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 hover-scale font-semibold text-lg px-8">
              <Icon name="Send" size={20} className="mr-2" />
              Telegram
            </Button>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 hover-scale font-semibold text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              WhatsApp
            </Button>
          </div>
          <p className="text-sm opacity-90">
            📱 Общаемся где удобно. ВК, Телеграм, Вотсап — я везде!
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Index;
