# 🧪 Projects

## 📦 Super Order Automation - AI-Powered Supplier Order Processing

- **Purpose**: Automates supplier order intake by monitoring email inboxes, extracting structured order data from PDF and Excel attachments, and routing results into a review and export workflow.
- **Highlights**:
  - **Reduced Manual Processing**: Replaces repetitive order-entry work by automatically ingesting supplier emails, parsing attachments, and generating structured order records.
  - **AI-Assisted Data Extraction**: Uses Google Gemini to classify suppliers, extract order details from messy files, and normalize results for downstream business workflows.
  - **Human-in-the-Loop Review**: Includes a Streamlit dashboard for inbox triage, manual uploads, supplier and item management, and correction of extracted orders before export.
  - **Production-Ready Cloud Architecture**: Built as a serverless pipeline on Google Cloud Functions, Cloud Run, Firestore, Pub/Sub, and Cloud Storage for scalable event-driven processing.
- **Technologies**: Python 3.11, Google Vertex AI, Streamlit, Google Cloud Functions, Cloud Run, Firestore, Pub/Sub, Cloud Storage, Google OAuth / Microsoft OAuth, FastAPI, Pydantic, Pandas.
- **Repo**: [Aaron-Tawil/super-order-automation](https://github.com/Aaron-Tawil/super-order-automation)

## 🏷️ Smart Shelf Labels - Automated Retail Signage

- **Purpose**: Automates retail signage generation by processing emailed Excel product updates and producing print-ready PDF shelf labels.
- **Highlights**:
  - **End-to-End Workflow Automation**: Processes incoming product files automatically, generates signage outputs, and pushes status updates through Google Cloud Pub/Sub.
  - **AI-Powered Product Name Cleaning**: Uses Google Gemini to standardize messy ERP product names, including handling formatting issues and Hebrew RTL text.
  - **Waste Reduction Logic**: Checks Firestore state to generate signs only for new products or price changes, reducing unnecessary printing.
  - **Serverless Deployment**: Runs on Google Cloud Functions (Gen 2) with Firestore and Pub/Sub for low-maintenance, event-driven execution.
- **Technologies**: Python 3.10+, Google Cloud Platform (Functions, Firestore, Pub/Sub, Gmail API), Google Gemini API, ReportLab, Pandas.
- **Repo**: [Aaron-Tawil/smart-shelf-labels](https://github.com/Aaron-Tawil/smart-shelf-labels)

## 🔔 TAU Grade Notifier - Serverless Grade Alerts

- **Purpose**: Monitors the Tel Aviv University student portal for grade changes and sends real-time Telegram alerts when grades or exam notebook availability are updated.
- **Highlights**:
  - **Reliable Monitoring Strategy**: Combines direct backend HTTP requests for fast, resilient checks with Playwright-based browser automation for portal details unavailable through the backend alone.
  - **Duplicate Alert Prevention**: Uses persisted JSON diffing in Google Cloud Storage to detect only meaningful changes and avoid redundant notifications.
  - **Low-Maintenance Automation**: Runs as a Dockerized service on Google Cloud Run and is triggered by Cloud Scheduler for fully automated execution.
  - **Clear User Notifications**: Delivers concise Telegram alerts such as grade changes and notebook availability updates.
- **Technologies**: Python 3.11, Playwright, Requests, BeautifulSoup, Telegram Bot API, Docker, Google Cloud Run, Cloud Scheduler, Artifact Registry, Google Cloud Storage.
- **Repo**: [Aaron-Tawil/Grade-Notifier](https://github.com/Aaron-Tawil/Grade-Notifier)

## 📱 Inventory Management App

- **Purpose**: Built an Android app to help warehouse or retail staff retrieve item details quickly through barcode scanning or manual search.
- **Highlights**:
  - **Faster Receiving Workflow**: Improved employee productivity by roughly 20% when receiving new goods.
  - **Practical Mobile UX**: Supported both barcode scanning and manual lookup to fit real-world inventory workflows.
  - **Hybrid Data Strategy**: Combined Firebase cloud sync with Room local storage for reliability and offline-friendly usage.
- **Technologies**: Kotlin, Android, Firebase, Room.
- **Repo**: [Aaron-Tawil/Barcode-Scanner](https://github.com/Aaron-Tawil/Barcode-Scanner)

## 🧠 SymNMF Clustering Engine

- **Purpose**: Implemented a high-performance Symmetric Non-negative Matrix Factorization (SymNMF) clustering pipeline with a C core and Python interface.
- **Highlights**:
  - **Performance-Focused Implementation**: Moved the computational core to C to improve runtime for matrix-heavy clustering operations.
  - **Usable Python Interface**: Wrapped the low-level implementation in a clean Python CLI for easier experimentation and evaluation.
  - **Model Evaluation**: Compared clustering quality against K-Means using silhouette-score analysis.
- **Technologies**: C, Python, NumPy, SciPy, scikit-learn, setuptools, Make/GCC.
- **Repo**: [Aaron-Tawil/SymNMF-Cluster](https://github.com/Aaron-Tawil/SymNMF-Cluster)

## 🗂️ Data Structures Implementations

- **Purpose**: Implemented core data structures as part of university coursework, with a focus on correctness, algorithmic efficiency, and advanced operations.
- **Highlights**:
  - **AVL Tree in Python**: Built a self-balancing binary search tree supporting insertion, deletion, search, and advanced split/join operations.
  - **Fibonacci Heap in Java**: Developed a heap implementation optimized for merge and key-update operations, with applications to graph algorithms such as Dijkstra's.
  - **Strong Algorithmic Foundations**: Reinforced understanding of asymptotic analysis, pointer-heavy logic, and performance-oriented implementation details.
- **Technologies**: Python, Java.
- **Repos**: [AVLTree](https://github.com/Aaron-Tawil/AVLTree) | [FibonacciHeaps](https://github.com/haimtoledano1/FibonacciHeaps)
