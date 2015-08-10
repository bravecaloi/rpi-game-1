Game 1
===================

- sudo apt-get install curl
- curl --silent --location https://deb.nodesource.com/setup_0.12 | sudo bash -

- sudo apt-get install --yes nodejs
- npm install --ignore-scripts nw@0.12.0
- export NWJS_URLBASE=https://github.com/jtg-gg/node-webkit/releases/download/nw-v

- git clone https://github.com/bravecaloi/rpi-game-1.git
- npm install
- cd ..
- nw rpi-game-1 (this will install nwjs packages for arm the first time)



#PYTHON
- sudo apt-get install build-essential python-dev python-smbus python-pip git
- git clone https://github.com/adafruit/Adafruit_Python_MPR121.git
- cd Adafruit_Python_MPR121
- sudo python setup.py install

- sudo python rpi-adafruit-listener.py
