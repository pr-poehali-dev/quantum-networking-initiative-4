import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState("общее");

  const channels = [
    { name: "объявления", icon: "Megaphone" },
    { name: "общее", icon: "Hash" },
    { name: "вопросы-ответы", icon: "HelpCircle" },
    { name: "скриншоты", icon: "Camera" },
    { name: "жалобы", icon: "AlertTriangle" },
  ];

  const voiceChannels = [
    "Лобби",
    "RP Зона",
    "Командный чат",
  ];

  const messages = [
    {
      id: 1,
      user: "Sheriff_Kane",
      avatar: "S",
      color: "from-yellow-600 to-yellow-800",
      role: "Администратор",
      roleColor: "text-yellow-400",
      time: "Сегодня в 09:15",
      text: "Добро пожаловать на официальный форум сервера Arizona Role Play Sedona! Здесь вы найдёте всю необходимую информацию, правила и поддержку.",
      pin: true,
    },
    {
      id: 2,
      user: "ProRPG_Alex",
      avatar: "А",
      color: "from-blue-500 to-blue-700",
      role: "Игрок",
      roleColor: "text-blue-400",
      time: "Сегодня в 10:32",
      text: "Наконец-то попал на сервер! Народ, кто подскажет как устроиться в полицию? Только начинаю 🚔",
    },
    {
      id: 3,
      user: "Mia_Ramirez",
      avatar: "М",
      color: "from-pink-500 to-purple-600",
      role: "Ветеран",
      roleColor: "text-purple-400",
      time: "Сегодня в 10:35",
      text: "Читай раздел #вопросы-ответы — там всё расписано. Удачи в игре, Sedona лучший сервер! 🌵",
    },
    {
      id: 4,
      user: "Night_Rider_88",
      avatar: "Н",
      color: "from-red-500 to-orange-500",
      role: "Водитель",
      roleColor: "text-orange-400",
      time: "Сегодня в 11:01",
      text: "Вчера выиграл гонку на трассе! Скрин в #скриншоты залил. Кто хочет в следующий раз — пишите 🏎️",
    },
  ];

  const categories = [
    { icon: "Shield", label: "Правила", desc: "Законы сервера", color: "bg-yellow-500" },
    { icon: "Download", label: "Скачать", desc: "Клиент игры", color: "bg-green-500" },
    { icon: "Users", label: "Фракции", desc: "Банды и полиция", color: "bg-blue-500" },
    { icon: "Star", label: "Топ игроков", desc: "Лучшие на сервере", color: "bg-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-[#1a1c1e] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#111214] border-b border-[#2a2d31] px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-black text-sm">AZ</span>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold text-white leading-tight">Arizona RP</h1>
              <p className="text-[10px] sm:text-xs text-yellow-400 font-medium">Sedona Server</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <Button variant="ghost" className="text-[#8e9297] hover:text-white hover:bg-[#2a2d31] text-sm px-3">
              <Icon name="Globe" size={16} className="mr-2" />
              Сайт
            </Button>
            <Button variant="ghost" className="text-[#8e9297] hover:text-white hover:bg-[#2a2d31] text-sm px-3">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg text-sm">
              Играть сейчас
            </Button>
          </div>

          <Button
            variant="ghost"
            className="sm:hidden text-[#8e9297] hover:text-white hover:bg-[#2a2d31] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden mt-3 pt-3 border-t border-[#2a2d31] flex flex-col gap-2">
            <Button variant="ghost" className="text-[#8e9297] hover:text-white hover:bg-[#2a2d31] justify-start text-sm">
              <Icon name="Globe" size={16} className="mr-2" />
              Сайт
            </Button>
            <Button variant="ghost" className="text-[#8e9297] hover:text-white hover:bg-[#2a2d31] justify-start text-sm">
              <Icon name="Download" size={16} className="mr-2" />
              Скачать
            </Button>
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg text-sm">
              Играть сейчас
            </Button>
          </div>
        )}
      </nav>

      {/* Основной макет */}
      <div className="flex" style={{ minHeight: "calc(100vh - 57px)" }}>
        {/* Левая панель серверов */}
        <div className="hidden lg:flex w-[68px] bg-[#0d0e10] flex-col items-center py-3 gap-2">
          <div className="w-11 h-11 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer shadow-lg">
            <span className="text-white font-black text-xs">AZ</span>
          </div>
          <div className="w-7 h-px bg-[#2a2d31] rounded-full my-1"></div>
          {["🏙️", "🚔", "🏎️", "🌵"].map((emoji, i) => (
            <div
              key={i}
              className="w-11 h-11 bg-[#2a2d31] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#3a3d42] text-lg"
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Боковая панель каналов */}
        <div className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-56 bg-[#161719] flex flex-col`}>
          {/* Заголовок сервера */}
          <div className="px-4 py-3 border-b border-[#0d0e10] flex items-center justify-between cursor-pointer hover:bg-[#1e2022] transition">
            <h2 className="text-white font-bold text-sm truncate">Arizona RP — Sedona</h2>
            <Icon name="ChevronDown" size={16} className="text-[#8e9297] ml-2 flex-shrink-0" />
          </div>

          <div className="flex-1 p-2 overflow-y-auto">
            {/* Быстрые разделы */}
            <div className="grid grid-cols-2 gap-1.5 mb-4 mt-2">
              {categories.map((cat) => (
                <div key={cat.label} className="flex flex-col items-center gap-1 p-2 rounded-lg bg-[#1e2022] hover:bg-[#2a2d31] cursor-pointer transition">
                  <div className={`w-7 h-7 ${cat.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={cat.icon} size={14} className="text-white" />
                  </div>
                  <span className="text-[#dcddde] text-[10px] font-medium text-center leading-tight">{cat.label}</span>
                </div>
              ))}
            </div>

            {/* Текстовые каналы */}
            <div className="mb-3">
              <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-[10px] font-bold uppercase tracking-wider mb-1">
                <Icon name="ChevronDown" size={12} />
                <span>Текстовые каналы</span>
              </div>
              {channels.map((ch) => (
                <div
                  key={ch.name}
                  onClick={() => setActiveChannel(ch.name)}
                  className={`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer transition-colors ${
                    activeChannel === ch.name
                      ? "bg-[#2e3035] text-white"
                      : "text-[#72767d] hover:text-[#dcddde] hover:bg-[#1e2022]"
                  }`}
                >
                  <Icon name="Hash" size={15} className="flex-shrink-0" />
                  <span className="text-xs truncate">{ch.name}</span>
                </div>
              ))}
            </div>

            {/* Голосовые каналы */}
            <div>
              <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-[10px] font-bold uppercase tracking-wider mb-1">
                <Icon name="ChevronDown" size={12} />
                <span>Голосовые</span>
              </div>
              {voiceChannels.map((ch) => (
                <div
                  key={ch}
                  className="flex items-center gap-2 px-2 py-1.5 rounded text-[#72767d] hover:text-[#dcddde] hover:bg-[#1e2022] cursor-pointer transition-colors"
                >
                  <Icon name="Volume2" size={15} className="flex-shrink-0" />
                  <span className="text-xs">{ch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Плашка пользователя */}
          <div className="p-2 bg-[#111214] flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-bold">Г</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white text-xs font-semibold truncate">Гость</div>
              <div className="text-[#8e9297] text-[10px]">Не авторизован</div>
            </div>
            <Button variant="ghost" size="sm" className="w-7 h-7 p-0 hover:bg-[#2a2d31]">
              <Icon name="Settings" size={14} className="text-[#8e9297]" />
            </Button>
          </div>
        </div>

        {/* Основная область чата */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Заголовок канала */}
          <div className="h-12 bg-[#1a1c1e] border-b border-[#0d0e10] flex items-center px-4 gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              className="lg:hidden text-[#8e9297] hover:text-white hover:bg-[#2a2d31] p-1 mr-1"
              onClick={() => setMobileSidebarOpen(true)}
            >
              <Icon name="Menu" size={18} />
            </Button>
            <Icon name="Hash" size={18} className="text-[#8e9297]" />
            <span className="text-white font-semibold text-sm">{activeChannel}</span>
            <div className="w-px h-5 bg-[#2a2d31] mx-2 hidden sm:block"></div>
            <span className="text-[#8e9297] text-xs hidden sm:block">Добро пожаловать на форум Arizona RP Sedona</span>
            <div className="ml-auto flex items-center gap-3">
              <Icon name="Bell" size={18} className="text-[#8e9297] cursor-pointer hover:text-white transition" />
              <Icon name="Users" size={18} className="text-[#8e9297] cursor-pointer hover:text-white transition" />
              <Icon name="Search" size={18} className="text-[#8e9297] cursor-pointer hover:text-white transition" />
            </div>
          </div>

          {/* Сообщения */}
          <div className="flex-1 overflow-y-auto p-4 space-y-5">
            {/* Приветствие канала */}
            <div className="flex flex-col items-start mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mb-3 shadow-xl">
                <Icon name="Hash" size={28} className="text-white" />
              </div>
              <h2 className="text-white text-2xl font-bold mb-1">Добро пожаловать в #{activeChannel}</h2>
              <p className="text-[#8e9297] text-sm">Это начало канала <strong className="text-[#dcddde]">#{activeChannel}</strong> на сервере <strong className="text-yellow-400">Arizona RP Sedona</strong>.</p>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { label: "Онлайн", value: "1 247", icon: "Wifi", color: "text-green-400" },
                { label: "Игроков", value: "18 500+", icon: "Users", color: "text-blue-400" },
                { label: "Фракций", value: "24", icon: "Shield", color: "text-yellow-400" },
                { label: "Аптайм", value: "99.9%", icon: "Activity", color: "text-purple-400" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#111214] border border-[#2a2d31] rounded-xl p-3 flex items-center gap-3">
                  <Icon name={stat.icon} size={20} className={stat.color} />
                  <div>
                    <div className={`text-base font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-[#8e9297] text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Сообщения форума */}
            {messages.map((msg, idx) => (
              <div key={msg.id} className={`flex gap-3 ${idx > 0 ? "" : ""}`}>
                <div className={`w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br ${msg.color} rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm`}>
                  {msg.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-0.5 flex-wrap">
                    <span className="text-white font-semibold text-sm">{msg.user}</span>
                    <span className={`text-xs font-medium px-1.5 py-0.5 rounded bg-[#1e2022] ${msg.roleColor}`}>{msg.role}</span>
                    <span className="text-[#4e5359] text-xs">{msg.time}</span>
                    {msg.pin && <span className="text-xs text-yellow-400 flex items-center gap-1"><Icon name="Pin" size={10} />закреплено</span>}
                  </div>
                  <p className="text-[#dcddde] text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Блок "Как начать" */}
            <div className="bg-[#111214] border border-[#2a2d31] rounded-xl overflow-hidden mt-6">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-700 px-4 py-3">
                <h3 className="text-white font-bold text-base flex items-center gap-2">
                  <Icon name="Rocket" size={18} />
                  Как начать играть на Arizona RP Sedona
                </h3>
              </div>
              <div className="p-4 space-y-3">
                {[
                  { step: "1", text: "Скачай клиент игры SAMP / GTA SA", icon: "Download" },
                  { step: "2", text: "Подключись к серверу: play.arizona-sedona.ru", icon: "Globe" },
                  { step: "3", text: "Зарегистрируйся в игре командой /reg", icon: "UserPlus" },
                  { step: "4", text: "Прочитай правила сервера в #правила", icon: "BookOpen" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-black font-bold text-xs">{item.step}</span>
                    </div>
                    <Icon name={item.icon} size={16} className="text-[#8e9297] flex-shrink-0" />
                    <span className="text-[#dcddde] text-sm">{item.text}</span>
                  </div>
                ))}
                <Button className="w-full mt-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 rounded-lg">
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать и начать играть
                </Button>
              </div>
            </div>
          </div>

          {/* Поле ввода */}
          <div className="px-4 pb-4 pt-2 flex-shrink-0">
            <div className="bg-[#2a2d31] rounded-xl flex items-center gap-2 px-4 py-3">
              <Icon name="Plus" size={18} className="text-[#8e9297] cursor-pointer hover:text-white transition flex-shrink-0" />
              <span className="flex-1 text-[#6b6f76] text-sm select-none">Написать в #{activeChannel}...</span>
              <div className="flex items-center gap-2">
                <Icon name="Gift" size={18} className="text-[#8e9297] cursor-pointer hover:text-yellow-400 transition" />
                <Icon name="Smile" size={18} className="text-[#8e9297] cursor-pointer hover:text-yellow-400 transition" />
              </div>
            </div>
          </div>
        </div>

        {/* Правая панель участников */}
        <div className="hidden xl:flex w-56 bg-[#161719] flex-col p-3">
          <h3 className="text-[#8e9297] text-[10px] font-bold uppercase tracking-wider px-2 mb-3">Онлайн — 1 247</h3>

          <div className="mb-4">
            <div className="text-[#faa61a] text-[10px] font-bold uppercase tracking-wider px-2 mb-2">Администрация</div>
            {[
              { name: "Sheriff_Kane", avatar: "S", color: "from-yellow-600 to-yellow-800" },
              { name: "Admin_Volkov", avatar: "V", color: "from-red-600 to-red-800" },
            ].map((u) => (
              <div key={u.name} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#1e2022] cursor-pointer transition">
                <div className={`w-7 h-7 bg-gradient-to-br ${u.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{u.avatar}</span>
                </div>
                <span className="text-[#dcddde] text-xs truncate">{u.name}</span>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <div className="text-[#3ba55c] text-[10px] font-bold uppercase tracking-wider px-2 mb-2">Игроки</div>
            {[
              { name: "ProRPG_Alex", avatar: "А", color: "from-blue-500 to-blue-700" },
              { name: "Mia_Ramirez", avatar: "М", color: "from-pink-500 to-purple-600" },
              { name: "Night_Rider_88", avatar: "Н", color: "from-red-500 to-orange-500" },
              { name: "Desert_Cowboy", avatar: "D", color: "from-green-600 to-teal-700" },
              { name: "Lucky_Seven", avatar: "L", color: "from-indigo-500 to-blue-600" },
            ].map((u) => (
              <div key={u.name} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-[#1e2022] cursor-pointer transition">
                <div className={`w-7 h-7 bg-gradient-to-br ${u.color} rounded-full flex items-center justify-center flex-shrink-0 relative`}>
                  <span className="text-white text-xs font-bold">{u.avatar}</span>
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#3ba55c] border-2 border-[#161719] rounded-full"></div>
                </div>
                <span className="text-[#8e9297] text-xs truncate">{u.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
