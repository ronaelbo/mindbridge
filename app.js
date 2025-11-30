// عناصر النص اللي هنبدّلها
const langs = {
  "ar": {
    "badge":"منصة متكاملة لدعم صحتك النفسية ونموك الشخصي",
    "heroTitle":"رحلتك نحو صحة نفسية أفضل تبدأ هنا",
    "heroSubtitle":"منصة عربية ذكية للدعم النفسي وتنمية المهارات الشخصية",
    "primary":"ابدأ الآن",
    "secondary":"تعرف على الأخصائيين",
    "featuresTitle":"ما يميز MindBridge",
    "card1Title":"جلسات مع أخصائيين",
    "card1Text":"حجز جلسات فردية مع أخصائيين مرخصين",
    "card2Title":"المساعد الذكي",
    "card2Text":"استفسر عن المشاكل واحصل على نصائح أولية",
    "card3Title":"المجتمع",
    "card3Text":"انضم لمجتمع يدعمك ويشاركك الخبرات",
    "langLabel":"ع"
  },
  "en": {
    "badge":"A complete platform to support your mental health and growth",
    "heroTitle":"Start your journey to better mental health",
    "heroSubtitle":"An Arabic-friendly platform for psychological support and skills",
    "primary":"Get started",
    "secondary":"Meet specialists",
    "featuresTitle":"Why MindBridge",
    "card1Title":"Sessions with specialists",
    "card1Text":"Book one-to-one sessions with certified specialists",
    "card2Title":"Smart assistant",
    "card2Text":"Ask about issues and get initial advice",
    "card3Title":"Community",
    "card3Text":"Join a supportive community",
    "langLabel":"EN"
  },
  "fr": {
    "badge":"Plateforme complète pour soutenir votre santé mentale",
    "heroTitle":"Commencez votre chemin vers une meilleure santé mentale",
    "heroSubtitle":"Plateforme arabe pour le soutien psychologique et le développement",
    "primary":"Commencer",
    "secondary":"Rencontrer des spécialistes",
    "featuresTitle":"Pourquoi MindBridge",
    "card1Title":"Séances avec spécialistes",
    "card1Text":"Réservez des séances individuelles avec des spécialistes certifiés",
    "card2Title":"Assistant intelligent",
    "card2Text":"Posez des questions et recevez des conseils initiaux",
    "card3Title":"Communauté",
    "card3Text":"Rejoignez une communauté de soutien",
    "langLabel":"FR"
  }
};

let current = localStorage.getItem('mb-lang') || 'ar';

function applyLang(code){
  const L = langs[code];
  if(!L) return;
  document.getElementById('badgeText').textContent = L.badge;
  document.getElementById('heroTitle').textContent = L.heroTitle;
  document.getElementById('heroSubtitle').textContent = L.heroSubtitle;
  document.getElementById('primaryBtn').textContent = L.primary;
  document.getElementById('secondaryBtn').textContent = L.secondary;
  document.getElementById('featuresTitle').textContent = L.featuresTitle;
  document.getElementById('card1Title').textContent = L.card1Title;
  document.getElementById('card1Text').textContent = L.card1Text;
  document.getElementById('card2Title').textContent = L.card2Title;
  document.getElementById('card2Text').textContent = L.card2Text;
  document.getElementById('card3Title').textContent = L.card3Title;
  document.getElementById('card3Text').textContent = L.card3Text;

  // زر اللغة
  const lb = document.getElementById('langBtn');
  lb.textContent = L.langLabel;

  // اتجاه الصفحة
  if(code === 'ar'){ document.documentElement.setAttribute('dir','rtl'); document.documentElement.setAttribute('lang','ar'); }
  else { document.documentElement.setAttribute('dir','ltr'); document.documentElement.setAttribute('lang', code); }

  localStorage.setItem('mb-lang', code);
  current = code;
}

// تبديل دورى بالضغط: ar -> en -> fr -> ar
document.addEventListener('DOMContentLoaded', function(){
  applyLang(current);
  document.getElementById('langBtn').addEventListener('click', function(){
    current = current === 'ar' ? 'en' : (current === 'en' ? 'fr' : 'ar');
    applyLang(current);
  });

  // مثال: لو عايزة التنقل بين التبويبات
  document.getElementById('navSessions').addEventListener('click', function(e){
    e.preventDefault();
    alert('هنا ممكن نفتح صفحة "جلساتي" أو نعرض كاردز الجلسات المحجوزة.');
  });
});

