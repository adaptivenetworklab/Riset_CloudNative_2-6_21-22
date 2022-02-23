# Istio Feature
## - TLS 
encrypted communication between service and encrypted trafic to istio ingress gateway
```bash
  - port:
      number: 443
      name: https
      protocol: HTTPs
    tls:
      mode: SIMPLE
      credentialName: post-credential
    hosts: 
    - "post.com"
```
## - Request Routing
about service discovery in service mesh
```bash
  - match:
    - uri:
        prefix: /
    route:
```
## - Traffic Splitting
split incoming traffic workload to pod
```bash
    - destination:
        host: client-srv.postsapp.svc.cluster.local
        port:
          number: 3000
        subset: client-v1
      weight: 0
    - destination:
        host: client-srv.postsapp.svc.cluster.local
        port:
          number: 3000
        subset: client-nuxt-v1
      weight: 100
```
## - Traffic Mirroring
mirorring traffic into service
```bash
    mirror:
      host: client-srv.postsapp.svc.cluster.local
      subset: client-v1
    mirrorPercentage:
      value: 100.0
```
---
## Apply istio feature
```bash
kubectl apply -f gateway.yaml
kubectl apply -f destination-rule.yaml
kubectl apply -f virtual-service.yaml
```