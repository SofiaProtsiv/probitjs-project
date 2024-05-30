# Advertise X Bid Adapter Documentation

The task is to develop a basic Prebid adapter for a fictional ad network called "AdvertiseX." AdvertiseX provides a RESTfuI API for fetching ad bids. Your adapter should integrate this API into the Prebid framework to enable bidding from AdvertiseX's ad inventory.

## Overview:

This document outlines the steps to integrate the Advertise X Bid Adapter into the Prebid.js framework. By following these instructions, you will be able to seamlessly incorporate Advertise X's ad inventory into your Prebid.js setup.

## Installation:

**Step 1: Install Dependencies:**

Before proceeding, ensure you have gulp installed globally. If not, run the following command in your terminal:

```bash
npm install -g gulp
```

Next, install the required project dependencies using npm:

```bash
npm install
```

## Integration:

**Step 2: Install Prebid.js Library:**

**2.1 Copy Adapter Files:**

  Navigate to the ```modules``` directory and copy the following files: 
  - ```advertiseXBidAdapter.js```
  - ```advertiseXBidAdapter.md```
  
  to the ```/node_modules/prebid.js/modules``` directory.

**2.2 Install Prebid.js Dependencies:**

Navigate to the Prebid.js directory within node_modules in your terminal:

```bash
cd node_modules/prebid.js
```

**2.3 Install Dependencies:**

Run the following command to install the dependencies for Prebid.js:

```bash
npm install
```

**2.4 Build Prebid.js:**

Once the dependencies are installed, build the advertisexBidAdapter module in the Prebid.js project using gulp:

```bash
gulp build --modules=advertiseXBidAdapter
```

## Testing:

**Step 3 Navigate to the parent directory:**

```bash
cd ../..
```

**Step 4: Start the Project:**

```bash
npm start
```

Once the HTTP server is started and the links become accessible in your browser, I recommend opening the project link in an incognito tab for optimal testing.