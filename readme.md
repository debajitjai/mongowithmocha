Thanks to the awesome tutorial from [Hitesh Choudhary](https://www.youtube.com/playlist?list=PLRAV69dS1uWTaoxyeBbKpAEF90i4ijUQZ), this is a starter code to explore mongodb with nodejs and mocha.

There are few deviation from the tutorial and it is done so to work with different schema. The profile.js is self explanatory.

**But, first setup the environment:**

For Ubuntu:

Install ndoe.js if nedeed
https://github.com/nodesource/distributions/blob/master/README.md#debinstall

Install Docker if needed
https://docs.docker.com/install/linux/docker-ce/ubuntu/

Install robo3t
```
cd <local_path>
#wget <sourcefile from robomongo.org>
wget https://download-test.robomongo.org/linux/robo3t-1.3.1-linux-x86_64-7419c406.tar.gz

tar -xvzf <local_path>/robo3t-1.3.1-linux-x86_64-7419c406.tar.gz
cd <local_path>/robo3t-1.3.1-linux-x86_64-7419c406/bin
./robo3t
#finally add this path to .profile and source .profile to launch robo3t from any folder  

export ROBO3TPATH=<local_path>/robo3t-1.3.1-linux-x86_64-7419c406
export PATH=$PATH:$ROBO3TPATH/bin
```

**Launch Mongodb on docker**
```
mkdir datadir
docker run --name my-mongo -p 8000:27017 -v $PWD/datadir:/data/db -d mongo
docker ps
#to connect 
docker exec -it <container id>  bash
#launch mong
mongo
show dbs
```
Also connect using robo3t gui.

**git clone and npm init**
```
git clone https://github.com/debajitjai/mongowithmocha.git
cd mongowithmocha
npm init
#all questions are default except for test command: mocha
npm install mocha mongoose nodemon
```

to run test:
```
npm run test
```
At this point you should see an output like:
```
> mocha



  Create record to Mongodb (CRUD#1)
    ✓ Create user in DB

  Delete record from Mongodb (CRUD#4)
    ✓ Delete user profile

  Read record from Mongodb (CRUD#2)
    ✓ Read user profile

  Update record in Mongodb (CRUD#3)
    ✓ update user profile


  4 passing (276ms)

```
