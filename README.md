# Creating a website to connect job owners and cnc programmers

## prereqs 
1. Node
2. Mongo

## installation

```bash
$ npm install
```

##You'll need a stormpath.com api key

Provide the **API Key ID**, **API Key Secret**, and **Application Href** to your environment, with one of these strategies:

**Unix Environment Variables:**

```bash
export STORMPATH_CLIENT_APIKEY_ID=YOUR_ID_HERE
export STORMPATH_CLIENT_APIKEY_SECRET=YOUR_SECRET_HERE
export STORMPATH_APPLICATION_HREF=YOUR_APP_HREF
```

**Windows Environment Variables:**

```bash
set STORMPATH_CLIENT_APIKEY_ID=YOUR_ID_HERE
set STORMPATH_CLIENT_APIKEY_SECRET=YOUR_SECRET_HERE
set STORMPATH_APPLICATION_HREF=YOUR_APP_HREF
```

**Place them in a file named `stormpath.yml`, in the directory where you run the dev server:**

```yaml
client:
  apiKey:
    id: YOUR_API_KEY_ID
    secret: YOUR_API_KEY_SECRET
application:
  href: https://api.stormpath.com/v1/applications/XXXX
```

##Usage

To start the server, run this command in the folder:

```bash
$ mongod
$ npm start
```




