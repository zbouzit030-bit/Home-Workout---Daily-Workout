// ===== DATA =====
const EXERCISES = [
  // CHEST
  { id:1, name:'تمرين الضغط', muscle:'chest', emoji:'🏋️', icon:'💪', sets:3, reps:'12-15', duration:45, calories:8, difficulty:'مبتدئ', desc:'تمرين الضغط الكلاسيكي لبناء عضلات الصدر والذراعين والكتفين. واحد من أفضل تمارين الجسم الكامل.', steps:['ابدأ في وضع الضغط مع مباعدة يديك أكثر من عرض الكتفين','حافظ على استقامة جسمك من الرأس حتى القدمين','انزل حتى تقترب صدرك من الأرض','ادفع لأعلى بقوة وعود للوضع الابتدائي'], tags:['صدر','ذراعين','كتفين'] },
  { id:2, name:'الضغط الضيق', muscle:'chest', emoji:'💪', sets:3, reps:'10-12', duration:40, calories:7, difficulty:'متوسط', desc:'يركز على العضلة ثلاثية الرؤوس والجزء الداخلي من الصدر. مثالي لتنميل الذراعين.', steps:['ضع يديك قريبتين من بعض على الأرض','حافظ على ثبات كوعيك بجانب جسمك','انزل ببطء وارجع للأعلى'], tags:['صدر','ثلاثية'] },
  { id:3, name:'الضغط المائل', muscle:'chest', emoji:'🔝', sets:3, reps:'12', duration:40, calories:8, difficulty:'متوسط', desc:'يستهدف الجزء العلوي من عضلة الصدر بشكل ممتاز.', steps:['ضع يديك على سطح مرتفع (كرسي أو أريكة)','جسمك بزاوية مائلة للأسفل','انزل حتى صدرك يلامس السطح','ارجع للأعلى'], tags:['صدر العلوي','ذراعين'] },
  
  // ABS
  { id:4, name:'كرانش بطني', muscle:'abs', emoji:'🔥', sets:3, reps:'20', duration:30, calories:5, difficulty:'مبتدئ', desc:'تمرين أساسي لتقوية عضلات البطن العلوية وحرق دهون البطن.', steps:['استلقِ على ظهرك وارفع ركبتيك','ضع يديك خلف رأسك','ارفع كتفيك عن الأرض مع الزفير','انزل ببطء مع الشهيق'], tags:['بطن علوي','لياقة'] },
  { id:5, name:'بلانك', muscle:'abs', emoji:'⚡', sets:3, reps:'30-60 ثانية', duration:60, calories:4, difficulty:'متوسط', desc:'تمرين إزومتري يقوي العضلات الأساسية بالكامل ويحسن الثبات والتوازن.', steps:['استلقِ على بطنك وارتفع على كوعيك وأطراف قدميك','جسمك يجب أن يكون مستقيماً كالألواح','شد عضلات البطن والمؤخرة','حافظ على التنفس الطبيعي'], tags:['بطن','خصر','جوهر'] },
  { id:6, name:'تمرين المقص', muscle:'abs', emoji:'✂️', sets:3, reps:'15 لكل جانب', duration:35, calories:6, difficulty:'متوسط', desc:'يقوي عضلات البطن السفلية ويحسن التنسيق والتوازن.', steps:['استلقِ على ظهرك مع رفع ساقيك','حرك ساقيك كحركة مقص','الظهر يلامس الأرض طوال الوقت'], tags:['بطن سفلي','أرجل'] },
  { id:7, name:'روسيان تويست', muscle:'abs', emoji:'🌀', sets:3, reps:'20', duration:30, calories:5, difficulty:'متوسط', desc:'تمرين ممتاز للعضلات المائلة وتنحيف الخصر.', steps:['اجلس بزاوية 45 درجة مع ثني ركبتيك','ارفع قدميك عن الأرض قليلاً','دوّر جذعك يميناً ويساراً','يمكن حمل وزن لزيادة الصعوبة'], tags:['خصر','مائل','بطن'] },
  
  // LEGS
  { id:8, name:'القرفصاء', muscle:'legs', emoji:'🦵', sets:4, reps:'15-20', duration:40, calories:10, difficulty:'مبتدئ', desc:'ملك تمارين الأرجل! يستهدف الفخذين والمؤخرة والساقين في وقت واحد.', steps:['قف مع مباعدة قدميك بعرض الكتفين','ارفع يديك للأمام للتوازن','انزل حتى تكون فخذاك موازيين للأرض','اضغط بكعبيك للعودة للأعلى'], tags:['فخذ','مؤخرة','ساق'] },
  { id:9, name:'الطعنة الأمامية', muscle:'legs', emoji:'🎯', sets:3, reps:'12 لكل ساق', duration:40, calories:8, difficulty:'متوسط', desc:'يقوي الفخذين ويحسن التوازن والاستقرار.', steps:['قف منتصباً مع مباعدة قدميك','خذ خطوة كبيرة للأمام','انزل حتى تكون ركبتك الخلفية قريبة من الأرض','ارجع للوضع الابتدائي'], tags:['فخذ','مؤخرة','توازن'] },
  { id:10, name:'رفع ساق خلفي', muscle:'legs', emoji:'🍑', sets:3, reps:'15 لكل جانب', duration:35, calories:6, difficulty:'مبتدئ', desc:'يستهدف عضلات المؤخرة بشكل مباشر ويقوي أسفل الظهر.', steps:['استلقِ على الأرض على يديك وركبتيك','ارفع ساق واحدة للخلف والأعلى','اضغط على المؤخرة في القمة','انزل ببطء'], tags:['مؤخرة','فخذ خلفي'] },
  { id:11, name:'قفز السكواتش', muscle:'legs', emoji:'💥', sets:3, reps:'12', duration:40, calories:12, difficulty:'متقدم', desc:'نسخة متفجرة من القرفصاء تحرق سعرات أكثر وتقوي العضلات بشكل أعمق.', steps:['انزل في وضع القرفصاء','اقفز بقوة للأعلى','اهبط بلطف على أطراف قدميك','اعود للقرفصاء مباشرة'], tags:['فخذ','قلب','طاقة'] },
  
  // ARMS
  { id:12, name:'ضغط ثلاثية الرؤوس', muscle:'arms', emoji:'💺', sets:3, reps:'12-15', duration:35, calories:6, difficulty:'مبتدئ', desc:'تمرين ممتاز لشد الجزء الخلفي من الذراع وتقوية العضلة ثلاثية الرؤوس.', steps:['استخدم كرسياً أو طاولة خلفك','ضع يديك على حافة الكرسي','انزل بجسمك ببطء حتى زاوية 90 درجة','ارجع للأعلى'], tags:['ثلاثية','ذراع خلفي'] },
  { id:13, name:'تمرين العضلة الثنائية', muscle:'arms', emoji:'🦾', sets:3, reps:'15', duration:30, calories:5, difficulty:'مبتدئ', desc:'يقوي العضلة الثنائية الرؤوس في الذراع مع الوزن أو بدونه.', steps:['قف منتصباً مع مسك وزن (كزجاجات ماء)','ارفع الوزن نحو كتفك ببطء','اشعر بانقباض العضلة','انزل ببطء مع السيطرة'], tags:['ثنائية','قبضة','ذراع'] },
  { id:14, name:'دوائر الكتفين', muscle:'arms', emoji:'🔄', sets:3, reps:'20', duration:25, calories:4, difficulty:'مبتدئ', desc:'يقوي عضلات الكتفين ويحسن المرونة وحركة المفصل.', steps:['قف منتصباً مع مد ذراعيك للجانبين','اصنع دوائر صغيرة للأمام ثم للخلف','زد حجم الدوائر تدريجياً'], tags:['كتف','مرونة','دوران'] },
  
  // FULL BODY
  { id:15, name:'البيربي', muscle:'full', emoji:'🌪️', sets:3, reps:'10', duration:45, calories:15, difficulty:'متقدم', desc:'تمرين متكامل يستهدف كل عضلات الجسم ويرفع معدل ضربات القلب بشكل كبير.', steps:['قف منتصباً ثم انزل لوضع القرفصاء','ضع يديك على الأرض وقفز بساقيك للخلف','اعمل ضغطة واحدة','اقفز بساقيك للأمام ثم اقفز للأعلى مع رفع يديك'], tags:['كارديو','قوة','كامل الجسم'] },
  { id:16, name:'جامبينج جاك', muscle:'full', emoji:'⭐', sets:3, reps:'30', duration:30, calories:8, difficulty:'مبتدئ', desc:'تمرين كارديو ممتع يحرق الدهون ويحسن اللياقة القلبية.', steps:['قف منتصباً مع ضم قدميك','اقفز مع فتح قدميك ورفع يديك فوق رأسك','اقفز مرة أخرى مع عودة اليدين والقدمين','حافظ على ايقاع ثابت'], tags:['كارديو','جسم كامل','تدفئة'] },
  { id:17, name:'تسلق الجبل', muscle:'full', emoji:'🧗', sets:3, reps:'20 لكل جانب', duration:40, calories:12, difficulty:'متوسط', desc:'يقوي البطن والذراعين والأرجل في نفس الوقت مع رفع معدل القلب.', steps:['ابدأ في وضع الضغط على يديك','اجلب ركبتك اليمنى نحو صدرك','ارجعها ثم جيء بالركبة اليسرى','زد السرعة تدريجياً'], tags:['بطن','كارديو','كامل الجسم'] },
  { id:18, name:'الطائرة', muscle:'full', emoji:'✈️', sets:3, reps:'12', duration:35, calories:7, difficulty:'مبتدئ', desc:'يقوي عضلات الظهر والمؤخرة ويحسن وضعية الجسم.', steps:['استلقِ على بطنك مع مد يديك للجانبين','ارفع صدرك ويديك وأرجلك عن الأرض معاً','اشعر بانقباض عضلات الظهر','انزل ببطء'], tags:['ظهر','مؤخرة','كامل الجسم'] },
];

