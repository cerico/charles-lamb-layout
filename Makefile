setup:
	cd example && npm install
go:
	cd example && npm run dev
deploy:
	cd example && npm run build && npm run deploy
build:
	npm run build
publish:
	npm run build && npm publish
