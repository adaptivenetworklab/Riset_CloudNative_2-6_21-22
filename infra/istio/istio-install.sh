#!/bin/bash

curl -L https://istio.io/downloadIstio | ISTIO_VERSION=1.12.1 sh - 
mv istio-1.12.1 ~/istio-1.12.1
cd ~/istio-1.12.1
export PATH=$PWD/bin:$PATH
# init istio operator
istioctl operator init  
kubectl get all -n istio-operator
# install istio using istiooperator
kubectl create ns istio-system
kubectl apply -f - <<EOF
apiVersion: install.istio.io/v1alpha1
kind: IstioOperator
metadata:
  namespace: istio-system
  name: example-istiocontrolplane
spec:
  profile: demo
EOF
# verify istio installation
kubectl get all -n istio-system
