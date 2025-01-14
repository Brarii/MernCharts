# MernDevops
**DevOps Mini-Project Report**

### **Project Overview**
This project focused on containerizing and deploying a MERN stack application using Docker, Kubernetes, Jenkins, Helm, and ArgoCD. The goal was to establish a CI/CD pipeline and deploy the application on a Kubernetes cluster with advanced configuration management and observability tools.

---

### **1. Docker Implementation**

#### **Dockerfiles Creation**
- **Backend**: A `Dockerfile` was created for the Node.js backend service.
- **Frontend**: A `Dockerfile` was created for the React-based frontend.
- **MongoDB**: A `Dockerfile` was set up for MongoDB (using an official image).

#### **Docker Compose**
- A `docker-compose.yml` file was written to orchestrate all three services (backend, frontend, and MongoDB).
- The `docker-compose build` command was used to build the images.
- The `docker-compose up` command was used to create a containerized environment running all three services.

#### **Result**
Successfully built and ran the MERN stack application with interconnected containers.

---

### **2. CI/CD Pipeline with Jenkins**

#### **Pipeline Setup**
- Installed and configured Jenkins on the local machine.
- Created a Jenkins pipeline that:
  1. Pulled the source code from the Git repository.
  2. Built the Docker images for the backend, frontend, and MongoDB.
  3. Pushed the Docker images to DockerHub.

#### **Tools Used**
- Jenkins plugins: Docker, Git, Pipeline.
- DockerHub for image storage.

#### **Result**
Successfully automated the image building and pushing process to DockerHub.

---

### **3. Kubernetes Deployment**

#### **Manifests Created**
- **ConfigMap**:
  - `app-configmap.yaml` was created to store environment-specific configurations.
- **Deployment**:
  - Separate deployment files were created for the backend, frontend, and MongoDB.
- **Service**:
  - Service files were created to expose the deployments and manage interconnectivity.

#### **Commands Used**
- Applied manifests:
  ```bash
  kubectl apply -f app-configmap.yaml
  kubectl apply -f deployment.yaml
  kubectl apply -f service.yaml
  ```
- Verified resources:
  ```bash
  kubectl get pods,services
  ```

#### **Result**
Successfully deployed the application on the Kubernetes cluster, with services enabling communication between components.

---

### **4. Helm Chart Implementation**

#### **Helm Chart Creation**
- Installed Helm and created Helm charts for:
  - **Frontend**: client
  - **Backend**: Deployment, service, and configuration.
  - **MongoDB**: Deployment and service.

#### **Commands Used**
- Created charts:
  ```bash
  helm create client
  helm create server
  helm create mongo
  ```
- Installed Helm releases:
  ```bash
  helm install client ./client
  helm install server ./server
  helm install mongo ./mongo
  ```

#### **Result**
Successfully managed Kubernetes resources using Helm charts, simplifying deployments and configurations.

---

### **5. ArgoCD Integration**

#### **Installation and Configuration**
- Installed ArgoCD to manage Kubernetes deployments.
- Connected ArgoCD to the Git repository hosting the Kubernetes manifests and Helm charts.

#### **Issues Encountered**
- Errors occurred during the repository synchronization in ArgoCD, preventing successful deployment.

#### **Next Steps**
- Troubleshoot and resolve ArgoCD synchronization issues.
- Complete the deployment pipeline with ArgoCD.

---

### **Achievements**
- Successfully containerized the MERN stack application using Docker.
- Established a CI/CD pipeline with Jenkins to automate image building and pushing.
- Deployed the application on Kubernetes with separate manifests for backend, frontend, and MongoDB.
- Simplified Kubernetes deployments with Helm charts.
- Integrated ArgoCD for GitOps-based deployment management.

### **Pending Tasks**
- Debug and complete ArgoCD integration.
- Enhance monitoring and observability (Prometheus and Grafana).

---

### **Key Learnings**
- Docker and Docker Compose streamlined containerization and multi-service management.
- Jenkins pipelines simplified CI/CD processes.
- Kubernetes provided scalability and reliability for application deployment.
- Helm charts optimized Kubernetes resource management.
- ArgoCD highlighted the potential of GitOps, although debugging is required.

---

### **Conclusion**
This project demonstrated the power of modern DevOps tools and practices in deploying a full-stack application. By addressing the remaining issues, the pipeline will be fully operational and production-ready.

