pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Docker Build') {
            steps {
                sh 'docker build -t your-image-name .'
            }
        }
        stage('Docker Run') {
            steps {
                sh 'docker run -d -p 3000:3000 your-image-name'
            }
        }
    }
}