const PROGRAMS = [
  { id:'chest', name:'يوم الصدر', emoji:'💪', gradient:'linear-gradient(135deg,#ff4d4d,#ff8c00)', muscles:['chest'], duration:25, calories:120 },
  { id:'abs', name:'يوم البطن', emoji:'🔥', gradient:'linear-gradient(135deg,#7c5cfc,#ff6b9d)', muscles:['abs'], duration:20, calories:90 },
  { id:'legs', name:'يوم الأرجل', emoji:'🦵', gradient:'linear-gradient(135deg,#00d4aa,#7c5cfc)', muscles:['legs'], duration:30, calories:150 },
  { id:'arms', name:'يوم الذراعين', emoji:'🦾', gradient:'linear-gradient(135deg,#ff6b9d,#ff4d4d)', muscles:['arms'], duration:20, calories:80 },
  { id:'full', name:'كامل الجسم', emoji:'⚡', gradient:'linear-gradient(135deg,#ffd700,#ff4d4d)', muscles:['full'], duration:40, calories:200 },
  { id:'cardio', name:'كارديو', emoji:'🌪️', gradient:'linear-gradient(135deg,#00d4aa,#ffd700)', muscles:['full','legs'], duration:25, calories:180 },
];

// ===== STATE =====
let state = loadState();
let currentExercise = null;
let currentProgram = null;
let timerInterval = null;
let timerRunning = false;
let timerSeconds = 0;
let timerTotal = 0;
let currentSet = 1;
let restInterval = null;
let notificationsEnabled = false;
let currentFilter = 'all';

