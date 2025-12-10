## devops-project  
Complete CI/CD + Terraform + Ansible + Kubernetes + Helm + Monitoring Stack

---

# 🚀 Overview
This repository includes:

- Frontend (Vite)
- Backend API (Node.js)
- Docker
- Kubernetes Deployments (Helm)
- GitHub Actions CI/CD
- Terraform (AWS EKS)
- Ansible (Dev environment automation)
- Prometheus + Grafana (Monitoring)
- Kubecost (Cost visibility)
- SonarQube (Code quality)

---

# 📁 Important Folders

| Folder | Purpose |
|--------|---------|
| frontend/ | Static Vite app |
| backend/ | Node.js REST API |
| helm/fullstack-chart | Helm deployment |
| infra/prod | Terraform AWS EKS |
| ansible/ | Local dev environment provisioning |
| monitoring/ | Prometheus, Grafana, Kubecost |
| .github/workflows | CI/CD pipelines |

---

# 🐳 Docker Build

Frontend:
```sh
docker build -t frontend:local ./frontend
