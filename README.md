## Riset Microservice Service Mesh

```
Mini MicroServices App with ReactJS for Frontend & NodeJS for Backend.
```

![](docs/img/image9.png)

```
./client is ReactJS for Frontend. Running on Port 3000
./posts is NodeJS for Backend Posts Service. Running on Port 4000
./comments is NodeJS for Backend Comments Service. Running on Port 4001
```
## Environtment Variable
### create your .env.NODE_ENV in all service
copy from .env.example 
```
cp .env.example .env.dev
# Note that dev is our NODE_ENV value
```
### .env.dev ( for posts and comments service)
```
PORT = 4000
MESSAGE='This is development environment!'

# MONGODB

MONGO_ROOT_USERNAME='root'
MONGO_ROOT_PASSWORD='nathan123'
DB_HOST='localhost'
DB_NAME='posts'
```

### .env.dev ( for client service)
```
REACT_APP_NODE_ENV='Development Environment'
REACT_APP_POST_BASE_URL='http://localhost:4000'
REACT_APP_COMMENT_BASE_URL='http://localhost:4001'
```


## To Getting Start ( Dev Environment ) ?
### Posts and Comments Service
```
$ npm install
$ NODE_ENV=dev npm start
```
### Client Service
```
$ npm install
$ npm run start:dev
```
## To Containerization ?
```
$ docker build -t image_name .
```

## Deploy on K8s Cluster ?
```
$ kubectl create ns postsapp

$ cd infra/k8s
$ kubectl apply -f . -n postsapp

$ cd MongoDB
$ kubectl apply -f . -n postsapp

$ cd MongoDB-posts
$ kubectl apply -f . -n postsapp

$ cd MongoDB-comments
$ kubectl apply -f . -n postsapp
```

## Installing (Istio, Grafana) :
```
$ curl -L https://istio.io/downloadIstio | sh -
$ cd istio-1.12.1
$ export PATH=$PWD/bin:$PATH
$ istioctl operator init  
$ kubectl get all -n istio-operator
$ kubectl create ns istio-system
$ kubectl apply -f - <<EOF
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
  namespace: istio-system
  name: example-istiocontrolplane
spec:
  profile: demo
EOF
$ kubectl get all -n istio-system

Change Service to LoadBalancer :
$ kubectl edit svc istio-ingressgateway -n istio-system
$ kubectl get svc istio-ingressgateway -n istio-system

Install Prometheus :
$ kubectl apply -f https://gitlab.com/gilangvperdana/microservices-app-on-k-8-s-with-istio/-/raw/master/addons/prometheus.yaml

Install Grafana (Optional) :
$ kubectl apply -f https://gitlab.com/gilangvperdana/microservices-app-on-k-8-s-with-istio/-/raw/master/addons/grafana.yaml 

Change Service Graana to LoadBalancer:
$ kubectl edit svc grafana -n istio-system
$ http://<ip-external-service-grafana>:3000
```

## Monitoring with Kiali?
```
$ cd istio-1.12.1
$ kubectl apply -f samples/addons/kiali.yaml

Change service to LoadBalancer:
$ kubectl edit svc kiali -n istio-system
$ kubectl get svc kiali -n istio-system
http://ip_external_kiali:20001

After Kiali was Deployed, Inject sidecard to all running pod :
$ kubectl label namespace postsapp istio-injection=enabled --overwrite
$ kubectl get namespace -L istio-injection

Monitoring on Kiali Dashboard :
http://ip_external_kiali:20001
```

