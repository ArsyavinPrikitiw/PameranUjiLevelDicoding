/* ══════════════════════════════════════════
   PAMERAN UJI LEVEL DICODING 2026
   projects.js
══════════════════════════════════════════ */

/* ──────────────────────────────────────────
   DATA PROJECT
   Untuk menambah project baru:
   - Duplikat satu blok { ... } di bawah
   - Isi semua field sesuai data tim
   - cat: '1' s.d. '6' sesuai kategori
   - gambar: path dari folder assets/images/
────────────────────────────────────────── */
const PROJECTS = [
  {
    id       : 'CC26-PS031',
    judul    : 'FinLitGo',
    tema     : 'Fintech',
    cat      : '6',
    deskripsi: 'Platform Literasi dan Manajemen Keuangan Berbasis Web untuk Generasi Muda.',
    stack    : ['HTML', 'Tailwind CSS', 'JSX', 'Typescript', 'PostgreSQL', 'Node', 'Express', 'Vite', 'Firebase', 'GSAP', 'CORS'],
    link     : 'https://finlitgo.vercel.app',
    gambar   : 'assets/WhatsApp Image 2026-05-07 at 20.28.45 - Siti Rahmah.jpeg',
    github   : '',
    anggota  : [
      { nama: 'Raafi Muhammad Fajar',   peran: '11 PPLG 3 - Fullstack' },
      { nama: 'Siti Rahmah',     peran: '11 PPLG 3 - Fullstack' },
      { nama: 'Raihan Daffa',     peran: '11 PPLG 2 - Fullstack' },
      { nama: 'Muhammad Abdel Razza Khoirie',     peran: '11 PPLG 1 - Fullstack' },
      { nama: 'Amr Abdul Jabar Ar Royyan',     peran: '11 PPLG 1 - Fullstack' },
    ],
  },
     
  {
    id       : 'CC26-PS024',
    judul    : 'NEXT FINANCE INVENTORY',
    tema     : 'FinTech',
    cat      : '6',
    deskripsi: 'NexFi (Next Finance Inventory) adalah proyek capstone Coding Camp 2026 yang mengembangkan platform web terpadu untuk mengelola keuangan dan inventaris bagi individu dan pelaku usaha kecil, lengkap dengan laporan visual dan AI chatbot keuangan. Sistem ini dibangun dengan teknologi modern seperti Laravel, Tailwind CSS, dan RESTful API, telah dideploy dengan domain sendiri, dan dirancang berdasarkan pendekatan design thinking untuk menjawab masalah pencatatan manual yang tidak terintegrasi.',
    stack    : ['Laravel 12', 'PHP Blade', 'Tailwind CSS', 'MySQL'],
    link     : 'https://nexfi.pplgsmkn1ciomas.my.id/',
    gambar   : 'assets/Screenshot 2026-05-04 193401 - Divinka Azani.png',
    github   : '',
    anggota  : [
      { nama: 'Divinka Azani Rachdian', peran: '11 PPLG 2 - Project Manajer & FrontEnd Dev' },
      { nama: 'Kinar Khansa Makaila',     peran: '10 PPLG 1 - UI/UX Designer' },
      { nama: 'Aura Aqueeni Ilmira',     peran: '11 PPLG 2 - Data Analyst' },
      { nama: 'Davina Rahma Agustin',     peran: '10 PPLG 1 - UI/UX Designer' },
      { nama: 'D Firla Apriliani',     peran: '12 PPLG - Fullstack Developer' },
    ],
  },

  {
    id       : 'CC26-PS027',
    judul    : 'QR Smart Order',
    tema     : 'FinTech',
    cat      : '6',
    deskripsi: 'Website QR Menu Digital Dimsum yang memudahkan pelanggan melihat menu, memilih makanan, dan melakukan pemesanan secara praktis hanya dengan scan QR code. Dirancang dengan tampilan modern dan responsif untuk meningkatkan pengalaman pelanggan dan efisiensi pelayanan.',
    stack    : ['HTML', 'JSX', 'Tailwind CSS', 'Express', 'Node.', 'Vite'],
    link     : 'https://bosmentai.vercel.app/menu',
    gambar   : '',
    github   : '',
    anggota  : [
      { nama: 'Siti Asiah', peran: '11 PPLG 2 - UI/UX Designer' },
      { nama: 'Malika Thabina Hidayat', peran: '11 PPLG 2 - Data Analyst' },
      { nama: 'Aryandi Ramadhani', peran: '10 PPLG 2 - BackEnd Dev' },
      { nama: 'Rio satria', peran: '11 PPLG 2 - FrontEnd Dev' },
      { nama: 'Habib Ramadhan', peran: '10 PPLG 3 - Project Manager' },
    ],
  },

  {
    id       : 'Tidak Ada ID kelompok',
    judul    : 'Green Live Initiative',
    tema     : 'Sustainable Living & Responsible Consumption',
    cat      : '5',
    deskripsi: 'Saat ini, banyak individu ingin hidup ramah lingkungan namun sulit konsisten karena tidak adanya alat ukur yang jelas untuk melihat dampak aksi mereka. Problem Statement utama kami adalah: Bagaimana sebuah sistem digital dapat mempermudah pemantauan konsumsi harian dan pengelolaan limbah secara terukur? Research Question kami berfokus pada: Apakah sistem pencatatan (tracker) aktivitas harian yang interaktif dapat memotivasi individu untuk mengubah pola konsumsi menjadi lebih bertanggung jawab? Kami membangun aplikasi Green Lifestyle Initiative sebagai painkiller untuk mendigitalisasi gaya hidup berkelanjutan. Dengan integrasi fitur Edukasi (CRUD Tips) dan Monitoring (Eco-Tracker), tim yakin proyek ini akan memberikan kesadaran nyata bagi pengguna untuk menjaga kelestarian ekosistem bagi generasi masa depan.',
    stack    : ['HTML', 'Tailwind CSS', 'JSX',  'Vite', 'Node', 'Express', 'Firebase', 'Axios'],
    link     : 'https://gli-project-web.web.app',
    gambar   : 'assets/Screenshot 2026-05-08 081431 - Roschak.png',
    github   : '',
    anggota  : [
      { nama: 'Ragah Dirotama Wijaya',   peran: 'Project Manager' },
      { nama: 'Talita Dzakiran Istiqomah', peran: 'UI/UX Designer' },
      { nama: 'Nabila Maulida', peran: 'FrontEnd Dev' },
      { nama: 'Hayfa Rania Syahquita', peran: 'BackEnd Dev' },
      { nama: 'Tiwi Octavia', peran: 'Data Analyst' },
    ],
  },

  {
    id       : 'CC26-PS037',
    judul    : 'TabungaQu',
    tema     : 'FinTech',
    cat      : '6',
    deskripsi: 'Website TabunganQu adalah sebuah platform manajemen keuangan untuk mencatat pemasukan, pengeluaran, dan wishlist. Dilengkapi fitur auto-format Rupiah, pagination & sorting (DataTables), export laporan PDF/Excel, serta autentikasi via email/Google untuk pengalaman yang lebih praktis, efisien, dan user-friendly.',
    stack    : ['HTML', 'CSS', 'JSX', 'Vite', 'Node', 'MySQL'],
    link     : 'https://tabungan-qu-frontend.vercel.app/',
    gambar   : 'assets/Screenshot 2026-04-10 132638 - Fatir Bahri.png',
    github   : '',
    anggota  : [
      { nama: 'Fatir Syaiful Bahri', peran: '11 PPLG 3 - BackEnd Dev' },
      { nama: 'Jibril Fathanneo PP',   peran: '11 PPLG 3 - BackEnd Dev' },
      { nama: 'Azka Mortaza',   peran: '11 PPLG 2 - FrontEnd Dev' },
      { nama: 'Fadillah Nurwahid',   peran: '11 PPLG 3 - UI/UX Designer' },
      { nama: 'Indriyanti',   peran: '10 PPLG 2 - Data Analyst' },
    ],
  },

  {
    id       : 'CC26-PS032',
    judul    : 'KaryaNusa',
    tema     : 'Future-Ready Work & Economy',
    cat      : '3',
    deskripsi: 'KaryaNusa for Our Future adalah hybrid marketplace yang menggabungkan kemudahan sosial media Web2 dengan sistem pembayaran kripto Web3 untuk membantu kreator lokal menembus pasar internasional. Platform ini hadir sebagai solusi strategis untuk memutus perantara mahal, memberikan kontrol penuh atas pendapatan, dan mempermudah transaksi global demi meningkatkan kesejahteraan ekonomi kreatif Indonesia.',
    stack    : ['HTML ', 'CSS', 'JSX', 'Express', 'Node'],
    link     : 'https://warnusthree.my.id/',
    gambar   : 'assets/Jepretan layar_20260508_192424 - Revand Aqila.png',
    github   : '',
    anggota  : [
      { nama: 'Revand Aqila Al Hafiz', peran: '10 PPLG 3 - WEB3 & LEADER' },
      { nama: 'Asyifa Nurmaulidya',    peran: '10 PPLG 3 - FrontEnd Dev' },
      { nama: 'Dhara Zahraina Mulya',    peran: '10 PPLG 1 - FrontEnd Dev' },
      { nama: 'Bagus Pambudi Priyambodo',    peran: '10 PPLG 3 - BackEnd Dev' },
      { nama: 'Bramantyo Arsya Wijaya',    peran: '10 PPLG 3 - BackEnd Dev' },
      { nama: 'Nurizky Maudy',    peran: '10 PPLG 1 - UI/UX Designer' },
    ],
  },

  {
    id       : 'CC26-PS025',
    judul    : 'DashUMKM',
    tema     : 'FinTech',
    cat      : '6',
    deskripsi: 'DashUMKM adalah platform dashboard terpusat untuk mengelola penjualan multi-channel (TikTok Shop, Instagram, Tokopedia/Shopee) dengan otomasi inventory, sistem sinkronisasi template cerdas, dan real-time analytics. Kami fokus menyelesaikan permasalahan di mana 78% UMKM menghabiskan 65+ menit/hari untuk manual order management. Masalah tersebut berujung pada 64% keluhan overselling, 71% kesulitan hitung keuntungan, dan 58% UMKM tidak mengetahui penjualan produk laku. Melalui proyek DashUMKM berbasis TikTok Template Assistant sebagai painkiller operasional dan auto-inventory, kami bertujuan mencegah overselling dan meningkatkan revenue berbasis data analytics, terkhusus bagi 4.5 juta target sasaran UMKM Indonesia. Alasan pemilihan proyek ini didasarkan pada besarnya peranan real problem, technical fesibility tanpa pusing izin API PT/CV, target pasar besar, serta masuk ke dalam track Revolusi Teknologi Keuangan.',
    stack    : ['HTML', 'Tailwind CSS', 'JSX', 'Express', 'MongoDB'],
    link     : 'https://link-project.vercel.app',
    gambar   : 'assets/Screenshot 2026-05-07 201127 - Reyhan.png',
    github   : '',
    anggota  : [
      { nama: 'Muhamad Abdul Rohman',    peran: '11 PPLG 2 - Project Manager & BackEnd Dev' },
      { nama: 'Raissa Wulan Noviana', peran: '10 PPLG 2 - UI/UX Designer' },
      { nama: 'Reyhan Septianto Ramadhan', peran: '10 PPLG 2 - FrontEnd Dev' },
      { nama: 'Nasya Fauziyyah', peran: '10 PPLG 2 - BackEnd Dev' },
      { nama: 'Keysha Desmayanti', peran: '10 PPLG 2 - FrontEnd Dev' },
    ],
  },

  {
    id       : 'CC26-PS034',
    judul    : 'Smart Finance',
    tema     : 'FinTech',
    cat      : '6',
    deskripsi: 'Smart Finance adalah aplikasi web konsultasi keuangan online yang dirancang khusus untuk generasi muda dalam mengelola dan memahami kesehatan finansial mereka. Aplikasi ini menghubungkan pengguna dengan konsultan keuangan profesional melalui sistem booking yang terintegrasi, dilengkapi fitur kalkulasi kesehatan keuangan, katalog konsultan, dan dashboard personal.',
    stack    : ['HTML', 'CSS', 'JSX', 'Vite', 'Express', 'MySQL'],
    link     : 'https://dicoding-web-jade.vercel.app/',
    gambar   : 'assets/WhatsApp Image 2026-05-16 at 12.52.22.jpeg',
    github   : '',
    anggota  : [
      { nama: 'Muhammad Fathan Ali Khalifah', peran: '10 PPLG 2 - Backend & Project Leader' },
      { nama: 'Disya Al Fanesa', peran: '10 PPLG 2 - Data Analyst' },
      { nama: 'Aldentra Supranatantra', peran: '10 PPLG 1 - BackEnd Dev' },
      { nama: 'Anggun Permatasari', peran: '10 PPLG 2 - FrontEnd Dev' },
      { nama: 'Siti Salwa Aulia', peran: '10 PPLG 3 - Desain UI/UX' },
      { nama: 'Muhammad Arsyavin Fajriwan', peran: '10 PPLG 1 - Front End' },
    ],
  },

  {
    id       : 'CC26-PS026',
    judul    : 'FINSMART',
    tema     : 'FinTech',
    cat      : '6',
    deskripsi: 'FinSmart hadir sebagai solusi aplikasi manajemen keuangan personal berbasis web yang dirancang khusus untuk memenuhi kebutuhan dan preferensi Gen Z. Berbeda dari aplikasi keuangan konvensional yang terasa berat dan membosankan, FinSmart mengemas fitur-fitur finansial penting dalam antarmuka yang modern, intuitif, dan menarik secara visual, menggunakan pendekatan gamifikasi ringan dan bahasa yang relevan bagi pengguna muda.',
    stack    : ['HTML', 'CSS', 'JSX', 'Axios', 'Node', 'Express', 'MySQL', 'JWT', 'Bcryptjs', 'Helmet', 'CORS'],
    link     : 'https://finsmart-pameran.vercel.app',
    gambar   : '',
    github   : '',
    anggota  : [
      { nama: 'M. Yusuf Al Akil', peran: '10 PPLG 2 - Project Manager (Fullstack)' },
      { nama: 'Rangga Danadyaksa', peran: '10 PPLG 2 - BackEnd  Dev' },
      { nama: 'Farell Giekady', peran: '10 PPLG 2 - Database ' },
      { nama: 'Shyfha Ambar Sari', peran: '10 PPLG 2 - UI/UX Designer' },
      { nama: 'Muhamad Fadil Suparman', peran: '10 PPLG 2 - FrontEnd Dev' },
      
    ],
  },

  {
    id       : 'CC26-PS029',
    judul    : 'DanaDiri',
    tema     : 'FinTech',
    cat      : '6',
    deskripsi: 'DanaDiri adalah aplikasi web pencatatan keuangan pribadi yang membantu pengguna mengelola pemasukan, pengeluaran, transaksi berulang, dan target tabungan secara terstruktur. Dibuat dengan antarmuka yang modern dan responsif untuk memberikan pengalaman pengguna yang premium.',
    stack    : ['HTML', 'CSS', 'JSX', 'Vite', 'Express', 'Axios'],
    link     : 'https://danadiri.vercel.app',
    gambar   : 'assets/IMG-20260405-WA0058 - Muhammad Fauzi Ibnu Kosim.jpg',
    github   : '',
    anggota  : [
      { nama: 'Muhammad Fauzi Ibnu Kosim', peran: '11 PPLG 2 - Project Manager' },
      { nama: 'Satya Mardiyah Karyanie',                 peran: '11 PPLG 1 - BackEnd' },
      { nama: 'Putri Aprilia',                 peran: '10 PPLG 2 - FrontEnd Dev' },
      { nama: 'Dahlia Najlaa Tsuraya',                 peran: '10 PPLG 1 - UI/UX Designer' },
      { nama: 'Ardilla Oktariani Putri',                 peran: '10 PPLG 1 - Data Analyst' },
    ],
  },

  {
    id       : 'CC26-PS028',
    judul    : 'MoneyPath',
    tema     : 'FinTech',
    cat      : '6',
    deskripsi: 'Aplikasi Berbasis Web Yang berfokus pada finansial keuangan, dan memiliki fitur utama yaitu Tabungan, Learning Modul, Management Saldo, Tabungan Bersama , Saldo Bersama , dan Ai Analisis Keuangan.',
    stack    : ['HTML', 'Tailwind CSS', 'JSX', 'Express'],
    link     : 'https://moneypath-7777.web.app/',
    gambar   : 'assets/Screenshot 2026-05-08 132347 - Hafidh.png',
    github   : '',
    anggota  : [
      { nama: 'Muhamad Hafidh Khoerullah',    peran: 'Full-Stack Team Leader' },
      { nama: 'Diva Ayu Fatmawati', peran: 'Front-End Analysis' },
      { nama: 'Nabila Indriyanti', peran: 'Front-End Analysis' },
      { nama: 'Almira Tunggadewi Supriatna', peran: 'Front-End Analysis UI-UX' },
      { nama: 'Prissa Mutiara Nova Sugiri', peran: 'Front-End Analysis UI-UX' },
    ],
  },
  
];

