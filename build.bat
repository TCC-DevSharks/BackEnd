aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin 326960383011.dkr.ecr.us-east-2.amazonaws.com
docker build -t bebevindo -f Dockerfile .
docker tag bebevindo:latest 326960383011.dkr.ecr.us-east-2.amazonaws.com/bebevindo:latest
docker push 326960383011.dkr.ecr.us-east-2.amazonaws.com/bebevindo:latest