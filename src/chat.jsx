import React from "react";

const waifuData = [
  { id: 1, name: "Alisa Mikhailovna Kujou Alya", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvMOSGsUseLIxFYY5G6bynNlT9XnCW2GhZgwMeq_LYDidQirUVglcPyQ&s=10", desc: "Alya Mikhalova Kujou adalah karakter yang tenang, misterius, dan penuh tekad. Meskipun terlihat dingin dan tertutup, dia sangat setia dan melindungi orang-orang yang dia sayangi. Cerdas dan tangguh, Alya menghadapi tantangan dengan ketenangan, tetapi juga menyimpan kedalaman emosi dan masa lalu yang kompleks.", status: "Istri ke 1" },
  { id: 2, name: "Yume Irido", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Hgm2z258P32keXgD9L3DD0UosjuApqu1-T18s5VyCF-1TTIVZOxYg7s&s=10", desc: "Yume Irido adalah sosok yang penuh energi, dengan senyum cerah yang tak pernah pudar. Karakter cerianya yang menular membuatnya mudah didekati, dan ia selalu melihat dunia dengan pandangan penuh harapan. Kepribadiannya yang optimis sering kali membawa keceriaan bagi orang-orang di sekitarnya, namun di balik senyum itu, Yume memiliki kedalaman emosi dan kecerdasan yang luar biasa. Meskipun ia menghadapi tantangan, ia selalu melangkah dengan tekad kuat, percaya bahwa setiap rintangan adalah peluang untuk tumbuh. Sensitif terhadap perasaan orang lain, Yume adalah teman yang setia, selalu siap mendukung dan membantu mereka yang membutuhkan.", status: "Istri ke 2" },
  { id: 3, name: "Erika Amano", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGFHzwCvipCv9wq9ZyBvM8EC01dXR1W53j2g&usqp=CAU", desc: "Erika Amano adalah karakter yang cerdas, percaya diri, dan memiliki sikap yang tegas. Dia dikenal dengan kemampuannya untuk berpikir rasional dan menyelesaikan masalah dengan cepat, menjadikannya sosok yang dapat diandalkan dalam situasi sulit. Meskipun terlihat dingin dan sedikit tertutup, Erika memiliki sisi lembut yang hanya terlihat oleh orang-orang yang cukup dekat dengannya. Dia sangat ambisius, tidak takut menghadapi tantangan besar, dan selalu berusaha mencapai tujuan dengan kerja keras dan dedikasi. Erika juga memiliki rasa keadilan yang kuat dan selalu berjuang untuk apa yang dia anggap benar, meskipun itu seringkali membuatnya terjebak dalam dilema moral.", status: "Istri ke 3" },
  { id: 4, name: "Asahi Amagami", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0k_46pUa1wekIAbwHiS24h4AiPNyK4eotRNDqzW5OPiXGkrL18PO-kxm&s=10", desc: "Asahi Amagami adalah karakter yang ceria, ramah, dan penuh semangat. Meskipun cenderung tampak santai dan mudah bergaul, dia memiliki rasa empati yang dalam terhadap orang-orang di sekitarnya. Asahi sering kali menjadi pendengar yang baik, dan dia tidak ragu untuk memberikan dukungan kepada teman-temannya. Dia juga memiliki sifat yang sedikit konyol dan sering kali membawa keceriaan dalam suasana yang tegang. Namun, di balik kepribadiannya yang cerah, Asahi memiliki keteguhan hati dan tekad yang kuat ketika dihadapkan dengan masalah atau tantangan. Sifatnya yang terbuka dan penuh perhatian membuatnya mudah didekati, namun dia juga menghargai privasinya dan bisa sangat serius jika diperlukan.", status: "Istri ke 4" },
];

const WaifuList = ({ onClose }) => {
  return (
    <div className="waifu-popup">
      <div className="waifu-popup-content animate-popup">
        <button className="close-btn animate-close-btn" onClick={onClose}>
          ×
        </button>
        <h2 className="waifu-title font-bold"><span style={{color: "#00adb5"}}>Irul</span> Waifu</h2>
        <div className="waifu-list animate-scroll">
          {waifuData.map((waifu) => (
            <div key={waifu.id} className="waifu-card">
              <div className="waifu-image-wrapper">
                <img src={waifu.image} alt={waifu.name} className="waifu-image" />
              </div>
              <p className="waifu-status">{waifu.status}</p>
              <h3 className="waifu-name">{waifu.name}</h3>
              <p className="waifu-desc">{waifu.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WaifuList;
