### Clone

```bash
git clone https://github.com/ngmaibulat/mailgw-config.git
cd mailgw-config
rm -fr .git
```

### Run scripts

```bash
bash scripts/01-packages.sh
bash scripts/02-node.sh
bash scripts/03-gen-config.sh
bash scripts/04-pull-image.sh
bash scripts/05-run-container.sh
bash scripts/06-dnat.sh
bash scripts/07-test.sh
```

### Test

From `another` host

```bash
nc -vz host 2525
swaks -s host -f addr@domain -t addr@domain
```
