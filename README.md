### To make an image
docker build -t your-image-name .

### to make  a container
docker run -d -p 7775:3000 --name my-container your-image-name
