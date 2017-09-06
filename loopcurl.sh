#!/bin/bash
for i in {1..10000000}
do
     curl --url "http://localhost:8888/data?id=IBST1&b=25&c=12&d=1&e=198"
done
