rm -rf ./ccmu/
git clone https://github.com/2767mr/ccmu
cd ccmu
go mod download
GOOS=js GOARCH=wasm go build -o ../ccmu.wasm .
cd ..