FROM node:10-alpine

WORKDIR /opt/app

ENV PORT=80

# this is the script which will run on start
RUN touch /usr/bin/start.sh 

# daemon for cron jobs
RUN echo 'echo will install crond...' >> /usr/bin/start.sh
RUN echo 'crond' >> /usr/bin/start.sh

# Basic npm start verification
RUN echo 'nb=`cat package.json | grep start | wc -l` && if test "$nb" = "0" ; then echo "*** Boot issue: No start command found in your package.json in the scripts. See https://docs.npmjs.com/cli/start" ; exit 1 ; fi' >> /usr/bin/start.sh

RUN echo 'npm install --production' >> /usr/bin/start.sh

# npm start, make sure to have a start attribute in "scripts" in package.json
RUN echo 'npm start' >> /usr/bin/start.sh
