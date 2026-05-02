import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeChannel, setActiveChannel] = useState("общее");

  const channels = [
    { name: "объявления" },
    { name: "общее" },
    { name: "вопросы-ответы" },
    { name: "скриншоты" },
    { name: "жалобы" },
  ];

  const voiceChannels = ["Лобби", "RP Зона", "Командный чат"];

  const messages = [
    {
      id: 1,
      user: "Sheriff_Kane",
      avatar: "S",
      role: "Администратор",
      roleColor: "#c0392b",
      time: "Сегодня в 09:15",
      text: "Добро пожаловать на официальный форум сервера Arizona Role Play Sedona! Здесь вы найдёте всю необходимую информацию, правила и поддержку.",
      pin: true,
    },
    {
      id: 2,
      user: "ProRPG_Alex",
      avatar: "А",
      role: "Игрок",
      roleColor: "#7f8c8d",
      time: "Сегодня в 10:32",
      text: "Наконец-то попал на сервер! Народ, кто подскажет как устроиться в полицию? Только начинаю 🚔",
    },
    {
      id: 3,
      user: "Mia_Ramirez",
      avatar: "М",
      role: "Ветеран",
      roleColor: "#e67e22",
      time: "Сегодня в 10:35",
      text: "Читай раздел #вопросы-ответы — там всё расписано. Удачи в игре, Sedona лучший сервер! 🌵",
    },
    {
      id: 4,
      user: "Night_Rider_88",
      avatar: "Н",
      role: "Водитель",
      roleColor: "#7f8c8d",
      time: "Сегодня в 11:01",
      text: "Вчера выиграл гонку на трассе! Скрин в #скриншоты залил. Кто хочет в следующий раз — пишите 🏎️",
    },
  ];

  const avatarColors: Record<string, string> = {
    S: "#7b1a1a",
    А: "#1a3a5c",
    М: "#4a1a5c",
    Н: "#5c2a1a",
    Г: "#1a4a2a",
    V: "#5c1a1a",
    D: "#1a4a3a",
    L: "#1a2a5c",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#14110f", color: "#d4c5a9", fontFamily: "'Segoe UI', sans-serif", overflowX: "hidden" }}>

      {/* Шапка */}
      <nav style={{ background: "#1c1712", borderBottom: "2px solid #6b1a1a", padding: "0 24px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>

          {/* Лого */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 42, height: 42, background: "linear-gradient(135deg, #c0392b, #8b0000)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 12px rgba(192,57,43,0.5)", border: "1px solid #c0392b" }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 13, letterSpacing: 1 }}>AZ</span>
            </div>
            <div>
              <div style={{ color: "#e8d5b0", fontWeight: 800, fontSize: 16, letterSpacing: 0.5 }}>ARIZONA ROLE PLAY</div>
              <div style={{ color: "#c0392b", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase" }}>Sedona</div>
            </div>
          </div>

          {/* Навигация десктоп */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden sm:flex">
            {["Главная", "Правила", "Фракции", "Топ игроков"].map((item) => (
              <button key={item} style={{ background: "none", border: "none", color: "#9e8e76", cursor: "pointer", padding: "8px 14px", fontSize: 13, fontWeight: 600, borderRadius: 6, transition: "all 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "#e8d5b0"; (e.target as HTMLElement).style.background = "rgba(192,57,43,0.1)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "#9e8e76"; (e.target as HTMLElement).style.background = "none"; }}>
                {item}
              </button>
            ))}
            <button style={{ marginLeft: 8, background: "linear-gradient(135deg, #c0392b, #8b0000)", border: "none", color: "#fff", cursor: "pointer", padding: "9px 20px", fontSize: 13, fontWeight: 700, borderRadius: 6, letterSpacing: 0.5, boxShadow: "0 2px 12px rgba(192,57,43,0.4)" }}>
              Играть →
            </button>
          </div>

          {/* Мобильное меню */}
          <button className="sm:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ background: "none", border: "1px solid #3a2a1a", color: "#9e8e76", cursor: "pointer", padding: "6px 10px", borderRadius: 6 }}>
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={{ borderTop: "1px solid #3a2a1a", padding: "12px 0" }} className="sm:hidden">
            {["Главная", "Правила", "Фракции", "Топ игроков"].map((item) => (
              <div key={item} style={{ padding: "10px 16px", color: "#9e8e76", fontSize: 14, cursor: "pointer" }}>{item}</div>
            ))}
            <div style={{ padding: "12px 16px" }}>
              <button style={{ width: "100%", background: "linear-gradient(135deg, #c0392b, #8b0000)", border: "none", color: "#fff", cursor: "pointer", padding: "10px", fontSize: 14, fontWeight: 700, borderRadius: 6 }}>
                Играть →
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Основной контент */}
      <div style={{ display: "flex" }}>

        {/* Левый сайдбар — каналы */}
        <div className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block`} style={{ width: 220, background: "#1c1712", borderRight: "1px solid #2a1f14", flexShrink: 0, minHeight: "calc(100vh - 62px)", display: "flex", flexDirection: "column" }}>

          {/* Заголовок */}
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #2a1f14", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ color: "#e8d5b0", fontWeight: 700, fontSize: 13 }}>Arizona RP — Sedona</span>
            <Icon name="ChevronDown" size={14} color="#6b5a42" />
          </div>

          {/* Категории */}
          <div style={{ padding: "12px 8px 8px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 12 }}>
              {[
                { icon: "Shield", label: "Правила", bg: "#7b1a1a" },
                { icon: "Download", label: "Скачать", bg: "#1a4a1a" },
                { icon: "Users", label: "Фракции", bg: "#1a2a5c" },
                { icon: "Star", label: "Топ", bg: "#4a3a00" },
              ].map((cat) => (
                <div key={cat.label} style={{ background: "#231c14", border: "1px solid #3a2a1a", borderRadius: 8, padding: "8px 4px", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, cursor: "pointer" }}>
                  <div style={{ width: 28, height: 28, background: cat.bg, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={cat.icon} size={14} color="#e8d5b0" />
                  </div>
                  <span style={{ color: "#9e8e76", fontSize: 10, fontWeight: 600 }}>{cat.label}</span>
                </div>
              ))}
            </div>

            {/* Текстовые каналы */}
            <div style={{ marginBottom: 4 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", color: "#6b5a42", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                <Icon name="ChevronDown" size={11} />
                <span>Текстовые каналы</span>
              </div>
              {channels.map((ch) => (
                <div key={ch.name} onClick={() => setActiveChannel(ch.name)}
                  style={{
                    display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 6, cursor: "pointer",
                    background: activeChannel === ch.name ? "rgba(192,57,43,0.2)" : "none",
                    color: activeChannel === ch.name ? "#e8d5b0" : "#6b5a42",
                    borderLeft: activeChannel === ch.name ? "2px solid #c0392b" : "2px solid transparent",
                    marginBottom: 2,
                  }}>
                  <Icon name="Hash" size={14} />
                  <span style={{ fontSize: 12, fontWeight: 500 }}>{ch.name}</span>
                </div>
              ))}
            </div>

            {/* Голосовые */}
            <div style={{ marginTop: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", color: "#6b5a42", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}>
                <Icon name="ChevronDown" size={11} />
                <span>Голосовые</span>
              </div>
              {voiceChannels.map((ch) => (
                <div key={ch} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 6, cursor: "pointer", color: "#6b5a42", marginBottom: 2 }}>
                  <Icon name="Volume2" size={14} />
                  <span style={{ fontSize: 12 }}>{ch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Пользователь */}
          <div style={{ marginTop: "auto", padding: "8px", background: "#161008", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, background: avatarColors["Г"], borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid #3a2a1a" }}>
              <span style={{ color: "#e8d5b0", fontSize: 12, fontWeight: 700 }}>Г</span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: "#e8d5b0", fontSize: 12, fontWeight: 600 }}>Гость</div>
              <div style={{ color: "#6b5a42", fontSize: 10 }}>Не авторизован</div>
            </div>
            <Icon name="Settings" size={14} color="#6b5a42" style={{ cursor: "pointer" }} />
          </div>
        </div>

        {/* Центральная область */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

          {/* Заголовок канала */}
          <div style={{ height: 50, background: "#1c1712", borderBottom: "1px solid #2a1f14", display: "flex", alignItems: "center", padding: "0 16px", gap: 10 }}>
            <button className="lg:hidden" onClick={() => setMobileSidebarOpen(true)}
              style={{ background: "none", border: "none", color: "#6b5a42", cursor: "pointer", padding: 4 }}>
              <Icon name="Menu" size={18} />
            </button>
            <Icon name="Hash" size={17} color="#6b5a42" />
            <span style={{ color: "#e8d5b0", fontWeight: 700, fontSize: 14 }}>{activeChannel}</span>
            <div style={{ width: 1, height: 20, background: "#2a1f14", margin: "0 8px" }} className="hidden sm:block" />
            <span style={{ color: "#6b5a42", fontSize: 12 }} className="hidden sm:block">Официальный форум Arizona RP Sedona</span>
            <div style={{ marginLeft: "auto", display: "flex", gap: 14 }}>
              <Icon name="Bell" size={17} color="#6b5a42" style={{ cursor: "pointer" }} />
              <Icon name="Users" size={17} color="#6b5a42" style={{ cursor: "pointer" }} />
              <Icon name="Search" size={17} color="#6b5a42" style={{ cursor: "pointer" }} />
            </div>
          </div>

          {/* Контент чата */}
          <div style={{ flex: 1, overflowY: "auto", padding: 20, display: "flex", flexDirection: "column", gap: 0 }}>

            {/* Приветствие */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ width: 56, height: 56, background: "linear-gradient(135deg, #c0392b, #8b0000)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12, boxShadow: "0 4px 20px rgba(192,57,43,0.4)", border: "1px solid #c0392b" }}>
                <Icon name="Hash" size={26} color="#fff" />
              </div>
              <h2 style={{ color: "#e8d5b0", fontSize: 22, fontWeight: 800, marginBottom: 4 }}>Добро пожаловать в #{activeChannel}</h2>
              <p style={{ color: "#6b5a42", fontSize: 13 }}>Начало канала <strong style={{ color: "#9e8e76" }}>#{activeChannel}</strong> на сервере <strong style={{ color: "#c0392b" }}>Arizona RP Sedona</strong>.</p>
              <div style={{ height: 1, background: "linear-gradient(to right, #3a2a1a, transparent)", margin: "20px 0" }} />
            </div>

            {/* Статистика */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 10, marginBottom: 24 }}>
              {[
                { label: "Онлайн", value: "1 247", icon: "Wifi", color: "#27ae60" },
                { label: "Игроков", value: "18 500+", icon: "Users", color: "#3498db" },
                { label: "Фракций", value: "24", icon: "Shield", color: "#c0392b" },
                { label: "Аптайм", value: "99.9%", icon: "Activity", color: "#e67e22" },
              ].map((stat) => (
                <div key={stat.label} style={{ background: "#1c1712", border: "1px solid #2a1f14", borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
                  <Icon name={stat.icon} size={20} color={stat.color} />
                  <div>
                    <div style={{ color: stat.color, fontWeight: 800, fontSize: 16 }}>{stat.value}</div>
                    <div style={{ color: "#6b5a42", fontSize: 11 }}>{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Сообщения */}
            {messages.map((msg, idx) => (
              <div key={msg.id} style={{ display: "flex", gap: 12, padding: "10px 0", borderTop: idx === 0 ? "none" : "1px solid #1f1810" }}>
                <div style={{ width: 38, height: 38, background: avatarColors[msg.avatar] || "#2a1f14", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid #3a2a1a" }}>
                  <span style={{ color: "#e8d5b0", fontSize: 13, fontWeight: 700 }}>{msg.avatar}</span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
                    <span style={{ color: "#e8d5b0", fontWeight: 700, fontSize: 14 }}>{msg.user}</span>
                    <span style={{ background: msg.roleColor + "22", color: msg.roleColor, fontSize: 10, fontWeight: 700, padding: "1px 7px", borderRadius: 4, border: `1px solid ${msg.roleColor}44` }}>{msg.role}</span>
                    <span style={{ color: "#3a2a1a", fontSize: 11 }}>{msg.time}</span>
                    {msg.pin && <span style={{ color: "#c0392b", fontSize: 10, display: "flex", alignItems: "center", gap: 3 }}><Icon name="Pin" size={10} />закреплено</span>}
                  </div>
                  <p style={{ color: "#b0a090", fontSize: 13, lineHeight: 1.6, margin: 0 }}>{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Блок как начать */}
            <div style={{ background: "#1c1712", border: "1px solid #3a2a1a", borderRadius: 12, overflow: "hidden", marginTop: 24 }}>
              <div style={{ background: "linear-gradient(135deg, #8b0000, #c0392b)", padding: "14px 18px", display: "flex", alignItems: "center", gap: 10 }}>
                <Icon name="Rocket" size={18} color="#fff" />
                <span style={{ color: "#fff", fontWeight: 800, fontSize: 14 }}>Как начать играть на Arizona RP Sedona</span>
              </div>
              <div style={{ padding: 18 }}>
                {[
                  { step: "1", text: "Скачай клиент GTA SA + SAMP", icon: "Download" },
                  { step: "2", text: "Подключись: play.arizona-sedona.ru", icon: "Globe" },
                  { step: "3", text: "Зарегистрируйся командой /reg", icon: "UserPlus" },
                  { step: "4", text: "Прочитай правила в #правила", icon: "BookOpen" },
                ].map((item) => (
                  <div key={item.step} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{ width: 26, height: 26, background: "#8b0000", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ color: "#fff", fontWeight: 800, fontSize: 11 }}>{item.step}</span>
                    </div>
                    <Icon name={item.icon} size={15} color="#6b5a42" />
                    <span style={{ color: "#b0a090", fontSize: 13 }}>{item.text}</span>
                  </div>
                ))}
                <button style={{ width: "100%", marginTop: 6, background: "linear-gradient(135deg, #c0392b, #8b0000)", border: "none", color: "#fff", cursor: "pointer", padding: "11px", fontSize: 14, fontWeight: 700, borderRadius: 8, letterSpacing: 0.5, boxShadow: "0 2px 16px rgba(192,57,43,0.4)" }}>
                  Скачать и начать играть →
                </button>
              </div>
            </div>
          </div>

          {/* Поле ввода */}
          <div style={{ padding: "12px 20px", background: "#1c1712", borderTop: "1px solid #2a1f14" }}>
            <div style={{ background: "#231c14", border: "1px solid #3a2a1a", borderRadius: 10, display: "flex", alignItems: "center", gap: 10, padding: "10px 14px" }}>
              <Icon name="Plus" size={18} color="#6b5a42" style={{ cursor: "pointer" }} />
              <span style={{ flex: 1, color: "#4a3a2a", fontSize: 13 }}>Написать в #{activeChannel}...</span>
              <Icon name="Smile" size={18} color="#6b5a42" style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>

        {/* Правый сайдбар — участники */}
        <div className="hidden xl:flex" style={{ width: 210, background: "#1c1712", borderLeft: "1px solid #2a1f14", flexDirection: "column", padding: 12 }}>
          <div style={{ color: "#6b5a42", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, padding: "4px 8px", marginBottom: 8 }}>
            Онлайн — 1 247
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ color: "#c0392b", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, padding: "2px 8px", marginBottom: 6 }}>Администрация</div>
            {[
              { name: "Sheriff_Kane", avatar: "S" },
              { name: "Admin_Volkov", avatar: "V" },
            ].map((u) => (
              <div key={u.name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 8px", borderRadius: 6, cursor: "pointer" }}>
                <div style={{ width: 28, height: 28, background: avatarColors[u.avatar], borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid #3a2a1a", position: "relative" }}>
                  <span style={{ color: "#e8d5b0", fontSize: 11, fontWeight: 700 }}>{u.avatar}</span>
                  <div style={{ position: "absolute", bottom: -1, right: -1, width: 9, height: 9, background: "#27ae60", borderRadius: "50%", border: "2px solid #1c1712" }} />
                </div>
                <span style={{ color: "#9e8e76", fontSize: 12 }}>{u.name}</span>
              </div>
            ))}
          </div>

          <div>
            <div style={{ color: "#27ae60", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, padding: "2px 8px", marginBottom: 6 }}>Игроки</div>
            {[
              { name: "ProRPG_Alex", avatar: "А" },
              { name: "Mia_Ramirez", avatar: "М" },
              { name: "Night_Rider_88", avatar: "Н" },
              { name: "Desert_Cowboy", avatar: "D" },
              { name: "Lucky_Seven", avatar: "L" },
            ].map((u) => (
              <div key={u.name} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 8px", borderRadius: 6, cursor: "pointer" }}>
                <div style={{ width: 28, height: 28, background: avatarColors[u.avatar] || "#2a1f14", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid #3a2a1a", position: "relative" }}>
                  <span style={{ color: "#e8d5b0", fontSize: 11, fontWeight: 700 }}>{u.avatar}</span>
                  <div style={{ position: "absolute", bottom: -1, right: -1, width: 9, height: 9, background: "#27ae60", borderRadius: "50%", border: "2px solid #1c1712" }} />
                </div>
                <span style={{ color: "#6b5a42", fontSize: 12 }}>{u.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Index;