function loadState() {
  try {
    return JSON.parse(localStorage.getItem('hwp_state')) || defaultState();
  } catch { return defaultState(); }
}

function defaultState() {
  return {
    darkMode: true,
    streak: 0,
    longestStreak: 0,
    totalWorkouts: 0,
    totalMinutes: 0,
    totalCalories: 0,
    favorites: [],
    history: [],
    lastWorkoutDate: null,
    weekDays: [],
  };
}

function saveState() {
  localStorage.setItem('hwp_state', JSON.stringify(state));
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  // Splash
  setTimeout(() => {
    document.getElementById('splash').style.opacity = '0';
    document.getElementById('splash').style.transition = 'opacity 0.5s';
    setTimeout(() => {
      document.getElementById('splash').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      initApp();
    }, 500);
  }, 1800);
});

function initApp() {
  applyTheme();
  updateGreeting();
  buildWeekDays();
  renderProgramGrid();
  renderDailyCard();
  renderExerciseList(EXERCISES);
  renderFavorites();
  renderProgress();
  updateHeaderStats();
  checkNotificationTime();
  checkStreak();
}

// ===== THEME =====
function applyTheme() {
  if (state.darkMode) {
    document.body.classList.add('dark-mode');
    document.body.classList.remove('light-mode');
    document.getElementById('theme-icon').textContent = '☀️';
  } else {
    document.body.classList.add('light-mode');
    document.body.classList.remove('dark-mode');
    document.getElementById('theme-icon').textContent = '🌙';
  }
}

