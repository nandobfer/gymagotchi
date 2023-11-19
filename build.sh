#!/bin/bash

ssh_profile="root@agencyboz"
user="nando1964"
domain="nandoburgos.dev"
subdomain="gymagotchi.nandoburgos.dev"

path="/home/${domain}/${subdomain}"

yarn build
echo 'Uploading build to server'
scp -r dist/* ${ssh_profile}:${path}
ssh ${ssh_profile} "chown -R ${user}:${user} ${path}/*"
