
### Run Container

podman rm mailgw

export dir=`pwd`
podman run --name mailgw \
 --mount type=bind,source=$dir/config,target=/opt/mailgw/config \
 -p 2525:2525 \
 -d ngmaibulat/mailgw

echo ""
echo ""

podman ps

export host=`hostname`
echo "See containers in web ui: https://$host:9090/podman"