function toggleDark() {
  state.darkMode = !state.darkMode;
  saveState();
  applyTheme();
  showToast(state.darkMode ? '🌙 الوضع الليلي' : '☀️ الوضع النهاري');
}

// ===== GREETING =====
function updateGreeting() {
  const h = new Date().getHours();
  const greetings = h < 12 ? 'صباح الخير! 🌅' : h < 17 ? 'مساء الخير! ☀️' : 'مساء النور! 🌙';
  document.getElementById('greeting').textContent = greetings;
}

// ===== WEEK DAYS =====
function buildWeekDays() {
  const days = ['ح','ن','ث','ر','خ','ج','س'];
  const today = new Date().getDay();
  const container = document.getElementById('week-days');
  container.innerHTML = '';
  days.forEach((d, i) => {
    const div = document.createElement('div');
    div.className = 'week-day' + (i === today ? ' today' : '');
    div.textContent = d;
    // Check if worked out this day this week
    const worked = state.weekDays.includes(i);
    if (worked) div.classList.add('done');
    container.appendChild(div);
  });
  document.getElementById('streak-count').textContent = state.streak;
}

// ===== STREAK =====
function checkStreak() {
  const today = new Date().toDateString();
  if (state.lastWorkoutDate) {
    const last = new Date(state.lastWorkoutDate);
    const diff = Math.floor((new Date() - last) / (1000*60*60*24));
    if (diff > 1) {
      state.streak = 0;
      state.weekDays = [];
      saveState();
      buildWeekDays();
    }
  }
}

function updateStreakAfterWorkout() {
  const today = new Date().toDateString();
  const todayDay = new Date().getDay();
  if (state.lastWorkoutDate !== today) {
    state.streak++;
    state.lastWorkoutDate = today;
    if (!state.weekDays.includes(todayDay)) state.weekDays.push(todayDay);
    if (state.streak > state.longestStreak) state.longestStreak = state.streak;
    saveState();
    buildWeekDays();
  }
}

// ===== STATS =====
function updateHeaderStats() {
  document.getElementById('total-workouts').textContent = state.totalWorkouts;
  document.getElementById('total-minutes').textContent = state.totalMinutes;
  document.getElementById('total-calories').textContent = state.totalCalories;
}

