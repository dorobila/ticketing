https://34.89.29.209/api/users/currentuser - link to google cloud



May: 6th, 7th, 8th, 11th
June: 15th - 19th




docker build -t dorobila/posts
docker run [image id or image tag]
docker run -it [image id or image tag] [cmd]
docker ps                                    -> kubectl get pods
docker exec -it [container id] [cmd]         -> kubectl exec -t [pod_name] [cmd]
docker logs [container id]                   -> kubectl logs [pod_name]
                                             -> kubectl delete pod [pod_name]
                                             -> kubectl apply -f [config file name]
                                             -> kubectl describe pod [pod_name]
                                             -> kubectl get deployments
                                             -> kubectl describe deployments [depl name]
                                             -> kubectl apply -f [config file name]
                                             -> kubectl delete deployment [depl_name]
                                             -> kubectl rollout restart deployment [depl_name]

                                             kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/mandatory.yaml
