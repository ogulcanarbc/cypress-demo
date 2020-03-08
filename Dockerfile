FROM cypress/browsers:node13.6.0-chrome80-ff72
ADD . demo-docker-cypress
WORKDIR demo-docker-cypress
RUN yarn add cypress@4.0.0
ENTRYPOINT ["yarn"]