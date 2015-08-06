
all:
	npm install
	gulp

mrproper:
	rm -rf build node_modules

.PHONY: all mrproper