/* ──────────────────────────────────────────
   KATEGORI
   Jangan diubah kecuali ingin ganti warna/icon
────────────────────────────────────────── */
const CATS = {
  '1': { label: 'Healthy Lives & Well-being',                   icon: '🌿', color: '#10b981', bg: 'rgba(16,185,129,.13)' },
  '2': { label: 'Accessible & Adaptive Learning',               icon: '📚', color: '#3b82f6', bg: 'rgba(59,130,246,.13)'  },
  '3': { label: 'Future-Ready Work & Economy',                  icon: '💼', color: '#f59e0b', bg: 'rgba(245,158,11,.13)'  },
  '4': { label: 'Inclusive & Resilient Communities',            icon: '🤝', color: '#8b5cf6', bg: 'rgba(139,92,246,.13)'  },
  '5': { label: 'Sustainable Living & Responsible Consumption', icon: '♻️', color: '#06b6d4', bg: 'rgba(6,182,212,.13)'   },
  '6': { label: 'Fintech',                                      icon: '💳', color: '#ec4899', bg: 'rgba(236,72,153,.13)'  },
};

/* ──────────────────────────────────────────
   STATE
────────────────────────────────────────── */
let activeCat = 'all';
let searchQ   = '';

/* ──────────────────────────────────────────
   INIT
────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  render();

  const sTotalEl = document.getElementById('sTotal');
  const sTeamEl  = document.getElementById('sTeam');
  if (sTotalEl) sTotalEl.textContent = PROJECTS.length;
  if (sTeamEl)  sTeamEl.textContent  = PROJECTS.length;

  // Filter tabs
  document.querySelectorAll('.ftab').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.ftab').forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      activeCat = btn.dataset.cat;
      render();
    });
  });

  // Search
  const searchInputEl = document.getElementById('searchInput');
  if (searchInputEl) {
    searchInputEl.addEventListener('input', e => {
      searchQ = e.target.value.toLowerCase();
      render();
    });
  }

  // Hamburger
  const hamburgerEl = document.getElementById('hamburger');
  if (hamburgerEl) {
    hamburgerEl.addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('open');
    });
  }

  // Swipe indicator: sembunyikan arrow fade saat filter sudah di-scroll sampai ujung
  const filterWrapEl = document.getElementById('filterWrap');
  const filterOuterEl = filterWrapEl && filterWrapEl.parentElement;
  if (filterWrapEl && filterOuterEl) {
    filterWrapEl.addEventListener('scroll', () => {
      const atEnd = filterWrapEl.scrollLeft + filterWrapEl.clientWidth >= filterWrapEl.scrollWidth - 4;
      filterOuterEl.classList.toggle('scrolled-end', atEnd);
    });
  }

  // Modal close on backdrop click
  const overlayEl = document.getElementById('overlay');
  if (overlayEl) {
    overlayEl.addEventListener('click', e => {
      if (e.target === overlayEl) closeModal();
    });
  }
});

// Scroll to top button + scroll spy active nav
window.addEventListener('scroll', () => {
  // Scroll to top button
  const toTopEl = document.getElementById('toTop');
  if (toTopEl) toTopEl.classList.toggle('show', scrollY > 500);

  // Scroll spy: update nav link aktif berdasarkan section yang terlihat
  const navBtns = document.querySelectorAll('.nav-link');
  if (!navBtns.length) return;

  const sections = [
    { id: 'hero',     btn: navBtns[0] },
    { id: 'projects', btn: navBtns[1] },
    { id: 'tentang',  btn: navBtns[2] },
  ];

  let current = sections[0]; // default beranda
  const offset = 80; // tinggi navbar + sedikit buffer

  for (const s of sections) {
    const el = document.getElementById(s.id);
    if (!el) continue;
    if (el.getBoundingClientRect().top <= offset) {
      current = s;
    }
  }

  sections.forEach(s => s.btn && s.btn.classList.remove('on'));
  if (current.btn) current.btn.classList.add('on');
});

// Keyboard ESC close modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ──────────────────────────────────────────
   NAVIGASI
────────────────────────────────────────── */
function goto(sel) {
  document.querySelector(sel)?.scrollIntoView({ behavior: 'smooth' });
  document.getElementById('navLinks').classList.remove('open');
}

