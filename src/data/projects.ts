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
    slug: 'customer-churn-prediction',
    title: {
      vi: 'Dự đoán Customer Churn',
      en: 'Customer Churn Prediction',
    },
    tagline: {
      vi: 'EDA + classification model end-to-end, deploy bằng Streamlit.',
      en: 'End-to-end EDA + classification model, deployed with Streamlit.',
    },
    description: {
      vi: 'Phân tích dữ liệu khách hàng telecom (~7K records), thực hiện EDA, feature engineering, so sánh 5+ thuật toán (Logistic Regression, Random Forest, XGBoost, LightGBM), tune hyperparameter và deploy mô hình tốt nhất thành web app Streamlit cho phép input thông tin khách hàng và dự đoán xác suất churn.',
      en: 'Analyze a telecom customer dataset (~7K rows), run EDA, feature engineering, benchmark 5+ algorithms (Logistic Regression, Random Forest, XGBoost, LightGBM), tune hyperparameters, and deploy the best model as a Streamlit web app that takes customer attributes and predicts churn probability.',
    },
    techStack: [
      'Python',
      'pandas',
      'scikit-learn',
      'XGBoost',
      'LightGBM',
      'SHAP',
      'Streamlit',
      'matplotlib',
      'seaborn',
    ],
    status: 'planned',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'EDA chi tiết với 15+ visualizations, kiểm định giả thiết thống kê',
        'Feature engineering: encoding, scaling, interaction features',
        'Cross-validation + hyperparameter tuning (GridSearch, Optuna)',
        'Model interpretation với SHAP values',
        'Demo live trên Streamlit Cloud',
      ],
      en: [
        'Detailed EDA with 15+ visualizations and hypothesis tests',
        'Feature engineering: encoding, scaling, interaction features',
        'Cross-validation + hyperparameter tuning (GridSearch, Optuna)',
        'Model interpretation with SHAP values',
        'Live demo on Streamlit Cloud',
      ],
    },
  },
  {
    slug: 'sentiment-analysis-nlp',
    title: {
      vi: 'Phân tích cảm xúc bình luận sản phẩm',
      en: 'Product Review Sentiment Analysis',
    },
    tagline: {
      vi: 'NLP pipeline so sánh TF-IDF baseline với fine-tuned BERT.',
      en: 'NLP pipeline comparing TF-IDF baseline against fine-tuned BERT.',
    },
    description: {
      vi: 'Xây dựng pipeline phân tích cảm xúc trên dataset bình luận sản phẩm (Amazon reviews). So sánh baseline truyền thống (TF-IDF + Logistic Regression) với mô hình fine-tuned BERT từ HuggingFace. Phân tích error cases, vẽ confusion matrix, và xuất report dạng notebook chuyên nghiệp.',
      en: 'Build a sentiment analysis pipeline on a product review dataset (Amazon reviews). Compare a classical baseline (TF-IDF + Logistic Regression) against a fine-tuned BERT model from HuggingFace. Analyze error cases, plot confusion matrices, and ship a professional notebook report.',
    },
    techStack: [
      'Python',
      'HuggingFace Transformers',
      'PyTorch',
      'scikit-learn',
      'NLTK',
      'pandas',
      'Gradio',
    ],
    status: 'planned',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'Text preprocessing: tokenization, lemmatization, stopwords',
        'Baseline TF-IDF + Logistic Regression đạt F1 ~0.85',
        'Fine-tune BERT với HuggingFace Trainer API',
        'Error analysis chi tiết, identify edge cases (sarcasm, negation)',
        'Demo interactive với Gradio',
      ],
      en: [
        'Text preprocessing: tokenization, lemmatization, stopwords',
        'TF-IDF + Logistic Regression baseline reaching F1 ~0.85',
        'Fine-tune BERT with the HuggingFace Trainer API',
        'Detailed error analysis identifying edge cases (sarcasm, negation)',
        'Interactive demo with Gradio',
      ],
    },
  },
  {
    slug: 'sales-forecasting-timeseries',
    title: {
      vi: 'Dự báo doanh số (Time Series)',
      en: 'Sales Forecasting (Time Series)',
    },
    tagline: {
      vi: 'Forecast doanh số bán lẻ với Prophet, ARIMA, và LightGBM.',
      en: 'Retail sales forecasting with Prophet, ARIMA, and LightGBM.',
    },
    description: {
      vi: 'Bài toán dự báo doanh số chuỗi cửa hàng bán lẻ (Walmart M5 hoặc Rossmann dataset). Phân tích seasonality, trend, holiday effect. So sánh 3 cách tiếp cận: thống kê truyền thống (ARIMA/SARIMA), Prophet của Meta, và gradient boosting (LightGBM với time-based features). Evaluate bằng RMSE/MAPE trên rolling validation.',
      en: 'Forecast retail store sales (Walmart M5 or Rossmann dataset). Analyze seasonality, trend, and holiday effects. Compare 3 approaches: classical statistics (ARIMA/SARIMA), Meta\'s Prophet, and gradient boosting (LightGBM with time-based features). Evaluate with RMSE/MAPE on rolling validation.',
    },
    techStack: [
      'Python',
      'Prophet',
      'statsmodels',
      'LightGBM',
      'pandas',
      'plotly',
      'Jupyter',
    ],
    status: 'planned',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'Time series decomposition: trend, seasonality, residual',
        'Feature engineering cho time series: lag, rolling, calendar features',
        'Rolling-origin cross-validation (không leakage)',
        'So sánh 3 approaches với metric RMSE/MAPE',
        'Interactive forecast plot với Plotly',
      ],
      en: [
        'Time series decomposition: trend, seasonality, residuals',
        'Time series feature engineering: lag, rolling, calendar features',
        'Rolling-origin cross-validation (leakage-free)',
        '3 approaches compared on RMSE/MAPE',
        'Interactive forecast plots with Plotly',
      ],
    },
  },
];

export const skills = {
  languages: ['Python', 'SQL'],
  'ML / Stats': [
    'scikit-learn',
    'XGBoost',
    'LightGBM',
    'statsmodels',
    'Hypothesis testing',
    'A/B testing',
  ],
  'Deep Learning / NLP': [
    'PyTorch (learning)',
    'HuggingFace Transformers',
    'NLTK',
  ],
  'Data Analysis': ['pandas', 'NumPy', 'EDA workflow'],
  Visualization: ['matplotlib', 'seaborn', 'plotly'],
  'Deploy / Tools': [
    'Streamlit',
    'Gradio',
    'Jupyter',
    'Docker (basics)',
    'Git',
  ],
  Databases: ['PostgreSQL', 'BigQuery', 'DuckDB'],
};

export const timeline: Array<{ date: string; vi: string; en: string }> = [
  {
    date: '2026-05',
    vi: 'Bắt đầu hành trình Data Science, xây dựng portfolio và 3 dự án ML end-to-end (classification, NLP, time series).',
    en: 'Started the Data Science journey, building this portfolio and 3 end-to-end ML projects (classification, NLP, time series).',
  },
  {
    date: '2026-04',
    vi: 'Học thống kê ứng dụng: hypothesis testing, regression analysis, A/B testing. Hoàn thành SQL nâng cao.',
    en: 'Learned applied statistics: hypothesis testing, regression analysis, A/B testing. Completed advanced SQL.',
  },
  {
    date: '2026-03',
    vi: 'Học Python cho data science: pandas, NumPy, scikit-learn cơ bản, EDA workflow chuẩn.',
    en: 'Learned Python for data science: pandas, NumPy, scikit-learn basics, standard EDA workflow.',
  },
];
