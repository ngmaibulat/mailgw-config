
### Run Container

podman rm mailgw

podman run --name mailgw \
 --mount type=bind,source=/opt/mailgw/config,target=/opt/mailgw/config \
 --mount type=bind,source=/opt/mailgw/queue,target=/opt/mailgw/queue \
 -p 2525:2525 \
 -d ngmaibulat/mailgw

echo ""
echo ""

podman ps

export host=`hostname`
echo "See containers in web ui: https://$host:9090/podman"
