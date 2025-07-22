import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#12375D] via-[#0E2B4A] to-slate-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              Эксклюзивное мероприятие
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Бизнес-ужин в Оренбурге<br />
              <span className="text-blue-200">от МедиаТехнологии</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Возможность обсудить важные вопросы о российских решениях для строительства и производства: САПР/ТИМ/СОД в неформальной обстановке
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#12375D] hover:bg-slate-50 text-lg px-8 py-4">
                <Icon name="UserPlus" className="mr-2" size={20} />
                Зарегистрироваться
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                <Icon name="Info" className="mr-2" size={20} />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>

      {/* About Event Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                О мероприятии
              </h2>
              <div className="w-24 h-1 bg-[#12375D] mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Бизнес-ужин от МедиаТехнологии для людей, которые вносят вклад в развитие 
                  социальной среды — проектируют и строят здания, дороги, мосты, благоустраивают 
                  территории, выпускают различные изделия и технику, создают рабочие места и 
                  приближают будущее.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  За ужином разберем актуальные задачи в проектировании и их решение в 
                  современных реалиях.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Icon name="Calendar" className="text-[#12375D]" size={24} />
                    <div>
                      <div className="font-semibold text-slate-800">Дата</div>
                      <div className="text-slate-600">11 сентября 2025</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-blue-600" size={24} />
                    <div>
                      <div className="font-semibold text-slate-800">Время</div>
                      <div className="text-slate-600">15:00 - 20:00</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" className="text-blue-600" size={24} />
                    <div>
                      <div className="font-semibold text-slate-800">Место</div>
                      <div className="text-slate-600">Hilton Garden Inn</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="CreditCard" className="text-blue-600" size={24} />
                    <div>
                      <div className="font-semibold text-slate-800">Цена</div>
                      <div className="text-slate-600">Бесплатно</div>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-[#12375D] hover:bg-[#0E2B4A] text-lg px-8 py-4">
                  <Icon name="UserPlus" className="mr-2" size={20} />
                  Зарегистрироваться
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="/img/4d82a82f-ed9c-4538-9dac-1a0df972f87b.jpg" 
                  alt="Бизнес-ужин" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Наши спикеры
              </h2>
              <div className="w-24 h-1 bg-[#12375D] mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                На бизнес-ужине вас ждут вдохновляющие и опытные спикеры, готовые поделиться 
                своими инсайтами и решениями, которые помогают вести успешный бизнес.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src="/img/d0e74bca-90d0-46c6-a6ea-7ca5bc1256d8.jpg" 
                      alt="Алексей Петров" 
                      className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#12375D] rounded-full flex items-center justify-center">
                      <Icon name="Star" className="text-white" size={16} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">Алексей Петров</CardTitle>
                  <CardDescription className="text-[#12375D] font-semibold">
                    CEO, Инновационные технологии
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">
                    Эксперт в области цифровой трансформации бизнеса. 15+ лет опыта в IT-индустрии, 
                    автор 3 книг по стратегическому развитию.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    <Badge variant="secondary">Стратегии</Badge>
                    <Badge variant="secondary">IT</Badge>
                    <Badge variant="secondary">Инновации</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="User" className="text-white" size={32} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#12375D] rounded-full flex items-center justify-center">
                      <Icon name="Award" className="text-white" size={16} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">Мария Козлова</CardTitle>
                  <CardDescription className="text-[#12375D] font-semibold">
                    Директор по маркетингу, РосБизнес
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">
                    Лидер в области digital-маркетинга. Помогла 200+ компаниям увеличить прибыль 
                    через эффективные маркетинговые стратегии.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    <Badge variant="secondary">Маркетинг</Badge>
                    <Badge variant="secondary">Продажи</Badge>
                    <Badge variant="secondary">Брендинг</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0">
                <CardHeader className="text-center pb-4">
                  <div className="relative mx-auto mb-4">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg">
                      <Icon name="TrendingUp" className="text-white" size={32} />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#12375D] rounded-full flex items-center justify-center">
                      <Icon name="Trophy" className="text-white" size={16} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">Дмитрий Иванов</CardTitle>
                  <CardDescription className="text-[#12375D] font-semibold">
                    Финансовый консультант, ФинЭксперт
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-center leading-relaxed">
                    Специалист по финансовому планированию и инвестициям. Управляет портфелем 
                    более 500 млн ₽, член совета директоров 5 компаний.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4 justify-center">
                    <Badge variant="secondary">Финансы</Badge>
                    <Badge variant="secondary">Инвестиции</Badge>
                    <Badge variant="secondary">Планирование</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Программа мероприятия
              </h2>
              <div className="w-24 h-1 bg-[#12375D] mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 leading-relaxed">
                Наши сессии и обсуждения помогут вам раскрыть новые горизонты для вашего бизнеса
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#12375D] to-blue-300"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#12375D] rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Users" className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Приветственное слово</h3>
                        <Badge className="bg-slate-100 text-[#12375D] w-fit mt-2 sm:mt-0">19:00 - 19:15</Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Знакомство с участниками, обзор программы вечера и установка контактов
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#12375D] rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="MessageSquare" className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Панельная дискуссия</h3>
                        <Badge className="bg-slate-100 text-[#12375D] w-fit mt-2 sm:mt-0">19:15 - 20:30</Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        "Тренды бизнеса 2025: что нужно знать предпринимателям" - обсуждение с экспертами
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#12375D] rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Coffee" className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Нетворкинг и ужин</h3>
                        <Badge className="bg-slate-100 text-[#12375D] w-fit mt-2 sm:mt-0">20:30 - 21:30</Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Свободное общение участников за изысканным ужином, обмен контактами и опытом
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative flex items-start space-x-8">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#12375D] rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Award" className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-slate-800">Заключительная часть</h3>
                        <Badge className="bg-slate-100 text-[#12375D] w-fit mt-2 sm:mt-0">21:30 - 22:00</Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        Подведение итогов, обмен впечатлениями и планирование дальнейшего сотрудничества
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Место проведения
              </h2>
              <div className="w-24 h-1 bg-[#12375D] mx-auto mb-6"></div>
              <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Мероприятие пройдет в уютном и стильном месте, которое идеально подходит 
                для неформальных встреч и делового общения
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="bg-white border-0 shadow-xl p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">Гостиница Hilton Garden Inn</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Icon name="MapPin" className="text-[#12375D] mt-1" size={20} />
                        <div>
                          <div className="font-semibold text-slate-800">Адрес</div>
                          <div className="text-slate-600">ул. Маршала Жукова, 26, г. Оренбург</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Phone" className="text-blue-600 mt-1" size={20} />
                        <div>
                          <div className="font-semibold text-slate-800">Телефон</div>
                          <div className="text-slate-600">+7 (3532) 123-456</div>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Icon name="Car" className="text-blue-600 mt-1" size={20} />
                        <div>
                          <div className="font-semibold text-slate-800">Парковка</div>
                          <div className="text-slate-600">Бесплатная парковка для гостей</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <Button className="w-full bg-[#12375D] hover:bg-[#0E2B4A] text-lg py-4">
                      <Icon name="Navigation" className="mr-2" size={20} />
                      Построить маршрут
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#12375D] text-[#12375D] hover:bg-slate-50 text-lg py-4"
                    >
                      <Icon name="UserPlus" className="mr-2" size={20} />
                      Зарегистрироваться
                    </Button>
                  </div>
                </Card>
              </div>
              
              <div className="relative">
                <div className="bg-slate-100 rounded-2xl h-96 shadow-xl overflow-hidden">
                  <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3A8f8c8f8c8f8c8f8c8f8c8f8c8f8c8f8c&source=constructor" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    title="Карта Hilton Garden Inn Оренбург"
                    className="rounded-2xl"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#12375D] via-[#0E2B4A] to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Не упустите возможность
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Количество мест ограничено. Зарегистрируйтесь сейчас и станьте частью 
              успешного бизнес-сообщества Оренбурга
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-white text-[#12375D] hover:bg-slate-50 text-xl px-12 py-6">
                <Icon name="UserPlus" className="mr-2" size={24} />
                Зарегистрироваться сейчас
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-300 mb-2">50+</div>
                <div className="text-blue-100">Участников</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-300 mb-2">3</div>
                <div className="text-blue-100">Эксперта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-300 mb-2">4ч</div>
                <div className="text-blue-100">Программа</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">МедиаТехнологии</h3>
            <p className="text-slate-400 mb-6">
              Создаем возможности для развития бизнеса через качественные мероприятия и нетворкинг
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Phone" size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Icon name="Globe" size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;