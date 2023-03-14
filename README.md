# Urban waste collection aid project (updating...)
## Production
* http://uwcv2.site
## Microservice architecture
### Client-service technologies:
 * HTML, CSS(preprocessor SCSS), tailwindCSS, Typescript.
 * ReactJS, React-hooks, React-context, Swiper,  React-Toastify, React-Lazy-Load-Image-Component, React-Icons, React-Router-Dom. 
 * Axios, Query-params.
### Backend-system technologies (include five services):
 * NodeJS (ExpressJS), Database (Mysql, mongoDB, redis), Authentication with JWT, Login with google using passortJS, websocket(socketIO).
 * Here is sample about microservice architecture:
<img width="704" alt="samplemicro" src="https://user-images.githubusercontent.com/85759831/224264272-573eda04-3eb6-4614-9b6d-04fbd60c1637.PNG">.
### Amazon web service
 * Amazon Elastic Container Registry (ECR).
 * Elastic Kubernetes Service (Amazon EKS).
 * EC2 instances.
 * Route 53.
 * S3 bucket.
 * AWS Identity and Access Management (IAM).
### Container and Container Orchestration
 * Docker and kubenetes.
### CI/CD tools
 * Github action.
## Setup environment:
* Install git: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
* Clone source: git clone https://github.com/tuan-hcmut/SE-ASS.git
* Change directory and create your new branch: cd SE-ASS && git fetch && git checkout -b <name of your branch>
* Install docker:
1. Register for a DockerHub account: https://hub.docker.com/signup
2. Open PowerShell as Administrator and run the <wsl --install> command.
3. Install Docker Desktop: https://docs.docker.com/desktop/install/windows-install
* Install kubenetes: https://www.youtube.com/watch?v=G9MmLUsBd3g. After installed, click setting button: 
![image](https://user-images.githubusercontent.com/85759831/224271565-5f8746a0-94c5-4534-8c7f-f883ae647b2d.png)
and then select same here
![image](https://user-images.githubusercontent.com/85759831/224271692-e21c179d-9862-4994-a885-a426080592bd.png)
* Install skaffold: https://skaffold.dev/docs/install
* Setup ingress nginx by run command in terminal: kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.6.4/deploy/static/provider/cloud/deploy.yaml
## Features
## Screenshots, Preview!


