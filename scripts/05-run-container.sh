
### Run Container

export dir=`pwd`
podman run --name mailgw \
 --mount type=bind,source=$dir/config,target=/opt/mailgw/config \
 -d ngmaibulat/mailgw

