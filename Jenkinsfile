pipeline {
  /* Use the official Node.js image for all stages */
  agent {
    docker {
      image 'node:16'          // picks a Node 16 image with npm built-in
      args  '-u root:root'     // so npm install can write to workspace
    }
  }

  environment {
    DOCKER_IMAGE_NAME = "your-dockerhub-username/your-image-name"
    DOCKER_CREDENTIALS = 'dockerhub-credentials'
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/tarunsihag/zenith.git', branch: 'main'
      }
    }

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

    stage('Build Docker Image') {
      steps {
        script {
          docker.build("${DOCKER_IMAGE_NAME}:latest", '.')
        }
      }
    }

    stage('Push Docker Image') {
      steps {
        script {
          docker.withRegistry('https://registry.hub.docker.com', DOCKER_CREDENTIALS) {
            docker.image("${DOCKER_IMAGE_NAME}:latest").push()
          }
        }
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker pull ${DOCKER_IMAGE_NAME}:latest
          docker stop running-app || true
          docker rm   running-app || true
          docker run -d --name running-app -p 3000:3000 ${DOCKER_IMAGE_NAME}:latest
        '''
      }
    }
  }

  post {
    always { cleanWs() }
    success { echo '✅ Pipeline complete!' }
    failure { echo '❌ Pipeline failed!' }
  }
}
