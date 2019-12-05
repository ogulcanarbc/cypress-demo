docker run -it -v $PWD:/e2e -w /e2e cypress/included:3.6.0 --browser=$1 npx cypress run --spec cypress/integration/examples/$2
