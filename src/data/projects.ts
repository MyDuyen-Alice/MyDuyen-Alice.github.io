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
    slug: 'batch-etl-ecommerce',
    title: {
      vi: 'Pipeline ETL dữ liệu E-commerce',
      en: 'E-commerce Batch ETL Pipeline',
    },
    tagline: {
      vi: 'ETL hàng ngày từ dataset Olist với Airflow, Pandas và PostgreSQL.',
      en: 'Daily ETL from Olist dataset using Airflow, Pandas and PostgreSQL.',
    },
    description: {
      vi: 'Trích xuất dữ liệu bán hàng e-commerce, làm sạch, chuẩn hóa, load vào data warehouse và schedule chạy hàng ngày bằng Apache Airflow trong Docker. Có data quality checks và unit tests.',
      en: 'Extract e-commerce sales data, clean and normalize it, load into a data warehouse, and schedule daily runs with Apache Airflow in Docker. Includes data quality checks and unit tests.',
    },
    techStack: [
      'Python',
      'Pandas',
      'SQL',
      'Apache Airflow',
      'PostgreSQL',
      'Docker',
      'Great Expectations',
      'pytest',
    ],
    status: 'planned',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'Pipeline ETL chạy schedule hàng ngày qua Airflow DAG',
        'Data quality checks tự động với Great Expectations',
        'Triển khai local bằng Docker Compose, dễ reproduce',
        'Kiến trúc rõ ràng, có architecture diagram',
      ],
      en: [
        'Daily scheduled ETL pipeline via Airflow DAG',
        'Automated data quality checks with Great Expectations',
        'Local deployment with Docker Compose, easily reproducible',
        'Clear architecture with diagram',
      ],
    },
  },
  {
    slug: 'dbt-warehouse-analytics',
    title: {
      vi: 'Data Warehouse + Analytics với dbt',
      en: 'Data Warehouse + Analytics with dbt',
    },
    tagline: {
      vi: 'Star schema, dbt models, và dashboard analytics trên BigQuery.',
      en: 'Star schema, dbt models, and analytics dashboards on BigQuery.',
    },
    description: {
      vi: 'Thiết kế data warehouse theo Kimball star schema, viết transformation bằng dbt-core, tạo data marts cho revenue/cohort/LTV analytics, và visualize bằng Metabase.',
      en: 'Design a Kimball-style star schema warehouse, write transformations with dbt-core, build data marts for revenue/cohort/LTV analytics, and visualize with Metabase.',
    },
    techStack: ['dbt-core', 'BigQuery', 'SQL', 'Metabase', 'Git', 'CI tests'],
    status: 'planned',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'Star schema theo phương pháp Kimball',
        'Auto-generated data lineage qua dbt docs',
        'dbt tests đảm bảo data integrity (unique, not_null, relationships)',
        'Dashboard analytics trên Metabase',
      ],
      en: [
        'Star schema following Kimball methodology',
        'Auto-generated data lineage via dbt docs',
        'dbt tests for data integrity (unique, not_null, relationships)',
        'Analytics dashboards on Metabase',
      ],
    },
  },
  {
    slug: 'cloud-pipeline-weather',
    title: {
      vi: 'Cloud Pipeline Serverless với CI/CD',
      en: 'Serverless Cloud Pipeline with CI/CD',
    },
    tagline: {
      vi: 'Ingest API → GCS → BigQuery, deploy qua Terraform và GitHub Actions.',
      en: 'Ingest API → GCS → BigQuery, deployed via Terraform and GitHub Actions.',
    },
    description: {
      vi: 'Pipeline serverless trên GCP: ingest dữ liệu thời tiết hoặc crypto từ API, lưu vào Cloud Storage, transform và load vào BigQuery. Infra quản lý bằng Terraform, CI/CD bằng GitHub Actions.',
      en: 'Serverless pipeline on GCP: ingest weather or crypto data from an API, land in Cloud Storage, transform and load to BigQuery. Infra managed by Terraform, CI/CD via GitHub Actions.',
    },
    techStack: [
      'GCP',
      'BigQuery',
      'Cloud Storage',
      'Cloud Functions',
      'Terraform',
      'GitHub Actions',
      'Python',
    ],
    status: 'planned',
    repoUrl: null,
    demoUrl: null,
    highlights: {
      vi: [
        'Serverless architecture trên GCP free tier',
        'Infra-as-Code với Terraform — reproducible deployment',
        'CI/CD tự động test + deploy qua GitHub Actions',
        'Monitoring và alerting cơ bản với Cloud Logging',
      ],
      en: [
        'Serverless architecture on GCP free tier',
        'Infra-as-Code with Terraform — reproducible deployment',
        'Automated test + deploy CI/CD via GitHub Actions',
        'Basic monitoring and alerting with Cloud Logging',
      ],
    },
  },
];

export const skills = {
  languages: ['Python', 'SQL'],
  libraries: ['Pandas', 'PySpark (learning)', 'Requests', 'pytest'],
  tools: ['Apache Airflow', 'dbt', 'Docker', 'Git', 'Terraform'],
  cloud: ['GCP (BigQuery, GCS, Cloud Functions)', 'AWS (basics)'],
  databases: ['PostgreSQL', 'BigQuery', 'DuckDB'],
  other: ['Linux/Bash', 'CI/CD (GitHub Actions)', 'REST APIs'],
};

export const timeline: Array<{ date: string; vi: string; en: string }> = [
  {
    date: '2026-05',
    vi: 'Bắt đầu hành trình Data Engineering, xây dựng portfolio và 3 dự án end-to-end.',
    en: 'Started the Data Engineering journey, building this portfolio and 3 end-to-end projects.',
  },
  {
    date: '2026-04',
    vi: 'Hoàn thành SQL nâng cao (window functions, CTE) và data modeling cơ bản.',
    en: 'Completed advanced SQL (window functions, CTE) and core data modeling.',
  },
  {
    date: '2026-03',
    vi: 'Học Python cho data: Pandas, xử lý file lớn, viết script automation.',
    en: 'Learned Python for data: Pandas, large file processing, automation scripting.',
  },
];
