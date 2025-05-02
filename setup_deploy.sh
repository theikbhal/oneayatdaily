#!/bin/bash

# Generate a random deployment token
DEPLOY_TOKEN=$(openssl rand -hex 16)

# Create .env file
echo "Creating .env file..."
cat > .env << EOL
DEPLOY_TOKEN=$DEPLOY_TOKEN
PORT=5000
NODE_ENV=production
EOL

# Make deploy script executable
echo "Making deploy script executable..."
chmod +x deploy.sh

# Install dotenv if not already installed
echo "Installing dotenv..."
npm install dotenv

# Update the deployment token in index.html
echo "Updating deployment token in index.html..."
sed -i "s/YOUR_DEPLOY_TOKEN/$DEPLOY_TOKEN/" public/index.html

echo "Setup completed!"
echo "Your deployment token is: $DEPLOY_TOKEN"
echo "Please save this token somewhere safe." 