echo "Running Cypress e2e tests headlessly without copying files"
docker run -it -v $PWD:/cypressWork -w /cypressWork cypress/included:3.6.0 --browser=$1 npx cypress run --spec cypress/integration/examples/$2