// ===== PROGRAMS =====
function renderProgramGrid() {
  const grid = document.getElementById('program-grid');
  grid.innerHTML = '';
  PROGRAMS.forEach(prog => {
    const exCount = EXERCISES.filter(e => prog.muscles.includes(e.muscle)).length;
    const div = document.createElement('div');
    div.className = 'program-card';
    div.style.background = prog.gradient;
    div.innerHTML = `
      <div class="program-emoji">${prog.emoji}</div>
      <div class="program-name">${prog.name}</div>
      <div class="program-count">${exCount} تمرين • ${prog.duration} دقيقة</div>
    `;
    div.onclick = () => openProgramModal(prog);
    grid.appendChild(div);
  });
}

function openProgramModal(prog) {
  currentProgram = prog;
  document.getElementById('prog-modal-title').textContent = `${prog.emoji} ${prog.name}`;
  const exList = EXERCISES.filter(e => prog.muscles.includes(e.muscle));
  const container = document.getElementById('program-exercises');
  container.innerHTML = `
    <div style="padding:14px 0 8px;color:var(--text2);font-size:13px">
      ⏱️ ${prog.duration} دقيقة &nbsp;|&nbsp; 🔥 ~${prog.calories} سعرة &nbsp;|&nbsp; 💪 ${exList.length} تمارين
    </div>
  `;
  exList.forEach((ex, i) => {
    const div = document.createElement('div');
    div.className = 'prog-ex-item';
    div.innerHTML = `
      <div class="prog-ex-num">${i+1}</div>
      <div class="prog-ex-emoji">${ex.emoji}</div>
      <div class="prog-ex-info">
        <div class="prog-ex-name">${ex.name}</div>
        <div class="prog-ex-meta">${ex.sets} جولات × ${ex.reps} | 🔥 ${ex.calories} سعرة</div>
      </div>
    `;
    div.onclick = () => { closeProgramModal(); openExercise(ex); };
    container.appendChild(div);
  });
  document.getElementById('program-modal').classList.remove('hidden');
}

function closeProgramModal() {
  document.getElementById('program-modal').classList.add('hidden');
}

function startProgramWorkout() {
  closeProgramModal();
  const exList = EXERCISES.filter(e => currentProgram.muscles.includes(e.muscle));
  if (exList.length > 0) openExercise(exList[0]);
}

// ===== DAILY CARD =====
function renderDailyCard() {
  const dayIndex = new Date().getDay();
  const daily = EXERCISES[dayIndex % EXERCISES.length];
  const card = document.getElementById('daily-workout-card');
  card.innerHTML = `
    <div class="daily-card-inner" onclick="openExercise(EXERCISES[${daily.id-1}])">
      <div class="daily-emoji">${daily.emoji}</div>
      <div class="daily-info">
        <div class="daily-tag">تمرين اليوم</div>
        <div class="daily-name">${daily.name}</div>
        <div class="daily-meta">${daily.sets} جولات × ${daily.reps} | 🔥 ~${daily.calories * daily.sets} سعرة</div>
      </div>
      <div class="daily-arrow">←</div>
    </div>
  `;
}

// ===== EXERCISE LIST =====
function renderExerciseList(exercises) {
  const list = document.getElementById('exercise-list');
  list.innerHTML = '';
  const muscleColors = { chest:'#ff4d4d', abs:'#7c5cfc', legs:'#00d4aa', arms:'#ff8c00', full:'#ffd700' };
  exercises.forEach(ex => {
    const card = createExerciseCard(ex, muscleColors);
    list.appendChild(card);
  });
}

function createExerciseCard(ex, muscleColors = { chest:'#ff4d4d', abs:'#7c5cfc', legs:'#00d4aa', arms:'#ff8c00', full:'#ffd700' }) {
  const isFav = state.favorites.includes(ex.id);
  const card = document.createElement('div');
  card.className = 'exercise-card';
  card.dataset.muscle = ex.muscle;
  const color = muscleColors[ex.muscle] || '#ff4d4d';
  card.innerHTML = `
    <div class="ex-icon" style="background:${color}22">${ex.emoji}</div>
    <div class="ex-info">
      <div class="ex-name">${ex.name}</div>
      <div class="ex-tags">
        ${ex.tags.map(t => `<span class="ex-tag">${t}</span>`).join('')}
        <span class="ex-tag">${ex.difficulty}</span>
      </div>
    </div>
    <div class="ex-actions">
      <button class="ex-fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); quickFav(${ex.id}, this)">
        ${isFav ? '⭐' : '☆'}
      </button>
    </div>
  `;
  card.onclick = () => openExercise(ex);
  return card;
}