/* ──────────────────────────────────────────
   RENDER GRID
────────────────────────────────────────── */
function render() {
  const grid = document.getElementById('projGrid');
  if (!grid) return; // halaman detail tidak punya projGrid

  let list = [...PROJECTS];

  if (activeCat !== 'all') {
    list = list.filter(p => p.cat === activeCat);
  }

  if (searchQ) {
    list = list.filter(p =>
      p.judul.toLowerCase().includes(searchQ) ||
      p.id.toLowerCase().includes(searchQ) ||
      (p.deskripsi || '').toLowerCase().includes(searchQ)
    );
  }

  if (!list.length) {
    const isEmpty = activeCat === 'all' && !searchQ;
    grid.innerHTML = `
      <div class="grid-empty">
        <div class="ei">${isEmpty ? '📂' : '🔍'}</div>
        <p>${isEmpty ? 'Belum ada project.' : 'Tidak ada project yang sesuai.'}</p>
      </div>`;
    return;
  }

  grid.innerHTML = '';
  list.forEach(p => grid.appendChild(makeCard(p)));
}

/* ──────────────────────────────────────────
   BUAT CARD
────────────────────────────────────────── */
function makeCard(p) {
  const cat = CATS[p.cat] || {};
  const div = document.createElement('div');
  div.className = 'card';

  const thumbHtml = p.gambar
    ? `<img src="${p.gambar}" alt="${x(p.judul)}" loading="lazy"
           onerror="this.parentElement.innerHTML='<div class=\\'thumb-empty\\'><span>🖥️</span><small>Preview</small></div>'" />`
    : `<div class="thumb-empty"><span>🖥️</span><small>Preview</small></div>`;

  const catBadge = cat.label
    ? `<span class="card-cat" style="background:${cat.bg};color:${cat.color}">${cat.icon} ${cat.label.split(' ')[0]}</span>`
    : '';

  const stackHtml = (p.stack || [])
    .map(s => `<span class="stack-tag">${x(s)}</span>`)
    .join('');

  const linkHtml = p.link
    ? `<a class="card-link" href="${p.link}" target="_blank" rel="noopener">🔗 Kunjungi Website</a>`
    : `<span class="card-link card-link-none">Belum ada link</span>`;

  div.innerHTML = `
    <div class="card-thumb">
      ${thumbHtml}
      ${catBadge}
    </div>
    <div class="card-body">
      <div class="card-id">${x(p.id)}</div>
      <div class="card-title">
        ${x(p.judul)} <span class="tema">- ${x(p.tema)}</span>
      </div>
      <p class="card-desc">${x(p.deskripsi)}</p>
      <div class="card-stack">${stackHtml}</div>
      ${linkHtml}
    </div>`;

  // Klik card (selain tombol link) → buka halaman detail
  div.addEventListener('click', e => {
    if (e.target.closest('.card-link')) return;
    if (p.id) window.location.href = `detail.html?id=${encodeURIComponent(p.id)}`;
  });
  div.style.cursor = 'pointer';

  return div;
}

