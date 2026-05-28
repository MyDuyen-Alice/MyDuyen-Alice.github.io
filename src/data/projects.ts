import type { Lang } from '../i18n/ui';

export type ProjectStatus = 'planned' | 'inProgress' | 'completed';

export interface Project {
  slug: string;
  title: Record<Lang, string>;
  tagline: Record<Lang, string>;
  description: Record<Lang, string>;
  techStack: string[];
  status: ProjectStatus;
  repoUrl: string | null;
  demoUrl: string | null;
  highlights: Record<Lang, string[]>;
}

export const projects: Project[] = [
  {
    slug: 'retail-sales-dashboard',
    title: {
      vi: 'Dashboard Hiệu suất Bán lẻ',
      en: 'Retail Sales Performance Dashboard',
    },
    tagline: {
      vi: 'Phân tích doanh số bán lẻ bằng SQL + Power BI, ra khuyến nghị business.',
      en: 'Retail sales analysis with SQL + Power BI, ending in business recommendations.',
    },
    description: {
      vi: 'Phân tích dữ liệu bán lẻ end-to-end: làm sạch và chuẩn hoá bằng SQL/Power Query, xây dựng dashboard Power BI nhiều trang (revenue trend, product performance, regional breakdown) với DAX measures, và rút ra khuyến nghị hành động cho ban lãnh đạo.',
      en: 'End-to-end retail sales analysis: clean and shape data with SQL/Power Query, build a multi-page Power BI dashboard (revenue trend, product performance, regional breakdown) with DAX measures, and deliver actionable recommendations for leadership.',
    },
    techStack: ['SQL', 'Power BI', 'DAX', 'Power Query', 'Excel'],
    status: 'inProgress',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'Làm sạch & mô hình hóa dữ liệu với SQL + Power Query',
        'DAX measures: Total Revenue, YoY Growth %, Profit Margin',
        'Dashboard Power BI nhiều trang, interactive filter/slicer',
        'Insight nghiệp vụ kèm khuyến nghị hành động',
      ],
      en: [
        'Data cleaning & modeling with SQL + Power Query',
        'DAX measures: Total Revenue, YoY Growth %, Profit Margin',
        'Multi-page interactive Power BI dashboard with slicers',
        'Business insights with actionable recommendations',
      ],
    },
  },
  {
    slug: 'customer-segmentation-rfm',
    title: {
      vi: 'Phân khúc Khách hàng (RFM)',
      en: 'Customer Segmentation (RFM)',
    },
    tagline: {
      vi: 'Phân khúc khách hàng theo Recency–Frequency–Monetary bằng SQL + Python.',
      en: 'Segment customers by Recency–Frequency–Monetary with SQL + Python.',
    },
    description: {
      vi: 'Tính điểm RFM cho từng khách hàng từ lịch sử giao dịch, chia thành các nhóm (Champions, Loyal, At-risk, Lost…) và đề xuất chiến lược marketing phù hợp cho mỗi nhóm. Trực quan hóa kết quả bằng dashboard.',
      en: 'Compute RFM scores per customer from transaction history, group into segments (Champions, Loyal, At-risk, Lost…), and recommend a tailored marketing strategy per segment. Visualize the result in a dashboard.',
    },
    techStack: ['SQL', 'Python', 'pandas', 'Power BI'],
    status: 'planned',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'Tính RFM score bằng SQL window functions',
        'Phân nhóm khách hàng + profile từng segment',
        'Đề xuất chiến lược marketing theo segment',
        'Dashboard trực quan kết quả phân khúc',
      ],
      en: [
        'RFM scoring with SQL window functions',
        'Customer segmentation + per-segment profiling',
        'Marketing strategy recommendations per segment',
        'Dashboard visualizing the segmentation',
      ],
    },
  },
  {
    slug: 'hr-attrition-dashboard',
    title: {
      vi: 'Dashboard Phân tích Nghỉ việc (HR)',
      en: 'HR Attrition Dashboard',
    },
    tagline: {
      vi: 'Phân tích yếu tố dẫn tới nghỉ việc bằng Power BI.',
      en: 'Analyze drivers of employee attrition with Power BI.',
    },
    description: {
      vi: 'Phân tích descriptive trên dữ liệu nhân sự: tỷ lệ nghỉ việc theo phòng ban, thâm niên, mức lương, overtime. Dashboard Power BI giúp HR xác định nhóm rủi ro cao và nguyên nhân chính.',
      en: 'Descriptive analysis on HR data: attrition rate by department, tenure, salary, overtime. A Power BI dashboard helps HR spot high-risk groups and key drivers.',
    },
    techStack: ['Power BI', 'DAX', 'Excel'],
    status: 'planned',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'KPI cards: attrition rate, headcount, avg tenure',
        'Breakdown theo phòng ban / thâm niên / lương',
        'Highlight nhóm rủi ro cao bằng conditional formatting',
        'Insight cho team HR giảm turnover',
      ],
      en: [
        'KPI cards: attrition rate, headcount, avg tenure',
        'Breakdown by department / tenure / salary',
        'Highlight high-risk groups with conditional formatting',
        'Insights for HR to reduce turnover',
      ],
    },
  },
  {
    slug: 'marketing-funnel-analysis',
    title: {
      vi: 'Phân tích Phễu Marketing',
      en: 'Marketing Funnel & Conversion Analysis',
    },
    tagline: {
      vi: 'Đo conversion qua các bước phễu bằng SQL + Excel.',
      en: 'Measure conversion through funnel stages with SQL + Excel.',
    },
    description: {
      vi: 'Phân tích phễu chuyển đổi (impression → click → add-to-cart → purchase), tính conversion rate mỗi bước, xác định bước rò rỉ lớn nhất và so sánh hiệu quả các kênh marketing.',
      en: 'Analyze the conversion funnel (impression → click → add-to-cart → purchase), compute stage conversion rates, identify the biggest drop-off, and compare marketing channel performance.',
    },
    techStack: ['SQL', 'Excel', 'Google Sheets'],
    status: 'planned',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'Conversion rate từng bước phễu',
        'Xác định bước rò rỉ (drop-off) lớn nhất',
        'So sánh hiệu quả kênh marketing',
        'Khuyến nghị tối ưu conversion',
      ],
      en: [
        'Stage-by-stage funnel conversion rates',
        'Identify the biggest drop-off point',
        'Compare marketing channel performance',
        'Recommendations to optimize conversion',
      ],
    },
  },
];

