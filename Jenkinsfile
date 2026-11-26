pipeline {
    agent any

    triggers {
        pollSCM('* * * * *')
    }

    environment {
        DOCKER_IMAGE  = "kartik46/react-app"
        DEPLOY_SERVER = "ubuntu@YOUR_EC2_IP"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "PATH=${env.PATH}"
                echo "ComSpec=${env.ComSpec}"
                bat 'npm install --legacy-peer-deps'
            }
        }

        stage('Build App') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
    }
}