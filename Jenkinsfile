pipeline {
  agent any

  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/tarunsihag/zenith'
      }
    }

    stage('Install Dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('Build') {
      steps {
        bat 'npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        bat 'docker build -t my-react-app .'
      }
    }

    stage('Docker Run') {
      steps {
        bat 'docker stop my-react-app || echo No container'
        bat 'docker rm my-react-app || echo No container'
        bat 'docker run -d -p 8080:80 --name my-react-app my-react-app'
      }
    }
  }
}
