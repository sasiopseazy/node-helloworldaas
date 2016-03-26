#HelloWorld as a Service ;-)

This API provides you with a familiar greeting whenever you are feeling lonely

## Running the server

1) Launch the app from the Terminal:

    $ npm start

## Commands 
### GET
A GET call to <pre>'/'</pre> will return the most recent greeting (by default Hello World!)
<code>
{
  "message": "Hello World!"
}
</code>
### POST
A POST call to <pre>'/'</pre> with the following:
<code>
{
  "message": "Greetings Earthlings!"
}
</code>
will persist that as the most recent greeting (see [the test](/test/index.js) for more details)
