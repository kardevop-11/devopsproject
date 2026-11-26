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

        /* Uncomment these stages once connected to AWS EC2 with Docker:
        stage('Build & Push Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE:latest .'
                withCredentials([usernamePassword(credentialsId: 'docker-hub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker push $DOCKER_IMAGE:latest'
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                withCredentials([sshUserPrivateKey(credentialsId: 'ec2-ssh-key', keyFileVariable: 'SSH_KEY')]) {
                    sh """
                        ssh -o StrictHostKeyChecking=no -i "$SSH_KEY" $DEPLOY_SERVER '
                            sudo docker pull ${DOCKER_IMAGE}:latest
                            sudo docker stop react-app || true
                            sudo docker rm react-app || true
                            sudo docker run -d -p 80:80 --name react-app ${DOCKER_IMAGE}:latest
                        '
                    """
                }
            }
        }
        */
    }
}