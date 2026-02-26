const supplements = [
  {
    id: 'vitamin-d',
    name: '비타민 D3 + K2 (MK-7)',
    ingredients: ['Vitamin D3', 'Vitamin K2'],
    purpose: '뼈 건강 유지, 면역 체계 지원(일반 보완용)',
    targetGoals: ['general', 'immunity', 'focus'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: 'D3 1000~2000 IU/일 + K2 50~120 μg/일 (제품 기준 라벨 우선)',
    scoreBase: 3,
    evidence: [
      '비타민 D 결핍과 골밀도/근육 기능 관련 다수 임상 연구에서의 효능은 연령·기저상태에 따라 다름',
      'K2는 칼슘 대사 조절에 대한 보조 근거가 축적되어 있어 병행 사용이 많은 가이드라인에서 다루어짐'
    ],
    contraindications: {
      medConflicts: ['warfarin', 'acenocoumarol', 'phenprocoumon'],
      conditionConflicts: ['kidney_stone_risk']
    },
    qualityFilters: ['third-party 테스트', 'IFOS 또는 USP 인증 우선'],
    products: {
      primary: {
        label: 'iHerb: Vitamin D3 with K2',
        link: 'https://kr.iherb.com/search?kw=Vitamin%20D3%20K2%20MK-7'
      },
      alternatives: [
        {
          label: 'iHerb: Vitamin D3 2000 IU',
          link: 'https://kr.iherb.com/search?kw=Vitamin%20D3%202000IU'
        },
        {
          label: 'iHerb: Vitamin K2 MK-7 100mcg',
          link: 'https://kr.iherb.com/search?kw=Vitamin%20K2%20MK-7%20100mcg'
        }
      ]
    }
  },
  {
    id: 'omega3',
    name: '오메가-3 (EPA/DHA)',
    ingredients: ['EPA', 'DHA'],
    purpose: '심혈관 대사/염증 반응 보완 및 회복 지원(일반 용도)',
    targetGoals: ['immunity', 'general', 'focus'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: 'EPA+DHA 합계 1000~2000mg/일, 식사와 함께',
    scoreBase: 4,
    evidence: [
      '오메가-3는 중성지방 개선과 일부 심혈관 지표 개선 근거가 있으나, 용량·대상군별 효과 차이가 큼',
      '임산부 및 항응고제 병용 시 출혈 위험/대량복용 주의 권고가 임상 문헌에서 반복됨'
    ],
    contraindications: {
      medConflicts: ['warfarin', 'clopidogrel', 'apixaban', 'rivaroxaban', 'dabigatran', 'aspirin'],
      conditionConflicts: ['bleeding_disorder']
    },
    qualityFilters: ['분자량 정화/분해 잔류물 검사(중금속/산패물질)', '분자체/IFOS 등급 우선'],
    products: {
      primary: {
        label: 'iHerb: Omega-3 Fish Oil 1000mg',
        link: 'https://kr.iherb.com/search?kw=Omega-3%20Fish%20Oil%201000mg'
      },
      alternatives: [
        {
          label: 'iHerb: Omega-3 1800mg',
          link: 'https://kr.iherb.com/search?kw=Omega-3%201800mg'
        },
        {
          label: 'iHerb: Vegan Omega-3',
          link: 'https://kr.iherb.com/search?kw=Vegan%20Omega-3'
        }
      ]
    }
  },
  {
    id: 'magnesium',
    name: '마그네슘 글리시네이트/트레오네이트',
    ingredients: ['Magnesium glycinate', 'Magnesium L-threonate'],
    purpose: '근육 긴장 완화, 수면/회복 보조',
    targetGoals: ['sleep', 'strength', 'general'],
    ageMin: 18,
    occupationFit: ['active', 'athlete', 'shift'],
    dose: '마그네슘 200~350mg/일(총량, 보충제+식이)',
    scoreBase: 5,
    evidence: [
      '마그네슘은 결핍 위험군에서 근골격 불편감, 수면 질/회복 관련 보조근거 존재',
      '제형별 흡수율 차이로 위장 부담이 적은 킬레이트형 제품이 일반적으로 선호됨'
    ],
    contraindications: {
      medConflicts: ['furosemide', 'laxative_mag', 'tetracycline', 'bisphosphonate'],
      conditionConflicts: ['kidney_disease'],
    },
    qualityFilters: ['무향미 무첨가 포맷 우선', '중금속/불순물 검사 정보 공개'],
    products: {
      primary: {
        label: 'iHerb: Magnesium Glycinate',
        link: 'https://kr.iherb.com/search?kw=Magnesium%20Glycinate'
      },
      alternatives: [
        {
          label: 'iHerb: Magnesium L-Threonate',
          link: 'https://kr.iherb.com/search?kw=Magnesium%20L-threonate'
        },
        {
          label: 'iHerb: Magnesium Citrate',
          link: 'https://kr.iherb.com/search?kw=Magnesium%20citrate'
        }
      ]
    }
  },
  {
    id: 'probiotic',
    name: '프로바이오틱(균주명 투명표기)',
    ingredients: ['Lactobacillus', 'Bifidobacterium'],
    purpose: '장내 환경 안정, 소화/면역 기반 보조',
    targetGoals: ['immunity', 'sleep', 'general'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: '제품 라벨 CFU 기준 권장량 준수(예: 5-20B CFU/일)',
    scoreBase: 2,
    evidence: [
      '프로바이오틱은 균주/도징/개인 상태에 따른 반응 편차가 커서 균주 투명성이 중요',
      '면역·소화 관련 지원 근거는 증상군별로 강도 차이 존재'
    ],
    contraindications: {
      medConflicts: [],
      conditionConflicts: ['immunosuppressed'],
    },
    qualityFilters: ['균주명 정량 표시', '제형/보관(냉장/실온) 명시', '실제 CFU 함량 표기'],
    products: {
      primary: {
        label: 'iHerb: Probiotic 10B CFU Lactobacillus',
        link: 'https://kr.iherb.com/search?kw=Probiotic%2010B%20CFU%20Lactobacillus'
      },
      alternatives: [
        {
          label: 'iHerb: Daily Probiotic 5B CFU',
          link: 'https://kr.iherb.com/search?kw=Probiotic%205B%20CFU'
        },
        {
          label: 'iHerb: Multi-strain Probiotic',
          link: 'https://kr.iherb.com/search?kw=multi-strain%20probiotic'
        }
      ]
    }
  },
  {
    id: 'vit-b12',
    name: '비타민 B12 (메틸코발아민)',
    ingredients: ['Vitamin B12'],
    purpose: '에너지 대사 보완(결핍 위험군 중심)',
    targetGoals: ['focus', 'general', 'strength'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: '25~500 μg/일(결핍 가능성 시 검증 기반 조절)',
    scoreBase: 3,
    evidence: [
      '노년층/채식주의자/흡수저해 약물 복용군에서 결핍이 빈번해 검증 기반 보충 권고',
      '대상군 분명히 분류한 경우에만 의학적으로 의미 있는 개선 효과 기대'
    ],
    contraindications: {
      medConflicts: ['chloramphenicol'],
      conditionConflicts: ['polycythemia']
    },
    qualityFilters: ['메틸코발아민 또는 메티코발아민', '표준화된 1정당 함량 표기'],
    products: {
      primary: {
        label: 'iHerb: Methylcobalamin Vitamin B12',
        link: 'https://kr.iherb.com/search?kw=Methylcobalamin%20Vitamin%20B12'
      },
      alternatives: [
        {
          label: 'iHerb: Cyanocobalamin 500mcg',
          link: 'https://kr.iherb.com/search?kw=Cyanocobalamin%20500mcg'
        },
        {
          label: 'iHerb: Active B12',
          link: 'https://kr.iherb.com/search?kw=Active%20B12'
        }
      ]
    }
  },
  {
    id: 'creatine',
    name: '크레아틴 모노하이드레이트',
    ingredients: ['Creatine monohydrate'],
    purpose: '운동 수행, 근력 트레이닝 지속성 보완',
    targetGoals: ['strength', 'general'],
    ageMin: 18,
    occupationFit: ['athlete', 'active'],
    dose: '3~5g/일(1일 1회), 수분 충분',
    scoreBase: 3,
    evidence: [
      '근력 훈련 수행 능력 및 고강도 단기 수행에 대한 비교적 안정적 근거 축적',
      '특정 신장질환·고질량단백질 제한 시 임상 모니터링 필요'
    ],
    contraindications: {
      medConflicts: ['nephrotoxic'],
      conditionConflicts: ['kidney_disease', 'dehydration_risk']
    },
    qualityFilters: ['무미네랄 첨가', '순도(Creatine monohydrate 99.5%+)'],
    products: {
      primary: {
        label: 'iHerb: Micronized Creatine Monohydrate',
        link: 'https://kr.iherb.com/search?kw=Micronized%20Creatine%20Monohydrate'
      },
      alternatives: [
        {
          label: 'iHerb: Creatine Creapure',
          link: 'https://kr.iherb.com/search?kw=Creatine%20Creapure'
        },
        {
          label: 'iHerb: Creatine HCl',
          link: 'https://kr.iherb.com/search?kw=Creatine%20HCl'
        }
      ]
    }
  }
];

const medAliases = {
  warfarin: ['warfarin', '쿠마딘'],
  acenocoumarol: ['acenocoumarol', '싱귤라'],
  phenprocoumon: ['phenprocoumon'],
  clopidogrel: ['clopidogrel', '플라빅스'],
  apixaban: ['apixaban', '엘리퀴스'],
  rivaroxaban: ['rivaroxaban', '자리스타'],
  dabigatran: ['dabigatran', '프라다실'],
  aspirin: ['aspirin', '아스피린'],
  furosemide: ['furosemide', '푸로세미드', '라식'],
  tetracycline: ['tetracycline', '테트라사이클린'],
  bisphosphonate: ['bisphosphonate', '알렌드로네이트', '리세드로네이트'],
  nephrotoxic: ['aminoglycoside', 'aminoglucoside', 'colchicine', 'colchicine'],
  immunosuppressed: ['immunosuppressant', '면역억제'],
  chloramphenicol: ['chloramphenicol']
};

const conditionAliases = {
  kidney_disease: ['신장', '콩팥', 'CKD', 'renal'],
  kidney_stone_risk: ['신장결석', '요로결석', '결석'],
  bleeding_disorder: ['출혈', '혈우병', '항응고', '항응고제'],
  dehydration_risk: ['탈수', '설사', '발한 과다'],
  polycythemia: ['폴리', '적혈구', '고적혈구'],
  immunosuppressed: ['면역억제', '항암', '항체치료', '조직이식', '면역저하']
};

function normalizeList(text) {
  return text
    .toLowerCase()
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
}

function findConflicts(inputArr, aliasMap) {
  const flat = new Set(inputArr);
  const keys = [];
  Object.entries(aliasMap).forEach(([key, arr]) => {
    if (arr.some(a => flat.has(a.toLowerCase()))) keys.push(key);
  });
  return keys;
}

function isConflict(item, medFlags, condFlags) {
  const meds = (item.contraindications.medConflicts || []).filter(Boolean);
  const conds = (item.contraindications.conditionConflicts || []).filter(Boolean);
  const badMeds = meds.some(m => medFlags.includes(m));
  const badConds = conds.some(c => condFlags.includes(c));
  return { bad: badMeds || badConds, reasons: { meds: meds.filter(m=>medFlags.includes(m)), conds: conds.filter(c=>condFlags.includes(c)) } };
}

function goalFit(item, goal, occupation, age) {
  if (age < item.ageMin) return false;
  if (!item.targetGoals.includes(goal)) return false;
  if (!item.occupationFit.includes(occupation)) return false;
  return true;
}

function relevanceScore(item, { age, goal, occupation, weight }) {
  let s = item.scoreBase;
  if (!goalFit(item, goal, occupation, age)) return -999;
  if (age >= 50) s += 1;
  if (weight > 90 && item.id === 'omega3') s += 1;
  if (occupation === 'athlete' && ['creatine', 'magnesium'].includes(item.id)) s += 1;
  if (goal === 'sleep' && item.id === 'magnesium') s += 2;
  if (goal === 'focus' && item.id === 'vit-b12') s += 1;
  return s;
}

function formatEvidence(evArr) {
  if (!evArr || evArr.length === 0) return '근거 데이터가 미비합니다.';
  return evArr.map(e => `<li>${e}</li>`).join('');
}

function renderWarnings(list) {
  const w = document.getElementById('warnings');
  if (!list.length) {
    w.innerHTML = '';
    return;
  }
  w.innerHTML = `<div class="warning"><strong>복용 주의</strong><ul>${list.map(x => `<li>${x}</li>`).join('')}</ul></div>`;
}

function renderResults(items) {
  const container = document.getElementById('results');
  if (!items.length) {
    container.innerHTML = '<div class="item">현재 입력 조건에서 안전-우선 추천 후보가 적습니다. 증상·약물 정보를 추가로 확인 후 재추천됩니다.</div>';
    return;
  }
  container.innerHTML = items.map(item => `
    <div class="item" data-id="${item.id}">
      <h3>${item.name}</h3>
      <div class="meta">
        <span class="badge">권장량: ${item.dose}</span>
        <span class="badge">안전성 점수: ${item.score.toFixed(1)}/10</span>
      </div>
      <div><strong>핵심 성분:</strong> ${item.ingredients.join(', ')}</div>
      <div><strong>간단 요약:</strong> ${item.purpose}</div>
      <button class="detail-btn" type="button" data-open="${item.id}">자세히 보기</button>
    </div>
  `).join('');
}

function openModal(itemId) {
  const item = supplements.find(x => x.id === itemId);
  if (!item) return;
  const modal = document.getElementById('detail-modal');
  const body = document.getElementById('modal-body');
  const alternativesHtml = (item.products.alternatives || [])
    .map(p => `<li><a href="${p.link}" target="_blank" rel="noopener">${p.label}</a></li>`)
    .join('');

  body.innerHTML = `
    <div>
      <div><strong>${item.name}</strong></div>
      <div class="meta" style="margin-top: 6px;"><span class="badge">권장량: ${item.dose}</span> <span class="badge">안전성 점수: ${item.score.toFixed(1)}/10</span></div>
      <div><strong>목적:</strong> ${item.purpose}</div>
      <div><strong>근거/유의문:</strong><ul>${formatEvidence(item.evidence)}</ul></div>
      <div><strong>품질 기준:</strong> <span>${item.qualityFilters.join(' · ')}</span></div>
      <div><strong>우선 추천:</strong> <a href="${item.products.primary.link}" target="_blank" rel="noopener">${item.products.primary.label}</a></div>
      <div><strong>재고 대체 추천:</strong>
        <ul>${alternativesHtml}</ul>
      </div>
      <p class="small">※ iHerb 재고는 시기에 따라 변동될 수 있으니, 대체 항목을 함께 확인해 주세요.</p>
    </div>
  `;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.getElementById('detail-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

function onSubmit(e) {
  e.preventDefault();
  const age = Number(document.getElementById('age').value || 0);
  const gender = document.getElementById('gender').value;
  const weight = Number(document.getElementById('weight').value || 0);
  const occupation = document.getElementById('occupation').value;
  const goal = document.getElementById('goal').value;
  const meds = normalizeList(document.getElementById('meds').value);
  const conditions = normalizeList(document.getElementById('conditions').value);

  if (!age || !gender || !weight) {
    alert('나이, 성별, 체중은 필수 입력입니다.');
    return;
  }

  const medFlags = findConflicts(meds, medAliases);
  const condFlags = findConflicts(conditions, conditionAliases);

  const candidateDetails = [];
  const warnings = [];

  if (medFlags.includes('warfarin') || condFlags.includes('bleeding_disorder')) {
    warnings.push('항응고/출혈 위험 약물/상태가 있어 고위험 조합(예: 오메가-3 고용량, 고함량 허브 혼합제) 제외 검토가 필요합니다.');
  }

  supplements.forEach(item => {
    const score = relevanceScore(item, { age, goal, occupation, weight });
    if (score < 0) return;

    const conf = isConflict(item, medFlags, condFlags);
    if (conf.bad) {
      const reasonText = [];
      if (conf.reasons.meds.length) reasonText.push(`약물 충돌: ${conf.reasons.meds.join(', ')}`);
      if (conf.reasons.conds.length) reasonText.push(`질환 충돌: ${conf.reasons.conds.join(', ')}`);
      warnings.push(`${item.name}는 ${reasonText.join(' / ')} 때문에 제외됩니다.`);
      return;
    }

    // Additional guardrails
    if (item.id === 'vitamin-d' && condFlags.includes('kidney_stone_risk')) {
      warnings.push('비타민 D는 칼슘 대사 질환/결석 위험이 있는 경우 의사 상담 필요.');
      return;
    }

    if (item.id === 'magnesium' && condFlags.includes('kidney_disease')) {
      warnings.push('신장질환에서 마그네슘 보충은 의사 확인 필요.');
      return;
    }

    item.score = Math.max(0, Math.min(10, score));
    candidateDetails.push(item);
  });

  candidateDetails.sort((a, b) => b.score - a.score);
  const finalList = candidateDetails.slice(0, 4);

  document.getElementById('status').innerText = `${gender} · ${age}세 · ${weight}kg · ${occupation} 직업군 · 목표 ${goal}`;
  renderWarnings(warnings);
  renderResults(finalList);
}

document.getElementById('profile-form').addEventListener('submit', onSubmit);

document.getElementById('reset-btn').addEventListener('click', () => {
  document.getElementById('profile-form').reset();
  document.getElementById('status').innerText = '초기화 되었습니다.';
  document.getElementById('warnings').innerHTML = '';
  document.getElementById('results').innerHTML = '';
});

document.getElementById('results').addEventListener('click', (e) => {
  const id = e.target?.dataset?.open;
  if (!id) return;
  openModal(id);
});

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('detail-modal').addEventListener('click', (e) => {
  if (e.target.dataset && e.target.dataset.close) closeModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