export const skills = {
  'Languages & Query': ['SQL', 'Python'],
  'BI & Visualization': ['Power BI', 'DAX', 'Excel', 'Google Sheets'],
  'Data Wrangling': ['pandas', 'SQL (CTE, window functions)', 'Power Query'],
  Analytics: ['RFM', 'Cohort analysis', 'Funnel analysis', 'KPI design'],
  Tools: ['Git', 'GitHub', 'Jupyter'],
};

export const timeline: Array<{ date: string; vi: string; en: string }> = [
  {
    date: '2026-05',
    vi: 'Bắt đầu hành trình Data Analytics, xây dựng portfolio và các dự án phân tích thực tế (SQL + Power BI).',
    en: 'Started the Data Analytics journey, building this portfolio and real-world analysis projects (SQL + Power BI).',
  },
  {
    date: '2026-04',
    vi: 'Học Power BI & Excel nâng cao: DAX, Power Query, PivotTable, dashboard design.',
    en: 'Learned Power BI & advanced Excel: DAX, Power Query, PivotTables, dashboard design.',
  },
  {
    date: '2026-03',
    vi: 'Học SQL cho phân tích: JOIN, GROUP BY, CTE, window functions; Python/pandas để làm sạch dữ liệu.',
    en: 'Learned SQL for analysis: JOIN, GROUP BY, CTE, window functions; Python/pandas for data cleaning.',
  },
];
