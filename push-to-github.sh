#!/bin/bash

# Script to push changes to GitHub and deploy to Vercel
# Run this from your local Terminal

echo "🚀 Pushing to GitHub and deploying to Vercel..."

# Navigate to project directory
cd /Users/dankeegan/Placement-quest

# Show status
echo "📊 Git Status:"
git status

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -eq 0 ]; then
    echo "✅ Successfully pushed to GitHub!"
    
    # Deploy to Vercel
    echo "🔄 Deploying to Vercel..."
    VERCEL_TOKEN=gAYaR1sjB2NTXl4oYQ4CrmeY npx vercel --prod --yes --token gAYaR1sjB2NTXl4oYQ4CrmeY
    
    echo "🎉 Deployment complete! Check https://placement.quest"
else
    echo "❌ Failed to push to GitHub. Please check your authentication."
    echo "You may need to:"
    echo "1. Set up GitHub personal access token"
    echo "2. Or use GitHub Desktop app"
fi