echo "Running Cypress e2e tests headlessly without copying files"
docker run -it -v $PWD:/cypressdemo -w /cypressdemo cypress/included:3.6.0 --browser=$1 npx cypress run --spec cypress/integration/examples/$2

