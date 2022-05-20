FROM cypress/included:9.6.1

WORKDIR /

COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json

RUN npm run test