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

## 4. Usage

To start the server, run this command in the folder:

```bash
$ npm start
```

If the server is able to start with your configuration, you will see this in
your terminal:

```bash
Stormpath Ready
Application running at http://localhost:3000
```

The application should now be running in your browser at [http://localhost:3000](http://localhost:3000).

## Support

We're here to help if you get stuck.  There are several ways that you can get in touch with a member of our team:

* Send an email to [support@stormpath.com](mailto:support@stormpath.com)
* Open a Github Issue on this repository.
* Join us on our Slack channel: [https://talkstormpath.shipit.xyz/](https://talkstormpath.shipit.xyz/)

[Node.js]: https://nodejs.org
[Stormpath]: https://stormpath.com
[Stormpath Admin Console]: https://api.stormpath.com
[stormpath-sdk-react]: https://github.com/stormpath/stormpath-sdk-react
[express-stormpath]: https://github.com/stormpath/express-stormpath
