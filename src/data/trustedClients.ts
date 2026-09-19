export interface TrustedClient {
  id: string;
  name: {
    en: string;
    zh: string;
    ms: string;
  };
  shortName: string;
  category: {
    en: string;
    zh: string;
    ms: string;
  };
  logoUrl: string;
  printScope: {
    en: string;
    zh: string;
    ms: string;
  };
  badgeColor: string;
  isSvg?: boolean;
}

export const TRUSTED_CLIENTS: TrustedClient[] = [
  {
    id: 'sarawak-gov',
    shortName: 'Sarawak State Govt',
    name: {
      en: 'Sarawak State Government (Kerajaan Negeri Sarawak)',
      zh: '砂拉越州政府',
      ms: 'Kerajaan Negeri Sarawak'
    },
    category: {
      en: 'State Administration',
      zh: '州政府机关',
      ms: 'Pentadbiran Negeri'
    },
    logoUrl: '/clients/sarawak-gov.svg',
    printScope: {
      en: 'Official state publications, legislative reports & VIP presentation folios',
      zh: '官方宪报、部门施政报告及大型活动宣传品',
      ms: 'Warta rasmi kerajaan, laporan legislatif & bahan persidangan rasmi'
    },
    badgeColor: 'bg-amber-50 text-amber-900 border-amber-200',
    isSvg: true
  },
  {
    id: 'unimas',
    shortName: 'UNIMAS',
    name: {
      en: 'Universiti Malaysia Sarawak (UNIMAS)',
      zh: '砂拉越大学 (UNIMAS)',
      ms: 'Universiti Malaysia Sarawak (UNIMAS)'
    },
    category: {
      en: 'Public University',
      zh: '公立重点大学',
      ms: 'Universiti Awam'
    },
    logoUrl: '/clients/unimas.svg',
    printScope: {
      en: 'Convocation ceremonial booklets, academic peer journals & campus summit kits',
      zh: '毕业典礼手册、学术期刊、特辑及全校大型活动物料',
      ms: 'Buku program konvokesyen, jurnal akademik & bahan persidangan kampus'
    },
    badgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
    isSvg: true
  },
  {
    id: 'uitm',
    shortName: 'UiTM Sarawak',
    name: {
      en: 'Universiti Teknologi MARA (UiTM Sarawak)',
      zh: '玛拉工艺大学砂拉越分校 (UiTM)',
      ms: 'Universiti Teknologi MARA (UiTM Sarawak)'
    },
    category: {
      en: 'Public University',
      zh: '公立大学分校',
      ms: 'Universiti Awam'
    },
    logoUrl: '/clients/uitm.svg',
    printScope: {
      en: 'Faculty symposium proceedings, student handbooks & official graduation certificates',
      zh: '学术研讨会论文集、院系手册、毕业证书及精装讲义',
      ms: 'Prosiding simposium fakulti, buku panduan pelajar & sijil rasmi'
    },
    badgeColor: 'bg-purple-50 text-purple-900 border-purple-200',
    isSvg: true
  },
  {
    id: 'dbku',
    shortName: 'DBKU',
    name: {
      en: 'Commission of the City of Kuching North (DBKU)',
      zh: '古晋北市市政局 (DBKU)',
      ms: 'Dewan Bandaraya Kuching Utara (DBKU)'
    },
    category: {
      en: 'City Commission',
      zh: '城市市政局',
      ms: 'Pihak Berkuasa Tempatan'
    },
    logoUrl: '/clients/dbku.svg',
    printScope: {
      en: 'Civic publications, annual municipal masterplans & large-format campaign banners',
      zh: '社区治理刊物、年度市政规划报告及城市宣传横幅',
      ms: 'Penerbitan komuniti, laporan pelan induk tahunan & kain rentang kempen awam'
    },
    badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-200',
    isSvg: true
  },
  {
    id: 'mbks',
    shortName: 'MBKS',
    name: {
      en: 'Council of the City of Kuching South (MBKS)',
      zh: '古晋南市市政局 (MBKS)',
      ms: 'Majlis Bandaraya Kuching Selatan (MBKS)'
    },
    category: {
      en: 'City Council',
      zh: '城市市政局',
      ms: 'Pihak Berkuasa Tempatan'
    },
    logoUrl: '/clients/mbks.svg',
    printScope: {
      en: 'Kuching Festival collateral, council fiscal reports, zoning maps & official signage',
      zh: '古晋节大型活动物料、市议会年度财政报告及官方标牌',
      ms: 'Bahan promosi Festival Kuching, laporan tahunan majlis & papan tanda rasmi'
    },
    badgeColor: 'bg-cyan-50 text-cyan-900 border-cyan-200',
    isSvg: true
  },
  {
    id: 'centexs',
    shortName: 'CENTEXS',
    name: {
      en: 'Centre for Technology Excellence Sarawak (CENTEXS)',
      zh: '砂拉越科技卓越中心 (CENTEXS)',
      ms: 'Pusat Kecemerlangan Teknologi Sarawak (CENTEXS)'
    },
    category: {
      en: 'Technical Education',
      zh: '科技卓越培训中心',
      ms: 'Pusat Latihan Teknikal'
    },
    logoUrl: '/clients/centexs.svg',
    printScope: {
      en: 'Technical curriculum workbooks, graduation folders & digital economy summit suites',
      zh: '高新技能培训教材、毕业典礼特刊及数码峰会物料',
      ms: 'Modul latihan teknikal, buku graduasi & bahan persidangan digital'
    },
    badgeColor: 'bg-rose-50 text-rose-900 border-rose-200',
    isSvg: false
  },
  {
    id: 'mysed',
    shortName: 'MYSED',
    name: {
      en: 'Ministry of Youth, Sports and Entrepreneur Development Sarawak (MYSED)',
      zh: '砂拉越青年、体育与企业家发展部 (MYSED)',
      ms: 'Kementerian Belia, Sukan dan Pembangunan Usahawan Sarawak (MYSED)'
    },
    category: {
      en: 'State Ministry',
      zh: '州政府部委',
      ms: 'Kementerian Negeri'
    },
    logoUrl: '/clients/mysed.png',
    printScope: {
      en: 'Youth development initiatives, tournament programmes, grant manuals & event stagecraft',
      zh: '青年创新计划指南、砂拉越体育盛会物料、企业家扶持手册及活动展架',
      ms: 'Panduan inisiatif belia, bahan kejohanan sukan, buku geran keusahawanan & latar pentas'
    },
    badgeColor: 'bg-pink-50 text-pink-900 border-pink-200',
    isSvg: false
  }
];
