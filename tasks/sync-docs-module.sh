#!/usr/bin/env bash

rsync -av --progress \
./ ./docs/node_modules/retoaster \
--exclude=node_modules \
--exclude=.git \
--exclude=docs \
--exclude=src