/* ──────────────────────────────────────────
   MODAL DETAIL
────────────────────────────────────────── */
function openModal(p) {
  const cat       = CATS[p.cat] || {};
  const stackHtml = (p.stack || []).map(s => `<span class="stack-tag">${x(s)}</span>`).join('');

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-thumb">
      ${p.gambar
        ? `<img src="${p.gambar}" alt="${x(p.judul)}" onerror="this.style.display='none'" />`
        : `<div style="height:180px;display:flex;align-items:center;justify-content:center;font-size:2.5rem;">🖥️</div>`}
    </div>
    <div class="modal-id">${x(p.id)}</div>
    <div class="modal-title">${x(p.judul)}</div>
    <div class="modal-tema">${cat.icon || ''} ${x(p.tema)}</div>
    <hr class="modal-sep" />
    <div class="modal-label">Deskripsi</div>
    <p class="modal-val">${x(p.deskripsi)}</p>
    <div class="modal-label">Teknologi / Stack</div>
    <div class="modal-tags">${stackHtml}</div>
    ${cat.label ? `<div class="modal-label">Kategori</div><p class="modal-val">${cat.icon} ${cat.label}</p>` : ''}
    <div class="modal-actions">
      ${p.link ? `<a class="card-link" href="${p.link}" target="_blank" rel="noopener">🔗 Kunjungi Website</a>` : ''}
    </div>`;

  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ──────────────────────────────────────────
   HELPER — escape HTML
────────────────────────────────────────── */
function x(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