function filterMuscle(muscle, btn) {
  currentFilter = muscle;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filtered = muscle === 'all' ? EXERCISES : EXERCISES.filter(e => e.muscle === muscle);
  renderExerciseList(filtered);
}

// ===== FAVORITES =====
function quickFav(id, btn) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    state.favorites.push(id);
    btn.textContent = '⭐';
    btn.classList.add('active');
    showToast('⭐ أُضيف إلى المفضلة!');
  } else {
    state.favorites.splice(idx, 1);
    btn.textContent = '☆';
    btn.classList.remove('active');
    showToast('تم الحذف من المفضلة');
  }
  saveState();
  renderFavorites();
}

function toggleFavorite() {
  if (!currentExercise) return;
  const id = currentExercise.id;
  const idx = state.favorites.indexOf(id);
  const btn = document.getElementById('fav-btn');
  if (idx === -1) {
    state.favorites.push(id);
    btn.textContent = '⭐ في المفضلة';
    showToast('⭐ أُضيف إلى المفضلة!');
  } else {
    state.favorites.splice(idx, 1);
    btn.textContent = '⭐ أضف للمفضلة';
    showToast('تم الحذف من المفضلة');
  }
  saveState();
  renderFavorites();
}

function renderFavorites() {
  const list = document.getElementById('favorites-list');
  const empty = document.getElementById('no-favorites');
  list.innerHTML = '';
  const favExercises = EXERCISES.filter(e => state.favorites.includes(e.id));
  if (favExercises.length === 0) {
    empty.classList.remove('hidden');
  } else {
    empty.classList.add('hidden');
    favExercises.forEach(ex => {
      const card = createExerciseCard(ex);
      list.appendChild(card);
    });
  }
}

// ===== EXERCISE MODAL =====
function openExercise(ex) {
  currentExercise = ex;
  currentSet = 1;
  stopTimer();

  document.getElementById('modal-title').textContent = ex.name;
  document.getElementById('modal-badge').textContent = ex.difficulty;
  document.getElementById('exercise-anim').textContent = ex.emoji;
  document.getElementById('meta-reps').textContent = ex.reps + ' تكرار';
  document.getElementById('meta-sets').textContent = ex.sets + ' جولات';
  document.getElementById('meta-cal').textContent = '~' + (ex.calories * ex.sets) + ' سعرة';
  document.getElementById('exercise-desc').textContent = ex.desc;

  const stepsList = document.getElementById('steps-list');
  stepsList.innerHTML = '';
  ex.steps.forEach((step, i) => {
    const div = document.createElement('div');
    div.className = 'step-item';
    div.innerHTML = `<div class="step-num">${i+1}</div><div>${step}</div>`;
    stepsList.appendChild(div);
  });

  document.getElementById('total-sets').textContent = ex.sets;
  document.getElementById('current-set').textContent = 1;
  const favBtn = document.getElementById('fav-btn');
  favBtn.textContent = state.favorites.includes(ex.id) ? '⭐ في المفضلة' : '⭐ أضف للمفضلة';

  setupTimer(ex.duration);
  document.getElementById('workout-modal').classList.remove('hidden');
}

function closeModal() {
  stopTimer();
  document.getElementById('workout-modal').classList.add('hidden');
  currentExercise = null;
}

// ===== TIMER =====
function setupTimer(seconds) {
  timerSeconds = seconds;
  timerTotal = seconds;
  updateTimerDisplay();
  updateTimerCircle(1);
  document.getElementById('timer-phase').textContent = 'جاهز';
  document.getElementById('start-btn').textContent = '▶';
  timerRunning = false;
}

