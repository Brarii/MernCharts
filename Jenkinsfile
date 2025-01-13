pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerID') // Add Docker Hub credentials in Jenkins
        IMAGE_NAME_FRONTEND = 'brari0/mernproj-frontend'
        IMAGE_NAME_BACKEND = 'brari0/mernproj-backend'
    }
    stages {
        stage('Build Frontend Image') {
            steps {
                script {
                    dockerImageFrontend = docker.build("${IMAGE_NAME_FRONTEND}", "./frontend")
                }
            }
        }
        stage('Build Backend Image') {
            steps {
                script {
                    dockerImageBackend = docker.build("${IMAGE_NAME_BACKEND}", "./backend")
                }
            }
        }
        stage('Scan Frontend Image') {
            steps {
                script {
                    sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
                    aquasec/trivy:latest image --exit-code 0 \
                    --severity LOW,MEDIUM,HIGH,CRITICAL \
                    ${IMAGE_NAME_FRONTEND}
                    """
                }
            }
        }
        stage('Scan Backend Image') {
            steps {
                script {
                    sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
                    aquasec/trivy:latest image --exit-code 0 \
                    --severity LOW,MEDIUM,HIGH,CRITICAL \
                    ${IMAGE_NAME_BACKEND}
                    """
                }
            }
        }
        stage('Push Images to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', "${DOCKERHUB_CREDENTIALS}") {
                        dockerImageFrontend.push()
                        dockerImageBackend.push()
                    }
                }
            }
        }
    }
    post {
        always {
            script {
                dockerImageFrontend?.delete()
                dockerImageBackend?.delete()
            }
        }
    }
}
