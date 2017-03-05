#!/usr/bin/env bash

rollup -i src/ReToaster.js -c rollup.config.js -o dist/ReToaster.js & \
rollup -i src/index.js -c rollup.config.js -o dist/index.js & \
wait