function toggleTimer() {
  if (timerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  timerRunning = true;
  document.getElementById('start-btn').textContent = '⏸';
  document.getElementById('timer-phase').textContent = 'تمرين';
  timerInterval = setInterval(() => {
    timerSeconds--;
    updateTimerDisplay();
    updateTimerCircle(timerSeconds / timerTotal);
    if (timerSeconds <= 0) {
      clearInterval(timerInterval);
      timerRunning = false;
      onSetComplete();
    }
  }, 1000);
}

function pauseTimer() {
  timerRunning = false;
  clearInterval(timerInterval);
  document.getElementById('start-btn').textContent = '▶';
  document.getElementById('timer-phase').textContent = 'متوقف';
}

function stopTimer() {
  clearInterval(timerInterval);
  clearInterval(restInterval);
  timerRunning = false;
}

function resetTimer() {
  stopTimer();
  if (currentExercise) setupTimer(currentExercise.duration);
}

function skipPhase() {
  stopTimer();
  onSetComplete();
}

function updateTimerDisplay() {
  const m = Math.floor(timerSeconds / 60).toString().padStart(2,'0');
  const s = (timerSeconds % 60).toString().padStart(2,'0');
  document.getElementById('timer-val').textContent = `${m}:${s}`;
}

function updateTimerCircle(ratio) {
  const circumference = 326.7;
  const offset = circumference * (1 - ratio);
  document.getElementById('timer-circle').style.strokeDashoffset = offset;
}

function onSetComplete() {
  document.getElementById('timer-phase').textContent = 'أحسنت! 🎉';
  document.getElementById('start-btn').textContent = '▶';
  if (currentSet < currentExercise.sets) {
    showRestOverlay();
  }
}

function showRestOverlay() {
  document.getElementById('rest-overlay').classList.remove('hidden');
  let restSec = 30;
  document.getElementById('rest-timer').textContent = restSec;
  restInterval = setInterval(() => {
    restSec--;
    document.getElementById('rest-timer').textContent = restSec;
    if (restSec <= 0) {
      clearInterval(restInterval);
      skipRest();
    }
  }, 1000);
}

function skipRest() {
  clearInterval(restInterval);
  document.getElementById('rest-overlay').classList.add('hidden');
  currentSet++;
  document.getElementById('current-set').textContent = currentSet;
  if (currentExercise) setupTimer(currentExercise.duration);
  showToast(`💪 الجولة ${currentSet} من ${currentExercise.sets}`);
}

// ===== MARK COMPLETE =====
function markComplete() {
  if (!currentExercise) return;
  stopTimer();
  const ex = currentExercise;
  const now = new Date();
  const dateStr = now.toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' });

  state.totalWorkouts++;
  state.totalMinutes += Math.floor(ex.duration * ex.sets / 60) + 1;
  state.totalCalories += ex.calories * ex.sets;
  state.history.unshift({ name: ex.name, date: dateStr, muscle: ex.muscle, calories: ex.calories * ex.sets });
  if (state.history.length > 100) state.history.pop();

  updateStreakAfterWorkout();
  updateHeaderStats();
  renderProgress();
  saveState();

  showToast('✅ تمرين مكتمل! أحسنت 🎉');
  closeModal();
}

// ===== PROGRESS =====
function renderProgress() {
  document.getElementById('prog-total').textContent = state.totalWorkouts;
  document.getElementById('prog-streak').textContent = state.longestStreak;

  // Week count
  const weekAgo = new Date(Date.now() - 7*24*60*60*1000);
  const weekCount = state.history.filter(h => new Date(h.date) >= weekAgo).length;
  document.getElementById('prog-week').textContent = weekCount;

  // Month count
  const monthAgo = new Date(Date.now() - 30*24*60*60*1000);
  const monthCount = state.history.filter(h => new Date(h.date) >= monthAgo).length;
  document.getElementById('prog-month').textContent = monthCount;

  // Calendar
  const cal = document.getElementById('activity-calendar');
  cal.innerHTML = '';
  const activeDates = new Set(state.history.map(h => h.date));
  const todayStr = new Date().toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' });
  for (let i = 29; i >= 0; i--) {
    const d = new Date(Date.now() - i*24*60*60*1000);
    const dStr = d.toLocaleDateString('ar-EG', { year:'numeric', month:'long', day:'numeric' });
    const div = document.createElement('div');
    div.className = 'cal-day' + (activeDates.has(dStr) ? ' active' : '') + (i === 0 ? ' today' : '');
    div.title = dStr;
    div.textContent = d.getDate();
    cal.appendChild(div);
  }

  // History list
  const histList = document.getElementById('history-list');
  histList.innerHTML = '';
  state.history.slice(0, 20).forEach(h => {
    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <div>
        <div class="history-name">${h.name}</div>
        <div class="history-date">${h.date}</div>
      </div>
      <div class="history-badge">🔥 ${h.calories} سعرة</div>
    `;
    histList.appendChild(item);
  });

  if (state.history.length === 0) {
    histList.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text2)">لا يوجد سجل بعد. ابدأ تمرينك الأول!</div>';
  }
}

// ===== TAB SWITCHING =====
function switchTab(tab) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.remove('hidden');
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

  if (tab === 'favorites') renderFavorites();
  if (tab === 'progress') renderProgress();
}

// ===== NOTIFICATIONS =====
function toggleNotifications() {
  notificationsEnabled = !notificationsEnabled;
  document.getElementById('notif-icon').textContent = notificationsEnabled ? '🔔' : '🔕';
  if (notificationsEnabled) {
    if ('Notification' in window) {
      Notification.requestPermission().then(p => {
        if (p === 'granted') showToast('🔔 الإشعارات مفعّلة!');
        else showToast('تعذّر تفعيل الإشعارات');
      });
    }
    localStorage.setItem('hwp_notif', '1');
    showToast('🔔 سيتم تذكيرك يومياً بالتدريب');
  } else {
    localStorage.removeItem('hwp_notif');
    showToast('🔕 تم إيقاف الإشعارات');
  }
}

function checkNotificationTime() {
  notificationsEnabled = !!localStorage.getItem('hwp_notif');
  document.getElementById('notif-icon').textContent = notificationsEnabled ? '🔔' : '🔕';
  const h = new Date().getHours();
  if (notificationsEnabled && (h === 7 || h === 18)) {
    const lastShown = localStorage.getItem('hwp_notif_shown');
    const today = new Date().toDateString();
    if (lastShown !== today) {
      document.getElementById('notif-banner').classList.remove('hidden');
      document.getElementById('notif-text').textContent = h < 12 ? '🔔 صباح التمرين! حان وقتك اليومي 💪' : '🔔 مساء التمرين! لا تنسَ تمرينك 🔥';
      localStorage.setItem('hwp_notif_shown', today);
    }
  }
}

function dismissNotif() {
  document.getElementById('notif-banner').classList.add('hidden');
}

// ===== TOAST =====
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.remove('hidden');
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => toast.classList.add('hidden'), 2500);
}

// ===== EXPOSE GLOBALS =====
window.switchTab = switchTab;
window.toggleDark = toggleDark;
window.toggleNotifications = toggleNotifications;
window.filterMuscle = filterMuscle;
window.openExercise = openExercise;
window.closeModal = closeModal;
window.closeProgramModal = closeProgramModal;
window.startProgramWorkout = startProgramWorkout;
window.toggleTimer = toggleTimer;
window.resetTimer = resetTimer;
window.skipPhase = skipPhase;
window.skipRest = skipRest;
window.toggleFavorite = toggleFavorite;
window.markComplete = markComplete;
window.quickFav = quickFav;
window.dismissNotif = dismissNotif;
window.EXERCISES = EXERCISES;
