#!/usr/bin/env bash

rollup -i src/NotificationToaster.js -c rollup.config.js -o dist/NotificationToaster.js & \
rollup -i src/index.js -c rollup.config.js -o dist/index.js & \
wait
