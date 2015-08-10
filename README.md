game 1
===================

sudo apt-get install curl
curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -

sudo apt-get install --yes nodejs
npm install --ignore-scripts nw@0.12.0
export NWJS_URLBASE=https://github.com/jtg-gg/node-webkit/releases/download/nw-v

git clone https://github.com/bravecaloi/rpi-game-1.git
npm install
cd ..

# RUN: (this will install nwjs packages for arm the first time)
nw rpi-game-1
