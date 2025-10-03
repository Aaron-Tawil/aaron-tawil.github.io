# 🧪 Projects

## 🔔 TAU Grade Notifier - Serverless grade alerts

- **Purpose**: Monitors TAU's student portal and pushes Telegram alerts the moment a grade (or exam notebook availability) changes.
- **Highlights**: Headless login + scrape with Playwright; JSON diffing with a persisted cache in Google Cloud Storage (prevents duplicate pings); Dockerized on Cloud Run and triggered by Cloud Scheduler (for example, every 10 minutes, Sun-Thu); tidy, human-readable Telegram messages (for example, 95 -> 100, "Notebook now available").
- **Technologies**: Python 3.11, Playwright, Telegram Bot API, Docker, Google Cloud Run, Cloud Scheduler, Artifact Registry, Google Cloud Storage.
- **Repo**: [Aaron-Tawil/Grade-Notifier](https://github.com/Aaron-Tawil/Grade-Notifier)

## 🧠 SymNMF Clustering - C-accelerated ML

- **Purpose**: High-performance implementation of Symmetric Non-negative Matrix Factorization (SymNMF) for clustering, with a clean Python CLI and C core for speed.
- **Highlights**: End-to-end pipeline (similarity -> normalization -> factorization -> assignment), silhouette-score analysis vs. K-Means, and memory safety checks.
- **Technologies**: C, Python, NumPy, SciPy, scikit-learn, setuptools, Make/GCC.
- **Repo**: [Aaron-Tawil/SymNMF-Cluste](https://github.com/Aaron-Tawil/SymNMF-Cluste)

## 🗂️  Data Structures Projects (University)

- **AVL Tree (Python)**: self-balancing BST with support for insertion, deletion, search, and advanced operations like split/join
- **Fibonacci Heap (Java)**: developed a heap supporting efficient merges and key updates; applied to graph algorithms such as Dijkstra's.
- **Technologies**: Python (AVL Tree), Java (Fibonacci Heap)
- Repos: [AVLTree](https://github.com/Aaron-Tawil/AVLTree) | [Fibonacci Heap](https://github.com/haimtoledano1/FibonacciHeaps)

## 📱 Android App for Inventory Management with Barcode Scanner (2020)

- Developed an Android app in Kotlin to retrieve item details (price, quantity, etc.) via barcode scanning or manual search.
- Boosted employee productivity (~20% faster in receiving new goods).
- Integrated with Firebase for cloud sync and Room for local data storage.
- **Technologies**: Kotlin, Android, Firebase, Room.
- GitHub repo: [https://github.com/Aaron-Tawil/Barcode-Scanner](https://github.com/Aaron-Tawil/Barcode-Scanner)
