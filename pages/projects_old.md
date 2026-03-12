# 🧪 Projects

## 🔔 TAU Grade Notifier - Serverless grade alerts

- **Purpose**: Monitors TAU's student portal for grade changes and pushes real-time Telegram alerts the moment a grade or exam notebook availability is updated.
- **Highlights**:
  - **Dual Monitoring Strategy**: Employs two independent methods for maximum reliability. The primary method uses direct HTTP requests to the university's backend IMS system for fast, efficient data fetching that is resilient to UI changes. The secondary method uses headless browser scraping with Playwright to capture details like exam notebook availability.
  - **Intelligent Change Detection**: Uses JSON diffing with a persisted cache in Google Cloud Storage to prevent duplicate notifications.
  - **Serverless Architecture**: Dockerized and deployed on Google Cloud Run, triggered by Cloud Scheduler for cost-effective, automated execution (e.g., every 10 minutes, Sun-Thu).
  - **Detailed Notifications**: Sends tidy, human-readable Telegram messages (e.g., "Grade changed: 95 -> 100", "Notebook now available").
- **Technologies**: Python 3.11, Playwright, Requests, BeautifulSoup, Telegram Bot API, Docker, Google Cloud Run, Cloud Scheduler, Artifact Registry, Google Cloud Storage.
- **Repo**: [Aaron-Tawil/Grade-Notifier](https://github.com/Aaron-Tawil/Grade-Notifier)


## 🏷️ Smart Shelf Labels - Automated Retail Signage

- **Purpose**: A serverless automation solution that monitors Gmail for Excel files containing product updates and generates professional, print-ready PDF signage. It uses Generative AI to clean and standardize messy ERP product names.
- **Highlights**:
  - **Automated Workflow**: End-to-end automation from email receipt to PDF generation, triggering push notifications via Google Cloud Pub/Sub.
  - **Generative AI Cleaning**: Leverages Google Gemini to intelligently format and standardize product names (e.g., removing internal codes, fixing Hebrew RTL text).
  - **Cost & Resource Optimization**: Smart filtering logic checks Firestore state to only generate signs for new products or price changes, reducing printing waste.
  - **Serverless Architecture**: Built on Google Cloud Platform using Cloud Functions (Gen 2), Firestore for state management, and Pub/Sub.
- **Technologies**: Python 3.10+, Google Cloud Platform (Functions, Firestore, Pub/Sub, Gmail API), Google Gemini API, ReportLab, Pandas.
- **Repo**: [Aaron-Tawil/smart-shelf-labels](https://github.com/Aaron-Tawil/smart-shelf-labels)


## 📱 Android App for Inventory Management with Barcode Scanner (2020)

- Developed an Android app in Kotlin to retrieve item details (price, quantity, etc.) via barcode scanning or manual search.
- Boosted employee productivity (~20% faster in receiving new goods).
- Integrated with Firebase for cloud sync and Room for local data storage.
- **Technologies**: Kotlin, Android, Firebase, Room.
- GitHub repo: [https://github.com/Aaron-Tawil/Barcode-Scanner](https://github.com/Aaron-Tawil/Barcode-Scanner)


## 🧠 SymNMF Clustering - C-Accelerated ML Algorithm

- **Purpose**: High-performance implementation of Symmetric Non-negative Matrix Factorization (SymNMF) for clustering, with a clean Python CLI and C core for speed.
- **Highlights**: End-to-end pipeline (similarity -> normalization -> factorization -> assignment), silhouette-score analysis vs. K-Means, and memory safety checks.
- **Technologies**: C, Python, NumPy, SciPy, scikit-learn, setuptools, Make/GCC.
- **Repo**: [Aaron-Tawil/SymNMF-Cluste](https://github.com/Aaron-Tawil/SymNMF-Cluster)


## 🗂️  Data Structures Projects (University)

- **AVL Tree (Python)**: self-balancing BST with support for insertion, deletion, search, and advanced operations like split/join
- **Fibonacci Heap (Java)**: developed a heap supporting efficient merges and key updates; applied to graph algorithms such as Dijkstra's.
- **Technologies**: Python (AVL Tree), Java (Fibonacci Heap)
- Repos: [AVLTree](https://github.com/Aaron-Tawil/AVLTree) | [Fibonacci Heap](https://github.com/haimtoledano1/FibonacciHeaps)


