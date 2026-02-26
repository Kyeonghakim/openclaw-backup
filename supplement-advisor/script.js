const supplements = [
  {
    id: 'vitamin-d',
    name: '비타민 D3 + K2 (MK-7)',
    ingredients: ['Vitamin D3', 'Vitamin K2'],
    purpose: '뼈·면역·근육 대사 지원',
    targetGoals: ['general', 'immunity', 'focus', 'skin', 'brain'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: 'D3 1000~2000 IU/일 + K2 50~120 μg/일(제품 라벨 기준)',
    scoreBase: 3,
    evidence: [
      '비타민 D 결핍 집단에서 근육 기능/면역 지표 개선 근거 존재',
      'K2는 뼈 대사와 칼슘 대사 조절에서 함께 고려되는 보조 영양소로 취급됨'
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
        { label: 'iHerb: Vitamin D3 2000 IU', link: 'https://kr.iherb.com/search?kw=Vitamin%20D3%202000IU' },
        { label: 'iHerb: Vitamin K2 MK-7 100mcg', link: 'https://kr.iherb.com/search?kw=Vitamin%20K2%20MK-7%20100mcg' }
      ]
    }
  },
  {
    id: 'omega3',
    name: '오메가-3 (EPA/DHA)',
    ingredients: ['EPA', 'DHA'],
    purpose: '염증 조절 및 운동 회복, 피부 건강 보조',
    targetGoals: ['immunity', 'general', 'focus', 'strength', 'skin'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: 'EPA+DHA 합계 1000~2000mg/일, 식사와 함께',
    scoreBase: 4,
    evidence: [
      '지질 지표 개선 근거가 있으며, 일부 연구에서 염증 완화 및 회복 지표 개선 보고',
      '고용량/항응고 동반 시 출혈 위험 관련 모니터 필요'
    ],
    contraindications: {
      medConflicts: ['warfarin', 'clopidogrel', 'apixaban', 'rivaroxaban', 'dabigatran', 'aspirin'],
      conditionConflicts: ['bleeding_disorder']
    },
    qualityFilters: ['분자량 정화/산패물질 검사', '분자체/IFOS 등급 우선'],
    products: {
      primary: {
        label: 'iHerb: Omega-3 Fish Oil 1000mg',
        link: 'https://kr.iherb.com/search?kw=Omega-3%20Fish%20Oil%201000mg'
      },
      alternatives: [
        { label: 'iHerb: Omega-3 1800mg', link: 'https://kr.iherb.com/search?kw=Omega-3%201800mg' },
        { label: 'iHerb: Vegan Omega-3', link: 'https://kr.iherb.com/search?kw=Vegan%20Omega-3' }
      ]
    }
  },
  {
    id: 'magnesium',
    name: '마그네슘 글리시네이트/트레오네이트',
    ingredients: ['Magnesium glycinate', 'Magnesium L-threonate'],
    purpose: '근육 긴장 완화, 수면/회복 보조',
    targetGoals: ['sleep', 'strength', 'general', 'focus', 'brain'],
    ageMin: 18,
    occupationFit: ['active', 'athlete', 'shift', 'sedentary'],
    dose: '마그네슘 200~350mg/일(총량 기준)',
    scoreBase: 5,
    evidence: [
      '수면 질 저하 또는 근육 긴장 호전에 대한 임상 근거가 비교적 일관적으로 관찰됨',
      '제형·용량 조절이 소화 편차에 영향을 줌'
    ],
    contraindications: {
      medConflicts: ['furosemide', 'laxative_mag', 'tetracycline', 'bisphosphonate'],
      conditionConflicts: ['kidney_disease']
    },
    qualityFilters: ['무향/부원료 단순형', '중금속 및 불순물 검사 공개'],
    products: {
      primary: {
        label: 'iHerb: Magnesium Glycinate',
        link: 'https://kr.iherb.com/search?kw=Magnesium%20Glycinate'
      },
      alternatives: [
        { label: 'iHerb: Magnesium L-Threonate', link: 'https://kr.iherb.com/search?kw=Magnesium%20L-threonate' },
        { label: 'iHerb: Magnesium Citrate', link: 'https://kr.iherb.com/search?kw=Magnesium%20citrate' }
      ]
    }
  },
  {
    id: 'probiotic',
    name: '프로바이오틱(균주명 투명표기)',
    ingredients: ['Lactobacillus', 'Bifidobacterium'],
    purpose: '장-면역-피부 축의 안정화 보조',
    targetGoals: ['immunity', 'sleep', 'general', 'skin', 'brain'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: '제품 라벨 CFU 기준(예: 5-20B CFU/일)',
    scoreBase: 2,
    evidence: [
      '개인 장내미생물 상태에 따라 반응 편차가 있어, 균주 투명성이 중요',
      '소화/면역 보조 목적으로 임상적으로 자주 사용하는 범주'
    ],
    contraindications: {
      medConflicts: [],
      conditionConflicts: ['immunosuppressed']
    },
    qualityFilters: ['균주명 정량표기', '냉장/실온 보관 명시'],
    products: {
      primary: {
        label: 'iHerb: Probiotic 10B CFU Lactobacillus',
        link: 'https://kr.iherb.com/search?kw=Probiotic%2010B%20CFU%20Lactobacillus'
      },
      alternatives: [
        { label: 'iHerb: Daily Probiotic 5B CFU', link: 'https://kr.iherb.com/search?kw=Probiotic%205B%20CFU' },
        { label: 'iHerb: Multi-strain Probiotic', link: 'https://kr.iherb.com/search?kw=multi-strain%20probiotic' }
      ]
    }
  },
  {
    id: 'vit-b12',
    name: '비타민 B12 (메틸코발아민)',
    ingredients: ['Vitamin B12'],
    purpose: '에너지 대사 및 신경계 보조',
    targetGoals: ['focus', 'general', 'strength', 'brain'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: '25~500 μg/일(결핍 의심 시 혈액검사 기반 조절)',
    scoreBase: 3,
    evidence: [
      '흡수저해 상태/채식군에서 결핍 보충의 근거가 상대적으로 명확',
      '일반 피로 호소에서 과잉 사용 시 과학적 이득은 제한적'
    ],
    contraindications: {
      medConflicts: ['chloramphenicol'],
      conditionConflicts: ['polycythemia']
    },
    qualityFilters: ['메틸코발아민 또는 메티코발아민', '정확 CFU/함량 표시(해당시)'],
    products: {
      primary: {
        label: 'iHerb: Methylcobalamin Vitamin B12',
        link: 'https://kr.iherb.com/search?kw=Methylcobalamin%20Vitamin%20B12'
      },
      alternatives: [
        { label: 'iHerb: Cyanocobalamin 500mcg', link: 'https://kr.iherb.com/search?kw=Cyanocobalamin%20500mcg' },
        { label: 'iHerb: Active B12', link: 'https://kr.iherb.com/search?kw=Active%20B12' }
      ]
    }
  },
  {
    id: 'creatine',
    name: '크레아틴 모노하이드레이트',
    ingredients: ['Creatine monohydrate'],
    purpose: '운동 수행력 및 근거리 반복력 보완',
    targetGoals: ['strength', 'general'],
    ageMin: 18,
    occupationFit: ['athlete', 'active'],
    dose: '3~5g/일(1일 1회), 수분 충분',
    scoreBase: 4,
    evidence: [
      '고강도 근력 과학에서 반복력·회복 지표 개선 근거가 상대적으로 강함',
      '개인 수분·신장 상태에 따라 모니터링 필요'
    ],
    contraindications: {
      medConflicts: ['nephrotoxic'],
      conditionConflicts: ['kidney_disease', 'dehydration_risk']
    },
    qualityFilters: ['99.5%+ 순도 표기', '첨가물 최소화'],
    products: {
      primary: {
        label: 'iHerb: Micronized Creatine Monohydrate',
        link: 'https://kr.iherb.com/search?kw=Micronized%20Creatine%20Monohydrate'
      },
      alternatives: [
        { label: 'iHerb: Creatine Creapure', link: 'https://kr.iherb.com/search?kw=Creatine%20Creapure' },
        { label: 'iHerb: Creatine HCl', link: 'https://kr.iherb.com/search?kw=Creatine%20HCl' }
      ]
    }
  },
  {
    id: 'vit-c',
    name: '비타민 C',
    ingredients: ['Vitamin C'],
    purpose: '항산화, 피부/면역 보조',
    targetGoals: ['skin', 'immunity', 'general'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: '250~1000 mg/일(나눠 복용 권장)',
    scoreBase: 2,
    evidence: [
      '결핍 예방/보충 목적이 명확하며, 과잉 섭취는 위장 부담 가능',
      '일반인군에서 고용량의 추가 이득은 개별적'
    ],
    contraindications: {
      medConflicts: [],
      conditionConflicts: ['kidney_stone_risk']
    },
    qualityFilters: ['순도/부원료 명시', '성분함량 라벨 정확'],
    products: {
      primary: {
        label: 'iHerb: Vitamin C 500mg',
        link: 'https://kr.iherb.com/search?kw=Vitamin%20C%20500mg'
      },
      alternatives: [
        { label: 'iHerb: Ascorbic acid 1000mg', link: 'https://kr.iherb.com/search?kw=Vitamin%20C%201000mg' },
        { label: 'iHerb: Buffered Vitamin C', link: 'https://kr.iherb.com/search?kw=buffered%20vitamin%20c' }
      ]
    }
  },
  {
    id: 'zinc',
    name: '아연',
    ingredients: ['Zinc'],
    purpose: '면역/피부/호르몬 대사 보조',
    targetGoals: ['skin', 'immunity', 'focus', 'general'],
    ageMin: 18,
    occupationFit: ['sedentary', 'active', 'shift', 'athlete'],
    dose: '8~15 mg/일(개인 결핍 확인 후 조절)',
    scoreBase: 2,
    evidence: [
      '아연은 미량요소로 면역·피부 회복 관련 보조로 자주 사용',
      '과량 복용 시 구리결핍, 메스꺼움 등의 부작용 우려'
    ],
    contraindications: {
      medConflicts: [],
      conditionConflicts: []
    },
    qualityFilters: ['아연 형태(피콜리네이트/글루콘산) 명시', '함량 일치'],
    products: {
      primary: {
        label: 'iHerb: Zinc Picolinate',
        link: 'https://kr.iherb.com/search?kw=Zinc%20picolinate'
      },
      alternatives: [
        { label: 'iHerb: Zinc gluconate', link: 'https://kr.iherb.com/search?kw=Zinc%20gluconate' },
        { label: 'iHerb: Zinc citrate', link: 'https://kr.iherb.com/search?kw=Zinc%20citrate' }
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
  nephrotoxic: ['aminoglycoside', 'colchicine'],
  immunosuppressant: ['면역억제', '항암'],
  chloramphenicol: ['chloramphenicol'],
  yaz: ['yaz', '야즈', '디트렌기', 'drospirenone', 'ethinyl estradiol'],
  ssri: ['ssri', 'escitalopram', 'paroxetine', 'fluoxetine', 'sertraline', 'citalopram', '아큐클로', '프로작', '젤브트라'],
  snii: ['수면', '졸피뎀', '에스조피클론', 'z-drug', 'xanax', 'lorazepam']
};

const conditionAliases = {
  kidney_disease: ['신장', '콩팥', 'CKD', 'renal'],
  kidney_stone_risk: ['신장결석', '요로결석', '결석'],
  bleeding_disorder: ['출혈', '혈우병', '항응고', '항응고제'],
  dehydration_risk: ['탈수', '설사', '발한 과다'],
  polycythemia: ['폴리', '적혈구', '고적혈구'],
  immunosuppressed: ['면역억제', '항암', '항체치료', '조직이식', '면역저하'],
  insomnia: ['불면', '수면장애', '잠못'],
  edema: ['부종', '하체 부종', '붓기']
};

// 사용자가 입력한 목표 항목/키워드가 어떤 성분군과 직접 연결되는지 매칭
const targetAliases = {
  'vitamin-d': ['vitamin d', '비타민 d', 'd3', 'k2'],
  'omega3': ['오메가3', '오메가-3', 'omega3', 'epa', 'dha', '피쉬오일'],
  'magnesium': ['마그네슘', 'magnesium'],
  'probiotic': ['유산균', 'probiotic', '프로바이오틱'],
  'vit-b12': ['비타민 b12', 'b12', '메틸코발라민', 'b군'],
  'vit-c': ['비타민 c', 'vitamin c', '아스코르브산'],
  'zinc': ['아연', 'zinc'],
  'creatine': ['크레아틴', 'creatine'],
  nmn: ['nmn', 'nicotinamide mononucleotide'],
  resveratrol: ['레스베라트롤', 'resveratrol'],
  theanine: ['테아닌', 'theanine', 'l-테아닌'],
  'sleep': ['수면', '불면', '숙면'],
  'brain': ['뇌', '인지', '기억', '집중', '역노화', 'anti aging', '항노화'],
  skin: ['피부', '재생', '피부회복'],
  edema: ['부종', '붓기', '종아리 부종', '하지부종'],
  uterus: ['자궁', '자궁건강', '월경', '생리'],
};

const explicitSupplementAliases = {
  'vitamin-d': ['비타민d', '비타민 d', 'vitd', 'vit d', 'd3', 'k2', '비타민d3'],
  'omega3': ['오메가3', '오메가-3', '오메가', 'omega3', '피쉬오일', 'epa', 'dha'],
  'magnesium': ['마그네슘', 'mg'],
  'probiotic': ['유산균', '프로바이오틱', 'probiotic'],
  'vit-b12': ['b12', '비타민b12', '비타민 b12', '메틸코발아민'],
  'vit-c': ['비타민c', '비타민 c', 'vc', '아스코르브산'],
  'zinc': ['아연', 'zinc'],
  'creatine': ['크레아틴', 'creatine'],
  nmn: ['nmn', '니코틴아마이드 모노뉴클레오타이드'],
  resveratrol: ['레스베라트롤', 'resveratrol'],
  theanine: ['테아닌', 'theanine', 'l-테아닌'],
};

function normalizeList(text) {
  return (text || '')
    .toLowerCase()
    .split(',')
    .map(s => s.trim())
    .filter(Boolean);
}

function findConflicts(inputArr, aliasMap) {
  const flat = new Set(inputArr);
  const keys = [];
  Object.entries(aliasMap).forEach(([key, arr]) => {
    if (arr.some((a) => flat.has(a.toLowerCase()))) keys.push(key);
  });
  return keys;
}

function findTargets(inputArr, aliasMap) {
  const flat = new Set(inputArr);
  const matched = [];
  const unknown = [];

  const matchedSet = new Set();
  Object.entries(aliasMap).forEach(([key, arr]) => {
    if (arr.some((a) => flat.has(a.toLowerCase()))) {
      if (!matchedSet.has(key)) {
        matched.push(key);
        matchedSet.add(key);
      }
    }
  });

  inputArr.forEach((raw) => {
    let covered = false;
    Object.entries(aliasMap).some(([key, arr]) => {
      if (arr.includes(raw)) {
        covered = true;
        return true;
      }
      return false;
    });
    if (!covered) unknown.push(raw);
  });

  return { matched, unknown };
}

function findExplicitSupplementTargets(inputArr) {
  const flat = new Set(inputArr);
  const matched = [];
  const unknown = [];

  Object.entries(explicitSupplementAliases).forEach(([id, words]) => {
    if (words.some((w) => flat.has(w.toLowerCase()))) {
      matched.push(id);
    }
  });

  inputArr.forEach((raw) => {
    const isKnown = Object.values(explicitSupplementAliases).some((arr) => arr.includes(raw));
    if (!isKnown && raw) unknown.push(raw);
  });

  return { matched: [...new Set(matched)], unknown };
}

function isConflict(item, medFlags, condFlags) {
  const meds = (item.contraindications.medConflicts || []).filter(Boolean);
  const conds = (item.contraindications.conditionConflicts || []).filter(Boolean);
  const badMeds = meds.some((m) => medFlags.includes(m));
  const badConds = conds.some((c) => condFlags.includes(c));
  return {
    bad: badMeds || badConds,
    reasons: {
      meds: meds.filter((m) => medFlags.includes(m)),
      conds: conds.filter((c) => condFlags.includes(c))
    }
  };
}

function goalFit(item, goal, occupation, age) {
  if (age < item.ageMin) return false;
  if (!item.targetGoals.includes(goal)) return false;
  if (!item.occupationFit.includes(occupation)) return false;
  return true;
}

function relevanceScore(item, profile, targetIds) {
  let s = item.scoreBase;
  if (!goalFit(item, profile.goal, profile.occupation, profile.age)) return -999;
  if (profile.age >= 50) s += 1;
  if (profile.weight > 90 && item.id === 'omega3') s += 1;
  if (profile.occupation === 'athlete' && ['creatine', 'magnesium'].includes(item.id)) s += 1;
  if (profile.goal === 'sleep' && item.id === 'magnesium') s += 2;
  if (profile.goal === 'focus' && item.id === 'vit-b12') s += 1;
  if (profile.goal === 'brain' && ['magnesium', 'omega3', 'vitamin-d'].includes(item.id)) s += 1;
  if (profile.gender === 'female' && ['omega3', 'magnesium', 'vitamin-d'].includes(item.id)) s += 0.4;

  // 사용자가 특정 성분/이슈를 넣으면 해당 항목 스코어 가산
  if (targetIds.includes(item.id)) s += 1.5;

  // 공통 키워드 기반 가산
  if (targetIds.includes('sleep') && item.id === 'magnesium') s += 0.8;
  if (targetIds.includes('brain') && ['omega3', 'magnesium', 'vitamin-d', 'vit-b12'].includes(item.id)) s += 0.6;
  if (targetIds.includes('skin') && ['vitamin-d', 'omega3', 'vit-c', 'zinc'].includes(item.id)) s += 0.6;
  if (targetIds.includes('edema') && ['magnesium', 'omega3', 'probiotic'].includes(item.id)) s += 0.4;

  return s;
}

function formatList(arr) {
  return arr.map((x) => `<li>${x}</li>`).join('');
}

const llmDefaults = {
  timeoutMs: 18000,
  maxItems: 6
};

let latestResultItems = [];

function setResultItems(items) {
  latestResultItems = items;
}

function getLlmConfig() {
  const useLlm = document.getElementById('llm-mode')?.checked;
  const endpoint = (document.getElementById('llm-endpoint')?.value || '').trim();
  const model = (document.getElementById('llm-model')?.value || '').trim();
  return { useLlm, endpoint, model };
}

function normalizeLLMResponse(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .map((item, index) => {
      const idBase = (item.id || item.name || `llm-item-${index + 1}`).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const id = supplements.find((s) => s.id === idBase)?.id || `llm-${idBase}`;
      const known = supplements.find((s) => s.id === idBase);

      return {
        ...known,
        id,
        name: item.name || (known ? known.name : 'LLM 추천 항목'),
        dose: item.dose || (known ? known.dose : '개별 제품 라벨 참조'),
        purpose: item.purpose || (known ? known.purpose : ''),
        ingredients: Array.isArray(item.ingredients) ? item.ingredients : known?.ingredients || [],
        evidence: Array.isArray(item.evidence) ? item.evidence : [`LLM 제안: ${item.reason || '근거 요약 없음'}`],
        qualityFilters: Array.isArray(item.qualityFilters) ? item.qualityFilters : ['제품 라벨 성분/함량 확인', '기타 부원료 민감군 회피'],
        products: {
          primary: {
            label: item.linkLabel || item.productLabel || (known?.products?.primary?.label || 'iHerb 검색 링크'),
            link: item.link || item.productLink || (known?.products?.primary?.link || '#')
          },
          alternatives: Array.isArray(item.alternatives)
            ? item.alternatives
            : known?.products?.alternatives || []
        },
        score: typeof item.score === 'number' ? item.score : 7,
        fromLlm: true,
        llmReason: item.reason || item.justification || ''
      };
    })
    .slice(0, llmDefaults.maxItems);
}

async function fetchLLMRecs(profile, medFlags, condFlags, targetFlags) {
  const config = getLlmConfig();
  if (!config.useLlm) return { ok: false, skipped: true };
  if (!config.endpoint) return { ok: false, skipped: true, error: 'LLM 엔드포인트가 비어있습니다.' };

  const payload = {
    profile,
    mode: document.querySelector('input[name="mode"]:checked')?.value || 'recommend',
    medFlags,
    condFlags,
    targetFlags,
    candidateCatalog: supplements.map((s) => ({
      id: s.id,
      name: s.name,
      ingredients: s.ingredients,
      purpose: s.purpose,
      scoreBase: s.scoreBase,
      targetGoals: s.targetGoals,
      contraindications: s.contraindications
    })),
    safetyNotes: [
      '반드시 신장/출혈/약물 충돌 체크는 앱 규칙을 따라 사전 필터링',
      '이 결과는 교육용 조합 제안이며 임상 판단 대체 불가'
    ],
    requestedCount: llmDefaults.maxItems,
    preferExplicitTargets: targetFlags
  };

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), llmDefaults.timeoutMs);

    const response = await fetch(config.endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    });
    clearTimeout(timeout);

    if (!response.ok) {
      return { ok: false, error: `LLM API 응답오류 (${response.status})` };
    }

    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      const match = text.match(/\{[\s\S]*\}/);
      if (match) {
        data = JSON.parse(match[0]);
      } else {
        return { ok: false, error: 'LLM 응답이 JSON 형식이 아닙니다.' };
      }
    }

    // OpenAI-style 응답 지원
    if (data?.choices && data.choices[0]?.message?.content) {
      const contentText = data.choices[0].message.content;
      try {
        data = JSON.parse(contentText);
      } catch {
        // text-only fallback: extract recommendations from bullets
        const items = contentText
          .split('\n')
          .map((line) => line.trim())
          .filter((line) => /^[-*•]/.test(line))
          .map((line) => ({ name: line.replace(/^[-*•]\s*/, ''), dose: '개별 라벨 참조' }));
        data = { recommendations: items };
      }
    }

    const rawList = Array.isArray(data?.recommendations)
      ? data.recommendations
      : [];
    if (!rawList.length) {
      return { ok: false, error: 'LLM 응답에 recommendations 항목이 없습니다.' };
    }

    const normalized = normalizeLLMResponse(rawList);
    return { ok: true, items: normalized, warnings: Array.isArray(data?.safetyWarnings) ? data.safetyWarnings : [] };
  } catch (err) {
    return { ok: false, error: err?.message || 'LLM 호출 실패' };
  }
}

function isInputAllowed(item, allergies) {
  if (!allergies.length) return true;
  const nameBlob = `${item.name} ${item.ingredients.join(' ')}`.toLowerCase();
  return !allergies.some((a) => nameBlob.includes(a));
}

function buildRuleBasedResult(profile) {
  const medFlags = findConflicts(profile.meds, medAliases);
  const condFlags = findConflicts(profile.conditions, conditionAliases);
  const targetMatch = findTargets(profile.targets, targetAliases);
  const explicitMatch = findExplicitSupplementTargets(profile.targets);
  const targetFlags = [...new Set([...targetMatch.matched, ...explicitMatch.matched])];

  const candidateDetails = [];
  const warnings = [];

  if (explicitMatch.matched.length) {
    warnings.push(`요청하신 영양제 키워드 중 다음 항목을 직접 반영해 우선순위를 높였습니다: ${explicitMatch.matched.join(', ')}.`);
  }

  if (!targetMatch.matched.length && profile.targets.length > 0) {
    warnings.push(`요청 항목 중 직접 매칭된 영양제가 적습니다: ${targetMatch.unknown.join(', ')}. 이 경우는 하단 '역노화/습관' 조언을 참고해 대체군으로 추천합니다.`);
  }

  supplements.forEach((item) => {
    if (!isInputAllowed(item, profile.allergies)) {
      warnings.push(`${item.name}는 알레르기/제한 사유로 제외했습니다.`);
      return;
    }

    const score = relevanceScore(item, profile, targetFlags);
    if (score < 0) return;

    const conf = isConflict(item, medFlags, condFlags);
    if (conf.bad) {
      const reasonText = [];
      if (conf.reasons.meds.length) reasonText.push(`약물 충돌: ${conf.reasons.meds.join(', ')}`);
      if (conf.reasons.conds.length) reasonText.push(`질환 충돌: ${conf.reasons.conds.join(', ')}`);
      warnings.push(`${item.name}는 ${reasonText.join(' / ')} 때문에 제외됩니다.`);
      return;
    }

    if (item.id === 'vitamin-d' && condFlags.includes('kidney_stone_risk')) {
      warnings.push('비타민 D/칼슘 대사 이슈: 결석 위험이 있으므로 의료진 확인 후 우선도 조정');
      return;
    }

    if (item.id === 'magnesium' && condFlags.includes('kidney_disease')) {
      warnings.push('신장질환 동반 시 마그네슘은 고용량 중단 후 조정 권장');
      return;
    }

    candidateDetails.push({
      ...item,
      score: Math.max(0, Math.min(10, score))
    });
  });

  candidateDetails.sort((a, b) => b.score - a.score);
  const finalList = candidateDetails.slice(0, llmDefaults.maxItems);

  return {
    medFlags,
    condFlags,
    targetFlags,
    targetMatch,
    explicitMatch,
    warnings: [...new Set(warnings)],
    finalList
  };
}

const reportStorageKey = 'supplement_protocol_reports_v1';
let lastAnalysisState = null;

function getSnapshotList() {
  try {
    return JSON.parse(localStorage.getItem(reportStorageKey) || '[]');
  } catch {
    return [];
  }
}

function saveSnapshot(entry) {
  const list = getSnapshotList();
  list.unshift(entry);
  const trimmed = list.slice(0, 6);
  localStorage.setItem(reportStorageKey, JSON.stringify(trimmed));
}

function clearNode(id) {
  const node = document.getElementById(id);
  if (node) node.innerHTML = '';
}

function renderSnapshotList() {
  const container = document.getElementById('snapshot-list');
  if (!container) return;

  const list = getSnapshotList();
  if (!list.length) {
    container.innerHTML = '<div>저장된 진단 기록이 없습니다.</div>';
    return;
  }

  container.innerHTML = list
    .map(
      (item, idx) => `
      <div class="snapshot-item">
        <div><strong>${item.title}</strong> · ${item.time}</div>
        <div class="small">모드: ${item.mode}, 목표: ${item.profile.goal}, 결과: ${item.mode === 'protocol' ? '프로토콜' : '추천'}${item.llmMode ? ' / LLM' : ''}</div>
        <button type="button" class="snapshot-load" data-idx="${idx}">불러와 재분석</button>
      </div>
    `
    )
    .join('');
}

function serializeProfileFromForm() {
  return {
    age: Number(document.getElementById('age').value || 0),
    gender: document.getElementById('gender').value,
    weight: Number(document.getElementById('weight').value || 0),
    occupation: document.getElementById('occupation').value,
    goal: document.getElementById('goal').value,
    sleepHours: Number(document.getElementById('sleepHours').value || 7.0),
    activityLevel: document.getElementById('activityLevel').value,
    meds: normalizeList(document.getElementById('meds').value),
    conditions: normalizeList(document.getElementById('conditions').value),
    targets: normalizeList(document.getElementById('targets').value),
    allergies: normalizeList(document.getElementById('allergies').value)
  };
}

function restoreProfile(profile) {
  document.getElementById('age').value = profile.age || '';
  document.getElementById('gender').value = profile.gender || '';
  document.getElementById('weight').value = profile.weight || '';
  document.getElementById('occupation').value = profile.occupation || 'sedentary';
  document.getElementById('goal').value = profile.goal || 'general';
  document.getElementById('sleepHours').value = profile.sleepHours || 7.0;
  document.getElementById('activityLevel').value = profile.activityLevel || 'moderate';
  document.getElementById('meds').value = (profile.meds || []).join(', ');
  document.getElementById('conditions').value = (profile.conditions || []).join(', ');
  document.getElementById('targets').value = (profile.targets || []).join(', ');
  document.getElementById('allergies').value = (profile.allergies || []).join(', ');
}

function renderWarnings(list) {
  const w = document.getElementById('warnings');
  if (!list.length) {
    w.innerHTML = '';
    return;
  }
  w.innerHTML = `<div class="warning"><strong>복용 주의</strong><ul>${formatList(list)}</ul></div>`;
}

function renderResultCards(items) {
  const container = document.getElementById('results');
  const protocol = document.getElementById('protocol');
  protocol.classList.add('hidden');
  setResultItems(items);

  if (!items.length) {
    container.innerHTML = '<div class="item">현재 입력 조건에서 안전-우선 추천 후보가 적습니다.</div>';
    return;
  }
  container.innerHTML = items
    .map(
      (item) => `
    <div class="item" data-id="${item.id}">
      <h3>${item.name}</h3>
      <div class="meta">
        <span class="badge">권장량: ${item.dose || '미지정'}</span>
        <span class="badge">안전성 점수: ${(typeof item.score === 'number' ? item.score : 7).toFixed(1)}/10</span>
      </div>
      <div><strong>핵심 성분:</strong> ${(item.ingredients || []).join(', ')}</div>
      <div><strong>요약:</strong> ${item.purpose || '요약 보류'}</div>
      <button class="detail-btn" type="button" data-open="${item.id}">자세히 보기</button>
      ${item.fromLlm && item.llmReason ? `<div class="small">LLM 근거: ${item.llmReason}</div>` : ''}
    </div>
  `
    )
    .join('');
}

function openModal(itemId) {
  const item = latestResultItems.find((x) => x.id === itemId) || supplements.find((x) => x.id === itemId);
  if (!item) return;
  const modal = document.getElementById('detail-modal');
  const body = document.getElementById('modal-body');
  const alternativesHtml = (item.products?.alternatives || [])
    .map((p) => `<li><a href="${p.link}" target="_blank" rel="noopener">${p.label}</a></li>`)
    .join('');
  const evidence = Array.isArray(item.evidence) && item.evidence.length ? item.evidence : ['기록된 근거가 없습니다.'];
  const qualityFilters = Array.isArray(item.qualityFilters) && item.qualityFilters.length ? item.qualityFilters : ['라벨/원산지 확인'];

  body.innerHTML = `
    <div>
      <div><strong>${item.name}</strong></div>
      <div class="meta" style="margin-top: 6px;"><span class="badge">권장량: ${item.dose || '미지정'}</span> <span class="badge">안전성 점수: ${(typeof item.score === 'number' ? item.score : 7).toFixed(1)}/10</span></div>
      <div><strong>목적:</strong> ${item.purpose || '요약 보류'}</div>
      <div><strong>근거:</strong><ul>${formatList(evidence)}</ul></div>
      <div><strong>품질 기준:</strong> ${qualityFilters.join(' · ')}</div>
      <div><strong>우선 추천:</strong> <a href="${item.products?.primary?.link || '#'}" target="_blank" rel="noopener">${item.products?.primary?.label || '상품 링크 준비중'}</a></div>
      <div><strong>재고 대체:</strong><ul>${alternativesHtml}</ul></div>
      ${item.llmReason ? `<p class="small">LLM 근거 메모: ${item.llmReason}</p>` : ''}
      <p class="small">※ iHerb 재고는 시기에 따라 변동될 수 있어 대체 항목 동시 확인 권장.</p>
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

function protocolSafety(profile, medFlags, condFlags, targetFlags) {
  const lines = [];
  if (medFlags.includes('yaz')) lines.push('Yaz(디스크로에르/에티닐에스트라디올) 복용 시: 칼륨 과다 섭취나 전해질 불균형 가능성에 주의(고칼륨 식이/보충제 중첩 피함).');
  if (medFlags.includes('ssri') || targetFlags.includes('ssri')) lines.push('정신과 약물/수면약 병용 가능성: 5-HTP, 고함량 아마도 세로토닌성 보조제는 피하고, L-테아닌/마그네슘은 낮은 용량부터 관찰 필요.');
  if (condFlags.includes('bleeding_disorder')) lines.push('출혈 경향 질환/항응고 동반: 오메가-3, 생약·고함량 비타민 E 등은 의료진 검토 후 사용');
  if (condFlags.includes('kidney_disease')) lines.push('신장질환 리스크: 마그네슘/크레아틴 사용은 용량 보수적 또는 중단 후 상담 권장.');
  if (condFlags.includes('kidney_stone_risk')) lines.push('신장결석 위험: 비타민 D/오메가-3 고용량은 개인 상태와 검사 수치에 따라 조절 필요.');
  if (condFlags.includes('edema')) lines.push('부종이 지속되면 의학적 검사(심부전/정맥류/갑상선/신장) 동시 점검이 우선입니다.');

  if (!lines.length) lines.push('현재 입력 기준, 주요 고위험 충돌은 크지 않지만 모든 스택은 개인 내약성 확인 후 단계적 시작 권장.');
  return lines;
}

function protocolStack(profile, items, medFlags) {
  const selected = [];
  const preferred = ['vitamin-d', 'magnesium', 'omega3', 'vit-b12', 'zinc', 'vit-c', 'probiotic', 'creatine'];
  const addIf = (id) => {
    const found = items.find((x) => x.id === id);
    if (found) selected.push(found);
  };

  preferred.forEach(addIf);

  const safety = {
    avoid: [],
    checkFirst: ['25(OH)D', 'CBC/혈색소', '전해질(Ca/K/Na/Mg)', '신장기능(eGFR)'],
    add: []
  };

  // Yaz 사용자는 마그네슘·B군·Zn을 핵심으로 강조
  if (medFlags.includes('yaz')) {
    safety.add.push('야즈 복용군은 일반적으로 B군, 마그네슘, 아연 결핍 경향을 선별적으로 체크하면 부작용 예방에 유리함.');
  }

  return { selected: selected.slice(0, 6), safety };
}

function protocolTimeline(profile) {
  const lateSleep = profile.sleepHours && profile.sleepHours < 7;
  return [
    ['기상', '물 400~600ml + 짧은 햇빛/가벼운 스트레칭', '수분-체액 리듬 정렬, 컨디션 기반 점검'],
    ['아침 식사', '단백질 25~35g + 저GI 탄수화물 + 채소', '혈당 스파이크 억제, 작업 집중 준비'],
    ['오전 업무', '50분마다 2~3분 기립/종아리 수축 20회', '하체 순환 지원 및 좌식 부종 완화'],
    ['운동일(운동 30~60분 전)', '저당 간식 + 시트룰린/크레아틴(운동 목표 시)', '근력 지구력 및 혈류 개선'],
    ['저녁', '자극성 낮은 식사 + 수분 분산', '회복/피부 합성/수면 유도'],
    ['취침 60분 전', '블루라이트 차단 + 호흡 4-7-8 3세트 + 마그네슘', '심박 안정/글림파틱 정리 기반 수면 준비']
  ];
}

function renderProtocol(profile, candidateDetails, warnings, medFlags, condFlags, targetFlags) {
  const safetyLines = protocolSafety(profile, medFlags, condFlags, targetFlags);
  const stackInfo = protocolStack(profile, candidateDetails, medFlags);
  const timeline = protocolTimeline(profile);

  const report = document.getElementById('protocol');
  const results = document.getElementById('results');
  results.innerHTML = '';
  document.getElementById('protocol').classList.remove('hidden');

  const stackRows = stackInfo.selected
    .map((it) => `<li><strong>${it.name}</strong> · ${it.dose} · ${it.purpose}</li>`)
    .join('');

  const timelineRows = timeline.map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('');

  const specialNotes = [];
  if (targetFlags.includes('nmn')) specialNotes.push('요청하신 NMN는 직접 데이터 항목이 없어서, 유사 성능/목적의 후보(항산화·대사/회복 성향)로 오메가-3, 비타민 D, 마그네슘 조합을 우선 제시합니다.');
  if (targetFlags.includes('resveratrol')) specialNotes.push('요청하신 레스베라트롤은 현재 항목 DB에 직접 수치가 없어, 항산화/피부 회복 관점에서는 비타민 C, 오메가-3, 아연 중심으로 대체 제안합니다.');
  if (targetFlags.includes('theanine')) specialNotes.push('요청하신 테아닌은 수면/긴장 완화 목적이므로 밤 루틴에서 카페인·블루라이트 관리, 호흡 루틴을 우선 강화하고, 마그네슘 200mg 미만으로 시작을 권장합니다.');

  const specialEdema = profile.gender === 'female'
    ? '<li>하체 부종: 90분마다 5분 기립 및 발목 펌프, 긴 바지/압박스타킹 대신 체액 순환 우선(혈액순환 문제 동반 시 의료평가)</li><li>자궁 건강: 갑작스런 월경량 변화·비정상 통증·두통이 반복되면 산부인과 선별</li>'
    : '<li>하체 부종: 염분 분산(한 번에 많은 나트륨 피함), 하체 순환 루틴 주기화</li>';

  report.innerHTML = `
    <div class="report-block">
      <h3>Safety Report</h3>
      <ul>${formatList(safetyLines)}</ul>
    </div>

    <div class="report-block">
      <h3>Custom Stack</h3>
      <ul>${stackRows || '<li>데이터가 부족해 우선 기본군에서 조정합니다.</li>'}</ul>
      <div class="small">의사 권고 확인 우선 항목: ${stackInfo.safety.checkFirst.join(', ')}</div>
      <div class="small">${stackInfo.safety.add.length ? stackInfo.safety.add.join(' · ') : '추가로 B군/마그네슘/아연 우선선별 테스트 병행 권장'}</div>
    </div>

    <div class="report-block">
      <h3>Daily Timeline (24h)</h3>
      <table>
        <thead><tr><th>시간</th><th>행동</th><th>목적</th></tr></thead>
        <tbody>${timelineRows}</tbody>
      </table>
    </div>

    <div class="report-block">
      <h3>Special Solution</h3>
      <ul>${specialEdema}${specialNotes.length ? '<li>' + specialNotes.join('</li><li>') + '</li>' : ''}</ul>
    </div>

    <div class="report-block">
      <h3>Final Advice</h3>
      <p>가장 중요한 것은 스택 수보다 일관성입니다. 첫 주는 1~2개 성분만 시작하고, 불면·심박·기분 변화를 기록하세요. 이 앱은 경향성 추천이며, 최종 용량·병용은 검사 기반으로 조정해야 합니다.</p>
    </div>

    <div class="report-block">
      <h3>주의 경고</h3>
      <ul>${warnings.length ? formatList(warnings) : '<li>현재 상태에서는 중대한 충돌 신호 없음. 그러나 신규 약물/증상 변화 시 즉시 재평가.</li>'}</ul>
    </div>
  `;

  return {
    title: `프로토콜 리포트 · ${profile.age}세 ${profile.gender}`,
    safety: safetyLines,
    stack: stackRows,
    timeline: timelineRows,
    special: specialEdema,
    advice: '가장 중요한 것은 스택 수보다 일관성입니다. 첫 주는 1~2개 성분만 시작하고, 불면·심박·기분 변화를 기록하세요. 이 앱은 경향성 추천이며, 최종 용량·병용은 검사 기반으로 조정해야 합니다.',
    warnings
  };
}

function printCurrentReport(profile, mode, medFlags, condFlags, targetFlags, finalList, warnings, statusText) {
  const data = mode === 'protocol'
    ? renderProtocol(profile, finalList, warnings, medFlags, condFlags, targetFlags)
    : {
      title: `추천 모드 리포트 · ${profile.age}세 ${profile.gender}`,
      safety: warnings,
      stack: finalList.map((i) => `${i.name} ${i.dose}`),
      timeline: [],
      special: [],
      advice: '추천모드 결과를 바탕으로 단계적으로 1~2개씩 추가하세요.',
      warnings
    };

  const pageTitle = '보건 최적화 1페이지 리포트';
  const meta = [
    `성별: ${profile.gender}`,
    `나이: ${profile.age}세`,
    `체중: ${profile.weight}kg`,
    `목표: ${profile.goal}`
  ].join(' · ');

  const html = `
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>${pageTitle}</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; padding: 18px; color: #111827; }
          .title { font-size: 20px; margin: 0 0 8px; }
          .muted { color: #4b5563; font-size: 12px; margin-bottom: 14px; }
          .section { border: 1px solid #d9e2ee; border-radius: 8px; padding: 8px 10px; margin-bottom: 10px; }
          h3 { margin: 0 0 8px; }
          ul { margin: 0 0 0 18px; }
          table { width:100%; border-collapse: collapse; font-size: 13px; }
          th, td { border: 1px solid #d9e2ee; padding: 6px; text-align:left; }
          th { background: #eef2ff; }
          @page { size: A4; margin: 12mm; }
        </style>
      </head>
      <body>
        <h1 class="title">${pageTitle}</h1>
        <div class="muted">${meta} · ${statusText}</div>
        <div class="section"><h3>Safety Report</h3><ul>${formatList(mode === 'protocol' ? data.safety : warnings)}</ul></div>
        <div class="section"><h3>Custom Stack</h3><ul>${mode === 'protocol'
          ? data.stack
          : finalList.map((i) => `<li>${i.name} · ${i.dose}</li>`).join('') || '<li>해당 없음</li>'}
        </ul></div>
        ${data.timeline ? `<div class="section"><h3>Daily Timeline (24h)</h3><table><thead><tr><th>시간</th><th>행동</th><th>목적</th></tr></thead><tbody>${typeof data.timeline === 'string' ? data.timeline : timelineRowsToHtml(finalList)}</tbody></table></div>` : ''}
        <div class="section"><h3>Special Solution</h3><ul>${mode === 'protocol' ? data.special : '<li>일반 모드에서는 특이 솔루션이 생략됩니다.</li>'}</ul></div>
        <div class="section"><h3>Final Advice</h3><p>${data.advice}</p></div>
      </body>
    </html>
  `;
  const w = window.open('', '_blank');
  w.document.write(html);
  w.document.close();
  w.focus();
  w.print();
}

function timelineRowsToHtml(finalList) {
  if (!Array.isArray(finalList) || !finalList.length) return '<tr><td colspan="3">데이터 없음</td></tr>';
  const profile = serializeProfileFromForm();
  return protocolTimeline(profile).map((r) => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('');
}

async function onSubmit(e) {
  e.preventDefault();
  const mode = document.querySelector('input[name="mode"]:checked')?.value || 'recommend';
  const profile = serializeProfileFromForm();

  if (!profile.age || !profile.gender || !profile.weight) {
    alert('나이, 성별, 체중은 필수입니다.');
    return;
  }

  const base = buildRuleBasedResult(profile);
  let finalList = [...base.finalList];
  const warnings = [...base.warnings];

  const cfg = getLlmConfig();
  if (cfg.useLlm) {
    const llm = await fetchLLMRecs(profile, base.medFlags, base.condFlags, base.targetFlags);
    if (llm.ok && Array.isArray(llm.items) && llm.items.length) {
      const byId = new Set(finalList.map((x) => x.id));
      const merged = [...llm.items];
      finalList.forEach((item) => {
        if (!byId.has(item.id) && merged.length < llmDefaults.maxItems) {
          merged.push(item);
          byId.add(item.id);
        }
      });
      finalList = merged.slice(0, llmDefaults.maxItems);
      if (Array.isArray(llm.warnings) && llm.warnings.length) {
        warnings.push(...llm.warnings.map((x) => `LLM: ${x}`));
      }
      warnings.push('LLM 기반 결과를 반영해 순위를 재정렬했습니다.');
    } else {
      warnings.push(`LLM 동작 안함: ${llm.error || '구성 상태 확인 후 규칙 기반으로 전환합니다.'}`);
    }
  }

  const uniqueWarnings = [...new Set(warnings)];
  document.getElementById('status').innerText = `${profile.gender} · ${profile.age}세 · ${profile.weight}kg · ${profile.occupation} 직군 · 목표 ${profile.goal}`;
  renderWarnings(uniqueWarnings);

  if (mode === 'protocol') {
    renderProtocol(profile, finalList, uniqueWarnings, base.medFlags, base.condFlags, base.targetFlags);
  } else {
    renderResultCards(finalList);
    document.getElementById('protocol').classList.add('hidden');
    const protocolSection = document.getElementById('protocol');
    protocolSection.innerHTML = '';
  }

  setResultItems(finalList);

  const snapshot = {
    title: `${profile.goal}·${mode} · ${profile.age}세 ${profile.gender}`,
    time: new Date().toLocaleString(),
    mode,
    profile,
    selected: finalList.map((s) => ({ id: s.id, name: s.name, dose: s.dose, purpose: s.purpose, fromLlm: !!s.fromLlm })),
    status: document.getElementById('status').innerText,
    warnings: uniqueWarnings.slice(0, 6),
    medFlags: base.medFlags,
    condFlags: base.condFlags,
    targetFlags: base.targetFlags,
    llmMode: !!cfg.useLlm
  };
  lastAnalysisState = { ...snapshot, recommendations: finalList };
  saveSnapshot(snapshot);
  renderSnapshotList();
}

document.getElementById('profile-form').addEventListener('submit', onSubmit);

document.getElementById('reset-btn').addEventListener('click', () => {
  document.getElementById('profile-form').reset();
  document.getElementById('status').innerText = '초기화 되었습니다.';
  document.getElementById('warnings').innerHTML = '';
  document.getElementById('results').innerHTML = '';
  const report = document.getElementById('protocol');
  report.innerHTML = '';
  report.classList.add('hidden');
  lastAnalysisState = null;
  setResultItems([]);
});

document.getElementById('results').addEventListener('click', (e) => {
  const id = e.target?.dataset?.open;
  if (!id) return;
  openModal(id);
});

document.getElementById('llm-mode')?.addEventListener('change', (e) => {
  const checked = e.target.checked;
  document.getElementById('llm-config').style.opacity = checked ? '1' : '0.45';
  document.getElementById('llm-endpoint').disabled = !checked;
  document.getElementById('llm-model').disabled = !checked;
});
document.getElementById('snapshot-list')?.addEventListener('click', (e) => {
  const idx = e.target?.dataset?.idx;
  if (!idx) return;
  const list = getSnapshotList();
  const item = list[Number(idx)];
  if (!item?.profile) return;
  restoreProfile(item.profile);
  const form = document.getElementById('profile-form');
  form.requestSubmit?.() || form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
});

document.getElementById('snapshot-btn')?.addEventListener('click', () => {
  if (!lastAnalysisState) {
    alert('저장 가능한 결과가 없습니다. 먼저 "분석 시작"을 눌러 분석을 실행해 주세요.');
    return;
  }
  saveSnapshot({
    ...lastAnalysisState,
    time: new Date().toLocaleString()
  });
  renderSnapshotList();
  alert('현재 진단 결과를 저장했습니다.');
});

document.getElementById('pdf-btn')?.addEventListener('click', () => {
  const mode = document.querySelector('input[name="mode"]:checked')?.value || 'protocol';

  if (!lastAnalysisState || !lastAnalysisState.profile) {
    alert('보고서가 없습니다. 먼저 "분석 시작"을 눌러 최신 추천을 먼저 만들어 주세요.');
    return;
  }

  const profile = lastAnalysisState.profile;
  const finalList = (lastAnalysisState.recommendations || []).slice(0, llmDefaults.maxItems);
  const statusText = `${profile.gender} · ${profile.age}세 · ${profile.weight}kg · ${profile.occupation} 직군 · 목표 ${profile.goal}`;
  printCurrentReport(profile, mode, lastAnalysisState.medFlags || findConflicts(profile.meds, medAliases), lastAnalysisState.condFlags || findConflicts(profile.conditions, conditionAliases), lastAnalysisState.targetFlags || [], finalList, lastAnalysisState.warnings || [], statusText);
});

document.getElementById('modal-close').addEventListener('click', closeModal);

document.getElementById('detail-modal').addEventListener('click', (e) => {
  if (e.target.dataset && e.target.dataset.close) closeModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

const modeInputs = document.querySelectorAll('input[name="mode"]');
modeInputs.forEach((node) =>
  node.addEventListener('change', () => {
    const protocolVisible = document.querySelector('input[name="mode"]:checked').value === 'protocol';
    document.getElementById('results').style.display = protocolVisible ? 'none' : 'block';
  })
);

renderSnapshotList();
(() => {
  const protocolVisible = document.querySelector('input[name="mode"]:checked')?.value === 'protocol';
  document.getElementById('results').style.display = protocolVisible ? 'none' : 'block';
  const llmMode = document.getElementById('llm-mode');
  if (llmMode) {
    document.getElementById('llm-config').style.opacity = llmMode.checked ? '1' : '0.45';
    document.getElementById('llm-endpoint').disabled = !llmMode.checked;
    document.getElementById('llm-model').disabled = !llmMode.checked;
  }
})();
