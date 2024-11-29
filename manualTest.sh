#!/bin/bash

echo '----------------------------------------'
echo 'GET http://localhost:6666/person/1'
echo ''
curl http://localhost:6666/person/1

echo ''
echo ''
echo '----------------------------------------'
echo 'POST http://localhost:6666/person/list'
echo ''
curl -X POST 'http://localhost:6666/person/list'

echo ''
echo ''
echo '----------------------------------------'
echo 'POST http://localhost:6666/person/list?firstName=Donald'
echo ''
curl -X POST 'http://localhost:6666/person/list?firstName=Donald'

echo ''
echo ''
echo '----------------------------------------'
echo 'POST http://localhost:6666/person/list?lastName=Duck'
echo ''
curl -X POST 'http://localhost:6666/person/list?lastName=Duck'

echo ''
echo ''
echo '----------------------------------------'
echo 'POST http://localhost:6666/person/list?firstName=Donald&lastName=Duck'
echo ''
curl -X POST 'http://localhost:6666/person/list?firstName=Donald&lastName=Duck'

echo ''
echo ''
echo '----------------------------------------'
echo 'POST http://localhost:6666/person/' -H 'Content-Type: application/json' -d '{"firstName": "new1", "lastName": "new2"}'
echo ''
curl -X POST 'http://localhost:6666/person/' -H 'Content-Type: application/json' -d '{"firstName": "new1", "lastName": "new2"}'
echo ''
